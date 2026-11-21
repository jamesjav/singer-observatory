import type { Coordinates } from '../../astronomy/coordinates';
import type { AtmosphericReading, WeatherState, WindSample, WindState } from './types';

const ENDPOINT = 'https://api.open-meteo.com/v1/forecast';
const WEATHER_TTL = 5 * 60_000;
const WIND_TTL = 20 * 60_000;
const WEATHER_MAX_AGE = 2 * 60 * 60_000;
const WIND_MAX_AGE = 6 * 60 * 60_000;
const CACHE_KEY = 'singer:meteo:v1';
const POINT_LIMIT = 32;
const MODEL_NOTE = 'Open-Meteo 当前模型条件，非站点实测或历史回放；坐标对应邻近模型网格';
const WIND_FIELDS = 'wind_speed_10m,wind_direction_10m';
const WEATHER_FIELDS = `temperature_2m,${WIND_FIELDS},surface_pressure,cloud_cover,precipitation,weather_code`;

/** Sparse, deterministic 5 × 12 grid, including ocean points; not a resolved global flow field. */
export const WIND_GRID: ReadonlyArray<Readonly<Coordinates>> = Object.freeze(
  [-70, -35, 0, 35, 70].flatMap(lat =>
    Array.from({ length: 12 }, (_, i) => Object.freeze({ lat, lon: -180 + i * 30 }))),
);

const descriptions: Record<number, string> = {
  0: '晴朗', 1: '大部晴朗', 2: '局部多云', 3: '阴天', 45: '雾', 48: '雾凇',
  51: '轻微毛毛雨', 53: '毛毛雨', 55: '较强毛毛雨', 56: '轻微冻毛毛雨', 57: '冻毛毛雨',
  61: '小雨', 63: '中雨', 65: '大雨', 66: '轻微冻雨', 67: '冻雨',
  71: '小雪', 73: '中雪', 75: '大雪', 77: '雪粒',
  80: '小阵雨', 81: '阵雨', 82: '强阵雨', 85: '小阵雪', 86: '较强阵雪',
  95: '雷雨', 96: '雷雨伴小冰雹', 97: '强雷雨', 99: '雷雨伴冰雹',
};
export function weatherDescription(code: number): string {
  return descriptions[code] ?? '天气状况未分类';
}

type JsonObject = Record<string, unknown>;
function object(value: unknown): JsonObject {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('无效的气象对象');
  return value as JsonObject;
}
function number(value: unknown, min: number, max: number): number {
  if (typeof value !== 'number' || !Number.isFinite(value) || value < min || value > max) {
    throw new Error('气象数值缺失或越界');
  }
  return value;
}
function coordinates(value: unknown): Coordinates {
  const p = object(value);
  return { lat: number(p.lat, -90, 90), lon: number(p.lon, -180, 180) };
}
function unit(units: JsonObject, field: string, expected: string): void {
  if (units[field] !== expected) throw new Error(`无法识别的单位：${field}`);
}

