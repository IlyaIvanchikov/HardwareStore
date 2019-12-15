/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/src/components/server-dev.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/src/components/server-dev.js":
/*!******************************************!*\
  !*** ./app/src/components/server-dev.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join */ \"core-js/modules/es.array.join\");\n/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _webpack_dev_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../webpack.dev.config */ \"./webpack.dev.config.js\");\n/* harmony import */ var _webpack_dev_config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_webpack_dev_config__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_2___default()();\nvar DIST_DIR = __dirname;\nvar HTML_FILE = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(DIST_DIR, 'page', 'index.html');\nvar compiler = webpack__WEBPACK_IMPORTED_MODULE_3___default()(_webpack_dev_config__WEBPACK_IMPORTED_MODULE_6___default.a);\napp.use(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_4___default()(compiler, {\n  publicPath: _webpack_dev_config__WEBPACK_IMPORTED_MODULE_6___default.a.output.publicPath\n}));\napp.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_5___default()(compiler));\napp.get('/', function (req, res, next) {\n  compiler.outputFileSystem.readFile(HTML_FILE, function (err, result) {\n    if (err) {\n      next(err);\n    }\n\n    res.set('content-type', 'text/html');\n    res.send(result);\n    res.end();\n  });\n});\nvar PORT = process.env.PORT || 8080;\napp.listen(PORT, function () {\n  console.log(\"App listening to \".concat(PORT, \"....\"));\n  console.log('Press Ctrl+C to quit.');\n});\n\n//# sourceURL=webpack:///./app/src/components/server-dev.js?");

/***/ }),

/***/ "./webpack.dev.config.js":
/*!*******************************!*\
  !*** ./webpack.dev.config.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! core-js/modules/es.symbol */ \"core-js/modules/es.symbol\");\n\n__webpack_require__(/*! core-js/modules/es.symbol.description */ \"core-js/modules/es.symbol.description\");\n\n__webpack_require__(/*! core-js/modules/es.symbol.iterator */ \"core-js/modules/es.symbol.iterator\");\n\n__webpack_require__(/*! core-js/modules/es.array.concat */ \"core-js/modules/es.array.concat\");\n\n__webpack_require__(/*! core-js/modules/es.array.filter */ \"core-js/modules/es.array.filter\");\n\n__webpack_require__(/*! core-js/modules/es.array.from */ \"core-js/modules/es.array.from\");\n\n__webpack_require__(/*! core-js/modules/es.array.is-array */ \"core-js/modules/es.array.is-array\");\n\n__webpack_require__(/*! core-js/modules/es.array.iterator */ \"core-js/modules/es.array.iterator\");\n\n__webpack_require__(/*! core-js/modules/es.array.join */ \"core-js/modules/es.array.join\");\n\n__webpack_require__(/*! core-js/modules/es.array.map */ \"core-js/modules/es.array.map\");\n\n__webpack_require__(/*! core-js/modules/es.date.to-string */ \"core-js/modules/es.date.to-string\");\n\n__webpack_require__(/*! core-js/modules/es.object.to-string */ \"core-js/modules/es.object.to-string\");\n\n__webpack_require__(/*! core-js/modules/es.regexp.to-string */ \"core-js/modules/es.regexp.to-string\");\n\n__webpack_require__(/*! core-js/modules/es.string.ends-with */ \"core-js/modules/es.string.ends-with\");\n\n__webpack_require__(/*! core-js/modules/es.string.iterator */ \"core-js/modules/es.string.iterator\");\n\n__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ \"core-js/modules/web.dom-collections.iterator\");\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar HtmlWebPackPlugin = __webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\");\n\nvar fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar PATHS = {\n  page: path.join(__dirname, './app/src/page')\n};\nvar PAGES = fs.readdirSync(PATHS.page).filter(function (fileName) {\n  return fileName.endsWith('.html');\n});\nvar config = {\n  mode: 'development',\n  entry: {\n    index: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './app/src/index.js']\n  },\n  output: {\n    path: path.join(__dirname, 'dist'),\n    publicPath: '/',\n    filename: '[name].js'\n  },\n  target: 'web',\n  devtool: 'cheap-module-eval-source-map',\n  module: {\n    rules: [{\n      test: /\\.js$/,\n      use: ['babel-loader'\n      /* , 'eslint-loader' */\n      ],\n      exclude: [/node_modules/]\n    }, {\n      test: /\\.html$/,\n      use: [{\n        loader: 'html-loader',\n        options: {\n          minimize: false\n        }\n      }]\n    }, {\n      test: /\\.css$/,\n      use: ['style-loader', {\n        loader: 'css-loader',\n        options: {\n          sourceMap: true\n        }\n      }, {\n        loader: 'postcss-loader',\n        options: {\n          sourceMap: true,\n          config: {\n            path: './postcss.config.js'\n          }\n        }\n      }]\n    }, {\n      test: /\\.(jpe?g|png|svg|gif)$/,\n      use: [{\n        loader: 'file-loader',\n        options: {\n          outputPath: 'img',\n          name: '[name].[ext]'\n        }\n      }]\n    }, {\n      test: /\\.(woff|woff2|ttf|otf|eot)$/,\n      use: [{\n        loader: 'file-loader',\n        options: {\n          outputPath: 'fonts'\n        }\n      }]\n    }]\n  },\n  plugins: [].concat(_toConsumableArray(PAGES.map(function (page) {\n    return new HtmlWebPackPlugin({\n      template: \"\".concat(PATHS.page, \"/\").concat(page),\n      filename: \"./page/\".concat(page),\n      excludeChunks: ['server']\n    });\n  })), [// new HtmlWebPackPlugin({\n  //   template: \"./app/src/page/index.html\",\n  //   filename: \"./index.html\",\n  //   excludeChunks: [ 'server' ]\n  // }),\n  new webpack.ProvidePlugin({\n    $: 'jquery',\n    jQuery: 'jquery',\n    'window.jQuery': 'jquery'\n  }), new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()])\n};\nmodule.exports = config;\n\n//# sourceURL=webpack:///./webpack.dev.config.js?");

