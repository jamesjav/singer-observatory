import { afterEach, describe, expect, it } from 'vitest';
import { Color, Vector2, Vector3 } from 'three';
import { createNoiseMarkers, updateNoise } from './noise';
import { MOCK_EVENTS } from '../../data/mock/noise';
import type { NoiseEvent } from '../../data/providers/types';
import { toVector } from '../../astronomy/coordinates';

const created: ReturnType<typeof createNoiseMarkers>[] = [];
afterEach(() => {
  created.forEach(({ markers }) => { markers[0]?.mesh.geometry.dispose(); markers.forEach(({ mesh }) => mesh.material.dispose()); });
  created.length = 0;
});

function setup(events: NoiseEvent[] = MOCK_EVENTS) {
  const result = createNoiseMarkers(events);
  created.push(result);
  return result.markers;
}

const news: NoiseEvent = { ...MOCK_EVENTS[0], id: 'news', lat: 0, lon: 0, kind: 'news' };
const quake: NoiseEvent = { ...news, id: 'quake', kind: 'quake', precision: 'seismic', magnitude: 5 };
const frontCamera = new Vector3(7.5, 0, 0);

// For the +X surface normal, this gives the requested normal · (camera - normal).
function limbCamera(facing: number) {
  return new Vector3(1 + facing * 5, Math.sqrt(1 - facing * facing) * 5, 0);
}

