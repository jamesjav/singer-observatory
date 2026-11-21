import { describe, expect, it } from 'vitest';
import { Vector3 } from 'three';
import { toCoordinates, toVector } from '../astronomy/coordinates';
import type { NoiseEvent } from '../data/providers/types';
import { chooseSignalView } from './signalView';

function event(lat: number, lon: number, overrides: Partial<NoiseEvent> = {}): NoiseEvent {
  return {
    id: `${lat}:${lon}`, settlement: 'Test region', summary: 'Test story', source: 'Test source',
    tag: '表面喧嚣', entropy: 0.5, lat, lon, url: null, publishedAt: null,
    collectedAt: '2026-11-21T00:00:00Z', demo: false, precision: 'city', kind: 'news',
    ...overrides,
  };
}

function cluster(lat: number, lon: number): NoiseEvent[] {
  return [-10, 0, 10].flatMap(dLat => [-10, 10].map(dLon => event(lat + dLat, lon + dLon)));
}

function expectAllowed(direction: Vector3, sun: Vector3) {
  expect(direction.toArray().every(Number.isFinite)).toBe(true);
  expect(direction.length()).toBeCloseTo(1, 12);
  const incidence = direction.dot(sun.clone().normalize());
  expect(incidence).toBeGreaterThanOrEqual(0.2 - 1e-12);
  expect(incidence).toBeLessThanOrEqual(0.65 + 1e-12);
  expect(Math.abs(toCoordinates(direction).lat)).toBeLessThanOrEqual(70 + 1e-10);
}

const equatorialSun = toVector({ lat: 0, lon: 0 });

