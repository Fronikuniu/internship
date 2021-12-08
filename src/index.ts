import { configuration } from './config';
import { Task1 } from './task1/Task1';
import { Task2 } from './task2/Task2';
import { Task3 } from './task3/Task3';

window.onload = () => {
  const localStorageSavedData: string | null = localStorage.getItem(configuration.countriesKey);
  const localStorageCountriesData = typeof localStorageSavedData === 'string' && JSON.parse(localStorageSavedData);

  console.log('╔═══════════════╗\n║    Task 1     ║\n╚═══════════════╝');
  Task1(localStorageCountriesData);

  console.log('╔═══════════════╗\n║    Task 2     ║\n╚═══════════════╝');
  Task2(localStorageCountriesData);

  console.log('╔═══════════════╗\n║    Task 3     ║\n╚═══════════════╝');
  Task3(localStorageCountriesData);

  console.log('╔═══════════════╗\n║     Logs      ║\n╚═══════════════╝');
};
