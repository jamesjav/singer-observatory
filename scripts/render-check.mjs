import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
import { writeFile } from 'node:fs/promises';

const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
const report = {};
const errors = [];
page.on('pageerror', (error) => errors.push(error.message));
const focus = async (coordinates) => {
  await page.evaluate((point) => window.__observatory.focusCoordinates(point), coordinates);
  await page.waitForFunction((point) => {
    const projected = window.__observatory.project(point);
    return projected.visible && Math.abs(projected.x - innerWidth / 2) < 1e-5 && Math.abs(projected.y - innerHeight / 2) < 1e-5;
  }, coordinates);
};
try {
  await page.goto(process.env.APP_URL ?? 'http://127.0.0.1:5192/', { waitUntil: 'networkidle' });
  await page.waitForFunction(() => window.__observatory?.diagnostics().ready);
  await page.locator('.loading-status').waitFor({ state: 'detached' });
  await page.getByTestId('time-paused').click();
  const solar = await page.evaluate(() => window.__observatory.diagnostics().solar);
  await focus(solar);
  report.subsolar = await page.evaluate(({ lat, lon }) => {
    const engine = window.__observatory;
    const sun = engine.scene.getObjectByName('earth-surface').material.uniforms.uSun.value;
    const phi = lat * Math.PI / 180;
    const theta = lon * Math.PI / 180;
    const dot = sun.x * Math.cos(phi) * Math.cos(theta) + sun.y * Math.sin(phi) - sun.z * Math.cos(phi) * Math.sin(theta);
    return { shaderIncidence: dot, picked: engine.pickAt(innerWidth / 2, innerHeight / 2), expected: { lat, lon } };
  }, solar);
  assert.ok(Math.abs(report.subsolar.shaderIncidence - 1) < 1e-8);
  assert.ok(Math.abs(report.subsolar.picked.lat - solar.lat) < 0.001);
  assert.ok(Math.abs(report.subsolar.picked.lon - solar.lon) < 0.001);
  console.log('PASS actual GLSL sun vector and picked subsolar point coincide');
  report.cloudShadow = await page.evaluate(() => {
    const engine = window.__observatory;
    const earth = engine.scene.getObjectByName('earth-surface');
    const clouds = engine.scene.getObjectByName('cloud-shell');
    const atmosphere = engine.scene.getObjectByName('thin-atmosphere');
    const saved = { clouds: clouds.visible, atmosphere: atmosphere.visible, enabled: earth.material.uniforms.uCloudsEnabled.value };
    clouds.visible = false; atmosphere.visible = false; engine.setNoise(false); engine.setQuakes(false); // Independent layers: isolate terrain from both.
    const gl = engine.renderer.getContext();
    const capture = (shadow) => {
      earth.material.uniforms.uCloudsEnabled.value = shadow;
      engine.renderer.render(engine.scene, engine.camera);
      const pixels = new Uint8Array(256 * 256 * 4);
      gl.readPixels(gl.drawingBufferWidth / 2 - 128, gl.drawingBufferHeight / 2 - 128, 256, 256, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
      return pixels;
    };
    const shadowed = capture(1);
    const unshadowed = capture(0);
    let changedPixels = 0; let maxReduction = 0; let sumReduction = 0;
    for (let i = 0; i < shadowed.length; i += 4) {
      const difference = unshadowed[i] + unshadowed[i + 1] + unshadowed[i + 2] - shadowed[i] - shadowed[i + 1] - shadowed[i + 2];
      if (difference > 0) changedPixels++;
      maxReduction = Math.max(maxReduction, difference); sumReduction += difference;
    }
    clouds.visible = saved.clouds; atmosphere.visible = saved.atmosphere; earth.material.uniforms.uCloudsEnabled.value = saved.enabled; engine.setNoise(true); engine.setQuakes(true);
    return { changedPixels, maxReduction, sumReduction };
  });
  assert.ok(report.cloudShadow.changedPixels > 1000 && report.cloudShadow.sumReduction > 1000);
  console.log('PASS cloud sphere casts measured shadows on actual rendered terrain');
  await focus({ lat: -solar.lat, lon: solar.lon >= 0 ? solar.lon - 180 : solar.lon + 180 });
  report.darkOcclusion = await page.evaluate(() => {
    const engine = window.__observatory;
    engine.setNoise(false); engine.setQuakes(false); // Independent layers: isolate terrain from both.
    const stars = engine.scene.getObjectByName('deep-stars');
    const artificialStar = stars.clone();
    artificialStar.geometry = stars.geometry.clone();
    artificialStar.material = stars.material.clone();
    const behind = engine.camera.position.clone().normalize().multiplyScalar(-100);
    const Attribute = stars.geometry.getAttribute('position').constructor;
    artificialStar.geometry.setAttribute('position', new Attribute(new Float32Array(behind.toArray()), 3));
    artificialStar.geometry.setAttribute('aSize', new Attribute(new Float32Array([20]), 1));
    artificialStar.geometry.setAttribute('aIntensity', new Attribute(new Float32Array([1]), 1));
    artificialStar.geometry.computeBoundingSphere();
    engine.scene.add(artificialStar);
    const gl = engine.renderer.getContext();
    const capture = () => {
      engine.renderer.render(engine.scene, engine.camera);
      const pixel = new Uint8Array(4);
      gl.readPixels(gl.drawingBufferWidth / 2, gl.drawingBufferHeight / 2, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixel);
      return [...pixel];
    };
    artificialStar.visible = false;
    const baseline = capture();
    artificialStar.visible = true;
    const withBackgroundStar = capture();
    const shells = ['earth-surface', 'cloud-shell', 'thin-atmosphere'].map((name) => engine.scene.getObjectByName(name));
    const visibilities = shells.map((shell) => shell.visible);
    shells.forEach((shell) => { shell.visible = false; });
    const unobstructedStar = capture();
    shells.forEach((shell, i) => { shell.visible = visibilities[i]; });
    engine.scene.remove(artificialStar);
    artificialStar.geometry.dispose(); artificialStar.material.dispose(); engine.setNoise(true); engine.setQuakes(true);
    const sun = engine.scene.getObjectByName('earth-surface').material.uniforms.uSun.value;
    return { baseline, withBackgroundStar, unobstructedStar, centerSolarIncidence: engine.camera.position.clone().normalize().dot(sun) };
  });
  assert.ok(report.darkOcclusion.centerSolarIncidence < -0.99999);
  assert.deepEqual(report.darkOcclusion.baseline, report.darkOcclusion.withBackgroundStar);
  assert.ok(report.darkOcclusion.unobstructedStar.slice(0, 3).reduce((a, b) => a + b, 0) > 200);
  console.log('PASS opaque night hemisphere fully blocks a bright background star at GPU pixel level');
  report.landmarkLights = await page.evaluate(async () => {
    const image = new Image(); image.src = '/textures/earth/night.jpg'; await image.decode();
    const canvas = document.createElement('canvas'); canvas.width = image.width; canvas.height = image.height;
    const ctx = canvas.getContext('2d'); ctx.drawImage(image, 0, 0);
    return [{ name: 'London', lat: 51.5, lon: 0 }, { name: 'Tokyo', lat: 35.7, lon: 139.7 }, { name: 'New York', lat: 40.7, lon: -74 }].map((point) => {
      const x = (point.lon + 180) / 360 * image.width;
      const y = (90 - point.lat) / 180 * image.height;
      const data = ctx.getImageData(Math.round(x) - 2, Math.round(y) - 2, 5, 5).data;
      let maximumLight = 0;
      for (let i = 0; i < data.length; i += 4) maximumLight = Math.max(maximumLight, (data[i] + data[i + 1] + data[i + 2]) / 3);
      return { ...point, imageX: x, imageY: y, maximumLight };
    });
  });
  assert.ok(report.landmarkLights.every((point) => point.maximumLight > 100));
  console.log('PASS all three geographical reference locations coincide with actual bright city pixels');
  report.performance = await page.evaluate(async () => {
    const times = [];
    await new Promise((resolve) => {
      const frame = (time) => { times.push(time); if (times.length >= 61) resolve(); else requestAnimationFrame(frame); };
      requestAnimationFrame(frame);
    });
    return { averageFps: 60000 / (times[60] - times[0]), calls: window.__observatory.diagnostics().calls, triangles: window.__observatory.diagnostics().triangles };
  });
  assert.deepEqual(errors, []);
  report.status = 'passed';
  console.log(JSON.stringify(report, null, 2));
} catch (error) {
  report.status = 'failed'; report.error = error.stack; console.error(error); process.exitCode = 1;
} finally {
  await writeFile('scripts/artifacts/render-report.json', JSON.stringify(report, null, 2));
  await browser.close();
}
