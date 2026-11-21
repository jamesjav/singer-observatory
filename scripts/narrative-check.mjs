import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
import { writeFile } from 'node:fs/promises';

const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
await context.addInitScript(() => {
  window.__audio = [];
  const NativeAudioContext = window.AudioContext;
  window.AudioContext = class extends NativeAudioContext {
    constructor(...args) {
      super(...args);
      this.testGains = [];
      this.testOscillators = [];
      window.__audio.push(this);
    }
    createGain() { const gain = super.createGain(); this.testGains.push(gain); return gain; }
    createOscillator() { const oscillator = super.createOscillator(); this.testOscillators.push(oscillator); return oscillator; }
  };
});
const page = await context.newPage();
const url = process.env.APP_URL ?? 'http://127.0.0.1:5192/';
const report = { checks: [], screenshots: [], runtimeErrors: [], shaderErrors: [], mediaRequests: [] };
const check = (name, condition) => { assert.ok(condition, name); report.checks.push(name); console.log(`PASS ${name}`); };
const screenshot = async name => { await page.screenshot({ path: `scripts/artifacts/${name}.png`, fullPage: true }); report.screenshots.push(`${name}.png`); };
page.on('pageerror', error => report.runtimeErrors.push(error.message));
page.on('console', message => { if (/THREE.WebGLProgram|VALIDATE_STATUS|Shader Error/i.test(message.text())) report.shaderErrors.push(message.text()); });
page.on('request', request => { if (request.resourceType() === 'media' || /\.(mp3|ogg|wav|mp4)(\?|$)/i.test(request.url())) report.mediaRequests.push(request.url()); });
const waitPhase = phase => page.waitForFunction(value => document.querySelector('main').dataset.phase === value, phase, { timeout: 16000 });
const waitIdle = async () => { await waitPhase('idle'); await page.waitForFunction(() => window.__observatory.diagnostics().controlsEnabled); };
const release = async () => { await page.getByTestId('foil-preview').click(); await page.getByTestId('release-foil').click(); await waitPhase('delivery'); };
const stableLayout = () => page.evaluate(async () => { await Promise.all(document.getAnimations().filter(animation => animation.effect?.getTiming().iterations !== Infinity).map(animation => animation.finished.catch(() => {}))); });
const weatherReady = () => page.waitForFunction(() => ['live', 'cached', 'unavailable'].includes(document.querySelector('.instrument-panel .weather-slot')?.dataset.weatherState), { timeout: 20000 });
const earthPixels = async save => page.evaluate(store => {
  const engine = window.__observatory;
  const earth = engine.scene.getObjectByName('earth-surface');
  const visibility = engine.scene.children.map(child => child.visible);
  engine.scene.children.forEach(child => { child.visible = child === earth; });
  engine.renderer.render(engine.scene, engine.camera);
  const gl = engine.renderer.getContext();
  const width = gl.drawingBufferWidth;
  const height = gl.drawingBufferHeight;
  const pixels = new Uint8Array(width * height * 4);
  gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
  engine.scene.children.forEach((child, i) => { child.visible = visibility[i]; });
  let left = width, right = 0, top = height, bottom = 0, lit = 0, difference = 0;
  for (let i = 0; i < pixels.length; i += 4) {
    if (pixels[i] + pixels[i + 1] + pixels[i + 2] > 40) {
      const x = i / 4 % width, y = Math.floor(i / 4 / width);
      left = Math.min(left, x); right = Math.max(right, x); top = Math.min(top, y); bottom = Math.max(bottom, y); lit++;
    }
    if (window.__earthBaseline) for (let c = 0; c < 3; c++) difference += Math.abs(pixels[i + c] - window.__earthBaseline[i + c]);
  }
  if (store) window.__earthBaseline = pixels;
  return { left, right, top, bottom, lit, ratio: (right - left) / (bottom - top), averageDifference: difference / (width * height * 3) };
}, save);

