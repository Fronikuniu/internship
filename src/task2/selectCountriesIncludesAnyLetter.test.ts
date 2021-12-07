import { afghanistan, poland, togo } from '../mocks/Country';
import { selectCountriesIncludesAnyLetter } from './Task2';

describe('Tests for Task 2: Select only countries that include [x] in name', () => {
  test('Data with "A" in name', () => {
    expect(selectCountriesIncludesAnyLetter([...afghanistan, ...poland], 'a')).toHaveLength(2);
  });

  test('Data with and without "A" in name', () => {
    expect(selectCountriesIncludesAnyLetter([...afghanistan, ...togo], 'a')).toHaveLength(1);
  });

  test('Data without "A" in name', () => {
    expect(selectCountriesIncludesAnyLetter([...togo], 'a')).toHaveLength(0);
  });

  test('Data with "O" in name', () => {
    expect(selectCountriesIncludesAnyLetter([...afghanistan, ...poland, ...togo], 'o')).toHaveLength(2);
  });

  test('Data with "H" in name', () => {
    expect(selectCountriesIncludesAnyLetter([...afghanistan, ...poland], 'h')).toHaveLength(1);
  });
});
