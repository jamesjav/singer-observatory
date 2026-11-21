import { describe, expect, it } from 'vitest';
import { Mesh, MeshBasicMaterial, Raycaster, SphereGeometry, Vector3 } from 'three';
import { toCoordinates, toUV, toVector, wrapLongitude } from './coordinates';
import { solarPosition } from './solar';

const references = [
  { name: 'London', lat: 51.5, lon: 0 },
  { name: 'Tokyo', lat: 35.7, lon: 139.7 },
  { name: 'New York', lat: 40.7, lon: -74 },
];

describe('geographical and native Three.js sphere UV calibration', () => {
  for (const point of references) {
    it(`${point.name}: coordinate round trip and native sphere raycast UV`, () => {
      const position = toVector(point);
      const coordinates = toCoordinates(position);
      expect(coordinates.lat).toBeCloseTo(point.lat, 10);
      expect(coordinates.lon).toBeCloseTo(point.lon, 10);
      const sphere = new Mesh(new SphereGeometry(1, 160, 96), new MeshBasicMaterial());
      sphere.updateMatrixWorld();
      const ray = new Raycaster(position.clone().multiplyScalar(3), position.clone().negate());
      const hit = ray.intersectObject(sphere)[0];
      const uv = toUV(point);
      expect(hit).toBeDefined();
      expect(Math.abs(hit.uv!.x - uv.u) * 2048).toBeLessThan(0.25);
      expect(Math.abs(hit.uv!.y - uv.v) * 1024).toBeLessThan(0.25);
      const picked = toCoordinates(hit.point);
      expect(picked.lat).toBeCloseTo(point.lat, 8);
      expect(picked.lon).toBeCloseTo(point.lon, 8);
      sphere.geometry.dispose();
      sphere.material.dispose();
    });
  }
  it('places north at v=1, Greenwich at u=.5, and east right', () => {
    expect(toUV({ lat: 90, lon: 0 })).toEqual({ u: 0.5, v: 1 });
    expect(toVector({ lat: 0, lon: 90 }).distanceTo(new Vector3(0, 0, -1))).toBeLessThan(1e-10);
    expect(wrapLongitude(540)).toBe(-180);
    expect(wrapLongitude(-541)).toBe(179);
  });
});

describe('UTC solar ephemeris', () => {
  it('matches the March 2026 equinox declination', () => {
    expect(Math.abs(solarPosition(Date.parse('2026-03-20T14:46:00Z')).lat)).toBeLessThan(0.03);
  });
  it('matches June and December solstice declinations', () => {
    expect(solarPosition(Date.parse('2026-06-21T08:24:00Z')).lat).toBeCloseTo(23.438, 1);
    expect(solarPosition(Date.parse('2026-12-21T20:50:00Z')).lat).toBeCloseTo(-23.438, 1);
  });
  it('accounts for equation of time near Greenwich noon', () => {
    const solar = solarPosition(Date.parse('2026-03-20T12:00:00Z'));
    expect(solar.lon).toBeGreaterThan(1.7);
    expect(solar.lon).toBeLessThan(2.0);
  });
  it('advances sun westward about 15 degrees per hour', () => {
    const start = Date.parse('2026-11-21T12:00:00Z');
    const a = solarPosition(start);
    const b = solarPosition(start + 3600000);
    expect(wrapLongitude(b.lon - a.lon)).toBeCloseTo(-15, 1);
    expect(a.direction.length()).toBeCloseTo(1, 10);
    expect(a.direction.dot(toVector(a))).toBeCloseTo(1, 10);
    expect(a.direction.dot(toVector({ lat: -a.lat, lon: wrapLongitude(a.lon + 180) }))).toBeCloseTo(-1, 10);
  });
});
