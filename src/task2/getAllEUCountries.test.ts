import { afghanistan, poland } from '../mocks/Country';
import { getAllEUCountries } from '../task2/Task2';

describe('Tests for Task 2: Select only countries that belong to the EU', () => {
  test('Data with EU country', () => {
    expect(getAllEUCountries([...afghanistan, ...poland])).toStrictEqual([...poland]);
  });

  test('Data without EU country', () => {
    expect(getAllEUCountries([...afghanistan, ...afghanistan])).toStrictEqual([]);
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
