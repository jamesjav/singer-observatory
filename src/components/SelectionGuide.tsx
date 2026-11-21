import { useEffect, useId, useRef } from 'react';
import type { RefObject } from 'react';
import type { Coordinates } from '../astronomy/coordinates';
import type { Observatory } from '../scene/Observatory';

export function SelectionGuide({ engine, picked, silent }: { engine: RefObject<Observatory | null>; picked: Coordinates | null; silent: boolean }) {
  const path = useRef<SVGPathElement>(null);
  const maskCuts = useRef<SVGPathElement>(null);
  const maskId = useId();
  const circle = useRef<SVGCircleElement>(null);
  const svg = useRef<SVGSVGElement>(null);
  useEffect(() => {
    if (!picked || silent) return;
    let animation = 0;
    const update = () => {
      animation = requestAnimationFrame(update);
      const observatory = engine.current;
      if (!observatory || !svg.current || !path.current || !circle.current) return;
      const projected = observatory.project(picked);
      const root = svg.current.getBoundingClientRect();
      const canvas = observatory.renderer.domElement.getBoundingClientRect();
      const mobile = window.innerWidth <= 600;
      const target = document.querySelector(mobile ? '.weather-mobile' : '.instrument-panel .weather-slot');
      if (!target) return;
      const rect = target.getBoundingClientRect();
      const x = projected.x + canvas.left - root.left;
      const y = projected.y + canvas.top - root.top;
      const visible = projected.visible && x > 0 && x < root.width && y > 0 && y < root.height;
      svg.current.style.opacity = visible ? '1' : '0';
      const endX = mobile ? rect.left + rect.width / 2 - root.left : rect.left - root.left - 8;
      const endY = rect.top - root.top + (mobile ? -5 : 8);
      path.current.setAttribute('d', mobile ? `M ${x} ${y} L ${x} ${endY - 9} L ${endX} ${endY}` : `M ${x} ${y} L ${endX - 18} ${y} L ${endX} ${endY}`);
      circle.current.setAttribute('cx', String(x)); circle.current.setAttribute('cy', String(y));
      const gaps = Array.from(document.querySelectorAll<HTMLElement>('.surface-label,.planet-caption,.surface-layerbar,.target-panel,.telemetry-panel,.observation-log,.cosmic-scale')).filter(element => getComputedStyle(element).display !== 'none').map(element => {
        const bounds = element.getBoundingClientRect();
        return `M ${bounds.left - root.left - 4} ${bounds.top - root.top - 4} h ${bounds.width + 8} v ${bounds.height + 8} h ${-bounds.width - 8} Z`;
      }).join(' ');
      maskCuts.current?.setAttribute('d', gaps);
    };
    update();
    return () => cancelAnimationFrame(animation);
  }, [engine, picked, silent]);
  if (!picked || silent) return null;
  return <svg ref={svg} className="selection-guide" aria-hidden="true"><path ref={path} mask={`url(#${maskId})`} /><circle ref={circle} r="2.5" /><defs><mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%"><rect width="100%" height="100%" fill="white" /><path ref={maskCuts} style={{ fill: 'black', stroke: 'none' }} /></mask></defs></svg>;
}
