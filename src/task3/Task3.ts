import { filterCountriesByValue } from '../task2/Task2';
import { CountriesStats, Country, CountryStat, LangStat } from '../types/interfaces';

const countryStat: CountryStat = {
  countries: [],
  population: 0,
  languages: {},
  currencies: [],
  area: 0,
};
const countriesStats: CountriesStats = {};

['EU', 'NAFTA', 'AU', 'other'].forEach((country) => (countriesStats[country] = { ...countryStat }));

export const Task3 = (localStorageCountriesData: Country[]) => {
  const euCountries: Country[] = filterCountriesByValue(localStorageCountriesData, { path: 'regionalBlocs.acronym', value: 'EU', contain: true });
  const naftaCountries: Country[] = filterCountriesByValue(localStorageCountriesData, { path: 'regionalBlocs.acronym', value: 'NAFTA', contain: true });
  const auCountries: Country[] = filterCountriesByValue(localStorageCountriesData, { path: 'regionalBlocs.acronym', value: 'AU', contain: true });
  const otherCountries: Country[] = localStorageCountriesData.filter((country) => country.regionalBlocs?.some((bloc) => !['EU', 'NAFTA', 'AU'].includes(bloc.acronym)));

  insertCountryStats(euCountries, { acronym: 'EU', object: countriesStats });
  insertCountryStats(naftaCountries, { acronym: 'NAFTA', object: countriesStats });
  insertCountryStats(auCountries, { acronym: 'AU', object: countriesStats });
  insertCountryStats(otherCountries, { acronym: 'other', object: countriesStats });

  console.log('\n🔸 The name of the organization with the largest population:', getCountryName(countriesStats, { path: 'population', place: 1, sort: 'desc' }));
  console.log('\n🔸 Name of the organization with the second largest population:', getCountryName(countriesStats, { path: 'population', place: 2, sort: 'desc' }));
  console.log('\n🔸 The name of the organization occupying the third largest area:', getCountryName(countriesStats, { path: 'area', place: 3, sort: 'desc' }));
  console.log(
    '\n🔸 Names of organizations with the largest and smallest number of languages assigned to them:\n',
    'Largest:',
    getCountryName(countriesStats, { path: 'languages', place: 1, sort: 'desc' }),
    '\n Smallest:',
    getCountryName(countriesStats, { path: 'languages', place: 1, sort: 'asc' })
  );
  console.log('\n🔸 Name of the organization using the largest number of currencies:', getCountryName(countriesStats, { path: 'currencies', place: 1, sort: 'desc' }));
  console.log('\n🔸 The name of the organization with the fewest number of member states:', getCountryName(countriesStats, { path: 'countries', place: 1, sort: 'asc' }));
  console.log('\n🔸 Native name of the language used in the greatest number of countries:', getLanguageName(countriesStats, { path: 'area', place: 1, sort: 'desc' }));
  console.log('\n🔸 Native name of the language used by the smallest number of people:', getLanguageName(countriesStats, { path: 'population', place: 1, sort: 'asc' }));
  console.log(
    '\n🔸 Native names of the languages used in the largest and smallest area:\n',
    'Largest:',
    getLanguageName(countriesStats, { path: 'area', place: 1, sort: 'desc' }),
    '\n Smallest:',
    getLanguageName(countriesStats, { path: 'area', place: 1, sort: 'asc' })
  );

  console.log('\n🟠 EU, NAFTA, AU and other countries: \n', countriesStats);
};

export const insertCountryStats = (array: Country[], args: { acronym: keyof CountriesStats; object: CountriesStats }) => {
  const path = args.object[args.acronym];

  array.forEach((country) => {
    path.countries = [...path.countries, country.nativeName];
    country.currencies?.every((currency) => (path.currencies = [...path.currencies, currency.name]));
    path.population += country.population;
    typeof country.area === 'number' && (path.area += country.area);

    const langKeys = Object.keys(path.languages);
    const countryLang = country.languages.map((lang) => lang.iso639_1);

    countryLang.forEach((lang, i) => {
      if (lang === langKeys[i]) {
        path.languages[lang].name.push(country.languages[i].nativeName);
        path.languages[lang].countries.push(country.alpha3Code);
        path.languages[lang].area += country.area;
        path.languages[lang].population += country.population;
      } else {
        const language = country.languages[i].iso639_1;
        const name = country.alpha3Code;
        const nativeName = country.languages[i].nativeName;
        const area = country.area;
        const population = country.population;
        path.languages = { ...path.languages, ...{ [language]: { population, area, name: [nativeName], countries: [name] } } };
      }
    });
  });

  const unique = new Set(path.currencies);
  path.currencies = Array.from(unique);
  path.countries = path.countries.sort().reverse();

  return args.object;
};

export const getCountryName = (object: CountriesStats, args: { path: keyof CountryStat; place: number; sort: string }): string => {
  const countryKeys = Object.keys(object);
  const arrayOfValues: number[] = [];
  const place = args.place - 1;
  const result: string[] = [];

  countryKeys.forEach((key) => {
    const value = object[key][args.path];
    const valueLength = Object.getOwnPropertyNames(value).length;
    if (typeof value === 'object') arrayOfValues.push(valueLength);
    if (typeof value !== 'object') arrayOfValues.push(value);
  });

  const uniqueValues: any = Array.from(new Set(sortValues(args.sort, arrayOfValues)));

  countryKeys.forEach((key) => {
    const value = object[key][args.path];
    const valueLength = Object.getOwnPropertyNames(value).length;

    if (typeof value === 'object' && valueLength === uniqueValues[place]) result.push(key);
    if (typeof value !== 'object' && value === uniqueValues[place]) result.push(key);
  });

  return result.toString();
};

export const getLanguageName = (object: CountriesStats, args: { path: keyof LangStat; place: number; sort: string }): string => {
  const countryKeys = Object.keys(object);
  const arrayOfValues: number[] = [];
  const place = args.place - 1;
  const result: string[] = [];

  countryKeys.forEach((countryKey) => {
    const languagesKeys = Object.keys(object[countryKey].languages);

    languagesKeys.forEach((langKey) => {
      const value = object[countryKey].languages[langKey][args.path];
      const valueLength = Array.isArray(value) && value.length;
      if (Array.isArray(value) && typeof valueLength !== 'boolean') arrayOfValues.push(valueLength);
      if (typeof value !== 'object') arrayOfValues.push(value);
    });
  });

  const uniqueValues: any = Array.from(new Set(sortValues(args.sort, arrayOfValues)));

  countryKeys.forEach((countryKey) => {
    const languagesKeys = Object.keys(object[countryKey].languages);

    languagesKeys.forEach((langKey) => {
      const value = object[countryKey].languages[langKey][args.path];
      const valueLength = Array.isArray(value) && value.length;

      if (typeof value === 'object' && valueLength === uniqueValues[place]) result.push(object[countryKey].languages[langKey].name[0]);
      if (typeof value !== 'object' && value === uniqueValues[place]) result.push(object[countryKey].languages[langKey].name[0]);
    });
  });

  const set = new Set(result);
  const endResult = Array.from(set);
  return endResult.toString();
};

const sortValues = (sort: string, array: number[]): number[] => {
  if (sort === 'desc') {
    return array.sort((a: any, b: any) => b - a);
  } else {
    return array.sort((a: any, b: any) => a - b);
  }
};
