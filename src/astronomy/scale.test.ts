import { describe, expect, it } from 'vitest';
import { estimatedPopulation, POPULATION_BASE, LUNAR_ORBIT_RADII } from './scale';
import { solarPosition } from './solar';

describe('macro scale estimates', () => {
  it('keeps the Moon orbit at a mean 60.34 Earth radii', () => {
    expect(LUNAR_ORBIT_RADII).toBeCloseTo(60.3359, 3);
  });
  it('labels a deterministic population model with slow per-second growth', () => {
    const epoch = Date.UTC(2026, 0, 1);
    expect(estimatedPopulation(epoch)).toBe(POPULATION_BASE);
    expect(estimatedPopulation(epoch + 1000) - estimatedPopulation(epoch)).toBeGreaterThanOrEqual(2);
    expect(estimatedPopulation(epoch + 1000) - estimatedPopulation(epoch)).toBeLessThanOrEqual(3);
  });
  it('resolves perihelion, aphelion and light travel time', () => {
    const january = solarPosition(Date.UTC(2026, 0, 3));
    const july = solarPosition(Date.UTC(2026, 6, 4));
    expect(january.distanceAu).toBeCloseTo(0.9833, 3);
    expect(july.distanceAu).toBeCloseTo(1.0167, 3);
    expect(january.lightSeconds).toBeCloseTo(january.distanceAu * 499.004784);
  });
});
