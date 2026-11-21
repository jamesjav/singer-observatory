import { describe, expect, it } from 'vitest';
import type { NewsItem } from '../src/data/providers/types.ts';
import { GAZETTEER, mapPlace, withDisplayCoordinates } from './gazetteer.ts';

const event = (id: string, lat: number | null = 51.5074, lon: number | null = -0.1278): NewsItem => ({
  id, settlement: '伦敦', summary: id, source: 'test', tag: '表面喧嚣', entropy: 0.2,
  lat, lon, precision: lat === null ? 'unlocated' : 'city', url: null, publishedAt: null,
  collectedAt: '2026-11-21T00:00:00.000Z', demo: false,
});

describe('bilingual geographical dictionary', () => {
  it('contains 150–250 distinct, valid country/city entries (target 180–220)', () => {
    expect(GAZETTEER.length).toBeGreaterThanOrEqual(180);
    expect(GAZETTEER.length).toBeLessThanOrEqual(220);
    expect(new Set(GAZETTEER.map(place => place.name)).size).toBe(GAZETTEER.length);
    for (const place of GAZETTEER) {
      expect(['country', 'city']).toContain(place.kind);
      expect(Number.isFinite(place.lat) && Math.abs(place.lat) <= 90).toBe(true);
      expect(Number.isFinite(place.lon) && Math.abs(place.lon) <= 180).toBe(true);
      expect(place.aliases.some(alias => /\p{Script=Han}/u.test(alias))).toBe(true);
      expect(place.aliases.some(alias => /[a-z]/i.test(alias))).toBe(true);
      if (place.kind === 'country') expect(place.aliases.every(alias => !/^[A-Z]{2,3}$/.test(alias))).toBe(true);
    }
  });

  it.each([
    ['London', '伦敦', 51.5074, -0.1278], ['倫敦', '伦敦', 51.5074, -0.1278],
    ['伦敦', '伦敦', 51.5074, -0.1278], ['Tokyo', '东京', 35.6762, 139.6503],
    ['東京', '东京', 35.6762, 139.6503], ['东京', '东京', 35.6762, 139.6503],
    ['New York', '纽约', 40.7128, -74.006], ['New York City', '纽约', 40.7128, -74.006],
    ['NY', '纽约', 40.7128, -74.006], ['NYC', '纽约', 40.7128, -74.006],
    ['纽约', '纽约', 40.7128, -74.006], ['紐約', '纽约', 40.7128, -74.006],
  ])('recognizes %s with the real city centre', (text, name, lat, lon) => {
    expect(mapPlace(text)).toEqual({ name, lat, lon, precision: 'city' });
  });

  it('prefers cities to countries and longest specific aliases', () => {
    expect(mapPlace('United States talks in New York City')?.name).toBe('纽约');
    expect(mapPlace('南苏丹与苏丹会谈')?.name).toBe('南苏丹');
    expect(mapPlace('Papua New Guinea flood')?.name).toBe('巴布亚新几内亚');
    expect(mapPlace('Tokyo and New York City')?.name).toBe('纽约');
    expect(mapPlace('Germany election')?.precision).toBe('country');
    expect(mapPlace('法國與德國')?.name).toBe('法国');
  });

  it.each(['Nothing geographical', 'Atlantis', 'Londoner', 'Tokyoite', 'New Yorkshire',
    'help us now', 'US markets', 'UK inflation', 'ny', 'Georgia and Jordan meet Chad',
    'Michael Jordan scores', 'Paris Hilton interview', 'Jack London novel', 'George Washington biography'])('does not guess a location for %s', text => {
    expect(mapPlace(text)).toBeNull();
  });

  it('accepts bounded English names, case-insensitively, and geographic qualifiers', () => {
    expect(mapPlace("(london)'s mayor")?.name).toBe('伦敦');
    expect(mapPlace('Republic of Georgia')?.name).toBe('格鲁吉亚');
    expect(mapPlace('Kingdom of Jordan')?.name).toBe('约旦');
    expect(mapPlace('Washington, D.C.')?.name).toBe('华盛顿');
    expect(mapPlace('xLondon') ?? mapPlace('London_2')).toBeNull();
  });
});

describe('display-only duplicate offsets', () => {
  it('offsets only exact duplicate points without changing original lat/lon', () => {
    const original = [event('b'), event('a'), event('solo', 35, 139), event('none', null, null)];
    const result = withDisplayCoordinates(original);
    for (let index = 0; index < 2; index++) {
      const item = result[index];
      expect(item.lat).toBe(original[index].lat);
      expect(item.lon).toBe(original[index].lon);
      expect(Math.hypot(item.displayCoordinates!.lat - item.lat!, item.displayCoordinates!.lon - item.lon!)).toBeLessThan(0.05);
      expect(item.displayCoordinates).not.toEqual({ lat: item.lat, lon: item.lon });
    }
    expect(result[2].displayCoordinates).toBeUndefined();
    expect(result[3].displayCoordinates).toBeUndefined();
    expect(original.every(item => item.displayCoordinates === undefined)).toBe(true);
  });

  it('is deterministic, order-independent, and bounded for large groups', () => {
    const original = Array.from({ length: 160 }, (_, index) => event(`id-${index}`));
    const forward = withDisplayCoordinates(original);
    const reversed = withDisplayCoordinates([...original].reverse());
    expect(new Map(forward.map(item => [item.id, item.displayCoordinates])))
      .toEqual(new Map(reversed.map(item => [item.id, item.displayCoordinates])));
    expect(withDisplayCoordinates(forward)).toEqual(forward);
    for (const item of forward) {
      expect(Math.hypot(item.displayCoordinates!.lat - item.lat!, item.displayCoordinates!.lon - item.lon!)).toBeLessThan(0.05);
    }
    expect(new Set(forward.map(item => JSON.stringify(item.displayCoordinates))).size).toBe(160);
  });
});
