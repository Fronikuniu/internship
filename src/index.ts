import { Task1 } from './task1/Task1';
import { Task2 } from './task2/Task2';
import { Task3 } from './task3/Task3';

const localStorageSavedData: string | null = localStorage.getItem('allCountries');
export const localStorageCountriesData = typeof localStorageSavedData === 'string' && JSON.parse(localStorageSavedData);

window.onload = () => {
  console.log('╔═══════════════╗\n║    Task 1     ║\n╚═══════════════╝');
  Task1();

  console.log('╔═══════════════╗\n║    Task 2     ║\n╚═══════════════╝');
  Task2();

  console.log('╔═══════════════╗\n║    Task 3     ║\n╚═══════════════╝');
  Task3();

  console.log('╔═══════════════╗\n║     Logs      ║\n╚═══════════════╝');
};

console.log();
