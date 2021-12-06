import { afghanistan, germany, poland, togo } from '../mocks/Country';
import { getAllEUCountries } from '../task2/Task2';

describe('Tests for Task 2: Select only countries that belong to the EU', () => {
  test('Data with 1 EU country', () => {
    expect(getAllEUCountries([...afghanistan, ...poland])).toHaveLength(1);
  });

  test('Data with 2 EU country', () => {
    expect(getAllEUCountries([...afghanistan, ...poland, ...germany])).toHaveLength(2);
  });

  test('Data without EU country', () => {
    expect(getAllEUCountries([...afghanistan, ...togo])).toHaveLength(0);
  });
});
