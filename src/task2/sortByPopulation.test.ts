import { afghanistan, french, germany, poland, togo } from '../mocks/Country';
import { sortByPopulation } from './Task2';

describe('Tests for Task 2: Sort array countries by population', () => {
  test('Sort desc', () => {
    const arrayToSort = [...togo, ...germany, ...poland, ...afghanistan, ...french];
    const sortedArrayNamesDesc = ['Germany', 'France', 'Afghanistan', 'Poland', 'Togo'];

    arrayToSort.forEach((_, i) => {
      expect(sortByPopulation(arrayToSort, 'desc')[i].name).toBe(sortedArrayNamesDesc[i]);
    });
  });

  test('Sort asc', () => {
    const arrayToSort = [...togo, ...germany, ...poland, ...afghanistan, ...french];
    const sortedArrayNamesAsc = ['Togo', 'Poland', 'Afghanistan', 'France', 'Germany'];

    arrayToSort.forEach((_, i) => {
      expect(sortByPopulation(arrayToSort, 'asc')[i].name).toBe(sortedArrayNamesAsc[i]);
    });
  });
});
