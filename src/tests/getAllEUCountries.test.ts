import { test1, test2 } from '../mocks/Country';
import { getAllEUCountries } from '../task2/Task2';

describe('Tests for Task 2: Select only countries that belong to the EU', () => {
  test('Data with EU country', () => {
    expect(getAllEUCountries([...test1, ...test2])).toStrictEqual([...test2]);
  });

  test('Data without EU country', () => {
    expect(getAllEUCountries([...test1, ...test1])).toStrictEqual([]);
  });

  test('Undefined data', () => {
    expect(getAllEUCountries(undefined)).toBe('❗️ Enter correct data! ❗️');
  });

  test('Null data', () => {
    expect(getAllEUCountries(null)).toBe('❗️ Enter correct data! ❗️');
  });

  test('String data', () => {
    expect(getAllEUCountries('asd')).toBe('❗️ Enter correct data! ❗️');
  });

  test('Number data', () => {
    expect(getAllEUCountries(123)).toBe('❗️ Enter correct data! ❗️');
  });
});
