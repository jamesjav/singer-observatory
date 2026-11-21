import { Vector3 } from 'three';
import { DEG, toCoordinates, toVector, wrapLongitude } from '../astronomy/coordinates';
import type { NoiseEvent } from '../data/providers/types';

const MIN_INCIDENCE = 0.2;
const MAX_INCIDENCE = 0.65;
const MAX_Y = Math.sin(70 * DEG);
const EPSILON = 1e-12;

interface Region {
  direction: Vector3;
  news: number;
  quakes: number;
}

// A region contributes once, with at most a 40% bonus for story density.
function density(count: number): number {
  return count === 0 ? 0 : 1 + 0.1 * Math.min(4, count - 1);
}

function signalRegions(events: NoiseEvent[]): Region[] {
  const bins = new Map<number, Region>();
  for (const event of events) {
    if (event.precision === 'unlocated' || !Number.isFinite(event.lat) || !Number.isFinite(event.lon)
      || Math.abs(event.lat) > 90) continue;
    // Display jitter must not give duplicate city stories extra influence.
    const latitude = Math.min(17, Math.floor((event.lat + 90) / 10));
    const longitude = Math.floor((wrapLongitude(event.lon) + 180) / 10);
    const key = latitude * 36 + longitude;
    let region = bins.get(key);
    if (!region) {
      region = { direction: toVector({ lat: latitude * 10 - 85, lon: longitude * 10 - 175 }), news: 0, quakes: 0 };
      bins.set(key, region);
    }
    if (event.kind === 'quake') region.quakes++;
    else region.news++;
  }
  // Fix floating-point summation order independently of source arrival order.
  return [...bins.entries()].sort(([a], [b]) => a - b).map(([, region]) => region);
}

// Solar incidence constraints retain the real terminator without rotating sunlight.
export function chooseSignalView(events: NoiseEvent[], sun: Vector3): Vector3 {
  // Scaling avoids underflow and overflow when normalizing extreme vectors.
  const scale = Math.max(Math.abs(sun.x), Math.abs(sun.y), Math.abs(sun.z));
  const solar = Number.isFinite(scale) && scale > 0
    ? new Vector3(sun.x / scale, sun.y / scale, sun.z / scale).normalize()
    : new Vector3(1, 0, 0);
  const regions = signalRegions(events);
  const candidates: Vector3[] = [];
  const addCandidate = (direction: Vector3) => {
    direction.normalize();
    const incidence = direction.dot(solar);
    if (incidence >= MIN_INCIDENCE - EPSILON && incidence <= MAX_INCIDENCE + EPSILON
      && Math.abs(direction.y) <= MAX_Y + EPSILON) candidates.push(direction);
  };

  // Prefer the current composition on ties, but never relax solar constraints.
  addCandidate(toVector({ lat: 19, lon: toCoordinates(solar).lon - 48 }));
  const axis = Math.abs(solar.y) < 0.9 ? new Vector3(0, 1, 0) : new Vector3(1, 0, 0);
  const right = new Vector3().crossVectors(axis, solar).normalize();
  const up = new Vector3().crossVectors(solar, right).normalize();
  for (const incidence of [0.25, 0.45, 0.65]) {
    const radius = Math.sqrt(1 - incidence * incidence);
    for (let azimuth = 0; azimuth < 24; azimuth++) {
      const angle = azimuth * Math.PI / 12;
      addCandidate(solar.clone().multiplyScalar(incidence)
        .addScaledVector(right, radius * Math.cos(angle))
        .addScaledVector(up, radius * Math.sin(angle)));
    }
  }

  // Each sampled ring includes low-latitude directions, even for a polar sun.
  let best = candidates[0];
  let bestScore = -Infinity;
  for (const direction of candidates) {
    let score = 0;
    for (const region of regions) {
      const facing = direction.dot(region.direction);
      // Prefer broad front-facing coverage over limb clusters or a single city.
      const visibility = Math.min(1, Math.max(0, (facing - 0.2) / 0.3));
      score += (density(region.news) + 0.35 * density(region.quakes))
        * visibility * (0.8 + 0.2 * Math.max(0, facing));
    }
    if (score > bestScore) {
      bestScore = score;
      best = direction;
    }
  }
  return best;
}
