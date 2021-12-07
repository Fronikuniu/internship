// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/helpers/Requests.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CountriesData = void 0;

var CountriesData = function CountriesData() {
  return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , fetch('https://restcountries.com/v2/all').then(function (res) {
            return res.json();
          }).then(function (data) {
            return data;
          })];

        case 1:
          return [2
          /*return*/
          , _a.sent()];
      }
    });
  });
};

exports.CountriesData = CountriesData;
},{}],"src/task1/Task1.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compareData = exports.Task1 = void 0;

var Requests_1 = require("../helpers/Requests");

var __1 = require("..");

var Task1 = function Task1() {
  return __awaiter(void 0, void 0, void 0, function () {
    var configuration, currentDate, msOf7Days, countries, dateFromLocalStorage, lastSaveDate, numericDateFromLocalStorage, localStorageData, currDate, nextUpdate, oldData, newData;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          configuration = {
            countriesKey: 'allCountries',
            dateKey: 'dateWhenSaved'
          };
          currentDate = Date.now();
          msOf7Days = 604800000;
          if (!!__1.localStorageCountriesData) return [3
          /*break*/
          , 2];
          console.log('❗ Data does not exist ❗');
          return [4
          /*yield*/
          , Requests_1.CountriesData()];

        case 1:
          countries = _a.sent(); // Save countries data to LocalStorage, save

          localStorage.setItem(configuration.countriesKey, JSON.stringify(countries));
          localStorage.setItem(configuration.dateKey, currentDate.toString());
          console.log('📝 Data saved in localStorage.');
          console.log('📢 Refresh page!');
          return [3
          /*break*/
          , 4];

        case 2:
          dateFromLocalStorage = localStorage.getItem(configuration.dateKey);
          lastSaveDate = typeof dateFromLocalStorage === 'string' ? parseInt(dateFromLocalStorage) : currentDate;
          numericDateFromLocalStorage = lastSaveDate;
          localStorageData = __1.localStorageCountriesData;
          currDate = currentDate;
          nextUpdate = numericDateFromLocalStorage + msOf7Days;
          console.log('✔️ Data exist in localStorage ✔️');
          console.log('\n📅 Data of save:\n\n', new Date(numericDateFromLocalStorage));
          console.log('\n📄 localStorage data:\n', localStorageData);
          if (!(currDate >= nextUpdate)) return [3
          /*break*/
          , 4];
          console.log('📝 Now you updating data!');
          oldData = localStorageData;
          return [4
          /*yield*/
          , Requests_1.CountriesData()];

        case 3:
          newData = _a.sent();
          console.log('🟨 Changed data is in:\n', exports.compareData(oldData, newData));
          localStorage.setItem(configuration.countriesKey, JSON.stringify(newData));
          localStorage.setItem(configuration.dateKey, currentDate.toString());
          _a.label = 4;

        case 4:
          return [2
          /*return*/
          ];
      }
    });
  });
};

exports.Task1 = Task1;

var compareData = function compareData(oldest, newest) {
  var changedData = [];
  oldest.forEach(function (old, i) {
    if (old.alpha2Code === newest[i].alpha2Code) {
      old.population !== newest[i].population ? changedData.push(old.name) : null;
    }
  });
  return changedData;
};

exports.compareData = compareData;
},{"../helpers/Requests":"src/helpers/Requests.ts","..":"src/index.ts"}],"src/task2/Task2.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __spreadArray = this && this.__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateSumPopulateCountries = exports.sortByPopulation = exports.selectCountriesIncludesAnyLetter = exports.getAllCountriesByAcronym = exports.Task2 = void 0;

var __1 = require("..");

