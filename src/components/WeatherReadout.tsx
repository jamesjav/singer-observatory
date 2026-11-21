import { formatCoordinates, toVector } from '../astronomy/coordinates';
import type { Coordinates } from '../astronomy/coordinates';
import type { WeatherState } from '../data/providers/types';
import { weatherDescription } from '../data/providers/meteo';

export function WeatherReadout({ picked, weather, solar, className = '' }: { picked: Coordinates | null; weather: WeatherState; solar: Coordinates; className?: string }) {
  const data = weather.reading;
  const incidence = picked ? toVector(picked).dot(toVector(solar)) : null;
  const light = incidence === null ? '' : Math.abs(incidence) < 0.06 ? '晨昏带' : incidence > 0 ? '昼面' : '夜面';
  return <div className={`weather-slot ${className}`} data-weather-state={weather.state}>
    <span className="eyebrow">薄层大气扰动 <span className="weather-mode">{weather.state === 'live' ? '实况模型' : weather.state === 'cached' ? '缓存' : weather.state === 'loading' ? '探测中' : ''}</span></span>
    <p className="weather-coordinate">{picked ? formatCoordinates(picked) : '点选地表，定位观测切片'}{light && <span className="weather-light"> · {light}</span>}</p>
    {data ? <div className="weather-values">
      <p>低层流场 {data.windSpeedMs.toFixed(1)} m/s · {Math.round(data.windDirectionDeg)}°</p>
      <p>热态 {data.temperatureC.toFixed(1)}°C <span>云覆 {Math.round(data.cloudCoverPercent)}%</span></p>
      <p>压强 {data.surfacePressureHpa.toFixed(0)} hPa <span>降水 {data.precipitationMm.toFixed(1)} mm</span></p>
      <p className="weather-description">{weatherDescription(data.weatherCode)} · {data.observedAt.slice(11, 16)} UTC</p>
    </div> : null}
    <span title={weather.message} className={`micro-copy ${weather.state === 'cached' || weather.state === 'unavailable' ? 'data-warning' : ''}`}>{weather.state === 'live' ? 'Open-Meteo · 当前模型，非站点实测' : weather.message.split('；')[0] || (picked ? '等待低层大气回波' : 'Open-Meteo · 当前模型场')}</span>
  </div>;
}
