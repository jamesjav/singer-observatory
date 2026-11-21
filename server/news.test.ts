import { describe, expect, it, vi } from 'vitest';
import type { NewsItem } from '../src/data/providers/types.ts';
import {
  CACHE_TTL_MS, DEMO_CACHE_TTL_MS, MAX_RESPONSE_BYTES, SOURCES, balanceAndDeduplicate, classify, createNewsService,
  parseGeoJson, parseRss, parseUsgs, plainText, publicationDate, safeArticleUrl,
} from './news.ts';
import type { DeadlineScheduler } from './news.ts';

const NOW = Date.parse('2026-11-21T12:00:00.000Z');
const COLLECTED = new Date(NOW).toISOString();
const BBC = SOURCES[1];
const GDELT = { id: 'gdelt', name: 'GDELT' };
const usgsFeature = (properties: Record<string, unknown> = {}, coordinates: unknown = [-122.75, 38.8, 3.25], id: unknown = 'nc-test') => ({
  type: 'Feature', id, geometry: { type: 'Point', coordinates }, properties: {
    type: 'earthquake', mag: 2.8, time: NOW - 60_000, updated: NOW - 10_000,
    title: 'M 2.8 - 5 km NW of The Geysers, CA', place: '5 km NW of The Geysers, CA',
    url: `https://earthquake.usgs.gov/earthquakes/eventpage/${id}`, ...properties,
  },
});
const usgsCollection = (...features: unknown[]) => JSON.stringify({ type: 'FeatureCollection', features });
const xml = (items = '') => `<?xml version="1.0"?><rss version="2.0"><channel><title>Fixture feed</title>${items}</channel></rss>`;
const article = (title = 'London technology research', link = 'https://example.org/story', extra = '') =>
  `<item><title>${title}</title><link>${link}</link>${extra}</item>`;
const fetchMock = (handler: (url: string, init?: RequestInit) => Promise<Response>) =>
  vi.fn<typeof fetch>((input, init) => handler(String(input), init));
const failingFetch = () => fetchMock(async () => { throw new Error('Network unavailable'); });
const success = (url: string) => new Response(url === SOURCES[0].url
  ? '{"type":"FeatureCollection","features":[]}'
  : xml(article(`London technology ${SOURCES.find(source => source.url === url)!.id}`, `https://example.org/${SOURCES.find(source => source.url === url)!.id}`)));

// This is an explicitly synthetic, plausible supported GEO fixture, NOT a captured live
// GDELT response. The requested official endpoint currently has no available live payload.
const geoFixture = (coordinates: unknown = [139.6503, 35.6762], html = '<a href="https://example.org/tokyo?a=1&amp;b=2">Tokyo &amp; science</a>') => JSON.stringify({
  type: 'FeatureCollection', features: [{ type: 'Feature', geometry: { type: 'Point', coordinates },
    properties: { name: 'Tokyo', html, date: 'not a publication date' } }],
});

const item = (id: string, summary = id, url: string | null = `https://example.org/${id}`, entropy = 0.2): NewsItem => ({
  id, summary, url, entropy, settlement: '未定位', source: id.split('-')[0], lat: null, lon: null,
  tag: '表面喧嚣', precision: 'unlocated', publishedAt: null, collectedAt: COLLECTED, demo: false,
});

