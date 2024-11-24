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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/classes.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/classes.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./global.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/global.css\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* GENERAL */\r\n\r\n.lightTheme {\r\n    color: var(--color-secundaria);\r\n    background-color: var(--color-primaria);\r\n}\r\n\r\n.darkTheme {\r\n    color: var(--color-primaria);\r\n    background-color: var(--color-secundaria);\r\n}\r\n\r\n/* =============================== */\r\n/* HEADER */\r\n/* =============================== */\r\n\r\n.spanHeaderRightIcons {\r\n    padding: .5rem;\r\n}\r\n\r\n.imgHeaderIcons {\r\n    width: 50px;\r\n    height: 50px;\r\n    @media (prefers-color-scheme: light) {\r\n        filter: invert();\r\n    }\r\n}\r\n\r\n.imgHeaderLogo {\r\n    max-width: 100%;\r\n    @media (prefers-color-scheme: dark) {\r\n        filter: invert();\r\n    }\r\n}\r\n\r\n/* =============================== */\r\n/* MAIN */\r\n/* =============================== */\r\n\r\n\r\n.imgMainShow {\r\n    max-width: 100%;\r\n} \r\n\r\n.spanMainShow {\r\n    display: inline-block;\r\n}\r\n\r\n.divMainModulesExpansion {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.imgMainModulesExpand {\r\n    width: 30px;\r\n    height: 35px;\r\n}\r\n\r\n.divMainModules {\r\n    color: var(--color-secundaria);\r\n    background-color: var(--color-primaria);\r\n}\r\n\r\n.divMainModulesContent {\r\n    display: none;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: .5rem;\r\n}\r\n\r\n.divMainModulesOne {\r\n    padding: .5rem 2rem;\r\n}\r\n\r\n.divMainContactsContainer {\r\n    @media (max-width: 375px) {\r\n        display: grid;\r\n        grid-template-columns: repeat(2, 1fr);\r\n    }\r\n\r\n    @media (min-width: 376px) and (max-width: 475px) {\r\n        display: grid;\r\n        grid-template-columns: repeat(3, 1fr);\r\n    }   \r\n\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.divMainOneContact {\r\n    padding: .2rem;\r\n    margin: .1rem 0;\r\n}\r\n\r\n/* ============================= */\r\n/* CONFIGURAÇÕES */\r\n/* ============================= */\r\n\r\n.divMainConfiguration {\r\n    width: fit-content;\r\n    margin: .6rem;\r\n    padding: .5rem;\r\n    border: 1px solid var(--color-terciaria);\r\n    border-radius: .4rem;\r\n}\r\n\r\n.configUsersTopics {\r\n    display: block; \r\n    text-align: center;\r\n}\r\n\r\n.configUsersTopicsImagens {\r\n    width: 50px;\r\n    height: auto;\r\n    @media (prefers-color-scheme: dark) {\r\n        filter: invert();\r\n    }\r\n}\r\n\r\n.configUsersTopicsInputs {\r\n    border-radius: .3rem;\r\n    height: fit-content;\r\n    text-align: center;\r\n    font: var(--font-primaria);\r\n}\r\n\r\n/* CALCULAR */\r\n\r\n.divMainCalcular {\r\n    display: none;\r\n}\r\n\r\n.inputMainValue {\r\n    font: var(--font-primaria);\r\n    padding: .5rem;\r\n    margin: .5rem;\r\n    border-radius: .3rem;\r\n    text-align: center;\r\n    align-items: center;\r\n    align-content: center;\r\n    width: 80%;\r\n}\r\n\r\n.inputSecondValue {\r\n    font: var(--font-primaria);\r\n    padding: .5rem;\r\n    margin: .5rem;\r\n    border-radius: .3rem;\r\n    text-align: center;\r\n    align-items: center;\r\n    align-content: center;\r\n    width: 15%;\t\r\n}\r\n\r\n.spanSecondInput {\r\n    display: block;\r\n}\r\n\r\n.divMainCalcularFinance {\r\n    display: flex;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://resolve-tudo/./src/css/classes.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/elements.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/elements.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./global.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/global.css\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* BUTTONS */\r\n\r\nul {\r\n    list-style: none;\r\n}\r\n\r\nbutton {\r\n    padding: .5rem;\r\n    margin: 1rem;\r\n    border-radius: 1rem;\r\n\r\n    color: var(--color-secundaria);\r\n    background-color: var(--color-primaria);\r\n}\r\n\r\nlabel {\r\n    margin: 1rem;\r\n    display: block;\r\n    font-size: 1rem;\r\n}\r\n\r\ntextarea::placeholder {\r\n    font: var(--font-primaria);\r\n}\r\n\r\na {\r\n    text-decoration: underline;\r\n    @media (prefers-color-scheme: dark) {\r\n        color: var(--color-primaria);\r\n    }\r\n    @media (prefers-color-scheme: light) {\r\n        color: var(--color-secundaria);\r\n    }\r\n}\r\n\r\ntextarea {\r\n    font: var(--font-primaria);\r\n    padding: .5rem;\r\n    margin: .5rem;\r\n    border-radius: .3rem;\r\n    text-align: center;\r\n    resize: none;\r\n    align-items: center;\r\n    align-content: center;\r\n\r\n    @media (max-width: 500px) {\r\n        width: 80%;\r\n        height: 6rem;\r\n    }\r\n\r\n    @media (min-width: 501px) and (max-width: 799px) {\r\n        width: 65%;\r\n        height: 8rem;\r\n    }\r\n\r\n    @media (min-width: 800px) {\r\n        width: 50%;\r\n        height: 10rem;\r\n    }\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://resolve-tudo/./src/css/elements.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/global.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/global.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n    /* CORES */\r\n    --color-primaria: white;\r\n    --color-secundaria: black;\r\n    --color-terciaria: gray;\r\n\r\n    /* TIPOGRAFIA */\r\n    --font-primaria: 1rem/1.5 'Playfair Display', sans-serif;\r\n    --font-secundaria: 1rem/1.5 'Agdasima', sans-serif;   \r\n}\r\n\r\nbody {\r\n\r\n\tfont: var(--font-primaria);\r\n    padding: 0;\r\n    margin: 0;\r\n    text-align: center;\r\n    box-sizing: border-box;\r\n}\r\n\r\nheader {\r\n    color: var(--color-secundaria);\r\n    background-color: var(--color-primaria);\r\n}\r\n\r\nmain {\r\n    padding: .4rem;\r\n\r\n    color: var(--color-primaria);\r\n    background-color: var(--color-secundaria);\r\n}\r\n\r\nfooter {\r\n    color: var(--color-secundaria);\r\n    background-color: var(--color-primaria);\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://resolve-tudo/./src/css/global.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/ids.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/ids.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* ========================== */\r\n/* HEADER */\r\n/* ========================== */\r\n\r\n/* DIVS */\r\n\r\n#divHeader {\r\n    align-items: center;\r\n    padding: .7rem;\r\n\r\n    @media (min-width: 1025px) {\r\n        display: flex;\r\n        justify-content: space-between;\r\n    }\r\n}\r\n\r\n#divHeaderLeftIcons {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n#divHeaderPages {\r\n    margin: .5rem;\r\n    display: none;\r\n\r\n    a {\r\n        display: block;\r\n        padding: .3rem;\r\n\r\n        @media (prefers-color-scheme: dark) {\r\n            color: var(--color-primaria);\r\n            background-color: var(--color-secundaria);\r\n        }\r\n        \r\n        @media (prefers-color-scheme: light) {\r\n            color: var(--color-secundaria);\r\n            background-color: var(--color-primaria);\r\n        }\r\n    }\r\n}\r\n\r\n\r\n/* ========================= */\r\n/* MAIN */\r\n/* ========================= */\r\n\r\n/* DIVS */\r\n\r\n#divMainShowFirst {\r\n    align-items: center;\r\n\r\n    @media (min-width: 750px) {\r\n        display: grid;\r\n        grid-template-columns: repeat(2, 50%)\r\n    }\r\n}\r\n\r\n#divMainShowSecond {\r\n    align-items: center;\r\n\r\n    @media (min-width: 750px) {\r\n        display: grid;\r\n        grid-template-columns: repeat(2, 50%)\r\n    }\r\n}\r\n\r\n#divMainShowThird {\r\n    align-items: center;\r\n\r\n    @media (min-width: 750px) {\r\n        display: grid;\r\n        grid-template-columns: repeat(2, 50%)\r\n    }\r\n}\r\n\r\n/* P */\r\n\r\n#pMainIntroduction {\r\n    display: inline;\r\n    color: var(--color-secundaria);\r\n    background-color: var(--color-primaria);\r\n    padding: .3rem;\r\n    border-radius: .5rem;\r\n}\r\n\r\n#imgMainContactGitHub {\r\n    @media (prefers-color-scheme: light) {\r\n        filter: invert();\r\n    }\r\n}\r\n\r\n#divFooter {\r\n    padding: .1rem;\r\n}\r\n\r\n/* ========================== */\r\n/* CONFIGURACOES */\r\n/* ============================ */\r\n\r\n#divConfiguracoes {\r\n    padding: .6rem;\r\n\r\n    @media (max-width: 550px) {\r\n        display: inline-block;\r\n        justify-content: center;\r\n        align-items: center;\r\n    }\r\n\r\n    @media (min-width: 551px) and (max-width: 924px) {\r\n        display: grid;\r\n        grid-template-columns: repeat(2, 50%);\r\n    }\r\n\r\n    @media (min-width: 925px) {\r\n        display: flex;\r\n        justify-content: space-between;\r\n    }\r\n}\r\n\r\n/* CALCULAR */\r\n\r\n#calcularSelect {\r\n    font: var(--font-primaria);\r\n    font-weight: bold;\r\n\r\n    padding: .5rem;\r\n    margin: .5rem;\r\n\r\n    border: 1px solid var(--color-terciaria);\r\n    border-radius: .3rem;\r\n    text-align: center;\r\n}\r\n\r\n#inputMathSecond {\r\n    font: var(--font-primaria);\r\n    padding: .5rem;\r\n    margin: .5rem;\r\n    border-radius: .3rem;\r\n    text-align: center;\r\n    width: 15%;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://resolve-tudo/./src/css/ids.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_classes_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./classes.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/classes.css\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ids_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./ids.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/ids.css\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./global.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/global.css\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_elements_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./elements.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/elements.css\");\n// Imports\n\n\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_classes_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ids_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_elements_css__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, ``, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://resolve-tudo/./src/css/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://resolve-tudo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://resolve-tudo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://resolve-tudo/./src/css/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://resolve-tudo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://resolve-tudo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://resolve-tudo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://resolve-tudo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://resolve-tudo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://resolve-tudo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/ts/config.ts":
/*!**************************!*\
  !*** ./src/ts/config.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   control: () => (/* binding */ control),\n/* harmony export */   cor_principal: () => (/* binding */ cor_principal),\n/* harmony export */   cor_secundaria: () => (/* binding */ cor_secundaria)\n/* harmony export */ });\nconst cor_principal = 'white';\nconst cor_secundaria = 'black';\nvar control = {\n    lastModuleShow: 0\n};\n\n\n\n//# sourceURL=webpack://resolve-tudo/./src/ts/config.ts?");

