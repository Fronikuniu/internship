import { test1, test2, test3 } from '../mocks/Country';
import { calculateSum5MostPopulateCountries } from '../task2/Task2';

describe('Tests for Task 2: Calculate populations from 5 most populous countries', () => {
  test('Add population from 3 objects', () => {
    expect(calculateSum5MostPopulateCountries([...test1, ...test2, ...test3])).toBe(204364185);
  });

  test('Undefined data', () => {
    expect(calculateSum5MostPopulateCountries(undefined)).toBe('❗️ Enter correct data! ❗️');
  });

  test('Null data', () => {
    expect(calculateSum5MostPopulateCountries(null)).toBe('❗️ Enter correct data! ❗️');
  });

  test('String data', () => {
    expect(calculateSum5MostPopulateCountries('asd')).toBe('❗️ Enter correct data! ❗️');
  });

  test('Number data', () => {
    expect(calculateSum5MostPopulateCountries(123)).toBe('❗️ Enter correct data! ❗️');
  });
});
