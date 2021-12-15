import { countriesStatsMock } from '../mocks/countriesStats';
import { sortObject } from './Task3';

describe('Tests for Task 2: Select only [type] that belong to the [value]', () => {
  test('Choose 1 sort by population', () => {
    expect(sortObject(countriesStatsMock, { value: 'population', place: 1, sort: 'desc' })).toBe('other');
  });

  test('Choose 2nd sort by population', () => {
    expect(sortObject(countriesStatsMock, { value: 'population', place: 2, sort: 'desc' })).toBe('AU');
  });

  test('Choose 1nd sort by population', () => {
    expect(sortObject(countriesStatsMock, { value: 'area', place: 1, sort: 'desc' })).toBe('EU,NAFTA');
  });

  test('Choose last place sort by countries', () => {
    expect(sortObject(countriesStatsMock, { value: 'countries', place: 1, sort: 'asc' })).toBe('NAFTA');
  });
});