describe('screen-space noise anchors', () => {
  it('returns an empty disposable group when there are no events', () => {
    const result = createNoiseMarkers([]);
    created.push(result);
    expect(result.markers).toEqual([]);
    expect(result.group.children).toEqual([]);
    expect(updateNoise([], 1, 7.5, frontCamera, true, false)).toBe(0);
  });

  it('retains every located event above the previous 120-marker limit', () => {
    const events = Array.from({ length: 160 }, (_, index) => ({ ...news, id: `news-${index}` }));
    const markers = setup(events);
    expect(markers.map(marker => marker.event.id)).toEqual(events.map(event => event.id));
    expect(updateNoise(markers, 12, 7.5, frontCamera, true, false)).toBe(160);
  });

  it('shares one unit quad while keeping materials and viewport vectors independent', () => {
    const markers = setup([news, quake]);
    expect(created[0].group.children).toEqual(markers.map(marker => marker.mesh));
    expect(markers[0].mesh.geometry).toBe(markers[1].mesh.geometry);
    expect(markers[0].mesh.geometry.parameters.width).toBe(1);
    expect(markers[0].mesh.geometry.parameters.height).toBe(1);
    expect(markers[0].mesh.material).not.toBe(markers[1].mesh.material);
    expect(markers[0].mesh.material.uniforms.uViewport.value).not.toBe(markers[1].mesh.material.uniforms.uViewport.value);
    for (const { mesh, alpha } of markers) {
      expect(mesh.material.depthTest).toBe(false);
      expect(mesh.material.depthWrite).toBe(false);
      expect(mesh.material.transparent).toBe(true);
      expect(mesh.material.toneMapped).toBe(false);
      expect(mesh.renderOrder).toBeGreaterThanOrEqual(6);
      expect(mesh.frustumCulled).toBe(false);
      expect(mesh.scale.toArray()).toEqual([1, 1, 1]);
      expect(mesh.position.length()).toBeCloseTo(1.018, 12);
      expect(alpha).toBe(0);
      expect(mesh.visible).toBe(false);
    }
  });

  it('uses the display location without moving the geographic anchor during updates', () => {
    const event = { ...news, displayCoordinates: { lat: 32, lon: 117 } };
    const [marker] = setup([event]);
    const position = toVector(event.displayCoordinates, 1.018);
    expect(marker.mesh.position.distanceTo(position)).toBeLessThan(1e-12);
    expect(updateNoise([marker], 12, 7.5, toVector(event.displayCoordinates, 7.5), true, false, 0, { highlightedId: event.id })).toBe(1);
    expect(marker.mesh.position.distanceTo(position)).toBeLessThan(1e-12);
  });

  it('exposes CSS sizing and physical viewport/DPR uniforms without overwriting renderer values', () => {
    const markers = setup([news, quake]);
    for (const { mesh } of markers) {
      const uniforms = mesh.material.uniforms;
      expect(uniforms.uViewport.value).toBeInstanceOf(Vector2);
      expect(uniforms.uDpr.value).toBe(1);
      uniforms.uViewport.value.set(2400, 1600);
      uniforms.uDpr.value = 2;
    }
    updateNoise(markers, 12, 7.5, frontCamera, true, false);
    expect(markers[0].mesh.material.uniforms.uSize.value).toBe(34);
    for (const { mesh } of markers) {
      expect(mesh.material.uniforms.uViewport.value.toArray()).toEqual([2400, 1600]);
      expect(mesh.material.uniforms.uDpr.value).toBe(2);
      expect(mesh.material.vertexShader).toContain('modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0)');
      expect(mesh.material.vertexShader).toContain('position.xy * uSize * uDpr / max(uViewport, vec2(1.0)) * 2.0 * clip.w');
    }
    markers[0].mesh.material.uniforms.uViewport.value.set(1800, 1200);
    expect(markers[1].mesh.material.uniforms.uViewport.value.toArray()).toEqual([2400, 1600]);
  });

  it.each([1, 1.5, 2, 3])('keeps projected CSS dimensions constant at DPR %s and different clip depths', (dpr) => {
    const [marker] = setup([news]);
    const uniforms = marker.mesh.material.uniforms;
    uniforms.uDpr.value = dpr;
    for (const [width, height] of [[1200, 800], [390, 844]]) {
      uniforms.uViewport.value.set(width * dpr, height * dpr);
      for (const clipW of [2, 7.5, 21]) {
        // The vertex-shader offset converted back through NDC to CSS pixels.
        const clipOffset = new Vector2(0.5, 0.5).multiplyScalar(uniforms.uSize.value * uniforms.uDpr.value)
          .divide(uniforms.uViewport.value).multiplyScalar(2 * clipW);
        const cssOffset = clipOffset.divideScalar(clipW).multiply(new Vector2(width / 2, height / 2));
        expect(cssOffset.x).toBeCloseTo(17, 10);
        expect(cssOffset.y).toBeCloseTo(17, 10);
      }
    }
  });

  it('sizes seismic rings by magnitude rather than mesh scale', () => {
    const magnitudes = [1, 3, 4.5, 6, 9, 12, undefined, NaN];
    const markers = setup(magnitudes.map((magnitude, index) => ({ ...quake, id: `quake-${index}`, magnitude })));
    const sizes = markers.map(({ mesh }) => mesh.material.uniforms.uSize.value);
    expect(sizes).toEqual([46, 46, 50.5, 55, 64, 64, 50.5, 50.5]);
    expect(sizes[2]).toBeLessThan(sizes[3]);
    expect(sizes[3]).toBeLessThan(sizes[4]);
    for (const { mesh } of markers) {
      expect(mesh.material.uniforms.uSeismic.value).toBe(1);
      expect(mesh.scale.toArray()).toEqual([1, 1, 1]);
      expect(mesh.material.fragmentShader).toContain('uSize * 0.43');
      expect(mesh.material.fragmentShader).toContain('uSize * 0.30');
    }
    expect(updateNoise(markers, 1, 7.5, frontCamera, true, false)).toBe(0);
    expect(markers.every(marker => marker.mesh.visible)).toBe(true);
  });

  it('uses off-white news, restrained amber/red alerts and cyan-gray quakes', () => {
    const markers = setup([
      news,
      { ...news, entropy: 0.7 },
      { ...news, entropy: 0.9 },
      { ...news, tag: '局部冲突', entropy: 0.3 },
      { ...news, tag: '灾变扰动', entropy: 0.3 },
      { ...news, tag: '局部摩擦', entropy: 0.3 },
      { ...quake, entropy: 0.9 },
    ]);
    const colors = ['#dedfd9', '#c3a275', '#bf8372', '#c3a275', '#c3a275', '#c3a275', '#a4c2c7'];
    markers.forEach(({ mesh }, index) => expect(mesh.material.uniforms.uColor.value.equals(new Color(colors[index]))).toBe(true));
    expect(markers[0].mesh.material.uniforms.uSeismic.value).toBe(0);
    expect(markers.map(marker => marker.mesh.material.uniforms.uAlert.value)).toEqual([0, 1, 1, 1, 1, 1, 0]);
  });
});

