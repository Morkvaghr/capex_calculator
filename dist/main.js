/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/swedish-holidays/dist/date-utils.js":
/*!**********************************************************!*\
  !*** ./node_modules/swedish-holidays/dist/date-utils.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.isSameDate = exports.fixedDate = exports.firstOfWeekdayAfterDate = exports.Weekday = exports.plusYears = exports.plusDays = void 0;\nfunction plusDays(d, days) {\n    const date = new Date(d);\n    date.setDate(date.getDate() + (days || 0));\n    return date;\n}\nexports.plusDays = plusDays;\nfunction plusYears(d, years = 0) {\n    const date = new Date(d);\n    date.setFullYear(date.getFullYear() + years);\n    return date;\n}\nexports.plusYears = plusYears;\nvar Weekday;\n(function (Weekday) {\n    Weekday[Weekday[\"Friday\"] = 5] = \"Friday\";\n    Weekday[Weekday[\"Sunday\"] = 0] = \"Sunday\";\n})(Weekday = exports.Weekday || (exports.Weekday = {}));\nfunction firstOfWeekdayAfterDate(weekday, refDate) {\n    return plusDays(refDate, (refDate.getDay() > weekday ? 7 : 0) - refDate.getDay() + weekday);\n}\nexports.firstOfWeekdayAfterDate = firstOfWeekdayAfterDate;\nfunction fixedDate(date) {\n    const d = new Date(date);\n    d.setMilliseconds(0);\n    d.setSeconds(0);\n    d.setMinutes(0);\n    d.setHours(0);\n    d.setMinutes(-d.getTimezoneOffset());\n    return d;\n}\nexports.fixedDate = fixedDate;\nfunction isSameDate(dateA, dateB) {\n    return fixedDate(dateA).getTime() === fixedDate(dateB).getTime();\n}\nexports.isSameDate = isSameDate;\n//# sourceMappingURL=date-utils.js.map\n\n//# sourceURL=webpack://ts/./node_modules/swedish-holidays/dist/date-utils.js?");

/***/ }),

/***/ "./node_modules/swedish-holidays/dist/dates/all-saints-day.js":
/*!********************************************************************!*\
  !*** ./node_modules/swedish-holidays/dist/dates/all-saints-day.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst holiday_names_sv_se_1 = __importDefault(__webpack_require__(/*! ../holiday-names.sv-se */ \"./node_modules/swedish-holidays/dist/holiday-names.sv-se.js\"));\nconst date_utils_1 = __webpack_require__(/*! ../date-utils */ \"./node_modules/swedish-holidays/dist/date-utils.js\");\nconst all_saints_eve_1 = __importDefault(__webpack_require__(/*! ./all-saints-eve */ \"./node_modules/swedish-holidays/dist/dates/all-saints-eve.js\"));\nclass AllSaintsDay extends all_saints_eve_1.default {\n    constructor({ year, language = holiday_names_sv_se_1.default } = { language: holiday_names_sv_se_1.default }) {\n        super({ year });\n        this.isPublicHoliday = true;\n        this.name = language.allSaintsDay;\n        this.date = (0, date_utils_1.plusDays)(this.date, 1);\n        this.month = this.date.getMonth() + 1;\n        this.day = this.date.getDate();\n    }\n    static mightBe(date) {\n        return super.mightBe((0, date_utils_1.plusDays)(date, -1));\n    }\n}\nexports[\"default\"] = AllSaintsDay;\n//# sourceMappingURL=all-saints-day.js.map\n\n//# sourceURL=webpack://ts/./node_modules/swedish-holidays/dist/dates/all-saints-day.js?");

/***/ }),

/***/ "./node_modules/swedish-holidays/dist/dates/all-saints-eve.js":
/*!********************************************************************!*\
  !*** ./node_modules/swedish-holidays/dist/dates/all-saints-eve.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst holiday_names_sv_se_1 = __importDefault(__webpack_require__(/*! ../holiday-names.sv-se */ \"./node_modules/swedish-holidays/dist/holiday-names.sv-se.js\"));\nconst date_utils_1 = __webpack_require__(/*! ../date-utils */ \"./node_modules/swedish-holidays/dist/date-utils.js\");\nclass AllSaintsEve {\n    constructor({ year, language = holiday_names_sv_se_1.default } = { language: holiday_names_sv_se_1.default }) {\n        this.isPublicHoliday = false;\n        const y = year || new Date().getFullYear();\n        this.year = y;\n        this.date = (0, date_utils_1.fixedDate)((0, date_utils_1.firstOfWeekdayAfterDate)(date_utils_1.Weekday.Friday, new Date(y, 9, 30)));\n        this.month = this.date.getMonth() + 1;\n        this.day = this.date.getDate();\n        this.name = language.allSaintsEve;\n    }\n    static mightBe(date) {\n        const month = date.getMonth() + 1;\n        const day = date.getDate();\n        // Earliest 30:th October\n        if (month === 10) {\n            return day >= 30;\n        }\n        // Latest 5:th November\n        if (month === 11) {\n            return day <= 5;\n        }\n        return false;\n    }\n}\nexports[\"default\"] = AllSaintsEve;\n//# sourceMappingURL=all-saints-eve.js.map\n\n//# sourceURL=webpack://ts/./node_modules/swedish-holidays/dist/dates/all-saints-eve.js?");

/***/ }),

/***/ "./node_modules/swedish-holidays/dist/dates/ascension-day.js":
/*!*******************************************************************!*\
  !*** ./node_modules/swedish-holidays/dist/dates/ascension-day.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst easter_sunday_1 = __webpack_require__(/*! ./easter-sunday */ \"./node_modules/swedish-holidays/dist/dates/easter-sunday.js\");\nconst holiday_names_sv_se_1 = __importDefault(__webpack_require__(/*! ../holiday-names.sv-se */ \"./node_modules/swedish-holidays/dist/holiday-names.sv-se.js\"));\nclass AscensionDay extends easter_sunday_1.EasterSundayDependant {\n    constructor({ year, language = holiday_names_sv_se_1.default } = { language: holiday_names_sv_se_1.default }) {\n        super(AscensionDay.easterOffset, year);\n        this.name = language.ascensionDay;\n    }\n}\nexports[\"default\"] = AscensionDay;\nAscensionDay.easterOffset = 6 * 7 - 3;\n//# sourceMappingURL=ascension-day.js.map\n\n//# sourceURL=webpack://ts/./node_modules/swedish-holidays/dist/dates/ascension-day.js?");

/***/ }),