/***/ }),

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.css */ \"./src/css/index.css\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ \"./src/ts/main.ts\");\n/* harmony import */ var _assets_icons_general_icon_main_ico__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/general/icon_main.ico */ \"./src/assets/icons/general/icon_main.ico\");\n/* harmony import */ var _assets_icons_general_icon_pages_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/general/icon_pages.png */ \"./src/assets/icons/general/icon_pages.png\");\n/* harmony import */ var _assets_logos_logo_Resolve_Tudo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/logos/logo_Resolve_Tudo.png */ \"./src/assets/logos/logo_Resolve_Tudo.png\");\n/* harmony import */ var _assets_icons_general_icon_sobre_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/icons/general/icon_sobre.png */ \"./src/assets/icons/general/icon_sobre.png\");\n/* harmony import */ var _assets_icons_general_icon_config_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/icons/general/icon_config.png */ \"./src/assets/icons/general/icon_config.png\");\n/* harmony import */ var _assets_images_image_copilot_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/images/image_copilot.png */ \"./src/assets/images/image_copilot.png\");\n/* harmony import */ var _assets_images_image_objective_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/images/image_objective.png */ \"./src/assets/images/image_objective.png\");\n/* harmony import */ var _assets_images_image_tech_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/images/image_tech.png */ \"./src/assets/images/image_tech.png\");\n/* harmony import */ var _assets_icons_general_icon_arrow_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/icons/general/icon_arrow.png */ \"./src/assets/icons/general/icon_arrow.png\");\n/* harmony import */ var _assets_icons_social_facebook_pequeno_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/icons/social/facebook pequeno.png */ \"./src/assets/icons/social/facebook pequeno.png\");\n/* harmony import */ var _assets_icons_social_github_pequeno_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/icons/social/github pequeno.png */ \"./src/assets/icons/social/github pequeno.png\");\n/* harmony import */ var _assets_icons_social_ig_pequeno_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/icons/social/ig pequeno.png */ \"./src/assets/icons/social/ig pequeno.png\");\n/* harmony import */ var _assets_icons_social_linkedin_pequeno_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/icons/social/linkedin pequeno.png */ \"./src/assets/icons/social/linkedin pequeno.png\");\n/* harmony import */ var _assets_icons_social_pinterest_pequeno_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/icons/social/pinterest pequeno.png */ \"./src/assets/icons/social/pinterest pequeno.png\");\n/* harmony import */ var _assets_icons_social_tik_tok_pequeno_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/icons/social/tik-tok pequeno.png */ \"./src/assets/icons/social/tik-tok pequeno.png\");\n/* harmony import */ var _assets_icons_social_youtube_pequeno_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/icons/social/youtube pequeno.png */ \"./src/assets/icons/social/youtube pequeno.png\");\n/* harmony import */ var _assets_icons_social_zap_pequeno_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../assets/icons/social/zap pequeno.png */ \"./src/assets/icons/social/zap pequeno.png\");\n/* harmony import */ var _assets_icons_general_icon_user_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../assets/icons/general/icon_user.png */ \"./src/assets/icons/general/icon_user.png\");\n\n\n// ============================\n// IMPORTANDO \n// ============================\n// HEAD\n\n// HEADER\n\n\n\n\n// MAIN\n\n\n\n// MODULES\n\n// CONTACTS\n\n\n\n\n\n\n\n\n// CONFIGURAÇÕES\n\n// ========================\n// ELEMENTS\n// ========================\n// HEADER\nconst imgHeaderIconPages = document.querySelector('#imgHeaderIconPages');\nconst aHeaderPages = document.querySelectorAll('.aHeaderPages');\nconst divHeaderPages = document.querySelector('#divHeaderPages');\nconst imgHeaderIconConfig = document.querySelector('#imgHeaderIconConfig');\nconst imgHeaderIconSobre = document.querySelector('#imgHeaderIconSobre');\n// MAIN\nconst imgMainModulesExpand = document.querySelectorAll(\".imgMainModulesExpand\");\nconst divMainModulesContent = document.querySelectorAll(\".divMainModulesContent\");\nconst btnIndexFeedback = document.querySelector('#btnIndexFeedback');\nconst inputMainFeedback = document.querySelector('#inputMainFeedback');\n// ================================\n// VARIABLES\n// ================================\nvar degArrowModule = 0;\nvar pagesHeaderVisible = false;\nconst numberPhone = '61994030749';\n// ===============================\n// TRIGGERS\n// ===============================\nimgHeaderIconConfig.onclick = () => {\n    window.location.href = './configuracoes.html';\n};\nimgHeaderIconSobre.onclick = () => {\n    window.location.href = './sobre.html';\n};\nbtnIndexFeedback.onclick = () => {\n    const message = inputMainFeedback.value;\n    const url = `https://wa.me/${numberPhone}?text=Olá!%20deixo%20aqui%20meu%20feedback:%20${message}`;\n    window.open(url, '_blank');\n};\nimgHeaderIconPages.onpointerup = () => {\n    if (pagesHeaderVisible) {\n        pagesHeaderVisible = false;\n        divHeaderPages.style.display = 'none';\n    }\n    else {\n        pagesHeaderVisible = true;\n        divHeaderPages.style.display = 'block';\n    }\n};\naHeaderPages.forEach((page, index) => {\n    page.onclick = () => {\n        switch (index) {\n            case 0: // CALCULAR\n                window.location.href = './calcular.html';\n                break;\n            case 1: // CONFIG\n                window.location.href = './configuracoes.html';\n                break;\n            case 2: // SOBRE\n                window.location.href = './sobre.html';\n                break;\n        }\n    };\n});\nfunction getDisplayContent(width) {\n    if (width <= 800)\n        return 'block';\n    else\n        return 'flex';\n}\nfunction showAndHideModules() {\n    imgMainModulesExpand.forEach((img, index) => {\n        img.onclick = () => {\n            if (degArrowModule === 0) {\n                degArrowModule = 90;\n                img.style.transform = `rotate(${degArrowModule}deg)`;\n                if (divMainModulesContent[index]) {\n                    divMainModulesContent[index].style.display = getDisplayContent(window.innerWidth);\n                }\n            }\n            else {\n                degArrowModule = 0;\n                img.style.transform = `rotate(${degArrowModule}deg)`;\n                if (divMainModulesContent[index]) {\n                    divMainModulesContent[index].style.display = \"none\";\n                }\n            }\n        };\n    });\n}\ndocument.addEventListener('DOMContentLoaded', () => {\n    _main__WEBPACK_IMPORTED_MODULE_1__.changeTheme();\n    // OCULTANDO / MOSTRANDO MÓDULOS\n    showAndHideModules();\n});\n\n\n//# sourceURL=webpack://resolve-tudo/./src/ts/index.ts?");

