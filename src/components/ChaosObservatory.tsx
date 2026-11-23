import { memo, useEffect, useMemo, useRef, useState } from 'react';
import type { NewsItem, NewsSnapshot } from '../data/providers/types';
import { isLocated, safeArticleUrl } from '../data/providers/news';
import { LorenzEngine, ThreeBodyEngine, deriveChaosParameters, evaluateCivilizationSignal, hashSeed } from '../simulation/chaos';
import type { ChaosModel, ChaosNewsSignal, DestinyDomain, Vec3 } from '../simulation/chaos';

interface Props {
  snapshot: NewsSnapshot | null;
  selectedEvent: NewsItem | null;
  hidden: boolean;
  onFocusOnEarth: (event: NewsItem) => void;
  onBackToEarth: () => void;
}

type FeedFilter = 'featured' | 'zh' | DestinyDomain;

interface LiveMetrics {
  separation: number;
  lyapunov: number;
  predictionHorizon: number;
  impulseRho: number;
  wingSwitches: number;
  era: '恒纪元' | '乱纪元';
  minDistance: number;
  chaosIndex: number;
  stableDuration: number;
  perturbationEps: number;
  restarts: number;
  activeTrigger: NewsItem | null;
}

const FEED_FILTERS: ReadonlyArray<{ id: FeedFilter; label: string }> = [
  { id: 'featured', label: '精选' },
  { id: 'zh', label: '仅中文' },
  { id: '地缘安全', label: '地缘' },
  { id: '大国秩序', label: '秩序' },
  { id: '经贸航运', label: '经贸' },
  { id: '科技跃迁', label: '科技' },
];

function project3D(p: Vec3, yaw: number, pitch: number, cx: number, cy: number, scale: number) {
  const x0 = p.x;
  const y0 = p.y;
  const z0 = p.z - 26;
  const cosY = Math.cos(yaw);
  const sinY = Math.sin(yaw);
  const x1 = x0 * cosY - y0 * sinY;
  const y1 = x0 * sinY + y0 * cosY;
  const cosP = Math.cos(pitch);
  const sinP = Math.sin(pitch);
  const y2 = y1 * cosP - z0 * sinP;
  const z2 = y1 * sinP + z0 * cosP;
  const perspective = 1 / (1 + y2 * 0.0085);
  return {
    x: cx + x1 * scale * perspective,
    y: cy - z2 * scale * perspective,
    depth: y2,
  };
}

