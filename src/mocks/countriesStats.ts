import { CountriesStats } from '../types/interfaces';

export const countriesStatsMock: CountriesStats = {
  EU: {
    countries: [
      'Česká republika',
      'Österreich',
      'Éire',
      'Åland',
      'Sverige',
      'Suomi',
      'Slovensko',
      'Slovenija',
      'România',
      'Portugal',
      'Polska',
      'Nederland',
      'Malta',
      'Magyarország',
      'Lëtzebuerg',
      'Lietuva',
    ],
    population: 4236679,
    languages: {
      bg: { population: 6927288, area: 110879, name: Array(1), countries: Array(1) },
      cs: { population: 10698896, area: 78865, name: Array(1), countries: Array(1) },
      da: { population: 5831404, area: 43094, name: Array(1), countries: Array(1) },
      de: { population: 83872800, area: 359700, name: Array(2), countries: Array(2) },
      el: { population: 10715549, area: 131990, name: Array(1), countries: Array(1) },
      en: { population: 525285, area: 316, name: Array(1), countries: Array(1) },
      es: { population: 47351567, area: 505992, name: Array(1), countries: Array(1) },
      et: { population: 1331057, area: 45227, name: Array(1), countries: Array(1) },
    },
    currencies: [
      'Euro',
      'Bulgarian lev',
      'Croatian kuna',
      'Czech koruna',
      'Danish krone',
      'Gibraltar pound',
      'Hungarian forint',
      'British pound',
      'Manx pound',
      'Polish złoty',
      'Romanian leu',
      'Swedish krona',
    ],
    area: 496422114,
  },
  NAFTA: {
    countries: ['United States', 'México', 'Canada'],
    population: 21578136,
    languages: {
      en: { population: 367489361, area: 19613761, name: Array(2), countries: Array(2) },
      es: { population: 128932753, area: 1964375, name: Array(1), countries: Array(1) },
      fr: { population: 38005238, area: 9984670, name: Array(1), countries: Array(1) },
    },
    currencies: ['Canadian dollar', 'Mexican peso', 'United States dollar'],
    area: 496422114,
  },
  AU: {
    countries: ['السودان', 'الجزائر', 'Zimbabwe', 'Zambia', 'Uganda', 'Togo', 'Territoire des Terres australes et antarctiques françaises', 'Tchad', 'Tanzania'],
    population: 30323497,
    languages: {
      aa: { population: 5352000, area: 117600, name: Array(1), countries: Array(1) },
      af: { population: 59308690, area: 1221037, name: Array(1), countries: Array(1) },
      am: { population: 114963583, area: 1104300, name: Array(1), countries: Array(1) },
      ar: { population: 71561106, area: 2687335, name: Array(3), countries: Array(3) },
      en: { population: 14862927, area: 390757, name: Array(1), countries: Array(1) },
    },
    currencies: [
      'Algerian dinar',
      'Angolan kwanza',
      'West African CFA franc',
      'Botswana pula',
      'United States dollar',
      'Burundian franc',
      'Central African CFA franc',
      'Cape Verdean escudo',
      'Comorian franc',
      'Congolese franc',
      'Djiboutian franc',
    ],
    area: 30323497,
  },
  other: {
    countries: [
      '‏ليبيا',
      '‏البحرين',
      'ኤርትራ',
      'ኢትዮጵያ',
      'ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ',
      'ประเทศไทย',
      'भारत',
      'नेपाल',
      'موريتانيا',
      'مصر‎',
      'لبنان',
      'قطر',
      'فلسطين',
      'عمان',
      'سوريا',
      'دولة الإمارات العربية المتحدة',
      'تونس',
      'اليَمَن',
      'المغرب',
    ],
    population: 5703430008,
    languages: {
      aa: { population: 5352000, area: 117600, name: Array(1), countries: Array(1) },
      af: { population: 59308690, area: 1221037, name: Array(1), countries: Array(1) },
      am: { population: 114963583, area: 1104300, name: Array(1), countries: Array(1) },
      ar: { population: 29825968, area: 527968, name: Array(1), countries: Array(1) },
      ay: { population: 11673029, area: 1098581, name: Array(1), countries: Array(1) },
      be: { population: 9398861, area: 207600, name: Array(1), countries: Array(1) },
      bg: { population: 6927288, area: 110879, name: Array(1), countries: Array(1) },
      bn: { population: 164689383, area: 147570, name: Array(1), countries: Array(1) },
      bs: { population: 621718, area: 13812, name: Array(1), countries: Array(1) },
      cs: { population: 10698896, area: 78865, name: Array(1), countries: Array(1) },
      da: { population: 5831404, area: 43094, name: Array(1), countries: Array(1) },
      de: { population: 8636896, area: 41284, name: Array(1), countries: Array(1) },
      dv: { population: 540542, area: 300, name: Array(1), countries: Array(1) },
    },
    currencies: [
      'Afghan afghani',
      'Euro',
      'Albanian lek',
      'Algerian dinar',
      'Angolan kwanza',
      'East Caribbean dollar',
      'Argentine peso',
      'Armenian dram',
      'Bahamian dollar',
      'Bahraini dinar',
      'Bangladeshi taka',
      'Barbadian dollar',
    ],
    area: 109094936,
  },
};

