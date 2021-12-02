import { CompareData } from '../task1/Task1';
import { test1, test2 } from '../mocks/Country';

describe('Tests for Task 1: Compare Data', () => {
  test('Compare correct data without difference', () => {
    expect(CompareData(test1, test1)).toStrictEqual([]);
  });

  test('Compare correct data with difference', () => {
    expect(CompareData(test1, test2)).toStrictEqual(['Afghanistan']);
  });

  test('Compare uncorrect data (Array with undefined)', () => {
    expect(CompareData(test1, undefined)).toBe('❗️ Enter correct data! ❗️');
  });

  test('Compare uncorrect data (Array with null)', () => {
    expect(CompareData(test1, null)).toBe('❗️ Enter correct data! ❗️');
  });
});
