import { afghanistan, french, germany, poland, togo } from '../mocks/Country';
import { sortByPopulationDesc } from '../task2/Task2';

describe('Tests for Task 2: Sort array with EU countries by population (desc)', () => {
  test('Correct data', () => {
    const arrayToSort = [...togo, ...germany, ...poland, ...afghanistan, ...french];
    const sortedArrayNames = [...germany, ...french, ...afghanistan, ...poland, ...togo];

    arrayToSort.forEach((_, i) => {
      expect(sortByPopulationDesc(arrayToSort)[i].name).toBe(sortedArrayNames[i].name);
    });
  });
});
