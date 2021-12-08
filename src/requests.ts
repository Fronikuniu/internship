export const getCountriesData = async () => {
  return await fetch('https://restcountries.com/v2/all')
    .then((res) => res.json())
    .then((data) => data);
};