/** Parse ISO wall time explicitly, never in the browser's local timezone. */
function isoTime(value: unknown, utcOffset: number): string {
  if (typeof value !== 'string') throw new Error('模型时间缺失');
  const match = /^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2})(?::(\d{2})(\.\d{1,3})?)?(Z|[+-]\d{2}:\d{2})?$/.exec(value);
  if (!match) throw new Error('模型时间格式无效');
  const wall = `${match[1]}T${match[2]}:${match[3] ?? '00'}${match[4] ?? ''}`;
  const wallMs = Date.parse(`${wall}Z`);
  // Date.parse otherwise normalizes invalid dates such as February 30.
  if (!Number.isFinite(wallMs) || new Date(wallMs).toISOString().slice(0, 19) !== wall.slice(0, 19)) {
    throw new Error('模型时间无效');
  }
  const timestamp = match[5] ? Date.parse(value) : wallMs - utcOffset * 1000;
  if (!Number.isFinite(timestamp)) throw new Error('模型时区无效');
  return new Date(timestamp).toISOString();
}
function modelTime(root: JsonObject, current: JsonObject, units: JsonObject): string {
  if (units.time === 'unixtime') {
    return new Date(number(current.time, 0, 253402300799) * 1000).toISOString();
  }
  unit(units, 'time', 'iso8601');
  const hasZone = typeof current.time === 'string' && /(?:Z|[+-]\d{2}:\d{2})$/.test(current.time);
  // An explicit suffix already determines UTC; never apply utc_offset_seconds twice.
  return isoTime(current.time, hasZone ? 0 : number(root.utc_offset_seconds, -86400, 86400));
}
function windValues(current: JsonObject, units: JsonObject) {
  const factors: Record<string, number> = { 'm/s': 1, 'km/h': 1 / 3.6, mph: 0.44704, knots: 0.5144444444444445 };
  const factor = typeof units.wind_speed_10m === 'string' ? factors[units.wind_speed_10m] : undefined;
  if (typeof factor !== 'number') throw new Error('无法识别的风速单位');
  unit(units, 'wind_direction_10m', '°');
  return {
    windSpeedMs: number(number(current.wind_speed_10m, 0, 1000) * factor, 0, 150),
    // Meteorological bearing: where wind comes FROM, clockwise from north (not flow-to).
    windDirectionDeg: number(current.wind_direction_10m, 0, 360) % 360,
  };
}
function parseWind(payload: unknown, requested: Coordinates): WindSample {
  const root = object(payload);
  const p = coordinates(requested);
  const grid = coordinates({ lat: root.latitude, lon: root.longitude });
  const lonDelta = Math.abs(((grid.lon - p.lon + 540) % 360) - 180);
  // Allow model-grid snapping, but reject a clearly unrelated / reordered location.
  if (Math.hypot(grid.lat - p.lat, lonDelta * Math.cos(p.lat * Math.PI / 180)) > 2) {
    throw new Error('模型网格与请求坐标不匹配');
  }
  const current = object(root.current);
  const units = object(root.current_units);
  return { ...p, ...windValues(current, units), observedAt: modelTime(root, current, units) };
}

export function parseCurrentWeather(payload: unknown, requested: Coordinates): AtmosphericReading {
  if (Array.isArray(payload)) {
    if (payload.length !== 1) throw new Error('气象响应位置数量不匹配');
    payload = payload[0];
  }
  const root = object(payload);
  const current = object(root.current);
  const units = object(root.current_units);
  unit(units, 'temperature_2m', '°C');
  unit(units, 'surface_pressure', 'hPa');
  unit(units, 'cloud_cover', '%');
  unit(units, 'precipitation', 'mm');
  unit(units, 'weather_code', 'wmo code');
  return validateReading({
    ...parseWind(root, requested),
    temperatureC: current.temperature_2m,
    surfacePressureHpa: current.surface_pressure,
    cloudCoverPercent: current.cloud_cover,
    precipitationMm: current.precipitation,
    weatherCode: current.weather_code,
  });
}

/** Missing/invalid rows are omitted in place, never shifted onto the next requested point. */
export function parseWindBatch(payload: unknown, requested: Coordinates[]): WindSample[] {
  const rows: unknown[] = Array.isArray(payload) ? payload : [payload];
  if (rows.length !== requested.length) throw new Error('风场响应位置数量不匹配');
  const samples: Array<WindSample | undefined> = new Array(requested.length);
  const seen = new Set<number>();
  rows.forEach((row, index) => {
    const id = row && typeof row === 'object' && 'location_id' in row ? row.location_id : index;
    if (typeof id !== 'number' || !Number.isInteger(id) || id < 0 || id >= requested.length || seen.has(id)) {
      throw new Error('风场位置索引无效');
    }
    seen.add(id);
    try { samples[id] = parseWind(row, requested[id]); } catch { /* A malformed point is not calm wind. */ }
  });
  return samples.filter((sample): sample is WindSample => sample !== undefined);
}