describe('feed parsing and safe normalization', () => {
  it('keeps the real decoded title, publication time, retrieval time and non-demo status', () => {
    const [result] = parseRss(xml(article('London &amp; Tokyo: &quot;New science&quot;', 'https://example.org/story?a=1&amp;b=2',
      '<pubDate>Fri, 20 Nov 2026 10:15:00 GMT</pubDate><description>A rewritten summary must not replace the title.</description>')), BBC, COLLECTED);
    expect(result.summary).toBe('London & Tokyo: "New science"');
    expect(result.url).toBe('https://example.org/story?a=1&b=2');
    expect(result.publishedAt).toBe('2026-11-20T10:15:00.000Z');
    expect(result.collectedAt).toBe(COLLECTED);
    expect(result.demo).toBe(false);
  });

  it('matches the title before the description, then falls back only when needed', () => {
    const results = parseRss(xml(
      article('Japan announces new policy', 'https://example.org/1', '<description>Talks in London</description>') +
      article('A new policy', 'https://example.org/2', '<description>Talks in London</description>') +
      article('A new study', 'https://example.org/3', '<description>Details forthcoming</description>'),
    ), BBC, COLLECTED);
    expect(results[0]).toMatchObject({ settlement: '日本', precision: 'country' });
    expect(results[1]).toMatchObject({ settlement: '伦敦', precision: 'city' });
    expect(results[2]).toMatchObject({ settlement: '未定位', lat: null, lon: null, precision: 'unlocated', publishedAt: null });
  });

  it('supports traditional Chinese, CDATA, safe HTML removal and numeric entities', () => {
    const [result] = parseRss(xml(article('<![CDATA[東京：<b>科技</b> &amp; &#x65B0;&#32862;]]>')), SOURCES[4], COLLECTED);
    expect(result.summary).toBe('東京：科技 & 新聞');
    expect(result.settlement).toBe('东京');
    expect(plainText('&lt;img src=x onerror=alert(1)&gt;Safe&nbsp;&mdash;&nbsp;news')).toBe('Safe — news');
    expect(plainText('<script>alert(1)</script><b>News</b>')).toBe('News');
    expect(plainText('&amp;lt;svg/onload=alert(1)&amp;gt;News')).toBe('News');
  });

  it.each(['<!DOCTYPE rss [<!ENTITY x "expanded">]><rss><channel/></rss>',
    '<!DOCTYPE rss SYSTEM "file:///etc/passwd"><rss><channel/></rss>',
    '<!ENTITY x "value"><rss><channel/></rss>', '<rss><channel></rss>', '<html><body>Access denied</body></html>'])('rejects declarations/malformed or non-feed XML', body => {
    expect(() => parseRss(body, BBC, COLLECTED)).toThrow();
  });

  it('accepts successfully parsed zero-item RSS and Atom feeds', () => {
    expect(parseRss(xml(), BBC, COLLECTED)).toEqual([]);
    expect(parseRss('<feed xmlns="http://www.w3.org/2005/Atom"/>', BBC, COLLECTED)).toEqual([]);
    const [result] = parseRss('<feed xmlns="http://www.w3.org/2005/Atom"><entry><title>Paris research</title><link rel="alternate" href="https://example.org/atom"/><published>2026-11-20T05:00:00Z</published></entry></feed>', BBC, COLLECTED);
    expect(result.url).toBe('https://example.org/atom');
    expect(result.publishedAt).toBe('2026-11-20T05:00:00.000Z');
  });

  it.each(['javascript:alert(1)', 'data:text/html,bad', 'file:///etc/passwd', 'ftp://example.org/a',
    '//example.org/a', 'https://user:secret@example.org/a', 'java&#x73;cript:alert(1)',
    'https://example.org/&lt;script&gt;', 'https://exa\nmple.org'])('rejects unsafe URL %s', value => {
    expect(safeArticleUrl(value)).toBeNull();
  });

  it('drops unsafe-link items but permits missing links as null', () => {
    const results = parseRss(xml(article('Bad title', 'javascript:alert(1)') +
      '<item><title>Link unavailable</title></item>' + article('Fine title')), BBC, COLLECTED);
    expect(results).toHaveLength(2);
    expect(results[0].url).toBeNull();
    expect(results[1].url).toBe('https://example.org/story');
  });

  it.each([null, undefined, '', 'unknown', 'yesterday', '123', 'Wed, 99 Nov 2026 00:00:00 GMT',
    '2026-02-30T00:00:00Z', '2026-11-20', '2026-11-20T05:00:00'])('uses null for missing/invalid dates', value => {
    expect(publicationDate(value)).toBeNull();
  });

  it('normalizes explicit timezone offsets and does not substitute modification for publication', () => {
    expect(publicationDate('2026-11-20T13:00:00+08:00')).toBe('2026-11-20T05:00:00.000Z');
    const [result] = parseRss('<feed><entry><title>Tokyo study</title><updated>2026-11-20T05:00:00Z</updated></entry></feed>', BBC, COLLECTED);
    expect(result.publishedAt).toBeNull();
  });
});

describe('GDELT explicit supported-shape fixtures', () => {
  it('uses Point [lon,lat] and actual anchor title, never inventing publication dates', () => {
    const [result] = parseGeoJson(geoFixture(), GDELT, COLLECTED);
    expect(result).toMatchObject({ summary: 'Tokyo & science', lat: 35.6762, lon: 139.6503,
      precision: 'reported', settlement: 'Tokyo', publishedAt: null, collectedAt: COLLECTED, demo: false,
      url: 'https://example.org/tokyo?a=1&b=2' });
  });

  it('does not manufacture articles for points without usable anchors', () => {
    expect(parseGeoJson(geoFixture([0, 0], 'A location without articles'), GDELT, COLLECTED)).toEqual([]);
    expect(parseGeoJson(geoFixture([0, 0], '<a href="javascript:alert(1)">Bad title</a>'), GDELT, COLLECTED)).toEqual([]);
    expect(parseGeoJson('{"type":"FeatureCollection","features":[]}', GDELT, COLLECTED)).toEqual([]);
  });

  it.each([[181, 20], [20, 91], ['20', 40], [null, 0], [0]].map(point => ({ point })))('rejects invalid coordinate shape $point', ({ point }) => {
    expect(() => parseGeoJson(geoFixture(point), GDELT, COLLECTED)).toThrow('No supported');
  });

  it('rejects unknown payloads rather than reporting fake success', () => {
    expect(() => parseGeoJson('{"articles":[]}', GDELT, COLLECTED)).toThrow('Unsupported');
    expect(() => parseGeoJson('<html>Not found</html>', GDELT, COLLECTED)).toThrow();
  });
});

