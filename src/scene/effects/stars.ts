import { BufferGeometry, Float32BufferAttribute, Points, ShaderMaterial } from 'three';

export function createStars() {
  let seed = 72941;
  const random = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
  const positions: number[] = [];
  const sizes: number[] = [];
  const intensities: number[] = [];
  for (let i = 0; i < 2100; i++) {
    const z = random() * 2 - 1;
    const angle = random() * Math.PI * 2;
    const r = Math.sqrt(1 - z * z);
    positions.push(r * Math.cos(angle) * 1600, z * 1600, r * Math.sin(angle) * 1600);
    sizes.push(0.55 + random() * 1.25);
    intensities.push(0.07 + Math.pow(random(), 4) * 0.33);
  }
  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
  geometry.setAttribute('aSize', new Float32BufferAttribute(sizes, 1));
  geometry.setAttribute('aIntensity', new Float32BufferAttribute(intensities, 1));
  const material = new ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: { uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) } },
    vertexShader: `attribute float aSize; attribute float aIntensity; uniform float uPixelRatio; varying float vIntensity;
      void main() { vIntensity = aIntensity; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_PointSize = aSize * uPixelRatio; }`,
    fragmentShader: `varying float vIntensity; void main() { float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.08, d) * vIntensity; gl_FragColor = vec4(0.61, 0.66, 0.72, a); }`,
  });
  const stars = new Points(geometry, material);
  stars.name = 'deep-stars';
  stars.renderOrder = -2;
  return stars;
}
