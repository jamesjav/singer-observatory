import { describe, expect, it } from 'vitest';
import { SimulationClock } from './clock';

describe('simulation clock', () => {
  const utc = Date.parse('2026-11-21T12:00:00Z');
  it('live mode follows UTC wall time', () => {
    const clock = new SimulationClock(utc, 0);
    expect(clock.read(1000, utc + 1234)).toBe(utc + 1234);
  });
  it('pause freezes and accelerated modes retain continuity', () => {
    const clock = new SimulationClock(utc, 0);
    clock.setMode('paused', 500, utc + 500);
    expect(clock.read(9000, utc + 9000)).toBe(utc + 500);
    clock.setMode('hour', 9000, utc + 9000);
    expect(clock.read(10000, utc + 10000)).toBe(utc + 500 + 3600000);
    clock.setMode('day', 10000, utc + 10000);
    expect(clock.read(11000, utc + 11000)).toBe(utc + 500 + 3600000 + 86400000);
  });
  it('returning to live explicitly resynchronizes current UTC', () => {
    const clock = new SimulationClock(utc, 0);
    clock.setMode('day', 0, utc);
    clock.setMode('live', 100000, utc + 100000);
    expect(clock.read(101000, utc + 101000)).toBe(utc + 101000);
  });
});
