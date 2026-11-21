import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
import { writeFile } from 'node:fs/promises';

const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
const page = await context.newPage();
const url = process.env.APP_URL ?? 'http://127.0.0.1:5192/';
const report = { checks: [], screenshots: [], sources: [], runtimeErrors: [], failedRequests: [], externalResponses: [] };
const check = (name, condition) => { assert.ok(condition, name); report.checks.push(name); console.log(`PASS ${name}`); };
const screenshot = async name => { await page.screenshot({ path: `scripts/artifacts/${name}.png`, fullPage: true }); report.screenshots.push(`${name}.png`); };
page.on('pageerror', e => report.runtimeErrors.push(e.message));
page.on('requestfailed', r => report.failedRequests.push({ url: r.url(), error: r.failure()?.errorText }));
page.on('response', r => { if (r.url().includes('api.open-meteo.com')) report.externalResponses.push({ url: r.url(), status: r.status() }); });
const ready = async target => {
  await target.goto(url);
  await target.waitForFunction(() => window.__observatory?.diagnostics().ready, { timeout: 30000 });
  await target.locator('.loading-status').waitFor({ state: 'detached' });
};
const weatherReady = async target => target.waitForFunction(() => ['live', 'cached', 'unavailable'].includes(document.querySelector('.instrument-panel .weather-slot')?.dataset.weatherState), { timeout: 20000 });
const windReady = async target => target.waitForFunction(() => ['live', 'cached', 'unavailable'].includes(document.querySelector('[data-wind-state]')?.dataset.windState), { timeout: 20000 });
const stableLayout = async () => page.evaluate(async () => { await Promise.all(document.getAnimations().filter(a => a.effect?.getTiming().iterations !== Infinity).map(a => a.finished.catch(() => {}))); });
// Terrain picks need both independent marker layers off, no selected row, and no default-on DOM label targets.
const prepareTerrainPick = async target => {
  await target.getByLabel('表面噪音', { exact: true }).uncheck();
  await target.getByLabel('地壳微震', { exact: true }).uncheck();
  await target.getByLabel('地表标注', { exact: true }).uncheck();
  if (await target.getByRole('button', { name: '← 返回噪音流' }).count()) await target.getByRole('button', { name: '← 返回噪音流' }).click();
  await target.waitForFunction(() => window.__observatory.diagnostics().noise.every(marker => marker.alpha === 0));
};

