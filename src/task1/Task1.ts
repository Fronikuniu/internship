import { CountriesData } from '../helpers/Requests';
import { Country } from '../helpers/interfaces';

export const Task1 = async () => {
  const localStorageSavedData: any = localStorage.getItem('allCountries');

  const currentData = new Date().toString();
  const nextUpdateDate = new Date();
  nextUpdateDate.setDate(nextUpdateDate.getDate() + 7);

  // Check if the data is in the localStorage
  if (!localStorageSavedData) {
    console.log('❗ Data does not exist ❗');

    // Get data from api
    const countries: Country[] = await CountriesData();

    // Save countries data to LocalStorage, save
    localStorage.setItem('allCountries', JSON.stringify(countries));
    localStorage.setItem('dataWhenSaved', currentData);
    localStorage.setItem('possibleNextUpdateDate', nextUpdateDate.toString());

    console.log('📝 Data saved in localStorage.');
  } else {
    const possiblyNextUpdateData: string | null = localStorage.getItem('possibleNextUpdateDate');
    console.log(typeof possiblyNextUpdateData);

    console.log('🟩 Data exist in localStorage 🟩');
    console.log('📅 Data of save:', localStorage.getItem('dataWhenSaved'));
    console.log('📅 Data of possibly next update:', possiblyNextUpdateData);
    console.log('📄 localStorage data:', JSON.parse(localStorageSavedData));

    // If you exceed possiblyNextUpdateData proceed
    // (typeof possiblyNextUpdateData === 'string' && possiblyNextUpdateData) - This may be instead of possiblyNextUpdateData in this if?
    if (currentData >= possiblyNextUpdateData) {
      console.log('📝 Now you updating data!');

      const oldData: Country[] = JSON.parse(localStorageSavedData);
      const newData: Country[] = await CountriesData();

      const CompareData = (oldest: Country[], newest: Country[]): Array<string> => {
        const changedData: Array<string> = [];

        oldest.forEach((old, oldIndex) => {
          newest.forEach((curr, currIndex) => {
            if (oldIndex === currIndex) {
              old.population !== curr.population ? changedData.push(old.name) : null;
            }
          });
        });

        return changedData;
      };

      console.log('🟨 Changed data is in:', CompareData(oldData, newData));

      localStorage.setItem('allCountries', JSON.stringify(newData));
      localStorage.setItem('dataWhenSaved', currentData);
      localStorage.setItem('possibleNextUpdateDate', nextUpdateDate.toString());
    }
  }
};

/**
 * Ściągnij wszystkie możliwe dane państw z pomocą API: https://restcountries.com/v2/all. W dalszej części kursu będą one nazywane Tablicą Państw (TP).
 * Ściągnięte dane zapisz w sposób, który pozwoli na ich ponowne wykorzystanie po zamknięciu i ponownym otwarciu przeglądarki,
 * Przy starcie aplikacji sprawdź, czy dane państw istnieją w pamięci przeglądarki. Jeśli nie, ściągnij je,
 * Przy starcie aplikacji sprawdź ile czasu minęło od poprzedniego ściągnięcia danych państw. Jeśli od ostatniego razu minęło co najmniej 7 dni, ściągnij i zapisz je ponownie.
 * Stwórz metodę, która przy ponownym ściąganiu danych państw porówna populację między starym i nowym zestawem danych oraz wyświetli wszystkie nazwy państw, których populacja uległa zmianie.
 *
 * Kod powinien być w pełni otypowany.
 * Kod powinien posiadać pełen zestaw testów (Jest).
 * Kod może posiadać komentarze.
 */
