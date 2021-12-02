import { CountriesData } from '../helpers/Requests';
import { Country } from '../helpers/interfaces';

export const Task1 = async () => {
  //removes null and undefined from the type of an expression.
  let LSCountriesData!: Country[];
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

    console.log('📝 Data saved in localStorage.');
  } else {
    let LSdate: string;
    const dateFromLocalStorage: string | null = localStorage.getItem('dataWhenSaved');
    typeof dateFromLocalStorage === 'string' ? (LSdate = dateFromLocalStorage) : (LSdate = currentDate);

    const numericDateFromLS: number = parseInt(LSdate);
    const localStorageData: Country[] = LSCountriesData;
    const currDate: number = parseInt(currentDate);
    const nextUpdate: number = numericDateFromLS + msOf7Days;

    console.log('✔️ Data exist in localStorage ✔️');
    console.log('📅 Data of save:', new Date(numericDateFromLS));
    console.log('📄 localStorage data:', localStorageData);

    // If you exceed possiblyNextUpdateData proceed
    if (currDate >= nextUpdate) {
      console.log('📝 Now you updating data!');

      const oldData: Country[] = localStorageData;
      const newData: Country[] = await CountriesData();

      const CompareData = (oldest: Country[], newest: Country[]): string[] => {
        const changedData: string[] = [];

        oldest.forEach((old) => {
          newest.forEach((curr) => {
            if (old.alpha2Code === curr.alpha2Code) {
              old.population !== curr.population ? changedData.push(old.name) : null;
            }
          });
        });

        return changedData;
      };

      console.log('🟨 Changed data is in:', CompareData(oldData, newData));

      localStorage.setItem('allCountries', JSON.stringify(newData));
      localStorage.setItem('dataWhenSaved', currentDate);
    }
  }
};
