import { afterEach, describe, expect, it, vi } from 'vitest';
import { MOCK_EVENTS } from '../mock/noise';
import { fetchNews, isLocated, parseNewsSnapshot, resolveNewsEndpoints, safeArticleUrl } from './news';

const snapshot = { events: MOCK_EVENTS, sources: [], mode: 'demo', fetchedAt: '2026-11-21T00:00:00Z', checkedAt: '2026-11-21T00:00:00Z', nextRefreshAt: '2026-11-21T00:05:00Z' };
afterEach(() => vi.unstubAllGlobals());
describe('browser news boundary', () => {
  it('only accepts safe article schemes', () => {
    expect(safeArticleUrl('javascript:alert(1)')).toBeNull();
    expect(safeArticleUrl('data:text/html,hi')).toBeNull();
    expect(safeArticleUrl('https://example.com/world')).toBe('https://example.com/world');
    expect(safeArticleUrl('https://user:secret@example.com')).toBeNull();
  });
  it('keeps unlocated items off the sphere', () => {
    expect(isLocated({ ...MOCK_EVENTS[0], lat: null, lon: null })).toBe(false);
    expect(isLocated({ ...MOCK_EVENTS[0], lat: NaN })).toBe(false);
    expect(isLocated(MOCK_EVENTS[0])).toBe(true);
  });
  it('rejects malformed snapshots and strips unsafe links', () => {
    expect(() => parseNewsSnapshot({})).toThrow();
    const parsed = parseNewsSnapshot({ ...snapshot, events: [{ ...MOCK_EVENTS[0], url: 'javascript:alert(1)', publishedAt: 'invalid', displayCoordinates: { lat: 500, lon: 0 } }] });
    expect(parsed.events[0].url).toBeNull();
    expect(parsed.events[0].publishedAt).toBeNull();
    expect(parsed.events[0].displayCoordinates).toBeUndefined();
  });
  it('preserves precise seismic coordinates without display offsets', () => {
    const quake = { ...MOCK_EVENTS[0], kind: 'quake', precision: 'seismic', magnitude: 4.2, depthKm: -1.5, displayCoordinates: { lat: 1, lon: 2 } };
    const parsed = parseNewsSnapshot({ ...snapshot, events: [quake] }).events[0];
    expect(parsed.lat).toBe(quake.lat);
    expect(parsed.lon).toBe(quake.lon);
    expect(parsed.magnitude).toBe(4.2);
    expect(parsed.depthKm).toBe(-1.5);
    expect(parsed.displayCoordinates).toBeUndefined();
  });
  it.each([
    { magnitude: '4.2' }, { magnitude: null }, { magnitude: Infinity }, { magnitude: 11 },
    { depthKm: '10' }, { depthKm: null }, { depthKm: NaN }, { depthKm: 1001 },
    { lat: null, lon: null }, { precision: 'city' }, { kind: 'news' }, { kind: 'untrusted' },
  ])('rejects malformed seismic metadata at the browser/cache boundary: %j', (invalid) => {
    const quake = { ...MOCK_EVENTS[0], kind: 'quake', precision: 'seismic', magnitude: 4.2, depthKm: 10, ...invalid };
    expect(parseNewsSnapshot({ ...snapshot, events: [quake] }).events).toEqual([]);
  });
  it('uses unmistakable offline samples when both network and cache unavailable', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new TypeError('offline')));
    vi.stubGlobal('localStorage', { getItem: () => '{corrupted' });
    const result = await fetchNews();
    expect(result.mode).toBe('demo');
    expect(result.warning).toContain('离线演示样本');
    expect(result.events.every((event) => event.demo && event.url === null)).toBe(true);
  });
  it('resolves safe configured news endpoints and falls back to /api/news', () => {
    expect(resolveNewsEndpoints('')).toEqual(['/api/news']);
    expect(resolveNewsEndpoints('javascript:alert(1), //evil.invalid/a, https://example.github.io/singer/data/news.json, ./data/news.json')).toEqual([
      'https://example.github.io/singer/data/news.json',
      './data/news.json',
    ]);
  });
  it('falls back across configured static news endpoints when the primary endpoint fails', async () => {
    const liveSnapshot = { ...snapshot, mode: 'live' as const, events: [{ ...MOCK_EVENTS[0], demo: false }] };
    const fetchMock = vi.fn()
      .mockRejectedValueOnce(new TypeError('primary unreachable'))
      .mockResolvedValueOnce(new Response(JSON.stringify(liveSnapshot), { status: 200 }));
    vi.stubGlobal('fetch', fetchMock);
    vi.stubGlobal('localStorage', { getItem: () => null, setItem: () => {} });
    const result = await fetchNews(undefined, ['https://primary.invalid/news.json', 'https://backup.invalid/news.json']);
    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(result.mode).toBe('live');
    expect(result.events).toHaveLength(1);
  });
});
