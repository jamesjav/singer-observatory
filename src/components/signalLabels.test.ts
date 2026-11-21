import { describe, expect, it } from 'vitest';
import { PerspectiveCamera } from 'three';
import { toVector } from '../astronomy/coordinates';
import { MOCK_EVENTS } from '../data/mock/noise';
import type { NoiseEvent } from '../data/providers/types';
import { layoutSignals, selectSignals } from './signalLabels';
import type { LabelRect, SignalCandidate, SignalLabel } from './signalLabels';

type View = Parameters<typeof layoutSignals>[1];

function signal(id: string, x: number, y: number, overrides: Partial<NoiseEvent> = {}): SignalCandidate {
  return {
    x, y,
    event: {
      ...MOCK_EVENTS[0], id, kind: 'news', demo: false, precision: 'city',
      publishedAt: '2026-11-21T12:00:00Z', ...overrides,
    },
  };
}

function ids(signals: SignalCandidate[]) {
  return signals.map(({ event }) => event.id);
}

function expectSpread(signals: SignalCandidate[]) {
  for (let i = 0; i < signals.length; i++) {
    for (const other of signals.slice(i + 1)) {
      expect(Math.hypot(signals[i].x - other.x, signals[i].y - other.y)).toBeGreaterThan(48);
    }
  }
}

function expectSelection(chosen: SignalCandidate[], newsIds: string[], quakeId?: string) {
  expect(ids(chosen.filter(item => item.event.kind !== 'quake'))).toEqual(newsIds);
  expect(ids(chosen.filter(item => item.event.kind === 'quake'))).toEqual(quakeId ? [quakeId] : []);
  expectSpread(chosen);
}

function freezeSignals(signals: SignalCandidate[]) {
  for (const candidate of signals) {
    if (candidate.event.displayCoordinates) Object.freeze(candidate.event.displayCoordinates);
    Object.freeze(candidate.event);
    Object.freeze(candidate);
  }
  Object.freeze(signals);
}

// Use the observatory's 35-degree camera at distance 7.5, without a renderer.
// On mobile the 390 x 370 canvas starts 260px down the 390 x 1310 overlay.
function projection(mobile: boolean) {
  const width = mobile ? 390 : 1440;
  const height = mobile ? 1310 : 1000;
  const canvasHeight = mobile ? 370 : height;
  const top = mobile ? 260 : 0;
  const aspect = width / canvasHeight;
  const fov = aspect < 1 ? 2 * Math.atan(Math.tan(35 * Math.PI / 360) / aspect) * 180 / Math.PI : 35;
  const camera = new PerspectiveCamera(fov, aspect, 0.01, 6000);
  camera.position.copy(toVector({ lat: 19, lon: 75 }, 7.5));
  camera.lookAt(0, 0, 0);
  camera.updateMatrixWorld();
  const view: View = {
    width, height, cx: width / 2, cy: top + canvasHeight / 2,
    radius: canvasHeight / (2 * Math.tan(fov * Math.PI / 360) * Math.sqrt(7.5 ** 2 - 1)),
    mobile, focused: false,
  };
  const events: NoiseEvent[] = [
    ...MOCK_EVENTS.map(event => ({ ...event })),
    {
      ...MOCK_EVENTS[0], id: 'usgs-indian-ocean', settlement: 'Indian Ocean',
      lat: -15, lon: 60, kind: 'quake', magnitude: 6.4, depthKm: 10,
      source: 'USGS', precision: 'seismic', demo: false,
      publishedAt: '2026-11-21T11:00:00Z',
    },
  ];
  const candidates = events.flatMap(event => {
    const normal = toVector(event);
    if (normal.dot(camera.position.clone().sub(normal).normalize()) <= 0.025) return [];
    const point = normal.multiplyScalar(1.018).project(camera);
    const x = (point.x + 1) * width / 2;
    const y = (1 - point.y) * canvasHeight / 2;
    return x > 0 && x < width && y > 0 && y < canvasHeight ? [{ event, x, y: y + top }] : [];
  });
  return { view, candidates };
}

