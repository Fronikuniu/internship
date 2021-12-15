import { sortCountriesObjectMock } from '../mocks/countriesStats';
import { sortObjectLang } from './Task3';

describe('Tests for Task 3: Sort language object items', () => {
  test('Sort by area - take first item', () => {
    expect(sortObjectLang(sortCountriesObjectMock, { value: 'area', place: 1, sort: 'desc' })).toBe('English');
  });

  test('Sort by area - take last item', () => {
    expect(sortObjectLang(sortCountriesObjectMock, { value: 'area', place: 1, sort: 'asc' })).toBe('français');
  });

  test('Sort by area - take 3th item', () => {
    expect(sortObjectLang(sortCountriesObjectMock, { value: 'area', place: 3, sort: 'desc' })).toBe('Deutsch');
  });

  test('Sort by number of countries - take 1th item', () => {
    expect(sortObjectLang(sortCountriesObjectMock, { value: 'area', place: 1, sort: 'desc' })).toBe('English');
  });
});
