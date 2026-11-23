import type { NewsItem, NewsSnapshot } from '../data/providers/types';

export type ChaosModel = 'lorenz' | 'three-body';

export interface Vec3 {
  x: number;
  y: number;
  z: number;
}

export interface ChaosParameters {
  sigma: number;
  rho: number;
  beta: number;
  meanEntropy: number;
  conflictShare: number;
  naturalShare: number;
  severeCount: number;
  totalSignals: number;
  locatedCount: number;
  regimeLabel: string;
  mode: NewsSnapshot['mode'] | 'loading';
  highlights: NewsItem[];
}

export interface PerturbationMarker {
  point: Vec3;
  label: string;
  source: string;
  entropy: number;
  age: number;
}

export interface LorenzSnapshot {
  primary: readonly Vec3[];
  shadow: readonly Vec3[];
  divergenceHistory: readonly number[];
  markers: readonly PerturbationMarker[];
  separation: number;
  lyapunov: number;
  wingSwitches: number;
  elapsed: number;
  activeTrigger: NewsItem | null;
}

export interface BodyTrail {
  name: string;
  color: string;
  pos: Vec3;
  vel: Vec3;
  mass: number;
  trail: Vec3[];
}

export interface ThreeBodySnapshot {
  bodies: readonly BodyTrail[];
  minDistance: number;
  chaosIndex: number;
  era: '恒纪元' | '乱纪元';
  elapsed: number;
  restarts: number;
}

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

function hashSeed(input: string): number {
  let hash = 2166136261;
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return ((hash >>> 0) % 10000) / 10000;
}

/**
 * Deterministically maps the live news + seismic snapshot into Lorenz dynamical parameters.
 * Classic chaos onset for sigma=10, beta=8/3 is rho_c ≈ 24.74; standard butterfly is rho=28.
 */
export function deriveChaosParameters(snapshot: NewsSnapshot | null): ChaosParameters {
  const events = snapshot?.events ?? [];
  if (!events.length) {
    return {
      sigma: 10.0,
      rho: 27.6,
      beta: 2.667,
      meanEntropy: 0.28,
      conflictShare: 0.18,
      naturalShare: 0.16,
      severeCount: 0,
      totalSignals: 0,
      locatedCount: 0,
      regimeLabel: '等待外部频段',
      mode: snapshot?.mode ?? 'loading',
      highlights: [],
    };
  }

  let entropySum = 0;
  let conflictCount = 0;
  let naturalCount = 0;
  let severeCount = 0;
  let locatedCount = 0;

  for (const item of events) {
    const e = Number.isFinite(item.entropy) ? clamp(item.entropy, 0, 1) : 0.2;
    entropySum += e;
    if (item.tag === '局部摩擦' || item.tag === '秩序震荡') conflictCount++;
    if (item.kind === 'quake' || item.tag === '灾变扰动' || item.tag === '地壳微震') naturalCount++;
    if (e > 0.72) severeCount++;
    if (typeof item.lat === 'number' && typeof item.lon === 'number') locatedCount++;
  }

  const total = events.length;
  const meanEntropy = entropySum / total;
  const conflictShare = conflictCount / total;
  const naturalShare = naturalCount / total;
  const severeDensity = severeCount / total;

  // Map live global telemetry into physically meaningful Lorenz chaos ranges.
  const rho = Number(clamp(25.2 + meanEntropy * 11.5 + severeDensity * 18, 25.0, 35.5).toFixed(2));
  const sigma = Number(clamp(9.4 + conflictShare * 4.2, 9.2, 13.5).toFixed(2));
  const beta = Number(clamp(2.25 + naturalShare * 1.15, 2.15, 3.35).toFixed(3));

  const regimeLabel =
    rho >= 31.2 ? '强非线性分叉' :
    rho >= 27.8 ? '双翼混沌跃迁' :
    '临界边缘吸引';

  const ranked = [...events].sort((a, b) =>
    (b.entropy - a.entropy) ||
    ((typeof b.lat === 'number' ? 1 : 0) - (typeof a.lat === 'number' ? 1 : 0)) ||
    ((Date.parse(b.publishedAt ?? '') || 0) - (Date.parse(a.publishedAt ?? '') || 0)),
  );
  const highlights: NewsItem[] = [];
  const sourceCounts = new Map<string, number>();
  for (const candidate of ranked) {
    if (highlights.length >= 6) break;
    const used = sourceCounts.get(candidate.source) ?? 0;
    if (used >= 2) continue;
    sourceCounts.set(candidate.source, used + 1);
    highlights.push(candidate);
  }
  for (const candidate of ranked) {
    if (highlights.length >= 6) break;
    if (!highlights.includes(candidate)) highlights.push(candidate);
  }

  return {
    sigma,
    rho,
    beta,
    meanEntropy,
    conflictShare,
    naturalShare,
    severeCount,
    totalSignals: total,
    locatedCount,
    regimeLabel,
    mode: snapshot?.mode ?? 'live',
    highlights,
  };
}

