import { describe, expect, it } from 'vitest';
import type { NewsItem, NewsSnapshot } from '../data/providers/types';
import { LorenzEngine, ThreeBodyEngine, deriveChaosParameters } from './chaos';

function makeEvent(overrides: Partial<NewsItem> = {}): NewsItem {
  return {
    id: 'evt-1',
    settlement: '伦敦',
    summary: 'Sample headline',
    source: 'BBC World',
    tag: '表面喧嚣',
    entropy: 0.22,
    lat: 51.5,
    lon: -0.1,
    precision: 'city',
    url: 'https://example.org/story',
    publishedAt: '2026-11-23T02:00:00.000Z',
    collectedAt: '2026-11-23T02:05:00.000Z',
    demo: false,
    ...overrides,
  };
}

function makeSnapshot(events: NewsItem[]): NewsSnapshot {
  return {
    events,
    sources: [],
    mode: 'live',
    fetchedAt: '2026-11-23T02:05:00.000Z',
    checkedAt: '2026-11-23T02:05:00.000Z',
    nextRefreshAt: '2026-11-23T02:10:00.000Z',
  };
}

describe('news-coupled chaos simulation', () => {
  it('returns safe baseline parameters when snapshot is empty or loading', () => {
    const params = deriveChaosParameters(null);
    expect(params.rho).toBeGreaterThan(24.74);
    expect(params.sigma).toBe(10);
    expect(params.highlights).toEqual([]);
  });

  it('increases Rayleigh rho and Prandtl sigma with higher news conflict and severe entropy', () => {
    const calm = deriveChaosParameters(makeSnapshot([
      makeEvent({ id: 'c1', tag: '表面喧嚣', entropy: 0.18 }),
      makeEvent({ id: 'c2', tag: '技术跃迁', entropy: 0.25 }),
    ]));
    const turbulent = deriveChaosParameters(makeSnapshot([
      makeEvent({ id: 't1', tag: '局部摩擦', entropy: 0.85 }),
      makeEvent({ id: 't2', tag: '灾变扰动', entropy: 0.92, kind: 'quake', precision: 'seismic', magnitude: 7.4, depthKm: 15 }),
      makeEvent({ id: 't3', tag: '秩序震荡', entropy: 0.6 }),
    ]));
    expect(turbulent.rho).toBeGreaterThan(calm.rho);
    expect(turbulent.sigma).toBeGreaterThan(calm.sigma);
    expect(turbulent.beta).toBeGreaterThan(calm.beta);
    expect(turbulent.severeCount).toBe(2);
    expect(turbulent.highlights[0].id).toBe('t2');
  });

  it('exhibits deterministic butterfly sensitivity divergence in Lorenz twin trajectories', () => {
    const engine = new LorenzEngine();
    const initial = engine.read();
    expect(initial.separation).toBeCloseTo(1e-3, 5);
    const params = { sigma: 10, rho: 28, beta: 8 / 3 };
    for (let i = 0; i < 1600; i++) engine.step(params, 4, 0.005);
    const diverged = engine.read();
    expect(diverged.separation).toBeGreaterThan(1.0);
    expect(diverged.wingSwitches).toBeGreaterThan(2);
    expect(Number.isFinite(diverged.lyapunov)).toBe(true);
    expect(diverged.primary.every((p) => Number.isFinite(p.x) && Number.isFinite(p.y) && Number.isFinite(p.z))).toBe(true);
  });

  it('injects a news event perturbation and records a bounded marker', () => {
    const engine = new LorenzEngine();
    const event = makeEvent({ id: 'quake-1', settlement: '东京', tag: '地壳微震', entropy: 0.78 });
    for (let i = 0; i < 40; i++) engine.step({ sigma: 10, rho: 28, beta: 8 / 3 });
    engine.injectPerturbation(event);
    const state = engine.read();
    expect(state.activeTrigger?.id).toBe('quake-1');
    expect(state.markers).toHaveLength(1);
    expect(state.separation).toBeLessThan(0.01);
  });

  it('keeps Three-Body RK4 trajectories finite and detects era transitions', () => {
    const engine = new ThreeBodyEngine();
    const start = engine.read();
    expect(start.bodies).toHaveLength(3);
    expect(start.era).toBe('恒纪元');
    let sawChaos = false;
    for (let i = 0; i < 1200; i++) {
      const state = engine.step(0.65, 3, 0.008);
      if (state.era === '乱纪元') sawChaos = true;
      for (const body of state.bodies) {
        expect(Number.isFinite(body.pos.x)).toBe(true);
        expect(Number.isFinite(body.pos.y)).toBe(true);
      }
    }
    expect(sawChaos).toBe(true);
  });
});
