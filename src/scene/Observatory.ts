import {
  ACESFilmicToneMapping, Color, DoubleSide, FrontSide, Group, Mesh, PerspectiveCamera, Raycaster,
  Quaternion, Scene, ShaderMaterial, SphereGeometry, SRGBColorSpace, Vector2, Vector3, WebGLRenderer,
} from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { toCoordinates, toVector } from '../astronomy/coordinates';
import type { Coordinates } from '../astronomy/coordinates';
import { solarPosition } from '../astronomy/solar';
import { SimulationClock } from '../simulation/clock';
import type { TimeMode } from '../simulation/clock';
import type { NoiseEvent, WindSample } from '../data/providers/types';
import { MOCK_EVENTS } from '../data/mock/noise';
import { createWindField } from './effects/wind';
import { loadEarthTextures } from './earth/textures';
import type { TextureSet, TextureStatus } from './earth/textures';
import { sphereVertex, earthFragment, cloudFragment, atmosphereFragment } from './shaders/earth';
import { createStars } from './effects/stars';
import { createNoiseMarkers, updateNoise } from './effects/noise';
import type { NoiseMarker } from './effects/noise';
import { DimensionalSequence, RESTORE_DURATION } from '../simulation/dimensional';
import type { DimensionalFrame } from '../simulation/dimensional';
import { createFoil, createLunarReference } from './effects/dimensional';
import { chooseSignalView } from './signalView';

export interface Telemetry {
  utc: number;
  solar: Coordinates;
  distanceKm: number;
  activeNoise: number;
  activeQuakes: number;
  dimensional: DimensionalFrame;
  silent: boolean;
  ready: boolean;
}

interface ObservatoryCallbacks {
  onTelemetry: (telemetry: Telemetry) => void;
  onEvent: (event: NoiseEvent) => void;
  onPick: (coordinates: Coordinates) => void;
  onTextures: (status: TextureStatus) => void;
  onError: (message: string) => void;
  onPulse?: (kind: 'news' | 'quake') => void;
  onHover?: (event: NoiseEvent | null) => void;
  onSurfaceHover?: (hovered: boolean) => void;
}

export class Observatory {
  readonly clock = new SimulationClock();
  readonly renderer: WebGLRenderer;
  readonly camera = new PerspectiveCamera(35, 1, 0.01, 6000);
  readonly scene = new Scene();
  private readonly controls: OrbitControls;
  private readonly raycaster = new Raycaster();
  private readonly resizeObserver: ResizeObserver;
  private readonly visibilityObserver?: IntersectionObserver;
  private hostVisible = true;
  private tabVisible = typeof document === 'undefined' ? true : document.visibilityState !== 'hidden';
  private readonly sunUniform = { value: solarPosition(Date.now()).direction };
  private readonly cloudOffset = { value: 0 };
  private readonly cloudsEnabled = { value: 1 };
  private textures?: TextureSet;
  private earth?: Mesh<SphereGeometry, ShaderMaterial>;
  private clouds?: Mesh<SphereGeometry, ShaderMaterial>;
  private noiseGroup?: Group;
  private markers: NoiseMarker[] = [];
  private newsEvents: NoiseEvent[] = [];
  private windField?: ReturnType<typeof createWindField>;
  private windEnabled = false;
  private windSampleCount = 0;
  private animation = 0;
  private disposed = false;
  private ready = false;
  private noiseEnabled = true;
  private quakesEnabled = true;
  private highlightedId: string | null = null;
  private initialViewChosen = false;
  private userNavigated = false;
  private surfaceHovered = false;
  private calibrating = false;
  private pointerStart = new Vector2();
  private hoverId = '';
  private startedAt = performance.now();
  private lastTelemetry = 0;
  private width = 1;
  private height = 1;
  private normalDistance = 7.5;
  private returnPosition = new Vector3();
  private cameraTween?: { from: Vector3; to: Vector3; started: number; duration: number };
  private frozenNoiseTime: number | null = null;
  private readonly sequence = new DimensionalSequence();
  private readonly foldUniforms = {
    uFold: { value: 0 }, uFoldRight: { value: new Vector3(1, 0, 0) },
    uFoldUp: { value: new Vector3(0, 1, 0) }, uFoldNormal: { value: new Vector3(0, 0, 1) },
  };
  private readonly foil = createFoil();
  private readonly lunarReference = createLunarReference();
  private sequenceCamera = new Vector3();
  private cruise = false;
  private cruiseStarted = 0;
  private cruiseAngle = 0;
  private cruiseCamera = new Vector3();
  private previousActivity = { news: 0, quake: 0 };
  private noiseTime = 0;
  private windTime = 0;

