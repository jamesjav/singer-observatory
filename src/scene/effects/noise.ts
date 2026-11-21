import { Color, Group, Mesh, PlaneGeometry, ShaderMaterial, Vector2, Vector3 } from 'three';
import { toVector } from '../../astronomy/coordinates';
import type { NoiseEvent } from '../../data/providers/types';

export interface NoiseMarker { event: NoiseEvent; mesh: Mesh<PlaneGeometry, ShaderMaterial>; alpha: number }
export interface NoiseOptions { quakesEnabled?: boolean; highlightedId?: string | null }

export function createNoiseMarkers(events: NoiseEvent[]) {
  const group = new Group();
  if (!events.length) return { group, markers: [] as NoiseMarker[] };
  const geometry = new PlaneGeometry(1, 1);
  const markers: NoiseMarker[] = events.map((event) => {
    const seismic = event.kind === 'quake';
    const magnitude = Number.isFinite(event.magnitude) ? event.magnitude! : 4.5;
    const warm = event.entropy > 0.6 || ['局部摩擦', '局部冲突', '灾变扰动'].includes(event.tag);
    const color = seismic ? '#a4c2c7' : event.entropy > 0.75 ? '#bf8372' : warm ? '#c3a275' : '#dedfd9';
    const material = new ShaderMaterial({
      transparent: true,
      depthTest: false,
      depthWrite: false,
      toneMapped: false,
      uniforms: {
        // Screen quads use physical drawing-buffer dimensions plus the renderer pixel ratio.
        uViewport: { value: new Vector2(1, 1) },
        uDpr: { value: 1 },
        uSize: { value: seismic ? 46 + (Math.min(9, Math.max(3, magnitude)) - 3) * 3 : 34 },
        uProgress: { value: 0 },
        uPulse: { value: 0 },
        uAlpha: { value: 0 },
        uHighlight: { value: 0 },
        uColor: { value: new Color(color) },
        uSeismic: { value: seismic ? 1 : 0 },
        uAlert: { value: !seismic && warm ? 1 : 0 },
      },
      vertexShader: `
        varying vec2 vCss;
        uniform vec2 uViewport;
        uniform float uDpr;
        uniform float uSize;
        void main() {
          vCss = position.xy * uSize;
          vec4 clip = projectionMatrix * modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
          clip.xy += position.xy * uSize * uDpr / max(uViewport, vec2(1.0)) * 2.0 * clip.w;
          gl_Position = clip;
        }`,
      fragmentShader: `
        varying vec2 vCss;
        uniform float uDpr;
        uniform float uSize;
        uniform float uProgress;
        uniform float uPulse;
        uniform float uAlpha;
        uniform float uHighlight;
        uniform vec3 uColor;
        uniform float uSeismic;
        uniform float uAlert;
        void main() {
          float d = length(vCss);
          float aa = 0.65 / max(uDpr, 1.0);
          float coreRadius = mix(2.0, 2.25, uSeismic) + 0.2 * uHighlight;
          float core = (1.0 - smoothstep(coreRadius - aa, coreRadius + aa, d)) * (0.92 + 0.08 * uHighlight);
          float halo = (1.0 - smoothstep(coreRadius, 5.0 + uHighlight, d)) * (0.12 + 0.07 * uHighlight);
          float stemDistance = length(vCss - vec2(0.0, clamp(vCss.y, 2.8, 8.6)));
          float stem = (1.0 - smoothstep(0.28, 0.28 + aa, stemDistance)) * (0.28 + 0.16 * uHighlight) * (1.0 - uSeismic);
          float progress = clamp(uProgress, 0.0, 1.0);
          float radius = mix(5.0, uSize * 0.43, progress);
          float innerRadius = mix(3.5, uSize * 0.30, progress);
          float ring = 1.0 - smoothstep(0.35, 0.35 + aa, abs(d - radius));
          float innerRing = 1.0 - smoothstep(0.28, 0.28 + aa, abs(d - innerRadius));
          float rings = (ring * mix(0.24 + 0.16 * uAlert, 0.30, uSeismic) + innerRing * 0.17 * uSeismic) * uPulse;
          // Only the rings pulse. The geographic anchor survives the quiet interval.
          float opacity = clamp(max(core, halo + stem + rings), 0.0, 1.0) * uAlpha;
          gl_FragColor = vec4(mix(uColor, vec3(0.92), uHighlight * 0.12), opacity);
          #include <colorspace_fragment>
        }`,
    });
    const mesh = new Mesh(geometry, material);
    mesh.position.copy(toVector(event.displayCoordinates ?? event)).multiplyScalar(1.018);
    mesh.renderOrder = 6;
    // A shader-expanded screen quad has no useful world-space bounding sphere.
    mesh.frustumCulled = false;
    mesh.visible = false;
    group.add(mesh);
    return { event, mesh, alpha: 0 };
  });
  return { group, markers };
}

export function updateNoise(markers: NoiseMarker[], elapsed: number, distance: number, camera: Vector3, enabled: boolean, calibrating: boolean, fold = 0, options: NoiseOptions = {}) {
  const distanceFade = 1 - Math.min(1, Math.max(0, (distance - 11) / 20));
  const quakesEnabled = options.quakesEnabled ?? enabled;
  const normal = new Vector3();
  const viewDirection = new Vector3();
  let active = 0;
  markers.forEach((marker, index) => {
    const phase = ((elapsed * (marker.mesh.material.uniforms.uAlert.value ? 1.45 : 1) + index * 1.83) % 23) / 8;
    const envelope = phase < 1 ? Math.min(1, phase / 0.12) * Math.min(1, (1 - phase) / 0.35) : 0;
    const reference = calibrating && index < 3;
    const extinction = 1 - Math.min(1, Math.max(0, (fold - index / Math.max(1, markers.length) * 0.18) / 0.16));
    const switchedOn = marker.event.kind === 'quake' ? quakesEnabled : enabled;
    // Test the actual unit surface, not the elevated quad or the camera's origin ray.
    normal.copy(marker.mesh.position).normalize();
    const facing = normal.dot(viewDirection.copy(camera).sub(normal).normalize());
    const limb = Math.min(1, Math.max(0, (facing - 0.02) / 0.14));
    const limbFade = limb * limb * (3 - 2 * limb);
    marker.alpha = switchedOn && facing > 0.02 ? (reference ? 0.9 : 0.82) * limbFade * distanceFade * extinction : 0;
    const uniforms = marker.mesh.material.uniforms;
    const highlighted = marker.event.id === options.highlightedId;
    uniforms.uProgress.value = reference ? 0.3 : highlighted ? elapsed % 3 / 3 : phase;
    uniforms.uPulse.value = reference ? 1 : highlighted ? 0.9 : envelope;
    uniforms.uAlpha.value = marker.alpha;
    uniforms.uHighlight.value = highlighted ? 1 : 0;
    marker.mesh.visible = marker.alpha > 0.005;
    if (marker.mesh.visible && marker.event.kind !== 'quake') active++;
  });
  return active;
}