describe('USGS daily earthquake fixtures', () => {
  it('uses real title, place, event milliseconds and exact Point coordinates/depth', () => {
    const [result] = parseUsgs(usgsCollection(usgsFeature()), COLLECTED);
    expect(result).toEqual({
      id: 'usgs-nc-test', source: 'USGS', kind: 'quake', precision: 'seismic', tag: '地壳微震',
      summary: 'M 2.8 - 5 km NW of The Geysers, CA', settlement: '5 km NW of The Geysers, CA',
      url: 'https://earthquake.usgs.gov/earthquakes/eventpage/nc-test',
      lat: 38.8, lon: -122.75, depthKm: 3.25, magnitude: 2.8, entropy: 0.16,
      publishedAt: '2026-11-21T11:59:00.000Z', collectedAt: COLLECTED, demo: false,
    });
  });

  it('keeps catalog IDs stable across revised title, magnitude, location and retrieval time', () => {
    const [original] = parseUsgs(usgsCollection(usgsFeature()), COLLECTED);
    const [revised] = parseUsgs(usgsCollection(usgsFeature({ title: 'Revised title', mag: 3.1 }, [-122.76, 38.81, 4])),
      new Date(NOW + CACHE_TTL_MS).toISOString());
    expect(revised.id).toBe(original.id);
    expect(revised.publishedAt).toBe(original.publishedAt);
    expect(revised).toMatchObject({ summary: 'Revised title', magnitude: 3.1, lat: 38.81, lon: -122.76, depthKm: 4 });
    expect(revised.collectedAt).not.toBe(original.collectedAt);
  });

  it.each([
    [-180, -90, -100], [180, 90, 1000], [0, 0, 0], [179.99, 0.001, -1.5],
  ])('accepts valid boundary coordinates/depth %s, %s, %s without clamping', (lon, lat, depthKm) => {
    expect(parseUsgs(usgsCollection(usgsFeature({}, [lon, lat, depthKm])), COLLECTED)[0])
      .toMatchObject({ lon, lat, depthKm });
  });

  it.each([null, {}, [], [0, 0], [0, 0, 1, 2], [180.001, 0, 1], [-180.001, 0, 1],
    [0, 90.001, 1], [0, -90.001, 1], [null, 0, 1], [0, null, 1], [0, 0, null],
    ['0', 0, 1], [0, '0', 1], [0, 0, '1'], [false, 0, 1], [0, 0, -100.001], [0, 0, 1000.001],
  ].map(coordinates => ({ coordinates })))('skips invalid Point coordinates $coordinates', ({ coordinates }) => {
    expect(parseUsgs(usgsCollection(usgsFeature({}, coordinates)), COLLECTED)).toEqual([]);
  });

  it.each([null, undefined, '', '2.5', false, {}, -10.001, 10.001])('rejects invalid magnitudes %s', mag => {
    expect(parseUsgs(usgsCollection(usgsFeature({ mag })), COLLECTED)).toEqual([]);
  });

  it.each([-10, -1, 0, 2.5, 4.9, 5, 6, 6.999, 7, 8, 10])('classifies M%s by magnitude rather than scary title words', mag => {
    const [result] = parseUsgs(usgsCollection(usgsFeature({ mag, title: 'Catastrophic earthquake: thousands killed' })), COLLECTED);
    expect(result.magnitude).toBe(mag);
    expect(result.tag).toBe('地壳微震');
    expect(result.entropy).toBeGreaterThanOrEqual(0);
    expect(result.entropy).toBeLessThanOrEqual(1);
    if (mag < 7) expect(result.entropy).toBeLessThanOrEqual(0.4);
    else expect(result.entropy).toBeGreaterThan(0.75);
  });

  it.each([null, undefined, '', String(NOW), new Date(NOW).toISOString(), false, {}, 0, -1,
    NOW / 1000, NOW - 0.5, NOW + 1, NOW - 24 * 60 * 60 * 1000 - CACHE_TTL_MS - 1,
    Number.MAX_SAFE_INTEGER, 8.64e15 + 1,
  ])('rejects invalid/out-of-window event time %s instead of using updated/retrieval time', time => {
    expect(parseUsgs(usgsCollection(usgsFeature({ time })), COLLECTED)).toEqual([]);
  });

  it.each([NOW, NOW - 24 * 60 * 60 * 1000 - CACHE_TTL_MS])('accepts inclusive event time bounds %s', time => {
    expect(parseUsgs(usgsCollection(usgsFeature({ time })), COLLECTED)[0].publishedAt).toBe(new Date(time).toISOString());
  });

  it.each(['mag', 'time'])('rejects non-finite JSON numbers in %s', field => {
    const body = usgsCollection(usgsFeature({ [field]: 123456789 })).replace('123456789', '1e400');
    expect(parseUsgs(body, COLLECTED)).toEqual([]);
  });

  it.each([0, 1, 2])('rejects non-finite JSON coordinate %s', index => {
    const point = [-122.75, 38.8, 3.25];
    point[index] = 123456789;
    const body = usgsCollection(usgsFeature({}, point)).replace('123456789', '-1e400');
    expect(parseUsgs(body, COLLECTED)).toEqual([]);
  });

  it.each(['explosion', 'quarry blast', 'nuclear explosion', 'ice quake', 'other event', 'Earthquake', '', null, undefined, 1, {}])
    ('does not mislabel event type %s as an earthquake', type => {
      expect(parseUsgs(usgsCollection(usgsFeature({ type })), COLLECTED)).toEqual([]);
    });

  it.each([null, undefined, '', ' ', 123, {}, 'bad id', '<id>'])('rejects missing/invalid event IDs %s', id => {
    const feature = { ...usgsFeature(), id };
    expect(parseUsgs(usgsCollection(feature), COLLECTED)).toEqual([]);
  });

  it.each(['title', 'place', 'url'])('requires real nonempty string %s', field => {
    for (const value of [null, undefined, '', ' ', 1, false, {}]) {
      expect(parseUsgs(usgsCollection(usgsFeature({ [field]: value })), COLLECTED)).toEqual([]);
    }
  });

  it.each(['javascript:alert(1)', 'data:text/html,bad', 'file:///etc/passwd', '//example.org',
    'https://user:secret@example.org', 'java&#x73;cript:alert(1)', 'https://exa\nmple.org',
  ])('rejects unsafe links %s', url => {
    expect(parseUsgs(usgsCollection(usgsFeature({ url })), COLLECTED)).toEqual([]);
  });

  it('sanitizes supplied title/place without substituting gazetteer matches', () => {
    const [result] = parseUsgs(usgsCollection(usgsFeature({
      title: '<b>M 2.8</b> - A &amp; B', place: '<script>bad()</script>A &amp; B',
    })), COLLECTED);
    expect(result.summary).toBe('M 2.8 - A & B');
    expect(result.settlement).toBe('A & B');
  });

  it('skips malformed rows and non-Point geometries without losing valid neighbours', () => {
    const result = parseUsgs(usgsCollection(null, [], {},
      { ...usgsFeature(), type: 'Other' }, { ...usgsFeature(), properties: null },
      { ...usgsFeature(), geometry: null }, { ...usgsFeature(), geometry: { type: 'LineString', coordinates: [-122.75, 38.8, 3.25] } },
      usgsFeature({ type: 'explosion' }), usgsFeature()), COLLECTED);
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe('usgs-nc-test');
  });

  it.each(['<html>Unavailable</html>', 'null', '[]', '{}', '{"type":"FeatureCollection","features":{}}',
    '{"type":"Feature","features":[]}',
  ])('rejects malformed feed shape %s', body => {
    expect(() => parseUsgs(body, COLLECTED)).toThrow();
  });

  it('accepts empty collections and rejects invalid retrieval time', () => {
    expect(parseUsgs(usgsCollection(), COLLECTED)).toEqual([]);
    expect(() => parseUsgs(usgsCollection(usgsFeature()), 'invalid')).toThrow('retrieval time');
  });
});

