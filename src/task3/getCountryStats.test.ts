import { countriesMock, euCountriesMock, otherCountriesMock } from '../mocks/countriesStats';
import { afghanistan, germany, poland, togo } from '../mocks/Country';
import { getCountryStats } from './Task3';

describe('Tests for Task 3: Get stats to countries', () => {
  test('Get stats for EU countries', () => {
    expect(getCountryStats([poland, germany], { acronym: 'EU', object: countriesMock })).toStrictEqual(euCountriesMock);
  });

  test('Get stats for other countries', () => {
    expect(getCountryStats([afghanistan], { acronym: 'other', object: countriesMock })).toStrictEqual(otherCountriesMock);
  });
});
