import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { Coordinates } from '../../astronomy/coordinates';

const POINT = { lat: 51.5074, lon: -0.1278 };
const NOW = Date.parse('2026-11-21T12:34:56Z');
const MODEL_TIME = '2026-11-21T12:15:00.000Z';
const MINUTE = 60_000;
const CACHE_KEY = 'singer:meteo:v1';
let meteo: typeof import('./meteo');
let fetchMock: ReturnType<typeof vi.fn<typeof fetch>>;
let stored: Map<string, string>;
let storage: { getItem: ReturnType<typeof vi.fn>; setItem: ReturnType<typeof vi.fn> };

function payload(point: Coordinates = POINT) {
  return {
    latitude: point.lat, longitude: point.lon, utc_offset_seconds: 0,
    current_units: {
      time: 'iso8601', temperature_2m: '°C', wind_speed_10m: 'm/s', wind_direction_10m: '°',
      surface_pressure: 'hPa', cloud_cover: '%', precipitation: 'mm', weather_code: 'wmo code',
    } as Record<string, unknown>,
    current: {
      time: '2026-11-21T12:15', temperature_2m: 8.5, wind_speed_10m: 5, wind_direction_10m: 270,
      surface_pressure: 1010.2, cloud_cover: 40, precipitation: 0.2, weather_code: 3,
    } as Record<string, unknown>,
  };
}
function windPayload(point: Coordinates) {
  const data = payload(point);
  data.current = { time: data.current.time, wind_speed_10m: 5, wind_direction_10m: 270 };
  data.current_units = { time: 'iso8601', wind_speed_10m: 'm/s', wind_direction_10m: '°' };
  return data;
}
function json(value: unknown, status = 200): Response {
  return new Response(JSON.stringify(value), { status, headers: { 'Content-Type': 'application/json' } });
}
function pointsIn(input: RequestInfo | URL): Coordinates[] {
  const url = new URL(String(input));
  const lons = url.searchParams.get('longitude')!.split(',').map(Number);
  return url.searchParams.get('latitude')!.split(',').map((lat, index) => ({ lat: Number(lat), lon: lons[index] }));
}
function serveWeather() {
  fetchMock.mockImplementation(async input => json(payload(pointsIn(input)[0])));
}
function serveWind() {
  fetchMock.mockImplementation(async input => json(pointsIn(input).map(windPayload)));
}
async function reload() {
  vi.resetModules();
  meteo = await import('./meteo');
}

