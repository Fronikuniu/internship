import { configuration } from '../config';
import { Country } from '../types/interfaces';

export const Task2 = async (localStorageCountriesData: Country[]) => {
  // Select all EU countries
  const countryPath: string = 'regionalBlocs.acronym';
  const countryValue: string = 'EU';
  const shouldContain: boolean = true;
  const countries: Country[] | string = filterCountriesByValue(localStorageCountriesData, { path: countryPath, value: countryValue, contain: shouldContain });
  console.log(`\n🔹 Countries of the ${countryPath}: ${countryValue}: \n`, countries);

  // From all EU countries take countries which dont contain any letter
  const phrasePath = 'name';
  const phraseValue: string = 'a';
  const phraseTypeValue: 'select' | 'delete' = 'delete';
  const countriesPhrase: Country[] | string = filterCountries(countries, { path: phrasePath, value: phraseValue, selectOrDelete: phraseTypeValue });
  console.log(`\n🔹 Countries of the ${countryPath}: ${countryValue}, dont contain '${phraseValue.toUpperCase()}' in ${phrasePath}:\n`, countriesPhrase);

  // From all EU countries take countries which dont contain 'a' and sort descending
  const sortPath = 'population';
  const sortType: 'desc' | 'asc' = 'desc';
  const countriesSorted = sortCountries(countriesPhrase, { path: sortPath, sortType: sortType });
  console.log(
    `\n🔹 Countries of the ${countryPath}: ${countryValue}, dont contain '${phraseValue.toUpperCase()}' in ${phrasePath}, sorted ${sortType.toUpperCase()} by ${sortPath}: \n`,
    countriesSorted
  );

  // From all EU countries take countries which dont contain 'a', sort descending and calculate the population sum
  const limit: number = 5;
  const limitPath = 'population';
  const countriesLimited = calculateCountriesSum(countriesSorted, { path: limitPath, limit: limit });
  const isBigger = countriesLimited > configuration.numberOfPopulate ? '↗️ bigger' : '↘️ less';
  console.log(
    `\n🔹 Countries of the ${countryPath}: ${countryValue}, dont contain '${phraseValue.toUpperCase()}' in ${phrasePath}, sorted ${sortType.toUpperCase()} by ${sortPath} and calculate ${limitPath} ➕: \n\n   ${limitPath} ${limit} first countries is equal:`,
    countriesLimited,
    `And it's ${isBigger} than 500 million.`
  );
};

export const filterCountriesByValue = (countries: Country[], args: { path: string; value: string; contain: boolean }): Country[] => {
  const path = args.path.split('.');

  return countries.filter((country: Country) => {
    // @ts-ignore
    const arrayPath = country[path[0]];

    if (!arrayPath) return false;

    const isStringArray = Array.isArray(arrayPath) && typeof arrayPath[0] === 'string';
    const isObjectArray = Array.isArray(arrayPath) && typeof arrayPath[0] === 'object';

    if (args.contain) {
      if (isObjectArray) return arrayPath.some((data) => data[path[1]] === args.value);
      if (isStringArray) return arrayPath.includes(args.value);
      return arrayPath === args.value;
    } else {
      if (isObjectArray) return arrayPath.some((data) => data[path[1]] !== args.value);
      if (isStringArray) return !arrayPath.includes(args.value);
      return arrayPath !== args.value;
    }
  });
};

export const filterCountries = (countries: Country[], args: { path: keyof Country; value: string; selectOrDelete: 'select' | 'delete' }): Country[] => {
  return countries.filter((country) => {
    if (typeof country[args.path] === 'string') {
      // @ts-ignore this if above sould be enough
      return args.selectOrDelete === 'select' ? country[args.path].toUpperCase().includes(args.value.toUpperCase()) : !country[args.path].toUpperCase().includes(args.value.toUpperCase());
    }
  });
};

export const sortCountries = (array: Country[], args: { path: keyof Country; sortType: 'desc' | 'asc' }): Country[] => {
  const sortArrayDesc = (first: any, next: any) => {
    return next[args.path] - first[args.path];
  };

  const sortArrayAsc = (first: any, next: any) => {
    return first[args.path] - next[args.path];
  };

  return args.sortType === 'desc' ? [...array].sort(sortArrayDesc) : [...array].sort(sortArrayAsc);
};

export const calculateCountriesSum = (countries: Country[], args: { path: keyof Country; limit: number }): number => {
  const limitedArray = countries.slice(0, args.limit);

  let sum = 0;
  limitedArray.forEach((country: Country) => {
    // @ts-ignore this if should be enough
    if (typeof country[args.path] === 'number') sum += country[args.path];
  });

  return sum;
};
