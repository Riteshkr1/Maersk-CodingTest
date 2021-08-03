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

/***/ "./src/ShuffleSort/ShuffleSort.js":
/*!****************************************!*\
  !*** ./src/ShuffleSort/ShuffleSort.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar ShuffleSort = /*#__PURE__*/function () {\n  function ShuffleSort(rootElement) {\n    var _this = this;\n\n    _classCallCheck(this, ShuffleSort);\n\n    _defineProperty(this, \"suffleSortArray\", [1, 2, 3, 4, 5, 6, 7, 8, 9]);\n\n    _defineProperty(this, \"shuffleHandler\", function () {\n      var length = _this.suffleSortArray.length;\n      var randomGeneratedIndex = 0;\n      var temp = 0;\n\n      while (length !== 0) {\n        randomGeneratedIndex = Math.floor(Math.random() * length);\n        length--; //swap\n\n        temp = _this.suffleSortArray[length];\n        _this.suffleSortArray[length] = _this.suffleSortArray[randomGeneratedIndex];\n        _this.suffleSortArray[randomGeneratedIndex] = temp;\n      }\n\n      _this.render();\n    });\n\n    _defineProperty(this, \"sortHandler\", function () {\n      _this.suffleSortArray.sort(function (a, b) {\n        return a - b;\n      });\n\n      _this.render();\n    });\n\n    this.rootElement = rootElement;\n  }\n\n  _createClass(ShuffleSort, [{\n    key: \"render\",\n    value: function render() {\n      var length = this.suffleSortArray.length;\n      var renderHtml = '';\n\n      for (var i = 0; i < length; i++) {\n        renderHtml = renderHtml + \"<div class=box\".concat(i + 1, \"> \").concat(this.suffleSortArray[i], \" </div>\");\n      }\n\n      this.rootElement.innerHTML = renderHtml;\n      document.getElementById(\"suffleBtn\").addEventListener(\"click\", this.shuffleHandler);\n      document.getElementById(\"sortBtn\").addEventListener(\"click\", this.sortHandler);\n    }\n  }]);\n\n  return ShuffleSort;\n}();\n\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShuffleSort);\n\n//# sourceURL=webpack://Maersk-Test/./src/ShuffleSort/ShuffleSort.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ShuffleSort_ShuffleSort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShuffleSort/ShuffleSort */ \"./src/ShuffleSort/ShuffleSort.js\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n\n\nvar rootElement = document.getElementById('dynamicContainer');\nvar conv = new _ShuffleSort_ShuffleSort__WEBPACK_IMPORTED_MODULE_0__.default(rootElement);\nconv.render();\n\n//# sourceURL=webpack://Maersk-Test/./src/index.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Maersk-Test/./src/css/style.css?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;