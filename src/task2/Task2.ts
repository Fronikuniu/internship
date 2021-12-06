import { Country } from '../types/interfaces';

export const Task2 = async () => {
  const localStorageSavedData: string | null = localStorage.getItem('allCountries');
  const localStorageCountriesData = typeof localStorageSavedData === 'string' && JSON.parse(localStorageSavedData);

  // Select all EU countries
  const arrayWithEUCountries: Country[] | string = getAllEUCountries(localStorageCountriesData);
  console.log('\n🔹 Countries of the 🇪🇺: \n', arrayWithEUCountries);

  // From all EU countries take countries which include 'a'
  const arrayOfEUCountriesIncludesA: Country[] | string = selectCountriesIncludesA(arrayWithEUCountries);
  console.log('\n🔹 Countries of the 🇪🇺 include 🅰:\n', arrayOfEUCountriesIncludesA);

  // From all EU countries take countries which include 'a' and sort descending
  const sortedArray = sortByPopulationDesc(arrayOfEUCountriesIncludesA);
  console.log('\n🔹 Countries of the 🇪🇺 include 🅰, sorted 📉: \n', sortedArray);

  // From all EU countries take countries which include 'a', sort descending and calculate the population sum
  const limitedSortedArray = sortedArray.slice(0, 5);
  const populateOfLimitedArray = calculateSum5MostPopulateCountries(limitedSortedArray);
  const isBigger = populateOfLimitedArray > 500_000_000 ? '↗️ bigger' : '↘️ less';
  console.log(
    '\n🔹 Countries of the 🇪🇺 include 🅰, sorted 📉 and calculate population ➕: \n\n   Population 5 most populous countries is equal:',
    populateOfLimitedArray,
    `And it's ${isBigger} than 500 million.`
  );
};

export const getAllEUCountries = (countries: Country[]): Country[] => {
  const arrayOfEUCountries = countries.filter((country) => {
    return country.regionalBlocs?.some((c) => c.acronym === 'EU');
  });

  return arrayOfEUCountries;
};

export const selectCountriesIncludesA = (countries: Country[]): Country[] => {
  const arrayCountriesIncludeA: Country[] = countries.filter((country) => country.name.includes('a'));

  return arrayCountriesIncludeA;
};

export const sortByPopulationDesc = (array: Country[]): Country[] => {
  const sortArrayDesc = (first: Country, next: Country) => {
    return next.population - first.population;
  };

  const sortArray: Country[] = [...array];
  sortArray.sort(sortArrayDesc);

  return sortArray;
};

export const calculateSum5MostPopulateCountries = (array: Country[]): number => {
  let populate = 0;
  array.forEach((country) => {
    populate += country.population;
  });

  return populate;
};