  constructor(private host: HTMLElement, private callbacks: ObservatoryCallbacks) {
    this.renderer = new WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(new Color('#020305'), 1);
    this.renderer.outputColorSpace = SRGBColorSpace;
    this.renderer.toneMapping = ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.domElement.setAttribute('aria-label', '第三行星三维观测视野，可拖拽旋转、滚轮缩放、点击拾取地表坐标');
    this.renderer.domElement.setAttribute('role', 'img');
    this.host.appendChild(this.renderer.domElement);
    this.renderer.domElement.addEventListener('webglcontextlost', this.onContextLost);
    const initialSun = solarPosition(this.clock.read());
    this.camera.position.copy(toVector({ lat: 19, lon: initialSun.lon - 48 }, this.normalDistance));
    this.returnPosition.copy(this.camera.position);
    this.renderer.domElement.addEventListener('wheel', this.onWheelCapture, { capture: true, passive: true });
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.065;
    this.controls.rotateSpeed = 0.38;
    this.controls.zoomSpeed = 0.65;
    this.controls.enablePan = false;
    this.controls.minDistance = 2.35;
    this.controls.maxDistance = 760;
    this.controls.minPolarAngle = 0.05;
    this.controls.maxPolarAngle = Math.PI - 0.05;
    this.controls.addEventListener('start', this.onNavigation);
    this.scene.add(createStars(), this.foil, this.lunarReference);
    this.resizeObserver = new ResizeObserver(this.resize);
    this.resizeObserver.observe(host);
    if (typeof IntersectionObserver !== 'undefined') {
      this.visibilityObserver = new IntersectionObserver((entries) => {
        this.hostVisible = entries.some((entry) => entry.isIntersecting);
        this.syncLoop();
      }, { threshold: 0.02 });
      this.visibilityObserver.observe(host);
    }
    if (typeof document !== 'undefined') {
      document.addEventListener('visibilitychange', this.onVisibilityChange);
    }
    this.resize();
    this.renderer.domElement.addEventListener('pointerdown', this.onPointerDown);
    this.renderer.domElement.addEventListener('pointermove', this.onPointerMove);
    this.renderer.domElement.addEventListener('pointerup', this.onPointerUp);
    this.renderer.domElement.addEventListener('pointerleave', this.onPointerLeave);
    this.syncLoop();
  }

