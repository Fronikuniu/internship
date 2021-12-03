import { compareData } from '../task1/Task1';
import { test1, test2 } from '../mocks/Country';

describe('Tests for Task 1: Compare Data', () => {
  test('Compare correct data without difference', () => {
    expect(compareData(test1, test1)).toStrictEqual([]);
  });

  test('Compare correct data with difference', () => {
    expect(compareData(test1, test2)).toStrictEqual(['Afghanistan']);
  });

  test('Compare uncorrect data (Array with undefined)', () => {
    expect(compareData(test1, undefined)).toBe('❗️ Enter correct data! ❗️');
  });

  test('Compare uncorrect data (Array with null)', () => {
    expect(compareData(test1, null)).toBe('❗️ Enter correct data! ❗️');
  });

  test('Compare uncorrect data (Array with string)', () => {
    expect(compareData(test1, 'Test123')).toBe('❗️ Enter correct data! ❗️');
  });

  test('Compare uncorrect data (Array with number)', () => {
    expect(compareData(test1, 123)).toBe('❗️ Enter correct data! ❗️');
  });
});
