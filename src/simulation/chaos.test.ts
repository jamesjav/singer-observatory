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

  it('prioritizes geopolitical, order, economic and tech news over climate talk, entertainment and micro-quakes', () => {
    const climate = evaluateCivilizationSignal(makeEvent({ id: 'cop', summary: 'COP31 climate talks break down over pledge', tag: '灾变扰动', entropy: 0.64 }));
    const gossip = evaluateCivilizationSignal(makeEvent({ id: 'pop', summary: 'Rapper concert chaos sparks celebrity drama', tag: '表面喧嚣', entropy: 0.22 }));
    const conflict = evaluateCivilizationSignal(makeEvent({ id: 'war', summary: 'Drone attack hits cargo ship near port', tag: '局部摩擦', entropy: 0.68 }));
    const economy = evaluateCivilizationSignal(makeEvent({ id: 'eco', summary: 'Central bank warns of global trade tariff recession risk', tag: '秩序震荡', entropy: 0.56 }));
    const tech = evaluateCivilizationSignal(makeEvent({ id: 'ai', summary: 'New AI semiconductor breakthrough reshapes chip supply', tag: '技术跃迁', entropy: 0.48 }));

    expect(conflict.domain).toBe('地缘安全');
    expect(economy.domain).toBe('大国秩序');
    expect(tech.domain).toBe('科技跃迁');
    expect(conflict.impact).toBeGreaterThan(climate.impact);
    expect(economy.impact).toBeGreaterThan(climate.impact);
    expect(tech.impact).toBeGreaterThan(gossip.impact);

    const params = deriveChaosParameters(makeSnapshot([
      makeEvent({ id: 'q1', kind: 'quake', precision: 'seismic', tag: '地壳微震', summary: 'M 3.2 - Hawaii', magnitude: 3.2, depthKm: 10 }),
      makeEvent({ id: 'cop1', summary: 'COP31 climate summit talks stall', tag: '灾变扰动', entropy: 0.64 }),
      makeEvent({ id: 'war1', summary: 'Explosion on cargo ship after drone attack', tag: '局部摩擦', entropy: 0.68 }),
      makeEvent({ id: 'zh1', source: '联合国新闻', summary: '人工智能将成为影响全球竞争力和经济增长的重要因素', tag: '技术跃迁', entropy: 0.56 }),
    ]));
    expect(params.humanNewsCount).toBe(3);
    expect(params.highlights[0].item.id).toBe('war1');
    expect(params.highlights.some((h) => h.isChinese)).toBe(true);
  });

  it('allows calm feeds to stay below rho_c = 24.74 while high conflict drains beta and spikes rho', () => {
    const calm = deriveChaosParameters(makeSnapshot([
      makeEvent({ id: 'c1', summary: 'Museum opens autumn sculpture exhibition', tag: '表面喧嚣', entropy: 0.18, lat: null, lon: null, precision: 'unlocated' }),
      makeEvent({ id: 'c2', summary: 'Local marathon draws weekend runners', tag: '表面喧嚣', entropy: 0.2, lat: null, lon: null, precision: 'unlocated' }),
    ]));
    const turbulent = deriveChaosParameters(makeSnapshot([
      makeEvent({ id: 't1', summary: 'Missile strike escalates border conflict', tag: '局部摩擦', entropy: 0.85 }),
      makeEvent({ id: 't2', summary: 'Trade sanctions and tariff shock rattle global markets', tag: '秩序震荡', entropy: 0.65 }),
      makeEvent({ id: 't3', summary: 'Military drone attack hits strategic port', tag: '局部摩擦', entropy: 0.82 }),
    ]));
    expect(calm.rho).toBeLessThan(24.74);
    expect(turbulent.rho).toBeGreaterThan(calm.rho);
    expect(turbulent.sigma).toBeGreaterThan(calm.sigma);
    expect(turbulent.beta).toBeLessThan(calm.beta);
    expect(turbulent.severeCount).toBeGreaterThan(0);
  });

  it('exhibits butterfly divergence and decaying transient thermal impulse Δρ on news injection', () => {
    const engine = new LorenzEngine();
    const initial = engine.read();
    expect(initial.separation).toBeCloseTo(1e-3, 5);
    const params = { sigma: 10, rho: 28, beta: 8 / 3 };
    for (let i = 0; i < 1600; i++) engine.step(params, 4, 0.005);
    const diverged = engine.read();
    expect(diverged.separation).toBeGreaterThan(1.0);
    expect(diverged.wingSwitches).toBeGreaterThan(2);
    expect(diverged.predictionHorizon).toBeGreaterThan(0);

    const event = makeEvent({ id: 'geo-1', settlement: '利比亚', summary: 'Explosion on ship after suspected drone attack', tag: '局部摩擦', entropy: 0.68 });
    engine.injectPerturbation(event, 1);
    const injected = engine.read();
    expect(injected.activeTrigger?.id).toBe('geo-1');
    expect(injected.impulseRho).toBeGreaterThan(2.5);
    expect(injected.markers[injected.markers.length - 1].label).toContain('地缘安全');
    for (let i = 0; i < 400; i++) engine.step(params, 3, 0.0055);
    expect(engine.read().impulseRho).toBeLessThan(injected.impulseRho);
  });

  it('keeps Three-Body RK4 trajectories finite, records chaos history, and detects era transitions', () => {
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
    const end = engine.read();
    expect(sawChaos).toBe(true);
    expect(end.chaosHistory.length).toBeGreaterThan(20);
    expect(end.maxRadius).toBeGreaterThanOrEqual(1.25);
  });
});
