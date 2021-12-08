import { getAllCountriesByTypeAndValue } from '../task2/Task2';
import { acronyms, Country } from '../types/interfaces';

export const Task3 = (localStorageCountriesData: Country[]) => {
  const acronyms: acronyms = {
    EU: {
      countries: [],
      population: 0,
      languages: {},
      currencies: [],
    },
    NAFTA: {
      countries: [],
      population: 0,
      languages: {},
      currencies: [],
    },
    AU: {
      countries: [],
      population: 0,
      languages: {},
      currencies: [],
    },
    other: {
      countries: [],
      population: 0,
      languages: {},
      currencies: [],
    },
  };

  const euCountries: Country[] = getAllCountriesByTypeAndValue(localStorageCountriesData, 'regionalBlocs acronym', 'EU', true);
  const naftaCountries: Country[] = getAllCountriesByTypeAndValue(localStorageCountriesData, 'regionalBlocs acronym', 'NAFTA', true);
  const auCountries: Country[] = getAllCountriesByTypeAndValue(localStorageCountriesData, 'regionalBlocs acronym', 'AU', true);
  const countriesWithoutEuNaftaAu: Country[] = getAllCountriesByTypeAndValue(localStorageCountriesData, 'regionalBlocs acronym', 'EU NAFTA AU', false);

  const langObject = {
    iso639_1: {
      countries: ['alpha3Code'],
      population: 0,
      area: 0,
      name: 'nativeName',
    },
  };

  euCountries.forEach((country) => {
    acronyms.EU.countries.push(country.nativeName);
    country.currencies.every((currencie) => acronyms.EU.currencies.push(currencie.name));
    acronyms.EU.population += country.population;
  });

  naftaCountries.forEach((country) => {
    acronyms.NAFTA.countries.push(country.nativeName);
    country.currencies.every((currencie) => acronyms.NAFTA.currencies.push(currencie.name));
    acronyms.NAFTA.population += country.population;
  });

  auCountries.forEach((country) => {
    acronyms.AU.countries.push(country.nativeName);
    country.currencies.every((currencie) => acronyms.AU.currencies.push(currencie.name));
    acronyms.AU.population += country.population;
  });

  countriesWithoutEuNaftaAu.forEach((country) => {
    acronyms.other.countries.push(country.nativeName);
    country.currencies?.every((currencie) => acronyms.other.currencies.push(currencie.name));
    acronyms.other.population += country.population;
  });

  const keys = Object.keys(acronyms);
  keys.forEach((key) => {
    acronyms[key].currencies = new Set(acronyms[key].currencies);
    acronyms[key].countries = acronyms[key].countries.sort().reverse();
  });

  console.log('\n🔸 EU, NAFTA, AU and other countries: \n', acronyms);
};

//✔ * Stwórz nowy obiekt. Powinien on posiadać klucze EU, NAFTA, AU oraz other. Każdy z tych kluczy będzie zawierał obiekt o kluczach countries, population, languages oraz currencies.
//   Wartościami countries oraz currencies są puste tablice, wartość population wynosi 0. Wartość languages to pusty obiekt.
//✔ * W TP znajdź kraje należące do EU, NAFTA albo AU. Jeśli państwo należy do którejś z tych grup, umieść jego dane w stosownym obiekcie: natywną nazwę w tablicy countries, używane przez nią
//   waluty w tablicy currencies oraz dodaj jej populację do wartości population.
//? * Sprawdź języki przypisane do kraju. Użyj ich kodu iso639_1 jako klucza dla obiektu languages. Jeśli danego języka nie ma w obiekcie languages, przypisz do niego nowy obiekt o kluczach
//   countries(wartość początkowa: pusta arajka), population(0), area(0) oraz name(pusty string). Jeśli dany język znajduje się w obiekcie languages, dodaj do tablicy countries kod alpha3code
//   kraju, w którym jest używany, populację tego kraju do wartości population, obszar kraju do wartości area, a do name przypisz natywną nazwę tego języka.
//-✔ * Jeśli kraj nie należy do żadnej z podanych wcześniej organizacji wykonaj kroki z poprzednich dwóch punktów, ale dane umieść w tablicy other.
// * Jeśli kraj należy do więcej, niż jednej organizacji, umieść jego dane we wszystkich pasujących obiektach bloków. Blok other może się powtarzać.
//✔ * Dla każdej organizacji dane w tablicy currencies nie mogą się powtarzać.
//✔ * Dla każdej organizacji dane w tablicy countries powinny być posortowane alfabetycznie z do a.
// * Wyświetl w konsoli:
//  - Nazwę organizacji o największej populacji,
//  - Nazwę organizacji o drugiej największej gęstości zaludnienia,
//  - Nazwę organizacji zajmującej trzeci największy obszar,
//  - Nazwy organizacji o największej i najmniejszej przypisanej do nich liczbie języków,
//  - Nazwę organizacji wykorzystującej największą liczbę walut,
//  - Nazwę organizacji posiadającej najmniejszą liczbę państw członkowskich,
//  - Natywną nazwę języka wykorzystywanego w największej liczbie krajów,
//  - Natywną nazwę języka wykorzystywanego przez najmniejszą liczbę ludzi,
//  - Natywne nazwy języków wykorzystywanych na największym i najmniejszym obszarze.
// * W przypadku remisów wyświetl wszystkich zwycięzców.