/***/ "./node_modules/swedish-holidays/dist/dates/boxing-day.js":
/*!****************************************************************!*\
  !*** ./node_modules/swedish-holidays/dist/dates/boxing-day.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst holiday_names_sv_se_1 = __importDefault(__webpack_require__(/*! ../holiday-names.sv-se */ \"./node_modules/swedish-holidays/dist/holiday-names.sv-se.js\"));\nconst fixed_1 = __importDefault(__webpack_require__(/*! ./fixed */ \"./node_modules/swedish-holidays/dist/dates/fixed.js\"));\nclass BoxingDay extends fixed_1.default {\n    constructor({ year, language = holiday_names_sv_se_1.default } = { language: holiday_names_sv_se_1.default }) {\n        super(BoxingDay.day, BoxingDay.month, language.boxingDay, true, year);\n    }\n}\nexports[\"default\"] = BoxingDay;\nBoxingDay.day = 26;\nBoxingDay.month = 12;\n//# sourceMappingURL=boxing-day.js.map\n\n//# sourceURL=webpack://ts/./node_modules/swedish-holidays/dist/dates/boxing-day.js?");

/***/ }),

/***/ "./node_modules/swedish-holidays/dist/dates/christmas-day.js":
/*!*******************************************************************!*\
  !*** ./node_modules/swedish-holidays/dist/dates/christmas-day.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst holiday_names_sv_se_1 = __importDefault(__webpack_require__(/*! ../holiday-names.sv-se */ \"./node_modules/swedish-holidays/dist/holiday-names.sv-se.js\"));\nconst fixed_1 = __importDefault(__webpack_require__(/*! ./fixed */ \"./node_modules/swedish-holidays/dist/dates/fixed.js\"));\nclass ChristmasDay extends fixed_1.default {\n    constructor({ year, language = holiday_names_sv_se_1.default } = { language: holiday_names_sv_se_1.default }) {\n        super(ChristmasDay.day, ChristmasDay.month, language.christmasDay, true, year);\n    }\n}\nexports[\"default\"] = ChristmasDay;\nChristmasDay.day = 25;\nChristmasDay.month = 12;\n//# sourceMappingURL=christmas-day.js.map\n\n//# sourceURL=webpack://ts/./node_modules/swedish-holidays/dist/dates/christmas-day.js?");

/***/ }),

/***/ "./node_modules/swedish-holidays/dist/dates/christmas-eve.js":
/*!*******************************************************************!*\
  !*** ./node_modules/swedish-holidays/dist/dates/christmas-eve.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst holiday_names_sv_se_1 = __importDefault(__webpack_require__(/*! ../holiday-names.sv-se */ \"./node_modules/swedish-holidays/dist/holiday-names.sv-se.js\"));\nconst fixed_1 = __importDefault(__webpack_require__(/*! ./fixed */ \"./node_modules/swedish-holidays/dist/dates/fixed.js\"));\nclass ChristmasEve extends fixed_1.default {\n    constructor({ year, language = holiday_names_sv_se_1.default } = { language: holiday_names_sv_se_1.default }) {\n        super(ChristmasEve.day, ChristmasEve.month, language.christmasEve, false, year);\n    }\n}\nexports[\"default\"] = ChristmasEve;\nChristmasEve.day = 24;\nChristmasEve.month = 12;\n//# sourceMappingURL=christmas-eve.js.map\n\n//# sourceURL=webpack://ts/./node_modules/swedish-holidays/dist/dates/christmas-eve.js?");

/***/ }),

/***/ "./node_modules/swedish-holidays/dist/dates/easter-monday.js":
/*!*******************************************************************!*\
  !*** ./node_modules/swedish-holidays/dist/dates/easter-monday.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst easter_sunday_1 = __webpack_require__(/*! ./easter-sunday */ \"./node_modules/swedish-holidays/dist/dates/easter-sunday.js\");\nconst holiday_names_sv_se_1 = __importDefault(__webpack_require__(/*! ../holiday-names.sv-se */ \"./node_modules/swedish-holidays/dist/holiday-names.sv-se.js\"));\nclass EasterMonday extends easter_sunday_1.EasterSundayDependant {\n    constructor({ year, language = holiday_names_sv_se_1.default } = { language: holiday_names_sv_se_1.default }) {\n        super(EasterMonday.easterOffset, year);\n        this.name = language.easterMonday;\n    }\n}\nexports[\"default\"] = EasterMonday;\nEasterMonday.easterOffset = 1;\n//# sourceMappingURL=easter-monday.js.map\n\n//# sourceURL=webpack://ts/./node_modules/swedish-holidays/dist/dates/easter-monday.js?");

/***/ }),

/***/ "./node_modules/swedish-holidays/dist/dates/easter-sunday.js":
/*!*******************************************************************!*\
  !*** ./node_modules/swedish-holidays/dist/dates/easter-sunday.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.EasterSundayDependant = void 0;\nconst holiday_names_sv_se_1 = __importDefault(__webpack_require__(/*! ../holiday-names.sv-se */ \"./node_modules/swedish-holidays/dist/holiday-names.sv-se.js\"));\nconst date_utils_1 = __webpack_require__(/*! ../date-utils */ \"./node_modules/swedish-holidays/dist/date-utils.js\");\nclass EasterSunday {\n    constructor({ year, language = holiday_names_sv_se_1.default } = { language: holiday_names_sv_se_1.default }) {\n        this.isPublicHoliday = true;\n        const y = year || new Date().getFullYear();\n        if (y < 1582 || y > 8702) {\n            throw new Error('Requested year is out of range');\n        }\n        const goldenNumber = Math.floor((y % 19) + 1);\n        const century = Math.floor(y / 100 + 1);\n        const corx = Math.floor((3 * century) / 4 - 12);\n        const corz = Math.floor((8 * century + 5) / 25 - 5);\n        const sunday = Math.floor((5 * y) / 4 - corx - 10);\n        let epact = Math.floor((11 * goldenNumber + 20 + corz - corx + 30) % 30);\n        if ((epact === 25 && goldenNumber > 11) || epact === 24) {\n            epact += 1;\n        }\n        let moon = 44 - epact;\n        if (moon < 21) {\n            moon += 30;\n        }\n        moon = moon + 7 - ((sunday + moon) % 7);\n        let month = 3;\n        let day = moon;\n        if (moon > 31) {\n            month = 4;\n            day = moon - 31;\n        }\n        this.year = y;\n        this.month = month;\n        this.day = day;\n        this.date = (0, date_utils_1.fixedDate)(new Date(y, month - 1, day, 0, 0, 0, 0));\n        this.name = language.easterSunday;\n    }\n    static mightBe(date) {\n        const month = date.getMonth() + 1;\n        const day = date.getDate();\n        // Earliest 22:nd March\n        if (month === 3) {\n            return day >= 22;\n        }\n        // Latest 25:th April\n        if (month === 4) {\n            return day <= 25;\n        }\n        return false;\n    }\n}\nexports[\"default\"] = EasterSunday;\nclass EasterSundayDependant extends EasterSunday {\n    constructor(offsetDays, year) {\n        super({ year });\n        this.date = (0, date_utils_1.plusDays)(this.date, offsetDays);\n        this.month = this.date.getMonth() + 1;\n        this.day = this.date.getDate();\n    }\n    static mightBe(date) {\n        return super.mightBe((0, date_utils_1.plusDays)(date, -this.easterOffset));\n    }\n}\nexports.EasterSundayDependant = EasterSundayDependant;\nEasterSundayDependant.easterOffset = 0;\n//# sourceMappingURL=easter-sunday.js.map\n\n//# sourceURL=webpack://ts/./node_modules/swedish-holidays/dist/dates/easter-sunday.js?");