function validateSample(value: unknown): WindSample {
  const v = object(value);
  if (typeof v.observedAt !== 'string' || !v.observedAt.endsWith('Z')) throw new Error('无效的缓存时间');
  return {
    ...coordinates(v), windSpeedMs: number(v.windSpeedMs, 0, 150),
    windDirectionDeg: number(v.windDirectionDeg, 0, 360) % 360,
    observedAt: isoTime(v.observedAt, 0),
  };
}
function validateReading(value: unknown): AtmosphericReading {
  const v = object(value);
  const weatherCode = number(v.weatherCode, 0, 99);
  if (!Number.isInteger(weatherCode)) throw new Error('天气代码无效');
  const surfacePressureHpa = number(v.surfacePressureHpa, Number.MIN_VALUE, 1500);
  return {
    ...validateSample(v), temperatureC: number(v.temperatureC, -150, 100), surfacePressureHpa,
    cloudCoverPercent: number(v.cloudCoverPercent, 0, 100),
    precipitationMm: number(v.precipitationMm, 0, 1000), weatherCode,
  };
}

type Cached<T> = { data: T; fetchedAt: number };
type Failure = { retryAt: number; message: string };
const weatherCache = new Map<string, Cached<AtmosphericReading>>();
const weatherFailures = new Map<string, Failure>();
let windCache: Cached<WindSample[]> | undefined;
let windFailure: Failure | undefined;
let storageLoaded = false;
const keyFor = ({ lat, lon }: Coordinates) => `${lat},${lon}`;
const usable = (entry: { fetchedAt: number } | undefined, now: number, age: number) =>
  !!entry && now >= entry.fetchedAt && now - entry.fetchedAt < age;
function boundedSet<T>(map: Map<string, T>, key: string, value: T) {
  map.delete(key);
  map.set(key, value);
  while (map.size > POINT_LIMIT) map.delete(map.keys().next().value!);
}
function prune(now: number) {
  for (const [key, entry] of weatherCache) if (!usable(entry, now, WEATHER_MAX_AGE)) weatherCache.delete(key);
  for (const [key, entry] of weatherFailures) if (entry.retryAt <= now) weatherFailures.delete(key);
  if (!usable(windCache, now, WIND_MAX_AGE)) windCache = undefined;
}
function loadStorage(now: number) {
  if (storageLoaded) return;
  storageLoaded = true;
  try {
    const raw = globalThis.localStorage?.getItem(CACHE_KEY);
    if (!raw) return;
    const saved = object(JSON.parse(raw));
    if (saved.version !== 1) return;
    if (Array.isArray(saved.weather)) {
      for (const value of saved.weather.slice(-POINT_LIMIT)) {
        try {
          const entry = object(value);
          const fetchedAt = number(entry.fetchedAt, 0, now);
          const data = validateReading(entry.data);
          if (usable({ fetchedAt }, now, WEATHER_MAX_AGE)) boundedSet(weatherCache, keyFor(data), { data, fetchedAt });
        } catch { /* Discard individual corrupt entries. */ }
      }
    }
    if (saved.wind) {
      const entry = object(saved.wind);
      const fetchedAt = number(entry.fetchedAt, 0, now);
      if (!Array.isArray(entry.data) || !entry.data.length || entry.data.length > WIND_GRID.length) return;
      const data = entry.data.map(validateSample);
      const keys = new Set(data.map(keyFor));
      if (keys.size !== data.length || data.some(p => !WIND_GRID.some(g => keyFor(g) === keyFor(p)))) return;
      if (usable({ fetchedAt }, now, WIND_MAX_AGE)) windCache = { data, fetchedAt };
    }
  } catch { /* Storage may be absent, denied, full, or contain invalid JSON. */ }
}
function saveStorage() {
  prune(Date.now());
  try {
    globalThis.localStorage?.setItem(CACHE_KEY, JSON.stringify({
      version: 1, weather: [...weatherCache.values()], wind: windCache,
    }));
  } catch { /* Memory cache remains available. */ }
}