// Representative overlay-space HUD bounds, not DOM/CSS integration fixtures.
const desktopObstacles: LabelRect[] = [
  { x: 44, y: 200, width: 244, height: 270 }, // target
  { x: 1189, y: 200, width: 207, height: 260 }, // telemetry
  { x: 44, y: 556, width: 260, height: 284 }, // news log
  { x: 1189, y: 540, width: 207, height: 250 }, // instruments
  { x: 620, y: 740, width: 200, height: 70 }, // planet caption
  { x: 480, y: 780, width: 480, height: 45 }, // layer controls
  { x: 44, y: 846, width: 1352, height: 18 }, // field metadata
  { x: 44, y: 874, width: 1352, height: 91 }, // time footer
];
const mobileObstacles: LabelRect[] = [
  { x: 20, y: 106, width: 210, height: 110 },
  { x: 234, y: 110, width: 136, height: 132 },
  { x: 95, y: 542.5, width: 200, height: 68 },
  { x: 20, y: 650, width: 350, height: 50 },
  { x: 20, y: 737, width: 350, height: 136 },
  { x: 20, y: 893, width: 350, height: 244 },
  { x: 20, y: 1160, width: 350, height: 20 },
  { x: 20, y: 1185, width: 350, height: 96 },
];

// Independent assertions: do not use the implementation's overlaps helper.
function expectSeparated(a: LabelRect, b: LabelRect, gap: number) {
  expect(
    a.x + a.width + gap <= b.x || b.x + b.width + gap <= a.x ||
    a.y + a.height + gap <= b.y || b.y + b.height + gap <= a.y,
  ).toBe(true);
}

function expectSafeRect(rect: LabelRect, view: View, obstacles: LabelRect[]) {
  expect(Object.values(rect).every(Number.isFinite)).toBe(true);
  const margin = view.mobile ? 20 : 28;
  expect(rect.x).toBeGreaterThanOrEqual(margin);
  expect(rect.x + rect.width).toBeLessThanOrEqual(view.width - margin);
  expect(rect.y).toBeGreaterThanOrEqual(view.mobile ? 240 : 150);
  expect(rect.y + rect.height).toBeLessThanOrEqual(
    view.mobile ? Math.min(view.height - 200, view.cy + view.radius + 180) : view.height - 166,
  );
  const closestX = Math.min(rect.x + rect.width, Math.max(rect.x, view.cx));
  const closestY = Math.min(rect.y + rect.height, Math.max(rect.y, view.cy));
  expect(Math.hypot(closestX - view.cx, closestY - view.cy)).toBeGreaterThanOrEqual(view.radius + 8);
  for (const obstacle of obstacles) expectSeparated(rect, obstacle, 6);
}

function expectSafeLabels(labels: SignalLabel[], candidates: SignalCandidate[], view: View, obstacles: LabelRect[]) {
  expect(new Set(ids(labels)).size).toBe(labels.length);
  labels.forEach((label, index) => {
    const original = candidates.find(candidate => candidate.event.id === label.event.id);
    expect(original).toBeDefined();
    expect(label.event).toBe(original!.event);
    expect([label.x, label.y]).toEqual([original!.x, original!.y]);
    expect(label.rect.width).toBe(view.mobile ? Math.min(200, view.width - 40) : view.width < 1150 ? 168 : view.width < 1350 ? 206 : 232);
    expect(label.rect.height).toBe(view.focused ? 80 : 56);
    expect(label.side).toBe(label.rect.x + label.rect.width / 2 > view.cx ? 'right' : 'left');
    expectSafeRect(label.rect, view, obstacles);
    for (const other of labels.slice(index + 1)) expectSeparated(label.rect, other.rect, 12);
  });
}