export const countriesMock = {
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

export const euCountriesMock: CountriesStats = {
  EU: {
    countries: ['Polska', 'Deutschland'],
    population: 121191327,
    languages: {
      pl: {
        area: 312679,
        countries: ['POL'],
        name: ['język polski'],
        population: 37950802,
      },
      de: {
        area: 357114,
        countries: ['DEU'],
        name: ['Deutsch'],
        population: 83240525,
      },
    },
    currencies: ['Polish złoty', 'Euro'],
    area: 669793,
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

export const otherCountriesMock = {
  EU: {
    countries: ['Polska', 'Deutschland'],
    population: 121191327,
    languages: {
      pl: {
        area: 312679,
        countries: ['POL'],
        name: ['język polski'],
        population: 37950802,
      },
      de: {
        area: 357114,
        countries: ['DEU'],
        name: ['Deutsch'],
        population: 83240525,
      },
    },
    currencies: ['Polish złoty', 'Euro'],
    area: 669793,
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
    countries: ['افغانستان'],
    population: 38928341,
    languages: {
      ps: {
        area: 652230,
        countries: ['AFG'],
        name: ['پښتو'],
        population: 38928341,
      },
      uz: {
        area: 652230,
        countries: ['AFG'],
        name: ['Oʻzbek'],
        population: 38928341,
      },
      tk: {
        area: 652230,
        countries: ['AFG'],
        name: ['Türkmen'],
        population: 38928341,
      },
    },
    currencies: ['Afghan afghani'],
    area: 652230,
  },
};

export const sortCountriesObjectMock = {
  EU: {
    countries: ['Polska', 'Deutschland'],
    population: 121191327,
    languages: {
      pl: {
        area: 312679,
        countries: ['POL'],
        name: ['język polski'],
        population: 37950802,
      },
      de: {
        area: 357114,
        countries: ['DEU'],
        name: ['Deutsch'],
        population: 83240525,
      },
    },
    currencies: ['Polish złoty', 'Euro'],
    area: 669793,
  },
  NAFTA: {
    countries: ['United States'],
    population: 329484123,
    languages: {
      en: {
        area: 9629091,
        countries: ['USA', 'CAN'],
        name: ['English', 'English'],
        population: 329484123,
      },
    },
    currencies: ['United States dollar'],
    area: 9629091,
  },
  AU: {
    countries: ['Togo'],
    population: 8278737,
    languages: {
      fr: {
        area: 56785,
        countries: ['TGO'],
        name: ['français'],
        population: 8278737,
      },
    },
    currencies: ['West African CFA franc'],
    area: 56785,
  },
  other: {
    countries: ['افغانستان'],
    population: 38928341,
    languages: {
      ps: {
        area: 652230,
        countries: ['AFG'],
        name: ['پښتو'],
        population: 38928341,
      },
      uz: {
        area: 652230,
        countries: ['AFG'],
        name: ['Oʻzbek'],
        population: 38928341,
      },
      tk: {
        area: 652230,
        countries: ['AFG'],
        name: ['Türkmen'],
        population: 38928341,
      },
    },
    currencies: ['Afghan afghani'],
    area: 652230,
  },
};