function abortError(): Error {
  const error = new Error('请求已取消');
  error.name = 'AbortError';
  return error;
}
function checkAbort(signal?: AbortSignal) { if (signal?.aborted) throw abortError(); }
function requestUrl(points: readonly Coordinates[], fields: string): string {
  const params = new URLSearchParams({
    latitude: points.map(p => p.lat).join(','), longitude: points.map(p => p.lon).join(','),
    current: fields, timezone: 'UTC', timeformat: 'iso8601', wind_speed_unit: 'ms',
    temperature_unit: 'celsius', precipitation_unit: 'mm', cell_selection: 'nearest',
    // Open-Meteo requires one elevation value PER coordinate, even for nan.
    elevation: points.map(() => 'nan').join(','),
  });
  return `${ENDPOINT}?${params}`;
}
async function requestJson(url: string, signal: AbortSignal): Promise<unknown> {
  checkAbort(signal);
  const controller = new AbortController();
  const cancel = () => controller.abort(abortError());
  signal.addEventListener('abort', cancel, { once: true });
  const timer = setTimeout(() => controller.abort(new Error('Open-Meteo 请求超时（12 秒）')), 12_000);
  let onAbort: () => void = () => {};
  try {
    const aborted = new Promise<never>((_, reject) => {
      onAbort = () => reject(controller.signal.reason);
      controller.signal.addEventListener('abort', onAbort, { once: true });
    });
    return await Promise.race([
      (async () => {
        const response = await fetch(url, { signal: controller.signal, mode: 'cors', credentials: 'omit' });
        if (!response.ok) throw new Error(`Open-Meteo HTTP ${response.status}`);
        return response.json() as Promise<unknown>;
      })(),
      aborted,
    ]);
  } finally {
    clearTimeout(timer);
    signal.removeEventListener('abort', cancel);
    controller.signal.removeEventListener('abort', onAbort);
  }
}

// Deduplicate overlapping callers without letting one caller cancel another's request.
// The last departing subscriber cancels transport; initialization itself does no I/O.
type Flight<T> = { controller: AbortController; promise: Promise<T>; users: number };
const weatherFlights = new Map<string, Flight<WeatherState>>();
const windFlights = new Map<string, Flight<WindState>>();
function shared<T>(flights: Map<string, Flight<T>>, key: string, run: (signal: AbortSignal) => Promise<T>, signal?: AbortSignal): Promise<T> {
  checkAbort(signal);
  let flight = flights.get(key);
  if (!flight) {
    const controller = new AbortController();
    flight = { controller, users: 0, promise: Promise.resolve().then(() => run(controller.signal)) };
    flights.set(key, flight);
    const current = flight;
    const clear = () => { if (flights.get(key) === current) flights.delete(key); };
    void flight.promise.then(clear, clear);
  }
  const current = flight;
  current.users++;
  return new Promise<T>((resolve, reject) => {
    let settled = false;
    const finish = (action: () => void) => {
      if (settled) return;
      settled = true;
      signal?.removeEventListener('abort', cancel);
      current.users--;
      action();
    };
    const cancel = () => finish(() => {
      if (current.users === 0) {
        if (flights.get(key) === current) flights.delete(key);
        current.controller.abort();
      }
      reject(abortError());
    });
    signal?.addEventListener('abort', cancel, { once: true });
    void current.promise.then(value => finish(() => resolve(value)), error => finish(() => reject(error)));
  });
}
function failureMessage(error: unknown) {
  return error instanceof Error ? error.message : '气象服务暂不可用';
}
function cachedWeather(entry: Cached<AtmosphericReading>, stale = false, reason = ''): WeatherState {
  return { state: 'cached', reading: { ...entry.data }, message: `${stale ? '过期缓存（不超过 2 小时）' : '缓存（5 分钟内）'}${reason ? `：${reason}` : ''}；${MODEL_NOTE}` };
}
function windState(entry: Cached<WindSample[]>, state: 'live' | 'cached', prefix = ''): WindState {
  const count = entry.data.length;
  const coverage = count < WIND_GRID.length ? `风场降级：${count}/${WIND_GRID.length} 个有效采样点，缺失 ${WIND_GRID.length - count}` : `稀疏风场：${count} 个采样点`;
  return { state, samples: entry.data.map(p => ({ ...p })), fetchedAt: new Date(entry.fetchedAt).toISOString(), message: `${prefix}${coverage}；${MODEL_NOTE}` };
}