  async initialize() {
    try {
      const textures = await loadEarthTextures(this.renderer, (status) => { if (!this.disposed) this.callbacks.onTextures(status); });
      if (this.disposed) { Object.values(textures).forEach((texture) => texture.dispose()); return; }
      this.textures = textures;
      const geometry = new SphereGeometry(1, 160, 96);
      const uniforms = {
        uDay: { value: textures.day }, uNight: { value: textures.night },
        uNormal: { value: textures.normal }, uSpecular: { value: textures.specular },
        uClouds: { value: textures.clouds }, uSun: this.sunUniform,
        uCloudOffset: this.cloudOffset, uCloudsEnabled: this.cloudsEnabled, ...this.foldUniforms,
      };
      this.earth = new Mesh(geometry, new ShaderMaterial({ uniforms, vertexShader: sphereVertex, fragmentShader: earthFragment }));
      this.earth.name = 'earth-surface';
      this.scene.add(this.earth);
      this.clouds = new Mesh(new SphereGeometry(1.0018, 160, 96), new ShaderMaterial({
        uniforms, vertexShader: sphereVertex, fragmentShader: cloudFragment,
        transparent: true, depthWrite: false,
      }));
      this.clouds.name = 'cloud-shell';
      this.clouds.renderOrder = 1;
      this.clouds.visible = this.cloudsEnabled.value === 1;
      this.scene.add(this.clouds);
      const atmosphere = new Mesh(new SphereGeometry(1 + 100 / 6371, 160, 96), new ShaderMaterial({
        uniforms: { uSun: this.sunUniform, ...this.foldUniforms }, vertexShader: sphereVertex, fragmentShader: atmosphereFragment,
        transparent: true, depthWrite: false,
      }));
      atmosphere.name = 'thin-atmosphere';
      atmosphere.renderOrder = 2;
      this.scene.add(atmosphere);
      this.rebuildMarkers();
      await this.renderer.compileAsync(this.scene, this.camera);
      if (!this.disposed) this.ready = true;
    } catch (error) {
      if (!this.disposed) this.callbacks.onError(error instanceof Error ? error.message : '观测视野初始化失败');
    }
  }

  setTimeMode(mode: TimeMode) { this.clock.setMode(mode); }
  setClouds(enabled: boolean) { this.cloudsEnabled.value = enabled ? 1 : 0; if (this.clouds) this.clouds.visible = enabled; }
  setNoise(enabled: boolean) { this.noiseEnabled = enabled; }
  setQuakes(enabled: boolean) { this.quakesEnabled = enabled; }
  setHighlight(id: string | null) { this.highlightedId = id; }
  setCalibration(enabled: boolean) { this.calibrating = enabled; this.rebuildMarkers(); }

  setNews(events: NoiseEvent[]) {
    this.newsEvents = events;
    if (!this.initialViewChosen && events.length && !this.userNavigated && !this.calibrating && !this.cruise && this.sequence.sample(performance.now()).phase === 'idle') {
      this.initialViewChosen = true;
      const target = chooseSignalView(events, solarPosition(this.clock.read()).direction).multiplyScalar(this.normalDistance);
      this.returnPosition.copy(target);
      if (this.ready) this.moveCamera(target, 1600);
      else this.camera.position.copy(target);
    }
    this.rebuildMarkers();
  }

  private rebuildMarkers() {
    if (this.noiseGroup) {
      this.scene.remove(this.noiseGroup);
      this.markers[0]?.mesh.geometry.dispose();
      this.markers.forEach(({ mesh }) => mesh.material.dispose());
    }
    const events = this.calibrating ? [...MOCK_EVENTS.slice(0, 3), ...this.newsEvents] : this.newsEvents;
    const noise = createNoiseMarkers(events);
    this.markers = noise.markers;
    this.noiseGroup = noise.group;
    this.scene.add(noise.group);
    this.resizeSignals();
  }

  private resizeSignals() {
    const viewport = this.renderer.getDrawingBufferSize(new Vector2());
    for (const marker of this.markers) {
      marker.mesh.material.uniforms.uViewport.value.copy(viewport);
      marker.mesh.material.uniforms.uDpr.value = this.renderer.getPixelRatio();
    }
  }

  setWindSamples(samples: WindSample[]) {
    if (this.windField) {
      this.scene.remove(this.windField);
      this.windField.geometry.dispose();
      this.windField.material.dispose();
    }
    this.windSampleCount = samples.length;
    this.windField = createWindField(samples);
    this.scene.add(this.windField);
  }

  setWind(enabled: boolean) { this.windEnabled = enabled; }

