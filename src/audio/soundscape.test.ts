import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Soundscape } from './soundscape';
import type { SoundscapeOptions } from './soundscape';

type Automation = { kind: 'set' | 'linear' | 'exponential'; value: number; time: number };

class MockParam {
  value = 0;
  events: Automation[] = [];
  cancelScheduledValues = vi.fn((time: number) => {
    this.events = this.events.filter(event => event.time < time);
    return this;
  });
  setValueAtTime = vi.fn((value: number, time: number) => this.add('set', value, time));
  linearRampToValueAtTime = vi.fn((value: number, time: number) => this.add('linear', value, time));
  exponentialRampToValueAtTime = vi.fn((value: number, time: number) => this.add('exponential', value, time));

  private add(kind: Automation['kind'], value: number, time: number): this {
    this.events.push({ kind, value, time });
    return this;
  }

  at(time: number): number {
    let previous = { value: this.value, time: 0 };
    for (const event of this.events) {
      if (event.time > time) {
        if (event.kind === 'set') return previous.value;
        const fraction = (time - previous.time) / (event.time - previous.time);
        return event.kind === 'exponential'
          ? previous.value * (event.value / previous.value) ** fraction
          : previous.value + (event.value - previous.value) * fraction;
      }
      previous = event;
    }
    return previous.value;
  }
}

class MockNode {
  outputs = new Set<MockNode>();
  connect = vi.fn((node: MockNode) => { this.outputs.add(node); return node; });
  disconnect = vi.fn(() => this.outputs.clear());
}

class MockGain extends MockNode { gain = new MockParam(); }
class MockFilter extends MockNode {
  type = '';
  frequency = new MockParam();
  Q = new MockParam();
}
class MockSource extends MockNode {
  onended: (() => void) | null = null;
  start = vi.fn();
  stop = vi.fn();
  finish(): void { this.onended?.(); }
}
class MockOscillator extends MockSource {
  type = '';
  frequency = new MockParam();
}
class MockBufferSource extends MockSource {
  buffer: { getChannelData: (channel: number) => Float32Array } | null = null;
  loop = false;
}

class MockContext {
  state: AudioContextState = 'suspended';
  sampleRate = 8000;
  destination = new MockNode();
  gains: MockGain[] = [];
  filters: MockFilter[] = [];
  oscillators: MockOscillator[] = [];
  buffers: MockBufferSource[] = [];
  get currentTime(): number { return Date.now() / 1000; }
  get master(): MockParam { return this.gains[0].gain; }
  get nodes(): MockNode[] { return [...this.gains, ...this.filters, ...this.oscillators, ...this.buffers]; }
  get sources(): MockSource[] { return [...this.oscillators, ...this.buffers]; }
  resume = vi.fn(async () => { this.state = 'running'; });
  suspend = vi.fn(async () => { this.state = 'suspended'; });
  close = vi.fn(async () => { this.state = 'closed'; });
  createGain = vi.fn(() => { const node = new MockGain(); this.gains.push(node); return node; });
  createBiquadFilter = vi.fn(() => { const node = new MockFilter(); this.filters.push(node); return node; });
  createOscillator = vi.fn(() => { const node = new MockOscillator(); this.oscillators.push(node); return node; });
  createBufferSource = vi.fn(() => { const node = new MockBufferSource(); this.buffers.push(node); return node; });
  createBuffer = vi.fn((_channels: number, length: number, _sampleRate: number) => {
    const data = new Float32Array(length);
    return { getChannelData: () => data };
  });
}

function deferred() {
  let resolve!: () => void;
  let reject!: (reason: Error) => void;
  const promise = new Promise<void>((yes, no) => { resolve = yes; reject = no; });
  return { promise, resolve, reject };
}

