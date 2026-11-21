export interface SoundscapeOptions {
  createContext?: () => AudioContext;
  /** Monotonic seconds, independent of the simulation clock. */
  now?: () => number;
  random?: () => number;
}

type PulseKind = 'news' | 'quake';
type Tail = { source: OscillatorNode; gain: GainNode };
type Ramp = { from: number; to: number; start: number; end: number };

const MASTER_GAIN = 0.025;
const MUTE_SECONDS = 0.08;

function browserContext(): AudioContext {
  const Constructor = globalThis.AudioContext;
  if (!Constructor) throw new Error('Web Audio is unavailable');
  return new Constructor();
}

export class Soundscape {
  private readonly createContext: () => AudioContext;
  private readonly now: () => number;
  private readonly random: () => number;
  private context: AudioContext | null = null;
  private master: GainNode | null = null;
  private filter: BiquadFilterNode | null = null;
  private readonly nodes = new Set<AudioNode>();
  private readonly sources = new Set<AudioScheduledSourceNode>();
  private readonly tails = new Set<Tail>();
  private ramp: Ramp = { from: 0, to: 0, start: 0, end: 0 };
  private damping = 0;
  private lastPulse = -Infinity;
  private active = false;
  private wanted = false;
  private disposed = false;
  private revision = 0;
  private enabling: Promise<boolean> | null = null;
  private suspending: Promise<void> | null = null;
  private disposal: Promise<void> | null = null;
  private mute: { timer: ReturnType<typeof setTimeout>; finish: () => void } | null = null;

  constructor(options: SoundscapeOptions = {}) {
    this.createContext = options.createContext ?? browserContext;
    this.now = options.now ?? (() => performance.now() / 1000);
    this.random = options.random ?? Math.random;
  }

  get enabled(): boolean { return this.active; }
  get initialized(): boolean { return this.context !== null; }

  setEnabled(enabled: boolean): Promise<boolean> {
    if (this.disposed) return Promise.resolve(false);
    if (!enabled) return this.disable();
    if (this.wanted && this.enabling) return this.enabling;
    if (this.active && this.context?.state === 'running') return Promise.resolve(true);

    this.wanted = true;
    const revision = ++this.revision;
    this.cancelMute();
    // enable() calls the factory and resume before its first await.
    this.enabling = this.enable(revision);
    return this.enabling;
  }

  setDamping(amount: number): void {
    if (this.disposed || Number.isNaN(amount)) return;
    this.damping = Math.max(0, Math.min(1, amount));
    if (this.damping === 1) {
      this.fadeMaster(0, 0);
      this.stopTails();
    } else if (this.active) {
      this.fadeMaster(this.level(), 0.18);
    }
  }

  pulse(kind: PulseKind): void {
    const context = this.context;
    if (!this.active || this.damping === 1 || !context || !this.filter || context.state !== 'running') return;
    const now = this.now();
    if (now - this.lastPulse < 4) return;

    let source: OscillatorNode | undefined;
    let gain: GainNode | undefined;
    try {
      source = this.ownSource(context.createOscillator());
      gain = this.own(context.createGain());
      const tail = { source, gain };
      const start = context.currentTime;
      const end = start + (kind === 'quake' ? 3.5 : 2.8);
      source.type = 'sine';
      source.frequency.setValueAtTime(kind === 'quake' ? 48 : 72, start);
      source.frequency.linearRampToValueAtTime(kind === 'quake' ? 39 : 60, end);
      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(kind === 'quake' ? 0.09 : 0.055, start + 0.35);
      gain.gain.exponentialRampToValueAtTime(0.0001, end - 0.1);
      gain.gain.linearRampToValueAtTime(0, end);
      source.connect(gain);
      gain.connect(this.filter);
      this.tails.add(tail);
      source.onended = () => this.releaseTail(tail);
      source.start();
      source.stop(end + 0.02);
      this.lastPulse = now;
    } catch {
      if (source && gain) this.releaseTail({ source, gain }, true);
      else if (source) this.releaseSource(source);
    }
  }

  dispose(): Promise<void> {
    if (this.disposal) return this.disposal;
    this.disposed = true;
    this.wanted = this.active = false;
    ++this.revision;
    this.enabling = null;
    this.cancelMute();
    this.fadeMaster(0, 0);
    this.releaseGraph();
    const context = this.context;
    this.context = null;
    this.suspending = null;
    this.disposal = this.close(context);
    return this.disposal;
  }

  private async enable(revision: number): Promise<boolean> {
    try {
      const context = this.context ?? (this.context = this.createContext());
      const suspension = this.suspending;
      await context.resume();
      if (!this.current(revision)) return this.staleResume(context);
      if (suspension) {
        await suspension;
        if (!this.current(revision)) return this.staleResume(context);
        await context.resume();
        if (!this.current(revision)) return this.staleResume(context);
      }
      if (context.state !== 'running') throw new Error('Audio did not resume');
      if (!this.master) this.buildGraph(context);
      this.active = true;
      this.fadeMaster(this.level(), this.damping === 1 ? 0 : 0.7);
    } catch {
      if (this.current(revision)) {
        this.wanted = this.active = false;
        this.releaseGraph();
        const context = this.context;
        this.context = null;
        this.suspending = null;
        await this.close(context);
      }
    } finally {
      if (this.revision === revision) this.enabling = null;
    }
    return this.enabled;
  }

