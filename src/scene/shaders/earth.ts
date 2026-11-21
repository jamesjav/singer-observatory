export const sphereVertex = /* glsl */ `
varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
uniform float uFold;
uniform vec3 uFoldRight;
uniform vec3 uFoldUp;
uniform vec3 uFoldNormal;
void main() {
  vUv = uv;
  vec3 original = (modelMatrix * vec4(position, 1.0)).xyz;
  float unfold = smoothstep(0.0, 1.0, clamp(uFold * 1.32 - uv.x * 0.32, 0.0, 1.0));
  float layer = (length(position) - 1.0) * 0.3;
  vec3 chart = uFoldRight * ((uv.x - 0.5) * 3.6) + uFoldUp * ((uv.y - 0.5) * 1.8) + uFoldNormal * layer;
  vec3 curl = uFoldNormal * sin(uv.x * 6.2831853 + uFold * 3.1415927) * sin(unfold * 3.1415927) * 0.32;
  vPosition = mix(original, chart, unfold) + curl;
  vNormal = normalize(mix(normalize(mat3(modelMatrix) * normal), uFoldNormal, min(unfold, 0.99999)));
  gl_Position = projectionMatrix * viewMatrix * vec4(vPosition, 1.0);
}
`;

export const earthFragment = /* glsl */ `
precision highp float;
uniform sampler2D uDay;
uniform sampler2D uNight;
uniform sampler2D uNormal;
uniform sampler2D uSpecular;
uniform sampler2D uClouds;
uniform vec3 uSun;
uniform float uCloudOffset;
uniform float uCloudsEnabled;
uniform float uFold;
varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
const float PI = 3.14159265359;
vec2 sphereUv(vec3 p) {
  p = normalize(p);
  return vec2(atan(-p.z, p.x) / (2.0 * PI) + 0.5, asin(clamp(p.y, -1.0, 1.0)) / PI + 0.5);
}
void main() {
  vec3 N = normalize(vNormal);
  vec3 V = normalize(cameraPosition - vPosition);
  vec3 L = normalize(uSun);
  float incidence = dot(N, L);
  float daylight = smoothstep(-0.00465, 0.00465, incidence);
  vec3 tangent = normalize(vec3(N.z, 0.00001, -N.x));
  vec3 bitangent = normalize(cross(N, tangent));
  vec3 mapNormal = texture2D(uNormal, vUv).xyz * 2.0 - 1.0;
  mapNormal.xy *= 0.3;
  vec3 detailNormal = normalize(mat3(tangent, bitangent, N) * mapNormal);
  vec3 albedo = texture2D(uDay, vUv).rgb;
  float ocean = texture2D(uSpecular, vUv).r;
  albedo = mix(vec3(dot(albedo, vec3(0.2126, 0.7152, 0.0722))), albedo, 0.62);
  albedo *= mix(1.0, 0.68, ocean);
  float diffuse = max(dot(detailNormal, L), 0.0);
  float cloudHeight = 1.0018;
  float rayLength = -incidence + sqrt(incidence * incidence + cloudHeight * cloudHeight - 1.0);
  vec2 shadowUv = sphereUv(N + L * rayLength) + vec2(uCloudOffset, 0.0);
  float cloudShadow = smoothstep(0.14, 0.86, texture2D(uClouds, shadowUv).r) * uCloudsEnabled;
  float shadow = 1.0 - cloudShadow * 0.32 * smoothstep(0.0, 0.06, incidence);
  vec3 surface = albedo * (0.018 + diffuse * 1.65) * daylight * shadow;
  vec3 halfDirection = normalize(L + V);
  float fresnel = 0.025 + 0.975 * pow(1.0 - max(dot(V, detailNormal), 0.0), 5.0);
  float specular = pow(max(dot(detailNormal, halfDirection), 0.0), 90.0);
  surface += vec3(0.62, 0.69, 0.72) * specular * fresnel * ocean * daylight * shadow * 0.9;
  vec3 lights = texture2D(uNight, vUv).rgb;
  lights *= smoothstep(0.006, 0.06, dot(lights, vec3(0.2126, 0.7152, 0.0722)));
  float night = 1.0 - smoothstep(-0.13, 0.025, incidence);
  float cloudCoverage = smoothstep(0.14, 0.86, texture2D(uClouds, vUv + vec2(uCloudOffset, 0.0)).r);
  surface += lights * vec3(0.95, 0.72, 0.44) * 0.36 * night * (1.0 - cloudCoverage * uCloudsEnabled * 0.65);
  float limb = pow(1.0 - max(dot(N, V), 0.0), 5.0);
  surface += vec3(0.035, 0.095, 0.16) * limb * smoothstep(-0.08, 0.3, incidence) * 0.16;
  float elevation = dot(texture2D(uDay, vUv).rgb, vec3(0.2126, 0.7152, 0.0722));
  float relief = elevation * 38.0 + texture2D(uNormal, vUv).r * 2.0;
  float contour = 1.0 - smoothstep(0.018, 0.085, abs(fract(relief) - 0.5));
  vec2 gridCell = abs(fract(vUv * vec2(24.0, 12.0)) - 0.5);
  float grid = 1.0 - smoothstep(0.003, 0.017, min(gridCell.x, gridCell.y));
  float land = 1.0 - smoothstep(0.18, 0.65, ocean);
  float ink = 0.006 + land * (0.035 + smoothstep(0.13, 0.42, elevation) * 0.19) + contour * land * 0.36 + grid * 0.035;
  vec3 silver = vec3(0.72, 0.78, 0.82) * ink;
  surface = mix(surface, silver, smoothstep(0.05, 0.9, uFold));
  gl_FragColor = vec4(surface, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;

export const cloudFragment = /* glsl */ `
precision highp float;
uniform sampler2D uClouds;
uniform vec3 uSun;
uniform float uCloudOffset;
uniform float uFold;
varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
void main() {
  vec3 N = normalize(vNormal);
  float incidence = dot(N, normalize(uSun));
  float density = smoothstep(0.1, 0.92, texture2D(uClouds, vUv + vec2(uCloudOffset, 0.0)).r);
  float day = smoothstep(-0.008, 0.012, incidence);
  float dusk = exp(-abs(incidence) * 38.0);
  vec3 color = vec3(0.71, 0.75, 0.78) * (0.026 + max(incidence, 0.0) * 1.4) * day;
  color += vec3(0.14, 0.075, 0.035) * dusk * 0.15;
  color = mix(color, vec3(0.25, 0.29, 0.32), uFold);
  gl_FragColor = vec4(color, density * 0.83 * (1.0 - uFold * 0.97));
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;

export const atmosphereFragment = /* glsl */ `
precision highp float;
uniform vec3 uSun;
uniform float uFold;
varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
void main() {
  vec3 N = normalize(vNormal);
  vec3 V = normalize(cameraPosition - vPosition);
  float incidence = dot(N, normalize(uSun));
  float rim = pow(1.0 - max(dot(N, V), 0.0), 5.5);
  float day = smoothstep(-0.12, 0.28, incidence);
  float dusk = exp(-abs(incidence) * 20.0);
  vec3 scatter = mix(vec3(0.09, 0.23, 0.42), vec3(0.26, 0.38, 0.49), rim);
  scatter = mix(scatter, vec3(0.3, 0.19, 0.12), dusk * 0.18);
  gl_FragColor = vec4(scatter, rim * (day * 0.39 + dusk * 0.055) * (1.0 - uFold));
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