/** Invoke only while enabled. Refresh/polling and simulation clocks belong to the caller. */
export async function fetchWeather(requested: Coordinates, signal?: AbortSignal): Promise<WeatherState> {
  checkAbort(signal);
  let point: Coordinates;
  try { point = coordinates(requested); } catch {
    return { state: 'unavailable', reading: null, message: '请求坐标无效' };
  }
  return shared(weatherFlights, keyFor(point), async transportSignal => {
    checkAbort(transportSignal);
    let now = Date.now();
    loadStorage(now);
    prune(now);
    const key = keyFor(point);
    const cached = weatherCache.get(key);
    if (cached && usable(cached, now, WEATHER_TTL)) return cachedWeather(cached);
    const fallback = (message: string): WeatherState => cached && usable(cached, Date.now(), WEATHER_MAX_AGE)
      ? cachedWeather(cached, true, message)
      : { state: 'unavailable', reading: null, message: `${message}；无可用气象数据` };
    const failure = weatherFailures.get(key);
    if (failure && failure.retryAt > now) return fallback(`暂缓重试：${failure.message}`);
    try {
      const reading = parseCurrentWeather(await requestJson(requestUrl([point], WEATHER_FIELDS), transportSignal), point);
      checkAbort(transportSignal);
      now = Date.now();
      boundedSet(weatherCache, key, { data: reading, fetchedAt: now });
      weatherFailures.delete(key);
      saveStorage();
      return { state: 'live', reading: { ...reading }, message: MODEL_NOTE };
    } catch (error) {
      checkAbort(transportSignal);
      const message = failureMessage(error);
      boundedSet(weatherFailures, key, { retryAt: Date.now() + WEATHER_TTL, message });
      return fallback(message);
    }
  }, signal);
}

/** Two 30-point requests, at most two concurrent transports, no background refresh. */
export async function fetchWindField(signal?: AbortSignal): Promise<WindState> {
  checkAbort(signal);
  return shared(windFlights, 'global', async transportSignal => {
    checkAbort(transportSignal);
    const now = Date.now();
    loadStorage(now);
    prune(now);
    if (windCache && usable(windCache, now, WIND_TTL)) return windState(windCache, 'cached', '缓存（20 分钟内）；');
    const fallback = (message: string): WindState => windCache && usable(windCache, Date.now(), WIND_MAX_AGE)
      ? windState(windCache, 'cached', `过期缓存（不超过 6 小时）：${message}；`)
      : { state: 'unavailable', samples: [], fetchedAt: null, message: `${message}；无可用风场数据` };
    if (windFailure && windFailure.retryAt > now) return fallback(`暂缓重试：${windFailure.message}`);
    const chunks = [WIND_GRID.slice(0, 30), WIND_GRID.slice(30)];
    const results = await Promise.allSettled(chunks.map(async points =>
      parseWindBatch(await requestJson(requestUrl(points, WIND_FIELDS), transportSignal), points)));
    checkAbort(transportSignal);
    const samples = results.flatMap(result => result.status === 'fulfilled' ? result.value : []);
    if (samples.length) {
      windCache = { data: samples, fetchedAt: Date.now() };
      windFailure = undefined;
      saveStorage();
      return windState(windCache, 'live');
    }
    const rejected = results.find(result => result.status === 'rejected');
    const message = rejected?.status === 'rejected' ? failureMessage(rejected.reason) : '风场响应无有效采样点';
    windFailure = { retryAt: Date.now() + WIND_TTL, message };
    return fallback(message);
  }, signal);
}