  private disable(): Promise<boolean> {
    this.wanted = this.active = false;
    const revision = ++this.revision;
    this.enabling = null;
    this.cancelMute();
    const context = this.context;
    if (!context) return Promise.resolve(false);
    this.fadeMaster(0, MUTE_SECONDS);
    return new Promise(resolve => {
      const finish = () => resolve(this.enabled);
      const timer = setTimeout(() => {
        this.mute = null;
        if (!this.current(revision)) { finish(); return; }
        this.fadeMaster(0, 0);
        this.stopTails();
        void this.suspend(context).then(finish);
      }, MUTE_SECONDS * 1000);
      this.mute = { timer, finish };
    });
  }

  private current(revision: number): boolean {
    return !this.disposed && this.revision === revision;
  }

  private async staleResume(context: AudioContext): Promise<boolean> {
    if (this.context === context && !this.wanted && !this.disposed) {
      this.fadeMaster(0, 0);
      this.stopTails();
      await this.suspend(context);
    }
    return this.enabled;
  }

  private suspend(context: AudioContext): Promise<void> {
    if (this.suspending) return this.suspending;
    const task = (async () => {
      try { if (context.state !== 'closed') await context.suspend(); } catch { /* The output is already zero. */ }
    })();
    this.suspending = task;
    void task.then(() => { if (this.suspending === task) this.suspending = null; });
    return task;
  }

  private async close(context: AudioContext | null): Promise<void> {
    try { if (context && context.state !== 'closed') await context.close(); } catch { /* Nodes are already disconnected. */ }
  }

  private cancelMute(): void {
    if (!this.mute) return;
    clearTimeout(this.mute.timer);
    this.mute.finish();
    this.mute = null;
  }

  private level(): number {
    return MASTER_GAIN * (1 - this.damping) ** 2;
  }

  private fadeMaster(to: number, duration: number): void {
    if (!this.master || !this.context) return;
    const time = this.context.currentTime;
    const { from, to: previous, start, end } = this.ramp;
    const progress = end > start ? Math.max(0, Math.min(1, (time - start) / (end - start))) : 1;
    const held = from + (previous - from) * progress;
    const gain = this.master.gain;
    if (duration === 0) {
      // Suspended contexts may never process a current-time automation event.
      gain.cancelScheduledValues(0);
      gain.value = to;
      gain.setValueAtTime(to, time);
    } else {
      gain.cancelScheduledValues(time);
      gain.setValueAtTime(held, time);
      gain.linearRampToValueAtTime(to, time + duration);
    }
    this.ramp = { from: duration === 0 ? to : held, to, start: time, end: time + duration };
  }

  private buildGraph(context: AudioContext): void {
    const master = this.master = this.own(context.createGain());
    master.gain.value = 0;
    this.ramp = { from: 0, to: 0, start: 0, end: 0 };
    const filter = this.filter = this.own(context.createBiquadFilter());
    filter.type = 'lowpass';
    filter.frequency.value = 120;
    filter.Q.value = 0.4;
    filter.connect(master);
    master.connect(context.destination);

    for (const [frequency, volume] of [[42, 0.12], [63, 0.08]]) {
      const source = this.ownSource(context.createOscillator());
      const gain = this.own(context.createGain());
      source.type = 'sine';
      source.frequency.value = frequency;
      gain.gain.value = volume;
      source.connect(gain);
      gain.connect(filter);
      source.start();
    }
    const source = this.ownSource(context.createBufferSource());
    const gain = this.own(context.createGain());
    const buffer = context.createBuffer(1, Math.ceil(context.sampleRate * 2), context.sampleRate);
    const samples = buffer.getChannelData(0);
    let mean = 0;
    for (let i = 0; i < samples.length; i++) {
      samples[i] = this.random() * 2 - 1;
      mean += samples[i];
    }
    mean /= samples.length;
    for (let i = 0; i < samples.length; i++) samples[i] -= mean;
    source.buffer = buffer;
    source.loop = true;
    gain.gain.value = 0.12;
    source.connect(gain);
    gain.connect(filter);
    source.start();
  }

  private own<T extends AudioNode>(node: T): T {
    this.nodes.add(node);
    return node;
  }

  private ownSource<T extends AudioScheduledSourceNode>(source: T): T {
    this.sources.add(source);
    return this.own(source);
  }

  private releaseSource(source: AudioScheduledSourceNode): void {
    source.onended = null;
    try { source.stop(); } catch { /* It may not have started. */ }
    this.sources.delete(source);
    this.releaseNode(source);
  }

  private releaseNode(node: AudioNode): void {
    try { node.disconnect(); } catch { /* Already disconnected. */ }
    this.nodes.delete(node);
  }

  private releaseTail(tail: Tail, stop = false): void {
    tail.source.onended = null;
    if (stop) this.releaseSource(tail.source);
    else {
      this.sources.delete(tail.source);
      this.releaseNode(tail.source);
    }
    this.releaseNode(tail.gain);
    for (const entry of this.tails) if (entry.source === tail.source) this.tails.delete(entry);
  }

  private stopTails(): void {
    for (const tail of this.tails) this.releaseTail(tail, true);
  }

  private releaseGraph(): void {
    this.tails.clear();
    for (const source of this.sources) this.releaseSource(source);
    for (const node of this.nodes) this.releaseNode(node);
    this.master = this.filter = null;
  }
}