  setCruise(enabled: boolean) {
    if (this.sequence.sample(performance.now()).phase !== 'idle' || this.cruise === enabled) return;
    this.cruise = enabled;
    if (enabled) {
      this.cruiseCamera.copy(this.camera.position);
      this.cruiseStarted = performance.now();
      const sun = solarPosition(this.clock.read()).direction;
      const right = new Vector3(0, 1, 0).cross(sun).normalize();
      const up = sun.clone().cross(right).normalize();
      this.cruiseAngle = Math.atan2(this.camera.position.dot(up), this.camera.position.dot(right));
      this.moveCamera(right.multiplyScalar(Math.cos(this.cruiseAngle)).addScaledVector(up, Math.sin(this.cruiseAngle)).setLength(this.normalDistance), 3200);
    } else this.moveCamera(this.cruiseCamera, 1800);
  }

  releaseFoil() {
    if (!this.ready || !this.sequence.start(performance.now())) return false;
    this.cruise = false;
    this.sequenceCamera.copy(this.camera.position);
    this.camera.updateMatrixWorld();
    this.foldUniforms.uFoldRight.value.setFromMatrixColumn(this.camera.matrixWorld, 0).normalize();
    this.foldUniforms.uFoldUp.value.setFromMatrixColumn(this.camera.matrixWorld, 1).normalize();
    this.foldUniforms.uFoldNormal.value.copy(this.camera.position).normalize();
    this.foil.quaternion.copy(this.camera.quaternion);
    this.moveCamera(this.camera.position.clone().setLength(8.8), 2400);
    return true;
  }

  restoreDimension() {
    if (!this.sequence.restore(performance.now())) return false;
    this.moveCamera(this.sequenceCamera.clone(), RESTORE_DURATION);
    return true;
  }

  setDeepSpace(deep: boolean) {
    if (deep) this.returnPosition.copy(this.camera.position).setLength(Math.min(this.camera.position.length(), 10));
    const target = deep ? this.camera.position.clone().setLength(680) : this.returnPosition.clone();
    this.moveCamera(target, 2800);
  }

  focusCoordinates(coordinates: Coordinates) {
    this.moveCamera(toVector(coordinates, this.normalDistance), 1100);
    this.callbacks.onPick(coordinates);
  }

  private moveCamera(target: Vector3, duration: number) {
    this.userNavigated = true;
    this.cameraTween = { from: this.camera.position.clone(), to: target, started: performance.now(), duration };
    this.controls.enabled = false;
  }

  private resize = () => {
    this.width = Math.max(1, this.host.clientWidth);
    this.height = Math.max(1, this.host.clientHeight);
    const aspect = this.width / this.height;
    this.camera.aspect = aspect;
    this.camera.fov = aspect < 1 ? 2 * Math.atan(Math.tan(35 * Math.PI / 360) / aspect) * 180 / Math.PI : 35;
    this.camera.updateProjectionMatrix();
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(this.width, this.height);
    this.resizeSignals();
  };

