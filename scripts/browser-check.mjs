import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
import { writeFile } from 'node:fs/promises';

const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
const errors = [];
const requests = [];
const report = { checks: [], references: [], screenshots: [], timings: {}, fallbacks: [] };
page.on('pageerror', (error) => errors.push(error.message));
page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
page.on('requestfailed', (request) => { if (request.failure()?.errorText !== 'net::ERR_ABORTED') requests.push({ url: request.url(), error: request.failure()?.errorText }); });
const url = process.env.APP_URL ?? 'http://127.0.0.1:5192/';
const check = (name, condition) => { assert.ok(condition, name); report.checks.push(name); console.log(`PASS ${name}`); };
const screenshot = async (name, fullPage = false) => { await page.screenshot({ path: `scripts/artifacts/${name}.png`, fullPage, animations: 'disabled' }); report.screenshots.push(`${name}.png`); };
const ready = async () => {
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => window.__observatory?.diagnostics().ready, { timeout: 30000 });
  await page.locator('.loading-status').waitFor({ state: 'detached', timeout: 30000 });
};
const measureClock = () => page.evaluate(async () => {
  const clock = window.__observatory.clock;
  const a = clock.read();
  const start = performance.now();
  await new Promise((resolve) => setTimeout(resolve, 400));
  return { elapsed: performance.now() - start, advance: clock.read() - a };
});

