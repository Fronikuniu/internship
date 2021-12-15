import { afghanistan, germany, poland, togo } from '../mocks/Country';
import { getAllCountriesByTypeAndValue } from './Task2';

describe('Tests for Task 2: Select only [type] that belong to the [value]', () => {
  test('Data with 1 EU country', () => {
    expect(getAllCountriesByTypeAndValue([afghanistan, poland], { path: 'regionalBlocs.acronym', value: 'EU', contain: true })).toHaveLength(1);
  });

  test('Data with 2 EU country', () => {
    expect(getAllCountriesByTypeAndValue([afghanistan, poland, germany], { path: 'regionalBlocs.acronym', value: 'EU', contain: true })).toHaveLength(2);
  });

  test('Data without EU country', () => {
    expect(getAllCountriesByTypeAndValue([afghanistan, togo], { path: 'regionalBlocs.acronym', value: 'EU', contain: true })).toHaveLength(0);
  });

  test('Data with 1 SAARC country', () => {
    expect(getAllCountriesByTypeAndValue([afghanistan, poland], { path: 'regionalBlocs.acronym', value: 'SAARC', contain: true })).toHaveLength(1);
  });

  test('Data with 1 AU country', () => {
    expect(getAllCountriesByTypeAndValue([afghanistan, poland, togo], { path: 'regionalBlocs.acronym', value: 'AU', contain: true })).toHaveLength(1);
  });

  test('Data without 1 AU country', () => {
    expect(getAllCountriesByTypeAndValue([afghanistan, poland, togo], { path: 'regionalBlocs.acronym', value: 'AU', contain: false })).toHaveLength(2);
  });
});
