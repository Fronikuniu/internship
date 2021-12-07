import { afghanistan, french, germany, poland, togo } from '../mocks/Country';
import { calculateSumPopulateCountries } from './Task2';

describe('Tests for Task 2: Calculate populations from countries', () => {
  test('Add population from 5 countries', () => {
    expect(calculateSumPopulateCountries([...afghanistan, ...germany, ...togo, ...poland, ...french], 5)).toBe(235789987);
  });

  test('Add population from 2 countries', () => {
    expect(calculateSumPopulateCountries([...afghanistan, ...germany, ...togo, ...poland, ...french], 2)).toBe(122168866);
  });
});
