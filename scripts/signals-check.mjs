import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
import { writeFile } from 'node:fs/promises';

const browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
const report = { checks: [], errors: [], dpr: [], layouts: [] };
const check = (name, condition) => { assert.ok(condition, name); report.checks.push(name); };
const url = process.env.APP_URL ?? 'http://127.0.0.1:5192/';
let page;
const ready = async p => {
  await p.goto(url);
  await p.waitForFunction(() => window.__observatory?.diagnostics().ready && window.__observatory.diagnostics().signalLayers.initialViewChosen && window.__observatory.diagnostics().controlsEnabled && document.querySelectorAll('.surface-label').length >= 3);
  await p.waitForFunction(() => ['live', 'cached', 'unavailable'].includes(document.querySelector('.instrument-panel .weather-slot')?.dataset.weatherState), null, { timeout: 22000 });
};
const geometry = async p => p.evaluate(() => {
  const rect = e => { const b = e.getBoundingClientRect(); return { x: b.x, y: b.y, width: b.width, height: b.height }; };
  const labels = [...document.querySelectorAll('.surface-label')].map(e => ({ id: e.dataset.signalId, quake: e.classList.contains('seismic-label'), ...rect(e) }));
  const obstacles = [...document.querySelectorAll('.target-panel,.telemetry-panel,.observation-log,.instrument-panel,.planet-caption,.surface-layerbar,.weather-mobile')].filter(e => getComputedStyle(e).display !== 'none').map(rect);
  return { labels, obstacles, width: document.querySelector('main').clientWidth, height: document.querySelector('main').clientHeight };
});
const overlap = (a,b) => a.x < b.x+b.width && a.x+a.width > b.x && a.y < b.y+b.height && a.y+a.height > b.y;
try {
  for (const dpr of [1, 2]) {
    page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: dpr });
    page.on('pageerror', error => report.errors.push(error.message));
    page.on('console', message => { if (/THREE.WebGLProgram|Shader Error/i.test(message.text())) report.errors.push(message.text()); });
    await ready(page);
    const pixel = await page.evaluate(() => {
      const o = window.__observatory;
      const marker = o.markers.find(m => m.event.kind !== 'quake' && m.alpha > 0.8);
      const camera = o.camera.position.clone(), rotation = o.camera.quaternion.clone();
      const visibles = o.scene.children.map(child => [child, child.visible]);
      const markers = o.markers.map(m => [m.mesh, m.mesh.visible]);
      const u = marker.mesh.material.uniforms;
      const alpha = u.uAlpha.value, pulse = u.uPulse.value, highlight = u.uHighlight.value;
      for (const [child] of visibles) child.visible = child === o.noiseGroup;
      for (const [mesh] of markers) mesh.visible = mesh === marker.mesh;
      u.uAlpha.value = 0.82; u.uPulse.value = 0; u.uHighlight.value = 0;
      o.camera.position.copy(marker.mesh.position).setLength(7.5); o.camera.lookAt(0,0,0); o.camera.updateMatrixWorld();
      o.renderer.render(o.scene, o.camera);
      const gl = o.renderer.getContext();
      const pixels = new Uint8Array(32 * 4);
      const cx = gl.drawingBufferWidth / 2, cy = gl.drawingBufferHeight / 2;
      gl.readPixels(cx - 16, cy, 32, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
      const core = Array.from({ length: 32 }, (_,i) => pixels[i*4] > 120 ? 1 : 0).reduce((a,b) => a+b, 0);
      for (const [child, visible] of visibles) child.visible = visible;
      for (const [mesh, visible] of markers) mesh.visible = visible;
      u.uAlpha.value = alpha; u.uPulse.value = pulse; u.uHighlight.value = highlight;
      o.camera.position.copy(camera); o.camera.quaternion.copy(rotation); o.camera.updateMatrixWorld();
      o.renderer.render(o.scene, o.camera);
      return { dpr: o.renderer.getPixelRatio(), cssCore: core/o.renderer.getPixelRatio(), size: u.uSize.value, viewport: u.uViewport.value.toArray(), radius: marker.mesh.position.length() };
    });
    report.dpr.push(pixel);
    check(`DPR ${dpr}: GPU persistent core is 3–5 CSS pixels above clouds`, pixel.cssCore >= 3 && pixel.cssCore <= 5 && pixel.radius > 1.0018 && pixel.dpr === dpr);
    const d = await page.evaluate(() => window.__observatory.diagnostics());
    check(`DPR ${dpr}: every located feed event has an anchor`, d.noise.length === await page.evaluate(() => window.__observatory.newsEvents.length));
    check(`DPR ${dpr}: rear-facing anchors never render`, d.noise.every(n => n.visible || !n.drawn));
    check(`DPR ${dpr}: default includes visible quake rings`, d.noise.some(n => n.kind === 'quake' && n.drawn));
    check(`DPR ${dpr}: default weather is real and includes day/night`, await page.locator('.instrument-panel .weather-slot').getAttribute('data-weather-state') === 'live' && /昼面|夜面|晨昏带/.test(await page.locator('.instrument-panel .weather-slot').innerText()));
    if (dpr === 1) { await page.close(); continue; }
    await page.mouse.move(3, 500);
    await page.waitForFunction(() => getComputedStyle(document.querySelector('.surface-signals')).opacity === '1');
    await page.screenshot({ path: 'scripts/artifacts/signals-default-retina.png', fullPage: true });
  }
  check('Retina and standard displays retain equal apparent core size', Math.abs(report.dpr[0].cssCore - report.dpr[1].cssCore) <= 1);
  const initialCycle = await page.locator('.surface-signals').getAttribute('data-cycle');
  await page.waitForFunction(cycle => document.querySelector('.surface-signals').dataset.cycle !== cycle, initialCycle, { timeout: 8500 });
  check('automatic annotations rotate after roughly seven seconds', true);
  await page.mouse.move(720, 620);
  const hoveredCycle = await page.locator('.surface-signals').getAttribute('data-cycle');
  const anchors = await page.evaluate(() => window.__observatory.diagnostics().noise.filter(n => n.drawn).map(n => n.id));
  await page.waitForTimeout(8200);
  check('globe hover pauses annotation rotation', hoveredCycle === await page.locator('.surface-signals').getAttribute('data-cycle'));
  const persistent = await page.evaluate(() => window.__observatory.diagnostics().noise.filter(n => n.drawn).map(n => n.id));
  check('anchors survive quiet pulse intervals without disappearing', JSON.stringify(anchors) === JSON.stringify(persistent));
  await page.mouse.move(3, 500);
  const frontId = await page.evaluate(() => {
    const o = window.__observatory;
    const weather = document.querySelector('.instrument-panel .weather-coordinate').textContent;
    return o.diagnostics().noise.find(n => {
      const event = o.newsEvents.find(e => e.id === n.id);
      return n.kind === 'news' && n.alpha > .8 && !(weather.includes(Math.abs(event.lat).toFixed(2)) && weather.includes(Math.abs(event.lon).toFixed(2)));
    }).id;
  });
  const row = page.locator(`[data-news-id="${frontId}"]`);
  await row.hover();
  await page.waitForFunction(id => document.querySelector(`[data-signal-id="${id}"]`) && window.__observatory.diagnostics().noise.find(n => n.id === id).highlighted === 1, frontId);
  check('list hover immediately connects to the matching beacon and leader', await page.locator('.surface-label').count() === 1);
  await row.click();
  await page.mouse.move(3, 500);
  await page.waitForFunction(() => window.__observatory.diagnostics().controlsEnabled && document.querySelector('.surface-label.is-fixed'));
  await page.waitForFunction(() => document.querySelector('.instrument-panel .weather-slot').dataset.weatherState === 'live', null, { timeout: 20000 });
  check('click focuses and fixes the original article link', await page.locator('.surface-label.is-fixed a').count() === 1);
  check('clicked news automatically updates the geographic weather slice', await page.evaluate(() => {
    const o = window.__observatory;
    const event = o.newsEvents.find(e => e.id === document.querySelector('.surface-label.is-fixed').dataset.signalId);
    const point = o.project(event);
    const weather = document.querySelector('.instrument-panel .weather-coordinate').textContent;
    return Math.abs(point.x - 720) < 4 && Math.abs(point.y - 500) < 4 && weather.includes(Math.abs(event.lat).toFixed(2)) && weather.includes(Math.abs(event.lon).toFixed(2));
  }));
  const fixed = await page.locator('.surface-label.is-fixed').getAttribute('data-signal-id');
  await page.waitForTimeout(7600);
  check('manual selection remains fixed across a complete rotation interval', fixed === await page.locator('.surface-label.is-fixed').getAttribute('data-signal-id'));
  await page.screenshot({ path: 'scripts/artifacts/signals-focused-retina.png', fullPage: true });
  await page.getByRole('button', { name: '← 返回噪音流' }).click();
  await page.getByLabel('表面噪音', { exact: true }).uncheck();
  await page.waitForTimeout(200);
  check('human noise switch leaves quakes independently visible', await page.evaluate(() => { const n = window.__observatory.diagnostics().noise; return !n.some(m => m.kind === 'news' && m.drawn) && n.some(m => m.kind === 'quake' && m.drawn); }));
  await page.getByLabel('地壳微震', { exact: true }).uncheck();
  await page.waitForTimeout(200);
  check('both signal layers off leaves no anchors', await page.evaluate(() => window.__observatory.diagnostics().noise.every(n => !n.drawn)));
  await page.getByLabel('表面噪音', { exact: true }).check();
  await page.waitForTimeout(200);
  check('human anchors return without enabling quakes', await page.evaluate(() => { const n = window.__observatory.diagnostics().noise; return n.some(m => m.kind === 'news' && m.drawn) && !n.some(m => m.kind === 'quake' && m.drawn); }));
  await page.getByLabel('地壳微震', { exact: true }).check();
  await page.getByLabel('地表标注', { exact: true }).uncheck();
  await page.waitForFunction(() => getComputedStyle(document.querySelector('.surface-signals')).opacity === '0');
  check('label switch hides leaders without hiding anchors', await page.evaluate(() => window.__observatory.diagnostics().noise.some(n => n.drawn)));
  await page.getByLabel('地表标注', { exact: true }).check();
  await page.getByRole('button', { name: '表面噪音流 −', exact: true }).click();
  check('noise stream collapses without disabling the globe', await page.locator('.news-stream').count() === 0);
  await page.getByRole('button', { name: '表面噪音流 +', exact: true }).click();
  const stream = await page.locator('.news-stream').evaluate(e => ({ height: e.clientHeight, row: e.querySelector('button').getBoundingClientRect().height }));
  check('compact stream exposes six rows with internal scrolling', stream.height / stream.row >= 5.5 && stream.height / stream.row <= 6.5);
  await page.mouse.move(3, 500);
  for (const [width, height] of [[1440,1000], [1280,800], [1024,768], [768,1024], [390,844]]) {
    await page.setViewportSize({ width, height });
    await page.waitForTimeout(1800);
    const layout = await geometry(page); report.layouts.push({ viewport: [width,height], ...layout });
    check(`${width}px: automatic leaders remain visible`, layout.labels.length >= (width <= 600 ? 2 : 3));
    check(`${width}px: no label overlaps another label or HUD text`, layout.labels.every((label,index) => layout.labels.slice(index+1).every(other => !overlap(label,other)) && layout.obstacles.every(other => !overlap(label,other))));
    check(`${width}px: at most one quake annotation`, layout.labels.filter(label => label.quake).length <= 1);
    await page.screenshot({ path: `scripts/artifacts/signals-verified-${width}.png`, fullPage: true });
  }
  check('no JavaScript or shader regressions', report.errors.length === 0);
  report.status = 'passed';
} catch (error) {
  report.status = 'failed'; report.error = error.stack; console.error(error); process.exitCode = 1;
  await page?.screenshot({ path: 'scripts/artifacts/signals-failure.png', fullPage: true }).catch(() => {});
} finally {
  await writeFile('scripts/artifacts/signals-report.json', JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
  await browser.close();
}
