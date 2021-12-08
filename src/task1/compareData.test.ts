import { compareData } from './Task1';
import { afghanistan } from '../mocks/Country';

describe('Tests for Task 1: Compare Data', () => {
  test('Compare correct data without difference', () => {
    expect(compareData([afghanistan], [afghanistan])).toHaveLength(0);
  });

  test('Compare correct data with difference', () => {
    const updatedAfghanistan = { ...afghanistan, population: 41223532 };

    expect(compareData([afghanistan], [updatedAfghanistan])).toHaveLength(1);
  });
});
