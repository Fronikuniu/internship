import { getAllCountriesByTypeAndValue, sortCountriesByType } from '../task2/Task2';
import { Acronyms, Country, Languages } from '../types/interfaces';

export const Task3 = (localStorageCountriesData: Country[]) => {
  const acronyms: Acronyms = {
    EU: {
      countries: [],
      population: 0,
      languages: {},
      currencies: [],
      area: 0,
    },
    NAFTA: {
      countries: [],
      population: 0,
      languages: {},
      currencies: [],
      area: 0,
    },
    AU: {
      countries: [],
      population: 0,
      languages: {},
      currencies: [],
      area: 0,
    },
    other: {
      countries: [],
      population: 0,
      languages: {},
      currencies: [],
      area: 0,
    },
  };

  const euCountries: Country[] = getAllCountriesByTypeAndValue(localStorageCountriesData, 'regionalBlocs.acronym', 'EU', true);
  const naftaCountries: Country[] = getAllCountriesByTypeAndValue(localStorageCountriesData, 'regionalBlocs.acronym', 'NAFTA', true);
  const auCountries: Country[] = getAllCountriesByTypeAndValue(localStorageCountriesData, 'regionalBlocs.acronym', 'AU', true);
  const countriesWithoutEuNaftaAu: Country[] = getAllCountriesByTypeAndValue(localStorageCountriesData, 'regionalBlocs.acronym', 'AU EU NAFTA', false);

  getCountriesDataAbout(euCountries, 'EU', acronyms);
  getCountriesDataAbout(naftaCountries, 'NAFTA', acronyms);
  getCountriesDataAbout(auCountries, 'AU', acronyms);
  getCountriesDataAbout(countriesWithoutEuNaftaAu, 'other', acronyms);

  console.log('\n🔸 The name of the organization with the largest population:', sortObject(acronyms, { value: 'population', place: 1, sort: 'desc' }));
  console.log('\n🔸 Name of the organization with the second largest population:', sortObject(acronyms, { value: 'population', place: 2, sort: 'desc' }));
  console.log('\n🔸 The name of the organization occupying the third largest area:', sortObject(acronyms, { value: 'area', place: 3, sort: 'desc' }));
  console.log(
    '\n🔸 Names of organizations with the largest and smallest number of languages assigned to them:\n',
    'Largest:',
    sortObject(acronyms, { value: 'languages', place: 1, sort: 'desc' }),
    '\n Smallest:',
    sortObject(acronyms, { value: 'languages', place: 1, sort: 'asc' })
  );
  console.log('\n🔸 Name of the organization using the largest number of currencies:', sortObject(acronyms, { value: 'currencies', place: 1, sort: 'desc' }));
  console.log('\n🔸 The name of the organization with the fewest number of member states:', sortObject(acronyms, { value: 'countries', place: 1, sort: 'asc' }));

  console.log('\n🔸 Native name of the language used in the greatest number of countries:', sortObjectLang(acronyms, { value: 'area', place: 1, sort: 'desc' }));
  console.log('\n🔸 Native name of the language used by the smallest number of people:', sortObjectLang(acronyms, { value: 'population', place: 1, sort: 'asc' }));
  console.log(
    '\n🔸 Native names of the languages used in the largest and smallest area:\n',
    'Largest:',
    sortObjectLang(acronyms, { value: 'area', place: 1, sort: 'desc' }),
    '\n Smallest:',
    sortObjectLang(acronyms, { value: 'area', place: 1, sort: 'asc' })
  );

  console.log('\n🟠 EU, NAFTA, AU and other countries: \n', acronyms);
};

export const getCountriesDataAbout = (array: Country[], acronym: keyof Acronyms, acronyms: Acronyms) => {
  const path = acronyms[acronym];

  array.forEach((country) => {
    path.countries.push(country.nativeName);
    country.currencies?.every((currencie) => path.currencies.push(currencie.name));
    path.population += country.population;
    typeof country.area === 'number' && (path.area += country.area);

    const langKeys = Object.keys(path.languages);
    const countryLang = country.languages.map((lang) => lang.iso639_1);

    countryLang.forEach((lang, i) => {
      if (lang === langKeys[i]) {
        path.languages[lang].countries.push(country.languages[i].nativeName);
        path.languages[lang].name.push(country.alpha3Code);
        path.languages[lang].area += country.area;
        path.languages[lang].population += country.population;
      } else {
        const language = country.languages[i].iso639_1;
        const countries = country.alpha3Code;
        const name = country.languages[i].nativeName;
        const area = country.area;
        const population = country.population;
        path.languages = { ...path.languages, ...{ [language]: { population, area, name: [name], countries: [countries] } } };
      }
    });
  });

  const unique = new Set(path.currencies);
  path.currencies = Array.from(unique);
  path.countries = path.countries.sort().reverse();
};