var Task2 = function Task2() {
  return __awaiter(void 0, void 0, void 0, function () {
    var enterAcronym, arrayWithEUCountries, enterLetter, arrayOfEUCountriesIncludesA, sortType, sortedArray, enterLimit, populateOfLimitedArray, isBigger;
    return __generator(this, function (_a) {
      enterAcronym = 'eu'.toUpperCase();
      arrayWithEUCountries = exports.getAllCountriesByAcronym(__1.localStorageCountriesData, enterAcronym);
      console.log("\n\uD83D\uDD39 Countries of the " + enterAcronym + ": \n", arrayWithEUCountries);
      enterLetter = 'a';
      arrayOfEUCountriesIncludesA = exports.selectCountriesIncludesAnyLetter(arrayWithEUCountries, enterLetter);
      console.log("\n\uD83D\uDD39 Countries of the " + enterAcronym + ", include '" + enterLetter.toUpperCase() + "':\n", arrayOfEUCountriesIncludesA);
      sortType = 'desc';
      sortedArray = exports.sortByPopulation(arrayOfEUCountriesIncludesA, sortType);
      console.log("\n\uD83D\uDD39 Countries of the " + enterAcronym + ", include '" + enterLetter.toUpperCase() + "', sorted " + sortType.toUpperCase() + ": \n", sortedArray);
      enterLimit = 3;
      populateOfLimitedArray = exports.calculateSumPopulateCountries(sortedArray, enterLimit);
      isBigger = populateOfLimitedArray > 500000000 ? '↗️ bigger' : '↘️ less';
      console.log("\n\uD83D\uDD39 Countries of the " + enterAcronym + ", include '" + enterLetter.toUpperCase() + "', sorted " + sortType.toUpperCase() + " and calculate population \u2795: \n\n   Population " + enterLimit + " countries is equal:", populateOfLimitedArray, "And it's " + isBigger + " than 500 million.");
      return [2
      /*return*/
      ];
    });
  });
};

exports.Task2 = Task2;

var getAllCountriesByAcronym = function getAllCountriesByAcronym(countries, acronym) {
  return countries.filter(function (country) {
    var _a;

    return (_a = country.regionalBlocs) === null || _a === void 0 ? void 0 : _a.some(function (c) {
      return c.acronym === acronym;
    });
  });
};

exports.getAllCountriesByAcronym = getAllCountriesByAcronym;

var selectCountriesIncludesAnyLetter = function selectCountriesIncludesAnyLetter(countries, letter) {
  return countries.filter(function (country) {
    return country.name.includes(letter);
  });
};

exports.selectCountriesIncludesAnyLetter = selectCountriesIncludesAnyLetter;

var sortByPopulation = function sortByPopulation(array, sortType) {
  var sortArrayDesc = function sortArrayDesc(first, next) {
    return next.population - first.population;
  };

  var sortArrayAsc = function sortArrayAsc(first, next) {
    return first.population - next.population;
  };

  var sortArray = __spreadArray([], array);

  sortType === 'desc' ? sortArray.sort(sortArrayDesc) : sortArray.sort(sortArrayAsc);
  return sortArray;
};

exports.sortByPopulation = sortByPopulation;

var calculateSumPopulateCountries = function calculateSumPopulateCountries(array, limit) {
  var limitedArray = array.slice(0, limit);
  var populate = 0;
  limitedArray.forEach(function (country) {
    populate += country.population;
  });
  return populate;
};

exports.calculateSumPopulateCountries = calculateSumPopulateCountries;
},{"..":"src/index.ts"}],"src/task3/Task3.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Task3 = void 0;

var Task2_1 = require("../task2/Task2");

var __1 = require("..");