try {
  await ready(page);
  await page.waitForFunction(() => document.querySelector('[data-testid=news-source-state]')?.dataset.mode === 'live', { timeout: 20000 });
  const response = await context.request.get(`${url}api/news`);
  const snapshot = await response.json();
  report.sources = snapshot.sources;
  report.news = { count: snapshot.events.length, located: snapshot.events.filter(e => e.lat !== null).length, mode: snapshot.mode, fetchedAt: snapshot.fetchedAt };
  check('independent static server and real news API are online', response.ok() && snapshot.mode === 'live' && snapshot.events.length > 0);
  check('real stories retain source, title, dates and original links', snapshot.events.filter(e => !e.demo).every(e => e.source && e.summary && /^https?:/.test(e.url) && (e.publishedAt === null || Number.isFinite(Date.parse(e.publishedAt)))));
  const diagnostics = await page.evaluate(() => window.__observatory.diagnostics());
  const unlocated = snapshot.events.filter(e => e.lat === null);
  check('unlocated stories are not projected onto Earth', unlocated.every(e => !diagnostics.noise.some(n => n.id === e.id)));
  await page.getByRole('button', { name: /^未定位 / }).click();
  const listIds = await page.locator('[data-news-id]').evaluateAll(elements => elements.map(e => e.dataset.newsId));
  check('unlocated-only stream filters correctly', listIds.every(id => unlocated.some(e => e.id === id)));
  if (listIds.length) {
    await page.locator('[data-news-id]').first().click();
    check('unlocated detail has no false surface locator', await page.getByRole('button', { name: '定位地表 ↗' }).count() === 0);
    await page.getByRole('button', { name: '← 返回噪音流' }).click();
  }
  await page.getByRole('button', { name: '全部信号', exact: true }).click();
  const event = snapshot.events.slice(0, 70).find(e => e.lat !== null && e.url && e.source.includes('BBC')) ?? snapshot.events.slice(0, 70).find(e => e.lat !== null && e.url);
  assert.ok(event);
  report.selectedStory = event;
  await page.locator(`[data-news-id="${event.id}"]`).click();
  // A located row now focuses the coordinate and starts weather automatically.
  await page.waitForFunction(e => { const p = window.__observatory.project(e); return p.visible && Math.abs(p.x - innerWidth / 2) < 0.01 && Math.abs(p.y - innerHeight / 2) < 0.01; }, event);
  await weatherReady(page);
  check('located row automatically focuses its coordinate and requests weather', true);
  await page.evaluate(id => { const e = window.__observatory; const i = e.diagnostics().noise.findIndex(n => n.id === id); e.freezeNoise(((1 - i * 1.83) % 23 + 23) % 23); }, event.id);
  await page.getByRole('button', { name: '← 返回噪音流' }).click();
  const projected = await page.evaluate(id => window.__observatory.diagnostics().noise.find(n => n.id === id), event.id);
  await page.mouse.click(projected.x, projected.y);
  await page.waitForFunction(title => document.querySelector('.event-copy')?.textContent === `${title}_`, event.summary);
  check('clicking a real globe marker shows the original title', (await page.locator('.event-copy').innerText()).includes(event.summary));
  check('article link preserves the source URL', await page.getByTestId('article-link').getAttribute('href') === event.url);
  const popupPromise = context.waitForEvent('page');
  await page.getByTestId('article-link').click();
  const popup = await popupPromise;
  await popup.waitForURL(address => address.href !== 'about:blank', { waitUntil: 'commit', timeout: 15000 }).catch(() => {});
  report.articleNavigation = popup.url();
  check('original article opens in a separate browser tab', popup.url() === event.url || new URL(popup.url()).hostname === new URL(event.url).hostname);
  await popup.close();
  await prepareTerrainPick(page);
  await page.mouse.click(748, 479);
  await weatherReady(page);
  report.weather = await page.locator('.instrument-panel .weather-slot').innerText();
  check('arbitrary surface click receives real Open-Meteo weather', await page.locator('.instrument-panel .weather-slot').getAttribute('data-weather-state') === 'live');
  check('weather shows all requested units and model provenance', ['m/s', '°C', 'hPa', 'mm', '云覆', 'UTC', '非站点实测'].every(unit => report.weather.includes(unit)));
  check('surface selection has a visible thin leader', await page.locator('.selection-guide path').count() > 0);
  await page.getByLabel('风场矢量', { exact: true }).check();
  await windReady(page);
  const wind = await page.evaluate(() => window.__observatory.diagnostics().wind);
  report.wind = { ...wind, message: await page.locator('[data-wind-state]').innerText() };
  report.localCache = await page.evaluate(() => Object.fromEntries(Object.keys(localStorage).map(key => [key, localStorage.getItem(key)])));
  check('real sparse wind samples drive the actual scene layer', wind.enabled && wind.visible && wind.samples > 0 && wind.samples <= 60);
  const windMaterial = await page.evaluate(() => { const field = window.__observatory.scene.getObjectByName('atmospheric-wind'); return { opacity: field.material.uniforms.uOpacity.value, vertexCount: field.geometry.attributes.position.count }; });
  check('wind overlay uses restrained opacity and sparse geometry', windMaterial.opacity <= 0.3 && windMaterial.vertexCount <= 5280);
  report.windPixels = await page.evaluate(() => {
    const engine = window.__observatory;
    const field = engine.scene.getObjectByName('atmospheric-wind');
    const gl = engine.renderer.getContext();
    const capture = visible => {
      field.visible = visible;
      engine.renderer.render(engine.scene, engine.camera);
      const pixels = new Uint8Array(gl.drawingBufferWidth * gl.drawingBufferHeight * 4);
      gl.readPixels(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
      return pixels;
    };
    const off = capture(false);
    const on = capture(true);
    let changed = 0;
    for (let i = 0; i < on.length; i += 4) if (on[i] !== off[i] || on[i + 1] !== off[i + 1] || on[i + 2] !== off[i + 2]) changed++;
    return { changed, total: on.length / 4 };
  });
  check('real wind changes visible pixels without a dense glowing overlay', report.windPixels.changed > 0 && report.windPixels.changed / report.windPixels.total < 0.01);
  await page.getByLabel('风场矢量', { exact: true }).uncheck();
  await page.waitForFunction(() => !window.__observatory.diagnostics().wind.visible);
  check('wind switch hides actual geometry', true);
  await page.getByLabel('风场矢量', { exact: true }).check();
  await windReady(page);
  await page.getByTestId('time-paused').click();
  const paused = await page.evaluate(async () => { const c = window.__observatory.clock; const before = c.read(); await new Promise(r => setTimeout(r, 250)); return c.read() === before; });
  check('pause retains a frozen solar clock', paused);
  check('accelerated or paused sun never claims historical weather/news', (await page.locator('.data-time-notice').innerText()).includes('非历史回放'));
  await page.getByTestId('time-live').click();
  await page.getByTestId('news-source-state').getByRole('button').click();
  await screenshot('live-sources');
  await page.getByTestId('news-source-state').getByRole('button').click();
  for (const viewport of [{ width: 1440, height: 1000 }, { width: 1440, height: 900 }, { width: 1280, height: 800 }, { width: 1024, height: 768 }, { width: 768, height: 1024 }, { width: 390, height: 844 }]) {
    await page.setViewportSize(viewport);
    await stableLayout();
    const layout = await page.evaluate(() => {
      const bounds = s => document.querySelector(s).getBoundingClientRect().toJSON();
      return { width: innerWidth, scroll: document.documentElement.scrollWidth, telemetry: bounds('.telemetry-panel'), instrument: bounds('.instrument-panel'), target: bounds('.target-panel'), log: bounds('.observation-log'), weather: bounds('.weather-mobile'), caption: bounds('.planet-caption') };
    });
    check(`no horizontal overflow at ${viewport.width}×${viewport.height}`, layout.scroll === layout.width);
    if (viewport.width > 600) {
      check(`right HUD panels do not overlap at ${viewport.width}×${viewport.height}`, layout.telemetry.bottom + 8 < layout.instrument.top);
      check(`left HUD panels do not overlap at ${viewport.width}×${viewport.height}`, layout.target.bottom + 8 < layout.log.top);
    } else {
      check('mobile weather, caption and news occupy separate bands', layout.caption.bottom < layout.instrument.top && layout.weather.bottom + 8 < layout.log.top);
      check('mobile source telemetry is fully inside the screen', await page.locator('.news-source-state').evaluate(el => { const r = el.getBoundingClientRect(); return r.left >= 0 && r.right <= innerWidth; }));
    }
    await screenshot(`live-${viewport.width}x${viewport.height}`);
  }
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.getByTestId('deep-space').click();
  await page.waitForFunction(() => window.__observatory.diagnostics().cameraDistance > 679.99);
  const deep = await page.evaluate(() => window.__observatory.diagnostics());
  check('deep retreat silences news and real wind without clipping Earth', deep.far > deep.cameraDistance + 1 && !deep.wind.visible && deep.noise.every(e => e.alpha === 0));
  await page.getByTestId('deep-space').click();
  await page.waitForFunction(() => Math.abs(window.__observatory.diagnostics().cameraDistance - 7.5) < 0.000001);
  check('normal operation produces no JavaScript errors', report.runtimeErrors.length === 0);
  report.normalRequestFailures = [...report.failedRequests];
  await context.setOffline(true);
  await page.waitForFunction(() => document.querySelector('[data-testid=news-source-state]')?.dataset.mode === 'cached');
  check('offline browser retains clearly labeled real news cache', (await page.locator('.news-source-state').innerText()).includes('缓存'));
  check('offline weather and wind are explicitly cached', await page.locator('.instrument-panel .weather-slot').getAttribute('data-weather-state') === 'cached' && await page.locator('[data-wind-state]').getAttribute('data-wind-state') === 'cached');
  await screenshot('live-offline-cache');
  await context.setOffline(false);

  const cold = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  await cold.route('**/api/news', route => route.abort('internetdisconnected'));
  await cold.route('https://api.open-meteo.com/**', route => route.abort('internetdisconnected'));
  const coldPage = await cold.newPage();
  await ready(coldPage);
  await coldPage.waitForFunction(() => document.querySelector('[data-testid=news-source-state]')?.dataset.mode === 'demo');
  check('cold offline news shows explicit non-real demo labeling', (await coldPage.locator('.news-source-state').innerText()).includes('非真实资讯'));
  await prepareTerrainPick(coldPage);
  await coldPage.mouse.click(720, 500);
  await weatherReady(coldPage);
  check('cold weather failure does not fabricate readings', await coldPage.locator('.instrument-panel .weather-slot').getAttribute('data-weather-state') === 'unavailable' && await coldPage.locator('.instrument-panel .weather-values').count() === 0);
  await coldPage.getByLabel('风场矢量', { exact: true }).check();
  await windReady(coldPage);
  check('cold wind failure does not fabricate vectors', (await coldPage.evaluate(() => window.__observatory.diagnostics().wind.samples)) === 0);
  await coldPage.screenshot({ path: 'scripts/artifacts/live-cold-offline.png' });
  await cold.close();

  const timeoutContext = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  await timeoutContext.route('**/api/news', () => {});
  await timeoutContext.route('https://api.open-meteo.com/**', () => {});
  const timeoutPage = await timeoutContext.newPage();
  await ready(timeoutPage);
  check('globe initialization is independent of stalled external requests', await timeoutPage.locator('.loading-status').count() === 0);
  await prepareTerrainPick(timeoutPage);
  await timeoutPage.mouse.click(720, 500);
  await timeoutPage.getByLabel('风场矢量', { exact: true }).check();
  await weatherReady(timeoutPage);
  await windReady(timeoutPage);
  await timeoutPage.waitForFunction(() => document.querySelector('[data-testid=news-source-state]')?.dataset.mode === 'demo', { timeout: 20000 });
  check('12-second weather timeout is disclosed', (await timeoutPage.locator('.instrument-panel .weather-slot').innerText()).includes('超时'));
  check('12-second wind timeout is disclosed without replacement vectors', (await timeoutPage.locator('[data-wind-state]').innerText()).includes('超时') && (await timeoutPage.evaluate(() => window.__observatory.diagnostics().wind.samples)) === 0);
  check('16-second news timeout leaves an operational demo globe', await timeoutPage.evaluate(() => window.__observatory.diagnostics().ready));
  await timeoutContext.close();
  report.status = 'passed';
} catch (error) {
  report.status = 'failed';
  report.error = error.stack;
  await page.screenshot({ path: 'scripts/artifacts/live-failure.png', fullPage: true }).catch(() => {});
  console.error(error);
  process.exitCode = 1;
} finally {
  await writeFile('scripts/artifacts/live-report.json', JSON.stringify(report, null, 2));
  await browser.close();
}