function lorenzDerivative(p: Vec3, sigma: number, rho: number, beta: number): Vec3 {
  return {
    x: sigma * (p.y - p.x),
    y: p.x * (rho - p.z) - p.y,
    z: p.x * p.y - beta * p.z,
  };
}

function rk4Lorenz(p: Vec3, dt: number, sigma: number, rho: number, beta: number): Vec3 {
  const k1 = lorenzDerivative(p, sigma, rho, beta);
  const k2 = lorenzDerivative({ x: p.x + k1.x * dt * 0.5, y: p.y + k1.y * dt * 0.5, z: p.z + k1.z * dt * 0.5 }, sigma, rho, beta);
  const k3 = lorenzDerivative({ x: p.x + k2.x * dt * 0.5, y: p.y + k2.y * dt * 0.5, z: p.z + k2.z * dt * 0.5 }, sigma, rho, beta);
  const k4 = lorenzDerivative({ x: p.x + k3.x * dt, y: p.y + k3.y * dt, z: p.z + k3.z * dt }, sigma, rho, beta);
  const next = {
    x: p.x + (dt / 6) * (k1.x + 2 * k2.x + 2 * k3.x + k4.x),
    y: p.y + (dt / 6) * (k1.y + 2 * k2.y + 2 * k3.y + k4.y),
    z: p.z + (dt / 6) * (k1.z + 2 * k2.z + 2 * k3.z + k4.z),
  };
  if (!Number.isFinite(next.x) || !Number.isFinite(next.y) || !Number.isFinite(next.z) || Math.hypot(next.x, next.y, next.z) > 250) {
    return { x: 1.0, y: 1.0, z: 22.0 };
  }
  return next;
}

const distance3 = (a: Vec3, b: Vec3) => Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z);

export class LorenzEngine {
  private primary: Vec3[] = [];
  private shadow: Vec3[] = [];
  private divergenceHistory: number[] = [];
  private markers: PerturbationMarker[] = [];
  private p: Vec3 = { x: 0.9, y: 1.1, z: 23.0 };
  private s: Vec3 = { x: 0.901, y: 1.1, z: 23.0 };
  private lyapunovSum = 0;
  private lyapunovSamples = 0;
  private wingSwitches = 0;
  private lastSign = 1;
  private elapsed = 0;
  private activeTrigger: NewsItem | null = null;
  private readonly maxTrail = 1100;
  private readonly maxHistory = 180;
  private readonly initialEps = 1e-3;

  constructor() {
    this.reset(false);
  }

  reset(clearTrigger = true) {
    this.p = { x: 0.9, y: 1.1, z: 23.0 };
    this.s = { x: 0.9 + this.initialEps, y: 1.1, z: 23.0 };
    this.primary = [{ ...this.p }];
    this.shadow = [{ ...this.s }];
    this.divergenceHistory = [Math.log10(this.initialEps)];
    this.markers = [];
    this.lyapunovSum = 0;
    this.lyapunovSamples = 0;
    this.wingSwitches = 0;
    this.lastSign = 1;
    this.elapsed = 0;
    if (clearTrigger) this.activeTrigger = null;
  }

  recordMarker(item: NewsItem) {
    this.activeTrigger = item;
    this.markers.push({
      point: { ...this.p },
      label: item.settlement !== '未定位' ? `${item.settlement} · ${item.tag}` : item.tag,
      source: item.source,
      entropy: item.entropy,
      age: 0,
    });
    if (this.markers.length > 5) this.markers.shift();
  }

  injectPerturbation(item?: NewsItem | null) {
    const seed = item ? hashSeed(`${item.id}:${item.summary}`) : Math.random();
    const angle = seed * Math.PI * 2;
    const scale = this.initialEps * (1 + (item?.entropy ?? 0.35) * 1.8);
    // Reset shadow right onto primary + tiny deterministic butterfly perturbation.
    this.s = {
      x: this.p.x + Math.cos(angle) * scale,
      y: this.p.y + Math.sin(angle) * scale,
      z: this.p.z + (seed - 0.5) * scale,
    };
    this.shadow = [{ ...this.s }];
    this.divergenceHistory = [Math.log10(Math.max(1e-6, distance3(this.p, this.s)))];
    this.lyapunovSum = 0;
    this.lyapunovSamples = 0;
    this.elapsed = 0;
    if (item) this.recordMarker(item);
  }