beforeEach(async () => {
  vi.useFakeTimers();
  vi.setSystemTime(NOW);
  stored = new Map();
  storage = {
    getItem: vi.fn((key: string) => stored.get(key) ?? null),
    setItem: vi.fn((key: string, value: string) => { stored.set(key, value); }),
  };
  fetchMock = vi.fn<typeof fetch>().mockRejectedValue(new Error('offline'));
  vi.stubGlobal('fetch', fetchMock);
  vi.stubGlobal('localStorage', storage);
  await reload();
});
afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe('current model parsing', () => {
  it('does no I/O or background polling on import', async () => {
    await vi.advanceTimersByTimeAsync(24 * 60 * MINUTE);
    expect(fetchMock).not.toHaveBeenCalled();
    expect(storage.getItem).not.toHaveBeenCalled();
    expect(vi.getTimerCount()).toBe(0);
  });

  it('maps a snapped model grid to the exact requested point and preserves model time', () => {
    const data = { ...payload(), latitude: 51.51147, longitude: -0.13078308 };
    expect(meteo.parseCurrentWeather(data, POINT)).toEqual({
      ...POINT, observedAt: MODEL_TIME, windSpeedMs: 5, windDirectionDeg: 270,
      temperatureC: 8.5, surfacePressureHpa: 1010.2, cloudCoverPercent: 40,
      precipitationMm: 0.2, weatherCode: 3,
    });
    expect(meteo.parseCurrentWeather([data], POINT).lat).toBe(POINT.lat);
  });

  it('preserves real zeros and normalizes 360° north to 0°', () => {
    const data = payload();
    for (const field of ['temperature_2m', 'wind_speed_10m', 'cloud_cover', 'precipitation', 'weather_code']) data.current[field] = 0;
    data.current.wind_direction_10m = 360;
    expect(meteo.parseCurrentWeather(data, POINT)).toMatchObject({
      temperatureC: 0, windSpeedMs: 0, windDirectionDeg: 0, cloudCoverPercent: 0, precipitationMm: 0, weatherCode: 0,
    });
  });

  it.each(['temperature_2m', 'wind_speed_10m', 'wind_direction_10m', 'surface_pressure', 'cloud_cover', 'precipitation', 'weather_code'])(
    'never coerces missing, null, string or non-finite %s to zero', field => {
      for (const invalid of [null, undefined, '', '0', NaN, Infinity, false]) {
        const data = payload();
        data.current[field] = invalid;
        expect(() => meteo.parseCurrentWeather(data, POINT)).toThrow();
      }
    },
  );

  it.each([
    ['wind_speed_10m', -1], ['wind_direction_10m', -1], ['wind_direction_10m', 361],
    ['surface_pressure', 0], ['cloud_cover', 101], ['precipitation', -1], ['weather_code', 1.5],
  ])('rejects out-of-range %s = %s', (field, value) => {
    const data = payload();
    data.current[field] = value;
    expect(() => meteo.parseCurrentWeather(data, POINT)).toThrow();
  });

  it.each(['temperature_2m', 'wind_speed_10m', 'wind_direction_10m', 'surface_pressure', 'cloud_cover', 'precipitation', 'weather_code', 'time'])(
    'validates the returned %s unit despite explicit query units', field => {
      const data = payload();
      data.current_units[field] = 'unexpected';
      expect(() => meteo.parseCurrentWeather(data, POINT)).toThrow();
      delete data.current_units[field];
      expect(() => meteo.parseCurrentWeather(data, POINT)).toThrow();
    },
  );

  it.each([['km/h', 36, 10], ['m/s', 10, 10], ['mph', 10, 4.4704], ['knots', 10, 5.144444444444445]])(
    'converts %s to m/s without reversing meteorological direction', (unit, speed, expected) => {
      const data = payload();
      data.current_units.wind_speed_10m = unit;
      data.current.wind_speed_10m = speed;
      expect(meteo.parseCurrentWeather(data, POINT).windSpeedMs).toBeCloseTo(expected);
      for (const bearing of [0, 90, 180, 270]) {
        data.current.wind_direction_10m = bearing;
        expect(meteo.parseCurrentWeather(data, POINT).windDirectionDeg).toBe(bearing);
      }
    },
  );

  it('interprets naive ISO timestamps with the returned UTC offset, not local timezone', () => {
    const data = payload();
    data.utc_offset_seconds = 19800;
    data.current.time = '2026-11-21T17:45';
    expect(meteo.parseCurrentWeather(data, POINT).observedAt).toBe(MODEL_TIME);
    data.utc_offset_seconds = -18000;
    data.current.time = '2026-11-21T07:15';
    expect(meteo.parseCurrentWeather(data, POINT).observedAt).toBe(MODEL_TIME);
  });

  it('honors explicit zones once and supports documented UTC unix seconds', () => {
    const data = payload();
    data.utc_offset_seconds = 19800;
    data.current.time = '2026-11-21T17:45:00+05:30';
    expect(meteo.parseCurrentWeather(data, POINT).observedAt).toBe(MODEL_TIME);
    data.current.time = MODEL_TIME;
    expect(meteo.parseCurrentWeather(data, POINT).observedAt).toBe(MODEL_TIME);
    data.current_units.time = 'unixtime';
    data.current.time = Date.parse(MODEL_TIME) / 1000;
    expect(meteo.parseCurrentWeather(data, POINT).observedAt).toBe(MODEL_TIME);
  });

  it.each([null, '', 'not-a-date', '2026-02-30T12:15', '2026-11-21T24:00', '2026-11-21T12:00:00+25:00'])(
    'rejects malformed time %s', time => {
      const data = payload();
      data.current.time = time;
      expect(() => meteo.parseCurrentWeather(data, POINT)).toThrow();
    },
  );

  it('rejects missing UTC offsets, coordinates and unrelated model cells', () => {
    expect(() => meteo.parseCurrentWeather({ ...payload(), utc_offset_seconds: null }, POINT)).toThrow();
    expect(() => meteo.parseCurrentWeather({ ...payload(), latitude: null }, POINT)).toThrow();
    expect(() => meteo.parseCurrentWeather(payload(), { lat: 0, lon: 0 })).toThrow();
    expect(() => meteo.parseCurrentWeather(payload(), { lat: NaN, lon: 0 })).toThrow();
  });

  it('uses restrained Chinese WMO terms, including unknown codes', () => {
    expect(meteo.weatherDescription(0)).toBe('晴朗');
    expect(meteo.weatherDescription(63)).toBe('中雨');
    expect(meteo.weatherDescription(95)).toBe('雷雨');
    expect(meteo.weatherDescription(999)).toBe('天气状况未分类');
  });
});

