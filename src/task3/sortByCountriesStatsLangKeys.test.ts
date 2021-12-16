import { sortCountriesObjectMock } from '../mocks/countriesStats';
import { sortByCountriesStatsLangKeys } from './Task3';

describe('Tests for Task 3: Sort by countriesStats.languages object keys', () => {
  test('Sort by area - take first item', () => {
    expect(sortByCountriesStatsLangKeys(sortCountriesObjectMock, { value: 'area', place: 1, sort: 'desc' })).toBe('English');
  });

  test('Sort by area - take last item', () => {
    expect(sortByCountriesStatsLangKeys(sortCountriesObjectMock, { value: 'area', place: 1, sort: 'asc' })).toBe('français');
  });

  test('Sort by area - take 3th item', () => {
    expect(sortByCountriesStatsLangKeys(sortCountriesObjectMock, { value: 'area', place: 3, sort: 'desc' })).toBe('Deutsch');
  });

  test('Sort by number of countries - take 1th item', () => {
    expect(sortByCountriesStatsLangKeys(sortCountriesObjectMock, { value: 'area', place: 1, sort: 'desc' })).toBe('English');
  });
});