/***/ }),

/***/ "./src/ts/main.ts":
/*!************************!*\
  !*** ./src/ts/main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changeColorDark: () => (/* binding */ changeColorDark),\n/* harmony export */   changeColorLight: () => (/* binding */ changeColorLight),\n/* harmony export */   changeTheme: () => (/* binding */ changeTheme)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/ts/config.ts\");\n\n// DEFININDO ELEMENTOS\nconst body = document.body;\n// DIVS\nconst divHeader = document.querySelector('#divHeader');\nconst divFooter = document.querySelector('#divFooter');\nconst divMainModules = document.querySelector('.divMainModules');\nconst divMainModulesContent = document.querySelectorAll('.divMainModulesContent');\n// H\n// const h2MainModules = document.querySelectorAll('.h2MainModules')\n// A\nconst aFooterLinkGithub = document.querySelector('#aFooterLinkGithub');\n// P\nconst pMainIntroduction = document.querySelector('#pMainIntroduction');\nfunction changeTheme() {\n    window.matchMedia('(prefers-color-scheme: dark)').matches ? changeColorDark() : changeColorLight();\n}\nfunction changeColorDark() {\n    body.classList.add('darkTheme');\n    // DIVS\n    divHeader === null || divHeader === void 0 ? void 0 : divHeader.classList.add('lightTheme');\n    divFooter === null || divFooter === void 0 ? void 0 : divFooter.classList.add('lightTheme');\n    if (aFooterLinkGithub)\n        aFooterLinkGithub.style.color = _config__WEBPACK_IMPORTED_MODULE_0__.cor_secundaria;\n}\nfunction changeColorLight() {\n    body.classList.add('lightTheme');\n    // DIVS\n    divHeader === null || divHeader === void 0 ? void 0 : divHeader.classList.add('darkTheme');\n    divFooter === null || divFooter === void 0 ? void 0 : divFooter.classList.add('darkTheme');\n    divMainModules === null || divMainModules === void 0 ? void 0 : divMainModules.classList.add('darkTheme');\n    // A\n    aFooterLinkGithub.style.color = _config__WEBPACK_IMPORTED_MODULE_0__.cor_principal;\n    pMainIntroduction.style.color = _config__WEBPACK_IMPORTED_MODULE_0__.cor_principal;\n    pMainIntroduction.style.backgroundColor = _config__WEBPACK_IMPORTED_MODULE_0__.cor_secundaria;\n}\n\n\n\n//# sourceURL=webpack://resolve-tudo/./src/ts/main.ts?");