describe('independent sparse wind parsing', () => {
  const points = [{ lat: 0, lon: -180 }, { lat: 35, lon: 30 }, { lat: 70, lon: 150 }];

  it('has 60 unique points covering both hemispheres and all longitudes', () => {
    expect(meteo.WIND_GRID).toHaveLength(60);
    expect(new Set(meteo.WIND_GRID.map(p => p.lat))).toEqual(new Set([-70, -35, 0, 35, 70]));
    expect(new Set(meteo.WIND_GRID.map(p => p.lon)).size).toBe(12);
    expect(new Set(meteo.WIND_GRID.map(p => `${p.lat},${p.lon}`)).size).toBe(60);
  });

  it('parses wind-only fields, handles antimeridian snapping and single object/array shapes', () => {
    const data = { ...windPayload(points[0]), latitude: -0.035, longitude: 179.99 };
    expect(meteo.parseWindBatch(data, [points[0]])[0]).toMatchObject(points[0]);
    expect(meteo.parseWindBatch([data], [points[0]])).toEqual(meteo.parseWindBatch(data, [points[0]]));
  });

  it('omits a malformed middle row without shifting later coordinates or data', () => {
    const rows = points.map(windPayload);
    rows[0].current.wind_speed_10m = 0;
    rows[0].current.wind_direction_10m = 0;
    rows[1].current.wind_speed_10m = null;
    rows[2].current.wind_speed_10m = 9;
    expect(meteo.parseWindBatch(rows, points)).toMatchObject([
      { ...points[0], windSpeedMs: 0, windDirectionDeg: 0 }, { ...points[2], windSpeedMs: 9 },
    ]);
    rows[0].current.wind_direction_10m = null;
    expect(meteo.parseWindBatch(rows, points)).toHaveLength(1);
  });

  it('uses explicit location IDs and restores requested order even if rows are reordered', () => {
    const rows = points.map((point, location_id) => ({ ...windPayload(point), location_id }));
    rows[1].current.wind_speed_10m = 7;
    expect(meteo.parseWindBatch([rows[2], rows[0], rows[1]], points).map(p => p.windSpeedMs)).toEqual([5, 7, 5]);
    rows[1].location_id = 0;
    expect(() => meteo.parseWindBatch(rows, points)).toThrow(/索引/);
  });

  it('rejects ambiguous length mismatches and API errors rather than inventing points', () => {
    expect(() => meteo.parseWindBatch([windPayload(points[0])], points)).toThrow();
    expect(meteo.parseWindBatch({ error: true, reason: 'bad request' }, [points[0]])).toEqual([]);
    expect(meteo.parseWindBatch([null, {}, windPayload(points[2])], points)).toHaveLength(1);
  });
});