  private frame = (now: number) => {
    if (this.disposed || !this.hostVisible || !this.tabVisible) { this.animation = 0; return; }
    this.animation = requestAnimationFrame(this.frame);
    const dimensional = this.sequence.sample(now);
    const utc = this.clock.read(now);
    const solar = solarPosition(utc);
    this.foldUniforms.uFold.value = dimensional.fold;
    const activeSequence = dimensional.phase !== 'idle';
    if (this.earth) this.earth.material.side = dimensional.fold > 0 ? DoubleSide : FrontSide;
    this.foil.visible = dimensional.foil > 0.001;
    this.foil.material.uniforms.uAlpha.value = dimensional.foil;
    this.foil.position.copy(this.foldUniforms.uFoldRight.value).multiplyScalar(2.6 - Math.min(1, dimensional.progress / 0.23) * 1.65)
      .addScaledVector(this.foldUniforms.uFoldUp.value, 0.38).addScaledVector(this.foldUniforms.uFoldNormal.value, 0.65);
    this.sunUniform.value.copy(solar.direction);
    this.cloudOffset.value = ((utc / 86400000 / 45) % 1 + 1) % 1;
    if (this.cameraTween) {
      const { from, to, started, duration } = this.cameraTween;
      const progress = Math.min(1, (now - started) / duration);
      const t = progress * progress * (3 - 2 * progress);
      const radius = Math.exp(Math.log(from.length()) * (1 - t) + Math.log(to.length()) * t);
      const fromDirection = from.clone().normalize();
      const toDirection = to.clone().normalize();
      const rotation = new Quaternion().setFromUnitVectors(fromDirection, toDirection);
      this.camera.position.copy(fromDirection.applyQuaternion(new Quaternion().slerp(rotation, t)).multiplyScalar(radius));
      if (progress === 1) { this.cameraTween = undefined; this.controls.enabled = true; }
    }
    if (this.cruise && !this.cameraTween) {
      const right = new Vector3(0, 1, 0).cross(solar.direction).normalize();
      const up = solar.direction.clone().cross(right).normalize();
      const angle = this.cruiseAngle + Math.max(0, now - this.cruiseStarted - 3200) * 0.0000015;
      this.camera.position.copy(right.multiplyScalar(Math.cos(angle)).addScaledVector(up, Math.sin(angle)).setLength(this.normalDistance));
    }
    this.controls.enabled = !this.cameraTween && !this.cruise && !activeSequence;
    this.controls.update();
    const distance = this.camera.position.length();
    const elapsed = this.frozenNoiseTime ?? (now - this.startedAt) / 1000;
    if (dimensional.phase === 'idle' || dimensional.phase === 'delivery' || dimensional.phase === 'restoring') this.noiseTime = elapsed;
    const activeNoise = updateNoise(this.markers, this.noiseTime, distance, this.camera.position, this.noiseEnabled, this.calibrating, dimensional.fold, { quakesEnabled: this.quakesEnabled, highlightedId: this.highlightedId });
    const activeQuakes = this.markers.filter(marker => marker.event.kind === 'quake' && marker.alpha > 0.06 && this.project(marker.event).visible).length;
    if (!activeSequence) {
      if (activeNoise > this.previousActivity.news) this.callbacks.onPulse?.('news');
      else if (activeQuakes > this.previousActivity.quake) this.callbacks.onPulse?.('quake');
    }
    this.previousActivity = { news: activeNoise, quake: activeQuakes };
    this.lunarReference.material.opacity = Math.min(0.15, Math.max(0, (distance - 100) / 250) * 0.15);
    this.lunarReference.visible = distance > 100 && !activeSequence && !this.cruise;
    if (this.windField) {
      const opacity = this.windEnabled ? Math.max(0, 1 - (distance - 10) / 20) * 0.3 * (1 - dimensional.fold) : 0;
      this.windField.visible = opacity > 0;
      this.windField.material.uniforms.uOpacity.value = Math.min(0.3, opacity);
      if (dimensional.phase === 'idle' || dimensional.phase === 'delivery' || dimensional.phase === 'restoring') this.windTime = elapsed;
      this.windField.material.uniforms.uTime.value = this.windTime;
    }
    this.renderer.render(this.scene, this.camera);
    if (now - this.lastTelemetry > 200) {
      this.lastTelemetry = now;
      this.callbacks.onTelemetry({ utc, solar: { lat: solar.lat, lon: solar.lon }, distanceKm: (distance - 1) * 6371, activeNoise, activeQuakes, dimensional, silent: distance >= 31, ready: this.ready });
    }
  };

  private syncLoop() {
    if (this.disposed) return;
    const shouldRun = this.hostVisible && this.tabVisible;
    if (shouldRun && !this.animation) {
      this.animation = requestAnimationFrame(this.frame);
    } else if (!shouldRun && this.animation) {
      cancelAnimationFrame(this.animation);
      this.animation = 0;
    }
  }

  private onVisibilityChange = () => {
    this.tabVisible = document.visibilityState !== 'hidden';
    this.syncLoop();
  };