export const ChaosObservatory = memo(function ChaosObservatory({ snapshot, selectedEvent, hidden, onFocusOnEarth, onBackToEarth }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scopeRef = useRef<HTMLCanvasElement>(null);
  const lorenzRef = useRef<LorenzEngine | null>(null);
  const threeBodyRef = useRef<ThreeBodyEngine | null>(null);
  const [model, setModel] = useState<ChaosModel>('lorenz');
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [filter, setFilter] = useState<FeedFilter>('featured');
  const [manualRho, setManualRho] = useState<number | null>(null);
  const [renderTick, setRenderTick] = useState(0);
  const [restartNotice, setRestartNotice] = useState(false);
  const viewAngle = useRef({ yaw: -0.78, pitch: 0.12, dragging: false, lastX: 0, lastY: 0 });
  const threeScaleRef = useRef(1.8);
  const lastInjectedId = useRef<string | null>(null);
  const injectCounter = useRef(0);

  const params = useMemo(() => deriveChaosParameters(snapshot), [snapshot]);
  const effectiveBaseRho = manualRho ?? params.rho;
  const paramsRef = useRef({ ...params, rho: effectiveBaseRho });
  paramsRef.current = { ...params, rho: effectiveBaseRho };

  const [metrics, setMetrics] = useState<LiveMetrics>({
    separation: 0.001,
    lyapunov: 0.88,
    predictionHorizon: 2.6,
    impulseRho: 0,
    wingSwitches: 0,
    era: '恒纪元',
    minDistance: 1.0,
    chaosIndex: 0.12,
    stableDuration: 0,
    perturbationEps: 0.04,
    restarts: 0,
    activeTrigger: null,
  });

  if (!lorenzRef.current) {
    const engine = new LorenzEngine();
    for (let i = 0; i < 620; i++) engine.step({ sigma: 10, rho: 28.0, beta: 2.667 }, 3, 0.0055);
    lorenzRef.current = engine;
  }
  if (!threeBodyRef.current) {
    const engine = new ThreeBodyEngine();
    for (let i = 0; i < 45; i++) engine.step(0.32, 2, 0.008);
    threeBodyRef.current = engine;
  }

  const visibleSignals = useMemo<ChaosNewsSignal[]>(() => {
    if (filter === 'featured') return params.highlights;
    if (filter === 'zh') return params.allSignals.filter((s) => s.isChinese).slice(0, 12);
    return params.allSignals.filter((s) => s.domain === filter).slice(0, 12);
  }, [filter, params.highlights, params.allSignals]);

  // Couple Earth selection directly into the chaos attractor as a butterfly perturbation.
  useEffect(() => {
    if (!selectedEvent || selectedEvent.id === lastInjectedId.current) return;
    lastInjectedId.current = selectedEvent.id;
    injectCounter.current++;
    const signal = evaluateCivilizationSignal(selectedEvent);
    lorenzRef.current?.injectPerturbation(selectedEvent, injectCounter.current);
    threeBodyRef.current?.reset(signal.impact, hashSeed(`${selectedEvent.id}:${injectCounter.current}`));
    setMetrics((prev) => ({
      ...prev,
      activeTrigger: selectedEvent,
      impulseRho: lorenzRef.current?.read().impulseRho ?? 0,
      perturbationEps: threeBodyRef.current?.read().perturbationEps ?? prev.perturbationEps,
    }));
    setRenderTick((t) => t + 1);
  }, [selectedEvent]);

  // Seed first highlight as initial attribution without wiping pre-warmed butterfly wings.
  useEffect(() => {
    if (!params.highlights.length || lastInjectedId.current) return;
    const first = params.highlights[0];
    lastInjectedId.current = first.item.id;
    lorenzRef.current?.recordMarker(first.item, first.domain);
    setMetrics((prev) => ({ ...prev, activeTrigger: first.item }));
  }, [params.highlights]);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => setInView(entries.some((entry) => entry.isIntersecting)),
      { threshold: 0.04 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [hidden]);

  const handleInject = (signal?: ChaosNewsSignal) => {
    injectCounter.current++;
    const pool = visibleSignals.length ? visibleSignals : params.highlights;
    const target = signal ?? pool[(injectCounter.current - 1) % Math.max(1, pool.length)] ?? null;
    if (target) lastInjectedId.current = target.item.id;
    if (paused) setPaused(false);

    if (model === 'lorenz') {
      lorenzRef.current?.injectPerturbation(target?.item ?? null, injectCounter.current);
      const state = lorenzRef.current?.read();
      if (state) {
        setMetrics((prev) => ({
          ...prev,
          separation: state.separation,
          lyapunov: state.lyapunov,
          predictionHorizon: state.predictionHorizon,
          impulseRho: state.impulseRho,
          wingSwitches: state.wingSwitches,
          activeTrigger: state.activeTrigger,
        }));
      }
    } else {
      const impact = target?.impact ?? params.meanImpact;
      const seed = hashSeed(`${target?.item.id ?? 'manual'}:${injectCounter.current}`);
      threeBodyRef.current?.reset(impact, seed);
      const state = threeBodyRef.current?.read();
      if (state) {
        setMetrics((prev) => ({
          ...prev,
          era: state.era,
          minDistance: state.minDistance,
          chaosIndex: state.chaosIndex,
          stableDuration: state.stableDuration,
          perturbationEps: state.perturbationEps,
          restarts: state.restarts,
          activeTrigger: target?.item ?? null,
        }));
      }
    }
    setRenderTick((t) => t + 1);
  };

  const handleClear = () => {
    if (model === 'lorenz') {
      lorenzRef.current?.reset(false);
    } else {
      injectCounter.current++;
      threeBodyRef.current?.reset(params.meanImpact, hashSeed(`reset:${injectCounter.current}`));
    }
    setRenderTick((t) => t + 1);
  };

  useEffect(() => {
    if (hidden || !inView) return;
    const canvas = canvasRef.current;
    const scope = scopeRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const sctx = scope?.getContext('2d') ?? null;
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        canvas.width = Math.round(rect.width * dpr);
        canvas.height = Math.round(rect.height * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
      if (scope && sctx) {
        const srect = scope.getBoundingClientRect();
        if (srect.width > 0 && srect.height > 0) {
          scope.width = Math.round(srect.width * dpr);
          scope.height = Math.round(srect.height * dpr);
          sctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }
      }
    };

    resize();
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(() => { resize(); drawOnce(false); }) : null;
    ro?.observe(canvas);
    if (scope) ro?.observe(scope);

    let raf = 0;
    let lastReport = 0;
    let restartTimer = 0;

    const drawScopeCurve = (history: readonly number[], minVal: number, maxVal: number, levels: readonly number[], stroke: string) => {
      if (!scope || !sctx) return;
      const w = scope.clientWidth;
      const h = scope.clientHeight;
      if (w <= 0 || h <= 0) return;
      sctx.clearRect(0, 0, w, h);

      sctx.strokeStyle = 'rgba(154,170,178,0.13)';
      sctx.lineWidth = 1;
      for (const level of levels) {
        const y = h - ((level - minVal) / (maxVal - minVal)) * (h - 10) - 5;
        sctx.beginPath();
        sctx.moveTo(0, y);
        sctx.lineTo(w, y);
        sctx.stroke();
      }

      if (history.length < 2) return;
      sctx.beginPath();
      for (let i = 0; i < history.length; i++) {
        const x = (i / Math.max(1, history.length - 1)) * w;
        const norm = (history[i] - minVal) / (maxVal - minVal);
        const y = Math.max(4, Math.min(h - 4, h - norm * (h - 10) - 5));
        if (i === 0) sctx.moveTo(x, y);
        else sctx.lineTo(x, y);
      }
      sctx.strokeStyle = stroke;
      sctx.lineWidth = 1.3;
      sctx.stroke();
    };

    const drawLorenz = (w: number, h: number, advance: boolean) => {
      const engine = lorenzRef.current!;
      const state = advance ? engine.step(paramsRef.current, 3, 0.0054) : engine.read();
      if (advance && !viewAngle.current.dragging) {
        viewAngle.current.yaw += 0.0012;
      }

      const cx = w * 0.5;
      const cy = h * 0.53;
      const scale = Math.min(w, h) * 0.0195;
      const { yaw, pitch } = viewAngle.current;

      const origin = project3D({ x: 0, y: 0, z: 26 }, yaw, pitch, cx, cy, scale);
      const axes: Array<[Vec3, string]> = [
        [{ x: 24, y: 0, z: 26 }, 'X'],
        [{ x: 0, y: 24, z: 26 }, 'Y'],
        [{ x: 0, y: 0, z: 50 }, 'Z'],
      ];
      ctx.strokeStyle = 'rgba(155,172,180,0.13)';
      ctx.fillStyle = 'rgba(150,165,172,0.55)';
      ctx.font = '10px Terminal, monospace';
      ctx.lineWidth = 1;
      for (const [end, label] of axes) {
        const pt = project3D(end, yaw, pitch, cx, cy, scale);
        ctx.beginPath();
        ctx.moveTo(origin.x, origin.y);
        ctx.lineTo(pt.x, pt.y);
        ctx.stroke();
        ctx.fillText(label, pt.x + 4, pt.y + 3);
      }

      const drawTrail = (points: readonly Vec3[], rgb: string, baseAlpha: number, width: number) => {
        const len = points.length;
        if (len < 2) return;
        const step = 4;
        for (let i = 0; i < len - 1; i += step) {
          const endIdx = Math.min(len - 1, i + step);
          const ratio = endIdx / len;
          ctx.beginPath();
          for (let j = i; j <= endIdx; j++) {
            const pt = project3D(points[j], yaw, pitch, cx, cy, scale);
            if (j === i) ctx.moveTo(pt.x, pt.y);
            else ctx.lineTo(pt.x, pt.y);
          }
          ctx.strokeStyle = `rgba(${rgb},${(ratio * ratio * baseAlpha).toFixed(3)})`;
          ctx.lineWidth = width;
          ctx.stroke();
        }
      };

      drawTrail(state.primary, '166,184,193', 0.84, 1.2);
      drawTrail(state.shadow, '204,178,128', 0.78, 1.1);

      const pHead = project3D(state.primary[state.primary.length - 1], yaw, pitch, cx, cy, scale);
      const sHead = project3D(state.shadow[state.shadow.length - 1], yaw, pitch, cx, cy, scale);

      if (state.separation > 1.2) {
        ctx.save();
        ctx.setLineDash([3, 4]);
        ctx.strokeStyle = 'rgba(206,180,132,0.38)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(pHead.x, pHead.y);
        ctx.lineTo(sHead.x, sHead.y);
        ctx.stroke();
        ctx.restore();
      }

      // Event perturbation pins with dark legible backing pill + 1.2s pulse ring on fresh injection
      ctx.font = '10px Terminal, "PingFang SC", sans-serif';
      for (const marker of state.markers) {
        const pt = project3D(marker.point, yaw, pitch, cx, cy, scale);
        const fade = Math.max(0.25, 1 - marker.age / 24);
        const severe = marker.entropy >= 0.74;
        if (marker.pulseAge < 1.25) {
          const t = marker.pulseAge / 1.25;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 4 + t * 24, 0, Math.PI * 2);
          ctx.strokeStyle = severe ? `rgba(196,118,104,${((1 - t) * 0.75).toFixed(3)})` : `rgba(210,186,138,${((1 - t) * 0.7).toFixed(3)})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 4, 0, Math.PI * 2);
        ctx.strokeStyle = severe ? `rgba(192,118,104,${(fade * 0.85).toFixed(3)})` : `rgba(204,182,138,${(fade * 0.75).toFixed(3)})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        const metricsText = ctx.measureText(marker.label);
        const lx = Math.min(w - metricsText.width - 14, pt.x + 9);
        const ly = pt.y + 3;
        ctx.fillStyle = `rgba(2,3,5,${(fade * 0.78).toFixed(3)})`;
        ctx.fillRect(lx - 4, ly - 10, metricsText.width + 8, 14);
        ctx.fillStyle = `rgba(192,202,206,${(fade * 0.88).toFixed(3)})`;
        ctx.fillText(marker.label, lx, ly);
      }

      ctx.beginPath();
      ctx.arc(pHead.x, pHead.y, 3.3, 0, Math.PI * 2);
      ctx.fillStyle = '#e0e8eb';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(sHead.x, sHead.y, 2.9, 0, Math.PI * 2);
      ctx.fillStyle = '#d9c190';
      ctx.fill();

      drawScopeCurve(state.divergenceHistory, -3.4, 1.8, [-3, -1, 1], '#c8b284');
      return state;
    };

    const drawThreeBody = (w: number, h: number, advance: boolean) => {
      const engine = threeBodyRef.current!;
      const state = advance ? engine.step(paramsRef.current.meanImpact, 3, 0.008) : engine.read();
      if (state.justRestarted) {
        setRestartNotice(true);
        window.clearTimeout(restartTimer);
        restartTimer = window.setTimeout(() => setRestartNotice(false), 1800);
      }
      const cx = w * 0.5;
      const cy = h * 0.5;
      // Smooth auto-fit camera radius so stars never escape out of the canvas
      const targetBound = Math.max(1.85, state.maxRadius * 1.25);
      threeScaleRef.current += (targetBound - threeScaleRef.current) * 0.08;
      const scale = (Math.min(w, h) * 0.44) / threeScaleRef.current;

      ctx.strokeStyle = 'rgba(155,172,180,0.09)';
      ctx.lineWidth = 1;
      for (const r of [1, 2]) {
        ctx.beginPath();
        ctx.arc(cx, cy, r * scale, 0, Math.PI * 2);
        ctx.stroke();
      }

      const pts = state.bodies.map((body) => ({ x: cx + body.pos.x * scale, y: cy - body.pos.y * scale }));
      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      ctx.lineTo(pts[1].x, pts[1].y);
      ctx.lineTo(pts[2].x, pts[2].y);
      ctx.closePath();
      ctx.strokeStyle = state.era === '乱纪元' ? 'rgba(202,158,118,0.24)' : 'rgba(158,178,186,0.16)';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.font = '10px Terminal, "PingFang SC", sans-serif';
      for (let b = 0; b < state.bodies.length; b++) {
        const body = state.bodies[b];
        const rgb = b === 0 ? '207,214,216' : b === 1 ? '204,180,132' : '132,168,184';
        const len = body.trail.length;
        for (let i = 0; i < len - 1; i += 3) {
          const end = Math.min(len - 1, i + 3);
          const ratio = end / len;
          ctx.beginPath();
          for (let j = i; j <= end; j++) {
            const x = cx + body.trail[j].x * scale;
            const y = cy - body.trail[j].y * scale;
            if (j === i) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.strokeStyle = `rgba(${rgb},${(ratio * ratio * 0.82).toFixed(3)})`;
          ctx.lineWidth = 1.3;
          ctx.stroke();
        }
        ctx.beginPath();
        ctx.arc(pts[b].x, pts[b].y, 4.4, 0, Math.PI * 2);
        ctx.fillStyle = body.color;
        ctx.fill();
        ctx.fillStyle = 'rgba(196,204,208,0.85)';
        ctx.fillText(body.name, pts[b].x + 9, pts[b].y + 3);
      }

      drawScopeCurve(state.chaosHistory, 0, 1, [0.34, 0.7], state.era === '乱纪元' ? '#c2926e' : '#8ea8b3');
      return state;
    };

    const drawOnce = (advance: boolean, now = performance.now()) => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (w <= 0 || h <= 0) return;
      ctx.clearRect(0, 0, w, h);
      if (model === 'lorenz') {
        const state = drawLorenz(w, h, advance);
        if (!advance || now - lastReport > 220) {
          lastReport = now;
          setMetrics((prev) => ({
            ...prev,
            separation: state.separation,
            lyapunov: state.lyapunov,
            predictionHorizon: state.predictionHorizon,
            impulseRho: state.impulseRho,
            wingSwitches: state.wingSwitches,
            activeTrigger: state.activeTrigger,
          }));
        }
      } else {
        const state = drawThreeBody(w, h, advance);
        if (!advance || now - lastReport > 220) {
          lastReport = now;
          setMetrics((prev) => ({
            ...prev,
            era: state.era,
            minDistance: state.minDistance,
            chaosIndex: state.chaosIndex,
            stableDuration: state.stableDuration,
            perturbationEps: state.perturbationEps,
            restarts: state.restarts,
          }));
        }
      }
    };

    if (paused && !viewAngle.current.dragging) {
      drawOnce(false);
      return () => {
        window.clearTimeout(restartTimer);
        ro?.disconnect();
      };
    }

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      drawOnce(!paused, now);
    };

    raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(restartTimer);
      ro?.disconnect();
    };
  }, [model, paused, inView, hidden, renderTick]);

  if (hidden) return null;

  const onPointerDown = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (model !== 'lorenz') return;
    event.currentTarget.setPointerCapture(event.pointerId);
    viewAngle.current.dragging = true;
    viewAngle.current.lastX = event.clientX;
    viewAngle.current.lastY = event.clientY;
    if (paused) setRenderTick((t) => t + 1);
  };
  const onPointerMove = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (!viewAngle.current.dragging) return;
    const dx = event.clientX - viewAngle.current.lastX;
    const dy = event.clientY - viewAngle.current.lastY;
    viewAngle.current.lastX = event.clientX;
    viewAngle.current.lastY = event.clientY;
    viewAngle.current.yaw += dx * 0.008;
    viewAngle.current.pitch = Math.max(-1.2, Math.min(1.2, viewAngle.current.pitch + dy * 0.008));
  };
  const onPointerUp = () => {
    if (!viewAngle.current.dragging) return;
    viewAngle.current.dragging = false;
    if (paused) setRenderTick((t) => t + 1);
  };

  const activeTriggerUrl = safeArticleUrl(metrics.activeTrigger?.url);
  const displayedRho = effectiveBaseRho + metrics.impulseRho;
  const displayedRegime =
    displayedRho >= 30.8 ? '强非线性分叉' :
    displayedRho >= 24.74 ? '双翼混沌跃迁' :
    '准稳态假性恒纪元';

  return (
    <section id="chaos-observatory" ref={sectionRef} className="chaos-section" aria-label="单壳文明混沌相空间观测" data-testid="chaos-section">
      <div className="chaos-bridge" aria-hidden="true"><i /></div>

      <header className="chaos-header">
        <div>
          <div className="eyebrow"><span className="section-number">04</span> 单壳文明 · 强耦合混沌相空间 / COUPLED CIVILIZATION CHAOS</div>
          <h2>全球真实新闻与文明混沌<span className="title-dot">.</span></h2>
          <p className="chaos-subtitle">
            两条起初仅差千分之一（0.1%）的平行世界线，被此刻真实的国际新闻轻轻一推，几秒后便会彻底分道扬镳——在 1.57% 薄壳之内，从未有过孤立的“局部新闻”。
          </p>
        </div>
        <div className="chaos-header-actions">
          <div className="chaos-tabs" role="tablist" aria-label="混沌模型切换">
            <button role="tab" aria-selected={model === 'lorenz'} data-testid="chaos-mode-lorenz" onClick={() => setModel('lorenz')}>蝴蝶效应 · 文明相空间</button>
            <button role="tab" aria-selected={model === 'three-body'} data-testid="chaos-mode-threebody" onClick={() => setModel('three-body')}>三体引力 · 恒乱纪元</button>
          </div>
          <button className="chaos-return" onClick={onBackToEarth}>↑ 返回地球观测</button>
        </div>
      </header>

      <div className="chaos-layout">
        <div className="chaos-stage">
          <div className="chaos-canvas-frame">
            <span className="chaos-corner tl" aria-hidden="true" />
            <span className="chaos-corner tr" aria-hidden="true" />
            <span className="chaos-corner bl" aria-hidden="true" />
            <span className="chaos-corner br" aria-hidden="true" />

            <div className="chaos-stage-meta">
              <span className="chaos-formula" title="真实四阶龙格-库塔（RK4）数值积分驱动">
                {model === 'lorenz'
                  ? `Lorenz RK4 · ρ = ${displayedRho.toFixed(2)}${metrics.impulseRho > 0.08 ? ` (+${metrics.impulseRho.toFixed(2)} 瞬态脉冲)` : ''}`
                  : `Three-Body RK4 · ${restartNotice ? '轨道逃逸 · 已重建初值' : `当前纪元：${metrics.era}`}`}
              </span>
              <span>{model === 'lorenz' ? '拖拽旋转 3D 相空间' : `最小星距 ${metrics.minDistance.toFixed(2)}`}</span>
            </div>

            <canvas
              ref={canvasRef}
              className={`chaos-canvas ${model === 'three-body' ? 'is-threebody' : ''}`}
              aria-label={model === 'lorenz' ? '文明混沌双轨吸引子画布' : '三体引力混沌轨道画布'}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
            />

            <div className="chaos-legend-bar">
              {model === 'lorenz' ? (
                <>
                  <span><i className="swatch-primary" />现实世界线（新闻驱动）</span>
                  <span><i className="swatch-shadow" />反事实世界线（偏离 0.1%）</span>
                </>
              ) : (
                <>
                  <span><i className="swatch-primary" />α 恒星</span>
                  <span><i className="swatch-shadow" />β 恒星</span>
                  <span><i className="swatch-gamma" />γ 恒星</span>
                </>
              )}
              {metrics.activeTrigger && (
                <span className="chaos-active-trigger" title={metrics.activeTrigger.summary}>
                  当前微扰：{metrics.activeTrigger.settlement !== '未定位' ? `${metrics.activeTrigger.settlement} · ` : ''}{metrics.activeTrigger.summary}
                  {activeTriggerUrl && <a href={activeTriggerUrl} target="_blank" rel="noopener noreferrer">原文 ↗</a>}
                </span>
              )}
            </div>
          </div>

          <div className="chaos-scope-bar">
            <div className="chaos-scope-head">
              <span>
                {model === 'lorenz'
                  ? `双轨分叉强度与线性预测视界（超越 T_λ 后终局预言失效）`
                  : `三体乱纪元混沌强度波形（高于虚线进入乱纪元）`}
              </span>
              <strong>
                {model === 'lorenz'
                  ? `偏离 ${metrics.separation.toFixed(2)} · 预测视界 T_λ ≈ ${metrics.predictionHorizon >= 27 ? '>25s' : `${metrics.predictionHorizon.toFixed(1)}s`}`
                  : `${metrics.era} · 混沌度 ${(metrics.chaosIndex * 100).toFixed(0)}%`}
              </strong>
            </div>
            <canvas ref={scopeRef} className="chaos-scope" aria-hidden="true" />
          </div>
        </div>

        <aside className="chaos-sidebar">
          <div className="chaos-panel">
            <div className="section-heading">
              <span className="section-number">A</span>
              {model === 'lorenz' ? '真实新闻实时驱动参数' : '三体引力实况遥测'}
              <span className="micro-tag">{manualRho !== null && model === 'lorenz' ? '手动实验' : params.mode === 'demo' ? '演示' : params.mode === 'cached' ? '缓存' : '实源'}</span>
            </div>

            {model === 'lorenz' ? (
              <>
                <div className="chaos-metrics-grid">
                  <div>
                    <span className="eyebrow">系统热压 ρ</span>
                    <strong data-testid="chaos-rho">{displayedRho.toFixed(2)}</strong>
                    <small>混沌阈值 24.74 · {displayedRegime}</small>
                  </div>
                  <div>
                    <span className="eyebrow">跨国耦合 σ</span>
                    <strong>{params.sigma.toFixed(2)}</strong>
                    <small>地缘/秩序新闻占比 {(params.geopoliticalShare * 100).toFixed(0)}%</small>
                  </div>
                  <div>
                    <span className="eyebrow">秩序缓冲 β</span>
                    <strong>{params.beta.toFixed(3)}</strong>
                    <small>高烈度冲突削弱缓冲 · 稳态 2.667</small>
                  </div>
                  <div>
                    <span className="eyebrow">双翼跃迁</span>
                    <strong>{metrics.wingSwitches} 次</strong>
                    <small>{params.humanNewsCount} 条真实国际新闻驱动</small>
                  </div>
                </div>

                <div className="chaos-slider-row">
                  <div className="chaos-slider-head">
                    <label htmlFor="chaos-rho-slider">相变实验滑块（拉过 24.74 观察稳态 → 混沌）</label>
                    {manualRho !== null && <button onClick={() => setManualRho(null)}>恢复实源锁定</button>}
                  </div>
                  <input
                    id="chaos-rho-slider"
                    type="range"
                    min="18"
                    max="36"
                    step="0.2"
                    value={effectiveBaseRho}
                    onChange={(event) => setManualRho(Number(event.target.value))}
                  />
                </div>
              </>
            ) : (
              <div className="chaos-metrics-grid">
                <div>
                  <span className="eyebrow">当前纪元</span>
                  <strong className={metrics.era === '乱纪元' ? 'era-text-chaotic' : ''}>{metrics.era}</strong>
                  <small>引力不对称度 {(metrics.chaosIndex * 100).toFixed(0)}%</small>
                </div>
                <div>
                  <span className="eyebrow">新闻初速微扰 ε</span>
                  <strong>{metrics.perturbationEps.toFixed(3)}</strong>
                  <small>由当前新闻冲击值映射注入</small>
                </div>
                <div>
                  <span className="eyebrow">最小恒星间距</span>
                  <strong>{metrics.minDistance.toFixed(2)}</strong>
                  <small>低于 0.48 触发近距强引力弹弓</small>
                </div>
                <div>
                  <span className="eyebrow">恒纪元累计 / 重启</span>
                  <strong>{metrics.stableDuration.toFixed(1)}s / {metrics.restarts}</strong>
                  <small>8 字周期解在微扰下失稳</small>
                </div>
              </div>
            )}

            <div className="chaos-controls">
              <button data-testid="chaos-perturb" onClick={() => handleInject()}>注入蝴蝶微扰 Δ</button>
              <button onClick={() => setPaused((value) => !value)}>{paused ? '继续' : '暂停'}</button>
              <button onClick={handleClear}>重置轨线</button>
            </div>
          </div>

          <div className="chaos-panel chaos-feed-panel">
            <div className="section-heading">
              <span className="section-number">B</span> 全球真实新闻微扰台
            </div>
            <p className="chaos-feed-note">
              实时提取地缘安全、秩序博弈、经贸航运与技术跃迁新闻（已剥离常规地壳微震与低熵会议通告）；点标题注入瞬态热压 Δρ，或直达原文与地球坐标。
            </p>
            <div className="chaos-filter-bar" role="tablist" aria-label="新闻领域筛选">
              {FEED_FILTERS.map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={filter === tab.id}
                  onClick={() => setFilter(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="chaos-event-list">
              {visibleSignals.map((signal) => {
                const articleUrl = safeArticleUrl(signal.item.url);
                return (
                  <div className={`chaos-event-row ${metrics.activeTrigger?.id === signal.item.id ? 'is-active' : ''}`} key={signal.item.id}>
                    <button className="chaos-event-trigger" onClick={() => handleInject(signal)} title="点击将这条新闻作为瞬态微扰注入混沌系统">
                      <span className="chaos-event-title">{signal.item.summary}</span>
                      <small>
                        <span>{signal.domain} · {signal.item.source}{signal.item.settlement !== '未定位' ? ` · ${signal.item.settlement}` : ''}</span>
                        <span className={signal.impact >= 0.74 ? 'anomaly-value' : ''}>冲击 {signal.impact.toFixed(2)}</span>
                      </small>
                    </button>
                    <div className="chaos-event-actions">
                      {isLocated(signal.item) && (
                        <button
                          className="chaos-event-locate"
                          title="返回地球聚焦该事件坐标"
                          onClick={() => {
                            handleInject(signal);
                            onFocusOnEarth(signal.item);
                          }}
                        >
                          地球 ↗
                        </button>
                      )}
                      {articleUrl && (
                        <a className="chaos-event-locate" href={articleUrl} target="_blank" rel="noopener noreferrer" title="在新标签页打开原始报道">
                          原文 ↗
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
              {visibleSignals.length === 0 && <p className="quiet-copy">该分类当前暂无匹配新闻，可切换「精选」查看全部。</p>}
            </div>
          </div>
        </aside>
      </div>

      <footer className="chaos-philosophy">
        <p>
          在星海尺度上，SOL–III 只是一粒随时可被归档的微尘；但在 100 公里的薄壳之内，没有任何一场战火、封锁或技术跃迁只属于“他者”。历史从未终结——它正被此刻的每一条真实信号，推向不可预测的下一翼。
        </p>
      </footer>
    </section>
  );
});