/***/ }),

/***/ "./src/assets/icons/general/icon_arrow.png":
/*!*************************************************!*\
  !*** ./src/assets/icons/general/icon_arrow.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/icon_arrow.png\";\n\n//# sourceURL=webpack://resolve-tudo/./src/assets/icons/general/icon_arrow.png?");

/***/ }),

/***/ "./src/assets/icons/general/icon_config.png":
/*!**************************************************!*\
  !*** ./src/assets/icons/general/icon_config.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/icon_config.png\";\n\n//# sourceURL=webpack://resolve-tudo/./src/assets/icons/general/icon_config.png?");

/***/ }),

/***/ "./src/assets/icons/general/icon_main.ico":
/*!************************************************!*\
  !*** ./src/assets/icons/general/icon_main.ico ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/icon_main.ico\";\n\n//# sourceURL=webpack://resolve-tudo/./src/assets/icons/general/icon_main.ico?");

/***/ }),

/***/ "./src/assets/icons/general/icon_pages.png":
/*!*************************************************!*\
  !*** ./src/assets/icons/general/icon_pages.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/icon_pages.png\";\n\n//# sourceURL=webpack://resolve-tudo/./src/assets/icons/general/icon_pages.png?");

/***/ }),

/***/ "./src/assets/icons/general/icon_sobre.png":
/*!*************************************************!*\
  !*** ./src/assets/icons/general/icon_sobre.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/icon_sobre.png\";\n\n//# sourceURL=webpack://resolve-tudo/./src/assets/icons/general/icon_sobre.png?");

/***/ }),

