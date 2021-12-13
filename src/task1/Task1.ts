import { configuration } from '../config';
import { getCountriesData } from '../requests';
import { Country } from '../types/interfaces';

export const Task1 = async (localStorageCountriesData: Country[]) => {
  const currentDate = Date.now();

  // Check if the data is in the localStorage
  if (!localStorageCountriesData) {
    console.log('❗ Data does not exist ❗');

    // Get data from api
    const countries: Country[] = await getCountriesData();

    // Save countries data to LocalStorage, save
    localStorage.setItem(configuration.countriesKey, JSON.stringify(countries));
    localStorage.setItem(configuration.dateKey, currentDate.toString());

    console.log('📝 Data saved in localStorage.');
    console.log('📢 Refresh page!');
  } else {
    const dateFromLocalStorage: string | null = localStorage.getItem(configuration.dateKey);
    const lastSaveDate: string | number = typeof dateFromLocalStorage === 'string' ? parseInt(dateFromLocalStorage) : currentDate;

    const numericDateFromLocalStorage: number = lastSaveDate;
    const localStorageData: Country[] = localStorageCountriesData;
    const currDate: number = currentDate;
    const nextUpdate: number = numericDateFromLocalStorage + configuration.msOfDays;

    console.log('✔️ Data exist in localStorage ✔️');
    console.log('\n📅 Data of save:\n\n', new Date(numericDateFromLocalStorage));
    console.log('\n📄 localStorage data:\n', localStorageData);

    // If you exceed possiblyNextUpdateData proceed
    if (currDate >= nextUpdate) {
      console.log('📝 Now you updating data!');

      const oldData: Country[] = localStorageData;
      const newData: Country[] = await getCountriesData();

      console.log('🟨 Changed data is in:\n', compareData(oldData, newData));

      localStorage.setItem(configuration.countriesKey, JSON.stringify(newData));
      localStorage.setItem(configuration.dateKey, currentDate.toString());
    }
  }
};

export const compareData = (oldest: Country[], newest: Country[]): Country[] => {
  return oldest.filter((old, i) => {
    if (old.alpha2Code === newest[i].alpha2Code) {
      if (old.population !== newest[i].population) return old.name;
    }
  });
};
