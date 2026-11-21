import { BufferGeometry, Float32BufferAttribute, LineSegments, ShaderMaterial, Vector3 } from 'three';
import { DEG, toVector } from '../../astronomy/coordinates';
import type { WindSample } from '../../data/providers/types';

export function windTangent(sample: WindSample): Vector3 {
  const phi = sample.lat * DEG;
  const theta = sample.lon * DEG;
  const east = new Vector3(-Math.sin(theta), 0, -Math.cos(theta));
  const north = new Vector3(-Math.sin(phi) * Math.cos(theta), Math.cos(phi), Math.sin(phi) * Math.sin(theta));
  const bearing = (sample.windDirectionDeg + 180) * DEG;
  return east.multiplyScalar(Math.sin(bearing)).addScaledVector(north, Math.cos(bearing)).normalize();
}

export function createWindField(samples: WindSample[]) {
  const positions: number[] = [];
  const phases: number[] = [];
  const speeds: number[] = [];
  samples.forEach((sample, index) => {
    if (sample.windSpeedMs < 0.15) return;
    for (let seed = 0; seed < 2; seed++) {
      const normal = toVector({ lat: sample.lat + (seed - 0.5) * 1.8, lon: sample.lon });
      const tangent = windTangent(sample);
      tangent.addScaledVector(normal, -tangent.dot(normal)).normalize();
      const length = Math.min(7, 1.8 + sample.windSpeedMs * 0.26) * DEG;
      const phase = ((index * 0.618 + seed * 0.31) % 1);
      for (let step = 0; step < 22; step++) {
        for (const end of [step, step + 1]) {
          const t = end / 22;
          const p = normal.clone().multiplyScalar(Math.cos(t * length)).addScaledVector(tangent, Math.sin(t * length)).multiplyScalar(1.012);
          positions.push(p.x, p.y, p.z);
          phases.push(t, phase);
          speeds.push(Math.min(0.34, 0.04 + sample.windSpeedMs * 0.012));
        }
      }
    }
  });
  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
  geometry.setAttribute('aPhase', new Float32BufferAttribute(phases, 2));
  geometry.setAttribute('aSpeed', new Float32BufferAttribute(speeds, 1));
  const material = new ShaderMaterial({
    transparent: true, depthWrite: false,
    uniforms: { uTime: { value: 0 }, uOpacity: { value: 0 } },
    vertexShader: `attribute vec2 aPhase; attribute float aSpeed; varying vec2 vPhase; varying float vSpeed;
      void main(){ vPhase=aPhase; vSpeed=aSpeed; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
    fragmentShader: `uniform float uTime; uniform float uOpacity; varying vec2 vPhase; varying float vSpeed;
      void main(){
        float head=fract(uTime*vSpeed+vPhase.y);
        float distanceBehind=mod(head-vPhase.x+1.0,1.0);
        float tail=(1.0-smoothstep(0.0,0.3,distanceBehind))*smoothstep(0.0,0.08,vPhase.x)*(1.0-smoothstep(0.9,1.0,vPhase.x));
        gl_FragColor=vec4(0.64,0.76,0.79,tail*uOpacity);
      }`,
  });
  const field = new LineSegments(geometry, material);
  field.name = 'atmospheric-wind';
  field.renderOrder = 3;
  field.visible = false;
  return field;
}
