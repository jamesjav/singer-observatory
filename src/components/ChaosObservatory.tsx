import { useEffect, useMemo, useRef, useState } from 'react';
import type { NewsItem, NewsSnapshot } from '../data/providers/types';
import { isLocated } from '../data/providers/news';
import { LorenzEngine, ThreeBodyEngine, deriveChaosParameters, evaluateCivilizationSignal } from '../simulation/chaos';
import type { ChaosModel, ChaosNewsSignal, Vec3 } from '../simulation/chaos';

interface Props {
  snapshot: NewsSnapshot | null;
  selectedEvent: NewsItem | null;
  hidden: boolean;
  onFocusOnEarth: (event: NewsItem) => void;
  onBackToEarth: () => void;
}

interface LiveMetrics {
  separation: number;
  lyapunov: number;
  wingSwitches: number;
  era: '恒纪元' | '乱纪元';
  minDistance: number;
  chaosIndex: number;
  activeTrigger: NewsItem | null;
}

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

export function ChaosObservatory({ snapshot, selectedEvent, hidden, onFocusOnEarth, onBackToEarth }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scopeRef = useRef<HTMLCanvasElement>(null);
  const lorenzRef = useRef<LorenzEngine | null>(null);
  const threeBodyRef = useRef<ThreeBodyEngine | null>(null);
  const [model, setModel] = useState<ChaosModel>('lorenz');
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const viewAngle = useRef({ yaw: -0.78, pitch: 0.12, dragging: false, lastX: 0, lastY: 0 });
  const lastInjectedId = useRef<string | null>(null);

  const params = useMemo(() => deriveChaosParameters(snapshot), [snapshot]);
  const paramsRef = useRef(params);
  paramsRef.current = params;

  const [metrics, setMetrics] = useState<LiveMetrics>({
    separation: 0.001,
    lyapunov: 0.88,
    wingSwitches: 0,
    era: '恒纪元',
    minDistance: 1.0,
    chaosIndex: 0.12,
    activeTrigger: null,
  });

  if (!lorenzRef.current) {
    const engine = new LorenzEngine();
    for (let i = 0; i < 620; i++) engine.step({ sigma: 10, rho: 28.0, beta: 2.667 }, 3, 0.0055);
    lorenzRef.current = engine;
  }
  if (!threeBodyRef.current) {
    const engine = new ThreeBodyEngine();
    for (let i = 0; i < 45; i++) engine.step(0.28, 2, 0.008);
    threeBodyRef.current = engine;
  }

  // Couple Earth selection directly into the chaos attractor as a butterfly perturbation.
  useEffect(() => {
    if (!selectedEvent || selectedEvent.id === lastInjectedId.current) return;
    lastInjectedId.current = selectedEvent.id;
    const signal = evaluateCivilizationSignal(selectedEvent);
    lorenzRef.current?.injectPerturbation(selectedEvent);
    threeBodyRef.current?.reset(signal.impact, (selectedEvent.id.charCodeAt(0) % 100) / 100);
    setMetrics((prev) => ({ ...prev, activeTrigger: selectedEvent }));
  }, [selectedEvent]);

  // Seed first highlight as initial attribution without clearing pre-warmed butterfly wings.
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
      { threshold: 0.05 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [hidden]);

  const handleInject = (signal?: ChaosNewsSignal) => {
    const target = signal ?? params.highlights[0] ?? null;
    if (model === 'lorenz') {
      lorenzRef.current?.injectPerturbation(target?.item ?? null);
      const state = lorenzRef.current?.read();
      if (state) {
        setMetrics((prev) => ({
          ...prev,
          separation: state.separation,
          lyapunov: state.lyapunov,
          wingSwitches: state.wingSwitches,
          activeTrigger: state.activeTrigger,
        }));
      }
    } else {
      const impact = target?.impact ?? params.meanImpact;
      const seed = target ? ((target.item.id.charCodeAt(0) + target.item.summary.length) % 97) / 97 : Math.random();
      threeBodyRef.current?.reset(impact, seed);
      const state = threeBodyRef.current?.read();
      if (state) {
        setMetrics((prev) => ({
          ...prev,
          era: state.era,
          minDistance: state.minDistance,
          chaosIndex: state.chaosIndex,
          activeTrigger: target?.item ?? null,
        }));
      }
    }
  };

  const handleClear = () => {
    if (model === 'lorenz') {
      lorenzRef.current?.reset(false);
    } else {
      threeBodyRef.current?.reset(params.meanImpact, 0.31);
    }
  };

  useEffect(() => {
    if (hidden) return;
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
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(resize) : null;
    ro?.observe(canvas);
    if (scope) ro?.observe(scope);

    let raf = 0;
    let lastReport = 0;

    const drawScope = (history: readonly number[]) => {
      if (!scope || !sctx) return;
      const w = scope.clientWidth;
      const h = scope.clientHeight;
      if (w <= 0 || h <= 0) return;
      sctx.clearRect(0, 0, w, h);

      // Subtle reference horizontal lines for log10(delta) = -3, -1, +1
      sctx.strokeStyle = 'rgba(154,170,178,0.12)';
      sctx.lineWidth = 1;
      for (const level of [-3, -1, 1]) {
        const y = h - ((level + 3.4) / 5.2) * (h - 10) - 5;
        sctx.beginPath();
        sctx.moveTo(0, y);
        sctx.lineTo(w, y);
        sctx.stroke();
      }

      if (history.length < 2) return;
      sctx.beginPath();
      for (let i = 0; i < history.length; i++) {
        const x = (i / Math.max(1, history.length - 1)) * w;
        const norm = (history[i] + 3.4) / 5.2;
        const y = Math.max(4, Math.min(h - 4, h - norm * (h - 10) - 5));
        if (i === 0) sctx.moveTo(x, y);
        else sctx.lineTo(x, y);
      }
      sctx.strokeStyle = '#bda87d';
      sctx.lineWidth = 1.2;
      sctx.stroke();
    };

    const drawLorenz = (w: number, h: number) => {
      const engine = lorenzRef.current!;
      const state = paused || !inView ? engine.read() : engine.step(paramsRef.current, 3, 0.0054);
      if (!paused && inView && !viewAngle.current.dragging) {
        viewAngle.current.yaw += 0.0014;
      }

      const cx = w * 0.5;
      const cy = h * 0.53;
      const scale = Math.min(w, h) * 0.0195;
      const { yaw, pitch } = viewAngle.current;

      // Faint phase-space axes
      const origin = project3D({ x: 0, y: 0, z: 26 }, yaw, pitch, cx, cy, scale);
      const axes: Array<[Vec3, string]> = [
        [{ x: 24, y: 0, z: 26 }, 'X'],
        [{ x: 0, y: 24, z: 26 }, 'Y'],
        [{ x: 0, y: 0, z: 50 }, 'Z'],
      ];
      ctx.strokeStyle = 'rgba(155,172,180,0.12)';
      ctx.fillStyle = 'rgba(130,145,152,0.45)';
      ctx.font = '9px Terminal, monospace';
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

      drawTrail(state.primary, '166,184,193', 0.82, 1.15);
      drawTrail(state.shadow, '196,171,126', 0.72, 1.05);

      const pHead = project3D(state.primary[state.primary.length - 1], yaw, pitch, cx, cy, scale);
      const sHead = project3D(state.shadow[state.shadow.length - 1], yaw, pitch, cx, cy, scale);

      // Divergence vector tether between twin orbits
      if (state.separation > 1.5) {
        ctx.save();
        ctx.setLineDash([3, 4]);
        ctx.strokeStyle = 'rgba(198,174,128,0.34)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(pHead.x, pHead.y);
        ctx.lineTo(sHead.x, sHead.y);
        ctx.stroke();
        ctx.restore();
      }

      // News perturbation event pins inside phase space
      for (const marker of state.markers) {
        const pt = project3D(marker.point, yaw, pitch, cx, cy, scale);
        const fade = Math.max(0.18, 1 - marker.age / 24);
        const severe = marker.entropy > 0.72;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 4.5, 0, Math.PI * 2);
        ctx.strokeStyle = severe ? `rgba(182,110,96,${fade * 0.75})` : `rgba(196,174,132,${fade * 0.6})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.fillStyle = `rgba(168,178,182,${fade * 0.65})`;
        ctx.font = '9px Terminal, "PingFang SC", monospace';
        ctx.fillText(marker.label, pt.x + 8, pt.y + 3);
      }

      // Live heads
      ctx.beginPath();
      ctx.arc(pHead.x, pHead.y, 3.2, 0, Math.PI * 2);
      ctx.fillStyle = '#dce4e7';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(sHead.x, sHead.y, 2.8, 0, Math.PI * 2);
      ctx.fillStyle = '#d4bc8c';
      ctx.fill();

      drawScope(state.divergenceHistory);
      return state;
    };

    const drawThreeBody = (w: number, h: number) => {
      const engine = threeBodyRef.current!;
      const state = paused || !inView ? engine.read() : engine.step(paramsRef.current.meanImpact, 3, 0.008);
      const cx = w * 0.5;
      const cy = h * 0.5;
      const scale = Math.min(w, h) * 0.21;

      // Subtle reference concentric rings
      ctx.strokeStyle = 'rgba(155,172,180,0.08)';
      ctx.lineWidth = 1;
      for (const r of [1, 2]) {
        ctx.beginPath();
        ctx.arc(cx, cy, r * scale, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Gravitational triangle between the 3 suns
      const pts = state.bodies.map((body) => ({ x: cx + body.pos.x * scale, y: cy - body.pos.y * scale }));
      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      ctx.lineTo(pts[1].x, pts[1].y);
      ctx.lineTo(pts[2].x, pts[2].y);
      ctx.closePath();
      ctx.strokeStyle = state.era === '乱纪元' ? 'rgba(196,154,116,0.2)' : 'rgba(158,178,186,0.14)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Trails and bodies
      for (let b = 0; b < state.bodies.length; b++) {
        const body = state.bodies[b];
        const rgb = b === 0 ? '207,214,216' : b === 1 ? '196,174,130' : '126,161,176';
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
          ctx.strokeStyle = `rgba(${rgb},${(ratio * ratio * 0.78).toFixed(3)})`;
          ctx.lineWidth = 1.25;
          ctx.stroke();
        }
        ctx.beginPath();
        ctx.arc(pts[b].x, pts[b].y, 4.2, 0, Math.PI * 2);
        ctx.fillStyle = body.color;
        ctx.fill();
        ctx.fillStyle = 'rgba(176,186,190,0.72)';
        ctx.font = '9px Terminal, "PingFang SC", monospace';
        ctx.fillText(body.name, pts[b].x + 8, pts[b].y + 3);
      }

      if (scope && sctx) {
        const sw = scope.clientWidth;
        const sh = scope.clientHeight;
        sctx.clearRect(0, 0, sw, sh);
        sctx.fillStyle = 'rgba(155,172,180,0.08)';
        sctx.fillRect(0, sh * 0.5 - 3, sw, 6);
        sctx.fillStyle = state.era === '乱纪元' ? '#b88f6c' : '#8ea6b0';
        sctx.fillRect(0, sh * 0.5 - 3, sw * Math.max(0.05, state.chaosIndex), 6);
      }
      return state;
    };

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (w <= 0 || h <= 0) return;

      ctx.clearRect(0, 0, w, h);
      if (model === 'lorenz') {
        const state = drawLorenz(w, h);
        if (now - lastReport > 220) {
          lastReport = now;
          setMetrics((prev) => ({
            ...prev,
            separation: state.separation,
            lyapunov: state.lyapunov,
            wingSwitches: state.wingSwitches,
            activeTrigger: state.activeTrigger,
          }));
        }
      } else {
        const state = drawThreeBody(w, h);
        if (now - lastReport > 220) {
          lastReport = now;
          setMetrics((prev) => ({
            ...prev,
            era: state.era,
            minDistance: state.minDistance,
            chaosIndex: state.chaosIndex,
          }));
        }
      }
    };

    raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
      ro?.disconnect();
    };
  }, [model, paused, inView, hidden]);

  if (hidden) return null;

  const onPointerDown = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (model !== 'lorenz') return;
    event.currentTarget.setPointerCapture(event.pointerId);
    viewAngle.current.dragging = true;
    viewAngle.current.lastX = event.clientX;
    viewAngle.current.lastY = event.clientY;
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
  const onPointerUp = () => { viewAngle.current.dragging = false; };

  return (
    <section id="chaos-observatory" ref={sectionRef} className="chaos-section" aria-label="混沌系统相空间观测" data-testid="chaos-section">
      <header className="chaos-header">
        <div>
          <div className="eyebrow"><span className="section-number">04</span> 人类命运共同体 · 混沌相空间 / SHARED DESTINY CHAOS</div>
          <h2>全球真实新闻与文明混沌<span className="title-dot">.</span></h2>
          <p className="chaos-subtitle">
            由全球实时政治、冲突、外交、经贸与科技新闻直接耦合驱动——在高度互联的人类命运共同体里，任意一处局势的微小扰动（Δ = 10⁻³）都会在非线性相空间里扇动蝴蝶翅膀，引发指数级分叉。
          </p>
        </div>
        <div className="chaos-header-actions">
          <div className="chaos-tabs" role="tablist" aria-label="混沌模型切换">
            <button role="tab" aria-selected={model === 'lorenz'} data-testid="chaos-mode-lorenz" onClick={() => setModel('lorenz')}>文明混沌相空间</button>
            <button role="tab" aria-selected={model === 'three-body'} data-testid="chaos-mode-threebody" onClick={() => setModel('three-body')}>三体引力混沌</button>
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
              <span>
                {model === 'lorenz'
                  ? `dx/dt = σ(y−x) · dy/dt = x(ρ−z)−y · dz/dt = xy−βz`
                  : `F = G·mᵢmⱼ·r / (|r|² + ε²)^(3/2) · 数值 RK4 积分`}
              </span>
              <span>{model === 'lorenz' ? '拖拽旋转相空间' : `当前纪元 · ${metrics.era}`}</span>
            </div>

            <canvas
              ref={canvasRef}
              className="chaos-canvas"
              aria-label={model === 'lorenz' ? '洛伦兹双轨混沌吸引子相空间画布' : '三体引力混沌轨道画布'}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
            />

            <div className="chaos-legend-bar">
              {model === 'lorenz' ? (
                <>
                  <span><i className="swatch-primary" />主轨（实时新闻参数驱动）</span>
                  <span><i className="swatch-shadow" />影轨（初值偏离 Δ₀ = 10⁻³）</span>
                  {metrics.activeTrigger && (
                    <span className="chaos-active-trigger" title={metrics.activeTrigger.summary}>
                      当前微扰：{metrics.activeTrigger.settlement !== '未定位' ? `${metrics.activeTrigger.settlement} · ` : ''}{metrics.activeTrigger.summary}
                    </span>
                  )}
                </>
              ) : (
                <>
                  <span><i className="swatch-primary" />α 恒星</span>
                  <span><i className="swatch-shadow" />β 恒星</span>
                  <span><i className="swatch-gamma" />γ 恒星</span>
                  <span className={metrics.era === '乱纪元' ? 'era-chaotic' : 'era-stable'}>
                    轨道判定：{metrics.era}（最小星距 {metrics.minDistance.toFixed(2)}）
                  </span>
                </>
              )}
            </div>
          </div>

          <div className="chaos-scope-bar">
            <div className="chaos-scope-head">
              <span>{model === 'lorenz' ? '双轨指数分叉示波器 · log₁₀ ||Δr(t)||' : '三体轨道不对称度 · 乱纪元强度'}</span>
              <strong>
                {model === 'lorenz'
                  ? `||Δr|| = ${metrics.separation.toFixed(3)} · λ ≈ ${metrics.lyapunov >= 0 ? '+' : ''}${metrics.lyapunov.toFixed(2)}`
                  : `混沌度 ${(metrics.chaosIndex * 100).toFixed(0)}%`}
              </strong>
            </div>
            <canvas ref={scopeRef} className="chaos-scope" aria-hidden="true" />
          </div>
        </div>

        <aside className="chaos-sidebar">
          <div className="chaos-panel">
            <div className="section-heading">
              <span className="section-number">A</span> 真实新闻 API 实时耦合参数
              <span className="micro-tag">{params.mode === 'demo' ? '演示' : params.mode === 'cached' ? '缓存' : '实源'}</span>
            </div>

            <div className="chaos-metrics-grid">
              <div>
                <span className="eyebrow">文明扰动度 ρ</span>
                <strong data-testid="chaos-rho">{params.rho.toFixed(2)}</strong>
                <small>混沌阈值 24.74 · {params.regimeLabel}</small>
              </div>
              <div>
                <span className="eyebrow">地缘耦合度 σ</span>
                <strong>{params.sigma.toFixed(2)}</strong>
                <small>地缘/秩序新闻占比 {(params.geopoliticalShare * 100).toFixed(0)}%</small>
              </div>
              <div>
                <span className="eyebrow">经贸与科技 β</span>
                <strong>{params.beta.toFixed(3)}</strong>
                <small>经贸/科技新闻占比 {(params.economyTechShare * 100).toFixed(0)}%</small>
              </div>
              <div>
                <span className="eyebrow">{model === 'lorenz' ? '双翼跃迁' : '当前纪元'}</span>
                <strong>{model === 'lorenz' ? `${metrics.wingSwitches} 次` : metrics.era}</strong>
                <small>{params.humanNewsCount} 条真实国际新闻驱动</small>
              </div>
            </div>

            <div className="chaos-controls">
              <button data-testid="chaos-perturb" onClick={() => handleInject()}>注入蝴蝶微扰 Δ</button>
              <button onClick={() => setPaused((value) => !value)}>{paused ? '继续演进' : '冻结切片'}</button>
              <button onClick={handleClear}>重置轨线</button>
            </div>
          </div>

          <div className="chaos-panel chaos-feed-panel">
            <div className="section-heading">
              <span className="section-number">B</span> 影响人类命运共同体的实时新闻
            </div>
            <p className="chaos-feed-note">
              按地缘安全、大国秩序、经贸航运与科技跃迁实时筛选（已过滤常规气候峰会空谈与微震）；点击任意一条注入混沌微扰，或飞回地球查看事发地。
            </p>
            <div className="chaos-event-list">
              {params.highlights.map((signal) => (
                <div className={`chaos-event-row ${metrics.activeTrigger?.id === signal.item.id ? 'is-active' : ''}`} key={signal.item.id}>
                  <button className="chaos-event-trigger" onClick={() => handleInject(signal)} title="点击将这条真实新闻注入混沌系统">
                    <span className="chaos-event-title">{signal.item.summary}</span>
                    <small>
                      <span>{signal.domain} · {signal.item.source}{signal.item.settlement !== '未定位' ? ` · ${signal.item.settlement}` : ''}</span>
                      <span className={signal.impact >= 0.74 ? 'anomaly-value' : ''}>冲击 {signal.impact.toFixed(2)}</span>
                    </small>
                  </button>
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
                </div>
              ))}
              {params.highlights.length === 0 && <p className="quiet-copy">外部频段接入后自动载入全球重大新闻。</p>}
            </div>
          </div>
        </aside>
      </div>

      <footer className="chaos-philosophy">
        <p>
          在高度互联的人类命运共同体里，早已不存在孤立的“局部新闻”。黑格尔与福山曾设想历史会走向线性终局，但在真实世界的非线性相空间里，一场航运遇袭、一次选举博弈、一轮贸易震荡或一项技术跃迁，都在实时改写全人类共同的轨道。
        </p>
      </footer>
    </section>
  );
}
