import { configuration } from '../config';
import { Country } from '../types/interfaces';

export const Task2 = async (localStorageCountriesData: Country[]) => {
  // Select all EU countries
  const enterCountryValuePathToSearchFor: string = 'regionalBlocs.acronym';
  const enterCountryValueToSearchFor: string = 'EU';
  const whetherToContain: boolean = true;
  const arrayOfCountries: Country[] | string = getAllCountriesByTypeAndValue(localStorageCountriesData, enterCountryValuePathToSearchFor, enterCountryValueToSearchFor, whetherToContain);
  console.log(`\n🔹 Countries of the ${enterCountryValueToSearchFor}: \n`, arrayOfCountries);

  // From all EU countries take countries which include any letter
  const enterPhrasePathToSearchFor = 'name';
  const enterPhraseToSearchFor: string = 'a';
  const arrayOfCountriesContainingPhrase: Country[] | string = selectCountriesIncludesAnyLetter(arrayOfCountries, enterPhrasePathToSearchFor, enterPhraseToSearchFor);
  console.log(`\n🔹 Countries of the ${enterCountryValueToSearchFor}, include '${enterPhraseToSearchFor.toUpperCase()}':\n`, arrayOfCountriesContainingPhrase);

  // From all EU countries take countries which include 'a' and sort descending
  const enterSortPathToSearchFor = 'population';
  const enterSortToSearchFor: 'desc' | 'asc' = 'desc';
  const arrayOfSortedCountries = sortCountriesByType(arrayOfCountriesContainingPhrase, enterSortPathToSearchFor, enterSortToSearchFor);
  console.log(`\n🔹 Countries of the ${enterCountryValueToSearchFor}, include '${enterPhraseToSearchFor.toUpperCase()}', sorted ${enterSortToSearchFor.toUpperCase()}: \n`, arrayOfSortedCountries);

  // From all EU countries take countries which include 'a', sort descending and calculate the population sum
  const enterLimit: number = 5;
  const enterTypeLimit = 'population';
  const populateOfLimitedArray = calculateSumCountriesByType(arrayOfSortedCountries, enterTypeLimit, enterLimit);
  const isBigger = populateOfLimitedArray > configuration.numberOfPopulate ? '↗️ bigger' : '↘️ less';
  console.log(
    `\n🔹 Countries of the ${enterCountryValueToSearchFor}, include '${enterPhraseToSearchFor.toUpperCase()}', sorted ${enterSortToSearchFor.toUpperCase()} and calculate population ➕: \n\n   Population ${enterLimit} countries is equal:`,
    populateOfLimitedArray,
    `And it's ${isBigger} than 500 million.`
  );
};

export const getAllCountriesByTypeAndValue = (countries: Country[], types: string, value: string, containingOrNot: boolean): Country[] => {
  const typesData = types.split('.');

  return countries.filter((country: Country) => {
    const arrayPath = country[typesData[0]];

    if (!arrayPath) return false;

    const isStringArray = Array.isArray(arrayPath) && typeof arrayPath[0] === 'string';
    const isObjectArray = Array.isArray(arrayPath) && typeof arrayPath[0] === 'object';

    if (containingOrNot) {
      if (isObjectArray) return arrayPath.some((data) => data[typesData[1]] === value);
      if (isStringArray) return arrayPath.includes(value);
      return arrayPath === value;
    } else {
      if (isObjectArray) return arrayPath.some((data) => data[typesData[1]] !== value);
      if (isStringArray) return !arrayPath.includes(value);
      return arrayPath !== value;
    }
  });
};

export const selectCountriesIncludesAnyLetter = (countries: Country[], type: keyof Country, value: string): Country[] => {
  return countries.filter((country) => country[type].toUpperCase().includes(value.toUpperCase()));
};

export const sortCountriesByType = (array: Country[], type: keyof Country, enterSortType: string): Country[] => {
  const sortArrayDesc = (first: any, next: any) => {
    return next[type] - first[type];
  };

  const sortArrayAsc = (first: any, next: any) => {
    return first[type] - next[type];
  };

  return enterSortType === 'desc' ? [...array].sort(sortArrayDesc) : [...array].sort(sortArrayAsc);
};

export const calculateSumCountriesByType = (countries: Country[], type: keyof Country, limit: number): number => {
  const limitedArray = countries.slice(0, limit);

  let sum = 0;
  limitedArray.forEach((country: Country) => {
    sum += country[type];
  });

  return sum;
};
