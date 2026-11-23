import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { SurfaceSignals } from '../components/SurfaceSignals';
import { Observatory } from '../scene/Observatory';
import type { Telemetry } from '../scene/Observatory';
import type { TextureStatus } from '../scene/earth/textures';
import { formatCoordinates } from '../astronomy/coordinates';
import type { Coordinates } from '../astronomy/coordinates';
import { solarPosition } from '../astronomy/solar';
import type { TimeMode } from '../simulation/clock';
import type { NewsItem, NewsSnapshot, NoiseEvent, WeatherState, WindState } from '../data/providers/types';
import { fetchNews, isLocated } from '../data/providers/news';
import { fetchWeather, fetchWindField } from '../data/providers/meteo';
import { WeatherReadout } from '../components/WeatherReadout';
import { SelectionGuide } from '../components/SelectionGuide';
import { MOCK_EVENTS } from '../data/mock/noise';
import { ObservationLog } from '../components/ObservationLog';
import { TimeControl } from '../components/TimeControl';
import { AboutGuide } from '../components/AboutGuide';
import { OpeningPrologue } from '../components/OpeningPrologue';
import { ChaosObservatory } from '../components/ChaosObservatory';
import { deriveChaosParameters } from '../simulation/chaos';
import { estimatedPopulation, POPULATION_NOTE } from '../astronomy/scale';
import { Soundscape } from '../audio/soundscape';

declare global { interface Window { __observatory?: Observatory } }

function Reticle({ className = '' }: { className?: string }) {
  return <svg className={className} viewBox="0 0 36 36" fill="none" aria-hidden="true"><circle cx="18" cy="18" r="10" /><path d="M18 0v11m0 14v11M0 18h11m14 0h11" /><circle cx="18" cy="18" r="1.5" /></svg>;
}

function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: (checked: boolean) => void }) {
  return <label className="layer-toggle"><span>{label}</span><input type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)} /><span className="toggle-track" aria-hidden="true"><i /></span></label>;
}

const PROLOGUE_STORAGE_KEY = 'singer:prologue:v1';
function readInitialPrologue(): boolean {
  try { return localStorage.getItem(PROLOGUE_STORAGE_KEY) !== 'seen'; }
  catch { return true; }
}

const initialSolar = solarPosition(Date.now());
const initialTelemetry: Telemetry = { utc: Date.now(), solar: initialSolar, distanceKm: 41411, activeNoise: 0, activeQuakes: 0, dimensional: { phase: 'idle', progress: 0, fold: 0, foil: 0 }, silent: false, ready: false };