/***/ }),

/***/ "./node_modules/swedish-holidays/dist/dates/epiphany.js":
/*!**************************************************************!*\
  !*** ./node_modules/swedish-holidays/dist/dates/epiphany.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst holiday_names_sv_se_1 = __importDefault(__webpack_require__(/*! ../holiday-names.sv-se */ \"./node_modules/swedish-holidays/dist/holiday-names.sv-se.js\"));\nconst fixed_1 = __importDefault(__webpack_require__(/*! ./fixed */ \"./node_modules/swedish-holidays/dist/dates/fixed.js\"));\nclass Epiphany extends fixed_1.default {\n    constructor({ year, language = holiday_names_sv_se_1.default } = { language: holiday_names_sv_se_1.default }) {\n        super(Epiphany.day, Epiphany.month, language.epiphany, true, year);\n    }\n}\nexports[\"default\"] = Epiphany;\nEpiphany.day = 6;\nEpiphany.month = 1;\n//# sourceMappingURL=epiphany.js.map\n\n//# sourceURL=webpack://ts/./node_modules/swedish-holidays/dist/dates/epiphany.js?");

/***/ }),

/***/ "./node_modules/swedish-holidays/dist/dates/fixed.js":
/*!***********************************************************!*\
  !*** ./node_modules/swedish-holidays/dist/dates/fixed.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst date_utils_1 = __webpack_require__(/*! ../date-utils */ \"./node_modules/swedish-holidays/dist/date-utils.js\");\nclass Fixed {\n    constructor(day, month, name, isPublicHoliday, year) {\n        this.year = year || new Date().getFullYear();\n        this.month = month;\n        this.day = day;\n        this.date = (0, date_utils_1.fixedDate)(new Date(this.year, this.month - 1, this.day));\n        this.name = name;\n        this.isPublicHoliday = isPublicHoliday;\n    }\n    static mightBe(date) {\n        const month = date.getMonth() + 1;\n        const day = date.getDate();\n        return this.month === month && this.day === day;\n    }\n}\nexports[\"default\"] = Fixed;\n//# sourceMappingURL=fixed.js.map\n\n//# sourceURL=webpack://ts/./node_modules/swedish-holidays/dist/dates/fixed.js?");

/***/ }),

/***/ "./node_modules/swedish-holidays/dist/dates/good-friday.js":
/*!*****************************************************************!*\
  !*** ./node_modules/swedish-holidays/dist/dates/good-friday.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst easter_sunday_1 = __webpack_require__(/*! ./easter-sunday */ \"./node_modules/swedish-holidays/dist/dates/easter-sunday.js\");\nconst holiday_names_sv_se_1 = __importDefault(__webpack_require__(/*! ../holiday-names.sv-se */ \"./node_modules/swedish-holidays/dist/holiday-names.sv-se.js\"));\nclass GoodFriday extends easter_sunday_1.EasterSundayDependant {\n    constructor({ year, language = holiday_names_sv_se_1.default } = { language: holiday_names_sv_se_1.default }) {\n        super(GoodFriday.easterOffset, year);\n        this.name = language.goodFriday;\n    }\n}\nexports[\"default\"] = GoodFriday;\nGoodFriday.easterOffset = -2;\n//# sourceMappingURL=good-friday.js.map\n\n//# sourceURL=webpack://ts/./node_modules/swedish-holidays/dist/dates/good-friday.js?");

/***/ }),

/***/ "./node_modules/swedish-holidays/dist/dates/holy-saturday.js":
/*!*******************************************************************!*\
  !*** ./node_modules/swedish-holidays/dist/dates/holy-saturday.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst easter_sunday_1 = __webpack_require__(/*! ./easter-sunday */ \"./node_modules/swedish-holidays/dist/dates/easter-sunday.js\");\nconst holiday_names_sv_se_1 = __importDefault(__webpack_require__(/*! ../holiday-names.sv-se */ \"./node_modules/swedish-holidays/dist/holiday-names.sv-se.js\"));\nclass HolySaturday extends easter_sunday_1.EasterSundayDependant {\n    constructor({ year, language = holiday_names_sv_se_1.default } = { language: holiday_names_sv_se_1.default }) {\n        super(HolySaturday.easterOffset, year);\n        this.isPublicHoliday = false;\n        this.name = language.holySaturday;\n    }\n}\nexports[\"default\"] = HolySaturday;\nHolySaturday.easterOffset = -1;\n//# sourceMappingURL=holy-saturday.js.map\n\n//# sourceURL=webpack://ts/./node_modules/swedish-holidays/dist/dates/holy-saturday.js?");

/***/ }),