/***/ "./src/assets/icons/general/icon_user.png":
/*!************************************************!*\
  !*** ./src/assets/icons/general/icon_user.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/icon_user.png\";\n\n//# sourceURL=webpack://resolve-tudo/./src/assets/icons/general/icon_user.png?");

/***/ }),

/***/ "./src/assets/icons/social/facebook pequeno.png":
/*!******************************************************!*\
  !*** ./src/assets/icons/social/facebook pequeno.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/facebook pequeno.png\";\n\n//# sourceURL=webpack://resolve-tudo/./src/assets/icons/social/facebook_pequeno.png?");

/***/ }),

/***/ "./src/assets/icons/social/github pequeno.png":
/*!****************************************************!*\
  !*** ./src/assets/icons/social/github pequeno.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/github pequeno.png\";\n\n//# sourceURL=webpack://resolve-tudo/./src/assets/icons/social/github_pequeno.png?");

/***/ }),

/***/ "./src/assets/icons/social/ig pequeno.png":
/*!************************************************!*\
  !*** ./src/assets/icons/social/ig pequeno.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/ig pequeno.png\";\n\n//# sourceURL=webpack://resolve-tudo/./src/assets/icons/social/ig_pequeno.png?");

/***/ }),

/***/ "./src/assets/icons/social/linkedin pequeno.png":
/*!******************************************************!*\
  !*** ./src/assets/icons/social/linkedin pequeno.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/linkedin pequeno.png\";\n\n//# sourceURL=webpack://resolve-tudo/./src/assets/icons/social/linkedin_pequeno.png?");

/***/ }),