/***/ }),

/***/ "core-js/modules/es.array.concat":
/*!**************************************************!*\
  !*** external "core-js/modules/es.array.concat" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.array.concat\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.array.concat%22?");

/***/ }),

/***/ "core-js/modules/es.array.filter":
/*!**************************************************!*\
  !*** external "core-js/modules/es.array.filter" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.array.filter\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.array.filter%22?");

/***/ }),

/***/ "core-js/modules/es.array.from":
/*!************************************************!*\
  !*** external "core-js/modules/es.array.from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.array.from\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.array.from%22?");

/***/ }),

/***/ "core-js/modules/es.array.is-array":
/*!****************************************************!*\
  !*** external "core-js/modules/es.array.is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.array.is-array\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.array.is-array%22?");

/***/ }),

/***/ "core-js/modules/es.array.iterator":
/*!****************************************************!*\
  !*** external "core-js/modules/es.array.iterator" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.array.iterator\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.array.iterator%22?");

/***/ }),

/***/ "core-js/modules/es.array.join":
/*!************************************************!*\
  !*** external "core-js/modules/es.array.join" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.array.join\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.array.join%22?");

/***/ }),

/***/ "core-js/modules/es.array.map":
/*!***********************************************!*\
  !*** external "core-js/modules/es.array.map" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.array.map\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.array.map%22?");

/***/ }),

/***/ "core-js/modules/es.date.to-string":
/*!****************************************************!*\
  !*** external "core-js/modules/es.date.to-string" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.date.to-string\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.date.to-string%22?");

/***/ }),

/***/ "core-js/modules/es.object.to-string":
/*!******************************************************!*\
  !*** external "core-js/modules/es.object.to-string" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.object.to-string\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.object.to-string%22?");

/***/ }),

/***/ "core-js/modules/es.regexp.to-string":
/*!******************************************************!*\
  !*** external "core-js/modules/es.regexp.to-string" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.regexp.to-string\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.regexp.to-string%22?");

/***/ }),

/***/ "core-js/modules/es.string.ends-with":
/*!******************************************************!*\
  !*** external "core-js/modules/es.string.ends-with" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.string.ends-with\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.string.ends-with%22?");

/***/ }),

/***/ "core-js/modules/es.string.iterator":
/*!*****************************************************!*\
  !*** external "core-js/modules/es.string.iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.string.iterator\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.string.iterator%22?");

/***/ }),

/***/ "core-js/modules/es.symbol":
/*!********************************************!*\
  !*** external "core-js/modules/es.symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.symbol\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.symbol%22?");

/***/ }),

/***/ "core-js/modules/es.symbol.description":
/*!********************************************************!*\
  !*** external "core-js/modules/es.symbol.description" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.symbol.description\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.symbol.description%22?");

/***/ }),

/***/ "core-js/modules/es.symbol.iterator":
/*!*****************************************************!*\
  !*** external "core-js/modules/es.symbol.iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.symbol.iterator\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.symbol.iterator%22?");

/***/ }),

/***/ "core-js/modules/web.dom-collections.iterator":
/*!***************************************************************!*\
  !*** external "core-js/modules/web.dom-collections.iterator" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/web.dom-collections.iterator\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/web.dom-collections.iterator%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"html-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22html-webpack-plugin%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });