import { createHash } from 'node:crypto';
import { XMLParser, XMLValidator } from 'fast-xml-parser';
import type { NewsItem, NewsSnapshot, SourceStatus } from '../src/data/providers/types.ts';
import { mapPlace, withDisplayCoordinates } from './gazetteer.ts';

export const CACHE_TTL_MS = 5 * 60 * 1000;
export const DEMO_CACHE_TTL_MS = 15 * 1000;
export const MAX_RESPONSE_BYTES = 3 * 1024 * 1024;
export const MAX_ITEMS = 160;
export const SOURCES = Object.freeze([
  { id: 'usgs', name: 'USGS 地壳微震', kind: 'seismic', url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson' },
  { id: 'bbc-world', name: 'BBC World', kind: 'rss', url: 'https://feeds.bbci.co.uk/news/world/rss.xml' },
  { id: 'al-jazeera', name: 'Al Jazeera', kind: 'rss', url: 'https://www.aljazeera.com/xml/rss/all.xml' },
  { id: 'guardian', name: 'The Guardian', kind: 'rss', url: 'https://www.theguardian.com/world/rss' },
  { id: 'bbc-chinese', name: 'BBC 中文（繁體）', kind: 'rss', url: 'https://feeds.bbci.co.uk/zhongwen/trad/rss.xml' },
  { id: 'un-chinese', name: '联合国新闻', kind: 'rss', url: 'https://news.un.org/feed/subscribe/zh/news/all/rss.xml' },
] as const);
export type NewsSource = (typeof SOURCES)[number];
type SourceIdentity = { id: string; name: string };

const parser = new XMLParser({
  ignoreAttributes: false, parseTagValue: false, parseAttributeValue: false,
  trimValues: false, processEntities: true, htmlEntities: true,
});
const entityDecoder = new XMLParser({ parseTagValue: false, processEntities: true, htmlEntities: true });
const FORBIDDEN_XML = /<!\s*(?:DOCTYPE|ENTITY)\b/i;
const array = (value: unknown): unknown[] => value == null ? [] : Array.isArray(value) ? value : [value];
const record = (value: unknown): Record<string, unknown> =>
  value !== null && typeof value === 'object' && !Array.isArray(value) ? value as Record<string, unknown> : {};
const scalar = (value: unknown): string => typeof value === 'string' ? value :
  typeof value === 'number' ? String(value) : typeof record(value)['#text'] === 'string' ? record(value)['#text'] as string : '';

function decodeEntities(value: string): string {
  // Escape brackets before invoking the decoder: untrusted text cannot become XML declarations.
  return scalar(entityDecoder.parse(`<text>${value.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</text>`).text);
}

export function plainText(value: unknown): string {
  let text = scalar(value);
  for (let i = 0; i < 3; i++) {
    const decoded = decodeEntities(text);
    if (decoded === text) break;
    text = decoded;
  }
  return text.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, '')
    .replace(/<[^>]*>/g, '').replace(/[<>]/g, '')
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, '')
    .replace(/\s+/g, ' ').trim();
}

export function safeArticleUrl(value: unknown): string | null {
  const raw = scalar(value).trim();
  if (!raw) return null;
  const decoded = decodeEntities(raw);
  if (/[\u0000-\u0020\u007f<>]/.test(decoded)) return null;
  try {
    const url = new URL(decoded);
    if (!['http:', 'https:'].includes(url.protocol) || !url.hostname || url.username || url.password) return null;
    return url.href;
  } catch { return null; }
}

export function publicationDate(value: unknown): string | null {
  const raw = scalar(value).trim();
  // Never infer a timezone from the server's locale or turn a date-only value into a time.
  const iso = /^(\d{4})-(\d{2})-(\d{2})T\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?(?:Z|[+-]\d{2}:?\d{2})$/i.exec(raw);
  const rfc = /\b\d{4}\s+\d{2}:\d{2}(?::\d{2})?\s+(?:GMT|UTC|UT|[ECMP][SD]T|[+-]\d{4})$/i.test(raw);
  if (!iso && !rfc) return null;
  if (iso) {
    const [, year, month, day] = iso;
    if (+month < 1 || +month > 12 || +day < 1 || +day > new Date(Date.UTC(+year, +month, 0)).getUTCDate()) return null;
  }
  const timestamp = Date.parse(raw);
  return Number.isFinite(timestamp) ? new Date(timestamp).toISOString() : null;
}