try {
  await ready();
  const initial = await page.evaluate(() => window.__observatory.diagnostics());
  check('all five 2K local maps loaded', Object.values(initial.textures).every((texture) => texture.width === 2048 && texture.height === 1024));
  check('all GLSL programs linked', initial.programs.every((program) => program.runnable));
  check('no initial console or network errors', errors.length === 0 && requests.length === 0);
  await screenshot('desktop');
  for (const viewport of [{ width: 1440, height: 900 }, { width: 1280, height: 800 }]) {
    await page.setViewportSize(viewport);
    const rectangles = await page.evaluate(() => {
      const bounds = (selector) => { const { top, bottom, left, right } = document.querySelector(selector).getBoundingClientRect(); return { top, bottom, left, right }; };
      return { telemetry: bounds('.telemetry-panel'), instruments: bounds('.instrument-panel'), target: bounds('.target-panel'), log: bounds('.observation-log') };
    });
    check(`HUD panels do not overlap at ${viewport.width}x${viewport.height}`, rectangles.telemetry.bottom < rectangles.instruments.top && rectangles.target.bottom < rectangles.log.top);
    await screenshot(`desktop-${viewport.width}x${viewport.height}`);
  }
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.getByTestId('time-paused').click();
  const paused = await measureClock();
  check('pause freezes simulation UTC', paused.advance === 0);
  const cloudA = await page.evaluate(() => window.__observatory.diagnostics().cloudOffset);
  await measureClock();
  const cloudB = await page.evaluate(() => window.__observatory.diagnostics().cloudOffset);
  check('pause freezes cloud motion', cloudA === cloudB);
  await page.getByTestId('time-hour').click();
  report.timings.hour = await measureClock();
  check('one second equals one hour', Math.abs(report.timings.hour.advance / report.timings.hour.elapsed - 3600) < 10);
  await page.getByTestId('time-day').click();
  report.timings.day = await measureClock();
  check('one second equals one day', Math.abs(report.timings.day.advance / report.timings.day.elapsed - 86400) < 200);
  await page.getByTestId('time-live').click();
  check('live mode resynchronizes UTC', await page.evaluate(() => Math.abs(window.__observatory.clock.read() - Date.now()) < 30));
  await page.getByLabel('薄层云系', { exact: true }).uncheck();
  check('cloud layer toggle hides actual cloud sphere', await page.evaluate(() => !window.__observatory.diagnostics().clouds));
  await page.getByTestId('time-paused').click();
  await page.getByRole('button', { name: '坐标校准', exact: true }).click();
  const references = [
    { id: 'LON', name: '伦敦', lat: 51.5, lon: 0 },
    { id: 'TYO', name: '东京', lat: 35.7, lon: 139.7 },
    { id: 'NYC', name: '纽约', lat: 40.7, lon: -74 },
  ];
  for (const ref of references) {
    await page.getByTestId(`reference-${ref.id}`).click();
    await page.waitForFunction(({ lat, lon }) => {
      const projected = window.__observatory.project({ lat, lon });
      return projected.visible && Math.abs(projected.x - innerWidth / 2) < 0.00001 && Math.abs(projected.y - innerHeight / 2) < 0.00001;
    }, ref);
    const sample = await page.evaluate(({ lat, lon }) => {
      const engine = window.__observatory;
      const projected = engine.project({ lat, lon });
      const picked = engine.pickAt(projected.x, projected.y);
      return { projected, picked };
    }, ref);
    report.references.push({ ...ref, ...sample });
    check(`${ref.name} raycast coordinates match location`, Math.abs(sample.picked.lat - ref.lat) < 0.005 && Math.abs(sample.picked.lon - ref.lon) < 0.005);
    check(`${ref.name} GPU sphere UV aligns with equirectangular map within 0.25 texel`, Math.abs(sample.picked.uv.x - (ref.lon + 180) / 360) * 2048 < 0.25 && Math.abs(sample.picked.uv.y - (ref.lat + 90) / 180) * 1024 < 0.25);
    await page.evaluate(({ lon }) => {
      const clock = window.__observatory.clock;
      clock.setMode('live');
      clock.setMode('paused', performance.now(), Date.parse('2026-03-20T12:00:00Z') - lon / 15 * 3600000);
    }, ref);
    await page.mouse.click(sample.projected.x, sample.projected.y);
    await page.waitForFunction(() => document.querySelector('.event-copy')?.textContent.length >= 25);
    check(`${ref.name} marker selects corresponding log`, (await page.locator('.event-location').textContent()).includes(ref.name));
    await page.waitForFunction(() => document.querySelector('time').dateTime === new Date(window.__observatory.clock.read()).toISOString());
    await screenshot(`calibration-${ref.id}-day`);
    await page.evaluate(({ lon }) => {
      const clock = window.__observatory.clock;
      clock.setMode('live');
      clock.setMode('paused', performance.now(), Date.parse('2026-03-21T00:00:00Z') - lon / 15 * 3600000);
    }, ref);
    await page.waitForFunction(() => document.querySelector('time').dateTime === new Date(window.__observatory.clock.read()).toISOString());
    await screenshot(`calibration-${ref.id}-night`);
  }
  await page.getByRole('button', { name: '坐标校准', exact: true }).click();
  await page.getByTestId('time-live').click();
  await page.getByLabel('表面噪音', { exact: true }).uncheck();
  await page.waitForFunction(() => window.__observatory.diagnostics().noise.filter((event) => event.kind === 'news').every((event) => event.alpha === 0));
  check('human noise switch leaves the independent quake layer enabled', await page.evaluate(() => window.__observatory.diagnostics().signalLayers.quakes));
  // Both independent signal layers must be off for a marker-free terrain pick.
  await page.getByLabel('地壳微震', { exact: true }).uncheck();
  await page.waitForFunction(() => window.__observatory.diagnostics().noise.every((event) => event.alpha === 0));
  check('both signal switches remove all visible markers', true);
  // Default-on DOM labels and an existing selection are not terrain targets.
  await page.getByLabel('地表标注', { exact: true }).uncheck();
  if (await page.getByRole('button', { name: '← 返回噪音流' }).count()) await page.getByRole('button', { name: '← 返回噪音流' }).click();
  await page.mouse.click(754, 470);
  check('arbitrary globe click selects weather coordinates', /[NS] \/ .*° [EW]/.test(await page.locator('.instrument-panel .weather-coordinate').innerText()));
  await page.getByLabel('表面噪音', { exact: true }).check();
  await page.getByLabel('地壳微震', { exact: true }).check();
  await page.getByLabel('地表标注', { exact: true }).check();
  await page.getByLabel('薄层云系', { exact: true }).check();
  await page.getByTestId('deep-space').click();
  await page.waitForFunction(() => Math.abs(window.__observatory.diagnostics().cameraDistance - 680) < 0.00000001);
  const deep = await page.evaluate(() => window.__observatory.diagnostics());
  check('deep-space far clip includes Earth', deep.far > deep.cameraDistance + 1);
  check('surface noise fades completely at distance', deep.noise.every((event) => event.alpha === 0));
  check('deep-space threshold message is shown', (await page.locator('.observation-log').innerText()).includes('表面噪音已低于背景噪声'));
  await screenshot('deep-space');
  await page.getByTestId('deep-space').click();
  await page.waitForFunction(() => Math.abs(window.__observatory.diagnostics().cameraDistance - 7.5) < 0.00000001);
  check('return to nearby observation restores distance', true);
  const beforeDrag = await page.evaluate(() => window.__observatory.camera.position.toArray());
  await page.mouse.move(720, 500); await page.mouse.down(); await page.mouse.move(860, 530, { steps: 16 }); await page.mouse.up();
  const afterDrag = await page.evaluate(() => window.__observatory.camera.position.toArray());
  check('drag rotates observation camera', afterDrag.some((value, index) => Math.abs(value - beforeDrag[index]) > 0.1));
  await page.mouse.wheel(0, -200);
  await page.waitForFunction(() => window.__observatory.diagnostics().cameraDistance < 7.3);
  check('wheel approaches Earth', true);
  await page.setViewportSize({ width: 390, height: 844 });
  await screenshot('mobile', true);
  check('mobile layout does not overflow horizontally', await page.evaluate(() => document.documentElement.scrollWidth === innerWidth));
  const mobile = await page.evaluate(() => {
    const caption = document.querySelector('.planet-caption').getBoundingClientRect();
    const log = document.querySelector('.observation-log').getBoundingClientRect();
    return { captionBottom: caption.bottom, logTop: log.top };
  });
  check('mobile caption and event log do not overlap', mobile.captionBottom < mobile.logTop);
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.getByRole('button', { name: '底图档案', exact: true }).click();
  check('credits disclose sources and static-cloud limitation', (await page.locator('.credits-panel').innerText()).includes('CC BY 4.0') && (await page.locator('.credits-panel').innerText()).includes('并非实时云场'));
  await page.getByRole('button', { name: '关闭底图档案' }).click();
  report.normalRuntimeErrors = [...errors];
  check('no normal-operation browser errors', errors.length === 0 && requests.length === 0);
  await page.route('**/textures/earth/day.jpg', (route) => route.abort('failed'));
  await ready();
  await page.getByRole('button', { name: '底图发生降级 · 查看档案' }).click();
  const fallback1 = await page.evaluate(() => window.__observatory.diagnostics());
  check('failed 2K day map uses real local 1K fallback', fallback1.textures.day.width === 1024);
  check('fallback is explicitly disclosed in HUD', (await page.locator('.credits-panel').innerText()).includes('高分辨率资源不可用'));
  report.fallbacks.push('Forced primary day texture failure: 1K fallback loaded and disclosed');
  await screenshot('fallback-1k');
  await page.route('**/textures/earth/day-fallback.jpg', (route) => route.abort('failed'));
  await ready();
  const emergency = await page.evaluate(() => window.__observatory.diagnostics());
  check('both day assets missing leaves a working simplified globe', emergency.ready && emergency.textures.day.width === 256 && emergency.programs.every((program) => program.runnable));
  await page.getByRole('button', { name: '底图发生降级 · 查看档案' }).click();
  check('emergency fallback explicitly says non-geographical', (await page.locator('.credits-panel').innerText()).includes('非真实地理纹理'));
  report.fallbacks.push('Forced primary and fallback day texture failures: embedded simplified material loaded and disclosed');
  await screenshot('fallback-emergency');
  report.deliberateFailureRequests = requests;
  report.status = 'passed';
} catch (error) {
  report.status = 'failed';
  report.error = error.stack;
  report.errors = errors;
  await page.screenshot({ path: 'scripts/artifacts/failure.png', fullPage: true }).catch(() => {});
  console.error(error);
  process.exitCode = 1;
} finally {
  await writeFile('scripts/artifacts/browser-report.json', JSON.stringify(report, null, 2));
  await browser.close();
}
