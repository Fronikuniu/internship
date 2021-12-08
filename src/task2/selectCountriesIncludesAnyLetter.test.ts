import { afghanistan, poland, togo } from '../mocks/Country';
import { selectCountriesIncludesAnyLetter } from './Task2';

describe('Tests for Task 2: Select only countries that include [value] in [type]', () => {
  test('Data with "A" in name', () => {
    expect(selectCountriesIncludesAnyLetter([afghanistan, poland], 'name', 'a')).toHaveLength(2);
  });

  test('Data with and without "A" in name', () => {
    expect(selectCountriesIncludesAnyLetter([afghanistan, togo], 'name', 'a')).toHaveLength(1);
  });

  test('Data without "A" in name', () => {
    expect(selectCountriesIncludesAnyLetter([togo], 'name', 'a')).toHaveLength(0);
  });

  test('Data with "O" in name', () => {
    expect(selectCountriesIncludesAnyLetter([afghanistan, poland, togo], 'name', 'o')).toHaveLength(2);
  });

  test('Data with "H" in name', () => {
    expect(selectCountriesIncludesAnyLetter([afghanistan, poland], 'name', 'h')).toHaveLength(1);
  });

  test('Data with "A" in alpha2Code', () => {
    expect(selectCountriesIncludesAnyLetter([afghanistan, poland], 'alpha2Code', 'a')).toHaveLength(1);
  });
});
