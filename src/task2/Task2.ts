import { Country } from '../helpers/interfaces';

export const Task2 = async () => {
  let LSCountriesData!: Country[];
  const localStorageSavedData: string | null = localStorage.getItem('allCountries');
  typeof localStorageSavedData === 'string' ? (LSCountriesData = JSON.parse(localStorageSavedData)) : null;

  // Select all EU countries
  const arrayWithEUCountries: Country[] | string = getAllEUCountries(LSCountriesData);
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
    `And it's ${isBigger} than 500 million`
  );
};

export const getAllEUCountries = (countries: Country[] | null | undefined | string | number): Country[] | string => {
  let arrayOfEUCountries: Country[] = [];

  if (countries === undefined || countries === null || typeof countries === 'string' || typeof countries === 'number') return '❗️ Enter correct data! ❗️';

  countries.filter((country) => {
    country.regionalBlocs?.forEach((c) => (c.acronym === 'EU' ? arrayOfEUCountries.push({ ...country }) : null));
  });

  return arrayOfEUCountries;
};

export const selectCountriesIncludesA = (countries: Country[] | string | number | null | undefined): Country[] | string => {
  if (countries === undefined || countries === null || typeof countries === 'string' || typeof countries === 'number') return '❗️ Enter correct data! ❗️';

  const arrayCountriesIncludeA: Country[] = countries.filter((country) => country.name.includes('a'));

  return arrayCountriesIncludeA;
};

export const sortByPopulationDesc = (array: Country[] | string | number | null | undefined): Country[] | string => {
  const sortArrayDesc = (first: Country, next: Country) => {
    return next.population - first.population;
  };

  if (typeof array === 'object' && array !== null) {
    const sortArray: Country[] = JSON.parse(JSON.stringify(array));
    sortArray.sort(sortArrayDesc);

    return sortArray;
  } else return '❗️ Enter correct data! ❗️';
};

export const calculateSum5MostPopulateCountries = (array: Country[] | string | number | null | undefined): number | string => {
  if (typeof array === 'object' && array !== null) {
    let populate = 0;
    array.forEach((country) => {
      return (populate += country.population);
    });

    return populate;
  } else return '❗️ Enter correct data! ❗️';
};