export const sortObject = (object: Acronyms, arg: { value: keyof Acronyms; place: number; sort: string }): string => {
  const countryKeys = Object.keys(object);
  const array: string[] | number[] = [];
  const index = arg.place - 1;
  const result: string[] = [];

  countryKeys.forEach((key) => {
    const value = object[key][arg.value];
    const valueLength = Object.getOwnPropertyNames(value).length;
    if (typeof value === 'object') array.push(valueLength);
    if (typeof value !== 'object') array.push(value);
  });

  let sortedArray: string[] | number[] = [];
  if (arg.sort === 'desc') {
    sortedArray = array.sort((a: any, b: any) => b - a);
  } else {
    sortedArray = array.sort((a: any, b: any) => a - b);
  }

  countryKeys.forEach((key) => {
    const value = object[key][arg.value];
    const valueLength = Object.getOwnPropertyNames(value).length;

    if (typeof value === 'object' && valueLength === sortedArray[index]) result.push(key);
    if (typeof value !== 'object' && value === sortedArray[index]) result.push(key);
  });

  return result.toString();
};

const sortObjectLang = (object: Acronyms, arg: { value: keyof Acronyms; place: number; sort: string }) => {
  const countryKeys = Object.keys(object);
  const array: string[] | number[] = [];
  const index = arg.place - 1;
  const result: string[] = [];

  countryKeys.forEach((countryKey) => {
    const languagesKeys = Object.keys(object[countryKey].languages);

    languagesKeys.forEach((langKey) => {
      const value = object[countryKey].languages[langKey][arg.value];
      const valueLength = value.length;
      if (typeof value === 'object') array.push(valueLength);
      if (typeof value !== 'object') array.push(value);
    });
  });

  let sortedArray: string[] | number[] = [];
  if (arg.sort === 'desc') {
    sortedArray = array.sort((a: any, b: any) => b - a);
  } else {
    sortedArray = array.sort((a: any, b: any) => a - b);
  }

  countryKeys.forEach((countryKey) => {
    const languagesKeys = Object.keys(object[countryKey].languages);

    languagesKeys.forEach((langKey) => {
      const value = object[countryKey].languages[langKey][arg.value];
      const valueLength = value.length;

      if (typeof value === 'object' && valueLength === sortedArray[index]) result.push(object[countryKey].languages[langKey].name[0]);
      if (typeof value !== 'object' && value === sortedArray[index]) result.push(object[countryKey].languages[langKey].name[0]);
    });
  });

  const set = new Set(result);
  const endResult = Array.from(set);
  return endResult.toString();
};

/*
✔ * Stwórz nowy obiekt. Powinien on posiadać klucze EU, NAFTA, AU oraz other. Każdy z tych kluczy będzie zawierał obiekt o kluczach countries, population, languages oraz currencies.
  Wartościami countries oraz currencies są puste tablice, wartość population wynosi 0. Wartość languages to pusty obiekt.
✔ * W TP znajdź kraje należące do EU, NAFTA albo AU. Jeśli państwo należy do którejś z tych grup, umieść jego dane w stosownym obiekcie: natywną nazwę w tablicy countries, używane przez nią
  waluty w tablicy currencies oraz dodaj jej populację do wartości population.
✔ * Sprawdź języki przypisane do kraju. Użyj ich kodu iso639_1 jako klucza dla obiektu languages. Jeśli danego języka nie ma w obiekcie languages, przypisz do niego nowy obiekt o kluczach
  countries(wartość początkowa: pusta arajka), population(0), area(0) oraz name(pusty string). Jeśli dany język znajduje się w obiekcie languages, dodaj do tablicy countries kod alpha3code
  kraju, w którym jest używany, populację tego kraju do wartości population, obszar kraju do wartości area, a do name przypisz natywną nazwę tego języka.
✔ * Jeśli kraj nie należy do żadnej z podanych wcześniej organizacji wykonaj kroki z poprzednich dwóch punktów, ale dane umieść w tablicy other.
✔ * Jeśli kraj należy do więcej, niż jednej organizacji, umieść jego dane we wszystkich pasujących obiektach bloków. Blok other może się powtarzać.
✔ * Dla każdej organizacji dane w tablicy currencies nie mogą się powtarzać.
✔ * Dla każdej organizacji dane w tablicy countries powinny być posortowane alfabetycznie z do a.
* Wyświetl w konsoli:
 ✔- Nazwę organizacji o największej populacji,
 ✔- Nazwę organizacji o drugiej największej gęstości zaludnienia,
 ✔- Nazwę organizacji zajmującej trzeci największy obszar,
 ✔- Nazwy organizacji o największej i najmniejszej przypisanej do nich liczbie języków,
 ✔- Nazwę organizacji wykorzystującej największą liczbę walut,
 ✔- Nazwę organizacji posiadającej najmniejszą liczbę państw członkowskich,
 ✔- Natywną nazwę języka wykorzystywanego w największej liczbie krajów,
 ✔- Natywną nazwę języka wykorzystywanego przez najmniejszą liczbę ludzi,
 ✔- Natywne nazwy języków wykorzystywanych na największym i najmniejszym obszarze.
✔ * W przypadku remisów wyświetl wszystkich zwycięzców.
*/