export default function App() {
  const canvasHost = useRef<HTMLDivElement>(null);
  const engine = useRef<Observatory | null>(null);
  const [telemetry, setTelemetry] = useState(initialTelemetry);
  const [textures, setTextures] = useState<TextureStatus>({ loaded: 0, total: 5, warnings: [], complete: false });
  const [error, setError] = useState('');
  const [mode, setMode] = useState<TimeMode>('live');
  const [clouds, setClouds] = useState(true);
  const [noise, setNoise] = useState(true);
  const [quakesEnabled, setQuakesEnabled] = useState(true);
  const [labelsEnabled, setLabelsEnabled] = useState(true);
  const [hoveredEvent, setHoveredEvent] = useState<NewsItem | null>(null);
  const [surfaceHovered, setSurfaceHovered] = useState(false);
  const [deep, setDeep] = useState(false);
  const [calibration, setCalibration] = useState(false);
  const [credits, setCredits] = useState(false);
  const [guideOpen, setGuideOpen] = useState(false);
  const [prologueOpen, setPrologueOpen] = useState(readInitialPrologue);
  const [selectedEvent, setSelectedEvent] = useState<NewsItem | null>(null);
  const [picked, setPicked] = useState<Coordinates | null>(null);
  const [news, setNews] = useState<NewsSnapshot | null>(null);
  const [sourcesExpanded, setSourcesExpanded] = useState(false);
  const [windEnabled, setWindEnabled] = useState(true);
  const [quiet, setQuiet] = useState(false);
  const [scaleExpanded, setScaleExpanded] = useState(false);
  const [confirmFoil, setConfirmFoil] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [audioError, setAudioError] = useState('');
  const sound = useRef<Soundscape | null>(null);
  const soundWanted = useRef(false);
  const phase = telemetry.dimensional.phase;
  const dimensionalActive = phase !== 'idle';
  const [weather, setWeather] = useState<WeatherState>({ state: 'idle', reading: null, message: '' });
  const [wind, setWind] = useState<WindState>({ state: 'idle', samples: [], fetchedAt: null, message: '按需接通 · 全球稀疏采样' });

  const locatedEvents = useMemo(() => news?.events.filter(isLocated) ?? [], [news]);
  const chaosSummary = useMemo(() => deriveChaosParameters(news), [news]);
  const scrollToChaos = useCallback(() => {
    document.getElementById('chaos-observatory')?.scrollIntoView({ behavior: 'smooth' });
  }, []);
  const scrollToEarth = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const selectEvent = useCallback((event: NewsItem | null) => {
    setHoveredEvent(null);
    if (event && isLocated(event)) {
      setDeep(false);
      engine.current?.focusCoordinates(event);
    }
    setSelectedEvent(event);
  }, []);
  const focusFromChaos = useCallback((item: NewsItem) => {
    selectEvent(item);
    scrollToEarth();
  }, [selectEvent, scrollToEarth]);

  useEffect(() => {
    engine.current?.setHighlight(hoveredEvent?.id ?? selectedEvent?.id ?? null);
  }, [hoveredEvent, selectedEvent]);

  useEffect(() => {
    if (picked || !telemetry.ready || !locatedEvents.length) return;
    const timer = window.setTimeout(() => {
      const event = locatedEvents.find(item => item.kind !== 'quake' && engine.current?.project(item).visible);
      if (event) setPicked({ lat: event.lat, lon: event.lon });
    }, 1900);
    return () => clearTimeout(timer);
  }, [picked, telemetry.ready, locatedEvents]);

  useEffect(() => {
    if (!canvasHost.current) return;
    const audio = new Soundscape();
    sound.current = audio;
    try {
      const observatory = new Observatory(canvasHost.current, {
        onTelemetry: (next) => { setTelemetry(next); audio.setDamping(next.dimensional.fold); }, onEvent: selectEvent, onPick: (coordinates) => { setPicked(coordinates); setSelectedEvent(null); },
        onHover: setHoveredEvent, onSurfaceHover: setSurfaceHovered,
        onTextures: setTextures, onError: setError, onPulse: (kind) => audio.pulse(kind),
      });
      engine.current = observatory;
      if (import.meta.env.DEV) window.__observatory = observatory;
      void observatory.initialize();
      return () => { observatory.dispose(); void audio.dispose(); sound.current = null; engine.current = null; delete window.__observatory; };
    } catch (cause) {
      void audio.dispose();
      setError(cause instanceof Error ? cause.message : '当前设备无法建立 WebGL 观测视野。');
    }
  }, []);

  const changeQuiet = (next: boolean) => {
    if (dimensionalActive) return;
    setQuiet(next);
    setConfirmFoil(false);
    setCredits(false);
    setGuideOpen(false);
    setScaleExpanded(false);
    if (next) { setMode('live'); engine.current?.setTimeMode('live'); setCalibration(false); engine.current?.setCalibration(false); }
    engine.current?.setCruise(next);
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target;
      const editing = target instanceof HTMLElement && (target.isContentEditable || /TEXTAREA|SELECT/.test(target.tagName)
        || (target instanceof HTMLInputElement && !['checkbox', 'radio'].includes(target.type)));
      if (event.repeat || event.ctrlKey || event.metaKey || event.altKey || editing || prologueOpen) return;
      if (event.key.toLowerCase() === 'h' && !dimensionalActive) { event.preventDefault(); changeQuiet(!quiet); }
      if (event.key === '?' && !dimensionalActive && !quiet) { event.preventDefault(); setGuideOpen((open) => !open); setScaleExpanded(false); setCredits(false); }
      if (event.key === 'Escape') {
        if (dimensionalActive) engine.current?.restoreDimension();
        else if (quiet) changeQuiet(false);
        setCredits(false); setGuideOpen(false); setCalibration(false); setConfirmFoil(false); engine.current?.setCalibration(false);
      }
    };
    const onEdge = (event: MouseEvent) => {
      if (quiet && (event.clientX < 36 || event.clientX > innerWidth - 36 || event.clientY < 28 || event.clientY > innerHeight - 28)) changeQuiet(false);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('pointermove', onEdge);
    window.addEventListener('pointerdown', onEdge);
    return () => { window.removeEventListener('keydown', onKey); window.removeEventListener('pointermove', onEdge); window.removeEventListener('pointerdown', onEdge); };
  }, [quiet, dimensionalActive, prologueOpen]);

  const toggleSound = async () => {
    if (!sound.current) return;
    soundWanted.current = !soundWanted.current;
    const wanted = soundWanted.current;
    await sound.current.setEnabled(wanted);
    const enabled = sound.current?.enabled ?? false;
    setAudioEnabled(enabled);
    if (wanted === soundWanted.current) {
      setAudioError(wanted && !enabled ? '声景不可用 · 保持静音' : '');
      soundWanted.current = enabled;
    }
  };

  const releaseFoil = () => {
    setConfirmFoil(false); setScaleExpanded(false); setCredits(false); setGuideOpen(false); setCalibration(false);
    engine.current?.setCalibration(false);
    if (engine.current?.releaseFoil()) setTelemetry(previous => ({ ...previous, dimensional: { phase: 'delivery', progress: 0, fold: 0, foil: 0 } }));
  };

  useEffect(() => {
    let controller = new AbortController();
    let retryTimer = 0;
    const load = async () => {
      clearTimeout(retryTimer);
      controller.abort();
      controller = new AbortController();
      const signal = controller.signal;
      try {
        const snapshot = await fetchNews(signal);
        if (signal.aborted) return;
        setNews(snapshot);
        engine.current?.setNews(snapshot.events.filter(isLocated));
        if (snapshot.mode === 'demo') {
          retryTimer = window.setTimeout(() => { void load(); }, 20000);
        }
      } catch { /* A newer refresh owns the result after cancellation. */ }
    };
    void load();
    const interval = window.setInterval(() => { void load(); }, 300000);
    const refresh = () => { void load(); };
    window.addEventListener('online', refresh);
    window.addEventListener('offline', refresh);
    return () => { controller.abort(); clearTimeout(retryTimer); clearInterval(interval); window.removeEventListener('online', refresh); window.removeEventListener('offline', refresh); };
  }, []);

  useEffect(() => {
    if (!picked) return;
    let controller = new AbortController();
    setWeather({ state: 'loading', reading: null, message: '正在探测当前模型场' });
    const load = async () => {
      controller.abort(); controller = new AbortController();
      const signal = controller.signal;
      try {
        const result = await fetchWeather(picked, signal);
        if (!signal.aborted) setWeather(result);
      } catch { /* Cancellation must not replace the next selected location. */ }
    };
    const debounce = window.setTimeout(() => { void load(); }, 220);
    const timer = window.setInterval(() => { void load(); }, 300000);
    const online = () => { void load(); };
    const offline = () => {
      controller.abort();
      setWeather((previous) => ({ ...previous, state: previous.reading ? 'cached' : 'unavailable', message: previous.reading ? '链路中断 · 保留上次模型切片' : '链路中断 · 无该坐标缓存' }));
    };
    window.addEventListener('online', online); window.addEventListener('offline', offline);
    return () => { controller.abort(); clearTimeout(debounce); clearInterval(timer); window.removeEventListener('online', online); window.removeEventListener('offline', offline); };
  }, [picked]);

  useEffect(() => {
    engine.current?.setWind(windEnabled);
    if (!windEnabled) return;
    let controller = new AbortController();
    const load = async () => {
      controller.abort(); controller = new AbortController();
      const signal = controller.signal;
      setWind((previous) => ({ ...previous, state: 'loading', message: '接收全球低密度流场' }));
      try {
        const result = await fetchWindField(signal);
        if (signal.aborted) return;
        setWind(result);
        engine.current?.setWindSamples(result.samples);
      } catch { /* A disabled layer no longer consumes the request result. */ }
    };
    void load();
    const timer = window.setInterval(() => { void load(); }, 1200000);
    const online = () => { void load(); };
    const offline = () => {
      controller.abort();
      setWind((previous) => ({ ...previous, state: previous.samples.length ? 'cached' : 'unavailable', message: previous.samples.length ? '流场链路中断 · 保留缓存' : '流场不可达 · 不生成替代风向' }));
    };
    window.addEventListener('online', online); window.addEventListener('offline', offline);
    return () => { controller.abort(); clearInterval(timer); window.removeEventListener('online', online); window.removeEventListener('offline', offline); };
  }, [windEnabled]);

  const locateEvent = (event: NewsItem) => {
    if (isLocated(event)) selectEvent(event);
  };
  const changeMode = (next: TimeMode) => { setMode(next); engine.current?.setTimeMode(next); };
  const toggleDeep = () => {
    const next = !deep;
    setDeep(next);
    if (next) { setCalibration(false); engine.current?.setCalibration(false); }
    engine.current?.setDeepSpace(next);
  };
  const toggleCalibration = () => {
    const next = !calibration;
    setCalibration(next);
    engine.current?.setCalibration(next);
  };
  const focusReference = (event: NoiseEvent) => {
    setDeep(false);
    engine.current?.focusCoordinates(event);
  };
  const failedSources = news?.sources.filter((source) => source.state === 'error').length ?? 0;
  const newsNotice = news?.mode === 'demo' ? '离线演示样本 · 非真实资讯' : news?.mode === 'cached' ? '链路不可达 · 保留上次真实缓存' : failedSources ? `${failedSources} 个来源不可达 · 其余来源照常显示` : '';
  const date = new Date(telemetry.utc);
  const currentSun = solarPosition(Date.now());
  const archiveText = phase === 'archived' ? '二维化完成 · 表面噪音归零 · 进程归档' : phase === 'restoring' ? '时空回溯 · 重建三维观测切片' : phase === 'delivery' ? '封装已释放 · 等待维度接触' : '空间自由度递减 · 低熵活动消隐';
  const status = error ? '观测中断' : !telemetry.ready ? '建立观测视野' : mode === 'paused' ? '时间切片冻结' : mode === 'live' ? '观测时序同步' : '加速观测中';

  const enterObservatory = () => {
    setPrologueOpen(false);
    try { localStorage.setItem(PROLOGUE_STORAGE_KEY, 'seen'); } catch { /* Storage is optional. */ }
  };

  return <div className="observatory-page"><main className={`observatory ${deep ? 'deep-space' : ''} ${quiet ? 'is-quiet' : ''} ${dimensionalActive ? 'is-dimensional' : ''} ${prologueOpen ? 'is-prologue' : ''}`} data-phase={phase}>
    <div className="universe" ref={canvasHost} />
    <SelectionGuide engine={engine} picked={picked} silent={telemetry.silent || quiet || dimensionalActive || guideOpen || prologueOpen} />
    <SurfaceSignals engine={engine} events={locatedEvents} selected={selectedEvent} hovered={hoveredEvent} paused={surfaceHovered} hidden={!labelsEnabled || quiet || deep || dimensionalActive || calibration || guideOpen || prologueOpen} newsEnabled={noise} quakesEnabled={quakesEnabled} onSelect={selectEvent} />
    <div className="hud" inert={quiet || dimensionalActive || prologueOpen}>
      <header className="masthead">
        <a className="brand" href="#" onClick={(event) => event.preventDefault()} aria-label="歌者观测终端"><Reticle className="brand-mark" /><span><strong>歌 者<span className="brand-divider">/</span><b>SINGER</b></strong><small>深空文明观测终端</small></span></a>
        <div className="header-center"><span>猎户臂 · 本地恒星系</span><span className="header-separator">/</span><span>观测序列 0003</span></div>
        <div className="header-status"><span className={`status-dot ${error ? 'error' : ''}`} /><span>{status}</span><span className="version">V.03</span></div>
      </header>

      <aside className="target-panel">
        <div className="eyebrow"><span className="section-number">01</span> 观测对象 / SOL–III</div>
        <h1>第三行星<span className="title-dot">.</span></h1>
        <p className="target-subtitle">一颗普通的岩质行星</p>
        <div className="target-facts">
          <div><span>恒星距离</span><span>{currentSun.distanceAu.toFixed(3)} <em>AU</em></span></div>
          <div><span>平均半径</span><span>6,371 <em>km</em></span></div>
          <div><span>文明等级</span><span>尚未越过母星</span></div>
        </div>
        <div className="target-classification"><span className="tiny-cross">+</span> 存在低熵活动迹象</div>
      </aside>

      <div className="view-reference" aria-hidden="true"><i /><i /><i /><i /><span className="reference-top">视野中心 / 003</span></div>
      <div className="planet-caption">
        <span className="caption-line" />
        <p>{telemetry.silent ? '暗淡蓝点' : '薄层之下，众生喧哗。'}</p>
        <span>{telemetry.silent ? '在宇宙的尺度上，未发生任何事。' : '所有已知的悲欢，都被约束在这里。'}</span>
      </div>

      <aside className="telemetry-panel">
        <div className="section-heading"><span className="section-number">03</span> 宏观遥测</div>
        <div className="telemetry-item" title="此刻太阳正午直射的地球经纬度，决定全球真实日照与阴影位置"><span className="eyebrow">恒星入射点</span><strong data-testid="solar-coordinates">{Math.abs(telemetry.solar.lat).toFixed(2)}° <em>{telemetry.solar.lat >= 0 ? 'N' : 'S'}</em><span className="coordinate-divider">/</span>{Math.abs(telemetry.solar.lon).toFixed(2)}° <em>{telemetry.solar.lon >= 0 ? 'E' : 'W'}</em></strong></div>
        <div className="telemetry-item atmosphere-item" title="维持人类生存的大气有效厚度仅约 100 公里，不足地球半径的 1.57%"><span className="eyebrow">生态薄层 / 行星半径</span><strong>1.57<span className="unit">%</span></strong><div className="atmosphere-scale"><i /></div><span className="micro-copy">100 km / 6,371 km</span></div>
        <div className="telemetry-item noise-count" title="当前面向镜头半球上可见的全球实时新闻数量"><span className="eyebrow">可见人类表面噪音</span><strong>{String(telemetry.activeNoise).padStart(2, '0')}<span className="unit">处</span></strong><span className="micro-copy">{news?.mode === 'demo' ? '离线演示样本' : news?.mode === 'cached' ? '真实信号缓存' : news ? '多源真实信号' : '外部频段接通中'}</span></div>
        <div className="news-source-state" data-testid="news-source-state" data-mode={news?.mode ?? 'loading'}><button onClick={() => setSourcesExpanded(!sourcesExpanded)} aria-expanded={sourcesExpanded}>{news ? `在线源 ${news.sources.filter((source) => source.state === 'online').length}/${news.sources.length || 6}` : '正在接通外部频段'}<span>{sourcesExpanded ? '−' : '+'}</span></button>{newsNotice && <small className="data-warning" title={news?.warning}>{newsNotice}</small>}{sourcesExpanded && <div className="source-details">{news?.sources.map((source) => <div key={source.id}><span>{source.name}</span><span className={source.state === 'error' ? 'data-warning' : ''}>{source.state === 'online' ? `${source.count} 条` : source.error || '不可达'}</span></div>)}<p>最近探测 {news?.checkedAt ? new Date(news.checkedAt).toISOString().slice(11, 19) : '—'} UTC · 5 分钟缓存</p></div>}</div>
        <div className="distance-readout"><span>离表距离</span><span>{telemetry.distanceKm >= 100000 ? `${(telemetry.distanceKm / 1000000).toFixed(2)} × 10⁶` : Math.round(telemetry.distanceKm).toLocaleString('en-US')} km</span></div>
      </aside>

      <ObservationLog event={selectedEvent} silent={telemetry.silent} snapshot={news} onSelect={selectEvent} onLocate={locateEvent} onHover={setHoveredEvent} />
      <WeatherReadout picked={picked} weather={weather} solar={telemetry.solar} className="weather-mobile" />

      <div className="surface-layerbar">
        <div className="layer-controls">
          <Toggle label="表面噪音" checked={noise} onChange={(checked) => { setNoise(checked); engine.current?.setNoise(checked); }} />
          <Toggle label="地壳微震" checked={quakesEnabled} onChange={(checked) => { setQuakesEnabled(checked); engine.current?.setQuakes(checked); }} />
          <Toggle label="地表标注" checked={labelsEnabled} onChange={setLabelsEnabled} />
          <Toggle label="薄层云系" checked={clouds} onChange={(checked) => { setClouds(checked); engine.current?.setClouds(checked); }} />
          <Toggle label="风场矢量" checked={windEnabled} onChange={setWindEnabled} />
        </div>
        <span className="layer-counts" title="当前载入的已定位信号与风场采样点；背面信号不绘制">噪音 {locatedEvents.filter(event => event.kind !== 'quake').length} · 地震 {locatedEvents.filter(event => event.kind === 'quake').length} · 风场 {wind.samples.length}</span>
      </div>
      <aside className="instrument-panel">
        {windEnabled && <p title={wind.message} className={`wind-status ${wind.state === 'cached' || wind.state === 'unavailable' ? 'data-warning' : ''}`} data-wind-state={wind.state}>{wind.message.split('；')[0]}{wind.state !== 'live' && wind.samples.length > 0 ? ` · ${wind.samples.length} 点` : ''}</p>}
        <WeatherReadout picked={picked} weather={weather} solar={telemetry.solar} />
        <button className={`deep-space-button ${deep ? 'selected' : ''}`} onClick={toggleDeep} aria-pressed={deep} data-testid="deep-space"><span className="retreat-icon" aria-hidden="true">{deep ? '↙' : '↗'}</span><span>{deep ? '返回近地观测' : '深空退远'}<small>{deep ? '重新辨认这颗行星' : '暗淡蓝点'}</small></span><span className="button-index">{deep ? '−' : '+'}</span></button>
      </aside>

      {calibration && <section className="calibration-panel" aria-label="经纬度参考校准"><div className="eyebrow">观测基准 / ECEF · WGS84 经纬度</div><div className="reference-buttons">{MOCK_EVENTS.slice(0, 3).map((event) => <button key={event.id} onClick={() => focusReference(event)} data-testid={`reference-${event.id}`}><span>{event.settlement}</span><small>{formatCoordinates(event, 1)}</small></button>)}</div><p>定位后，参考微点应与地表及点击坐标重合。</p></section>}

      {mode !== 'live' && <div className="data-time-notice">日照时序独立 · 新闻与气象仍为当前数据，非历史回放</div>}
      <div className="field-meta"><span className="interaction-hint">拖曳旋转 <b>·</b> 滚动接近 <b>·</b> 点选地表</span><span className="field-actions"><button onClick={toggleCalibration} aria-pressed={calibration}>坐标校准</button><span>/</span><button onClick={() => setCredits(!credits)} aria-expanded={credits}>底图档案{textures.warnings.length > 0 ? ' !' : ''}</button></span></div>

      <TimeControl utc={telemetry.utc} mode={mode} onChange={changeMode} />
      <div className="bottom-signature"><span>清理，只是一份普通的工作。</span><button className="chaos-cue" data-testid="scroll-to-chaos" onClick={scrollToChaos}>↓ 进入混沌相空间 · 蝴蝶效应 &amp; 三体乱纪元（ρ {chaosSummary.rho.toFixed(1)}）</button><span>观测日期 {date.toISOString().slice(0, 10)} <span className="signature-dot">·</span> 无需回应</span></div>
    </div>

    <nav className="narrative-dock" aria-label="歌者观测模式" inert={quiet || prologueOpen}>
      <div className="narrative-left">
        {!dimensionalActive && <><button data-testid="quiet-mode" disabled={!telemetry.ready} onClick={() => changeQuiet(true)}>静默巡航 <kbd>H</kbd></button><span>/</span><button onClick={() => { setScaleExpanded(!scaleExpanded); setGuideOpen(false); }} aria-expanded={scaleExpanded} data-testid="cosmic-scale">尺度遥测 {scaleExpanded ? '−' : '+'}</button><span>/</span><button data-testid="nav-chaos" onClick={scrollToChaos}>混沌相空间 ↓</button><span>/</span><button data-testid="about-guide" aria-expanded={guideOpen} onClick={() => { setGuideOpen(!guideOpen); setScaleExpanded(false); setCredits(false); }}>关于作品 <kbd>?</kbd></button></>}
      </div>
      <div className="narrative-right">
        <button data-testid="sound-toggle" aria-pressed={audioEnabled} data-audio-initialized={sound.current?.initialized ?? false} onClick={() => { void toggleSound(); }}>{audioEnabled ? '声景 / 开' : '声景 / 静音'}</button>
        <span>/</span>
        {dimensionalActive ? <button data-testid="restore-dimension" onClick={() => engine.current?.restoreDimension()}>时空回溯 / 复原</button> : <button data-testid="foil-preview" disabled={!telemetry.ready} onClick={() => setConfirmFoil(!confirmFoil)}>清理预演 · 二向箔</button>}
      </div>
    </nav>
    {audioError && !quiet && <span className="audio-note" role="status">{audioError}</span>}
    {scaleExpanded && !quiet && <aside className="cosmic-scale" aria-label="宇宙尺度遥测">
      <div className="eyebrow">尺度档案 / 当前 UTC</div>
      <div className="population-estimate" title={POPULATION_NOTE}><span>碳基低熵体估算</span><strong>{estimatedPopulation(Date.now()).toLocaleString('en-US')}</strong></div>
      <p>{currentSun.distanceAu.toFixed(5)} AU <span>≈ {currentSun.lightSeconds.toFixed(1)} 光秒</span></p>
      <p>大气有效层 / 半径 ≈ 1.57%</p>
      <p className="singer-genome">隐藏基因：否 · 清理基因：是</p>
      <small>{POPULATION_NOTE}</small>
    </aside>}
    {confirmFoil && !quiet && !dimensionalActive && <section className="foil-confirmation" aria-label="二向箔二次确认">
      <span className="eyebrow">清理预演 / 仅为可逆的艺术化模拟</span>
      <p>坐标已广播 · 低熵体无隐藏基因 · 清理成本极低。<br />是否释放封装二向箔？</p>
      <div><button data-testid="release-foil" onClick={releaseFoil}>释放封装</button><button onClick={() => setConfirmFoil(false)}>暂不清理</button></div>
    </section>}
    {dimensionalActive && <div className="dimensional-terminal" role="status" data-testid="dimensional-status"><p>{archiveText}</p>{phase !== 'archived' && <small>表面噪音 {String(telemetry.activeNoise).padStart(2, '0')} · {phase === 'restoring' ? '重新建立空间自由度' : '无需回应'}</small>}</div>}
    {telemetry.distanceKm > 100 * 6371 && !dimensionalActive && !quiet && <div className="lunar-scale-note">月球平均轨道 / 384,400 km · 60.34 R⊕<small>圆轨道尺度参照 · 非实时月球轨迹</small></div>}
    <time className="exhibition-stamp" aria-hidden={!quiet} dateTime={date.toISOString()}>{date.toISOString().replace('T', ' ').slice(0, 19)} UTC</time>

    {(!telemetry.ready || error) && <div className={`loading-status ${error ? 'has-error' : ''}`} role="status"><Reticle /><span>{error ? '观测链路中断' : '正在辨认这颗行星'}</span><small>{error || `载入本地地表档案 ${textures.loaded} / ${textures.total}`}</small>{error && <button onClick={() => window.location.reload()}>重新建立观测</button>}</div>}

    {textures.warnings.length > 0 && !credits && <button className="texture-warning" onClick={() => setCredits(true)}>底图发生降级 · 查看档案</button>}

    {prologueOpen && <OpeningPrologue onEnter={enterObservatory} />}

    {guideOpen && !quiet && !dimensionalActive && !prologueOpen && <AboutGuide onClose={() => setGuideOpen(false)} onOpenCredits={() => { setGuideOpen(false); setCredits(true); }} onReplayPrologue={() => { setGuideOpen(false); setPrologueOpen(true); }} />}

    {credits && <aside className="credits-panel" aria-label="贴图来源与运行状态"><div className="section-heading">地表档案 / 数据来源<button onClick={() => setCredits(false)} aria-label="关闭底图档案">×</button></div><p>5 张 2048 × 1024 等距圆柱投影底图，均由本地载入，不依赖运行时外链。</p><p><a href="https://www.solarsystemscope.com/textures/" target="_blank" rel="noreferrer">Solar System Scope / INOVE ↗</a><br />基于 NASA 影像与地理数据的艺术化整理，非实时卫星图像。<br /><a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noreferrer">CC BY 4.0 ↗</a></p><p>法线与海洋遮罩由 TIFF 转换为 JPEG；另生成 1K 本地备用副本。云系为静态底图的独立平流演示，并非实时云场。</p><p>日照采用 UTC 天文位置；材质与大气为实时渲染近似。球面位置精度受 2K 底图分辨率限制。</p><p>新闻保留源标题；地名词典仅提供城市/国家中心近似。GDELT 上游不可达，已由 USGS 全球 24 小时 M2.5+ 地震替换；细环使用 USGS 震中与深度，非行政区中心，后续可能修订。缺失发布时间不使用采集时间冒充。</p><p>气象与风向来自 <a href="https://open-meteo.com/" target="_blank" rel="noreferrer">Open-Meteo ↗</a> 当前数值模型，非站点实测；模型格点可能吸附邻近坐标。降水为最近模型时间间隔累计；风向为来向。风场为稀疏局地向量示踪，粒子速度仅用于可视化，非完整大气模拟。</p><p>人口为基数与增速假设的连续估算，非实时人口统计。日地距离为轨道近似；月轨仅作平均尺度参照。二向箔为可逆艺术化演出，等高纹理由底图明度生成，并非真实高程或物理降维模拟。声景为程序合成，默认严格静音。</p><div className="source-status">{textures.warnings.length ? textures.warnings.map((warning) => <p key={warning}>{warning}</p>) : <p>资源状态 / 原始 2K 底图正常 · 未启用降级</p>}</div><a href={`${import.meta.env.BASE_URL}textures/earth/sources.json`} target="_blank" rel="noreferrer">查看完整来源与转换记录 ↗</a></aside>}
  </main>
  <ChaosObservatory
    snapshot={news}
    selectedEvent={selectedEvent}
    hidden={quiet || dimensionalActive || prologueOpen}
    onFocusOnEarth={focusFromChaos}
    onBackToEarth={scrollToEarth}
  />
  </div>;
}
