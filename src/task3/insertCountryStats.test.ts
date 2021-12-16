import { countriesMock, euCountriesMock, otherCountriesMock } from '../mocks/countriesStats';
import { afghanistan, germany, poland } from '../mocks/Country';
import { insertCountryStats } from './Task3';

describe('Tests for Task 3: Insert countries stats', () => {
  test('Insert stats for EU countries', () => {
    expect(insertCountryStats([poland, germany], { acronym: 'EU', object: countriesMock })).toStrictEqual(euCountriesMock);
  });

  test('Insert stats for other countries', () => {
    expect(insertCountryStats([afghanistan], { acronym: 'other', object: countriesMock })).toStrictEqual(otherCountriesMock);
  });
});
