import { countriesStatsMock } from '../mocks/countriesStats';
import { getCountryName } from './Task3';

describe('Tests for Task 3: Sort by countriesStats object keys', () => {
  test('Choose first sort by population', () => {
    expect(getCountryName(countriesStatsMock, { path: 'population', place: 1, sort: 'desc' })).toBe('other');
  });

  test('Choose 2nd sort by population', () => {
    expect(getCountryName(countriesStatsMock, { path: 'population', place: 2, sort: 'desc' })).toBe('AU');
  });

  test('Choose first sort by population', () => {
    expect(getCountryName(countriesStatsMock, { path: 'area', place: 1, sort: 'desc' })).toBe('EU,NAFTA');
  });

  test('Choose last place sort by countries', () => {
    expect(getCountryName(countriesStatsMock, { path: 'countries', place: 1, sort: 'asc' })).toBe('NAFTA');
  });
});