/***/ "./node_modules/swedish-holidays/dist/dates/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/swedish-holidays/dist/dates/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Pingstdagen = exports.WhitSunday = exports.Valborgsmaessoafton = exports.WalpurgisNight = exports.Trettondagsafton = exports.TwelfthNight = exports.Pingstafton = exports.PentecostEve = exports.Nyaarsafton = exports.NewYearsEve = exports.Nyaarsdagen = exports.NewYearsDay = exports.SverigesNationaldag = exports.NationalDay = exports.Midsommarafton = exports.MidsummerEve = exports.Midsommardagen = exports.MidsummerDay = exports.FoerstaMaj = exports.MayFirst = exports.Skaertorsdagen = exports.MaundyThursday = exports.Paaskafton = exports.HolySaturday = exports.Laangfredagen = exports.GoodFriday = exports.TrettondedagJul = exports.Epiphany = exports.Paaskdagen = exports.EasterSunday = exports.AnnandagPaask = exports.EasterMonday = exports.Julafton = exports.ChristmasEve = exports.Juldagen = exports.ChristmasDay = exports.AnnandagJul = exports.BoxingDay = exports.KristiHimmelsfaerdsdag = exports.AscensionDay = exports.Allhelgonaafton = exports.AllSaintsEve = exports.AllaHelgonsDag = exports.AllSaintsDay = void 0;\nvar all_saints_day_1 = __webpack_require__(/*! ./all-saints-day */ \"./node_modules/swedish-holidays/dist/dates/all-saints-day.js\");\nObject.defineProperty(exports, \"AllSaintsDay\", ({ enumerable: true, get: function () { return __importDefault(all_saints_day_1).default; } }));\nObject.defineProperty(exports, \"AllaHelgonsDag\", ({ enumerable: true, get: function () { return __importDefault(all_saints_day_1).default; } }));\nvar all_saints_eve_1 = __webpack_require__(/*! ./all-saints-eve */ \"./node_modules/swedish-holidays/dist/dates/all-saints-eve.js\");\nObject.defineProperty(exports, \"AllSaintsEve\", ({ enumerable: true, get: function () { return __importDefault(all_saints_eve_1).default; } }));\nObject.defineProperty(exports, \"Allhelgonaafton\", ({ enumerable: true, get: function () { return __importDefault(all_saints_eve_1).default; } }));\nvar ascension_day_1 = __webpack_require__(/*! ./ascension-day */ \"./node_modules/swedish-holidays/dist/dates/ascension-day.js\");\nObject.defineProperty(exports, \"AscensionDay\", ({ enumerable: true, get: function () { return __importDefault(ascension_day_1).default; } }));\nObject.defineProperty(exports, \"KristiHimmelsfaerdsdag\", ({ enumerable: true, get: function () { return __importDefault(ascension_day_1).default; } }));\nvar boxing_day_1 = __webpack_require__(/*! ./boxing-day */ \"./node_modules/swedish-holidays/dist/dates/boxing-day.js\");\nObject.defineProperty(exports, \"BoxingDay\", ({ enumerable: true, get: function () { return __importDefault(boxing_day_1).default; } }));\nObject.defineProperty(exports, \"AnnandagJul\", ({ enumerable: true, get: function () { return __importDefault(boxing_day_1).default; } }));\nvar christmas_day_1 = __webpack_require__(/*! ./christmas-day */ \"./node_modules/swedish-holidays/dist/dates/christmas-day.js\");\nObject.defineProperty(exports, \"ChristmasDay\", ({ enumerable: true, get: function () { return __importDefault(christmas_day_1).default; } }));\nObject.defineProperty(exports, \"Juldagen\", ({ enumerable: true, get: function () { return __importDefault(christmas_day_1).default; } }));\nvar christmas_eve_1 = __webpack_require__(/*! ./christmas-eve */ \"./node_modules/swedish-holidays/dist/dates/christmas-eve.js\");\nObject.defineProperty(exports, \"ChristmasEve\", ({ enumerable: true, get: function () { return __importDefault(christmas_eve_1).default; } }));\nObject.defineProperty(exports, \"Julafton\", ({ enumerable: true, get: function () { return __importDefault(christmas_eve_1).default; } }));\nvar easter_monday_1 = __webpack_require__(/*! ./easter-monday */ \"./node_modules/swedish-holidays/dist/dates/easter-monday.js\");\nObject.defineProperty(exports, \"EasterMonday\", ({ enumerable: true, get: function () { return __importDefault(easter_monday_1).default; } }));\nObject.defineProperty(exports, \"AnnandagPaask\", ({ enumerable: true, get: function () { return __importDefault(easter_monday_1).default; } }));\nvar easter_sunday_1 = __webpack_require__(/*! ./easter-sunday */ \"./node_modules/swedish-holidays/dist/dates/easter-sunday.js\");\nObject.defineProperty(exports, \"EasterSunday\", ({ enumerable: true, get: function () { return __importDefault(easter_sunday_1).default; } }));\nObject.defineProperty(exports, \"Paaskdagen\", ({ enumerable: true, get: function () { return __importDefault(easter_sunday_1).default; } }));\nvar epiphany_1 = __webpack_require__(/*! ./epiphany */ \"./node_modules/swedish-holidays/dist/dates/epiphany.js\");\nObject.defineProperty(exports, \"Epiphany\", ({ enumerable: true, get: function () { return __importDefault(epiphany_1).default; } }));\nObject.defineProperty(exports, \"TrettondedagJul\", ({ enumerable: true, get: function () { return __importDefault(epiphany_1).default; } }));\nvar good_friday_1 = __webpack_require__(/*! ./good-friday */ \"./node_modules/swedish-holidays/dist/dates/good-friday.js\");\nObject.defineProperty(exports, \"GoodFriday\", ({ enumerable: true, get: function () { return __importDefault(good_friday_1).default; } }));\nObject.defineProperty(exports, \"Laangfredagen\", ({ enumerable: true, get: function () { return __importDefault(good_friday_1).default; } }));\nvar holy_saturday_1 = __webpack_require__(/*! ./holy-saturday */ \"./node_modules/swedish-holidays/dist/dates/holy-saturday.js\");\nObject.defineProperty(exports, \"HolySaturday\", ({ enumerable: true, get: function () { return __importDefault(holy_saturday_1).default; } }));\nObject.defineProperty(exports, \"Paaskafton\", ({ enumerable: true, get: function () { return __importDefault(holy_saturday_1).default; } }));\nvar maundy_thursday_1 = __webpack_require__(/*! ./maundy-thursday */ \"./node_modules/swedish-holidays/dist/dates/maundy-thursday.js\");\nObject.defineProperty(exports, \"MaundyThursday\", ({ enumerable: true, get: function () { return __importDefault(maundy_thursday_1).default; } }));\nObject.defineProperty(exports, \"Skaertorsdagen\", ({ enumerable: true, get: function () { return __importDefault(maundy_thursday_1).default; } }));\nvar may_first_1 = __webpack_require__(/*! ./may-first */ \"./node_modules/swedish-holidays/dist/dates/may-first.js\");\nObject.defineProperty(exports, \"MayFirst\", ({ enumerable: true, get: function () { return __importDefault(may_first_1).default; } }));\nObject.defineProperty(exports, \"FoerstaMaj\", ({ enumerable: true, get: function () { return __importDefault(may_first_1).default; } }));\nvar midsummer_day_1 = __webpack_require__(/*! ./midsummer-day */ \"./node_modules/swedish-holidays/dist/dates/midsummer-day.js\");\nObject.defineProperty(exports, \"MidsummerDay\", ({ enumerable: true, get: function () { return __importDefault(midsummer_day_1).default; } }));\nObject.defineProperty(exports, \"Midsommardagen\", ({ enumerable: true, get: function () { return __importDefault(midsummer_day_1).default; } }));\nvar midsummer_eve_1 = __webpack_require__(/*! ./midsummer-eve */ \"./node_modules/swedish-holidays/dist/dates/midsummer-eve.js\");\nObject.defineProperty(exports, \"MidsummerEve\", ({ enumerable: true, get: function () { return __importDefault(midsummer_eve_1).default; } }));\nObject.defineProperty(exports, \"Midsommarafton\", ({ enumerable: true, get: function () { return __importDefault(midsummer_eve_1).default; } }));\nvar national_day_1 = __webpack_require__(/*! ./national-day */ \"./node_modules/swedish-holidays/dist/dates/national-day.js\");\nObject.defineProperty(exports, \"NationalDay\", ({ enumerable: true, get: function () { return __importDefault(national_day_1).default; } }));\nObject.defineProperty(exports, \"SverigesNationaldag\", ({ enumerable: true, get: function () { return __importDefault(national_day_1).default; } }));\nvar new_years_day_1 = __webpack_require__(/*! ./new-years-day */ \"./node_modules/swedish-holidays/dist/dates/new-years-day.js\");\nObject.defineProperty(exports, \"NewYearsDay\", ({ enumerable: true, get: function () { return __importDefault(new_years_day_1).default; } }));\nObject.defineProperty(exports, \"Nyaarsdagen\", ({ enumerable: true, get: function () { return __importDefault(new_years_day_1).default; } }));\nvar new_years_eve_1 = __webpack_require__(/*! ./new-years-eve */ \"./node_modules/swedish-holidays/dist/dates/new-years-eve.js\");\nObject.defineProperty(exports, \"NewYearsEve\", ({ enumerable: true, get: function () { return __importDefault(new_years_eve_1).default; } }));\nObject.defineProperty(exports, \"Nyaarsafton\", ({ enumerable: true, get: function () { return __importDefault(new_years_eve_1).default; } }));\nvar pentecost_eve_1 = __webpack_require__(/*! ./pentecost-eve */ \"./node_modules/swedish-holidays/dist/dates/pentecost-eve.js\");\nObject.defineProperty(exports, \"PentecostEve\", ({ enumerable: true, get: function () { return __importDefault(pentecost_eve_1).default; } }));\nObject.defineProperty(exports, \"Pingstafton\", ({ enumerable: true, get: function () { return __importDefault(pentecost_eve_1).default; } }));\nvar twelfth_night_1 = __webpack_require__(/*! ./twelfth-night */ \"./node_modules/swedish-holidays/dist/dates/twelfth-night.js\");\nObject.defineProperty(exports, \"TwelfthNight\", ({ enumerable: true, get: function () { return __importDefault(twelfth_night_1).default; } }));\nObject.defineProperty(exports, \"Trettondagsafton\", ({ enumerable: true, get: function () { return __importDefault(twelfth_night_1).default; } }));\nvar walpurgis_night_1 = __webpack_require__(/*! ./walpurgis-night */ \"./node_modules/swedish-holidays/dist/dates/walpurgis-night.js\");\nObject.defineProperty(exports, \"WalpurgisNight\", ({ enumerable: true, get: function () { return __importDefault(walpurgis_night_1).default; } }));\nObject.defineProperty(exports, \"Valborgsmaessoafton\", ({ enumerable: true, get: function () { return __importDefault(walpurgis_night_1).default; } }));\nvar whit_sunday_1 = __webpack_require__(/*! ./whit-sunday */ \"./node_modules/swedish-holidays/dist/dates/whit-sunday.js\");\nObject.defineProperty(exports, \"WhitSunday\", ({ enumerable: true, get: function () { return __importDefault(whit_sunday_1).default; } }));\nObject.defineProperty(exports, \"Pingstdagen\", ({ enumerable: true, get: function () { return __importDefault(whit_sunday_1).default; } }));\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://ts/./node_modules/swedish-holidays/dist/dates/index.js?");

