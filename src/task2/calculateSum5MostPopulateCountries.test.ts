import { afghanistan, french, germany, poland, togo } from '../mocks/Country';
import { calculateSum5MostPopulateCountries } from './Task2';

describe('Tests for Task 2: Calculate populations from 5 most populous countries', () => {
  test('Add population from 3 objects', () => {
    expect(calculateSum5MostPopulateCountries([...afghanistan, ...germany, ...togo, ...poland, ...french])).toBe(235789987);
  });
});
