import { afghanistan, poland, togo } from '../mocks/Country';
import { selectCountriesIncludesA } from '../task2/Task2';

describe('Tests for Task 2: Select only countries that include "A" in name', () => {
  test('Data with "A" in name', () => {
    expect(selectCountriesIncludesA([...afghanistan, ...poland])).toHaveLength(2);
  });

  test('Data with and without "A" in name', () => {
    expect(selectCountriesIncludesA([...afghanistan, ...togo])).toHaveLength(1);
  });

  test('Data without "A" in name', () => {
    expect(selectCountriesIncludesA([...togo])).toHaveLength(0);
  });
});