describe('weather transport and bounded caches', () => {
  it('requests explicit units directly, with ocean-safe options and no historical inputs', async () => {
    serveWeather();
    const state = await meteo.fetchWeather(POINT);
    expect(state.state).toBe('live');
    expect(state.message).toMatch(/模型/);
    expect(state.message).toMatch(/非站点实测/);
    const [input, options] = fetchMock.mock.calls[0];
    const url = new URL(String(input));
    expect(url.origin + url.pathname).toBe('https://api.open-meteo.com/v1/forecast');
    for (const [key, value] of Object.entries({ timezone: 'UTC', wind_speed_unit: 'ms', temperature_unit: 'celsius', precipitation_unit: 'mm', elevation: 'nan', cell_selection: 'nearest' })) {
      expect(url.searchParams.get(key)).toBe(value);
    }
    expect(url.searchParams.get('current')).toContain('surface_pressure');
    expect(url.searchParams.has('start_date')).toBe(false);
    expect(url.searchParams.has('past_days')).toBe(false);
    expect(options).toMatchObject({ mode: 'cors', credentials: 'omit' });
    expect(vi.getTimerCount()).toBe(0);
  });

  it('uses a five-minute wall-clock TTL, separate from the unchanged model timestamp', async () => {
    serveWeather();
    const first = await meteo.fetchWeather(POINT);
    expect(first.reading?.observedAt).toBe(MODEL_TIME);
    first.reading!.temperatureC = 99;
    vi.setSystemTime(NOW + 5 * MINUTE - 1);
    const cached = await meteo.fetchWeather(POINT);
    expect(cached.state).toBe('cached');
    expect(cached.reading?.temperatureC).toBe(8.5);
    expect(cached.reading?.observedAt).toBe(MODEL_TIME);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    vi.setSystemTime(NOW + 5 * MINUTE);
    expect((await meteo.fetchWeather(POINT)).state).toBe('live');
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it('loads validated localStorage after reload, keyed by exact requested coordinates', async () => {
    serveWeather();
    await meteo.fetchWeather(POINT);
    await reload();
    fetchMock.mockRejectedValue(new Error('offline'));
    const cached = await meteo.fetchWeather(POINT);
    expect(cached.state).toBe('cached');
    expect(cached.reading?.observedAt).toBe(MODEL_TIME);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect((await meteo.fetchWeather({ ...POINT, lon: POINT.lon + 0.00001 })).state).toBe('unavailable');
  });

  it('returns explicitly stale data on failure, throttles retries, and expires after two hours', async () => {
    serveWeather();
    await meteo.fetchWeather(POINT);
    fetchMock.mockRejectedValue(new Error('offline'));
    vi.setSystemTime(NOW + 5 * MINUTE);
    const stale = await meteo.fetchWeather(POINT);
    expect(stale.state).toBe('cached');
    expect(stale.message).toMatch(/过期缓存/);
    expect(stale.reading?.observedAt).toBe(MODEL_TIME);
    await meteo.fetchWeather(POINT);
    expect(fetchMock).toHaveBeenCalledTimes(2);
    vi.setSystemTime(NOW + 10 * MINUTE);
    await meteo.fetchWeather(POINT);
    expect(fetchMock).toHaveBeenCalledTimes(3);
    vi.setSystemTime(NOW + 120 * MINUTE);
    expect(await meteo.fetchWeather(POINT)).toMatchObject({ state: 'unavailable', reading: null });
  });

  it.each(['http', 'json', 'malformed', 'offline'])('does not cache fabricated readings after %s failure', async failure => {
    if (failure === 'http') fetchMock.mockImplementation(async () => json({ error: true }, 429));
    if (failure === 'json') fetchMock.mockImplementation(async () => new Response('not-json'));
    if (failure === 'malformed') fetchMock.mockImplementation(async () => json({ ...payload(), current: null }));
    const state = await meteo.fetchWeather(POINT);
    expect(state).toMatchObject({ state: 'unavailable', reading: null });
    await meteo.fetchWeather(POINT);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(storage.setItem).not.toHaveBeenCalled();
  });

  it('rejects invalid input without fetching', async () => {
    expect(await meteo.fetchWeather({ lat: 91, lon: 0 })).toMatchObject({ state: 'unavailable', reading: null });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it.each(['json', 'null-value', 'invalid-time', 'future-cache', 'wrong-version'])(
    'ignores corrupt localStorage: %s', async corruption => {
      serveWeather();
      await meteo.fetchWeather(POINT);
      const saved = JSON.parse(stored.get(CACHE_KEY)!);
      if (corruption === 'null-value') saved.weather[0].data.windSpeedMs = null;
      if (corruption === 'invalid-time') saved.weather[0].data.observedAt = '2026-02-30T00:00:00Z';
      if (corruption === 'future-cache') saved.weather[0].fetchedAt = NOW + 1;
      if (corruption === 'wrong-version') saved.version = 999;
      stored.set(CACHE_KEY, corruption === 'json' ? '{broken' : JSON.stringify(saved));
      await reload();
      fetchMock.mockRejectedValue(new Error('offline'));
      expect(await meteo.fetchWeather(POINT)).toMatchObject({ state: 'unavailable', reading: null });
    },
  );

  it('bounds successful point entries to 32 and evicts oldest points', async () => {
    serveWeather();
    for (let lat = 0; lat < 33; lat++) await meteo.fetchWeather({ lat, lon: 0 });
    expect(JSON.parse(stored.get(CACHE_KEY)!).weather).toHaveLength(32);
    fetchMock.mockRejectedValue(new Error('offline'));
    expect((await meteo.fetchWeather({ lat: 32, lon: 0 })).state).toBe('cached');
    expect((await meteo.fetchWeather({ lat: 0, lon: 0 })).state).toBe('unavailable');
  });

  it('continues with a memory cache when storage is unavailable or throws', async () => {
    storage.getItem.mockImplementation(() => { throw new Error('denied'); });
    storage.setItem.mockImplementation(() => { throw new Error('quota'); });
    serveWeather();
    expect((await meteo.fetchWeather(POINT)).state).toBe('live');
    expect((await meteo.fetchWeather(POINT)).state).toBe('cached');
    vi.stubGlobal('localStorage', undefined);
    await reload();
    expect((await meteo.fetchWeather(POINT)).state).toBe('live');
  });

  it('aborts a hanging transport at 12 seconds and throttles subsequent errors', async () => {
    let transport: AbortSignal | undefined;
    fetchMock.mockImplementation((_input, init) => {
      transport = init?.signal as AbortSignal;
      return new Promise<Response>(() => {});
    });
    const pending = meteo.fetchWeather(POINT);
    await vi.advanceTimersByTimeAsync(12_000);
    expect(await pending).toMatchObject({ state: 'unavailable', reading: null, message: expect.stringContaining('12 秒') });
    expect(transport?.aborted).toBe(true);
    await meteo.fetchWeather(POINT);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(vi.getTimerCount()).toBe(0);
  });
});

describe('wind transport, partial results and cache', () => {
  it('uses two batches of 30 with per-coordinate elevations and wind-only fields', async () => {
    serveWind();
    const state = await meteo.fetchWindField();
    expect(state.state).toBe('live');
    expect(state.samples).toHaveLength(60);
    expect(state.fetchedAt).toBe(new Date(NOW).toISOString());
    expect(state.samples[0].observedAt).toBe(MODEL_TIME);
    expect(fetchMock).toHaveBeenCalledTimes(2);
    for (const [input] of fetchMock.mock.calls) {
      const url = new URL(String(input));
      expect(pointsIn(input)).toHaveLength(30);
      expect(url.searchParams.get('elevation')!.split(',')).toEqual(Array(30).fill('nan'));
      expect(url.searchParams.get('current')).toBe('wind_speed_10m,wind_direction_10m');
    }
    expect(state.samples.map(({ lat, lon }) => ({ lat, lon }))).toEqual(meteo.WIND_GRID);
  });

  it('deduplicates concurrent callers and never starts more than two requests', async () => {
    const complete: Array<() => void> = [];
    fetchMock.mockImplementation(input => new Promise(resolve => {
      complete.push(() => resolve(json(pointsIn(input).map(windPayload))));
    }));
    const first = meteo.fetchWindField();
    const second = meteo.fetchWindField();
    await vi.advanceTimersByTimeAsync(0);
    expect(fetchMock).toHaveBeenCalledTimes(2);
    complete.reverse().forEach(finish => finish());
    const states = await Promise.all([first, second]);
    expect(states[0].samples).toHaveLength(60);
    expect(states[1]).toEqual(states[0]);
    expect(states[0].samples[0]).toMatchObject(meteo.WIND_GRID[0]);
  });

  it('caches a partial field and explicitly reports all omitted points', async () => {
    fetchMock.mockImplementation(async input => {
      const points = pointsIn(input);
      if (points[0].lat >= 0) return json({}, 503);
      const rows = points.map(windPayload);
      rows[7].current.wind_direction_10m = null;
      return json(rows);
    });
    const state = await meteo.fetchWindField();
    expect(state.state).toBe('live');
    expect(state.samples).toHaveLength(29);
    expect(state.message).toMatch(/降级：29\/60/);
    expect(state.message).toMatch(/缺失 31/);
    const cached = await meteo.fetchWindField();
    expect(cached.state).toBe('cached');
    expect(cached.message).toMatch(/缺失 31/);
    expect(fetchMock).toHaveBeenCalledTimes(2);
    await reload();
    expect((await meteo.fetchWindField()).samples).toHaveLength(29);
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it('never caches empty/invalid fields and backs off for twenty minutes', async () => {
    fetchMock.mockImplementation(async input => json(pointsIn(input).map(() => null)));
    expect(await meteo.fetchWindField()).toMatchObject({ state: 'unavailable', samples: [], fetchedAt: null });
    await meteo.fetchWindField();
    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(storage.setItem).not.toHaveBeenCalled();
    vi.setSystemTime(NOW + 20 * MINUTE);
    serveWind();
    expect((await meteo.fetchWindField()).state).toBe('live');
    expect(fetchMock).toHaveBeenCalledTimes(4);
  });

  it('uses a 20-minute TTL and serves bounded stale data for at most six hours', async () => {
    serveWind();
    const first = await meteo.fetchWindField();
    first.samples[0].windSpeedMs = 99;
    vi.setSystemTime(NOW + 20 * MINUTE - 1);
    const cached = await meteo.fetchWindField();
    expect(cached.state).toBe('cached');
    expect(cached.samples[0].windSpeedMs).toBe(5);
    expect(fetchMock).toHaveBeenCalledTimes(2);
    vi.setSystemTime(NOW + 20 * MINUTE);
    fetchMock.mockRejectedValue(new Error('offline'));
    const stale = await meteo.fetchWindField();
    expect(stale.state).toBe('cached');
    expect(stale.message).toMatch(/过期缓存/);
    expect(stale.fetchedAt).toBe(new Date(NOW).toISOString());
    expect(stale.samples[0].observedAt).toBe(MODEL_TIME);
    await meteo.fetchWindField();
    expect(fetchMock).toHaveBeenCalledTimes(4);
    vi.setSystemTime(NOW + 360 * MINUTE);
    expect(await meteo.fetchWindField()).toMatchObject({ state: 'unavailable', samples: [], fetchedAt: null });
  });

  it.each(['null-speed', 'wrong-grid', 'duplicate', 'future-cache'])(
    'validates persisted wind shape: %s', async corruption => {
      serveWind();
      await meteo.fetchWindField();
      const saved = JSON.parse(stored.get(CACHE_KEY)!);
      if (corruption === 'null-speed') saved.wind.data[0].windSpeedMs = null;
      if (corruption === 'wrong-grid') saved.wind.data[0].lat = 1;
      if (corruption === 'duplicate') saved.wind.data[1] = saved.wind.data[0];
      if (corruption === 'future-cache') saved.wind.fetchedAt = NOW + 1;
      stored.set(CACHE_KEY, JSON.stringify(saved));
      await reload();
      fetchMock.mockRejectedValue(new Error('offline'));
      expect(await meteo.fetchWindField()).toMatchObject({ state: 'unavailable', samples: [], fetchedAt: null });
    },
  );

  it('retains a valid chunk when the other times out after 12 seconds', async () => {
    fetchMock.mockImplementation(input => pointsIn(input)[0].lat < 0
      ? Promise.resolve(json(pointsIn(input).map(windPayload))) : new Promise<Response>(() => {}));
    const pending = meteo.fetchWindField();
    await vi.advanceTimersByTimeAsync(12_000);
    const state = await pending;
    expect(state.state).toBe('live');
    expect(state.samples).toHaveLength(30);
    expect(state.message).toMatch(/缺失 30/);
    expect(vi.getTimerCount()).toBe(0);
  });
});

describe('caller cancellation', () => {
  it('propagates pre-aborted signals even when data would be cached', async () => {
    const controller = new AbortController();
    controller.abort();
    await expect(meteo.fetchWeather(POINT, controller.signal)).rejects.toMatchObject({ name: 'AbortError' });
    await expect(meteo.fetchWindField(controller.signal)).rejects.toMatchObject({ name: 'AbortError' });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('aborts the last weather subscriber, does not cache failure, and permits immediate retry', async () => {
    let transport: AbortSignal | undefined;
    fetchMock.mockImplementation((_input, init) => {
      transport = init?.signal as AbortSignal;
      return new Promise<Response>(() => {});
    });
    const controller = new AbortController();
    const pending = meteo.fetchWeather(POINT, controller.signal);
    const rejected = expect(pending).rejects.toMatchObject({ name: 'AbortError' });
    await vi.advanceTimersByTimeAsync(0);
    controller.abort();
    await rejected;
    expect(transport?.aborted).toBe(true);
    serveWeather();
    expect((await meteo.fetchWeather(POINT)).state).toBe('live');
    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(vi.getTimerCount()).toBe(0);
  });

  it('does not cancel a shared request still needed by another caller', async () => {
    let complete: () => void = () => {};
    let transport: AbortSignal | undefined;
    fetchMock.mockImplementation((_input, init) => new Promise(resolve => {
      transport = init?.signal as AbortSignal;
      complete = () => resolve(json(payload()));
    }));
    const controller = new AbortController();
    const first = meteo.fetchWeather(POINT, controller.signal);
    const rejected = expect(first).rejects.toMatchObject({ name: 'AbortError' });
    const second = meteo.fetchWeather(POINT);
    await vi.advanceTimersByTimeAsync(0);
    controller.abort();
    await rejected;
    expect(transport?.aborted).toBe(false);
    complete();
    expect((await second).state).toBe('live');
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it('aborts both wind chunks, discards partial output, and does not throttle a new enable', async () => {
    const transports: AbortSignal[] = [];
    fetchMock.mockImplementation((input, init) => {
      transports.push(init?.signal as AbortSignal);
      return pointsIn(input)[0].lat < 0 ? Promise.resolve(json(pointsIn(input).map(windPayload))) : new Promise<Response>(() => {});
    });
    const controller = new AbortController();
    const pending = meteo.fetchWindField(controller.signal);
    const rejected = expect(pending).rejects.toMatchObject({ name: 'AbortError' });
    await vi.advanceTimersByTimeAsync(0);
    controller.abort();
    await rejected;
    expect(transports[1].aborted).toBe(true);
    expect(storage.setItem).not.toHaveBeenCalled();
    serveWind();
    expect((await meteo.fetchWindField()).state).toBe('live');
    expect(fetchMock).toHaveBeenCalledTimes(4);
    expect(vi.getTimerCount()).toBe(0);
  });
});
