import { afghanistan, germany, poland, togo } from '../mocks/Country';
import { getAllCountriesByAcronym } from './Task2';

describe('Tests for Task 2: Select only countries that belong to the [acronym]', () => {
  test('Data with 1 EU country', () => {
    expect(getAllCountriesByAcronym([...afghanistan, ...poland], 'EU')).toHaveLength(1);
  });

  test('Data with 2 EU country', () => {
    expect(getAllCountriesByAcronym([...afghanistan, ...poland, ...germany], 'EU')).toHaveLength(2);
  });

  test('Data without EU country', () => {
    expect(getAllCountriesByAcronym([...afghanistan, ...togo], 'EU')).toHaveLength(0);
  });

  test('Data with 1 SAARC country', () => {
    expect(getAllCountriesByAcronym([...afghanistan, ...poland], 'SAARC')).toHaveLength(1);
  });

  test('Data with 1 AU country', () => {
    expect(getAllCountriesByAcronym([...afghanistan, ...poland, ...togo], 'AU')).toHaveLength(1);
  });
});
