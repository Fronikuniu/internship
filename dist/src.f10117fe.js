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
})({"src/config.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configuration = void 0;
exports.configuration = {
  countriesKey: 'allCountries',
  dateKey: 'dateWhenSaved',
  msOfDays: 604800000,
  numberOfPopulate: 500000000
};
},{}],"src/requests.ts":[function(require,module,exports) {
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
exports.getCountriesData = void 0;

var getCountriesData = function getCountriesData() {
  return __awaiter(void 0, void 0, Promise, function () {
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

exports.getCountriesData = getCountriesData;
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

var config_1 = require("../config");

var requests_1 = require("../requests");

var Task1 = function Task1(localStorageCountriesData) {
  return __awaiter(void 0, void 0, void 0, function () {
    var currentDate, countries, dateFromLocalStorage, lastSaveDate, numericDateFromLocalStorage, localStorageData, currDate, nextUpdate, oldData, newData;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          currentDate = Date.now();
          if (!!localStorageCountriesData) return [3
          /*break*/
          , 2];
          console.log('❗ Data does not exist ❗');
          return [4
          /*yield*/
          , requests_1.getCountriesData()];

        case 1:
          countries = _a.sent(); // Save countries data to LocalStorage, save

          localStorage.setItem(config_1.configuration.countriesKey, JSON.stringify(countries));
          localStorage.setItem(config_1.configuration.dateKey, currentDate.toString());
          console.log('📝 Data saved in localStorage.');
          console.log('📢 Refresh page!');
          return [3
          /*break*/
          , 4];

        case 2:
          dateFromLocalStorage = localStorage.getItem(config_1.configuration.dateKey);
          lastSaveDate = typeof dateFromLocalStorage === 'string' ? parseInt(dateFromLocalStorage) : currentDate;
          numericDateFromLocalStorage = lastSaveDate;
          localStorageData = localStorageCountriesData;
          currDate = currentDate;
          nextUpdate = numericDateFromLocalStorage + config_1.configuration.msOfDays;
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
          , requests_1.getCountriesData()];

        case 3:
          newData = _a.sent();
          console.log('🟨 Changed data is in:\n', exports.compareData(oldData, newData));
          localStorage.setItem(config_1.configuration.countriesKey, JSON.stringify(newData));
          localStorage.setItem(config_1.configuration.dateKey, currentDate.toString());
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
  return oldest.filter(function (old, i) {
    if (old.alpha2Code === newest[i].alpha2Code) {
      if (old.population !== newest[i].population) return old.name;
    }
  });
};

exports.compareData = compareData;
},{"../config":"src/config.ts","../requests":"src/requests.ts"}],"src/task2/Task2.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
exports.calculateCountriesSum = exports.sortCountries = exports.filterCountries = exports.filterCountriesByValue = exports.Task2 = void 0;

var config_1 = require("../config");

var Task2 = function Task2(localStorageCountriesData) {
  return __awaiter(void 0, void 0, void 0, function () {
    var countryPath, countryValue, shouldContain, countries, phrasePath, phraseValue, phraseTypeValue, countriesPhrase, sortPath, sortType, countriesSorted, limit, limitPath, countriesLimited, isBigger;
    return __generator(this, function (_a) {
      countryPath = 'regionalBlocs.acronym';
      countryValue = 'EU';
      shouldContain = true;
      countries = exports.filterCountriesByValue(localStorageCountriesData, {
        path: countryPath,
        value: countryValue,
        contain: shouldContain
      });
      console.log("\n\uD83D\uDD39 Countries of the " + countryPath + ": " + countryValue + ": \n", countries);
      phrasePath = 'name';
      phraseValue = 'a';
      phraseTypeValue = 'delete';
      countriesPhrase = exports.filterCountries(countries, {
        path: phrasePath,
        value: phraseValue,
        selectOrDelete: phraseTypeValue
      });
      console.log("\n\uD83D\uDD39 Countries of the " + countryPath + ": " + countryValue + ", dont contain '" + phraseValue.toUpperCase() + "' in " + phrasePath + ":\n", countriesPhrase);
      sortPath = 'population';
      sortType = 'desc';
      countriesSorted = exports.sortCountries(countriesPhrase, {
        path: sortPath,
        sortType: sortType
      });
      console.log("\n\uD83D\uDD39 Countries of the " + countryPath + ": " + countryValue + ", dont contain '" + phraseValue.toUpperCase() + "' in " + phrasePath + ", sorted " + sortType.toUpperCase() + " by " + sortPath + ": \n", countriesSorted);
      limit = 5;
      limitPath = 'population';
      countriesLimited = exports.calculateCountriesSum(countriesSorted, {
        path: limitPath,
        limit: limit
      });
      isBigger = countriesLimited > config_1.configuration.numberOfPopulate ? '↗️ bigger' : '↘️ less';
      console.log("\n\uD83D\uDD39 Countries of the " + countryPath + ": " + countryValue + ", dont contain '" + phraseValue.toUpperCase() + "' in " + phrasePath + ", sorted " + sortType.toUpperCase() + " by " + sortPath + " and calculate " + limitPath + " \u2795: \n\n   " + limitPath + " " + limit + " first countries is equal:", countriesLimited, "And it's " + isBigger + " than 500 million.");
      return [2
      /*return*/
      ];
    });
  });
};

exports.Task2 = Task2;

var filterCountriesByValue = function filterCountriesByValue(countries, args) {
  var path = args.path.split('.');
  return countries.filter(function (country) {
    // @ts-ignore
    var arrayPath = country[path[0]];
    if (!arrayPath) return false;
    var isStringArray = Array.isArray(arrayPath) && typeof arrayPath[0] === 'string';
    var isObjectArray = Array.isArray(arrayPath) && _typeof(arrayPath[0]) === 'object';

    if (args.contain) {
      if (isObjectArray) return arrayPath.some(function (data) {
        return data[path[1]] === args.value;
      });
      if (isStringArray) return arrayPath.includes(args.value);
      return arrayPath === args.value;
    } else {
      if (isObjectArray) return arrayPath.some(function (data) {
        return data[path[1]] !== args.value;
      });
      if (isStringArray) return !arrayPath.includes(args.value);
      return arrayPath !== args.value;
    }
  });
};

exports.filterCountriesByValue = filterCountriesByValue;

var filterCountries = function filterCountries(countries, args) {
  return countries.filter(function (country) {
    if (typeof country[args.path] === 'string') {
      // @ts-ignore this if above sould be enough
      return args.selectOrDelete === 'select' ? country[args.path].toUpperCase().includes(args.value.toUpperCase()) : !country[args.path].toUpperCase().includes(args.value.toUpperCase());
    }
  });
};

exports.filterCountries = filterCountries;

var sortCountries = function sortCountries(array, args) {
  var sortArrayDesc = function sortArrayDesc(first, next) {
    return next[args.path] - first[args.path];
  };

  var sortArrayAsc = function sortArrayAsc(first, next) {
    return first[args.path] - next[args.path];
  };

  return args.sortType === 'desc' ? __spreadArray([], array).sort(sortArrayDesc) : __spreadArray([], array).sort(sortArrayAsc);
};

exports.sortCountries = sortCountries;

var calculateCountriesSum = function calculateCountriesSum(countries, args) {
  var limitedArray = countries.slice(0, args.limit);
  var sum = 0;
  limitedArray.forEach(function (country) {
    // @ts-ignore this if should be enough
    if (typeof country[args.path] === 'number') sum += country[args.path];
  });
  return sum;
};

exports.calculateCountriesSum = calculateCountriesSum;
},{"../config":"src/config.ts"}],"src/task3/Task3.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
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
exports.getLanguageName = exports.getCountryName = exports.insertCountryStats = exports.Task3 = void 0;

var Task2_1 = require("../task2/Task2");

var countryStat = {
  countries: [],
  population: 0,
  languages: {},
  currencies: [],
  area: 0
};
var countriesStats = {};
['EU', 'NAFTA', 'AU', 'other'].forEach(function (country) {
  return countriesStats[country] = __assign({}, countryStat);
});

var Task3 = function Task3(localStorageCountriesData) {
  var euCountries = Task2_1.filterCountriesByValue(localStorageCountriesData, {
    path: 'regionalBlocs.acronym',
    value: 'EU',
    contain: true
  });
  var naftaCountries = Task2_1.filterCountriesByValue(localStorageCountriesData, {
    path: 'regionalBlocs.acronym',
    value: 'NAFTA',
    contain: true
  });
  var auCountries = Task2_1.filterCountriesByValue(localStorageCountriesData, {
    path: 'regionalBlocs.acronym',
    value: 'AU',
    contain: true
  });
  var otherCountries = localStorageCountriesData.filter(function (country) {
    var _a;

    return (_a = country.regionalBlocs) === null || _a === void 0 ? void 0 : _a.some(function (bloc) {
      return !['EU', 'NAFTA', 'AU'].includes(bloc.acronym);
    });
  });
  exports.insertCountryStats(euCountries, {
    acronym: 'EU',
    object: countriesStats
  });
  exports.insertCountryStats(naftaCountries, {
    acronym: 'NAFTA',
    object: countriesStats
  });
  exports.insertCountryStats(auCountries, {
    acronym: 'AU',
    object: countriesStats
  });
  exports.insertCountryStats(otherCountries, {
    acronym: 'other',
    object: countriesStats
  });
  console.log('\n🔸 The name of the organization with the largest population:', exports.getCountryName(countriesStats, {
    path: 'population',
    place: 1,
    sort: 'desc'
  }));
  console.log('\n🔸 Name of the organization with the second largest population:', exports.getCountryName(countriesStats, {
    path: 'population',
    place: 2,
    sort: 'desc'
  }));
  console.log('\n🔸 The name of the organization occupying the third largest area:', exports.getCountryName(countriesStats, {
    path: 'area',
    place: 3,
    sort: 'desc'
  }));
  console.log('\n🔸 Names of organizations with the largest and smallest number of languages assigned to them:\n', 'Largest:', exports.getCountryName(countriesStats, {
    path: 'languages',
    place: 1,
    sort: 'desc'
  }), '\n Smallest:', exports.getCountryName(countriesStats, {
    path: 'languages',
    place: 1,
    sort: 'asc'
  }));
  console.log('\n🔸 Name of the organization using the largest number of currencies:', exports.getCountryName(countriesStats, {
    path: 'currencies',
    place: 1,
    sort: 'desc'
  }));
  console.log('\n🔸 The name of the organization with the fewest number of member states:', exports.getCountryName(countriesStats, {
    path: 'countries',
    place: 1,
    sort: 'asc'
  }));
  console.log('\n🔸 Native name of the language used in the greatest number of countries:', exports.getLanguageName(countriesStats, {
    path: 'area',
    place: 1,
    sort: 'desc'
  }));
  console.log('\n🔸 Native name of the language used by the smallest number of people:', exports.getLanguageName(countriesStats, {
    path: 'population',
    place: 1,
    sort: 'asc'
  }));
  console.log('\n🔸 Native names of the languages used in the largest and smallest area:\n', 'Largest:', exports.getLanguageName(countriesStats, {
    path: 'area',
    place: 1,
    sort: 'desc'
  }), '\n Smallest:', exports.getLanguageName(countriesStats, {
    path: 'area',
    place: 1,
    sort: 'asc'
  }));
  console.log('\n🟠 EU, NAFTA, AU and other countries: \n', countriesStats);
};

exports.Task3 = Task3;

var insertCountryStats = function insertCountryStats(array, args) {
  var path = args.object[args.acronym];
  array.forEach(function (country) {
    var _a;

    path.countries = __spreadArray(__spreadArray([], path.countries), [country.nativeName]);
    (_a = country.currencies) === null || _a === void 0 ? void 0 : _a.every(function (currency) {
      return path.currencies = __spreadArray(__spreadArray([], path.currencies), [currency.name]);
    });
    path.population += country.population;
    typeof country.area === 'number' && (path.area += country.area);
    var langKeys = Object.keys(path.languages);
    var countryLang = country.languages.map(function (lang) {
      return lang.iso639_1;
    });
    countryLang.forEach(function (lang, i) {
      var _a;

      if (lang === langKeys[i]) {
        path.languages[lang].name.push(country.languages[i].nativeName);
        path.languages[lang].countries.push(country.alpha3Code);
        path.languages[lang].area += country.area;
        path.languages[lang].population += country.population;
      } else {
        var language = country.languages[i].iso639_1;
        var name = country.alpha3Code;
        var nativeName = country.languages[i].nativeName;
        var area = country.area;
        var population = country.population;
        path.languages = __assign(__assign({}, path.languages), (_a = {}, _a[language] = {
          population: population,
          area: area,
          name: [nativeName],
          countries: [name]
        }, _a));
      }
    });
  });
  var unique = new Set(path.currencies);
  path.currencies = Array.from(unique);
  path.countries = path.countries.sort().reverse();
  return args.object;
};

exports.insertCountryStats = insertCountryStats;

var getCountryName = function getCountryName(object, args) {
  var countryKeys = Object.keys(object);
  var arrayOfValues = [];
  var place = args.place - 1;
  var result = [];
  countryKeys.forEach(function (key) {
    var value = object[key][args.path];
    var valueLength = Object.getOwnPropertyNames(value).length;
    if (_typeof(value) === 'object') arrayOfValues.push(valueLength);
    if (_typeof(value) !== 'object') arrayOfValues.push(value);
  });
  var uniqueValues = Array.from(new Set(sortValues(args.sort, arrayOfValues)));
  countryKeys.forEach(function (key) {
    var value = object[key][args.path];
    var valueLength = Object.getOwnPropertyNames(value).length;
    if (_typeof(value) === 'object' && valueLength === uniqueValues[place]) result.push(key);
    if (_typeof(value) !== 'object' && value === uniqueValues[place]) result.push(key);
  });
  return result.toString();
};

exports.getCountryName = getCountryName;

var getLanguageName = function getLanguageName(object, args) {
  var countryKeys = Object.keys(object);
  var arrayOfValues = [];
  var place = args.place - 1;
  var result = [];
  countryKeys.forEach(function (countryKey) {
    var languagesKeys = Object.keys(object[countryKey].languages);
    languagesKeys.forEach(function (langKey) {
      var value = object[countryKey].languages[langKey][args.path];
      var valueLength = Array.isArray(value) && value.length;
      if (Array.isArray(value) && typeof valueLength !== 'boolean') arrayOfValues.push(valueLength);
      if (_typeof(value) !== 'object') arrayOfValues.push(value);
    });
  });
  var uniqueValues = Array.from(new Set(sortValues(args.sort, arrayOfValues)));
  countryKeys.forEach(function (countryKey) {
    var languagesKeys = Object.keys(object[countryKey].languages);
    languagesKeys.forEach(function (langKey) {
      var value = object[countryKey].languages[langKey][args.path];
      var valueLength = Array.isArray(value) && value.length;
      if (_typeof(value) === 'object' && valueLength === uniqueValues[place]) result.push(object[countryKey].languages[langKey].name[0]);
      if (_typeof(value) !== 'object' && value === uniqueValues[place]) result.push(object[countryKey].languages[langKey].name[0]);
    });
  });
  var set = new Set(result);
  var endResult = Array.from(set);
  return endResult.toString();
};

exports.getLanguageName = getLanguageName;

var sortValues = function sortValues(sort, array) {
  if (sort === 'desc') {
    return array.sort(function (a, b) {
      return b - a;
    });
  } else {
    return array.sort(function (a, b) {
      return a - b;
    });
  }
};
},{"../task2/Task2":"src/task2/Task2.ts"}],"src/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var config_1 = require("./config");

var Task1_1 = require("./task1/Task1");

var Task2_1 = require("./task2/Task2");

var Task3_1 = require("./task3/Task3");

window.onload = function () {
  var localStorageSavedData = localStorage.getItem(config_1.configuration.countriesKey);
  var localStorageCountriesData = typeof localStorageSavedData === 'string' && JSON.parse(localStorageSavedData);
  console.log('╔═══════════════╗\n║    Task 1     ║\n╚═══════════════╝');
  Task1_1.Task1(localStorageCountriesData);
  console.log('╔═══════════════╗\n║    Task 2     ║\n╚═══════════════╝');
  Task2_1.Task2(localStorageCountriesData);
  console.log('╔═══════════════╗\n║    Task 3     ║\n╚═══════════════╝');
  Task3_1.Task3(localStorageCountriesData);
  console.log('╔═══════════════╗\n║     Logs      ║\n╚═══════════════╝');
};
},{"./config":"src/config.ts","./task1/Task1":"src/task1/Task1.ts","./task2/Task2":"src/task2/Task2.ts","./task3/Task3":"src/task3/Task3.ts"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60279" + '/');

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