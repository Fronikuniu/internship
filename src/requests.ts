import { Country } from './types/interfaces';

export const getCountriesData = async (): Promise<Country[]> => {
  return (await fetch('https://restcountries.com/v2/all')
    .then((res) => res.json())
    .then((data) => data)) as Country[];
};