describe('surface-noise lifecycle', () => {
  it('keeps news and quake anchors throughout the full 23-second pulse cycle', () => {
    const markers = setup([news, quake]);
    for (const elapsed of [0, 0.5, 1, 4, 7.9, 8, 9, 15, 22.99, 23, 24, 46]) {
      expect(updateNoise(markers, elapsed, 7.5, frontCamera, true, false)).toBe(1);
      for (const marker of markers) {
        expect(marker.alpha).toBe(0.82);
        expect(marker.mesh.material.uniforms.uAlpha.value).toBe(marker.alpha);
        expect(marker.mesh.visible).toBe(true);
        expect(marker.mesh.material.uniforms.uPulse.value).toBeGreaterThanOrEqual(0);
        expect(marker.mesh.material.uniforms.uPulse.value).toBeLessThanOrEqual(1);
      }
    }
    updateNoise(markers, 1, 7.5, frontCamera, true, false);
    expect(markers[0].mesh.material.uniforms.uPulse.value).toBe(1);
    expect(markers[0].mesh.material.uniforms.uProgress.value).toBe(1 / 8);
    for (const elapsed of [8, 9, 15, 20]) {
      updateNoise(markers, elapsed, 7.5, frontCamera, true, false);
      expect(markers.every(marker => marker.mesh.material.uniforms.uPulse.value === 0 && marker.alpha > 0.5)).toBe(true);
    }
    updateNoise(markers, 24, 7.5, frontCamera, true, false);
    expect(markers[0].mesh.material.uniforms.uPulse.value).toBe(1);
  });

  it.each([false, true])('strictly hides backfaces and the true surface horizon, calibration=%s', (calibrating) => {
    const markers = setup([news, quake]);
    for (const camera of [new Vector3(-7.5, 0, 0), new Vector3(0, 7.5, 0), limbCamera(0), limbCamera(0.0199)]) {
      expect(updateNoise(markers, 1, 7.5, camera, true, calibrating)).toBe(0);
      expect(markers.every(marker => marker.alpha === 0 && !marker.mesh.visible && marker.mesh.material.uniforms.uAlpha.value === 0)).toBe(true);
    }
    expect(updateNoise(markers, 9, 7.5, frontCamera, true, calibrating)).toBe(1);
    expect(markers.every(marker => marker.mesh.visible)).toBe(true);
  });

  it('uses the unit surface normal, not the elevated center, and gently fades the limb', () => {
    const [marker] = setup([news]);
    updateNoise([marker], 1, 7.5, limbCamera(0.0201), true, false);
    // Subtracting the raised 1.018 center would incorrectly classify this as hidden.
    expect(marker.alpha).toBeGreaterThan(0);
    let previous = 0;
    for (const facing of [0.03, 0.06, 0.09, 0.12, 0.16, 1]) {
      const active = updateNoise([marker], 1, 7.5, limbCamera(facing), true, false);
      expect(marker.alpha).toBeGreaterThanOrEqual(previous);
      expect(active).toBe(marker.mesh.visible ? 1 : 0);
      if (facing === 0.09) expect(marker.alpha).toBeCloseTo(0.82 * 0.5, 10);
      previous = marker.alpha;
    }
    expect(marker.alpha).toBe(0.82);
  });

  it('counts only visible human markers regardless of pulse phase', () => {
    const markers = setup([news, { ...news, id: 'other' }, quake, { ...news, id: 'back', lon: 180 }]);
    expect(updateNoise(markers, 12, 7.5, frontCamera, true, false)).toBe(2);
    expect(markers.map(marker => marker.mesh.visible)).toEqual([true, true, true, false]);
  });

  it.each([
    [true, true, 1],
    [true, false, 1],
    [false, true, 0],
    [false, false, 0],
  ] as const)('switches news=%s and quakes=%s independently', (enabled, quakesEnabled, count) => {
    const markers = setup([news, quake]);
    for (const calibrating of [false, true]) {
      expect(updateNoise(markers, 12, 7.5, frontCamera, enabled, calibrating, 0, { quakesEnabled })).toBe(count);
      expect(markers[0].mesh.visible).toBe(enabled);
      expect(markers[1].mesh.visible).toBe(quakesEnabled);
    }
  });

  it('defaults the quake switch to enabled for legacy all-on/all-off callers', () => {
    const markers = setup([news, quake]);
    for (const enabled of [false, true, false]) {
      updateNoise(markers, 1, 7.5, frontCamera, enabled, false);
      expect(markers.every(marker => marker.mesh.visible === enabled)).toBe(true);
      updateNoise(markers, 1, 7.5, frontCamera, enabled, false, 0, { quakesEnabled: undefined });
      expect(markers.every(marker => marker.mesh.visible === enabled)).toBe(true);
    }
  });

  it('highlights only the selected anchor without moving, resizing or reviving hidden markers', () => {
    const markers = setup([news, quake]);
    const sizes = markers.map(marker => marker.mesh.material.uniforms.uSize.value);
    for (const highlightedId of ['news', 'quake', 'missing', null, undefined]) {
      updateNoise(markers, 12, 7.5, frontCamera, true, false, 0, { highlightedId });
      markers.forEach(({ event, mesh, alpha }, index) => {
        expect(mesh.material.uniforms.uHighlight.value).toBe(event.id === highlightedId ? 1 : 0);
        expect(mesh.material.uniforms.uSize.value).toBe(sizes[index]);
        expect(mesh.position.distanceTo(toVector(event, 1.018))).toBeLessThan(1e-12);
        expect(alpha).toBe(0.82);
      });
    }
    updateNoise(markers, 1, 7.5, frontCamera, false, true, 0, { highlightedId: 'news' });
    expect(markers.every(marker => !marker.mesh.visible && marker.alpha === 0)).toBe(true);
    updateNoise(markers, 1, 7.5, new Vector3(-7.5, 0, 0), true, true, 0, { highlightedId: 'quake' });
    expect(markers.every(marker => !marker.mesh.visible && marker.alpha === 0)).toBe(true);
    updateNoise(markers, 1, 7.5, frontCamera, true, false);
    expect(markers.every(marker => marker.mesh.material.uniforms.uHighlight.value === 0)).toBe(true);
  });

  it('keeps a highlighted pulse readable during the ordinary quiet interval', () => {
    const [marker] = setup([news]);
    updateNoise([marker], 12, 7.5, frontCamera, true, false, 0, { highlightedId: 'news' });
    expect(marker.mesh.material.uniforms.uPulse.value).toBe(0.9);
    expect(marker.mesh.material.uniforms.uHighlight.value).toBe(1);
    updateNoise([marker], 12, 7.5, frontCamera, true, false);
    expect(marker.mesh.material.uniforms.uPulse.value).toBe(0);
    expect(marker.alpha).toBe(0.82);
  });

  it('extinguishes all anchors at archive and restores their original state', () => {
    const markers = setup([news, quake]);
    const options = { quakesEnabled: true, highlightedId: 'news' };
    updateNoise(markers, 12, 7.5, frontCamera, true, false, 0, options);
    const original = markers.map(({ alpha, mesh }) => ({ alpha, position: mesh.position.clone(), size: mesh.material.uniforms.uSize.value }));
    expect(updateNoise(markers, 12, 7.5, frontCamera, true, true, 1, options)).toBe(0);
    expect(markers.every(marker => marker.alpha === 0 && marker.mesh.material.uniforms.uAlpha.value === 0 && !marker.mesh.visible)).toBe(true);
    expect(updateNoise(markers, 12, 7.5, frontCamera, true, false, 0, options)).toBe(1);
    markers.forEach(({ alpha, mesh }, index) => {
      expect(alpha).toBe(original[index].alpha);
      expect(mesh.visible).toBe(true);
      expect(mesh.position.equals(original[index].position)).toBe(true);
      expect(mesh.material.uniforms.uSize.value).toBe(original[index].size);
    });
  });

  it('sequentially extinguishes existing anchors without inflating their count', () => {
    const markers = setup();
    const camera = toVector(MOCK_EVENTS[0], 7.5);
    let previous = Infinity;
    let previousAlpha = markers.map(() => Infinity);
    for (const fold of [0, 0.05, 0.1, 0.15, 0.2, 0.3, 1]) {
      const active = updateNoise(markers, 1, 7.5, camera, true, false, fold);
      expect(active).toBeLessThanOrEqual(previous);
      markers.forEach((marker, index) => expect(marker.alpha).toBeLessThanOrEqual(previousAlpha[index]));
      previous = active;
      previousAlpha = markers.map(marker => marker.alpha);
    }
    expect(previous).toBe(0);
    expect(markers.every(marker => marker.alpha === 0)).toBe(true);
  });

  it('smoothly silences news and quakes with distance and restores them', () => {
    const markers = setup([news, quake]);
    updateNoise(markers, 12, 11, frontCamera, true, false);
    const near = markers.map(marker => marker.alpha);
    updateNoise(markers, 12, 21, frontCamera, true, false);
    markers.forEach((marker, index) => expect(marker.alpha).toBeCloseTo(near[index] * 0.5, 10));
    for (const distance of [31, 40]) {
      expect(updateNoise(markers, 12, distance, frontCamera, true, true)).toBe(0);
      expect(markers.every(marker => marker.alpha === 0 && !marker.mesh.visible)).toBe(true);
    }
    updateNoise(markers, 12, 11, frontCamera, true, false);
    expect(markers.map(marker => marker.alpha)).toEqual(near);
  });

  it('pins only the first three visible reference signals and obeys the global switch', () => {
    const markers = setup(Array.from({ length: 4 }, (_, index) => ({ ...news, id: `reference-${index}` })));
    expect(updateNoise(markers, 9, 7.5, frontCamera, true, true)).toBe(4);
    expect(markers.slice(0, 3).every(marker => marker.alpha === 0.9 && marker.mesh.material.uniforms.uProgress.value === 0.3 && marker.mesh.material.uniforms.uPulse.value === 1)).toBe(true);
    expect(markers[3].alpha).toBe(0.82);
    expect(markers[3].mesh.material.uniforms.uPulse.value).toBe(0);
    updateNoise(markers, 9, 7.5, frontCamera, false, true);
    expect(markers.every(marker => marker.alpha === 0 && !marker.mesh.visible)).toBe(true);
  });

  it('does not use reference calibration to expose far-side mock events', () => {
    const markers = setup();
    const camera = toVector(MOCK_EVENTS[0], 7.5);
    updateNoise(markers, 9, 7.5, camera, true, true);
    expect(markers[0].alpha).toBe(0.9);
    expect(markers[1].alpha).toBe(0);
    expect(markers[1].mesh.visible).toBe(false);
    markers.forEach(marker => {
      const normal = toVector(marker.event.displayCoordinates ?? marker.event);
      if (normal.dot(camera.clone().sub(normal).normalize()) <= 0.02) {
        expect(marker.alpha).toBe(0);
        expect(marker.mesh.visible).toBe(false);
      }
    });
  });
});
