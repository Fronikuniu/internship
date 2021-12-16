import { afghanistan, french, germany, poland, togo } from '../mocks/Country';
import { sortCountries } from './Task2';

describe('Tests for Task 2: Sort array countries', () => {
  test('Sort desc by population', () => {
    const arrayToSort = [togo, germany, poland, afghanistan, french];
    const sortedArrayNamesDesc = ['Germany', 'France', 'Afghanistan', 'Poland', 'Togo'];
    const sortedArrayByFunc = sortCountries(arrayToSort, { path: 'population', sortType: 'desc' });

    arrayToSort.forEach((_, i) => {
      expect(sortedArrayByFunc[i].name).toBe(sortedArrayNamesDesc[i]);
    });
  });

  test('Sort asc by population', () => {
    const arrayToSort = [togo, germany, poland, afghanistan, french];
    const sortedArrayNamesAsc = ['Togo', 'Poland', 'Afghanistan', 'France', 'Germany'];
    const sortedArrayByFunc = sortCountries(arrayToSort, { path: 'population', sortType: 'asc' });

    arrayToSort.forEach((_, i) => {
      expect(sortedArrayByFunc[i].name).toBe(sortedArrayNamesAsc[i]);
    });
  });

  test('Sort desc by area', () => {
    const arrayToSort = [togo, germany, poland, afghanistan, french];
    const sortedArrayNamesDesc = ['Afghanistan', 'France', 'Germany', 'Poland', 'Togo'];
    const sortedArrayByFunc = sortCountries(arrayToSort, { path: 'area', sortType: 'desc' });

    arrayToSort.forEach((_, i) => {
      expect(sortedArrayByFunc[i].name).toBe(sortedArrayNamesDesc[i]);
    });
  });

  test('Sort asc by area', () => {
    const arrayToSort = [togo, germany, poland, afghanistan, french];
    const sortedArrayNamesAsc = ['Togo', 'Poland', 'Germany', 'France', 'Afghanistan'];
    const sortedArrayByFunc = sortCountries(arrayToSort, { path: 'area', sortType: 'asc' });

    arrayToSort.forEach((_, i) => {
      expect(sortedArrayByFunc[i].name).toBe(sortedArrayNamesAsc[i]);
    });
  });
});
