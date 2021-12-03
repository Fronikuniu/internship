export const test1 = [
  {
    alpha2Code: 'AF',
    name: 'Afghanistan',
    population: 38928341,
    regionalBlocs: [{ acronym: 'SAARC', name: 'South Asian Association for Regional Cooperation' }],

    alpha3Code: 'AFG',
    altSpellings: ['AF', 'Afġānistān'],
    area: 652230,
    borders: ['IRN', 'PAK', 'TKM', 'UZB', 'TJK', 'CHN'],
    callingCodes: ['93'],
    capital: 'Kabul',
    cioc: 'AFG',
    currencies: [{ code: 'AFN', name: 'Afghan afghani', symbol: '؋' }],
    demonym: 'Afghan',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
    flags: {
      svg: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
      png: 'https://upload.wikimedia.org/wikipedia/commons/thu…the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png',
    },
    independent: true,
    languages: [
      { iso639_1: 'ps', iso639_2: 'pus', name: 'Pashto', nativeName: 'پښتو' },
      { iso639_1: 'uz', iso639_2: 'uzb', name: 'Uzbek', nativeName: 'Oʻzbek' },
      { iso639_1: 'tk', iso639_2: 'tuk', name: 'Turkmen', nativeName: 'Türkmen' },
    ],
    latlng: [33, 65],
    nativeName: 'افغانستان',
    numericCode: '004',
    region: 'Asia',
    subregion: 'Southern Asia',
    timezones: ['UTC+04:30'],
    topLevelDomain: ['.af'],
    translations: { br: 'Afeganistão', pt: 'Afeganistão', nl: 'Afghanistan', hr: 'Afganistan', fa: 'افغانستان' },
  },
];

export const test2 = JSON.parse(JSON.stringify(test1));
test2[0].name = 'Afghanistan2';
test2[0].population = 41223532;
test2[0].regionalBlocs[0].acronym = 'EU';
test2[0].regionalBlocs[0].name = 'European Union';

export const test3 = JSON.parse(JSON.stringify(test2));
test3[0].name = 'Togo';
test3[0].population = 124212312;
