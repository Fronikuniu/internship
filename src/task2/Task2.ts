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
  const sortPhrase = 'population';
  const sortType: 'desc' | 'asc' = 'desc';
  const countriesSorted = sortCountries(countriesPhrase, { path: sortPhrase, sortType: sortType });
  console.log(
    `\n🔹 Countries of the ${countryPath}: ${countryValue}, dont contain '${phraseValue.toUpperCase()}' in ${phrasePath}, sorted ${sortType.toUpperCase()} by ${sortPhrase}: \n`,
    countriesSorted
  );

  // From all EU countries take countries which dont contain 'a', sort descending and calculate the population sum
  const limit: number = 5;
  const limitPath = 'population';
  const countriesLimited = calculateCountriesSum(countriesSorted, { path: limitPath, limit: limit });
  const isBigger = countriesLimited > configuration.numberOfPopulate ? '↗️ bigger' : '↘️ less';
  console.log(
    `\n🔹 Countries of the ${countryPath}: ${countryValue}, dont contain '${phraseValue.toUpperCase()}' in ${phrasePath}, sorted ${sortType.toUpperCase()} by ${sortPhrase} and calculate ${limitPath} ➕: \n\n   ${limitPath} ${limit} first countries is equal:`,
    countriesLimited,
    `And it's ${isBigger} than 500 million.`
  );
};

export const filterCountriesByValue = (countries: Country[], arg: { path: string; value: string; contain: boolean }): Country[] => {
  const typesData = arg.path.split('.');

  return countries.filter((country: Country) => {
    // @ts-ignore
    const arrayPath = country[typesData[0]];

    if (!arrayPath) return false;

    const isStringArray = Array.isArray(arrayPath) && typeof arrayPath[0] === 'string';
    const isObjectArray = Array.isArray(arrayPath) && typeof arrayPath[0] === 'object';

    if (arg.contain) {
      if (isObjectArray) return arrayPath.some((data) => data[typesData[1]] === arg.value);
      if (isStringArray) return arrayPath.includes(arg.value);
      return arrayPath === arg.value;
    } else {
      if (isObjectArray) return arrayPath.some((data) => data[typesData[1]] !== arg.value);
      if (isStringArray) return !arrayPath.includes(arg.value);
      return arrayPath !== arg.value;
    }
  });
};

export const filterCountries = (countries: Country[], arg: { path: keyof Country; value: string; selectOrDelete: 'select' | 'delete' }): Country[] => {
  return countries.filter((country) => {
    if (typeof country[arg.path] === 'string') {
      // @ts-ignore this if above sould be enough
      return arg.selectOrDelete === 'select' ? country[arg.path].toUpperCase().includes(arg.value.toUpperCase()) : !country[arg.path].toUpperCase().includes(arg.value.toUpperCase());
    }
  });
};

export const sortCountries = (array: Country[], arg: { path: keyof Country; sortType: 'desc' | 'asc' }): Country[] => {
  const sortArrayDesc = (first: any, next: any) => {
    return next[arg.path] - first[arg.path];
  };

  const sortArrayAsc = (first: any, next: any) => {
    return first[arg.path] - next[arg.path];
  };

  return arg.sortType === 'desc' ? [...array].sort(sortArrayDesc) : [...array].sort(sortArrayAsc);
};

export const calculateCountriesSum = (countries: Country[], arg: { path: keyof Country; limit: number }): number => {
  const limitedArray = countries.slice(0, arg.limit);

  let sum = 0;
  limitedArray.forEach((country: Country) => {
    // @ts-ignore this if should be enough
    if (typeof country[arg.path] === 'number') sum += country[arg.path];
  });

  return sum;
};