/***/ "./src/assets/icons/social/pinterest pequeno.png":
/*!*******************************************************!*\
  !*** ./src/assets/icons/social/pinterest pequeno.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/pinterest pequeno.png\";\n\n//# sourceURL=webpack://resolve-tudo/./src/assets/icons/social/pinterest_pequeno.png?");

/***/ }),

/***/ "./src/assets/icons/social/tik-tok pequeno.png":
/*!*****************************************************!*\
  !*** ./src/assets/icons/social/tik-tok pequeno.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/tik-tok pequeno.png\";\n\n//# sourceURL=webpack://resolve-tudo/./src/assets/icons/social/tik-tok_pequeno.png?");

/***/ }),

/***/ "./src/assets/icons/social/youtube pequeno.png":
/*!*****************************************************!*\
  !*** ./src/assets/icons/social/youtube pequeno.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/youtube pequeno.png\";\n\n//# sourceURL=webpack://resolve-tudo/./src/assets/icons/social/youtube_pequeno.png?");

/***/ }),

/***/ "./src/assets/icons/social/zap pequeno.png":
/*!*************************************************!*\
  !*** ./src/assets/icons/social/zap pequeno.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/zap pequeno.png\";\n\n//# sourceURL=webpack://resolve-tudo/./src/assets/icons/social/zap_pequeno.png?");

/***/ }),

/***/ "./src/assets/images/image_copilot.png":
/*!*********************************************!*\
  !*** ./src/assets/images/image_copilot.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/image_copilot.png\";\n\n//# sourceURL=webpack://resolve-tudo/./src/assets/images/image_copilot.png?");

/***/ }),

/***/ "./src/assets/images/image_objective.png":
/*!***********************************************!*\
  !*** ./src/assets/images/image_objective.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/image_objective.png\";\n\n//# sourceURL=webpack://resolve-tudo/./src/assets/images/image_objective.png?");

/***/ }),

/***/ "./src/assets/images/image_tech.png":
/*!******************************************!*\
  !*** ./src/assets/images/image_tech.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/image_tech.png\";\n\n//# sourceURL=webpack://resolve-tudo/./src/assets/images/image_tech.png?");

/***/ }),

/***/ "./src/assets/logos/logo_Resolve_Tudo.png":
/*!************************************************!*\
  !*** ./src/assets/logos/logo_Resolve_Tudo.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/logo_Resolve_Tudo.png\";\n\n//# sourceURL=webpack://resolve-tudo/./src/assets/logos/logo_Resolve_Tudo.png?");

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ts/index.ts");
/******/ 	
/******/ })()
;