try {
  await page.goto(url);
  await page.waitForFunction(() => window.__observatory?.diagnostics().ready);
  await page.locator('.loading-status').waitFor({ state: 'detached' });
  await page.waitForFunction(() => document.querySelector('[data-testid=news-source-state]')?.dataset.mode === 'live', { timeout: 20000 });
  const snapshot = await (await context.request.get(`${url}api/news`)).json();
  report.sources = snapshot.sources;
  const quakes = snapshot.events.filter(event => event.kind === 'quake');
  check('USGS is the real natural-signal slot, not a persistent GDELT error', snapshot.sources[0].id === 'usgs' && snapshot.sources[0].state === 'online' && quakes.length > 0 && !snapshot.sources.some(source => source.id === 'gdelt'));
  check('seismic records retain catalog coordinates, dates, depth and magnitude', quakes.every(event => event.precision === 'seismic' && !event.displayCoordinates && Number.isFinite(event.magnitude) && Number.isFinite(event.depthKm) && event.publishedAt));
  check('no AudioContext exists on load or ordinary interaction', await page.evaluate(() => window.__audio.length === 0));
  const quake = quakes[0];
  report.quake = quake;
  // Located rows now focus and request weather without a second locator click.
  await page.locator(`[data-news-id="${quake.id}"]`).click();
  await page.waitForFunction(event => Math.abs(window.__observatory.project(event).x - innerWidth / 2) < 0.0001 && window.__observatory.diagnostics().controlsEnabled, quake);
  await weatherReady();
  await page.evaluate(id => {
    const engine = window.__observatory;
    const index = engine.diagnostics().noise.findIndex(marker => marker.id === id);
    engine.freezeNoise(((1.5 - index * 1.83) % 23 + 23) % 23);
  }, quake.id);
  await page.waitForFunction(id => window.__observatory.diagnostics().noise.find(marker => marker.id === id)?.alpha > 0.5, quake.id);
  check('seismic detail labels an observed epicenter rather than a news approximation', (await page.locator('.observation-log').innerText()).includes('USGS 震中'));
  report.ring = await page.evaluate(id => {
    const engine = window.__observatory;
    const marker = engine.markers.find(item => item.event.id === id);
    const gl = engine.renderer.getContext();
    const capture = visible => {
      marker.mesh.visible = visible;
      engine.renderer.render(engine.scene, engine.camera);
      const pixels = new Uint8Array(gl.drawingBufferWidth * gl.drawingBufferHeight * 4);
      gl.readPixels(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
      return pixels;
    };
    const without = capture(false), withRing = capture(true);
    let changed = 0, maximum = 0;
    for (let i = 0; i < withRing.length; i += 4) {
      const delta = Math.abs(withRing[i] - without[i]) + Math.abs(withRing[i + 1] - without[i + 1]) + Math.abs(withRing[i + 2] - without[i + 2]);
      if (delta > 0) changed++;
      maximum = Math.max(maximum, delta);
    }
    return { changed, maximum, seismic: marker.mesh.material.uniforms.uSeismic.value, scale: marker.mesh.scale.x, sizeCss: engine.diagnostics().noise.find(item => item.id === id).sizeCss, positionError: marker.mesh.position.clone().normalize().distanceTo(engine.camera.position.clone().normalize()) };
  }, quake.id);
  // Quakes now use unit-scale CSS-sized quads (46–64 px), not a world-space 1.8 mesh scale.
  check('real GPU renders a faint concentric ring at the exact USGS epicenter', report.ring.changed > 5 && report.ring.changed < 2000 && report.ring.seismic === 1 && report.ring.scale === 1 && report.ring.sizeCss >= 46 && report.ring.sizeCss <= 64 && report.ring.positionError < 0.000001);
  await screenshot('narrative-seismic');
  await page.getByTestId('cosmic-scale').click();
  const scaleText = await page.locator('.cosmic-scale').innerText();
  check('scale panel labels its population assumption, AU, light seconds and genome', ['碳基低熵体估算', '非人口普查或实时统计', 'AU', '光秒', '1.57%', '隐藏基因：否 · 清理基因：是'].every(text => scaleText.includes(text)));
  const population = await page.locator('.population-estimate strong').innerText();
  await page.waitForFunction(previous => document.querySelector('.population-estimate strong').textContent !== previous, population);
  check('population estimate progresses slowly rather than remaining static', true);
  await screenshot('narrative-scale');
  await page.getByTestId('cosmic-scale').click();
  await page.mouse.move(720, 500);
  await page.keyboard.press('h');
  await page.waitForFunction(() => window.__observatory.diagnostics().cruise && !window.__observatory.cameraTween && getComputedStyle(document.querySelector('.hud')).opacity === '0');
  const cruise = await page.evaluate(async () => {
    const engine = window.__observatory;
    const before = engine.camera.position.clone();
    await new Promise(resolve => setTimeout(resolve, 500));
    const sun = engine.scene.getObjectByName('earth-surface').material.uniforms.uSun.value;
    return { dot: engine.camera.position.clone().normalize().dot(sun), motion: before.distanceTo(engine.camera.position), controls: engine.diagnostics().controlsEnabled, inert: document.querySelector('.hud').inert, stamp: Number(getComputedStyle(document.querySelector('.exhibition-stamp')).opacity), dock: Number(getComputedStyle(document.querySelector('.narrative-dock')).opacity) };
  });
  report.cruise = cruise;
  check('H hides all controls, keeps only a faint timestamp, and disables hidden interactions', cruise.inert && !cruise.controls && cruise.stamp > 0 && cruise.stamp < 0.5 && cruise.dock === 0);
  check('quiet camera moves extremely slowly along the actual terminator', Math.abs(cruise.dot) < 0.001 && cruise.motion > 0 && cruise.motion < 0.015);
  await screenshot('narrative-quiet');
  await page.keyboard.press('h');
  await page.waitForFunction(() => !window.__observatory.diagnostics().cruise && window.__observatory.diagnostics().controlsEnabled);
  check('H restores the observatory controls', !(await page.locator('.hud').getAttribute('inert')) && await page.getByTestId('quiet-mode').isEnabled());
  await page.getByTestId('quiet-mode').click();
  await page.waitForFunction(() => document.querySelector('main').classList.contains('is-quiet'));
  await page.mouse.move(2, 500);
  await page.waitForFunction(() => !document.querySelector('main').classList.contains('is-quiet') && window.__observatory.diagnostics().controlsEnabled);
  check('moving the mouse to the screen edge exits quiet cruise', true);
  await page.getByTestId('deep-space').click();
  await page.waitForFunction(() => window.__observatory.diagnostics().cameraDistance > 679.99);
  const lunar = await page.evaluate(() => window.__observatory.diagnostics().lunar);
  check('deep space reveals the faint 60.34-Earth-radius Moon-orbit reference', lunar.visible && lunar.opacity <= 0.15 && Math.abs(lunar.radius - 384400 / 6371) < 0.00001);
  check('Moon reference is explicitly not a real-time ephemeris', (await page.locator('.lunar-scale-note').innerText()).includes('非实时月球轨迹'));
  check('Moon scale annotation does not overlap the pale-blue-dot caption', await page.evaluate(() => document.querySelector('.lunar-scale-note').getBoundingClientRect().top > document.querySelector('.planet-caption').getBoundingClientRect().bottom + 8));
  await screenshot('narrative-lunar');
  await page.getByTestId('deep-space').click();
  await page.waitForFunction(() => window.__observatory.diagnostics().controlsEnabled && window.__observatory.diagnostics().cameraDistance < 8);
  check('Moon reference disappears again in normal near-Earth view', !(await page.evaluate(() => window.__observatory.diagnostics().lunar.visible)));
  await page.getByTestId('foil-preview').click();
  check('release requires the exact cold inline second confirmation', (await page.locator('.foil-confirmation').textContent()).includes('坐标已广播 · 低熵体无隐藏基因 · 清理成本极低。是否释放封装二向箔？') && await page.locator('[role=dialog]').count() === 0);
  await page.getByRole('button', { name: '暂不清理', exact: true }).click();
  check('cancelling confirmation does not start dimensionality or audio', await page.evaluate(() => window.__observatory.diagnostics().dimensional.phase === 'idle' && window.__audio.length === 0));
  await page.getByTestId('sound-toggle').click();
  await page.waitForFunction(() => window.__audio[0]?.state === 'running' && window.__audio[0].testGains[0]?.gain.value > 0.02);
  check('explicit sound click alone creates and resumes a single quiet AudioContext', await page.evaluate(() => window.__audio.length === 1 && window.__audio[0].testGains[0].gain.value <= 0.035));
  await page.getByTestId('sound-toggle').click();
  await page.waitForFunction(() => window.__audio[0].state === 'suspended');
  check('mute fades to exact zero and suspends the context', await page.evaluate(() => window.__audio[0].testGains[0].gain.value === 0));
  await page.getByTestId('sound-toggle').click();
  await page.waitForFunction(() => window.__audio[0].state === 'running');
  await page.getByLabel('风场矢量', { exact: true }).check();
  await page.waitForFunction(() => ['live', 'cached', 'unavailable'].includes(document.querySelector('[data-wind-state]')?.dataset.windState), { timeout: 20000 });
  report.wind = await page.evaluate(() => window.__observatory.diagnostics().wind);
  check('the cinematic sequence starts with an actual measured wind field', report.wind.samples > 0 && report.wind.visible);
  await page.keyboard.press('h');
  await page.waitForFunction(() => window.__observatory.diagnostics().cruise);
  check('H remains usable while a layer checkbox has keyboard focus', true);
  await page.keyboard.press('h');
  await page.waitForFunction(() => window.__observatory.diagnostics().controlsEnabled);
  await page.getByTestId('time-paused').click();
  report.before = await page.evaluate(() => ({ camera: window.__observatory.camera.position.toArray(), utc: window.__observatory.clock.read(), solar: window.__observatory.diagnostics().solar }));
  report.beforePixels = await earthPixels(true);
  const began = Date.now();
  await release();
  await page.waitForFunction(() => window.__observatory.diagnostics().foil.alpha > 0.9);
  check('a tiny translucent foil arrives before any surface deformation', await page.evaluate(() => { const d = window.__observatory.diagnostics(); return d.foil.visible && d.dimensional.fold === 0 && !d.controlsEnabled; }));
  await screenshot('narrative-foil');
  await waitPhase('folding');
  const frozenWind = await page.evaluate(() => window.__observatory.scene.getObjectByName('atmospheric-wind').material.uniforms.uTime.value);
  await page.waitForFunction(() => window.__observatory.diagnostics().dimensional.fold > 0.48);
  report.mid = await page.evaluate(() => { const data = window.__observatory.diagnostics(); return { dimensional: data.dimensional, wind: data.wind, visibleSignals: data.noise.filter(marker => marker.alpha > 0).length }; });
  check('wind phase freezes during the spatial collapse', await page.evaluate(time => window.__observatory.scene.getObjectByName('atmospheric-wind').material.uniforms.uTime.value === time, frozenWind));
  check('Earth, clouds and atmosphere share the same progressive vertex fold', await page.evaluate(() => ['earth-surface', 'cloud-shell', 'thin-atmosphere'].every(name => window.__observatory.scene.getObjectByName(name).material.uniforms.uFold.value > 0.48)));
  await screenshot('narrative-folding');
  await waitPhase('archived');
  report.durationMs = Date.now() - began;
  check('the complete release-to-archive performance lasts approximately eleven seconds', report.durationMs >= 10500 && report.durationMs <= 14000);
  check('archive reaches the required line, zero signals and no wind', (await page.getByTestId('dimensional-status').innerText()).includes('二维化完成 · 表面噪音归零 · 进程归档') && await page.evaluate(() => window.__observatory.diagnostics().noise.every(marker => marker.alpha === 0) && !window.__observatory.diagnostics().wind.visible));
  check('enabled procedural sound is exactly zero at archive', await page.evaluate(() => window.__audio[0].testGains[0].gain.value === 0));
  report.archivePixels = await earthPixels(false);
  check('actual GPU output unfolds into a broad planar ink map, not a flattened sphere', report.archivePixels.ratio > 1.8 && report.archivePixels.ratio < 2.2 && report.archivePixels.lit > 10000 && report.archivePixels.averageDifference > 1);
  check('surface mesh keeps unit scale while the shader performs the deformation', await page.evaluate(() => { const earth = window.__observatory.scene.getObjectByName('earth-surface'); return earth.scale.x === 1 && earth.scale.y === 1 && earth.scale.z === 1 && earth.material.uniforms.uFold.value === 1; }));
  await screenshot('narrative-archived');
  await page.getByTestId('restore-dimension').click();
  await waitPhase('restoring');
  check('restoration is animated with interaction held until completion', await page.evaluate(() => { const d = window.__observatory.diagnostics(); return d.dimensional.fold > 0 && !d.controlsEnabled; }));
  await waitIdle();
  report.restoredPixels = await earthPixels(false);
  check('restoration reproduces the original lighting and terrain at GPU pixel level', report.restoredPixels.averageDifference < 0.1);
  check('original camera and paused solar clock survive the performance', await page.evaluate(before => { const engine = window.__observatory; return engine.clock.mode === 'paused' && engine.clock.read() === before.utc && engine.camera.position.toArray().every((value, i) => Math.abs(value - before.camera[i]) < 0.00001); }, report.before));
  await page.waitForFunction(() => window.__audio[0].testGains[0].gain.value > 0.02);
  check('sound returns only because it was explicitly enabled before restoration', await page.getByTestId('sound-toggle').getAttribute('aria-pressed') === 'true');
  await screenshot('narrative-restored');
  await release();
  await page.waitForFunction(() => window.__observatory.diagnostics().foil.alpha > 0.4);
  await page.keyboard.press('Escape');
  await waitIdle();
  check('Escape smoothly restores even during foil delivery', true);
  await release();
  await page.waitForFunction(() => window.__observatory.diagnostics().dimensional.fold > 0.22);
  const partialFold = await page.evaluate(() => window.__observatory.diagnostics().dimensional.fold);
  await page.getByTestId('sound-toggle').click();
  await page.waitForFunction(() => window.__audio[0].state === 'suspended');
  await page.getByTestId('restore-dimension').click();
  await waitPhase('restoring');
  const restoreFold = await page.evaluate(() => window.__observatory.diagnostics().dimensional.fold);
  check('mid-collapse restoration starts from the current fold rather than snapping', restoreFold > 0.1 && Math.abs(restoreFold - partialFold) < 0.15);
  await waitIdle();
  check('a user-muted soundscape remains muted after restoration', await page.evaluate(() => window.__audio.length === 1 && window.__audio[0].state === 'suspended' && window.__audio[0].testGains[0].gain.value === 0));
  await page.getByTestId('sound-toggle').click({ clickCount: 3 });
  await page.waitForFunction(() => window.__audio[0].state === 'running' && document.querySelector('[data-testid=sound-toggle]').getAttribute('aria-pressed') === 'true');
  check('rapid sound toggles preserve the latest intent without duplicate contexts', await page.evaluate(() => window.__audio.length === 1));
  await page.getByTestId('sound-toggle').click();
  await page.waitForFunction(() => window.__audio[0].state === 'suspended');
  // Isolate restored terrain from both independent signal layers and default-on labels.
  await page.getByLabel('表面噪音', { exact: true }).uncheck();
  await page.getByLabel('地壳微震', { exact: true }).uncheck();
  await page.getByLabel('地表标注', { exact: true }).uncheck();
  if (await page.getByRole('button', { name: '← 返回噪音流' }).count()) await page.getByRole('button', { name: '← 返回噪音流' }).click();
  await page.waitForFunction(() => window.__observatory.diagnostics().noise.every(marker => marker.alpha === 0));
  await page.mouse.click(749, 475);
  await weatherReady();
  report.restoredWeather = await page.locator('.instrument-panel .weather-slot').innerText();
  check('restored globe still raycasts arbitrary points and fetches real weather', await page.locator('.instrument-panel .weather-slot').getAttribute('data-weather-state') === 'live' && report.restoredWeather.includes('hPa') && await page.locator('.selection-guide path').count() === 1);
  await page.getByLabel('薄层云系', { exact: true }).uncheck();
  check('cloud toggle still controls the actual restored shell', !(await page.evaluate(() => window.__observatory.diagnostics().clouds)));
  await page.getByLabel('薄层云系', { exact: true }).check();
  await page.getByLabel('表面噪音', { exact: true }).check();
  await page.getByLabel('地壳微震', { exact: true }).check();
  await page.getByLabel('地表标注', { exact: true }).check();
  await page.getByTestId('time-live').click();
  check('UTC live mode resumes after restoration', await page.evaluate(() => Math.abs(window.__observatory.clock.read() - Date.now()) < 100));
  for (const viewport of [{ width: 1280, height: 800 }, { width: 768, height: 1024 }, { width: 390, height: 844 }]) {
    await page.setViewportSize(viewport);
    await stableLayout();
    await page.getByTestId('cosmic-scale').click();
    const layout = await page.evaluate(() => {
      const bounds = selector => document.querySelector(selector).getBoundingClientRect().toJSON();
      return { scroll: document.documentElement.scrollWidth, width: innerWidth, dock: bounds('.narrative-dock'), scale: bounds('.cosmic-scale'), log: bounds('.observation-log') };
    });
    check(`narrative controls and scale fit without overflow at ${viewport.width}×${viewport.height}`, layout.width === layout.scroll && layout.dock.left >= 0 && layout.dock.right <= layout.width && layout.scale.bottom < layout.log.top);
    await screenshot(`narrative-${viewport.width}x${viewport.height}`);
    await page.getByTestId('cosmic-scale').click();
  }
  await page.getByTestId('foil-preview').click();
  await page.getByTestId('release-foil').click();
  await waitPhase('delivery');
  check('mobile cinema expands into the whole viewport with restore available', await page.locator('.universe').evaluate(element => Math.abs(element.getBoundingClientRect().height - innerHeight) < 1) && await page.getByTestId('restore-dimension').isVisible());
  await page.waitForFunction(() => window.__observatory.diagnostics().dimensional.fold > 0.45);
  await screenshot('narrative-mobile-fold');
  await page.getByTestId('restore-dimension').click();
  await waitIdle();
  check('mobile restoration restores the ordinary scrollable instrument layout', await page.locator('main').evaluate(element => element.getBoundingClientRect().height >= 1090));
  await stableLayout();
  await page.getByTestId('quiet-mode').click();
  await page.waitForFunction(() => document.querySelector('main').classList.contains('is-quiet'));
  await page.dispatchEvent('canvas', 'pointerdown', { clientX: 2, clientY: 350, pointerType: 'touch' });
  await page.waitForFunction(() => !document.querySelector('main').classList.contains('is-quiet') && window.__observatory.diagnostics().controlsEnabled);
  check('a touch at the mobile edge also restores the hidden HUD', true);
  check('all compiled shader programs remain runnable', await page.evaluate(() => window.__observatory.diagnostics().programs.every(program => program.runnable)));
  check('no external media or audio files are requested', report.mediaRequests.length === 0);
  check('all narrative interactions produce no JavaScript or shader errors', report.runtimeErrors.length === 0 && report.shaderErrors.length === 0);
  report.status = 'passed';
} catch (error) {
  report.status = 'failed'; report.error = error.stack; console.error(error); process.exitCode = 1;
  await page.screenshot({ path: 'scripts/artifacts/narrative-failure.png', fullPage: true }).catch(() => {});
} finally {
  await writeFile('scripts/artifacts/narrative-report.json', JSON.stringify(report, null, 2));
  await browser.close();
}