/***/ }),

/***/ "./node_modules/swedish-holidays/dist/dates/maundy-thursday.js":
/*!*********************************************************************!*\
  !*** ./node_modules/swedish-holidays/dist/dates/maundy-thursday.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst easter_sunday_1 = __webpack_require__(/*! ./easter-sunday */ \"./node_modules/swedish-holidays/dist/dates/easter-sunday.js\");\nconst holiday_names_sv_se_1 = __importDefault(__webpack_require__(/*! ../holiday-names.sv-se */ \"./node_modules/swedish-holidays/dist/holiday-names.sv-se.js\"));\nclass MaundyThursday extends easter_sunday_1.EasterSundayDependant {\n    constructor({ year, language = holiday_names_sv_se_1.default } = { language: holiday_names_sv_se_1.default }) {\n        super(MaundyThursday.easterOffset, year);\n        this.isPublicHoliday = false;\n        this.name = language.maundyThursday;\n    }\n}\nexports[\"default\"] = MaundyThursday;\nMaundyThursday.easterOffset = -3;\n//# sourceMappingURL=maundy-thursday.js.map\n\n//# sourceURL=webpack://ts/./node_modules/swedish-holidays/dist/dates/maundy-thursday.js?");

/***/ }),

/***/ "./node_modules/swedish-holidays/dist/dates/may-first.js":
/*!***************************************************************!*\
  !*** ./node_modules/swedish-holidays/dist/dates/may-first.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst holiday_names_sv_se_1 = __importDefault(__webpack_require__(/*! ../holiday-names.sv-se */ \"./node_modules/swedish-holidays/dist/holiday-names.sv-se.js\"));\nconst fixed_1 = __importDefault(__webpack_require__(/*! ./fixed */ \"./node_modules/swedish-holidays/dist/dates/fixed.js\"));\nclass MayFirst extends fixed_1.default {\n    constructor({ year, language = holiday_names_sv_se_1.default } = { language: holiday_names_sv_se_1.default }) {\n        super(MayFirst.day, MayFirst.month, language.mayFirst, true, year);\n    }\n}\nexports[\"default\"] = MayFirst;\nMayFirst.day = 1;\nMayFirst.month = 5;\n//# sourceMappingURL=may-first.js.map\n\n//# sourceURL=webpack://ts/./node_modules/swedish-holidays/dist/dates/may-first.js?");

