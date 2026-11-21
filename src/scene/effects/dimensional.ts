import { BufferGeometry, Float32BufferAttribute, LineBasicMaterial, LineLoop, Mesh, PlaneGeometry, ShaderMaterial } from 'three';
import { LUNAR_ORBIT_RADII } from '../../astronomy/scale';

export function createLunarReference() {
  const vertices: number[] = [];
  const inclination = 23.44 * Math.PI / 180;
  for (let i = 0; i < 256; i++) {
    const angle = i / 256 * Math.PI * 2;
    vertices.push(Math.cos(angle) * LUNAR_ORBIT_RADII, Math.sin(angle) * Math.sin(inclination) * LUNAR_ORBIT_RADII, Math.sin(angle) * Math.cos(inclination) * LUNAR_ORBIT_RADII);
  }
  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3));
  const line = new LineLoop(geometry, new LineBasicMaterial({ color: '#6e7b84', transparent: true, opacity: 0, depthWrite: false }));
  line.name = 'lunar-orbit-reference';
  line.visible = false;
  return line;
}

export function createFoil() {
  const material = new ShaderMaterial({
    transparent: true, depthWrite: false,
    uniforms: { uAlpha: { value: 0 } },
    vertexShader: 'varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',
    fragmentShader: `varying vec2 vUv; uniform float uAlpha;
      void main(){float edge=step(0.46,max(abs(vUv.x-.5),abs(vUv.y-.5)));gl_FragColor=vec4(vec3(.67,.71,.73),uAlpha*(.13+edge*.3));
      #include <colorspace_fragment>
      }`,
  });
  const mesh = new Mesh(new PlaneGeometry(0.14, 0.085), material);
  mesh.name = 'encapsulated-foil';
  mesh.visible = false;
  mesh.renderOrder = 5;
  return mesh;
}