describe('selectSignals', () => {
  const news = [
    signal('oldest', 550, 400, { publishedAt: '2026-11-20T12:00:00Z' }),
    signal('newest', 700, 400, { publishedAt: '2026-11-21T12:00:00Z' }),
    signal('third', 850, 500, { publishedAt: '2026-11-21T10:00:00Z' }),
    signal('second', 700, 600, { publishedAt: '2026-11-21T11:00:00Z' }),
  ];
  const quake = signal('quake', 550, 600, { kind: 'quake', magnitude: 6.4, precision: 'seismic' });

  it('chooses the three most recent spatially separated news and one quake', () => {
    const chosen = selectSignals([quake, ...news], 0);
    expectSelection(chosen, ['newest', 'second', 'third'], 'quake');
  });

  it.each([
    { rotation: 1, expected: ['second', 'third', 'oldest'] },
    { rotation: 3, expected: ['oldest', 'newest', 'second'] },
    { rotation: 4, expected: ['newest', 'second', 'third'] },
    { rotation: 9, expected: ['second', 'third', 'oldest'] },
  ])('rotates the recency-ordered news with wraparound at $rotation', ({ rotation, expected }) => {
    expectSelection(selectSignals([quake, ...news], rotation), expected, 'quake');
  });

  it('skips duplicate, diagonal-nearby and exactly 48px anchors, but accepts 49px', () => {
    const candidates = [
      signal('a', 650, 450), signal('b-duplicate', 650, 450),
      signal('c-diagonal', 680, 480), signal('d-boundary', 698, 450),
      signal('e-separated', 699, 450), signal('f-distant', 800, 550),
      signal('q', 600, 550, { kind: 'quake', magnitude: 5 }),
    ];
    const chosen = selectSignals(candidates, 0);
    expectSelection(chosen, ['a', 'e-separated', 'f-distant'], 'q');
  });

  it('prefers quake magnitude over recency and excludes quakes too close to chosen news', () => {
    const candidates = [
      news[1],
      signal('largest-but-overlapping', 730, 430, { kind: 'quake', magnitude: 8 }),
      signal('largest-eligible', 550, 600, { kind: 'quake', magnitude: 7, publishedAt: '2026-11-20T00:00:00Z' }),
      signal('recent-smaller', 850, 600, { kind: 'quake', magnitude: 5 }),
      signal('unknown-magnitude', 850, 400, { kind: 'quake' }),
    ];
    const chosen = selectSignals(candidates, 0);
    expect(ids(chosen)).toEqual(['newest', 'largest-eligible']);
    expectSpread(chosen);
  });

  it('omits the quake when every quake violates news separation', () => {
    expect(ids(selectSignals([news[1], signal('nearby-quake', 700, 448, { kind: 'quake', magnitude: 9 })], 0)))
      .toEqual(['newest']);
  });

  it.each([0, 1, 2, 3, 4, 8])('honors count %i without exceeding three news and one quake', count => {
    const chosen = selectSignals([...news, quake, { ...quake, event: { ...quake.event, id: 'other-quake' } }], 0, count);
    expect(chosen).toHaveLength(Math.min(count, 4));
    expect(chosen.filter(item => item.event.kind !== 'quake')).toHaveLength(Math.min(Math.max(count - 1, 0), 3));
    expect(chosen.filter(item => item.event.kind === 'quake')).toHaveLength(count > 0 ? 1 : 0);
    expectSpread(chosen);
  });

  it('does not fill empty category quotas with extra news or extra quakes', () => {
    expect(selectSignals([], 5)).toEqual([]);
    expect(selectSignals(news, 0, 8)).toHaveLength(3);
    expect(ids(selectSignals([quake, signal('smaller', 850, 600, { kind: 'quake', magnitude: 4 })], 7)))
      .toEqual(['quake']);
  });

  it('treats legacy mock events as news and orders absent/invalid dates after dated news', () => {
    const candidates = [
      signal('b-null', 550, 600, { kind: undefined, publishedAt: null }),
      signal('a-invalid', 700, 600, { kind: undefined, publishedAt: 'not-a-date' }),
      signal('c-valid', 850, 500),
    ];
    expect(ids(selectSignals(candidates, 0))).toEqual(['c-valid', 'a-invalid', 'b-null']);
  });

  it('is deterministic across repeated calls and source permutations, including date/magnitude ties', () => {
    const candidates = [
      signal('news-c', 550, 400), signal('news-a', 700, 400), signal('news-b', 850, 500),
      signal('quake-b', 550, 600, { kind: 'quake', magnitude: 6 }),
      signal('quake-a', 700, 600, { kind: 'quake', magnitude: 6 }),
      signal('quake-older', 850, 600, { kind: 'quake', magnitude: 6, publishedAt: '2026-11-20T00:00:00Z' }),
    ];
    const expected = selectSignals(candidates, 1);
    expectSelection(expected, ['news-b', 'news-c', 'news-a'], 'quake-a');
    for (const input of [candidates, candidates.slice().reverse(), [...candidates.slice(2), ...candidates.slice(0, 2)]]) {
      for (let repeat = 0; repeat < 3; repeat++) {
        expect(selectSignals(input, 1)).toEqual(expected);
      }
    }
  });

  it('never mutates the input order, candidates, events or nested coordinates', () => {
    const candidates = structuredClone([...news, quake]);
    candidates[0].event.displayCoordinates = { lat: 51.51, lon: 0.01 };
    const before = structuredClone(candidates);
    freezeSignals(candidates);
    const chosen = selectSignals(candidates, 2);
    expect(chosen).toHaveLength(4);
    expect(candidates).toEqual(before);
    expect(chosen).not.toBe(candidates);
    for (const candidate of chosen) expect(candidates).toContain(candidate);
    chosen.reverse();
    expect(candidates).toEqual(before);
    expectSelection(selectSignals(candidates, 2), ['third', 'oldest', 'newest'], 'quake');
  });
});