export function classify(text: string): Pick<NewsItem, 'tag' | 'entropy'> {
  const severe = /\b(?:nuclear attack|nuclear strike|mass casualty|mass casualties|catastrophic earthquake|devastating tsunami|hundreds (?:of people )?(?:killed|dead)|thousands (?:of people )?(?:killed|dead))\b|核打击|核打擊|核袭击|核襲擊|数百人死亡|數百人死亡|数千人死亡|數千人死亡|特大地震/.test(text.toLowerCase()) ||
    /\b\d{3,}[\d,]* (?:people )?(?:killed|dead)\b|(?:死亡|遇难|遇難)\s*\d{3,}\s*人/i.test(text);
  const hypothetical = /\b(?:drill|simulation|could|might|averted|prevented|no|not|fear|fears|risk|threat)\b|演习|演習|模拟|模擬|可能|避免|威胁|威脅|未发生|未發生/i.test(text);
  let tag: NewsItem['tag'] = '表面喧嚣';
  let entropy = 0.22;
  if (/earthquake|flood|tsunami|hurricane|wildfire|drought|climate|地震|洪水|洪灾|洪災|海啸|海嘯|飓风|颶風|台风|颱風|山火|干旱|乾旱|气候|氣候/i.test(text)) {
    tag = '灾变扰动'; entropy = 0.64;
  } else if (/\b(?:war|conflict|attack|strike|missile|troops|bombing|killed|dead|casualties)\b|战争|戰爭|冲突|衝突|袭击|襲擊|导弹|導彈|死亡|遇难|遇難|核打击|核打擊/i.test(text)) {
    tag = '局部摩擦'; entropy = 0.61;
  } else if (/election|protest|sanction|coup|government|parliament|选举|選舉|抗议|抗議|制裁|政变|政變|政府|议会|議會/i.test(text)) {
    tag = '秩序震荡'; entropy = 0.48;
  } else if (/\b(?:technology|AI|artificial intelligence|chip|quantum|spacecraft|research)\b|科技|技术|技術|人工智能|人工智慧|芯片|晶片|量子|航天|科研/i.test(text)) {
    tag = '技术跃迁'; entropy = 0.42;
  }
  if (severe && !hypothetical) entropy = /thousands|数千|數千|nuclear|核打|核襲|核袭/i.test(text) ? 0.98 : 0.9;
  return { tag, entropy };
}

function makeItem(source: SourceIdentity, title: unknown, url: string | null, publishedAt: unknown,
  description: unknown, collectedAt: string): NewsItem | null {
  const summary = plainText(title);
  if (!summary) return null;
  const place = mapPlace(summary) ?? mapPlace(plainText(description));
  return {
    id: createHash('sha256').update(`${source.id}\n${url ?? summary}`).digest('hex').slice(0, 24),
    settlement: place?.name ?? '未定位', summary, source: source.name,
    ...classify(summary), lat: place?.lat ?? null, lon: place?.lon ?? null,
    precision: place?.precision ?? 'unlocated', url, publishedAt: publicationDate(publishedAt),
    collectedAt, demo: false,
  };
}