describe('classification, source balance and deduplication', () => {
  it.each([
    ['London missile attack', '局部摩擦'], ['Tokyo earthquake', '灾变扰动'],
    ['Paris election protests', '秩序震荡'], ['人工智能技术发布', '技术跃迁'], ['文化展览开幕', '表面喧嚣'],
  ])('classifies %s without making ordinary headlines severe', (title, tag) => {
    expect(classify(title).tag).toBe(tag);
    expect(classify(title).entropy).toBeLessThanOrEqual(0.75);
  });

  it('reserves high entropy for severe catastrophic matches, not hypothetical threats', () => {
    expect(classify('Catastrophic earthquake: hundreds killed').entropy).toBeGreaterThan(0.75);
    expect(classify('Nuclear attack drill in London').entropy).toBeLessThanOrEqual(0.75);
    expect(classify('Fears of a nuclear attack').entropy).toBeLessThanOrEqual(0.75);
    expect(classify('Earthquake reported in Tokyo').entropy).toBeLessThanOrEqual(0.75);
  });

  it('deduplicates by canonical article URL then normalized title', () => {
    const result = balanceAndDeduplicate([
      [item('a', 'Original title', 'https://example.org/a?utm_source=rss#top'), item('c', ' Same Title ')],
      [item('b', 'Different title', 'https://example.org/a'), item('d', 'same title'), item('e', 'Unique')],
    ]);
    expect(result.map(entry => entry.id)).toEqual(['a', 'c', 'e']);
  });

  it('returns at most 160, round-robin balanced across six large sources', () => {
    const batches = SOURCES.map(source => Array.from({ length: 200 }, (_, index) => item(`${source.id}-${index}`)));
    const result = balanceAndDeduplicate(batches);
    expect(result).toHaveLength(160);
    const counts = SOURCES.map(source => result.filter(entry => entry.id.startsWith(`${source.id}-`)).length);
    expect(Math.max(...counts) - Math.min(...counts)).toBeLessThanOrEqual(1);
  });

  it('deduplicates earthquake IDs, not repeated titles, and never offsets seismic points', () => {
    const quakes = parseUsgs(usgsCollection(usgsFeature(), usgsFeature({}, undefined, 'nc-second')), COLLECTED);
    quakes[0].displayCoordinates = { lat: 1, lon: 2 };
    const human = [0, 1].map(index => ({ ...item(`news-${index}`), lat: 38.8, lon: -122.75, precision: 'city' as const }));
    const result = balanceAndDeduplicate([[...quakes, { ...quakes[0], url: 'https://example.org/revised', summary: 'Revised title' }], human]);
    expect(result.map(event => event.id)).toEqual(['usgs-nc-test', 'news-0', 'usgs-nc-second', 'news-1']);
    for (const quake of result.filter(event => event.kind === 'quake')) {
      expect(quake).toMatchObject({ lat: 38.8, lon: -122.75, depthKm: 3.25 });
      expect(quake).not.toHaveProperty('displayCoordinates');
    }
    expect(result.filter(event => event.kind !== 'quake').every(event => event.displayCoordinates)).toBe(true);
    expect(quakes[0].displayCoordinates).toEqual({ lat: 1, lon: 2 });
    expect(balanceAndDeduplicate([result])).toEqual(result);
  });

  it('retains balanced natural and human events even when the seismic feed is large', () => {
    const quakes = parseUsgs(usgsCollection(...Array.from({ length: 300 }, (_, index) => usgsFeature({}, undefined, `nc-${index}`))), COLLECTED);
    const batches = [quakes, ...SOURCES.slice(1).map(source => Array.from({ length: 200 }, (_, index) => item(`${source.id}-${index}`)))];
    const result = balanceAndDeduplicate(batches);
    expect(result).toHaveLength(160);
    expect(result.filter(event => event.kind === 'quake')).toHaveLength(27);
    for (const source of SOURCES.slice(1)) {
      expect(result.filter(event => event.id.startsWith(`${source.id}-`)).length).toBeGreaterThanOrEqual(26);
    }
  });

  it('applies the severe-event quota to M7+ earthquakes as well as news', () => {
    const quakes = parseUsgs(usgsCollection(...Array.from({ length: 100 }, (_, index) => usgsFeature({ mag: index === 99 ? 8 : 7 }, undefined, `nc-${index}`))), COLLECTED);
    const result = balanceAndDeduplicate([quakes]);
    expect(result.filter(event => event.entropy > 0.75)).toHaveLength(5);
    expect(result.find(event => event.id === 'usgs-nc-99')?.entropy).toBe(0.95);
    expect(quakes.every(event => event.entropy > 0.75)).toBe(true);
  });

  it('caps red severe events at floor(5% of batch), retaining the highest ranked', () => {
    const result = balanceAndDeduplicate([Array.from({ length: 100 }, (_, index) => item(`${index}`, `Headline ${index}`, null, index === 99 ? 0.98 : 0.9))]);
    expect(result.filter(entry => entry.entropy > 0.75)).toHaveLength(5);
    expect(result.find(entry => entry.id === '99')?.entropy).toBe(0.98);
    expect(balanceAndDeduplicate([[item('small', 'Catastrophic earthquake', null, 0.95)]])[0].entropy).toBe(0.75);
  });
});

