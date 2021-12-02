export const CountriesData = async () => {
  const data = await fetch('https://restcountries.com/v2/all')
    .then((res) => res.json())
    .then((data) => data);

  return data;
};
