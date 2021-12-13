import { afghanistan, french, germany, poland, togo } from '../mocks/Country';
import { calculateSumCountriesByType } from './Task2';

describe('Tests for Task 2: Calculate [type] from countries', () => {
  test('Add population from 5 first countries', () => {
    expect(calculateSumCountriesByType([afghanistan, germany, togo, poland, french], 'population', 5)).toBe(235789987);
  });

  test('Add population from 2 first countries', () => {
    expect(calculateSumCountriesByType([afghanistan, germany, togo, poland, french], 'population', 2)).toBe(122168866);
  });

  test('Add areas from 3 first countries', () => {
    expect(calculateSumCountriesByType([afghanistan, germany, togo, poland, french], 'area', 3)).toBe(1066129);
  });
});