describe('aggregation, deadlines and five-minute cache', () => {
  it('configures only USGS and the unchanged five RSS sources', () => {
    expect(SOURCES[0]).toEqual({ id: 'usgs', name: 'USGS 地壳微震', kind: 'seismic',
      url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson' });
    expect(SOURCES.slice(1).map(source => [source.id, source.kind, source.url])).toEqual([
      ['bbc-world', 'rss', 'https://feeds.bbci.co.uk/news/world/rss.xml'],
      ['al-jazeera', 'rss', 'https://www.aljazeera.com/xml/rss/all.xml'],
      ['guardian', 'rss', 'https://www.theguardian.com/world/rss'],
      ['bbc-chinese', 'rss', 'https://feeds.bbci.co.uk/zhongwen/trad/rss.xml'],
      ['un-chinese', 'rss', 'https://news.un.org/feed/subscribe/zh/news/all/rss.xml'],
    ]);
  });

  it('caches real seismic items alongside RSS, preserves retrieval time on failure, and recovers revisions', async () => {
    let clock = NOW;
    let offline = false;
    let magnitude = 2.8;
    const fetcher = fetchMock(async (url, init) => {
      if (offline) throw new Error('Offline');
      if (url !== SOURCES[0].url) return success(url);
      expect(new Headers(init?.headers).get('accept')).toContain('application/geo+json');
      return new Response(new ReadableStream<Uint8Array>({
        pull(controller) {
          clock += 2500;
          controller.enqueue(new TextEncoder().encode(usgsCollection(
            usgsFeature({ mag: magnitude }), usgsFeature({ mag: magnitude }), usgsFeature({}, undefined, 'nc-second'),
            usgsFeature({ mag: null }), usgsFeature({ type: 'explosion' }),
          )));
          controller.close();
        },
      }));
    });
    const service = createNewsService({ fetchImpl: fetcher, now: () => clock });
    const initial = await service.getSnapshot();
    const firstQuake = initial.events.find(event => event.id === 'usgs-nc-test')!;
    expect(initial.mode).toBe('live');
    expect(initial.sources.every(source => source.state === 'online')).toBe(true);
    expect(initial.sources[0]).toMatchObject({ id: 'usgs', name: 'USGS 地壳微震', count: 3 });
    expect(initial.events).toHaveLength(7);
    expect(initial.events.filter(event => event.kind === 'quake')).toHaveLength(2);
    expect(firstQuake).toMatchObject({ magnitude: 2.8, publishedAt: '2026-11-21T11:59:00.000Z', collectedAt: new Date(NOW + 2500).toISOString() });
    expect(firstQuake).not.toHaveProperty('displayCoordinates');
    expect(initial.warning).toContain('新闻');
    expect(initial.warning).toContain('近似');
    expect(initial.warning).toContain('USGS');
    expect(initial.warning).toContain('震中');
    expect(initial.warning).toContain('深度');
    expect(initial.warning).toContain('修订');
    expect(initial.warning).not.toMatch(/GDELT|不可用/);
    clock += CACHE_TTL_MS - 1;
    expect(await service.getSnapshot()).toBe(initial);
    expect(fetcher).toHaveBeenCalledTimes(6);
    offline = true;
    clock++;
    const stale = await service.getSnapshot();
    expect(stale.mode).toBe('cached');
    expect(stale.events).toEqual(initial.events);
    expect(stale.sources[0].state).toBe('error');
    expect(stale.fetchedAt).toBe(initial.fetchedAt);
    expect(stale.checkedAt).not.toBe(initial.checkedAt);
    offline = false;
    magnitude = 3.2;
    clock += CACHE_TTL_MS;
    const recovered = await service.getSnapshot();
    expect(recovered.mode).toBe('live');
    expect(recovered.sources[0].state).toBe('online');
    expect(recovered.events.find(event => event.id === firstQuake.id)).toMatchObject({
      magnitude: 3.2, publishedAt: firstQuake.publishedAt, collectedAt: new Date(clock).toISOString(),
    });
    expect(fetcher).toHaveBeenCalledTimes(18);
    expect(fetcher.mock.calls.every(([url]) => !String(url).includes('gdelt'))).toBe(true);
  });

  it.each([true, false])('allows USGS-only success, including an empty feed (%s)', async empty => {
    const fetcher = fetchMock(async url => {
      if (url !== SOURCES[0].url) throw new Error('RSS unavailable');
      return new Response(empty ? usgsCollection() : usgsCollection(usgsFeature()));
    });
    const snapshot = await createNewsService({ fetchImpl: fetcher, now: () => NOW }).getSnapshot();
    expect(snapshot.mode).toBe('live');
    expect(snapshot.sources[0]).toMatchObject({ id: 'usgs', state: 'online', count: empty ? 0 : 1 });
    expect(snapshot.events).toHaveLength(empty ? 0 : 1);
    expect(snapshot.events.every(event => event.kind === 'quake' && !event.demo)).toBe(true);
    expect(snapshot.warning).toContain('5 个来源当前不可用');
    expect(snapshot.warning).not.toContain('GDELT');
  });

  it('fetches all six fixed sources and exposes partial failures with check times', async () => {
    const fetcher = fetchMock(async (url, init) => {
      expect(init?.method).toBe('GET');
      expect(init?.redirect).toBe('error');
      expect(init?.signal).toBeInstanceOf(AbortSignal);
      return url === SOURCES[0].url ? new Response('Not found', { status: 404 }) : success(url);
    });
    const snapshot = await createNewsService({ fetchImpl: fetcher, now: () => NOW }).getSnapshot();
    expect(fetcher).toHaveBeenCalledTimes(6);
    expect(new Set(fetcher.mock.calls.map(call => call[0]))).toEqual(new Set(SOURCES.map(source => source.url)));
    expect(snapshot.mode).toBe('live');
    expect(snapshot.events).toHaveLength(5);
    expect(snapshot.sources[0]).toMatchObject({ id: 'usgs', state: 'error', count: 0, error: 'HTTP 404', checkedAt: COLLECTED });
    expect(snapshot.sources.slice(1).every(source => source.state === 'online' && source.checkedAt === COLLECTED)).toBe(true);
    expect(snapshot.events.every(event => !event.demo && event.collectedAt === COLLECTED)).toBe(true);
  });

  it('considers valid empty feeds online, but malformed feeds error', async () => {
    const fetcher = fetchMock(async url => new Response(url === SOURCES[0].url ? '{"wrong":true}' : xml()));
    const snapshot = await createNewsService({ fetchImpl: fetcher }).getSnapshot();
    expect(snapshot.mode).toBe('live');
    expect(snapshot.events).toEqual([]);
    expect(snapshot.sources.filter(source => source.state === 'online')).toHaveLength(5);
    expect(snapshot.sources[0].state).toBe('error');
  });

  it('returns explicit non-real demo events on cold all-failure', async () => {
    const snapshot = await createNewsService({ fetchImpl: failingFetch(), now: () => NOW }).getSnapshot();
    expect(snapshot.mode).toBe('demo');
    expect(snapshot.events.length).toBeGreaterThan(0);
    expect(snapshot.events.every(event => event.demo && event.url === null && event.publishedAt === null && event.summary.includes('非真实新闻'))).toBe(true);
    expect(snapshot.sources).toHaveLength(6);
    expect(snapshot.sources.every(source => source.state === 'error' && source.checkedAt === COLLECTED)).toBe(true);
  });

  it('coalesces in-flight callers, uses the TTL, and preserves honest source check times', async () => {
    let clock = NOW;
    let release!: () => void;
    const barrier = new Promise<void>(resolve => { release = resolve; });
    const fetcher = fetchMock(async url => { await barrier; return success(url); });
    const service = createNewsService({ fetchImpl: fetcher, now: () => clock });
    const first = service.getSnapshot();
    const second = service.getSnapshot();
    expect(second).toBe(first);
    expect(fetcher).toHaveBeenCalledTimes(SOURCES.length);
    release();
    const initial = await first;
    expect(fetcher).toHaveBeenCalledTimes(6);
    clock += CACHE_TTL_MS - 1;
    expect(await service.getSnapshot()).toBe(initial);
    expect(fetcher).toHaveBeenCalledTimes(6);
    expect(initial.sources.every(source => source.checkedAt === COLLECTED)).toBe(true);
    expect(initial.nextRefreshAt).toBe(new Date(NOW + CACHE_TTL_MS).toISOString());
    clock++;
    const refreshed = await service.getSnapshot();
    expect(fetcher).toHaveBeenCalledTimes(12);
    expect(refreshed.checkedAt).toBe(new Date(clock).toISOString());
  });

  it('retains last-good events on all-failure while replacing all current source statuses', async () => {
    let clock = NOW;
    let offline = false;
    const fetcher = fetchMock(async url => {
      if (offline) throw new Error('offline');
      return success(url);
    });
    const service = createNewsService({ fetchImpl: fetcher, now: () => clock });
    const initial = await service.getSnapshot();
    offline = true;
    clock += CACHE_TTL_MS;
    const stale = await service.getSnapshot();
    expect(stale.mode).toBe('cached');
    expect(stale.events).toEqual(initial.events);
    expect(stale.events.every(event => !event.demo && event.collectedAt === COLLECTED)).toBe(true);
    expect(stale.fetchedAt).toBe(initial.fetchedAt);
    expect(stale.checkedAt).not.toBe(initial.checkedAt);
    expect(stale.sources.every(source => source.state === 'error' && source.checkedAt === stale.checkedAt)).toBe(true);
    expect(stale.warning).toContain('旧数据');
    expect(await service.getSnapshot()).toBe(stale);
    expect(fetcher).toHaveBeenCalledTimes(12);
    offline = false;
    clock += CACHE_TTL_MS;
    expect((await service.getSnapshot()).mode).toBe('live');
  });

  it('recovers from a cached cold demo at the next TTL without timer handles', async () => {
    let clock = NOW;
    let online = false;
    const fetcher = fetchMock(async url => { if (!online) throw new Error('offline'); return success(url); });
    const service = createNewsService({ fetchImpl: fetcher, now: () => clock });
    expect((await service.getSnapshot()).mode).toBe('demo');
    online = true;
    expect((await service.getSnapshot()).mode).toBe('demo');
    clock += CACHE_TTL_MS;
    const snapshot = await service.getSnapshot();
    expect(snapshot.mode).toBe('live');
    expect(snapshot.events.every(event => !event.demo)).toBe(true);
  });

  it('bounds concurrency and still attempts every source', async () => {
    let active = 0;
    let maximum = 0;
    const fetcher = fetchMock(async url => {
      active++;
      maximum = Math.max(maximum, active);
      await new Promise(resolve => setImmediate(resolve));
      active--;
      return success(url);
    });
    await createNewsService({ fetchImpl: fetcher, concurrency: 2 }).getSnapshot();
    expect(maximum).toBe(2);
    expect(fetcher).toHaveBeenCalledTimes(6);
  });

  it('enforces an injectable deadline <=12s even when fetch never settles', async () => {
    const callbacks: (() => void)[] = [];
    const cancellations = vi.fn();
    const schedule: DeadlineScheduler = (callback, ms) => {
      expect(ms).toBe(12_000);
      callbacks.push(callback);
      return cancellations;
    };
    const signals: AbortSignal[] = [];
    const fetcher = fetchMock(async (_url, init) => {
      signals.push(init!.signal!);
      return new Promise<Response>(() => {});
    });
    const pending = createNewsService({ fetchImpl: fetcher, timeoutMs: 99_000,
      scheduleDeadline: schedule, now: () => NOW }).getSnapshot();
    expect(callbacks).toHaveLength(6);
    callbacks.forEach(callback => callback());
    const snapshot = await pending;
    expect(snapshot.mode).toBe('demo');
    expect(snapshot.sources.every(source => source.error?.includes('timeout'))).toBe(true);
    expect(signals.every(signal => signal.aborted)).toBe(true);
    expect(cancellations).toHaveBeenCalledTimes(6);
  });

  it('applies the same deadline to stalled response bodies and cancels their streams', async () => {
    const callbacks: (() => void)[] = [];
    const cancelled = vi.fn();
    const fetcher = fetchMock(async () => new Response(new ReadableStream<Uint8Array>({
      start(controller) { controller.enqueue(new TextEncoder().encode('<rss>')); },
      cancel: cancelled,
    })));
    const pending = createNewsService({ fetchImpl: fetcher, concurrency: 6,
      scheduleDeadline: callback => { callbacks.push(callback); return () => {}; },
    }).getSnapshot();
    await new Promise(resolve => setImmediate(resolve));
    callbacks.forEach(callback => callback());
    const snapshot = await pending;
    expect(snapshot.sources.every(source => source.state === 'error')).toBe(true);
    expect(cancelled).toHaveBeenCalledTimes(6);
  });

  it('rejects a response declaring more than 3MB', async () => {
    const fetcher = fetchMock(async () => new Response(xml(), { headers: { 'content-length': String(MAX_RESPONSE_BYTES + 1) } }));
    const snapshot = await createNewsService({ fetchImpl: fetcher }).getSnapshot();
    expect(snapshot.sources.every(source => source.state === 'error' && source.error?.includes('3 MB'))).toBe(true);
  });

  it('enforces the streaming byte limit even when content-length is absent', async () => {
    const fetcher = fetchMock(async () => new Response(new ReadableStream<Uint8Array>({
      start(controller) {
        controller.enqueue(new Uint8Array(MAX_RESPONSE_BYTES));
        controller.enqueue(new Uint8Array(1));
        controller.close();
      },
    })));
    const snapshot = await createNewsService({ fetchImpl: fetcher }).getSnapshot();
    expect(snapshot.sources.every(source => source.state === 'error' && source.error?.includes('3 MB'))).toBe(true);
  });

  it('retries transient transport errors once when configured without retrying 404s', async () => {
    const attempts = new Map<string, number>();
    const fetcher = fetchMock(async url => {
      const count = (attempts.get(url) ?? 0) + 1;
      attempts.set(url, count);
      if (url === SOURCES[0].url && count === 1) throw new TypeError('fetch failed');
      if (url === SOURCES[1].url) return new Response('Not found', { status: 404 });
      return success(url);
    });
    const snapshot = await createNewsService({ fetchImpl: fetcher, retries: 1, retryDelayMs: 0, now: () => NOW }).getSnapshot();
    expect(attempts.get(SOURCES[0].url)).toBe(2);
    expect(attempts.get(SOURCES[1].url)).toBe(1);
    expect(snapshot.sources[0].state).toBe('online');
    expect(snapshot.sources[1].state).toBe('error');
  });

  it('uses a short retry TTL for cold demo failures instead of blocking for five minutes', async () => {
    let clock = NOW;
    let online = false;
    const fetcher = fetchMock(async url => { if (!online) throw new Error('offline'); return success(url); });
    const service = createNewsService({ fetchImpl: fetcher, now: () => clock });
    const cold = await service.getSnapshot();
    expect(cold.mode).toBe('demo');
    expect(cold.nextRefreshAt).toBe(new Date(NOW + DEMO_CACHE_TTL_MS).toISOString());
    online = true;
    clock += DEMO_CACHE_TTL_MS;
    const recovered = await service.getSnapshot();
    expect(recovered.mode).toBe('live');
  });
});
