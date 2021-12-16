import { countriesStatsMock } from '../mocks/countriesStats';
import { sortByCountriesStatsKeys } from './Task3';

describe('Tests for Task 3: Sort by countriesStats object keys', () => {
  test('Choose first sort by population', () => {
    expect(sortByCountriesStatsKeys(countriesStatsMock, { value: 'population', place: 1, sort: 'desc' })).toBe('other');
  });

  test('Choose 2nd sort by population', () => {
    expect(sortByCountriesStatsKeys(countriesStatsMock, { value: 'population', place: 2, sort: 'desc' })).toBe('AU');
  });

  test('Choose first sort by population', () => {
    expect(sortByCountriesStatsKeys(countriesStatsMock, { value: 'area', place: 1, sort: 'desc' })).toBe('EU,NAFTA');
  });

  test('Choose last place sort by countries', () => {
    expect(sortByCountriesStatsKeys(countriesStatsMock, { value: 'countries', place: 1, sort: 'asc' })).toBe('NAFTA');
  });
});