  step(params: Pick<ChaosParameters, 'sigma' | 'rho' | 'beta'>, substeps = 3, dt = 0.0055): LorenzSnapshot {
    const { sigma, rho, beta } = params;
    for (let i = 0; i < substeps; i++) {
      const prevDist = Math.max(1e-8, distance3(this.p, this.s));
      this.p = rk4Lorenz(this.p, dt, sigma, rho, beta);
      this.s = rk4Lorenz(this.s, dt, sigma, rho, beta);
      const nextDist = Math.max(1e-8, distance3(this.p, this.s));

      // Accumulate finite-time exponential separation rate while trajectories are still separating.
      if (prevDist < 12 && nextDist < 22) {
        const localRate = Math.log(nextDist / prevDist) / dt;
        if (Number.isFinite(localRate)) {
          this.lyapunovSum += clamp(localRate, -4, 6);
          this.lyapunovSamples++;
        }
      }

      const sign = this.p.x >= 0 ? 1 : -1;
      if (sign !== this.lastSign) {
        this.wingSwitches++;
        this.lastSign = sign;
      }
      this.elapsed += dt;
    }

    this.primary.push({ ...this.p });
    this.shadow.push({ ...this.s });
    if (this.primary.length > this.maxTrail) this.primary.shift();
    if (this.shadow.length > this.maxTrail) this.shadow.shift();

    const separation = distance3(this.p, this.s);
    this.divergenceHistory.push(Math.log10(Math.max(1e-4, separation)));
    if (this.divergenceHistory.length > this.maxHistory) this.divergenceHistory.shift();

    for (const marker of this.markers) marker.age += substeps * dt;
    if (this.markers.length > 0 && this.markers[0].age > 24) this.markers.shift();

    return this.read();
  }

  read(): LorenzSnapshot {
    const separation = distance3(this.p, this.s);
    const lyapunov = this.lyapunovSamples > 8 ? this.lyapunovSum / this.lyapunovSamples : 0.88;
    return {
      primary: this.primary,
      shadow: this.shadow,
      divergenceHistory: this.divergenceHistory,
      markers: this.markers,
      separation,
      lyapunov: clamp(lyapunov, -1.5, 2.8),
      wingSwitches: this.wingSwitches,
      elapsed: this.elapsed,
      activeTrigger: this.activeTrigger,
    };
  }
}

export class ThreeBodyEngine {
  private bodies: BodyTrail[] = [];
  private elapsed = 0;
  private restarts = 0;
  private readonly maxTrail = 320;
  private readonly softeningSq = 0.065 * 0.065;

  constructor() {
    this.reset(0.28);
  }

  /**
   * Starts near the famous Moore-Chenciner Figure-8 periodic solution and applies a tiny
   * news-entropy perturbation so a brief Stable Era (恒纪元) organically breaks into a Chaotic Era (乱纪元).
   */
  reset(entropyPerturbation = 0.28, seed = 0.42) {
    const eps = 0.015 + clamp(entropyPerturbation, 0, 1) * 0.09;
    const vx = 0.347111;
    const vy = 0.532728;
    const angle = (seed - 0.5) * 0.35;
    this.bodies = [
      {
        name: 'α 恒星', color: '#cfd6d8', mass: 1.0,
        pos: { x: -0.97000436, y: 0.24308753, z: 0 },
        vel: { x: vx + eps * Math.cos(angle), y: vy + eps * Math.sin(angle), z: 0 },
        trail: [],
      },
      {
        name: 'β 恒星', color: '#c4ae82', mass: 1.0,
        pos: { x: 0.97000436, y: -0.24308753, z: 0 },
        vel: { x: vx, y: vy, z: 0 },
        trail: [],
      },
      {
        name: 'γ 恒星', color: '#7ea1b0', mass: 1.0,
        pos: { x: 0, y: 0, z: 0 },
        vel: { x: -2 * vx - eps * Math.cos(angle), y: -2 * vy - eps * Math.sin(angle), z: 0 },
        trail: [],
      },
    ];
    for (const body of this.bodies) body.trail.push({ ...body.pos });
    this.elapsed = 0;
  }