/***/ }),

/***/ "./node_modules/swedish-holidays/dist/dates/midsummer-day.js":
/*!*******************************************************************!*\
  !*** ./node_modules/swedish-holidays/dist/dates/midsummer-day.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst holiday_names_sv_se_1 = __importDefault(__webpack_require__(/*! ../holiday-names.sv-se */ \"./node_modules/swedish-holidays/dist/holiday-names.sv-se.js\"));\nconst date_utils_1 = __webpack_require__(/*! ../date-utils */ \"./node_modules/swedish-holidays/dist/date-utils.js\");\nconst midsummer_eve_1 = __importDefault(__webpack_require__(/*! ./midsummer-eve */ \"./node_modules/swedish-holidays/dist/dates/midsummer-eve.js\"));\nclass MidsummerDay extends midsummer_eve_1.default {\n    constructor({ year, language = holiday_names_sv_se_1.default } = { language: holiday_names_sv_se_1.default }) {\n        super({ year });\n        this.isPublicHoliday = true;\n        this.date = (0, date_utils_1.plusDays)(this.date, 1);\n        this.month = this.date.getMonth() + 1;\n        this.day = this.date.getDate();\n        this.name = language.midsummerDay;\n    }\n    static mightBe(date) {\n        return super.mightBe((0, date_utils_1.plusDays)(date, -1));\n    }\n}\nexports[\"default\"] = MidsummerDay;\n//# sourceMappingURL=midsummer-day.js.map\n\n//# sourceURL=webpack://ts/./node_modules/swedish-holidays/dist/dates/midsummer-day.js?");

/***/ }),

/***/ "./node_modules/swedish-holidays/dist/dates/midsummer-eve.js":
/*!*******************************************************************!*\
  !*** ./node_modules/swedish-holidays/dist/dates/midsummer-eve.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst holiday_names_sv_se_1 = __importDefault(__webpack_require__(/*! ../holiday-names.sv-se */ \"./node_modules/swedish-holidays/dist/holiday-names.sv-se.js\"));\nconst date_utils_1 = __webpack_require__(/*! ../date-utils */ \"./node_modules/swedish-holidays/dist/date-utils.js\");\nclass MidsummerEve {\n    constructor({ year, language = holiday_names_sv_se_1.default } = { language: holiday_names_sv_se_1.default }) {\n        this.isPublicHoliday = false;\n        const y = year || new Date().getFullYear();\n        this.year = y;\n        this.date = (0, date_utils_1.fixedDate)((0, date_utils_1.firstOfWeekdayAfterDate)(date_utils_1.Weekday.Friday, new Date(y, 5, 19)));\n        this.month = this.date.getMonth() + 1;\n        this.day = this.date.getDate();\n        this.name = language.midsummerEve;\n    }\n    static mightBe(date) {\n        const month = date.getMonth() + 1;\n        const day = date.getDate();\n        // Earliest 19:th June\n        // Latest 25:th June\n        if (month === 6) {\n            return day >= 19 && day <= 25;\n        }\n        return false;\n    }\n}\nexports[\"default\"] = MidsummerEve;\n//# sourceMappingURL=midsummer-eve.js.map\n\n//# sourceURL=webpack://ts/./node_modules/swedish-holidays/dist/dates/midsummer-eve.js?");

/***/ }),

/***/ "./node_modules/swedish-holidays/dist/dates/national-day.js":
/*!******************************************************************!*\
  !*** ./node_modules/swedish-holidays/dist/dates/national-day.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst holiday_names_sv_se_1 = __importDefault(__webpack_require__(/*! ../holiday-names.sv-se */ \"./node_modules/swedish-holidays/dist/holiday-names.sv-se.js\"));\nconst fixed_1 = __importDefault(__webpack_require__(/*! ./fixed */ \"./node_modules/swedish-holidays/dist/dates/fixed.js\"));\nclass NationalDay extends fixed_1.default {\n    constructor({ year, language = holiday_names_sv_se_1.default } = { language: holiday_names_sv_se_1.default }) {\n        super(NationalDay.day, NationalDay.month, language.swedishNationalDay, true, year);\n    }\n}\nexports[\"default\"] = NationalDay;\nNationalDay.day = 6;\nNationalDay.month = 6;\n//# sourceMappingURL=national-day.js.map\n\n//# sourceURL=webpack://ts/./node_modules/swedish-holidays/dist/dates/national-day.js?");

/***/ }),

/***/ "./node_modules/swedish-holidays/dist/dates/new-years-day.js":
/*!*******************************************************************!*\
  !*** ./node_modules/swedish-holidays/dist/dates/new-years-day.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst holiday_names_sv_se_1 = __importDefault(__webpack_require__(/*! ../holiday-names.sv-se */ \"./node_modules/swedish-holidays/dist/holiday-names.sv-se.js\"));\nconst fixed_1 = __importDefault(__webpack_require__(/*! ./fixed */ \"./node_modules/swedish-holidays/dist/dates/fixed.js\"));\nclass NewYearsDay extends fixed_1.default {\n    constructor({ year, language = holiday_names_sv_se_1.default } = { language: holiday_names_sv_se_1.default }) {\n        super(NewYearsDay.day, NewYearsDay.month, language.newYearsDay, true, year);\n    }\n}\nexports[\"default\"] = NewYearsDay;\nNewYearsDay.day = 1;\nNewYearsDay.month = 1;\n//# sourceMappingURL=new-years-day.js.map\n\n//# sourceURL=webpack://ts/./node_modules/swedish-holidays/dist/dates/new-years-day.js?");

/***/ }),

/***/ "./node_modules/swedish-holidays/dist/dates/new-years-eve.js":
/*!*******************************************************************!*\
  !*** ./node_modules/swedish-holidays/dist/dates/new-years-eve.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst holiday_names_sv_se_1 = __importDefault(__webpack_require__(/*! ../holiday-names.sv-se */ \"./node_modules/swedish-holidays/dist/holiday-names.sv-se.js\"));\nconst fixed_1 = __importDefault(__webpack_require__(/*! ./fixed */ \"./node_modules/swedish-holidays/dist/dates/fixed.js\"));\nclass NewYearsEve extends fixed_1.default {\n    constructor({ year, language = holiday_names_sv_se_1.default } = { language: holiday_names_sv_se_1.default }) {\n        super(NewYearsEve.day, NewYearsEve.month, language.newYearsEve, false, year);\n    }\n}\nexports[\"default\"] = NewYearsEve;\nNewYearsEve.day = 31;\nNewYearsEve.month = 12;\n//# sourceMappingURL=new-years-eve.js.map\n\n//# sourceURL=webpack://ts/./node_modules/swedish-holidays/dist/dates/new-years-eve.js?");

