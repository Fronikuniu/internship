import { afghanistan, togo } from '../mocks/Country';
import { selectCountriesIncludesA } from '../task2/Task2';

describe('Tests for Task 2: Select only countries that include "A" in name', () => {
  test('Data with "A" in name', () => {
    expect(selectCountriesIncludesA([...afghanistan, ...afghanistan])).toStrictEqual([...afghanistan, ...afghanistan]);
  });

  test('Data without "A" in name', () => {
    expect(selectCountriesIncludesA([...afghanistan, ...togo])).toStrictEqual([...afghanistan]);
  });

  test('Undefined data', () => {
    expect(selectCountriesIncludesA(undefined)).toBe('❗️ Enter correct data! ❗️');
  });

  test('Null data', () => {
    expect(selectCountriesIncludesA(null)).toBe('❗️ Enter correct data! ❗️');
  });

  test('String data', () => {
    expect(selectCountriesIncludesA('asd')).toBe('❗️ Enter correct data! ❗️');
  });

  test('Number data', () => {
    expect(selectCountriesIncludesA(123)).toBe('❗️ Enter correct data! ❗️');
  });
});
