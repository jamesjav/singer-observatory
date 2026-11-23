import { describe, expect, it } from 'vitest';
import type { NewsItem, NewsSnapshot } from '../data/providers/types';
import { LorenzEngine, ThreeBodyEngine, deriveChaosParameters, evaluateCivilizationSignal } from './chaos';

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

describe('news-coupled shared-destiny chaos simulation', () => {
  it('returns safe baseline parameters when snapshot is empty or loading', () => {
    const params = deriveChaosParameters(null);
    expect(params.rho).toBeGreaterThan(24.74);
    expect(params.sigma).toBe(10);
    expect(params.highlights).toEqual([]);
  });

  it('prioritizes geopolitical, order, economic and tech news over climate-conference chatter and micro-quakes', () => {
    const climate = evaluateCivilizationSignal(makeEvent({ id: 'cop', summary: 'COP31 climate talks break down over pledge', tag: '灾变扰动', entropy: 0.64 }));
    const conflict = evaluateCivilizationSignal(makeEvent({ id: 'war', summary: 'Drone attack hits cargo ship near port', tag: '局部摩擦', entropy: 0.68 }));
    const economy = evaluateCivilizationSignal(makeEvent({ id: 'eco', summary: 'Central bank warns of global trade tariff recession risk', tag: '秩序震荡', entropy: 0.56 }));
    const tech = evaluateCivilizationSignal(makeEvent({ id: 'ai', summary: 'New AI semiconductor breakthrough reshapes chip supply', tag: '技术跃迁', entropy: 0.48 }));

    expect(conflict.domain).toBe('地缘安全');
    expect(economy.domain).toBe('大国秩序');
    expect(tech.domain).toBe('科技跃迁');
    expect(conflict.impact).toBeGreaterThan(climate.impact);
    expect(economy.impact).toBeGreaterThan(climate.impact);
    expect(tech.impact).toBeGreaterThan(climate.impact);

    const params = deriveChaosParameters(makeSnapshot([
      makeEvent({ id: 'q1', kind: 'quake', precision: 'seismic', tag: '地壳微震', summary: 'M 3.2 - Hawaii', magnitude: 3.2, depthKm: 10 }),
      makeEvent({ id: 'cop1', summary: 'COP31 climate summit talks stall', tag: '灾变扰动', entropy: 0.64 }),
      makeEvent({ id: 'war1', summary: 'Explosion on cargo ship after drone attack', tag: '局部摩擦', entropy: 0.68 }),
      makeEvent({ id: 'ord1', summary: 'Belgium airports shut down over anti-austerity strike', tag: '秩序震荡', entropy: 0.56 }),
    ]));
    expect(params.humanNewsCount).toBe(3);
    expect(params.highlights[0].item.id).toBe('war1');
    expect(params.highlights[1].item.id).toBe('ord1');
  });

  it('increases rho and sigma with higher geopolitical conflict and severe world news', () => {
    const calm = deriveChaosParameters(makeSnapshot([
      makeEvent({ id: 'c1', summary: 'Museum opens autumn sculpture exhibition', tag: '表面喧嚣', entropy: 0.18 }),
      makeEvent({ id: 'c2', summary: 'Local marathon draws weekend runners', tag: '表面喧嚣', entropy: 0.2 }),
    ]));
    const turbulent = deriveChaosParameters(makeSnapshot([
      makeEvent({ id: 't1', summary: 'Missile strike escalates border conflict', tag: '局部摩擦', entropy: 0.85 }),
      makeEvent({ id: 't2', summary: 'Trade sanctions and tariff shock rattle global markets', tag: '秩序震荡', entropy: 0.65 }),
      makeEvent({ id: 't3', summary: 'AI chip export controls reshape global semiconductor race', tag: '技术跃迁', entropy: 0.55 }),
    ]));
    expect(turbulent.rho).toBeGreaterThan(calm.rho);
    expect(turbulent.sigma).toBeGreaterThan(calm.sigma);
    expect(turbulent.beta).toBeGreaterThan(calm.beta);
    expect(turbulent.severeCount).toBeGreaterThan(0);
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
    const event = makeEvent({ id: 'geo-1', settlement: '利比亚', summary: 'Explosion on ship after suspected drone attack', tag: '局部摩擦', entropy: 0.68 });
    for (let i = 0; i < 40; i++) engine.step({ sigma: 10, rho: 28, beta: 8 / 3 });
    engine.injectPerturbation(event);
    const state = engine.read();
    expect(state.activeTrigger?.id).toBe('geo-1');
    expect(state.markers).toHaveLength(1);
    expect(state.markers[0].label).toContain('地缘安全');
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
