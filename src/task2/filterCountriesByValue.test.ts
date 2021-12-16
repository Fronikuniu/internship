import { afghanistan, germany, poland, togo } from '../mocks/Country';
import { filterCountriesByValue } from './Task2';

describe('Tests for Task 2: Select only countries that belong to the country', () => {
  test('Data with 1 EU country', () => {
    expect(filterCountriesByValue([afghanistan, poland], { path: 'regionalBlocs.acronym', value: 'EU', contain: true })).toHaveLength(1);
  });

  test('Data with 2 EU country', () => {
    expect(filterCountriesByValue([afghanistan, poland, germany], { path: 'regionalBlocs.acronym', value: 'EU', contain: true })).toHaveLength(2);
  });

  test('Data without EU country', () => {
    expect(filterCountriesByValue([afghanistan, togo], { path: 'regionalBlocs.acronym', value: 'EU', contain: true })).toHaveLength(0);
  });

  test('Data with 1 SAARC country', () => {
    expect(filterCountriesByValue([afghanistan, poland], { path: 'regionalBlocs.acronym', value: 'SAARC', contain: true })).toHaveLength(1);
  });

  test('Data with 1 AU country', () => {
    expect(filterCountriesByValue([afghanistan, poland, togo], { path: 'regionalBlocs.acronym', value: 'AU', contain: true })).toHaveLength(1);
  });

  test('Data without 1 AU country', () => {
    expect(filterCountriesByValue([afghanistan, poland, togo], { path: 'regionalBlocs.acronym', value: 'AU', contain: false })).toHaveLength(2);
  });
});
