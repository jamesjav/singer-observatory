export type TimeMode = 'paused' | 'live' | 'hour' | 'day';
export const TIME_MODES: { id: TimeMode; label: string; rate: number }[] = [
  { id: 'paused', label: '暂停', rate: 0 },
  { id: 'live', label: '实时', rate: 1 },
  { id: 'hour', label: '1秒 = 1小时', rate: 3600 },
  { id: 'day', label: '1秒 = 1天', rate: 86400 },
];

export class SimulationClock {
  mode: TimeMode = 'live';
  private utc: number;
  private monotonic: number;

  constructor(utc = Date.now(), monotonic = performance.now()) {
    this.utc = utc;
    this.monotonic = monotonic;
  }

  read(monotonic = performance.now(), wallTime = Date.now()) {
    if (this.mode === 'live') return wallTime;
    const rate = TIME_MODES.find((mode) => mode.id === this.mode)!.rate;
    return this.utc + (monotonic - this.monotonic) * rate;
  }

  setMode(mode: TimeMode, monotonic = performance.now(), wallTime = Date.now()) {
    this.utc = this.read(monotonic, wallTime);
    this.monotonic = monotonic;
    this.mode = mode;
  }
}
