import axios from 'axios';

export const CountriesData = async () => {
  const { data } = await axios.get('https://restcountries.com/v2/all');

  return data;
};