  private accelerations(positions: readonly Vec3[]): Vec3[] {
    const acc: Vec3[] = positions.map(() => ({ x: 0, y: 0, z: 0 }));
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        const dx = positions[j].x - positions[i].x;
        const dy = positions[j].y - positions[i].y;
        const dz = positions[j].z - positions[i].z;
        const r2 = dx * dx + dy * dy + dz * dz + this.softeningSq;
        const invR3 = 1 / (r2 * Math.sqrt(r2));
        const mi = this.bodies[i].mass;
        const mj = this.bodies[j].mass;
        acc[i].x += dx * invR3 * mj;
        acc[i].y += dy * invR3 * mj;
        acc[i].z += dz * invR3 * mj;
        acc[j].x -= dx * invR3 * mi;
        acc[j].y -= dy * invR3 * mi;
        acc[j].z -= dz * invR3 * mi;
      }
    }
    return acc;
  }

  step(entropyPerturbation = 0.28, substeps = 3, dt = 0.008): ThreeBodySnapshot {
    for (let s = 0; s < substeps; s++) {
      const p0 = this.bodies.map((b) => b.pos);
      const v0 = this.bodies.map((b) => b.vel);
      const a1 = this.accelerations(p0);

      const p1 = p0.map((p, i) => ({ x: p.x + v0[i].x * dt * 0.5, y: p.y + v0[i].y * dt * 0.5, z: p.z + v0[i].z * dt * 0.5 }));
      const v1 = v0.map((v, i) => ({ x: v.x + a1[i].x * dt * 0.5, y: v.y + a1[i].y * dt * 0.5, z: v.z + a1[i].z * dt * 0.5 }));
      const a2 = this.accelerations(p1);

      const p2 = p0.map((p, i) => ({ x: p.x + v1[i].x * dt * 0.5, y: p.y + v1[i].y * dt * 0.5, z: p.z + v1[i].z * dt * 0.5 }));
      const v2 = v0.map((v, i) => ({ x: v.x + a2[i].x * dt * 0.5, y: v.y + a2[i].y * dt * 0.5, z: v.z + a2[i].z * dt * 0.5 }));
      const a3 = this.accelerations(p2);

      const p3 = p0.map((p, i) => ({ x: p.x + v2[i].x * dt, y: p.y + v2[i].y * dt, z: p.z + v2[i].z * dt }));
      const v3 = v0.map((v, i) => ({ x: v.x + a3[i].x * dt, y: v.y + a3[i].y * dt, z: v.z + a3[i].z * dt }));
      const a4 = this.accelerations(p3);

      let escaped = false;
      for (let i = 0; i < this.bodies.length; i++) {
        const nx = p0[i].x + (dt / 6) * (v0[i].x + 2 * v1[i].x + 2 * v2[i].x + v3[i].x);
        const ny = p0[i].y + (dt / 6) * (v0[i].y + 2 * v1[i].y + 2 * v2[i].y + v3[i].y);
        const nvx = v0[i].x + (dt / 6) * (a1[i].x + 2 * a2[i].x + 2 * a3[i].x + a4[i].x);
        const nvy = v0[i].y + (dt / 6) * (a1[i].y + 2 * a2[i].y + 2 * a3[i].y + a4[i].y);
        if (!Number.isFinite(nx) || !Number.isFinite(ny) || Math.hypot(nx, ny) > 5.8) {
          escaped = true;
          break;
        }
        this.bodies[i].pos = { x: nx, y: ny, z: 0 };
        this.bodies[i].vel = { x: nvx, y: nvy, z: 0 };
      }
      if (escaped) {
        this.restarts++;
        this.reset(entropyPerturbation, ((this.restarts * 0.37) % 1));
        break;
      }
      this.elapsed += dt;
    }

    for (const body of this.bodies) {
      body.trail.push({ ...body.pos });
      if (body.trail.length > this.maxTrail) body.trail.shift();
    }
    return this.read();
  }

  read(): ThreeBodySnapshot {
    const d01 = distance3(this.bodies[0].pos, this.bodies[1].pos);
    const d12 = distance3(this.bodies[1].pos, this.bodies[2].pos);
    const d20 = distance3(this.bodies[2].pos, this.bodies[0].pos);
    const minDistance = Math.min(d01, d12, d20);
    const maxDistance = Math.max(d01, d12, d20);
    const asymmetry = maxDistance / Math.max(0.15, minDistance);
    const chaosIndex = clamp((asymmetry - 1.4) / 4.2, 0, 1);
    const era: '恒纪元' | '乱纪元' = chaosIndex > 0.34 || minDistance < 0.48 ? '乱纪元' : '恒纪元';
    return {
      bodies: this.bodies,
      minDistance,
      chaosIndex,
      era,
      elapsed: this.elapsed,
      restarts: this.restarts,
    };
  }
}
