import { acronyms } from '../mocks/Acronyms';
import { sortObject } from './Task3';

describe('Tests for Task 2: Select only [type] that belong to the [value]', () => {
  test('Choose 1 sort by population', () => {
    expect(sortObject(acronyms, { value: 'population', place: 1, sort: 'desc' })).toBe('other');
  });

  test('Choose 2nd sort by population', () => {
    expect(sortObject(acronyms, { value: 'population', place: 2, sort: 'desc' })).toBe('AU');
  });

  test('Choose 1nd sort by population', () => {
    expect(sortObject(acronyms, { value: 'area', place: 1, sort: 'desc' })).toBe('EU,NAFTA');
  });

  test('Choose last place sort by countries', () => {
    expect(sortObject(acronyms, { value: 'countries', place: 1, sort: 'asc' })).toBe('NAFTA');
  });
});