/***/ }),

/***/ "./node_modules/swedish-holidays/dist/dates/pentecost-eve.js":
/*!*******************************************************************!*\
  !*** ./node_modules/swedish-holidays/dist/dates/pentecost-eve.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst easter_sunday_1 = __webpack_require__(/*! ./easter-sunday */ \"./node_modules/swedish-holidays/dist/dates/easter-sunday.js\");\nconst holiday_names_sv_se_1 = __importDefault(__webpack_require__(/*! ../holiday-names.sv-se */ \"./node_modules/swedish-holidays/dist/holiday-names.sv-se.js\"));\nclass PentecostEve extends easter_sunday_1.EasterSundayDependant {\n    constructor({ year, language = holiday_names_sv_se_1.default } = { language: holiday_names_sv_se_1.default }) {\n        super(PentecostEve.easterOffset, year);\n        this.isPublicHoliday = false;\n        this.name = language.pentecostEve;\n    }\n}\nexports[\"default\"] = PentecostEve;\nPentecostEve.easterOffset = 7 * 7 - 1;\n//# sourceMappingURL=pentecost-eve.js.map\n\n//# sourceURL=webpack://ts/./node_modules/swedish-holidays/dist/dates/pentecost-eve.js?");

/***/ }),

/***/ "./node_modules/swedish-holidays/dist/dates/twelfth-night.js":
/*!*******************************************************************!*\
  !*** ./node_modules/swedish-holidays/dist/dates/twelfth-night.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst holiday_names_sv_se_1 = __importDefault(__webpack_require__(/*! ../holiday-names.sv-se */ \"./node_modules/swedish-holidays/dist/holiday-names.sv-se.js\"));\nconst fixed_1 = __importDefault(__webpack_require__(/*! ./fixed */ \"./node_modules/swedish-holidays/dist/dates/fixed.js\"));\nclass TwelfthNight extends fixed_1.default {\n    constructor({ year, language = holiday_names_sv_se_1.default } = { language: holiday_names_sv_se_1.default }) {\n        super(TwelfthNight.day, TwelfthNight.month, language.twelfthNight, false, year);\n    }\n}\nexports[\"default\"] = TwelfthNight;\nTwelfthNight.day = 5;\nTwelfthNight.month = 1;\n//# sourceMappingURL=twelfth-night.js.map\n\n//# sourceURL=webpack://ts/./node_modules/swedish-holidays/dist/dates/twelfth-night.js?");

/***/ }),

/***/ "./node_modules/swedish-holidays/dist/dates/walpurgis-night.js":
/*!*********************************************************************!*\
  !*** ./node_modules/swedish-holidays/dist/dates/walpurgis-night.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst holiday_names_sv_se_1 = __importDefault(__webpack_require__(/*! ../holiday-names.sv-se */ \"./node_modules/swedish-holidays/dist/holiday-names.sv-se.js\"));\nconst fixed_1 = __importDefault(__webpack_require__(/*! ./fixed */ \"./node_modules/swedish-holidays/dist/dates/fixed.js\"));\nclass WalpurgisNight extends fixed_1.default {\n    constructor({ year, language = holiday_names_sv_se_1.default } = { language: holiday_names_sv_se_1.default }) {\n        super(WalpurgisNight.day, WalpurgisNight.month, language.walpurgisNight, false, year);\n    }\n}\nexports[\"default\"] = WalpurgisNight;\nWalpurgisNight.day = 30;\nWalpurgisNight.month = 4;\n//# sourceMappingURL=walpurgis-night.js.map\n\n//# sourceURL=webpack://ts/./node_modules/swedish-holidays/dist/dates/walpurgis-night.js?");

/***/ }),

/***/ "./node_modules/swedish-holidays/dist/dates/whit-sunday.js":
/*!*****************************************************************!*\
  !*** ./node_modules/swedish-holidays/dist/dates/whit-sunday.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst easter_sunday_1 = __webpack_require__(/*! ./easter-sunday */ \"./node_modules/swedish-holidays/dist/dates/easter-sunday.js\");\nconst holiday_names_sv_se_1 = __importDefault(__webpack_require__(/*! ../holiday-names.sv-se */ \"./node_modules/swedish-holidays/dist/holiday-names.sv-se.js\"));\nclass WhitSunday extends easter_sunday_1.EasterSundayDependant {\n    constructor({ year, language = holiday_names_sv_se_1.default } = { language: holiday_names_sv_se_1.default }) {\n        super(WhitSunday.easterOffset, year);\n        this.name = language.whitSunday;\n    }\n}\nexports[\"default\"] = WhitSunday;\nWhitSunday.easterOffset = 7 * 7;\n//# sourceMappingURL=whit-sunday.js.map\n\n//# sourceURL=webpack://ts/./node_modules/swedish-holidays/dist/dates/whit-sunday.js?");

/***/ }),

/***/ "./node_modules/swedish-holidays/dist/holiday-names.sv-se.js":
/*!*******************************************************************!*\
  !*** ./node_modules/swedish-holidays/dist/holiday-names.sv-se.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst svSe = {\n    newYearsDay: 'Nyårsdagen',\n    twelfthNight: 'Trettondagsafton',\n    epiphany: 'Trettondedag jul',\n    maundyThursday: 'Skärtorsdagen',\n    goodFriday: 'Långfredagen',\n    holySaturday: 'Påskafton',\n    easterSunday: 'Påskdagen',\n    easterMonday: 'Annandag påsk',\n    walpurgisNight: 'Valborgsmässoafton',\n    mayFirst: 'Första maj',\n    ascensionDay: 'Kristi himmelsfärdsdag',\n    swedishNationalDay: 'Sveriges nationaldag',\n    pentecostEve: 'Pingstafton',\n    whitSunday: 'Pingstdagen',\n    midsummerEve: 'Midsommarafton',\n    midsummerDay: 'Midsommardagen',\n    allSaintsEve: 'Allhelgonaafton',\n    allSaintsDay: 'Alla helgons dag',\n    christmasEve: 'Julafton',\n    christmasDay: 'Juldagen',\n    boxingDay: 'Annandag jul',\n    newYearsEve: 'Nyårsafton'\n};\nexports[\"default\"] = svSe;\n//# sourceMappingURL=holiday-names.sv-se.js.map\n\n//# sourceURL=webpack://ts/./node_modules/swedish-holidays/dist/holiday-names.sv-se.js?");

/***/ }),