describe('chooseSignalView', () => {
  it.each([
    { name: 'northeast', lat: 35, lon: 115 },
    { name: 'southeast', lat: -35, lon: 115 },
    { name: 'northwest', lat: 35, lon: -115 },
    { name: 'southwest', lat: -35, lon: -115 },
  ])('brings a $name news concentration forward without hiding night', ({ lat, lon }) => {
    const events = cluster(lat, lon);
    const direction = chooseSignalView(events, equatorialSun);
    const center = toVector({ lat, lon });
    const baseline = toVector({ lat: 19, lon: -48 });
    expectAllowed(direction, equatorialSun);
    expect(events.every(item => toVector(item).dot(equatorialSun) < 0)).toBe(true);
    expect(direction.dot(center)).toBeGreaterThan(0.75);
    expect(direction.dot(center)).toBeGreaterThan(baseline.dot(center) + 0.15);
    expect(events.every(item => direction.dot(toVector(item)) > 0.45)).toBe(true);
    expect(Math.sign(toCoordinates(direction).lat)).toBe(Math.sign(lat));
  });

  it.each([
    { lat: 0, lon: 0 },
    { lat: 23.4, lon: 147 },
    { lat: -23.4, lon: -168 },
    { lat: 90, lon: 0 },
    { lat: -90, lon: 0 },
  ])('keeps both illumination hemispheres and the true terminator visible for sun $lat/$lon', coordinates => {
    const sun = toVector(coordinates);
    const direction = chooseSignalView(cluster(25, 115), sun);
    expectAllowed(direction, sun);
    const incidence = direction.dot(sun);
    // The most front-facing point on the *true* terminator, not a synthetic
    // lighting boundary. Its adjacent day/night points must also face us.
    const terminator = direction.clone().addScaledVector(sun, -incidence).normalize();
    expect(terminator.dot(sun)).toBeCloseTo(0, 12);
    expect(terminator.dot(direction)).toBeGreaterThan(0.75);
    const day = terminator.clone().addScaledVector(sun, 0.25).normalize();
    const night = terminator.clone().addScaledVector(sun, -0.25).normalize();
    expect(day.dot(sun)).toBeGreaterThan(0);
    expect(night.dot(sun)).toBeLessThan(0);
    expect(day.dot(direction)).toBeGreaterThan(0.5);
    expect(night.dot(direction)).toBeGreaterThan(0.5);
    // Orthographic illuminated fraction: at least 17.5% night, at least 60% day.
    expect((1 - incidence) / 2).toBeGreaterThanOrEqual(0.175 - 1e-12);
    expect((1 + incidence) / 2).toBeGreaterThanOrEqual(0.6 - 1e-12);
  });

  it('retains the current baseline for empty events when it satisfies the constraints', () => {
    const direction = chooseSignalView([], equatorialSun);
    expect(direction.distanceTo(toVector({ lat: 19, lon: -48 }))).toBeLessThan(1e-12);
    expectAllowed(direction, equatorialSun);
    expect(chooseSignalView([], equatorialSun).toArray()).toEqual(direction.toArray());
  });

  it('rejects an overly sun-facing baseline even with empty events', () => {
    const sun = toVector({ lat: 23.4, lon: 170 });
    const baseline = toVector({ lat: 19, lon: 122 });
    expect(baseline.dot(sun)).toBeGreaterThan(0.65);
    const direction = chooseSignalView([], sun);
    expectAllowed(direction, sun);
    expect(chooseSignalView([], sun).toArray()).toEqual(direction.toArray());
  });

  it.each([
    new Vector3(0, 1, 0),
    new Vector3(0, -1, 0),
    new Vector3(1e-14, 1, -1e-14),
    new Vector3(1e-14, -1, 1e-14),
  ])('has a finite unit fallback and data-driven view at a polar sun %j', sun => {
    expectAllowed(chooseSignalView([], sun), sun);
    expectAllowed(chooseSignalView(cluster(-65, 45), sun), sun);
  });

  it('normalizes sun magnitude without changing the chosen composition', () => {
    const sun = new Vector3(1, 2, -3);
    const events = cluster(35, 115);
    const direction = chooseSignalView(events, sun);
    for (const scale of [7.5, 1e-300, 1e300]) {
      const scaled = chooseSignalView(events, sun.clone().multiplyScalar(scale));
      expectAllowed(scaled, sun);
      expect(scaled.distanceTo(direction)).toBeLessThan(1e-12);
    }
  });

  it('uses a deterministic finite fallback for invalid sun vectors', () => {
    const expected = chooseSignalView([], equatorialSun);
    for (const sun of [new Vector3(), new Vector3(NaN, 0, 0), new Vector3(Infinity, 1, 0)]) {
      expect(chooseSignalView([], sun).toArray()).toEqual(expected.toArray());
    }
  });

  it('does not rotate into the midnight hemisphere to chase unreachable news', () => {
    const reachable = cluster(25, 115);
    const midnight = Array.from({ length: 200 }, (_, i) => event(0, 180, { id: `midnight-${i}` }));
    const direction = chooseSignalView([...reachable, ...midnight], equatorialSun);
    expectAllowed(direction, equatorialSun);
    expect(direction.toArray()).toEqual(chooseSignalView(reachable, equatorialSun).toArray());
    expect(direction.dot(toVector(midnight[0]))).toBeLessThan(0);
  });

  it('favors many distributed news regions over hundreds of duplicate city stories', () => {
    const distributed = cluster(5, 115);
    const duplicates = Array.from({ length: 500 }, (_, i) => event(5, -115, { id: `duplicate-${i}` }));
    const direction = chooseSignalView([...duplicates, ...distributed], equatorialSun);
    expectAllowed(direction, equatorialSun);
    expect(distributed.every(item => direction.dot(toVector(item)) > 0.5)).toBe(true);
    expect(direction.dot(toVector(duplicates[0]))).toBeLessThan(0);
  });

  it('caps occupancy within a ten-degree bin, not just at identical coordinates', () => {
    const distributed = cluster(5, 115);
    const duplicateRegion = Array.from({ length: 500 }, (_, i) => event(1 + i % 9, -119 + i % 9));
    const direction = chooseSignalView([...distributed, ...duplicateRegion], equatorialSun);
    expect(direction.toArray()).toEqual(chooseSignalView([...distributed, ...duplicateRegion.slice(0, 5)], equatorialSun).toArray());
    expect(distributed.every(item => direction.dot(toVector(item)) > 0.5)).toBe(true);
  });

  it('allows a mild density preference between otherwise equal regions', () => {
    for (const denseLongitude of [-115, 115]) {
      const dense = Array.from({ length: 5 }, (_, i) => event(5, denseLongitude, { id: `story-${i}` }));
      const direction = chooseSignalView([...dense, event(5, -denseLongitude)], equatorialSun);
      expect(direction.dot(toVector(dense[0]))).toBeGreaterThan(0.75);
      expect(direction.dot(toVector({ lat: 5, lon: -denseLongitude }))).toBeLessThan(0);
    }
  });

  it('weights quake regions at 0.35 so two news regions beat four quake regions', () => {
    const news = [-5, 5].map(lat => event(lat, 115));
    const quakes = [-15, -5, 5, 15].map(lat => event(lat, -115, { kind: 'quake', precision: 'seismic' }));
    const direction = chooseSignalView([...quakes, ...news], equatorialSun);
    expectAllowed(direction, equatorialSun);
    expect(news.every(item => direction.dot(toVector(item)) > 0.75)).toBe(true);
    expect(quakes.every(item => direction.dot(toVector(item)) < 0)).toBe(true);
    // Earthquakes still guide the view when they are the only located signals.
    const quakeOnly = chooseSignalView(quakes, equatorialSun);
    expect(quakes.every(item => quakeOnly.dot(toVector(item)) > 0.7)).toBe(true);
  });

  it('treats legacy events with no kind as news', () => {
    const events = cluster(35, 115);
    expect(chooseSignalView(events.map(item => ({ ...item, kind: undefined })), equatorialSun).toArray())
      .toEqual(chooseSignalView(events, equatorialSun).toArray());
  });

  it('ignores unlocated or invalid locations and uses anchors rather than display jitter', () => {
    const events = cluster(35, 115);
    const ignored = [event(35, -115, { precision: 'unlocated' }), event(NaN, 0), event(0, Infinity), event(91, 0)];
    const expected = chooseSignalView(events, equatorialSun).toArray();
    expect(chooseSignalView([...events, ...ignored], equatorialSun).toArray()).toEqual(expected);
    expect(chooseSignalView(events.map(item => ({ ...item, displayCoordinates: { lat: -35, lon: -115 } })), equatorialSun).toArray()).toEqual(expected);
    expect(chooseSignalView(ignored, equatorialSun).toArray()).toEqual(chooseSignalView([], equatorialSun).toArray());
  });

  it('wraps equivalent longitudes into the same regional bins', () => {
    const events = cluster(35, 175);
    expect(chooseSignalView(events, equatorialSun).toArray())
      .toEqual(chooseSignalView(events.map(item => ({ ...item, lon: item.lon - 360 })), equatorialSun).toArray());
  });

  it('is exactly deterministic under source reordering', () => {
    const events = [
      ...cluster(35, 115), ...cluster(-35, -115), ...cluster(5, 45),
      ...cluster(-15, -65).map(item => ({ ...item, kind: 'quake' as const })),
      event(35, 105), event(36, 106), event(37, 107, { kind: 'quake' }),
    ];
    const expected = chooseSignalView(events, equatorialSun).toArray();
    const permutations = [events.slice().reverse(), [...events.slice(7), ...events.slice(0, 7)],
      [...events.filter((_, i) => i % 2), ...events.filter((_, i) => !(i % 2))]];
    for (const permutation of permutations) {
      expect(chooseSignalView(permutation, equatorialSun).toArray()).toEqual(expected);
    }
  });

  it('leaves the event array, nested coordinates, and sun untouched and returns an independent vector', () => {
    const events = cluster(35, 115).map(item => ({ ...item, displayCoordinates: { lat: item.lat + 0.01, lon: item.lon } }));
    const before = structuredClone(events);
    events.forEach(item => { Object.freeze(item.displayCoordinates); Object.freeze(item); });
    Object.freeze(events);
    const sun = new Vector3(2, 0.5, -1);
    const sunBefore = sun.toArray();
    Object.freeze(sun);
    const direction = chooseSignalView(events, sun);
    const expected = direction.toArray();
    expect(events).toEqual(before);
    expect(sun.toArray()).toEqual(sunBefore);
    direction.set(0, 0, 0);
    expect(chooseSignalView(events, sun).toArray()).toEqual(expected);
    expect(sun.toArray()).toEqual(sunBefore);
  });
});
