import type { NoiseEvent } from '../data/providers/types';

export interface SignalCandidate { event: NoiseEvent; x: number; y: number }
export interface LabelRect { x: number; y: number; width: number; height: number }
export interface SignalLabel extends SignalCandidate { rect: LabelRect; side: 'left' | 'right' }

export function selectSignals(candidates: SignalCandidate[], rotation: number, count = 4) {
  const ordered = [...candidates].sort((a, b) => (Date.parse(b.event.publishedAt ?? '') || 0) - (Date.parse(a.event.publishedAt ?? '') || 0) || a.event.id.localeCompare(b.event.id));
  const news = ordered.filter(item => item.event.kind !== 'quake');
  const quakes = ordered.filter(item => item.event.kind === 'quake').sort((a, b) => (b.event.magnitude ?? 0) - (a.event.magnitude ?? 0));
  const chosen: SignalCandidate[] = [];
  const spread = (item: SignalCandidate) => chosen.every(other => Math.hypot(item.x - other.x, item.y - other.y) > 48);
  if (news.length) {
    const offset = rotation % news.length;
    const rotated = [...news.slice(offset), ...news.slice(0, offset)];
    for (const item of rotated) if (chosen.length < Math.min(count - (quakes.length ? 1 : 0), 3) && spread(item)) chosen.push(item);
  }
  if (chosen.length < count) {
    const quake = quakes.find(spread);
    if (quake) chosen.splice(Math.min(2, chosen.length), 0, quake);
  }
  return chosen;
}

export function overlaps(a: LabelRect, b: LabelRect, gap = 8) {
  return a.x < b.x + b.width + gap && a.x + a.width + gap > b.x && a.y < b.y + b.height + gap && a.y + a.height + gap > b.y;
}

export function layoutSignals(candidates: SignalCandidate[], view: { width: number; height: number; cx: number; cy: number; radius: number; mobile: boolean; focused: boolean }, obstacles: LabelRect[]): SignalLabel[] {
  const { width, height, cx, cy, radius, mobile, focused } = view;
  const labelWidth = mobile ? Math.min(200, width - 40) : width < 1150 ? 168 : width < 1350 ? 206 : 232;
  const labelHeight = focused ? 80 : 56;
  const margin = mobile ? 20 : 28;
  const minY = mobile ? 240 : 150;
  const maxY = mobile ? Math.min(height - 200, cy + radius + 180) : height - 166;
  const slots: LabelRect[] = [];
  const clampX = (x: number) => Math.max(margin, Math.min(width - margin - labelWidth, x));
  for (let y = minY; y + labelHeight <= maxY; y += 12) {
    for (const x of [cx - radius - labelWidth - 18, cx + radius + 18, cx - labelWidth * 1.5 - 12, cx + labelWidth / 2 + 12, cx - labelWidth / 2]) {
      const rect = { x: clampX(x), y, width: labelWidth, height: labelHeight };
      const dx = Math.max(rect.x - cx, 0, cx - rect.x - rect.width);
      const dy = Math.max(rect.y - cy, 0, cy - rect.y - rect.height);
      if (Math.hypot(dx, dy) < radius + 8 || obstacles.some(obstacle => overlaps(rect, obstacle, 6))) continue;
      slots.push(rect);
    }
  }
  const placed: SignalLabel[] = [];
  for (const candidate of candidates) {
    const available = slots.filter(rect => !placed.some(label => overlaps(rect, label.rect, 12)));
    available.sort((a, b) => {
      const score = (rect: LabelRect) => {
        const right = rect.x + rect.width / 2 > cx;
        const endX = right ? rect.x : rect.x + rect.width;
        const preferred = candidate.x >= cx;
        return Math.hypot(endX - candidate.x, rect.y + 20 - candidate.y) + (right === preferred ? 0 : 90);
      };
      return score(a) - score(b);
    });
    if (available[0]) placed.push({ ...candidate, rect: available[0], side: available[0].x + labelWidth / 2 > cx ? 'right' : 'left' });
  }
  return placed;
}