/***/ "./node_modules/swedish-holidays/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/swedish-holidays/dist/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.language = exports.isPublicHoliday = exports.isHoliday = exports.getUpcomingHolidays = exports.getHolidays = void 0;\nconst dates_1 = __webpack_require__(/*! ./dates */ \"./node_modules/swedish-holidays/dist/dates/index.js\");\nconst date_utils_1 = __webpack_require__(/*! ./date-utils */ \"./node_modules/swedish-holidays/dist/date-utils.js\");\nconst holiday_names_sv_se_1 = __importDefault(__webpack_require__(/*! ./holiday-names.sv-se */ \"./node_modules/swedish-holidays/dist/holiday-names.sv-se.js\"));\nconst Holidays = [\n    dates_1.AllSaintsDay,\n    dates_1.AllSaintsEve,\n    dates_1.AscensionDay,\n    dates_1.BoxingDay,\n    dates_1.ChristmasDay,\n    dates_1.ChristmasEve,\n    dates_1.EasterMonday,\n    dates_1.EasterSunday,\n    dates_1.Epiphany,\n    dates_1.GoodFriday,\n    dates_1.HolySaturday,\n    dates_1.MaundyThursday,\n    dates_1.MayFirst,\n    dates_1.MidsummerDay,\n    dates_1.MidsummerEve,\n    dates_1.NationalDay,\n    dates_1.NewYearsDay,\n    dates_1.NewYearsEve,\n    dates_1.PentecostEve,\n    dates_1.TwelfthNight,\n    dates_1.WalpurgisNight,\n    dates_1.WhitSunday\n];\nconst getHolidays = (year, language) => {\n    return Holidays.map((Holiday) => new Holiday({ year, language })).sort((d1, d2) => d1.date.getTime() - d2.date.getTime());\n};\nexports.getHolidays = getHolidays;\nconst getUpcomingHolidays = (language = holiday_names_sv_se_1.default) => {\n    const now = new Date();\n    const nextYear = (0, date_utils_1.plusYears)(now, 1);\n    return [...(0, exports.getHolidays)(now.getFullYear(), language), ...(0, exports.getHolidays)(nextYear.getFullYear(), language)].filter((holiday) => holiday.date.getTime() >= now.getTime() && holiday.date.getTime() < nextYear.getTime());\n};\nexports.getUpcomingHolidays = getUpcomingHolidays;\nconst isHoliday = (date = new Date(), options = { language: holiday_names_sv_se_1.default }) => {\n    const possible = Holidays.filter((Holiday) => Holiday.mightBe(date));\n    options.year = date.getFullYear();\n    return possible.map((p) => new p(options)).find((holiday) => (0, date_utils_1.isSameDate)(date, holiday.date));\n};\nexports.isHoliday = isHoliday;\nconst isPublicHoliday = (date = new Date(), options) => {\n    var _a;\n    if (date.getDay() === date_utils_1.Weekday.Sunday) {\n        return true;\n    }\n    return ((_a = (0, exports.isHoliday)(date, options)) === null || _a === void 0 ? void 0 : _a.isPublicHoliday) || false;\n};\nexports.isPublicHoliday = isPublicHoliday;\nexports.language = holiday_names_sv_se_1.default;\n__exportStar(__webpack_require__(/*! ./dates */ \"./node_modules/swedish-holidays/dist/dates/index.js\"), exports);\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://ts/./node_modules/swedish-holidays/dist/index.js?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar holidays = __importStar(__webpack_require__(/*! swedish-holidays */ \"./node_modules/swedish-holidays/dist/index.js\"));\n// Define roles and their corresponding decimals to populate frontend\nvar roles = {\n    \"Developer\": 0.9,\n    \"Product Manager\": 0.7,\n    \"Manager\": 1.2,\n    // Add other roles here\n};\n// List of month names\nvar monthNames = [\n    \"January\", \"February\", \"March\", \"April\", \"May\", \"June\",\n    \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"\n];\nfunction calculateTotal(role, daysOff, year, month) {\n    var decimal = roles[role];\n    var currentDate = new Date();\n    year = year || currentDate.getFullYear();\n    month = month !== undefined ? month : currentDate.getMonth(); // Use current month if not provided\n    var workdays = getWeekdaysInMonth(year, month) - daysOff;\n    return (workdays * 8) * decimal;\n}\n// Function to calculate the number of weekdays in a month (month is zero-based index)\nfunction getWeekdaysInMonth(year, month) {\n    var startDate = new Date(year, month);\n    var endDate = new Date(year, month + 1, 0);\n    var weekdays = 0;\n    while (startDate <= endDate) {\n        var dayOfWeek = startDate.getDay();\n        if (dayOfWeek !== 0 && dayOfWeek !== 6 && !holidays.isHoliday(startDate)) { // Exclude Sunday and Saturday and holidays\n            weekdays++;\n        }\n        startDate.setDate(startDate.getDate() + 1);\n    }\n    return weekdays;\n}\nconsole.log(calculateTotal(\"Developer\", 0, 2024, 5));\ndocument.addEventListener('DOMContentLoaded', function () {\n    var selectElement = document.getElementById('roleSelect');\n    var daysOffInput = document.getElementById('daysOffInput');\n    var monthSelect = document.getElementById('monthSelect');\n    var yearInput = document.getElementById('yearInput');\n    var submitButton = document.getElementById('submitButton');\n    var resultElement = document.getElementById('result');\n    // Populate the select element with options from the 'roles' object\n    for (var role in roles) {\n        var option = document.createElement('option');\n        option.value = role;\n        option.textContent = role;\n        selectElement.appendChild(option);\n    }\n    // Populate the month select element with month names\n    monthNames.forEach(function (month, index) {\n        var option = document.createElement('option');\n        option.value = index.toString();\n        option.textContent = month;\n        monthSelect.appendChild(option);\n    });\n    // Set default values for month and year\n    var currentDate = new Date();\n    monthSelect.value = currentDate.getMonth().toString();\n    yearInput.value = currentDate.getFullYear().toString();\n    // Add event listener to the submit button\n    submitButton.addEventListener('click', function () {\n        var selectedRole = selectElement.value;\n        var daysOff = parseInt(daysOffInput.value, 10);\n        var month = parseInt(monthSelect.value, 10);\n        var year = parseInt(yearInput.value, 10);\n        var total = calculateTotal(selectedRole, daysOff, year, month);\n        resultElement.textContent = \"Total: \".concat(total, \" hours\");\n    });\n});\n\n\n//# sourceURL=webpack://ts/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;