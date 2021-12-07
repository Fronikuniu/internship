import { Country } from '../types/interfaces';

export const Task2 = async () => {
  const localStorageSavedData: string | null = localStorage.getItem('allCountries');
  const localStorageCountriesData = typeof localStorageSavedData === 'string' && JSON.parse(localStorageSavedData);

  // Select all EU countries
  const enterAcronym = 'eu'.toUpperCase();
  const arrayWithEUCountries: Country[] | string = getAllCountriesByAcronym(localStorageCountriesData, enterAcronym);
  console.log(`\n🔹 Countries of the ${enterAcronym}: \n`, arrayWithEUCountries);

  // From all EU countries take countries which include any letter
  const enterLetter = 'a';
  const arrayOfEUCountriesIncludesA: Country[] | string = selectCountriesIncludesAnyLetter(arrayWithEUCountries, enterLetter);
  console.log(`\n🔹 Countries of the ${enterAcronym}, include '${enterLetter.toUpperCase()}':\n`, arrayOfEUCountriesIncludesA);

  // From all EU countries take countries which include 'a' and sort descending
  const sortType: 'desc' | 'asc' = 'desc';
  const sortedArray = sortByPopulation(arrayOfEUCountriesIncludesA, sortType);
  console.log(`\n🔹 Countries of the ${enterAcronym}, include '${enterLetter.toUpperCase()}', sorted ${sortType.toUpperCase()}: \n`, sortedArray);

  // From all EU countries take countries which include 'a', sort descending and calculate the population sum
  const enterLimit: number = 5;
  const populateOfLimitedArray = calculateSumPopulateCountries(sortedArray, enterLimit);
  const isBigger = populateOfLimitedArray > 500_000_000 ? '↗️ bigger' : '↘️ less';
  console.log(
    `\n🔹 Countries of the ${enterAcronym}, include '${enterLetter.toUpperCase()}', sorted ${sortType.toUpperCase()} and calculate population ➕: \n\n   Population 5 most populous countries is equal:`,
    populateOfLimitedArray,
    `And it's ${isBigger} than 500 million.`
  );
};

export const getAllCountriesByAcronym = (countries: Country[], acronym: string): Country[] => {
  return countries.filter((country) => {
    return country.regionalBlocs?.some((c) => c.acronym === acronym);
  });
};

export const selectCountriesIncludesAnyLetter = (countries: Country[], letter: string): Country[] => {
  return countries.filter((country) => country.name.includes(letter));
};

export const sortByPopulation = (array: Country[], sortType: string): Country[] => {
  const sortArrayDesc = (first: Country, next: Country) => {
    return next.population - first.population;
  };

  const sortArrayAsc = (first: Country, next: Country) => {
    return first.population - next.population;
  };

  const sortArray: Country[] = [...array];

  sortType === 'desc' ? sortArray.sort(sortArrayDesc) : sortArray.sort(sortArrayAsc);

  return sortArray;
};

export const calculateSumPopulateCountries = (array: Country[], limit: number): number => {
  const limitedArray = array.slice(0, limit);

  let populate = 0;
  limitedArray.forEach((country) => {
    populate += country.population;
  });

  return populate;
};
