import { Vector3 } from 'three';

export interface Coordinates { lat: number; lon: number }
export const DEG = Math.PI / 180;
export const wrapLongitude = (lon: number) => ((lon + 180) % 360 + 360) % 360 - 180;

export function toVector({ lat, lon }: Coordinates, radius = 1): Vector3 {
  const phi = lat * DEG;
  const theta = lon * DEG;
  return new Vector3(radius * Math.cos(phi) * Math.cos(theta), radius * Math.sin(phi), -radius * Math.cos(phi) * Math.sin(theta));
}

export function toCoordinates(point: Vector3): Coordinates {
  const p = point.clone().normalize();
  return { lat: Math.asin(Math.max(-1, Math.min(1, p.y))) / DEG, lon: wrapLongitude(Math.atan2(-p.z, p.x) / DEG) };
}

export function toUV({ lat, lon }: Coordinates) {
  return { u: (lon + 180) / 360, v: (lat + 90) / 180 };
}

export function formatCoordinates({ lat, lon }: Coordinates, digits = 2): string {
  return `${Math.abs(lat).toFixed(digits)}° ${lat >= 0 ? 'N' : 'S'}  /  ${Math.abs(lon).toFixed(digits)}° ${lon >= 0 ? 'E' : 'W'}`;
}
