import { MOCK_EVENTS } from '../mock/noise';
import type { NewsItem, NewsSnapshot, NoiseEvent } from './types';

const STORAGE_KEY = 'singer-news-v2';
const MAX_STALE_MS = 6 * 3600000;
let lastGood: NewsSnapshot | null = null;

export function isLocated(event: NewsItem): event is NoiseEvent {
  return typeof event.lat === 'number' && Number.isFinite(event.lat) && Math.abs(event.lat) <= 90
    && typeof event.lon === 'number' && Number.isFinite(event.lon) && Math.abs(event.lon) <= 180;
}

export function safeArticleUrl(value: unknown): string | null {
  if (typeof value !== 'string') return null;
  try {
    const url = new URL(value);
    return ['https:', 'http:'].includes(url.protocol) && !url.username && !url.password ? url.href : null;
  } catch { return null; }
}

export function parseNewsSnapshot(value: unknown): NewsSnapshot {
  if (!value || typeof value !== 'object') throw new Error('噪音频段格式异常');
  const data = value as NewsSnapshot;
  if (!['live', 'cached', 'demo'].includes(data.mode) || !Array.isArray(data.events) || !Array.isArray(data.sources)
    || !Number.isFinite(Date.parse(data.fetchedAt)) || !Number.isFinite(Date.parse(data.checkedAt))
    || !Number.isFinite(Date.parse(data.nextRefreshAt))) throw new Error('噪音频段格式异常');
  const events = data.events.filter((event) => event && typeof event.id === 'string' && typeof event.summary === 'string'
    && typeof event.source === 'string' && typeof event.settlement === 'string' && typeof event.tag === 'string'
    && Number.isFinite(event.entropy) && typeof event.demo === 'boolean'
    && (event.kind === undefined || event.kind === 'news' || event.kind === 'quake')
    && (!(event.kind === 'quake' || event.precision === 'seismic') || (event.kind === 'quake' && event.precision === 'seismic'
      && isLocated(event) && typeof event.magnitude === 'number' && Number.isFinite(event.magnitude) && Math.abs(event.magnitude) <= 10
      && typeof event.depthKm === 'number' && Number.isFinite(event.depthKm) && event.depthKm >= -100 && event.depthKm <= 1000))
    && (isLocated(event) || (event.lat === null && event.lon === null))
    && Number.isFinite(Date.parse(event.collectedAt))).slice(0, 180).map((event) => ({
      ...event,
      url: safeArticleUrl(event.url),
      publishedAt: event.publishedAt && Number.isFinite(Date.parse(event.publishedAt)) ? event.publishedAt : null,
      displayCoordinates: event.kind !== 'quake' && event.displayCoordinates && Number.isFinite(event.displayCoordinates.lat) && Math.abs(event.displayCoordinates.lat) <= 90
        && Number.isFinite(event.displayCoordinates.lon) && Math.abs(event.displayCoordinates.lon) <= 180 ? event.displayCoordinates : undefined,
    }));
  const sources = data.sources.filter((source) => source && typeof source.id === 'string' && typeof source.name === 'string'
    && ['online', 'error'].includes(source.state) && Number.isFinite(source.count) && Number.isFinite(Date.parse(source.checkedAt)));
  return { ...data, events, sources };
}

function readCached(): NewsSnapshot | null {
  if (lastGood && Date.now() - Date.parse(lastGood.fetchedAt) < MAX_STALE_MS) return lastGood;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const saved = parseNewsSnapshot(JSON.parse(raw));
    if (saved.mode !== 'demo' && Date.now() - Date.parse(saved.fetchedAt) < MAX_STALE_MS) return saved;
  } catch { return null; }
  return null;
}

export function resolveNewsEndpoints(configured = import.meta.env.VITE_NEWS_API_URL ?? ''): string[] {
  const candidates = configured
    .split(',')
    .map((entry) => entry.trim())
    .filter((entry) => {
      if (!entry || /[\u0000-\u0020\u007f<>]/.test(entry)) return false;
      if (entry.startsWith('/') && !entry.startsWith('//')) return true;
      if (entry.startsWith('./') || entry.startsWith('../')) return true;
      return safeArticleUrl(entry) !== null;
    });
  return candidates.length > 0 ? candidates : ['/api/news'];
}

export async function fetchNews(signal?: AbortSignal, endpoints = resolveNewsEndpoints()): Promise<NewsSnapshot> {
  try {
    let lastError: unknown;
    for (const endpoint of endpoints) {
      try {
        const response = await fetch(endpoint, { signal: AbortSignal.any([AbortSignal.timeout(16000), ...(signal ? [signal] : [])]), cache: 'no-store' });
        if (!response.ok) throw new Error(`频段返回 ${response.status}`);
        const snapshot = parseNewsSnapshot(await response.json());
        if (snapshot.mode !== 'demo' && snapshot.events.length > 0) {
          lastGood = snapshot;
          try { localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot)); } catch { /* Storage is optional in restricted browser contexts. */ }
        }
        return snapshot;
      } catch (error) {
        if (signal?.aborted) throw error;
        lastError = error;
      }
    }
    throw lastError ?? new Error('频段不可达');
  } catch (error) {
    if (signal?.aborted) throw error;
    const now = new Date().toISOString();
    const cached = readCached();
    if (cached) return {
      ...cached, mode: 'cached', checkedAt: now, nextRefreshAt: new Date(Date.now() + 300000).toISOString(),
      sources: cached.sources.map((source) => ({ ...source, state: 'error', checkedAt: now, error: '聚合链路不可达，源状态未能更新' })),
      warning: '聚合链路不可达 · 保留上次真实噪音缓存',
    };
    return { events: MOCK_EVENTS, sources: [], mode: 'demo', fetchedAt: now, checkedAt: now,
      nextRefreshAt: new Date(Date.now() + 300000).toISOString(), warning: '链路不可达 · 离线演示样本，非真实资讯' };
  }
}
