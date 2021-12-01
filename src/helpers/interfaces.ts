export interface Country {
  alpha2Code: string;
  alpha3Code: string;
  altSpellings: Array<string>;
  area: number;
  borders: Array<string>;
  callingCodes: Array<string>;
  capital: string;
  cioc: string;
  currencies: { code: string; name: string; symbol: string }[];
  demonym: string;
  flag: string;
  flags: { svg: string; png: string };
  independent: boolean;
  languages: { iso639_1: string; iso639_2: string; name: string; nativeName: string }[];
  latlng: Array<number>;
  name: string;
  nativeName: string;
  numericCode: string;
  population: number;
  region: string;
  regionalBlocs: { acronym: string; name: string }[];
  subregion: string;
  timezones: Array<string>;
  topLevelDomain: Array<string>;
  translations: {
    br: string;
    de: string;
    es: string;
    fa: string;
    fr: string;
    hr: string;
    hu: string;
    it: string;
    ja: string;
    nl: string;
    pt: string;
  };
}
