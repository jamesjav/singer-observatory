export type DimensionalPhase = 'idle' | 'delivery' | 'folding' | 'archived' | 'restoring';
export interface DimensionalFrame { phase: DimensionalPhase; progress: number; fold: number; foil: number }
const smooth = (t: number) => { const x = Math.max(0, Math.min(1, t)); return x * x * (3 - 2 * x); };
export const DIMENSIONAL_DURATION = 11000;
export const RESTORE_DURATION = 2400;

export class DimensionalSequence {
  private started: number | null = null;
  private restoration: { started: number; from: DimensionalFrame } | null = null;

  start(now: number) {
    if (this.sample(now).phase !== 'idle') return false;
    this.started = now;
    return true;
  }

  restore(now: number) {
    const frame = this.sample(now);
    if (frame.phase === 'idle' || frame.phase === 'restoring') return false;
    this.restoration = { started: now, from: frame };
    return true;
  }

  sample(now: number): DimensionalFrame {
    if (this.restoration) {
      const { started, from } = this.restoration;
      const t = smooth((now - started) / RESTORE_DURATION);
      if (t >= 1) { this.started = null; this.restoration = null; }
      else return { phase: 'restoring', progress: from.progress * (1 - t), fold: from.fold * (1 - t), foil: from.foil * (1 - t) };
    }
    if (this.started === null) return { phase: 'idle', progress: 0, fold: 0, foil: 0 };
    const elapsed = Math.max(0, now - this.started);
    return {
      phase: elapsed >= DIMENSIONAL_DURATION ? 'archived' : elapsed < 2500 ? 'delivery' : 'folding',
      progress: Math.min(1, elapsed / DIMENSIONAL_DURATION),
      fold: smooth((elapsed - 2500) / 7500),
      foil: smooth(elapsed / 1000) * (1 - smooth((elapsed - 2400) / 1600)),
    };
  }
}
