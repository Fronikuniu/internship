import { CountriesData } from '../helpers/Requests';
import { Country } from '../types/interfaces';

export const Task1 = async () => {
  const configuration = {
    countriesKey: 'allCountries',
    dateKey: 'dateWhenSaved',
  };

  const localStorageSavedData: string | null = localStorage.getItem(configuration.countriesKey);
  const localStorageCountriesData = typeof localStorageSavedData === 'string' && JSON.parse(localStorageSavedData);

  const currentDate = Date.now();
  const msOf7Days = 604_800_000;

  // Check if the data is in the localStorage
  if (!localStorageCountriesData) {
    console.log('❗ Data does not exist ❗');

    // Get data from api
    const countries: Country[] = await CountriesData();

    // Save countries data to LocalStorage, save
    localStorage.setItem(configuration.countriesKey, JSON.stringify(countries));
    localStorage.setItem(configuration.dateKey, currentDate.toString());

    console.log('\n📝 Data saved in localStorage.');
  } else {
    const dateFromLocalStorage: string | null = localStorage.getItem(configuration.dateKey);
    const lastSaveDate: string | number = typeof dateFromLocalStorage === 'string' ? parseInt(dateFromLocalStorage) : currentDate;

    const numericDateFromLocalStorage: number = lastSaveDate;
    const localStorageData: Country[] = localStorageCountriesData;
    const currDate: number = currentDate;
    const nextUpdate: number = numericDateFromLocalStorage + msOf7Days;

    console.log('✔️ Data exist in localStorage ✔️');
    console.log('\n📅 Data of save:\n\n', new Date(numericDateFromLocalStorage));
    console.log('\n📄 localStorage data:\n', localStorageData);

    // If you exceed possiblyNextUpdateData proceed
    if (currDate >= nextUpdate) {
      console.log('📝 Now you updating data!');

      const oldData: Country[] = localStorageData;
      const newData: Country[] = await CountriesData();

      console.log('🟨 Changed data is in:\n', compareData(oldData, newData));

      localStorage.setItem(configuration.countriesKey, JSON.stringify(newData));
      localStorage.setItem(configuration.dateKey, currentDate.toString());
    }
  }
};

export const compareData = (oldest: Country[], newest: Country[]): string[] => {
  const changedData: string[] = [];

  oldest.forEach((old, i) => {
    if (old.alpha2Code === newest[i].alpha2Code) {
      old.population !== newest[i].population ? changedData.push(old.name) : null;
    }
  });

  return changedData;
};
