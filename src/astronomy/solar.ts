import { DEG, toVector, wrapLongitude } from './coordinates';

export function solarPosition(utcMs: number) {
  const julianDay = utcMs / 86400000 + 2440587.5;
  const t = (julianDay - 2451545) / 36525;
  const meanLongitude = (280.46646 + t * (36000.76983 + 0.0003032 * t)) % 360;
  const anomaly = (357.52911 + t * (35999.05029 - 0.0001537 * t)) * DEG;
  const equation = Math.sin(anomaly) * (1.914602 - t * (0.004817 + 0.000014 * t))
    + Math.sin(2 * anomaly) * (0.019993 - 0.000101 * t) + Math.sin(3 * anomaly) * 0.000289;
  const omega = (125.04 - 1934.136 * t) * DEG;
  const apparentLongitude = (meanLongitude + equation - 0.00569 - 0.00478 * Math.sin(omega)) * DEG;
  const obliquity = (23 + (26 + (21.448 - t * (46.815 + t * (0.00059 - t * 0.001813))) / 60) / 60
    + 0.00256 * Math.cos(omega)) * DEG;
  const rightAscension = Math.atan2(Math.cos(obliquity) * Math.sin(apparentLongitude), Math.cos(apparentLongitude)) / DEG;
  const lat = Math.asin(Math.sin(obliquity) * Math.sin(apparentLongitude)) / DEG;
  const gmst = 280.46061837 + 360.98564736629 * (julianDay - 2451545) + 0.000387933 * t * t - t * t * t / 38710000;
  const equationOfEquinoxes = -0.00478 * Math.sin(omega) * Math.cos(obliquity);
  const lon = wrapLongitude(rightAscension - gmst - equationOfEquinoxes);
  const eccentricity = 0.016708634 - t * (0.000042037 + 0.0000001267 * t);
  const trueAnomaly = anomaly + equation * DEG;
  const distanceAu = 1.000001018 * (1 - eccentricity * eccentricity) / (1 + eccentricity * Math.cos(trueAnomaly));
  return { lat, lon, direction: toVector({ lat, lon }), julianDay, distanceAu, lightSeconds: distanceAu * 499.004784 };
}