export function parseRss(body: string, source: NewsSource, collectedAt: string): NewsItem[] {
  if (FORBIDDEN_XML.test(body)) throw new Error('DOCTYPE/entity declarations are not allowed');
  const validation = XMLValidator.validate(body);
  if (validation !== true) throw new Error('Invalid XML feed');
  const document = record(parser.parse(body));
  let entries: unknown[];
  let atom = false;
  if ('rss' in document && 'channel' in record(document.rss)) {
    entries = array(record(record(document.rss).channel).item);
  } else if ('feed' in document) {
    atom = true;
    entries = array(record(document.feed).entry);
  } else if ('rdf:RDF' in document && 'channel' in record(document['rdf:RDF'])) {
    entries = array(record(document['rdf:RDF']).item);
  } else {
    throw new Error('Unsupported feed shape (expected RSS/Atom)');
  }
  const items: NewsItem[] = [];
  for (const entry of entries) {
    const data = record(entry);
    const rawLink = atom ? array(data.link).map(record).find(link =>
      !link['@_rel'] || link['@_rel'] === 'alternate')?.['@_href'] : data.link;
    const url = safeArticleUrl(rawLink);
    // Missing links may remain null; explicit unsafe/malformed links are rejected entirely.
    if (scalar(rawLink).trim() && !url) continue;
    const item = makeItem(source, data.title, url, data.pubDate ?? data.published ?? data['dc:date'],
      data.description ?? data.summary ?? data['content:encoded'], collectedAt);
    if (item) items.push(item);
  }
  return items;
}

export function parseUsgs(body: string, collectedAt: string): NewsItem[] {
  const document = record(JSON.parse(body));
  if (document.type !== 'FeatureCollection' || !Array.isArray(document.features)) throw new Error('Unsupported USGS GeoJSON shape');
  const retrievedAt = Date.parse(collectedAt);
  if (!Number.isFinite(retrievedAt)) throw new Error('Invalid USGS retrieval time');
  // The daily feed can lag a refresh; never accept future events or seconds as milliseconds.
  const oldest = retrievedAt - 24 * 60 * 60 * 1000 - CACHE_TTL_MS;
  const inRange = (value: unknown, min: number, max: number): value is number =>
    typeof value === 'number' && Number.isFinite(value) && value >= min && value <= max;
  const items: NewsItem[] = [];
  for (const rawFeature of document.features) {
    const feature = record(rawFeature);
    const geometry = record(feature.geometry);
    const properties = record(feature.properties);
    const point = geometry.coordinates;
    if (feature.type !== 'Feature' || geometry.type !== 'Point' || !Array.isArray(point) || point.length !== 3 ||
        properties.type !== 'earthquake' || typeof feature.id !== 'string' || !/^[a-z0-9_-]{1,128}$/i.test(feature.id)) continue;
    const [lon, lat, depthKm] = point;
    const magnitude = properties.mag;
    const time = properties.time;
    // USGS bounds permit negative depth (above sea level) and negative magnitudes.
    if (!inRange(lon, -180, 180) || !inRange(lat, -90, 90) || !inRange(depthKm, -100, 1000) ||
        !inRange(magnitude, -10, 10) || !inRange(time, oldest, retrievedAt) || !Number.isSafeInteger(time)) continue;
    if (typeof properties.title !== 'string' || typeof properties.place !== 'string' || typeof properties.url !== 'string') continue;
    const summary = plainText(properties.title);
    const settlement = plainText(properties.place);
    const url = safeArticleUrl(properties.url);
    if (!summary || !settlement || !url) continue;
    items.push({
      id: `usgs-${feature.id}`, source: 'USGS', kind: 'quake', precision: 'seismic', tag: '地壳微震',
      summary, settlement, url, lat, lon, magnitude, depthKm,
      entropy: magnitude >= 8 ? 0.95 : magnitude >= 7 ? 0.85 : magnitude >= 6 ? 0.4 : magnitude >= 5 ? 0.28 : 0.16,
      publishedAt: new Date(time).toISOString(), collectedAt, demo: false,
    });
  }
  return items;
}

