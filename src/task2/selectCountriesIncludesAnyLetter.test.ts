import { afghanistan, poland, togo } from '../mocks/Country';
import { selectOrDeleteCountriesIncludesAnyLetter } from './Task2';

describe('Tests for Task 2: Select only countries that include [value] in [type]', () => {
  test('Data with "A" in name', () => {
    expect(selectOrDeleteCountriesIncludesAnyLetter([afghanistan, poland], { path: 'name', value: 'a', selectOrDelete: 'select' })).toHaveLength(2);
  });

  test('Data with and without "A" in name', () => {
    expect(selectOrDeleteCountriesIncludesAnyLetter([afghanistan, togo], { path: 'name', value: 'a', selectOrDelete: 'select' })).toHaveLength(1);
  });

  test('Data without "A" in name', () => {
    expect(selectOrDeleteCountriesIncludesAnyLetter([afghanistan, poland, togo], { path: 'name', value: 'a', selectOrDelete: 'delete' })).toHaveLength(1);
  });

  test('Data with "O" in name', () => {
    expect(selectOrDeleteCountriesIncludesAnyLetter([afghanistan, poland, togo], { path: 'name', value: 'o', selectOrDelete: 'select' })).toHaveLength(2);
  });

  test('Data with "H" in name', () => {
    expect(selectOrDeleteCountriesIncludesAnyLetter([afghanistan, poland], { path: 'name', value: 'h', selectOrDelete: 'select' })).toHaveLength(1);
  });

  test('Data with "A" in alpha2Code', () => {
    expect(selectOrDeleteCountriesIncludesAnyLetter([afghanistan, poland], { path: 'alpha2Code', value: 'a', selectOrDelete: 'select' })).toHaveLength(1);
  });
});
