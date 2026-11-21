import type { Coordinates } from '../../astronomy/coordinates';

export type ObservationTag = '局部摩擦' | '灾变扰动' | '秩序震荡' | '技术跃迁' | '表面喧嚣' | '集体焦虑' | '局部冲突' | '资源迁移' | '地壳微震';
export interface NewsItem {
  id: string;
  settlement: string;
  summary: string;
  source: string;
  tag: ObservationTag;
  entropy: number;
  lat: number | null;
  lon: number | null;
  url: string | null;
  publishedAt: string | null;
  collectedAt: string;
  demo: boolean;
  precision: 'reported' | 'city' | 'country' | 'unlocated' | 'reference' | 'seismic';
  kind?: 'news' | 'quake';
  magnitude?: number;
  depthKm?: number;
  displayCoordinates?: Coordinates;
}
export interface NoiseEvent extends NewsItem { lat: number; lon: number }
export interface SourceStatus {
  id: string;
  name: string;
  state: 'online' | 'error';
  count: number;
  checkedAt: string;
  error?: string;
}
export interface NewsSnapshot {
  events: NewsItem[];
  sources: SourceStatus[];
  mode: 'live' | 'cached' | 'demo';
  fetchedAt: string;
  checkedAt: string;
  nextRefreshAt: string;
  warning?: string;
}
export interface NoiseProvider {
  mode: 'simulated' | 'live';
  getEvents(signal?: AbortSignal): Promise<NoiseEvent[]>;
}
export interface WindSample extends Coordinates {
  windSpeedMs: number;
  windDirectionDeg: number;
  observedAt: string;
}
export interface AtmosphericReading extends WindSample {
  temperatureC: number;
  surfacePressureHpa: number;
  cloudCoverPercent: number;
  precipitationMm: number;
  weatherCode: number;
}
export interface WeatherProvider {
  query(coordinates: Coordinates, signal?: AbortSignal): Promise<AtmosphericReading>;
}
export type FeedState = 'idle' | 'loading' | 'live' | 'cached' | 'unavailable';
export interface WeatherState {
  state: FeedState;
  reading: AtmosphericReading | null;
  message: string;
}
export interface WindState {
  state: FeedState;
  samples: WindSample[];
  fetchedAt: string | null;
  message: string;
}