// GEO Point/html is fixture-validated only; reported mentions are not verified incident locations.
export function parseGeoJson(body: string, source: SourceIdentity, collectedAt: string): NewsItem[] {
  if (FORBIDDEN_XML.test(body)) throw new Error('DOCTYPE/entity declarations are not allowed');
  const document = record(JSON.parse(body));
  if (document.type !== 'FeatureCollection' || !Array.isArray(document.features)) throw new Error('Unsupported GDELT GeoJSON shape');
  const items: NewsItem[] = [];
  let supportedPoints = 0;
  for (const rawFeature of document.features) {
    const feature = record(rawFeature);
    const geometry = record(feature.geometry);
    const point = geometry.coordinates;
    if (feature.type !== 'Feature' || geometry.type !== 'Point' || !Array.isArray(point) || point.length < 2) continue;
    const [lon, lat] = point;
    if (typeof lat !== 'number' || typeof lon !== 'number' || !Number.isFinite(lat) || !Number.isFinite(lon) ||
        Math.abs(lat) > 90 || Math.abs(lon) > 180) continue;
    supportedPoints++;
    const properties = record(feature.properties);
    const html = scalar(properties.html);
    for (const match of html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a\s*>/gi)) {
      const href = /(?:^|\s)href\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/i.exec(match[1]);
      const url = safeArticleUrl(href?.[1] ?? href?.[2] ?? href?.[3]);
      if (!url) continue;
      const item = makeItem(source, match[2], url, null, '', collectedAt);
      if (item) items.push({ ...item, lat, lon, precision: 'reported',
        settlement: plainText(properties.name) || 'GDELT 提及地点' });
    }
  }
  if (document.features.length && !supportedPoints) throw new Error('No supported GDELT Point features');
  return items;
}

function canonicalUrl(value: string): string {
  const url = new URL(value);
  url.hash = '';
  for (const key of [...url.searchParams.keys()]) {
    if (/^utm_|^(?:fbclid|gclid)$/i.test(key)) url.searchParams.delete(key);
  }
  url.searchParams.sort();
  return url.href;
}

// Round-robin selection prevents a large feed from crowding out other regions.
export function balanceAndDeduplicate(batches: readonly NewsItem[][]): NewsItem[] {
  const urls = new Set<string>();
  const titles = new Set<string>();
  const quakeIds = new Set<string>();
  const selected: NewsItem[] = [];
  const longest = Math.max(0, ...batches.map(batch => batch.length));
  for (let index = 0; index < longest && selected.length < MAX_ITEMS; index++) {
    for (const batch of batches) {
      const item = batch[index];
      if (!item) continue;
      const url = item.url ? canonicalUrl(item.url) : null;
      const title = item.summary.normalize('NFKC').toLowerCase().replace(/\s+/g, ' ').trim();
      const duplicate = (url !== null && urls.has(url)) || (item.kind === 'quake' ? quakeIds.has(item.id) : titles.has(title));
      // Repeated earthquake titles can describe distinct events; use catalog IDs instead.
      if (url) urls.add(url);
      if (item.kind === 'quake') quakeIds.add(item.id);
      else titles.add(title);
      if (!duplicate) selected.push({ ...item });
      if (selected.length === MAX_ITEMS) break;
    }
  }
  const severe = selected.filter(item => item.entropy > 0.75)
    .sort((a, b) => b.entropy - a.entropy || a.id.localeCompare(b.id, 'en'));
  const allowed = new Set(severe.slice(0, Math.floor(selected.length * 0.05)).map(item => item.id));
  for (const item of selected) if (item.entropy > 0.75 && !allowed.has(item.id)) item.entropy = 0.75;
  return withDisplayCoordinates(selected).map(item => {
    if (item.kind === 'quake' || item.precision === 'seismic') delete item.displayCoordinates;
    return item;
  });
}

export type DeadlineScheduler = (callback: () => void, delayMs: number) => () => void;
export interface NewsServiceOptions {
  fetchImpl?: typeof fetch;
  now?: () => number;
  timeoutMs?: number;
  concurrency?: number;
  retries?: number;
  retryDelayMs?: number;
  scheduleDeadline?: DeadlineScheduler;
}
export interface NewsService { getSnapshot(): Promise<NewsSnapshot> }

const scheduleDeadline: DeadlineScheduler = (callback, delayMs) => {
  const timer = setTimeout(callback, delayMs);
  timer.unref();
  return () => clearTimeout(timer);
};

