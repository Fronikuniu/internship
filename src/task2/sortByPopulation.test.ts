import { afghanistan, french, germany, poland, togo } from '../mocks/Country';
import { sortCountriesByType } from './Task2';

describe('Tests for Task 2: Sort array countries by [type] and [sort type]', () => {
  test('Sort desc', () => {
    const arrayToSort = [togo, germany, poland, afghanistan, french];
    const sortedArrayNamesDesc = ['Germany', 'France', 'Afghanistan', 'Poland', 'Togo'];

    arrayToSort.forEach((_, i) => {
      expect(sortCountriesByType(arrayToSort, 'population', 'desc')[i].name).toBe(sortedArrayNamesDesc[i]);
    });
  });

  test('Sort asc', () => {
    const arrayToSort = [togo, germany, poland, afghanistan, french];
    const sortedArrayNamesAsc = ['Togo', 'Poland', 'Afghanistan', 'France', 'Germany'];

    arrayToSort.forEach((_, i) => {
      expect(sortCountriesByType(arrayToSort, 'population', 'asc')[i].name).toBe(sortedArrayNamesAsc[i]);
    });
  });

  test('Sort desc', () => {
    const arrayToSort = [togo, germany, poland, afghanistan, french];
    const sortedArrayNamesAsc = ['Afghanistan', 'France', 'Germany', 'Poland', 'Togo'];

    arrayToSort.forEach((_, i) => {
      expect(sortCountriesByType(arrayToSort, 'area', 'desc')[i].name).toBe(sortedArrayNamesAsc[i]);
    });
  });

  test('Sort desc', () => {
    const arrayToSort = [togo, germany, poland, afghanistan, french];
    const sortedArrayNamesAsc = ['Togo', 'Poland', 'Germany', 'France', 'Afghanistan'];

    arrayToSort.forEach((_, i) => {
      expect(sortCountriesByType(arrayToSort, 'area', 'asc')[i].name).toBe(sortedArrayNamesAsc[i]);
    });
  });
});