describe.each([
  { name: 'desktop 1440x1000', mobile: false, obstacles: desktopObstacles, count: 4, visible: 4 },
  { name: 'mobile 390x1310', mobile: true, obstacles: mobileObstacles, count: 2, visible: 1 },
])('layoutSignals — $name', ({ mobile, obstacles, count, visible }) => {
  it('places projected signals outside the globe, HUD, other labels and viewport margins', () => {
    const { view, candidates } = projection(mobile);
    const chosen = selectSignals(candidates, 0, count);
    expect(chosen).toHaveLength(count);
    expectSpread(chosen);
    const labels = layoutSignals(chosen, view, obstacles);
    expect(labels).toHaveLength(visible);
    expectSafeLabels(labels, chosen, view, obstacles);
  });

  it('separates labels competing for the same anchor instead of stacking them', () => {
    const { view, candidates } = projection(mobile);
    const competing = Array.from({ length: count }, (_, index) => ({
      ...candidates[0], event: { ...candidates[0].event, id: `competing-${index}` },
    }));
    const labels = layoutSignals(competing, view, []);
    expect(labels).toHaveLength(count);
    expectSafeLabels(labels, competing, view, []);
  });

  it('reserves 80px height for a focused label', () => {
    const { view, candidates } = projection(mobile);
    const focused = { ...view, focused: true };
    const chosen = candidates.slice(0, 1);
    const labels = layoutSignals(chosen, focused, []);
    expect(labels).toHaveLength(1);
    expectSafeLabels(labels, chosen, focused, []);
    expect(labels[0].rect.height).toBe(80);
  });

  it('is deterministic and does not mutate any layout inputs or retain mutable result rectangles', () => {
    const { view, candidates } = projection(mobile);
    const chosen = selectSignals(candidates, 0, count);
    chosen[0].event.displayCoordinates = { lat: chosen[0].event.lat, lon: chosen[0].event.lon };
    const blocked = structuredClone(obstacles);
    const before = structuredClone({ chosen, view, blocked });
    freezeSignals(chosen);
    Object.freeze(view);
    blocked.forEach(Object.freeze);
    Object.freeze(blocked);
    const labels = layoutSignals(chosen, view, blocked);
    expect(labels).toHaveLength(visible);
    const expected = structuredClone(labels);
    expect(layoutSignals(chosen, view, blocked)).toEqual(expected);
    labels[0].rect.x = -999;
    expect(layoutSignals(chosen, view, blocked)).toEqual(expected);
    expect({ chosen, view, blocked }).toEqual(before);
  });

  it('returns no labels for empty input or when the viewport is fully obstructed', () => {
    const { view, candidates } = projection(mobile);
    expect(layoutSignals([], view, obstacles)).toEqual([]);
    expect(layoutSignals(candidates, view, [{ x: 0, y: 0, width: view.width, height: view.height }])).toEqual([]);
  });
});

describe('layoutSignals mobile constraints', () => {
  it('keeps a focused label visible when a safe 80px-high band exists between the HUD and globe', () => {
    const { view, candidates } = projection(true);
    const focused = { ...view, focused: true };
    // This rectangle proves that viewport, obstacle and globe constraints allow a label.
    const feasible: LabelRect = { x: 20, y: 252, width: 200, height: 80 };
    expectSafeRect(feasible, focused, mobileObstacles);
    const chosen = candidates.slice(0, 1);
    const labels = layoutSignals(chosen, focused, mobileObstacles);
    expect(labels).toHaveLength(1);
    expectSafeLabels(labels, chosen, focused, mobileObstacles);
  });

  it('shrinks the mobile label below 200px when the available width requires it', () => {
    const { view, candidates } = projection(true);
    const narrow = { ...view, width: 220, cx: 110 };
    const chosen = [{ ...candidates[0], x: 110, y: view.cy }];
    const labels = layoutSignals(chosen, narrow, []);
    expect(labels).toHaveLength(1);
    expect(labels[0].rect.width).toBe(180);
    expectSafeLabels(labels, chosen, narrow, []);
  });
});