function isRetryableError(error: unknown): boolean {
  if (!(error instanceof Error)) return false;
  if (/^HTTP 5\d\d$/.test(error.message)) return true;
  if (error instanceof TypeError) return true;
  const code = typeof (error as { cause?: { code?: unknown } }).cause?.code === 'string'
    ? (error as { cause: { code: string } }).cause.code
    : '';
  return /^(?:ECONNRESET|ETIMEDOUT|EAI_AGAIN|ECONNREFUSED|ENOTFOUND|UND_ERR_CONNECT_TIMEOUT|UND_ERR_SOCKET)$/.test(code);
}

function waitRetry(delayMs: number, signal: AbortSignal): Promise<void> {
  if (delayMs <= 0) return Promise.resolve();
  return new Promise((resolve, reject) => {
    if (signal.aborted) { reject(new Error('Source request aborted')); return; }
    const onAbort = () => { clearTimeout(timer); reject(new Error('Source request aborted')); };
    const timer = setTimeout(() => { signal.removeEventListener('abort', onAbort); resolve(); }, delayMs);
    timer.unref();
    signal.addEventListener('abort', onAbort, { once: true });
  });
}

async function boundedBody(response: Response, signal: AbortSignal): Promise<string> {
  const declaredLength = Number(response.headers.get('content-length'));
  if (declaredLength > MAX_RESPONSE_BYTES) {
    void response.body?.cancel().catch(() => {});
    throw new Error('Response exceeds 3 MB');
  }
  if (!response.body) throw new Error('Empty response body');
  const reader = response.body.getReader();
  const abort = () => { void reader.cancel().catch(() => {}); };
  signal.addEventListener('abort', abort, { once: true });
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    if (signal.aborted) throw new Error('Source request aborted');
    while (true) {
      const { done, value } = await reader.read();
      if (signal.aborted) throw new Error('Source request aborted');
      if (done) break;
      size += value.byteLength;
      if (size > MAX_RESPONSE_BYTES) throw new Error('Response exceeds 3 MB');
      chunks.push(value);
    }
    return Buffer.concat(chunks, size).toString('utf8');
  } finally {
    signal.removeEventListener('abort', abort);
    void reader.cancel().catch(() => {});
    reader.releaseLock();
  }
}

const LOCATION_WARNING = '新闻位置为提及地或词典中心近似点，并非已核实的事件坐标；多地报道按城市优先、最长名称选一处。USGS 地震点为观测震中，不做显示偏移；震中、震级及深度可能随复核修订。';

function demoItems(collectedAt: string): NewsItem[] {
  return [
    { name: '伦敦', lat: 51.5074, lon: -0.1278 },
    { name: '东京', lat: 35.6762, lon: 139.6503 },
  ].map((place, index) => ({
    id: `demo-${index}`, settlement: place.name, summary: `演示样本（非真实新闻）：${place.name}参考点`,
    source: '本地演示（非新闻源）', tag: '表面喧嚣', entropy: 0.15,
    lat: place.lat, lon: place.lon, precision: 'reference', url: null, publishedAt: null, collectedAt, demo: true,
  }));
}