var Task3 = function Task3() {
  var acronyms = {
    EU: {
      countries: [],
      population: 0,
      languages: {},
      currencies: []
    },
    NAFTA: {
      countries: [],
      population: 0,
      languages: {},
      currencies: []
    },
    AU: {
      countries: [],
      population: 0,
      languages: {},
      currencies: []
    },
    other: {
      countries: [],
      population: 0,
      languages: {},
      currencies: []
    }
  };
  var euCountries = Task2_1.getAllCountriesByAcronym(__1.localStorageCountriesData, 'EU');
  var naftaCountries = Task2_1.getAllCountriesByAcronym(__1.localStorageCountriesData, 'NAFTA');
  var auCountries = Task2_1.getAllCountriesByAcronym(__1.localStorageCountriesData, 'AU');
  var langObject = {
    iso639_1: {
      countries: ['alpha3Code'],
      population: 0,
      area: 0,
      name: 'nativeName'
    }
  };
  euCountries.forEach(function (country) {
    acronyms.EU.countries.push(country.name);
    country.currencies.every(function (currencie) {
      return acronyms.EU.currencies.push(currencie.name);
    });
    acronyms.EU.population += country.population;
  });
  naftaCountries.forEach(function (country) {
    acronyms.NAFTA.countries.push(country.name);
    country.currencies.every(function (currencie) {
      return acronyms.NAFTA.currencies.push(currencie.name);
    });
    acronyms.NAFTA.population += country.population;
  });
  auCountries.forEach(function (country) {
    acronyms.AU.countries.push(country.name);
    country.currencies.every(function (currencie) {
      return acronyms.AU.currencies.push(currencie.name);
    });
    acronyms.AU.population += country.population;
  });
  console.log(acronyms);
};

exports.Task3 = Task3; //✔ * Stwórz nowy obiekt. Powinien on posiadać klucze EU, NAFTA, AU oraz other. Każdy z tych kluczy będzie zawierał obiekt o kluczach countries, population, languages oraz currencies.
//   Wartościami countries oraz currencies są puste tablice, wartość population wynosi 0. Wartość languages to pusty obiekt.
//✔ * W TP znajdź kraje należące do EU, NAFTA albo AU. Jeśli państwo należy do którejś z tych grup, umieść jego dane w stosownym obiekcie: natywną nazwę w tablicy countries, używane przez nią
//   waluty w tablicy currencies oraz dodaj jej populację do wartości population.
//? * Sprawdź języki przypisane do kraju. Użyj ich kodu iso639_1 jako klucza dla obiektu languages. Jeśli danego języka nie ma w obiekcie languages, przypisz do niego nowy obiekt o kluczach
//   countries(wartość początkowa: pusta arajka), population(0), area(0) oraz name(pusty string). Jeśli dany język znajduje się w obiekcie languages, dodaj do tablicy countries kod alpha3code
//   kraju, w którym jest używany, populację tego kraju do wartości population, obszar kraju do wartości area, a do name przypisz natywną nazwę tego języka.
// * Jeśli kraj nie należy do żadnej z podanych wcześniej organizacji wykonaj kroki z poprzednich dwóch punktów, ale dane umieść w tablicy other.
// * Jeśli kraj należy do więcej, niż jednej organizacji, umieść jego dane we wszystkich pasujących obiektach bloków. Blok other może się powtarzać.
// * Dla każdej organizacji dane w tablicy currencies nie mogą się powtarzać.
// * Dla każdej organizacji dane w tablicy countries powinny być posortowane alfabetycznie z do a.
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
},{"../task2/Task2":"src/task2/Task2.ts","..":"src/index.ts"}],"src/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.localStorageCountriesData = void 0;

var Task1_1 = require("./task1/Task1");

var Task2_1 = require("./task2/Task2");

var Task3_1 = require("./task3/Task3");

var localStorageSavedData = localStorage.getItem('allCountries');
exports.localStorageCountriesData = typeof localStorageSavedData === 'string' && JSON.parse(localStorageSavedData);

window.onload = function () {
  console.log('╔═══════════════╗\n║    Task 1     ║\n╚═══════════════╝');
  Task1_1.Task1();
  console.log('╔═══════════════╗\n║    Task 2     ║\n╚═══════════════╝');
  Task2_1.Task2();
  console.log('╔═══════════════╗\n║    Task 3     ║\n╚═══════════════╝');
  Task3_1.Task3();
  console.log('╔═══════════════╗\n║     Logs      ║\n╚═══════════════╝');
};

console.log();
},{"./task1/Task1":"src/task1/Task1.ts","./task2/Task2":"src/task2/Task2.ts","./task3/Task3":"src/task3/Task3.ts"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51295" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.ts"], null)
//# sourceMappingURL=/src.f10117fe.js.map