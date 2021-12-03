import { CountriesData } from '../helpers/Requests';
import { Country } from '../helpers/interfaces';

export const Task1 = async () => {
  // ! - Removes null and undefined from the type of an expression.
  let LSCountriesData: Country[] = [];
  const localStorageSavedData: string | null = localStorage.getItem('allCountries');
  typeof localStorageSavedData === 'string' ? (LSCountriesData = JSON.parse(localStorageSavedData)) : null;

  const currentDate = Date.now().toString();
  const msOf7Days = 604_800_000;

  // Check if the data is in the localStorage
  if (!LSCountriesData) {
    console.log('❗ Data does not exist ❗');

    // Get data from api
    const countries: Country[] = await CountriesData();

    // Save countries data to LocalStorage, save
    localStorage.setItem('allCountries', JSON.stringify(countries));
    localStorage.setItem('dataWhenSaved', currentDate);

    console.log('\n📝 Data saved in localStorage.');
  } else {
    let LSdate: string;
    const dateFromLocalStorage: string | null = localStorage.getItem('dataWhenSaved');
    typeof dateFromLocalStorage === 'string' ? (LSdate = dateFromLocalStorage) : (LSdate = currentDate);

    const numericDateFromLS: number = parseInt(LSdate);
    const localStorageData: Country[] = LSCountriesData;
    const currDate: number = parseInt(currentDate);
    const nextUpdate: number = numericDateFromLS + msOf7Days;

    console.log('✔️ Data exist in localStorage ✔️');
    console.log('\n📅 Data of save:\n\n', new Date(numericDateFromLS));
    console.log('\n📄 localStorage data:\n', localStorageData);

    // If you exceed possiblyNextUpdateData proceed
    if (currDate >= nextUpdate) {
      console.log('📝 Now you updating data!');

      const oldData: Country[] = localStorageData;
      const newData: Country[] = await CountriesData();

      console.log('🟨 Changed data is in:\n', compareData(oldData, newData));

      localStorage.setItem('allCountries', JSON.stringify(newData));
      localStorage.setItem('dataWhenSaved', currentDate);
    }
  }
};

export const compareData = (oldest: Country[] | undefined | null | string | number, newest: Country[] | undefined | null | string | number): string[] | string => {
  const changedData: string[] = [];

  if (
    newest === undefined ||
    newest === null ||
    oldest === null ||
    oldest === undefined ||
    typeof newest === 'string' ||
    typeof newest === 'number' ||
    typeof oldest === 'string' ||
    typeof oldest === 'number'
  )
    return '❗️ Enter correct data! ❗️';

  oldest.forEach((old) => {
    newest.forEach((curr) => {
      if (old.alpha2Code === curr.alpha2Code) {
        old.population !== curr.population ? changedData.push(old.name) : null;
      }
    });
  });

  return changedData;
};
