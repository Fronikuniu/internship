import { compareData } from './Task1';
import { afghanistan, afghanistanWithChangedPopulation } from '../mocks/Country';

describe('Tests for Task 1: Compare Data', () => {
  test('Compare correct data without difference', () => {
    expect(compareData(afghanistan, afghanistan)).toStrictEqual([]);
  });

  test('Compare correct data with difference', () => {
    expect(compareData(afghanistan, afghanistanWithChangedPopulation)).toStrictEqual(['Afghanistan']);
  });
});
