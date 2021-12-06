import { afghanistan, afghanistanWithChangedPopulation, togo } from '../mocks/Country';
import { sortByPopulationDesc } from '../task2/Task2';

describe('Tests for Task 2: Sort array with EU countries by population (desc)', () => {
  test('Correct data', () => {
    expect(sortByPopulationDesc([...afghanistan, ...afghanistanWithChangedPopulation, ...togo])).toStrictEqual([...afghanistanWithChangedPopulation, ...afghanistan, ...togo]);
  });

  test('Undefined data', () => {
    expect(sortByPopulationDesc(undefined)).toBe('❗️ Enter correct data! ❗️');
  });

  test('Null data', () => {
    expect(sortByPopulationDesc(null)).toBe('❗️ Enter correct data! ❗️');
  });

  test('String data', () => {
    expect(sortByPopulationDesc('asd')).toBe('❗️ Enter correct data! ❗️');
  });

  test('Number data', () => {
    expect(sortByPopulationDesc(123)).toBe('❗️ Enter correct data! ❗️');
  });
});
