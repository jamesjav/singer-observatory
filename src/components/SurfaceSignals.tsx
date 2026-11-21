import { useEffect, useId, useRef, useState } from 'react';
import type { RefObject } from 'react';
import type { Observatory } from '../scene/Observatory';
import type { NewsItem, NoiseEvent } from '../data/providers/types';
import { formatCoordinates } from '../astronomy/coordinates';
import { isLocated, safeArticleUrl } from '../data/providers/news';
import { layoutSignals, selectSignals } from './signalLabels';
import type { SignalLabel } from './signalLabels';

interface Props {
  engine: RefObject<Observatory | null>;
  events: NoiseEvent[];
  selected: NewsItem | null;
  hovered: NewsItem | null;
  paused: boolean;
  hidden: boolean;
  newsEnabled: boolean;
  quakesEnabled: boolean;
  onSelect: (event: NewsItem) => void;
}

export function SurfaceSignals({ engine, events, selected, hovered, paused, hidden, newsEnabled, quakesEnabled, onSelect }: Props) {
  const overlay = useRef<HTMLDivElement>(null);
  const maskId = useId();
  const [labels, setLabels] = useState<SignalLabel[]>([]);
  const [fading, setFading] = useState(false);
  const cycle = useRef({ elapsed: 0, rotation: 0 });
  const active = hovered ?? selected;
  useEffect(() => {
    let animation = 0;
    let last = performance.now();
    let lastDraw = 0;
    const draw = (now: number) => {
      animation = requestAnimationFrame(draw);
      const delta = Math.min(now - last, 250);
      last = now;
      if (!paused && !selected && !hovered && !hidden) cycle.current.elapsed += delta;
      if (cycle.current.elapsed >= 7000) { cycle.current.elapsed = 0; cycle.current.rotation += 3; }
      if (now - lastDraw < 80) return;
      lastDraw = now;
      setFading(!paused && !selected && !hovered && cycle.current.elapsed > 6600);
      const scene = engine.current;
      const root = overlay.current;
      if (!scene || !root || hidden) return;
      const box = root.getBoundingClientRect();
      const canvas = scene.renderer.domElement.getBoundingClientRect();
      const offsetX = canvas.left - box.left;
      const offsetY = canvas.top - box.top;
      const mobile = box.width <= 600;
      const distance = scene.camera.position.length();
      if (distance >= 31) { setLabels([]); return; }
      const radius = canvas.height / (2 * Math.tan(scene.camera.fov * Math.PI / 360) * Math.sqrt(distance * distance - 1));
      const candidates = (active ? isLocated(active) ? [active] : [] : events).filter(event => event.kind === 'quake' ? quakesEnabled : newsEnabled).flatMap(event => {
        const point = scene.project(event, 1.018);
        return point.visible && point.x > 0 && point.x < canvas.width && point.y > 0 && point.y < canvas.height ? [{ event, x: point.x + offsetX, y: point.y + offsetY }] : [];
      });
      const chosen = active ? candidates : selectSignals(candidates, cycle.current.rotation, mobile ? 2 : box.width < 1350 ? 3 : 4);
      const obstacles = Array.from(root.parentElement?.querySelectorAll<HTMLElement>('.target-panel,.telemetry-panel,.observation-log,.instrument-panel,.planet-caption,.narrative-dock,.field-meta,.time-footer,.cosmic-scale,.surface-layerbar,.weather-mobile,.source-details,.credits-panel,.foil-confirmation,.texture-warning,.audio-note') ?? []).filter(element => {
        const style = getComputedStyle(element);
        return style.display !== 'none' && Number(style.opacity) > 0.1;
      }).map(element => {
        const rect = element.getBoundingClientRect();
        return { x: rect.left - box.left, y: rect.top - box.top, width: rect.width, height: rect.height };
      });
      setLabels(layoutSignals(chosen, { width: box.width, height: box.height, cx: offsetX + canvas.width / 2, cy: offsetY + canvas.height / 2, radius, mobile, focused: Boolean(selected) }, obstacles));
    };
    animation = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animation);
  }, [engine, events, active, selected, hovered, paused, hidden, newsEnabled, quakesEnabled]);

  return <div ref={overlay} className={`surface-signals ${hidden || fading ? 'signals-hidden' : ''}`} aria-hidden={hidden} data-cycle={cycle.current.rotation}>
    <svg aria-hidden="true"><defs><mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%"><rect width="100%" height="100%" fill="white" />{labels.map(label => <rect key={label.event.id} x={label.rect.x - 4} y={label.rect.y - 3} width={label.rect.width + 8} height={label.rect.height + 6} fill="black" />)}</mask></defs>{labels.map(label => {
      const endX = label.side === 'right' ? label.rect.x : label.rect.x + label.rect.width;
      const endY = label.rect.y + 17;
      const elbowX = endX + (label.side === 'right' ? -18 : 18);
      return <g key={label.event.id} mask={`url(#${maskId})`} className={label.event.kind === 'quake' ? 'seismic-leader' : label.event.entropy > 0.75 ? 'anomaly-leader' : ''}><path d={`M ${label.x} ${label.y} L ${elbowX} ${endY} L ${endX} ${endY}`} /><circle cx={label.x} cy={label.y} r={selected?.id === label.event.id ? 4 : 2.5} /></g>;
    })}</svg>
    {labels.map(({ event, rect }) => <article key={event.id} data-signal-id={event.id} className={`surface-label ${event.kind === 'quake' ? 'seismic-label' : ''} ${selected?.id === event.id ? 'is-fixed' : ''}`} style={{ left: rect.x, top: rect.y, width: rect.width }}>
      <button onClick={() => onSelect(event)} title={event.summary}>
        <span className="signal-meta" title={`${event.source} · ${event.settlement} · ${formatCoordinates(event, 1)}`}><span>[{event.source.slice(0, 12)} · </span><span className="signal-place">{event.settlement}</span><span> · {formatCoordinates(event, 1).replace('  /  ', ' / ')}]</span></span>
        <span className="signal-headline">{event.summary}</span>
      </button>
      {selected?.id === event.id && <div className="signal-fixed-meta"><span>锁定 · {event.precision === 'seismic' ? 'USGS 震中' : '地名中心近似'}</span>{safeArticleUrl(event.url) && <a href={safeArticleUrl(event.url)!} target="_blank" rel="noopener noreferrer">原始信号 ↗</a>}</div>}
    </article>)}
  </div>;
}
