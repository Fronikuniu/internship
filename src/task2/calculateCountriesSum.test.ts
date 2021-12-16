import { afghanistan, french, germany, poland, togo } from '../mocks/Country';
import { calculateCountriesSum } from './Task2';

describe('Tests for Task 2: Calculate countries', () => {
  test('Add population from 5 first countries', () => {
    expect(calculateCountriesSum([afghanistan, germany, togo, poland, french], { path: 'population', limit: 5 })).toBe(235789987);
  });

  test('Add population from 2 first countries', () => {
    expect(calculateCountriesSum([afghanistan, germany, togo, poland, french], { path: 'population', limit: 2 })).toBe(122168866);
  });

  test('Add areas from 3 first countries', () => {
    expect(calculateCountriesSum([afghanistan, germany, togo, poland, french], { path: 'area', limit: 3 })).toBe(1066129);
  });
});