  // Allow wheel scrolling in the dark space around Earth to scroll naturally to the Chaos Observatory below.
  private onWheelCapture = (event: WheelEvent) => {
    if (event.ctrlKey || event.metaKey) return;
    const pointer = this.pointerFromClient(event.clientX, event.clientY);
    if (!this.hitEarth(pointer)) {
      event.stopImmediatePropagation();
    }
  };

  private pointerFromClient(clientX: number, clientY: number) {
    const rect = this.renderer.domElement.getBoundingClientRect();
    return new Vector2((clientX - rect.left) / rect.width * 2 - 1, -(clientY - rect.top) / rect.height * 2 + 1);
  }

  private pointerCoordinates(event: PointerEvent) {
    return this.pointerFromClient(event.clientX, event.clientY);
  }

  private hitEarth(pointer: Vector2) {
    if (!this.earth) return undefined;
    this.raycaster.setFromCamera(pointer, this.camera);
    return this.raycaster.intersectObject(this.earth)[0];
  }

  private hitEvent(pointer: Vector2) {
    if ((!this.noiseEnabled && !this.quakesEnabled) || this.camera.position.length() >= 31) return undefined;
    let best: NoiseMarker | undefined;
    let bestDistance = 13;
    for (const marker of this.markers) {
      if (marker.alpha < 0.06) continue;
      const facing = marker.mesh.position.clone().normalize().dot(this.camera.position.clone().sub(marker.mesh.position).normalize());
      if (facing <= 0.03) continue;
      const projected = marker.mesh.position.clone().project(this.camera);
      const distance = Math.hypot((projected.x - pointer.x) * this.width / 2, (projected.y - pointer.y) * this.height / 2);
      if (distance < bestDistance) { best = marker; bestDistance = distance; }
    }
    return best?.event;
  }

  private onNavigation = () => { this.userNavigated = true; };
  private onPointerDown = (event: PointerEvent) => { this.pointerStart.set(event.clientX, event.clientY); };
  private onPointerLeave = () => {
    this.hoverId = '';
    this.surfaceHovered = false;
    this.callbacks.onHover?.(null);
    this.callbacks.onSurfaceHover?.(false);
  };
  private onPointerMove = (event: PointerEvent) => {
    if (!this.ready || !this.controls.enabled) return;
    const pointer = this.pointerCoordinates(event);
    const onSurface = Boolean(this.hitEarth(pointer));
    if (this.surfaceHovered !== onSurface) this.callbacks.onSurfaceHover?.(onSurface);
    this.surfaceHovered = onSurface;
    if (event.buttons) return;
    const noise = this.hitEvent(pointer);
    this.renderer.domElement.style.cursor = noise ? 'pointer' : onSurface ? 'grab' : 'default';
    if ((noise?.id ?? '') !== this.hoverId) this.callbacks.onHover?.(noise ?? null);
    this.hoverId = noise?.id ?? '';
  };
  private onPointerUp = (event: PointerEvent) => {
    if (this.pointerStart.distanceTo(new Vector2(event.clientX, event.clientY)) > 5 || !this.ready || !this.controls.enabled) return;
    const pointer = this.pointerCoordinates(event);
    const noise = this.hitEvent(pointer);
    if (noise) { this.callbacks.onEvent(noise); return; }
    const hit = this.hitEarth(pointer);
    if (hit) this.callbacks.onPick(toCoordinates(hit.point));
  };
  private onContextLost = (event: Event) => { event.preventDefault(); this.callbacks.onError('图形上下文中断，请重新载入观测终端。'); };

