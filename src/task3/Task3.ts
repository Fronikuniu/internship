import { getAllCountriesByTypeAndValue } from '../task2/Task2';
import { CountriesStats, Country, CountryStat, LangStat } from '../types/interfaces';

const countryStat: CountryStat = {
  countries: [],
  population: 0,
  languages: {},
  currencies: [],
  area: 0,
};

const countriesStats: CountriesStats = {
  EU: { ...countryStat },
  NAFTA: { ...countryStat },
  AU: { ...countryStat },
  other: { ...countryStat },
};

export const Task3 = (localStorageCountriesData: Country[]) => {
  const euCountries: Country[] = getAllCountriesByTypeAndValue(localStorageCountriesData, 'regionalBlocs.acronym', 'EU', true);
  const naftaCountries: Country[] = getAllCountriesByTypeAndValue(localStorageCountriesData, 'regionalBlocs.acronym', 'NAFTA', true);
  const auCountries: Country[] = getAllCountriesByTypeAndValue(localStorageCountriesData, 'regionalBlocs.acronym', 'AU', true);
  const countriesWithoutEuNaftaAu: Country[] = getAllCountriesByTypeAndValue(localStorageCountriesData, 'regionalBlocs.acronym', 'AU EU NAFTA', false);

  console.log(euCountries);
  console.log(naftaCountries);
  console.log(auCountries);
  console.log(countriesWithoutEuNaftaAu);

  getCountriesDataAbout(euCountries, 'EU', countriesStats);
  getCountriesDataAbout(naftaCountries, 'NAFTA', countriesStats);
  getCountriesDataAbout(auCountries, 'AU', countriesStats);
  getCountriesDataAbout(countriesWithoutEuNaftaAu, 'other', countriesStats);

  console.log('\n🔸 The name of the organization with the largest population:', sortObject(countriesStats, { value: 'population', place: 1, sort: 'desc' }));
  console.log('\n🔸 Name of the organization with the second largest population:', sortObject(countriesStats, { value: 'population', place: 2, sort: 'desc' }));
  console.log('\n🔸 The name of the organization occupying the third largest area:', sortObject(countriesStats, { value: 'area', place: 3, sort: 'desc' }));
  console.log(
    '\n🔸 Names of organizations with the largest and smallest number of languages assigned to them:\n',
    'Largest:',
    sortObject(countriesStats, { value: 'languages', place: 1, sort: 'desc' }),
    '\n Smallest:',
    sortObject(countriesStats, { value: 'languages', place: 1, sort: 'asc' })
  );
  console.log('\n🔸 Name of the organization using the largest number of currencies:', sortObject(countriesStats, { value: 'currencies', place: 1, sort: 'desc' }));
  console.log('\n🔸 The name of the organization with the fewest number of member states:', sortObject(countriesStats, { value: 'countries', place: 1, sort: 'asc' }));
  console.log('\n🔸 Native name of the language used in the greatest number of countries:', sortObjectLang(countriesStats, { value: 'area', place: 1, sort: 'desc' }));
  console.log('\n🔸 Native name of the language used by the smallest number of people:', sortObjectLang(countriesStats, { value: 'population', place: 1, sort: 'asc' }));
  console.log(
    '\n🔸 Native names of the languages used in the largest and smallest area:\n',
    'Largest:',
    sortObjectLang(countriesStats, { value: 'area', place: 1, sort: 'desc' }),
    '\n Smallest:',
    sortObjectLang(countriesStats, { value: 'area', place: 1, sort: 'asc' })
  );

  console.log('\n🟠 EU, NAFTA, AU and other countries: \n', countriesStats);
};

export const getCountriesDataAbout = (array: Country[], acronym: keyof CountriesStats, object: CountriesStats) => {
  const path = object[acronym];
  path.countries = [];
  path.currencies = [];

  array.forEach((country) => {
    path.countries.push(country.nativeName);
    country.currencies?.every((currencie) => path.currencies.push(currencie.name));
    path.population += country.population;
    typeof country.area === 'number' && (path.area += country.area);

    const langKeys = Object.keys(path.languages);
    const countryLang = country.languages.map((lang) => lang.iso639_1);

    countryLang.forEach((lang, i) => {
      if (lang === langKeys[i]) {
        path.languages[lang].countries.push(country.languages[i].nativeName);
        path.languages[lang].name.push(country.alpha3Code);
        path.languages[lang].area += country.area;
        path.languages[lang].population += country.population;
      } else {
        const language = country.languages[i].iso639_1;
        const countries = country.alpha3Code;
        const name = country.languages[i].nativeName;
        const area = country.area;
        const population = country.population;
        path.languages = { ...path.languages, ...{ [language]: { population, area, name: [name], countries: [countries] } } };
      }
    });
  });

  const unique = new Set(path.currencies);
  path.currencies = Array.from(unique);
  path.countries = path.countries.sort().reverse();
};

export const sortObject = (object: CountriesStats, arg: { value: keyof CountryStat; place: number; sort: string }): string => {
  const countryKeys = Object.keys(object);
  const arrayOfValues: string[] | number[] = [];
  const index = arg.place - 1;
  const result: string[] = [];

  countryKeys.forEach((key) => {
    const value = object[key][arg.value];
    const valueLength = Object.getOwnPropertyNames(value).length;
    if (typeof value === 'object') arrayOfValues.push(valueLength);
    if (typeof value !== 'object') arrayOfValues.push(value);
  });

  const sortedArrayOfValues: string[] | number[] = sortArrayOfValues(arg.sort, arrayOfValues);

  countryKeys.forEach((key) => {
    const value = object[key][arg.value];
    const valueLength = Object.getOwnPropertyNames(value).length;

    if (typeof value === 'object' && valueLength === sortedArrayOfValues[index]) result.push(key);
    if (typeof value !== 'object' && value === sortedArrayOfValues[index]) result.push(key);
  });

  return result.toString();
};

const sortObjectLang = (object: CountriesStats, arg: { value: keyof LangStat; place: number; sort: string }): string => {
  const countryKeys = Object.keys(object);
  const arrayOfValues: string[] | number[] = [];
  const index = arg.place - 1;
  const result: string[] = [];

  countryKeys.forEach((countryKey) => {
    const languagesKeys = Object.keys(object[countryKey].languages);

    languagesKeys.forEach((langKey) => {
      const value = object[countryKey].languages[langKey][arg.value];
      const valueLength: number = value.length;
      if (Array.isArray(value)) arrayOfValues.push(valueLength);
      if (typeof value !== 'object') arrayOfValues.push(value);
    });
  });

  const sortedArrayOfValues: string[] | number[] = sortArrayOfValues(arg.sort, arrayOfValues);

  countryKeys.forEach((countryKey) => {
    const languagesKeys = Object.keys(object[countryKey].languages);

    languagesKeys.forEach((langKey) => {
      const value = object[countryKey].languages[langKey][arg.value];
      const valueLength = value.length;

      if (typeof value === 'object' && valueLength === sortedArrayOfValues[index]) result.push(object[countryKey].languages[langKey].name[0]);
      if (typeof value !== 'object' && value === sortedArrayOfValues[index]) result.push(object[countryKey].languages[langKey].name[0]);
    });
  });

  const set = new Set(result);
  const endResult = Array.from(set);
  return endResult.toString();
};

const sortArrayOfValues = (sort: string, array: string[] | number[]): string[] | number[] => {
  if (sort === 'desc') {
    return array.sort((a: any, b: any) => b - a);
  } else {
    return array.sort((a: any, b: any) => a - b);
  }
};
