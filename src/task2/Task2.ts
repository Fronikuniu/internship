import { configuration } from '../config';
import { Country } from '../types/interfaces';

export const Task2 = async (localStorageCountriesData: Country[]) => {
  // Select all EU countries
  const enterCountryValuePathToSearchFor: string = 'regionalBlocs.acronym';
  const enterCountryValueToSearchFor: string = 'EU';
  const whetherToContain: boolean = true;
  const arrayOfCountries: Country[] | string = getAllCountriesByTypeAndValue(localStorageCountriesData, {
    path: enterCountryValuePathToSearchFor,
    value: enterCountryValueToSearchFor,
    contain: whetherToContain,
  });
  console.log(`\n🔹 Countries of the ${enterCountryValueToSearchFor}: \n`, arrayOfCountries);

  // From all EU countries take countries which include any letter
  const enterPhrasePathToSearchFor = 'name';
  const enterPhraseToSearchFor: string = 'a';
  const enterTypeOfSelectOrDelete: 'select' | 'delete' = 'delete';
  const arrayOfCountriesContainingPhrase: Country[] | string = selectOrDeleteCountriesIncludesAnyLetter(arrayOfCountries, {
    path: enterPhrasePathToSearchFor,
    value: enterPhraseToSearchFor,
    selectOrDelete: enterTypeOfSelectOrDelete,
  });
  console.log(`\n🔹 Countries of the ${enterCountryValueToSearchFor}, include '${enterPhraseToSearchFor.toUpperCase()}':\n`, arrayOfCountriesContainingPhrase);

  // From all EU countries take countries which include 'a' and sort descending
  const enterSortPathToSearchFor = 'population';
  const enterSortToSearchFor: 'desc' | 'asc' = 'desc';
  const arrayOfSortedCountries = sortCountriesByType(arrayOfCountriesContainingPhrase, { path: enterSortPathToSearchFor, sortType: enterSortToSearchFor });
  console.log(`\n🔹 Countries of the ${enterCountryValueToSearchFor}, include '${enterPhraseToSearchFor.toUpperCase()}', sorted ${enterSortToSearchFor.toUpperCase()}: \n`, arrayOfSortedCountries);

  // From all EU countries take countries which include 'a', sort descending and calculate the population sum
  const enterLimit: number = 5;
  const enterPathLimit = 'population';
  const populateOfLimitedArray = calculateSumCountriesByType(arrayOfSortedCountries, { path: enterPathLimit, limit: enterLimit });
  const isBigger = populateOfLimitedArray > configuration.numberOfPopulate ? '↗️ bigger' : '↘️ less';
  console.log(
    `\n🔹 Countries of the ${enterCountryValueToSearchFor}, include '${enterPhraseToSearchFor.toUpperCase()}', sorted ${enterSortToSearchFor.toUpperCase()} and calculate population ➕: \n\n   Population ${enterLimit} countries is equal:`,
    populateOfLimitedArray,
    `And it's ${isBigger} than 500 million.`
  );
};

export const getAllCountriesByTypeAndValue = (countries: Country[], arg: { path: string; value: string; contain: boolean }): Country[] => {
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

export const selectOrDeleteCountriesIncludesAnyLetter = (countries: Country[], arg: { path: keyof Country; value: string; selectOrDelete: 'select' | 'delete' }): Country[] => {
  return countries.filter((country) => {
    if (typeof country[arg.path] === 'string') {
      // @ts-ignore this if above sould be enough
      return arg.selectOrDelete === 'select' ? country[arg.path].toUpperCase().includes(arg.value.toUpperCase()) : !country[arg.path].toUpperCase().includes(arg.value.toUpperCase());
    }
  });
};

export const sortCountriesByType = (array: Country[], arg: { path: keyof Country; sortType: 'desc' | 'asc' }): Country[] => {
  const sortArrayDesc = (first: any, next: any) => {
    return next[arg.path] - first[arg.path];
  };

  const sortArrayAsc = (first: any, next: any) => {
    return first[arg.path] - next[arg.path];
  };

  return arg.sortType === 'desc' ? [...array].sort(sortArrayDesc) : [...array].sort(sortArrayAsc);
};

export const calculateSumCountriesByType = (countries: Country[], arg: { path: keyof Country; limit: number }): number => {
  const limitedArray = countries.slice(0, arg.limit);

  let sum = 0;
  limitedArray.forEach((country: Country) => {
    // @ts-ignore this if should be enough
    if (typeof country[arg.path] === 'number') sum += country[arg.path];
  });

  return sum;
};