  diagnostics() {
    const solar = solarPosition(this.clock.read());
    return {
      ready: this.ready, utc: this.clock.read(), solar: { lat: solar.lat, lon: solar.lon },
      cameraDistance: this.camera.position.length(), far: this.camera.far,
      dimensional: this.sequence.sample(performance.now()), cruise: this.cruise, controlsEnabled: this.controls.enabled,
      lunar: { visible: this.lunarReference.visible, opacity: this.lunarReference.material.opacity, radius: this.lunarReference.geometry.attributes.position.getX(0) },
      foil: { visible: this.foil.visible, alpha: this.foil.material.uniforms.uAlpha.value },
      cloudOffset: this.cloudOffset.value, clouds: this.clouds?.visible,
      noise: this.markers.map((marker) => ({ id: marker.event.id, kind: marker.event.kind ?? 'news', alpha: marker.alpha, drawn: marker.mesh.visible, sizeCss: marker.mesh.material.uniforms.uSize.value, highlighted: marker.mesh.material.uniforms.uHighlight.value, ...this.project(marker.event.displayCoordinates ?? marker.event, 1.018) })),
      signalLayers: { news: this.noiseEnabled, quakes: this.quakesEnabled, initialViewChosen: this.initialViewChosen },
      wind: { enabled: this.windEnabled, visible: this.windField?.visible ?? false, samples: this.windSampleCount },
      textures: this.textures && Object.fromEntries(Object.entries(this.textures).map(([key, texture]) => {
        const image = texture.image as { width: number; height: number; currentSrc?: string };
        return [key, { width: image.width, height: image.height, source: image.currentSrc ?? 'embedded' }];
      })),
      calls: this.renderer.info.render.calls, triangles: this.renderer.info.render.triangles,
      programs: this.renderer.info.programs?.map((program) => ({ name: program.name, runnable: this.renderer.getContext().getProgramParameter(program.program, this.renderer.getContext().LINK_STATUS) as boolean })),
    };
  }

  project(coordinates: Coordinates, radius = 1) {
    this.camera.updateMatrixWorld();
    const normal = toVector(coordinates);
    const facing = normal.dot(this.camera.position.clone().sub(normal).normalize()) > 0.025;
    const ndc = normal.multiplyScalar(radius).project(this.camera);
    return { x: (ndc.x + 1) * this.width / 2, y: (1 - ndc.y) * this.height / 2, visible: facing, uv: { u: (coordinates.lon + 180) / 360, v: (coordinates.lat + 90) / 180 } };
  }

  pickAt(x: number, y: number) {
    const hit = this.hitEarth(new Vector2(x / this.width * 2 - 1, 1 - y / this.height * 2));
    return hit ? { ...toCoordinates(hit.point), uv: hit.uv } : null;
  }

  freezeNoise(seconds: number | null) { this.frozenNoiseTime = seconds; }

  dispose() {
    this.disposed = true;
    cancelAnimationFrame(this.animation);
    this.animation = 0;
    this.resizeObserver.disconnect();
    this.visibilityObserver?.disconnect();
    if (typeof document !== 'undefined') document.removeEventListener('visibilitychange', this.onVisibilityChange);
    this.renderer.domElement.removeEventListener('wheel', this.onWheelCapture, { capture: true });
    this.controls.removeEventListener('start', this.onNavigation);
    this.controls.dispose();
    this.renderer.domElement.removeEventListener('pointerdown', this.onPointerDown);
    this.renderer.domElement.removeEventListener('pointermove', this.onPointerMove);
    this.renderer.domElement.removeEventListener('pointerup', this.onPointerUp);
    this.renderer.domElement.removeEventListener('pointerleave', this.onPointerLeave);
    this.renderer.domElement.removeEventListener('webglcontextlost', this.onContextLost);
    const geometries = new Set<SphereGeometry>();
    this.scene.traverse((object) => {
      if ('geometry' in object) geometries.add(object.geometry as SphereGeometry);
      if ('material' in object) {
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        materials.forEach((material: ShaderMaterial) => material.dispose());
      }
    });
    geometries.forEach((geometry) => geometry.dispose());
    if (this.textures) Object.values(this.textures).forEach((texture) => texture.dispose());
    this.noiseGroup?.clear();
    this.renderer.dispose();
    this.renderer.domElement.remove();
  }
}
