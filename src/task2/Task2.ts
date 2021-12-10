import { Country } from '../types/interfaces';

export const Task2 = async (localStorageCountriesData: Country[]) => {
  // Select all EU countries
  const enterCountryValuePathToSearchFor: string = 'regionalBlocs.acronym';
  const enterCountryValueToSearchFor: string = 'EU';
  const whetherToContain: boolean = true;
  const arrayOfCountries: Country[] | string = getAllCountriesByTypeAndValue(localStorageCountriesData, enterCountryValuePathToSearchFor, enterCountryValueToSearchFor, whetherToContain);
  console.log(`\n🔹 Countries of the ${enterCountryValueToSearchFor}: \n`, arrayOfCountries);

  // From all EU countries take countries which include any letter
  const enterPhrasePathToSearchFor: string = 'name';
  const enterPhraseToSearchFor: string = 'a';
  const arrayOfCountriesContainingPhrase: Country[] | string = selectCountriesIncludesAnyLetter(arrayOfCountries, enterPhrasePathToSearchFor, enterPhraseToSearchFor);
  console.log(`\n🔹 Countries of the ${enterCountryValueToSearchFor}, include '${enterPhraseToSearchFor.toUpperCase()}':\n`, arrayOfCountriesContainingPhrase);

  // From all EU countries take countries which include 'a' and sort descending
  const enterSortPathToSearchFor: string = 'population';
  const enterSortToSearchFor: 'desc' | 'asc' = 'desc';
  const arrayOfSortedCountries = sortCountriesByType(arrayOfCountriesContainingPhrase, enterSortPathToSearchFor, enterSortToSearchFor);
  console.log(`\n🔹 Countries of the ${enterCountryValueToSearchFor}, include '${enterPhraseToSearchFor.toUpperCase()}', sorted ${enterSortToSearchFor.toUpperCase()}: \n`, arrayOfSortedCountries);

  // From all EU countries take countries which include 'a', sort descending and calculate the population sum
  const enterLimit: number = 5;
  const enterTypeLimit = 'population';
  const populateOfLimitedArray = calculateSumCountriesByType(arrayOfSortedCountries, enterTypeLimit, enterLimit);
  const isBigger = populateOfLimitedArray > 500_000_000 ? '↗️ bigger' : '↘️ less';
  console.log(
    `\n🔹 Countries of the ${enterCountryValueToSearchFor}, include '${enterPhraseToSearchFor.toUpperCase()}', sorted ${enterSortToSearchFor.toUpperCase()} and calculate population ➕: \n\n   Population ${enterLimit} countries is equal:`,
    populateOfLimitedArray,
    `And it's ${isBigger} than 500 million.`
  );
};

export const getAllCountriesByTypeAndValue = (countries: Country[], types: string, value: string, containingOrNot: boolean) => {
  const typesData = types.split('.');
  // I try use regex instead data[typesData[1]] === value but i getting different data
  // const regex = new RegExp(value, 'gm');
  // console.log(regex);
  // regex.exec(data[typesData[1]])

  return countries.filter((country: any) => {
    const arrayPath = country[typesData[0]];

    if (arrayPath) {
      if (containingOrNot) {
        if (Array.isArray(arrayPath) && typeof arrayPath[0] === 'object') return arrayPath.some((data) => data[typesData[1]] === value);
        if (Array.isArray(arrayPath) && typeof arrayPath[0] === 'string') return arrayPath.includes(value);
        return arrayPath === value;
      } else {
        if (Array.isArray(arrayPath) && typeof arrayPath[0] === 'object') return arrayPath.some((data) => data[typesData[1]] !== value);
        if (Array.isArray(arrayPath) && typeof arrayPath[0] === 'string') return !arrayPath.includes(value);
        return arrayPath !== value;
      }
    }
  });
};

export const selectCountriesIncludesAnyLetter = (countries: any, type: string, value: string): Country[] => {
  return countries.filter((country: any) => country[type].includes(value.toUpperCase()) || country[type].includes(value.toLowerCase()));
};

export const sortCountriesByType = (array: Country[], type: string, enterSortType: string): Country[] => {
  const sortArrayDesc = (first: any, next: any) => {
    return next[type] - first[type];
  };

  const sortArrayAsc = (first: any, next: any) => {
    return first[type] - next[type];
  };

  const sortArray: Country[] = [...array];

  enterSortType === 'desc' ? sortArray.sort(sortArrayDesc) : sortArray.sort(sortArrayAsc);

  return sortArray;
};

export const calculateSumCountriesByType = (countries: any, type: string, limit: number): number => {
  const limitedArray = countries.slice(0, limit);

  let populate = 0;
  limitedArray.forEach((country: any) => {
    populate += country[type];
  });

  return populate;
};