export function createNewsService(options: NewsServiceOptions = {}): NewsService {
  const fetchImpl = options.fetchImpl ?? fetch;
  const now = options.now ?? Date.now;
  const deadline = options.scheduleDeadline ?? scheduleDeadline;
  const timeoutMs = Math.max(1, Math.min(12_000, Number.isFinite(options.timeoutMs) ? options.timeoutMs! : 12_000));
  const concurrency = Math.max(1, Math.min(SOURCES.length, Math.floor(Number.isFinite(options.concurrency) ? options.concurrency! : SOURCES.length)));
  const retries = Math.max(0, Math.min(2, Math.floor(Number.isFinite(options.retries) ? options.retries! : 0)));
  const retryDelayMs = Math.max(0, Math.min(2_000, Number.isFinite(options.retryDelayMs) ? options.retryDelayMs! : 300));
  let snapshot: NewsSnapshot | undefined;
  let lastGood: NewsSnapshot | undefined;
  let expiresAt = 0;
  let inFlight: Promise<NewsSnapshot> | undefined;

  async function retrieve(source: NewsSource): Promise<{ items: NewsItem[]; status: SourceStatus }> {
    const controller = new AbortController();
    let cancelDeadline = () => {};
    try {
      const timeout = new Promise<never>((_resolve, reject) => {
        cancelDeadline = deadline(() => {
          controller.abort();
          reject(new Error(`Source timeout after ${timeoutMs} ms`));
        }, timeoutMs);
      });
      const attemptOnce = async () => {
        // Only the fixed server-owned URLs above are fetched. Redirects cannot escape them.
        const response = await fetchImpl(source.url, {
          method: 'GET', signal: controller.signal, redirect: 'error',
          headers: { accept: source.kind === 'seismic' ? 'application/geo+json, application/json' : 'application/rss+xml, application/xml, text/xml',
            'user-agent': 'SingerNews/1.0 (local news aggregator)' },
        });
        if (!response.ok) {
          void response.body?.cancel().catch(() => {});
          throw new Error(`HTTP ${response.status}`);
        }
        const body = await boundedBody(response, controller.signal);
        const collectedAt = new Date(now()).toISOString();
        return source.kind === 'seismic' ? parseUsgs(body, collectedAt) : parseRss(body, source, collectedAt);
      };
      const work = async () => {
        for (let attempt = 0; ; attempt++) {
          try {
            return await attemptOnce();
          } catch (error) {
            if (attempt >= retries || controller.signal.aborted || !isRetryableError(error)) throw error;
            await waitRetry(retryDelayMs, controller.signal);
          }
        }
      };
      const items = await Promise.race([work(), timeout]);
      return { items, status: { id: source.id, name: source.name, state: 'online', count: items.length, checkedAt: new Date(now()).toISOString() } };
    } catch (error) {
      controller.abort();
      return { items: [], status: { id: source.id, name: source.name, state: 'error', count: 0,
        checkedAt: new Date(now()).toISOString(), error: error instanceof Error ? plainText(error.message).slice(0, 240) : 'Source retrieval failed' } };
    } finally { cancelDeadline(); }
  }

  async function refresh(): Promise<NewsSnapshot> {
    const results: Awaited<ReturnType<typeof retrieve>>[] = new Array(SOURCES.length);
    let next = 0;
    await Promise.all(Array.from({ length: concurrency }, async () => {
      while (next < SOURCES.length) {
        const index = next++;
        results[index] = await retrieve(SOURCES[index]);
      }
    }));
    const checkedAt = new Date(now()).toISOString();
    // Counts represent parsed source items, before cross-source deduplication/balancing.
    const sources = results.map(result => result.status);
    const online = sources.filter(source => source.state === 'online').length;
    expiresAt = now() + (online > 0 || lastGood ? CACHE_TTL_MS : DEMO_CACHE_TTL_MS);
    const nextRefreshAt = new Date(expiresAt).toISOString();
    if (online) {
      snapshot = { events: balanceAndDeduplicate(results.map(result => result.items)), sources,
        mode: 'live', fetchedAt: checkedAt, checkedAt, nextRefreshAt,
        warning: `${online < SOURCES.length ? `${SOURCES.length - online} 个来源当前不可用；其余来源照常显示。` : ''}${LOCATION_WARNING}` };
      lastGood = snapshot;
    } else if (lastGood) {
      snapshot = { ...lastGood, sources, mode: 'cached', checkedAt, nextRefreshAt,
        warning: `所有来源当前不可用；显示上次成功获取的旧数据（${lastGood.fetchedAt}）。${LOCATION_WARNING}` };
    } else {
      snapshot = { events: demoItems(checkedAt), sources, mode: 'demo', fetchedAt: checkedAt, checkedAt, nextRefreshAt,
        warning: '所有来源当前不可用，且无成功缓存。当前仅为明确标注的本地演示样本，不是真实新闻。' };
    }
    return snapshot;
  }

  return {
    getSnapshot() {
      if (inFlight) return inFlight;
      if (snapshot && now() < expiresAt) return Promise.resolve(snapshot);
      inFlight = refresh().finally(() => { inFlight = undefined; });
      return inFlight;
    },
  };
}