const instances: Soundscape[] = [];
function fixture(options: SoundscapeOptions = {}, context = new MockContext()) {
  const createContext = vi.fn(() => context as unknown as AudioContext);
  let seed = 17;
  const sound = new Soundscape({
    createContext,
    now: () => Date.now() / 1000,
    random: () => ((seed = (seed * 16807) % 2147483647) / 2147483647),
    ...options,
  });
  instances.push(sound);
  return { sound, context, createContext };
}

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(0);
});
afterEach(async () => {
  await Promise.all(instances.splice(0).map(sound => sound.dispose()));
  vi.useRealTimers();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe('Soundscape', () => {
  it('is absolutely silent by default and inert calls never create a context', async () => {
    const { sound, createContext } = fixture();
    expect(sound.enabled).toBe(false);
    expect(sound.initialized).toBe(false);
    sound.setDamping(1);
    sound.setDamping(0);
    sound.pulse('news');
    sound.pulse('quake');
    expect(await sound.setEnabled(false)).toBe(false);
    await sound.dispose();
    expect(await sound.setEnabled(true)).toBe(false);
    expect(createContext).not.toHaveBeenCalled();
    expect(vi.getTimerCount()).toBe(0);
  });

  it('does not even look up the browser API until explicit enable, and handles its absence', async () => {
    const original = Object.getOwnPropertyDescriptor(globalThis, 'AudioContext');
    const lookup = vi.fn(() => undefined);
    Object.defineProperty(globalThis, 'AudioContext', { configurable: true, get: lookup });
    try {
      vi.resetModules();
      const { Soundscape: FreshSoundscape } = await import('./soundscape');
      const sound = new FreshSoundscape();
      instances.push(sound);
      sound.setDamping(0.5);
      sound.pulse('news');
      await sound.setEnabled(false);
      expect(lookup).not.toHaveBeenCalled();
      expect(await sound.setEnabled(true)).toBe(false);
      expect(lookup).toHaveBeenCalledOnce();
      expect(sound.initialized).toBe(false);
    } finally {
      if (original) Object.defineProperty(globalThis, 'AudioContext', original);
      else Reflect.deleteProperty(globalThis, 'AudioContext');
    }
  });

  it('creates and resumes synchronously in the gesture, then builds a restrained filtered graph', async () => {
    const { sound, context, createContext } = fixture();
    const enabling = sound.setEnabled(true);
    expect(createContext).toHaveBeenCalledOnce();
    expect(context.resume).toHaveBeenCalledOnce();
    expect(sound.initialized).toBe(true);
    expect(sound.enabled).toBe(false);
    expect(context.sources).toHaveLength(0);
    expect(await enabling).toBe(true);
    expect(context.oscillators.map(source => [source.type, source.frequency.value])).toEqual([
      ['sine', 42], ['sine', 63],
    ]);
    expect(context.buffers[0].loop).toBe(true);
    const samples = context.buffers[0].buffer!.getChannelData(0);
    expect(samples.length).toBe(context.sampleRate * 2);
    expect(Math.abs(samples.reduce((sum, value) => sum + value, 0) / samples.length)).toBeLessThan(0.00001);
    expect(context.filters[0].type).toBe('lowpass');
    expect(context.filters[0].frequency.value).toBe(120);
    expect(context.filters[0].outputs.has(context.gains[0])).toBe(true);
    expect(context.gains[0].outputs.has(context.destination)).toBe(true);
    expect(context.nodes.filter(node => node.outputs.has(context.destination))).toEqual([context.gains[0]]);
    expect(context.master.at(0)).toBe(0);
    expect(context.master.at(1)).toBe(0.025);
    expect(context.master.events.every(event => event.value <= 0.035)).toBe(true);
    expect(context.sources.every(source => source.start.mock.calls.length === 1)).toBe(true);
  });

  it('coalesces repeated enables and never duplicates persistent sources', async () => {
    const { sound, context, createContext } = fixture();
    const first = sound.setEnabled(true);
    expect(sound.setEnabled(true)).toBe(first);
    expect(await first).toBe(true);
    expect(await sound.setEnabled(true)).toBe(true);
    expect(createContext).toHaveBeenCalledOnce();
    expect(context.resume).toHaveBeenCalledOnce();
    expect(context.sources).toHaveLength(3);
  });

  it('throttles both event kinds together for at least four monotonic seconds', async () => {
    const { sound, context } = fixture();
    await sound.setEnabled(true);
    sound.pulse('news');
    expect(context.oscillators).toHaveLength(3);
    const news = context.oscillators[2];
    expect(news.type).toBe('sine');
    expect(news.frequency.events.map(event => event.value)).toEqual([72, 60]);
    expect(context.gains[4].gain.events.at(-1)?.value).toBe(0);
    expect(news.stop.mock.calls[0][0]).toBeCloseTo(2.82);
    await vi.advanceTimersByTimeAsync(3999);
    sound.pulse('quake');
    expect(context.oscillators).toHaveLength(3);
    await vi.advanceTimersByTimeAsync(1);
    sound.pulse('quake');
    expect(context.oscillators).toHaveLength(4);
    expect(context.oscillators[3].frequency.events.map(event => event.value)).toEqual([48, 39]);
    expect(context.gains[5].gain.events.at(-1)?.value).toBe(0);
  });

  it('releases transient oscillators and envelopes on their ended event', async () => {
    const { sound, context } = fixture();
    await sound.setEnabled(true);
    sound.pulse('news');
    const source = context.oscillators[2];
    const gain = context.gains[4];
    source.finish();
    expect(source.onended).toBeNull();
    expect(source.disconnect).toHaveBeenCalledOnce();
    expect(gain.disconnect).toHaveBeenCalledOnce();
    await sound.dispose();
    expect(source.disconnect).toHaveBeenCalledOnce();
    expect(source.stop).toHaveBeenCalledOnce();
  });

  it('fades mute briefly to exact zero before suspension and stops outstanding tails', async () => {
    const { sound, context } = fixture();
    await sound.setEnabled(true);
    await vi.advanceTimersByTimeAsync(1000);
    sound.pulse('quake');
    const muting = sound.setEnabled(false);
    expect(sound.enabled).toBe(false);
    expect(context.master.at(1)).toBeCloseTo(0.025);
    expect(context.master.at(1.04)).toBeCloseTo(0.0125);
    expect(context.master.at(1.08)).toBe(0);
    sound.pulse('news');
    await vi.advanceTimersByTimeAsync(79);
    expect(context.suspend).not.toHaveBeenCalled();
    await vi.advanceTimersByTimeAsync(1);
    expect(await muting).toBe(false);
    expect(context.suspend).toHaveBeenCalledOnce();
    expect(context.state).toBe('suspended');
    expect(context.master.at(100)).toBe(0);
    expect(context.oscillators[2].stop).toHaveBeenLastCalledWith();
    expect(context.oscillators[2].disconnect).toHaveBeenCalledOnce();
    expect(context.oscillators).toHaveLength(3);
    expect(await sound.setEnabled(true)).toBe(true);
    expect(context.sources).toHaveLength(4);
    expect(context.master.at(2)).toBe(0.025);
  });

  it('damps continuously, cancels future gain automation at archive zero, and fades back', async () => {
    const { sound, context } = fixture();
    await sound.setEnabled(true);
    sound.pulse('news');
    await vi.advanceTimersByTimeAsync(100);
    sound.setDamping(0.5);
    expect(context.master.at(0.3)).toBeCloseTo(0.025 * 0.25);
    await vi.advanceTimersByTimeAsync(50);
    sound.setDamping(1);
    expect(sound.enabled).toBe(true);
    expect(context.master.at(0.15)).toBe(0);
    expect(context.master.at(100)).toBe(0);
    expect(context.master.events.filter(event => event.time >= 0.15)).toEqual([
      { kind: 'set', value: 0, time: 0.15 },
    ]);
    expect(context.oscillators[2].onended).toBeNull();
    expect(context.oscillators[2].stop).toHaveBeenLastCalledWith();
    await vi.advanceTimersByTimeAsync(5000);
    sound.pulse('quake');
    expect(context.oscillators).toHaveLength(3);
    sound.setDamping(0);
    expect(context.master.at(5.15)).toBe(0);
    expect(context.master.at(6)).toBe(0.025);
    sound.setDamping(Number.NaN);
    expect(context.master.at(6)).toBe(0.025);
    sound.setDamping(2);
    expect(context.master.at(6)).toBe(0);
    sound.setDamping(-1);
    expect(context.master.at(6)).toBe(0.025);
  });

  it('clears the intrinsic gain even if the suspended audio clock stops processing automation', async () => {
    const { sound, context } = fixture();
    await sound.setEnabled(true);
    await vi.advanceTimersByTimeAsync(1000);
    context.master.value = 0.000006;
    sound.setDamping(1);
    expect(context.master.value).toBe(0);
    expect(context.master.events).toEqual([{ kind: 'set', value: 0, time: 1 }]);
  });

  it('honors archive zero set before a pending enable completes', async () => {
    const { sound, context } = fixture();
    const resume = deferred();
    context.resume.mockImplementationOnce(async () => { await resume.promise; context.state = 'running'; });
    const enabling = sound.setEnabled(true);
    sound.setDamping(1);
    resume.resolve();
    expect(await enabling).toBe(true);
    expect(context.master.events.every(event => event.value === 0)).toBe(true);
    sound.pulse('quake');
    expect(context.sources).toHaveLength(3);
    sound.setDamping(0);
    expect(context.master.at(1)).toBe(0.025);
  });

  it('does not restore sound from damping while muted', async () => {
    const { sound, context } = fixture();
    await sound.setEnabled(true);
    const muting = sound.setEnabled(false);
    sound.setDamping(1);
    sound.setDamping(0);
    expect(context.master.at(10)).toBe(0);
    await vi.advanceTimersByTimeAsync(80);
    await muting;
    sound.setDamping(0.3);
    expect(context.master.at(10)).toBe(0);
    expect(sound.enabled).toBe(false);
  });

  it('cancels a mute timer when reenabled during the fade', async () => {
    const { sound, context } = fixture();
    await sound.setEnabled(true);
    const muting = sound.setEnabled(false);
    await vi.advanceTimersByTimeAsync(20);
    expect(await sound.setEnabled(true)).toBe(true);
    await muting;
    await vi.advanceTimersByTimeAsync(1000);
    expect(context.suspend).not.toHaveBeenCalled();
    expect(context.state).toBe('running');
    expect(context.master.at(2)).toBe(0.025);
    expect(context.sources).toHaveLength(3);
  });

  it('resuspends a stale resume that finishes after disabling', async () => {
    const { sound, context } = fixture();
    const resume = deferred();
    context.resume.mockImplementationOnce(async () => { await resume.promise; context.state = 'running'; });
    const enabling = sound.setEnabled(true);
    const muting = sound.setEnabled(false);
    await vi.advanceTimersByTimeAsync(80);
    expect(await muting).toBe(false);
    resume.resolve();
    expect(await enabling).toBe(false);
    expect(context.state).toBe('suspended');
    expect(context.suspend).toHaveBeenCalledTimes(2);
    expect(context.sources).toHaveLength(0);
    expect(sound.enabled).toBe(false);
  });

  it.each(['resolve', 'reject'] as const)('ignores an older enable that later %ss after a newer enable', async outcome => {
    const { sound, context, createContext } = fixture();
    const firstResume = deferred();
    context.resume.mockImplementationOnce(async () => { await firstResume.promise; context.state = 'running'; });
    const first = sound.setEnabled(true);
    const muting = sound.setEnabled(false);
    expect(await sound.setEnabled(true)).toBe(true);
    await muting;
    if (outcome === 'resolve') firstResume.resolve();
    else firstResume.reject(new Error('Old activation rejected'));
    expect(await first).toBe(true);
    expect(sound.enabled).toBe(true);
    expect(context.sources).toHaveLength(3);
    expect(createContext).toHaveBeenCalledOnce();
    expect(context.close).not.toHaveBeenCalled();
    expect(context.suspend).not.toHaveBeenCalled();
  });

  it('repairs an in-flight suspension without losing the synchronous gesture resume', async () => {
    const { sound, context } = fixture();
    await sound.setEnabled(true);
    const suspension = deferred();
    context.suspend.mockImplementationOnce(async () => { await suspension.promise; context.state = 'suspended'; });
    const muting = sound.setEnabled(false);
    await vi.advanceTimersByTimeAsync(80);
    const enabling = sound.setEnabled(true);
    expect(context.resume).toHaveBeenCalledTimes(2);
    suspension.resolve();
    await muting;
    expect(await enabling).toBe(true);
    expect(context.resume).toHaveBeenCalledTimes(3);
    expect(context.state).toBe('running');
    expect(context.sources).toHaveLength(3);
    expect(context.master.at(1)).toBe(0.025);
  });

  it('returns false and closes without starting sources when resume rejects, then permits retry', async () => {
    const firstContext = new MockContext();
    const secondContext = new MockContext();
    firstContext.resume.mockRejectedValueOnce(new Error('Gesture rejected'));
    const createContext = vi.fn()
      .mockReturnValueOnce(firstContext as unknown as AudioContext)
      .mockReturnValueOnce(secondContext as unknown as AudioContext);
    const { sound } = fixture({ createContext });
    expect(await sound.setEnabled(true)).toBe(false);
    expect(sound.enabled).toBe(false);
    expect(sound.initialized).toBe(false);
    expect(firstContext.close).toHaveBeenCalledOnce();
    expect(firstContext.sources).toHaveLength(0);
    expect(await sound.setEnabled(true)).toBe(true);
    expect(secondContext.sources).toHaveLength(3);
    expect(createContext).toHaveBeenCalledTimes(2);
  });

  it('handles a throwing factory or a synchronous resume failure without rejection', async () => {
    const failedFactory = fixture({ createContext: () => { throw new Error('Unavailable'); } });
    expect(await failedFactory.sound.setEnabled(true)).toBe(false);
    const { sound, context } = fixture();
    context.resume.mockImplementationOnce(() => { throw new Error('Unavailable'); });
    expect(await sound.setEnabled(true)).toBe(false);
    expect(context.close).toHaveBeenCalledOnce();
    expect(sound.initialized).toBe(false);
  });

  it('cleans up partially built graphs if source setup fails', async () => {
    const { sound, context } = fixture({ random: () => { throw new Error('Buffer failure'); } });
    expect(await sound.setEnabled(true)).toBe(false);
    expect(context.oscillators).toHaveLength(2);
    expect(context.sources.every(source => source.stop.mock.calls.length === 1)).toBe(true);
    expect(context.nodes.every(node => node.disconnect.mock.calls.length === 1)).toBe(true);
    expect(context.close).toHaveBeenCalledOnce();
    expect(sound.initialized).toBe(false);
  });

  it('cleans up a transient if allocation fails without disturbing the background', async () => {
    const { sound, context } = fixture();
    await sound.setEnabled(true);
    context.createGain.mockImplementationOnce(() => { throw new Error('Allocation failed'); });
    expect(() => sound.pulse('news')).not.toThrow();
    expect(context.oscillators[2].stop).toHaveBeenCalledOnce();
    expect(context.oscillators[2].disconnect).toHaveBeenCalledOnce();
    expect(sound.enabled).toBe(true);
    sound.pulse('news');
    expect(context.oscillators).toHaveLength(4);
  });

  it('keeps the output at zero even if suspend or close rejects', async () => {
    const { sound, context } = fixture();
    await sound.setEnabled(true);
    context.suspend.mockRejectedValueOnce(new Error('Suspend failed'));
    context.close.mockRejectedValueOnce(new Error('Close failed'));
    const muting = sound.setEnabled(false);
    await vi.advanceTimersByTimeAsync(80);
    expect(await muting).toBe(false);
    expect(context.master.at(100)).toBe(0);
    await expect(sound.dispose()).resolves.toBeUndefined();
    expect(context.sources.every(source => source.stop.mock.calls.length === 1)).toBe(true);
    expect(context.nodes.every(node => node.outputs.size === 0)).toBe(true);
  });

  it('disposes all resources once, cancels timers, and cannot be resurrected', async () => {
    const { sound, context, createContext } = fixture();
    await sound.setEnabled(true);
    sound.pulse('quake');
    const muting = sound.setEnabled(false);
    const disposal = sound.dispose();
    expect(sound.dispose()).toBe(disposal);
    await disposal;
    expect(await muting).toBe(false);
    expect(sound.enabled).toBe(false);
    expect(sound.initialized).toBe(false);
    expect(context.master.at(100)).toBe(0);
    expect(context.close).toHaveBeenCalledOnce();
    expect(context.sources.every(source => source.onended === null && source.stop.mock.calls.length > 0)).toBe(true);
    expect(context.nodes.every(node => node.disconnect.mock.calls.length === 1)).toBe(true);
    expect(vi.getTimerCount()).toBe(0);
    sound.setDamping(0);
    sound.pulse('news');
    expect(await sound.setEnabled(true)).toBe(false);
    expect(createContext).toHaveBeenCalledOnce();
    expect(context.sources).toHaveLength(4);
  });

  it('disposes immediately while a resume is pending and ignores its eventual completion', async () => {
    const { sound, context } = fixture();
    const resume = deferred();
    context.resume.mockImplementationOnce(() => resume.promise);
    const enabling = sound.setEnabled(true);
    await sound.dispose();
    expect(context.close).toHaveBeenCalledOnce();
    resume.resolve();
    expect(await enabling).toBe(false);
    expect(sound.enabled).toBe(false);
    expect(sound.initialized).toBe(false);
    expect(context.sources).toHaveLength(0);
    expect(context.state).toBe('closed');
  });
});
