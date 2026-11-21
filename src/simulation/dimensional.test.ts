import { describe, expect, it } from 'vitest';
import { DimensionalSequence, DIMENSIONAL_DURATION, RESTORE_DURATION } from './dimensional';

describe('two-dimensional preview lifecycle', () => {
  it('stays idle until explicit release', () => {
    const sequence = new DimensionalSequence();
    expect(sequence.sample(100000)).toEqual({ phase: 'idle', progress: 0, fold: 0, foil: 0 });
    expect(sequence.restore(100000)).toBe(false);
  });
  it('delivers foil before geometry changes and archives in eleven seconds', () => {
    const sequence = new DimensionalSequence();
    expect(sequence.start(0)).toBe(true);
    expect(sequence.sample(1000)).toMatchObject({ phase: 'delivery', fold: 0, foil: 1 });
    expect(sequence.sample(6000).fold).toBeGreaterThan(0);
    expect(sequence.sample(6000).fold).toBeLessThan(1);
    expect(sequence.sample(DIMENSIONAL_DURATION)).toEqual({ phase: 'archived', progress: 1, fold: 1, foil: 0 });
    expect(sequence.sample(100000)).toEqual(sequence.sample(DIMENSIONAL_DURATION));
    expect(sequence.start(100000)).toBe(false);
  });
  it.each([0, 1200, 2499, 4300, 9000, 11000, 50000])('restores continuously from elapsed %d', elapsed => {
    const sequence = new DimensionalSequence();
    sequence.start(0);
    const before = sequence.sample(elapsed);
    expect(sequence.restore(elapsed)).toBe(true);
    const after = sequence.sample(elapsed);
    expect(after).toEqual({ ...before, phase: 'restoring' });
    expect(sequence.start(elapsed)).toBe(false);
    expect(sequence.restore(elapsed + 1)).toBe(false);
    expect(sequence.sample(elapsed + RESTORE_DURATION / 2).fold).toBeCloseTo(before.fold / 2);
    expect(sequence.sample(elapsed + RESTORE_DURATION)).toEqual({ phase: 'idle', progress: 0, fold: 0, foil: 0 });
    expect(sequence.start(elapsed + RESTORE_DURATION + 1)).toBe(true);
  });
  it('is bounded and monotonically folds without changing the simulation clock', () => {
    const sequence = new DimensionalSequence();
    sequence.start(1000);
    let previous = 0;
    for (let time = 1000; time < 15000; time += 17) {
      const frame = sequence.sample(time);
      expect(frame.fold).toBeGreaterThanOrEqual(previous);
      expect(frame.fold).toBeLessThanOrEqual(1);
      expect(frame.foil).toBeGreaterThanOrEqual(0);
      expect(frame.foil).toBeLessThanOrEqual(1);
      previous = frame.fold;
    }
  });
});
