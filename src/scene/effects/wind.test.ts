import { describe, expect, it } from 'vitest';
import { toVector } from '../../astronomy/coordinates';
import { createWindField, windTangent } from './wind';

const base = { lat: 0, lon: 0, windSpeedMs: 5, windDirectionDeg: 0, observedAt: '2026-11-21T00:00:00Z' };
describe('real wind vector rendering', () => {
  it('meteorological north wind moves south, not north', () => {
    const vector = windTangent(base);
    expect(vector.y).toBeCloseTo(-1, 10);
    expect(vector.dot(toVector(base))).toBeCloseTo(0, 10);
  });
  it('wind from west moves east along increasing longitude', () => {
    const vector = windTangent({ ...base, windDirectionDeg: 270 });
    expect(vector.z).toBeCloseTo(-1, 10);
  });
  it('calm air does not fabricate a flow', () => {
    const field = createWindField([{ ...base, windSpeedMs: 0 }]);
    expect(field.geometry.getAttribute('position').count).toBe(0);
    field.geometry.dispose(); field.material.dispose();
  });
  it('actual sample creates sparse traces on the atmosphere shell', () => {
    const field = createWindField([base]);
    const positions = field.geometry.getAttribute('position');
    expect(positions.count).toBe(88);
    expect(Math.hypot(positions.getX(0), positions.getY(0), positions.getZ(0))).toBeCloseTo(1.012, 5);
    expect(field.material.depthWrite).toBe(false);
    field.geometry.dispose(); field.material.dispose();
  });
});
