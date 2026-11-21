export const EARTH_RADIUS_KM = 6371;
export const LUNAR_ORBIT_RADII = 384400 / EARTH_RADIUS_KM;
const POPULATION_EPOCH = Date.UTC(2026, 0, 1);
export const POPULATION_BASE = 8_300_000_000;
export const POPULATION_GROWTH = 0.0084;
export const POPULATION_NOTE = '示意估算，非人口普查或实时统计：2026-01-01 基数 83 亿，年净自然增速假设 0.84%，按连续复利外推。';
export function estimatedPopulation(utcMs: number) {
  return Math.floor(POPULATION_BASE * Math.exp(POPULATION_GROWTH * (utcMs - POPULATION_EPOCH) / (365.2425 * 86400000)));
}
