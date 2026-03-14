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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    margin: none;\n    padding: none;\n    box-sizing: border-box;\n}\n\n:root {\n    /* Backgrounds */\n    --bg-deep:     #0D1B2A;   /* Deep ocean — main page background */\n    --bg-surface:  #112240;   /* Slightly lighter navy — cards, sections */\n    --bg-warm:     #1A2E3B;   /* Warm-tinted navy — alternating sections */\n\n    /* Accent / Brand */\n    --accent-amber:  #E8A838;  /* Warm amber — prices, CTAs, highlights */\n    --accent-teal:   #2EC4B6;  /* Ocean teal — links, hover states */\n\n    /* Text */\n    --text-primary:  #F4EBD0;  /* Warm cream — headings, main text */\n    --text-muted:    #8DA9C4;  /* Steel blue-grey — subtext, hours */\n\n    /* Borders / Dividers */\n    --border:        #1E3A5F;  /* Subtle navy border */\n\n    --content-width: clamp(750px, 60%, 900px);\n}\n\nbody, #content {\n    background-color: var(--bg-deep);\n}\n\nnav {\n    display: flex;\n    justify-content: center;\n    gap: 4px;\n}\n\n/* Nav */\n.nav-button {\n    padding: 1rem 2rem;\n    border-radius: 10px 10px 0 0;\n    border: 1px solid var(--border);\n    border-bottom: none;\n    font-size: 0.85rem;\n    letter-spacing: 0.08rem;\n    text-transform: uppercase;\n    background-color: var(--bg-surface);\n    color: var(--text-muted);\n    font-weight: 600;\n    cursor: pointer;\n    transition: background-color 0.2s, color 0.2s;\n}\n\n.nav-button:hover {\n  background-color: var(--bg-warm);\n  color: var(--text-primary);\n}\n\n.nav-button.active {\n  background-color: var(--bg-deep);\n  color: var(--accent-amber);\n  border-color: var(--border);\n  border-bottom: 1px solid var(--bg-deep); /* \"merges\" into the page */\n}\n\n/* Content */\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border: 2px solid var(--dark-red);\n    background-color: var(--yellow);\n    color: #176571;\n    margin: auto;\n    width: var(--content-width);\n    box-shadow: 0 0 10px 5px rgba(128, 128, 128, 0.31);\n    padding: 1rem 1rem 2rem 1rem;\n}\n\n.title {\n    letter-spacing: 0.05em;\n    text-transform: uppercase;\n    color: var(--text-primary);\n    font-size: 2.5rem;\n}\n\n.description {\n    color: var(--text-muted);\n}\n\n/* Menu highlights */\n.highlight-title {\n    font-size: 1.7rem;\n    color: var(--text-primary);\n    letter-spacing: 0.05em;\n    text-transform: uppercase;\n}\n\n.highlight-item > h3 {\n    font-size: 1.5rem;\n    color: var(--accent-teal);\n}\n\n.highlight-item > p {\n    color: var(--accent-amber);\n    font-weight: 700;\n    font-size: 1.2rem;\n}\n\n.highlights-section {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: var(--bg-surface);\n    padding: 2rem 2.5rem 2.5rem;\n    border: 1px solid var(--border);\n    gap: 1.5rem;\n    margin-bottom: 2rem;\n}\n\n.highlights {\n    display: flex;\n    gap: 2rem;\n}\n\n.highlight-item {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: var(--bg-warm);\n    border: 1px solid var(--border);\n    transition: transform 0.2s, border-color 0.2s;\n}\n\n.highlight-item:hover {\n    transform: translateY(-4px);\n    border-color: var(--accent-teal);\n}\n\n.highlight-item > img {\n    height: 300px;\n    object-fit: cover;\n    object-position: center;\n}\n\n/* Hours */\n.hours {\n    background-color: var(--bg-surface);\n    padding: 1rem;\n    display: grid;\n    grid-template: repeat(8, 80px) / 1fr 1fr;\n    align-items: center;\n    column-gap: 0.5rem;\n    border: 1px solid var(--border);\n    width: clamp(500px, 50%, 600px);\n}\n\n.hours-title {\n    grid-column: 1 / 3;\n    justify-self: center;\n    font-size: 1.7rem;\n    letter-spacing: 0.05em;\n    color: var(--text-primary);\n}\n\n.hours-entry {\n    font-size: 1.2rem;\n    grid-column: 1 / 3;\n    display: grid;\n    grid-template-columns: subgrid;\n    padding: 1rem;\n}\n\n.hours-entry > span:first-child {\n    color: var(--text-primary);\n    font-weight: 600;\n    grid-column: 1 / 2;\n    justify-self: end;\n    padding-right: 10px;\n}\n\n.hours-entry > span:last-child {\n    color: var(--text-muted);\n    justify-self: start;\n}\n\n.hours-entry:hover {\n  background-color: var(--bg-warm);\n}\n\n/* About */\n.section-title {\n    letter-spacing: 0.05em;\n    text-transform: uppercase;\n    color: var(--text-primary);\n    font-size: 1.6rem;\n    font-weight: 700;\n}\n\n.about-section {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 1rem 2.5rem 2rem;\n}\n/* Menu */\n.menu-display {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 4rem;\n    background-color: var(--bg-surface);\n    padding: 2rem 1.5rem;\n    border: 1px solid var(--border);\n}\n\n.menu-subsection {\n    display: flex;\n    gap: 1rem;\n    flex-direction: column;\n    align-items: center;\n}\n\n.menu-subsection-header {\n    color: var(--text-primary);\n    font-size: 1.3rem;\n    font-weight: 600;\n\n}\n\n.menu-subsection-list {\n    display: grid;\n    justify-items: center;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 1rem 2rem;\n    width: calc(0.8 * var(--content-width));\n}\n\n.menu-entry {\n    border-bottom: 1px solid var(--border);\n    display: flex;\n    gap: 1rem;\n    align-items: center;\n    padding: 1rem;\n}\n\n.menu-entry > h4 {\n    font-size: 1rem;\n}\n\n.menu-entry > p {\n    color: var(--accent-amber);\n}\n\n.menu-entry > img {\n    flex-shrink: 0;\n    width: 100px;\n    height: 100px;\n    object-fit: cover;\n    object-position: center;\n    border: 1px solid var(--border);\n}\n\n.menu-entry:hover {\n  background-color: var(--bg-warm);\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/about.ts"
/*!**********************!*\
  !*** ./src/about.ts ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar homepage = document.getElementById(\"content\");\nfunction writeAboutPage() {\n    var storySection = document.createElement(\"div\");\n    storySection.classList.add(\"about-section\");\n    var storyTitle = document.createElement(\"h2\");\n    storyTitle.classList.add(\"section-title\");\n    storyTitle.textContent = \"Our Story\";\n    var storyBody = document.createElement(\"p\");\n    storyBody.classList.add(\"description\");\n    storyBody.textContent = \"Founded in 2026, Jimbo was fishing and caught a hammerhead. For some reason\\n    he decided to cook it... Now he runs a restaurant :).\";\n    storySection.append(storyTitle, storyBody);\n    homepage === null || homepage === void 0 ? void 0 : homepage.append(storySection);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (writeAboutPage);\n\n\n//# sourceURL=webpack://restaurant-page/./src/about.ts?\n}");

/***/ },

/***/ "./src/home.ts"
/*!*********************!*\
  !*** ./src/home.ts ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_shrimp_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/shrimp.png */ \"./src/img/shrimp.png\");\n/* harmony import */ var _img_lobster_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/lobster.png */ \"./src/img/lobster.png\");\n/* harmony import */ var _img_crab_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/crab.png */ \"./src/img/crab.png\");\n\n\n\nvar homepage = document.getElementById(\"content\");\nfunction writeHomePage() {\n    var title = document.createElement(\"h1\");\n    title.textContent = \"SEAFOOD PALACE\";\n    title.classList.add(\"title\");\n    var description = document.createElement(\"p\");\n    description.textContent = \"Yummy yummy shrimp, crab, lobster, shark, whale, beluga, lanternfish, squid, octopus, jellyfish\";\n    description.classList.add(\"description\");\n    var highlightsSection = document.createElement(\"div\");\n    highlightsSection.classList.add(\"highlights-section\");\n    var highlightTitle = document.createElement(\"h2\");\n    highlightTitle.classList.add(\"highlight-title\");\n    highlightTitle.textContent = \"Menu Highlights\";\n    var highlights = document.createElement(\"div\");\n    highlights.classList.add(\"highlights\");\n    var highlightItems = [\n        { img: _img_shrimp_png__WEBPACK_IMPORTED_MODULE_0__, name: \"Infinite shrimp\", price: 99.9 },\n        { img: _img_lobster_png__WEBPACK_IMPORTED_MODULE_1__, name: \"Juicy lobster\", price: 199.9 },\n        { img: _img_crab_png__WEBPACK_IMPORTED_MODULE_2__, name: \"JUMBO crabs\", price: 999.9 }\n    ];\n    for (var _i = 0, highlightItems_1 = highlightItems; _i < highlightItems_1.length; _i++) {\n        var item = highlightItems_1[_i];\n        var itemElem = document.createElement(\"div\");\n        itemElem.classList.add(\"highlight-item\");\n        var name_1 = document.createElement(\"h3\");\n        name_1.textContent = item.name;\n        var img = document.createElement(\"img\");\n        img.src = item.img;\n        img.width = 200;\n        var price = document.createElement(\"p\");\n        price.textContent = \"$\" + item.price;\n        itemElem.append(name_1, img, price);\n        highlights.append(itemElem);\n    }\n    highlightsSection.append(highlightTitle, highlights);\n    var hours = document.createElement(\"div\");\n    hours.classList.add(\"hours\");\n    var hoursTitle = document.createElement(\"h2\");\n    hoursTitle.textContent = \"Hours\";\n    hoursTitle.classList.add(\"hours-title\");\n    hours.append(hoursTitle);\n    var days = [\"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Sturday\", \"Sunday\"];\n    var times = [\"9:00am - 9:00pm\", \"9:00am - 9:00pm\", \"10:00am - 7:00pm\", \"9:00am - 9:00pm\", \"9:00am - 12:00am\", \"11:00am - 5:00pm\", \"Closed\"];\n    for (var i = 0; i < 7; i++) {\n        var hoursEntry = document.createElement(\"p\");\n        hoursEntry.classList.add(\"hours-entry\");\n        var day = document.createElement(\"span\");\n        day.textContent = days[i] + \": \";\n        var time = document.createElement(\"span\");\n        time.textContent = times[i];\n        hoursEntry.append(day, time);\n        hours.append(hoursEntry);\n    }\n    homepage === null || homepage === void 0 ? void 0 : homepage.append(title, description, highlightsSection, hours);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (writeHomePage);\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.ts?\n}");

/***/ },

/***/ "./src/index.ts"
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.ts\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.ts\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/menu.ts\");\n\n\n\n\nfunction clear() {\n    var content = document.querySelector(\"#content\");\n    if (content !== null) {\n        content.innerHTML = \"\";\n    }\n}\n(0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nvar navButtons = document.querySelectorAll(\".nav-button\");\nnavButtons.forEach(function (elem) {\n    elem.addEventListener(\"click\", function (e) {\n        navButtons.forEach(function (x) { return x.classList.remove(\"active\"); });\n        if (elem.classList.contains(\"home\")) {\n            clear();\n            (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n            elem.classList.add(\"active\");\n        }\n        else if (elem.classList.contains(\"about\")) {\n            clear();\n            (0,_about__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n            elem.classList.add(\"active\");\n        }\n        else {\n            clear();\n            (0,_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n            elem.classList.add(\"active\");\n        }\n    });\n});\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.ts?\n}");

/***/ },

/***/ "./src/menu.ts"
/*!*********************!*\
  !*** ./src/menu.ts ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_shrimp_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/shrimp.png */ \"./src/img/shrimp.png\");\n/* harmony import */ var _img_lobster_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/lobster.png */ \"./src/img/lobster.png\");\n/* harmony import */ var _img_crab_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/crab.png */ \"./src/img/crab.png\");\n/* harmony import */ var _img_salmon_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/salmon.jpg */ \"./src/img/salmon.jpg\");\n/* harmony import */ var _img_cheese_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/cheese.jpg */ \"./src/img/cheese.jpg\");\n/* harmony import */ var _img_baugette_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/baugette.jpg */ \"./src/img/baugette.jpg\");\n/* harmony import */ var _img_oyster_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/oyster.jpg */ \"./src/img/oyster.jpg\");\n/* harmony import */ var _img_lemoncake_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/lemoncake.jpg */ \"./src/img/lemoncake.jpg\");\n/* harmony import */ var _img_tart_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/tart.jpg */ \"./src/img/tart.jpg\");\n/* harmony import */ var _img_sorbet_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/sorbet.jpg */ \"./src/img/sorbet.jpg\");\n/* harmony import */ var _img_icetea_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/icetea.jpg */ \"./src/img/icetea.jpg\");\n/* harmony import */ var _img_lemonade_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/lemonade.jpg */ \"./src/img/lemonade.jpg\");\n\n\n\n\n\n\n\n\n\n\n\n\nvar homepage = document.getElementById(\"content\");\nfunction createMenuSubsection(title, items) {\n    var section = document.createElement(\"div\");\n    section.classList.add(\"menu-subsection\");\n    var sectionHeader = document.createElement(\"div\");\n    sectionHeader.textContent = title;\n    sectionHeader.classList.add(\"menu-subsection-header\");\n    var sectionList = document.createElement(\"div\");\n    sectionList.classList.add(\"menu-subsection-list\");\n    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {\n        var item = items_1[_i];\n        var menuEntry = document.createElement(\"div\");\n        menuEntry.classList.add(\"menu-entry\");\n        var img = document.createElement(\"img\");\n        img.src = item.img;\n        var name_1 = document.createElement(\"h4\");\n        name_1.textContent = item.name;\n        var price = document.createElement(\"p\");\n        price.textContent = \"$\" + item.price;\n        menuEntry.append(img, name_1, price);\n        sectionList.append(menuEntry);\n    }\n    section.append(sectionHeader, sectionList);\n    return section;\n}\nfunction writeMenuPage() {\n    var menuTitle = document.createElement(\"h2\");\n    menuTitle.classList.add(\"section-title\");\n    menuTitle.textContent = \"Menu\";\n    var menuDisplay = document.createElement(\"div\");\n    menuDisplay.classList.add(\"menu-display\");\n    var appetizerItems = [\n        { img: _img_shrimp_png__WEBPACK_IMPORTED_MODULE_0__, name: \"Infinite shrimp\", price: 99.9 },\n        { img: _img_cheese_jpg__WEBPACK_IMPORTED_MODULE_4__, name: \"Cheesy cheese\", price: 3.91 },\n        { img: _img_oyster_jpg__WEBPACK_IMPORTED_MODULE_6__, name: \"Clammy oyster\", price: 6.7 },\n        { img: _img_baugette_jpg__WEBPACK_IMPORTED_MODULE_5__, name: \"Le baugette\", price: 8.88 },\n    ];\n    var entreeItems = [\n        { img: _img_lobster_png__WEBPACK_IMPORTED_MODULE_1__, name: \"Juicy lobster\", price: 199.9 },\n        { img: _img_crab_png__WEBPACK_IMPORTED_MODULE_2__, name: \"JUMBO crabs\", price: 999.9 },\n        { img: _img_salmon_jpg__WEBPACK_IMPORTED_MODULE_3__, name: \"Buttery Salmon\", price: 59.67 }\n    ];\n    var dessertItems = [\n        { img: _img_lemoncake_jpg__WEBPACK_IMPORTED_MODULE_7__, name: \"Soft lemon cake\", price: 15.87 },\n        { img: _img_tart_jpg__WEBPACK_IMPORTED_MODULE_8__, name: \"Tarty fruit tart\", price: 9.12 },\n        { img: _img_sorbet_jpg__WEBPACK_IMPORTED_MODULE_9__, name: \"Creamy cherry sorbet\", price: 12.22 }\n    ];\n    var drinkItems = [\n        { img: _img_icetea_jpg__WEBPACK_IMPORTED_MODULE_10__, name: \"Sweet ice tea\", price: 5.98 },\n        { img: _img_lemonade_jpg__WEBPACK_IMPORTED_MODULE_11__, name: \"Classic lemonade\", price: 3.33 },\n    ];\n    var appetizers = createMenuSubsection(\"Appetizers\", appetizerItems);\n    var entrees = createMenuSubsection(\"Entrees\", entreeItems);\n    var desserts = createMenuSubsection(\"Desserts\", dessertItems);\n    var drinks = createMenuSubsection(\"Drinks\", drinkItems);\n    menuDisplay.append(appetizers, entrees, desserts, drinks);\n    homepage === null || homepage === void 0 ? void 0 : homepage.append(menuTitle, menuDisplay);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (writeMenuPage);\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.ts?\n}");

/***/ },

/***/ "./src/img/baugette.jpg"
/*!******************************!*\
  !*** ./src/img/baugette.jpg ***!
  \******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"1a26d00998ea3426da46.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/baugette.jpg?\n}");

/***/ },

/***/ "./src/img/cheese.jpg"
/*!****************************!*\
  !*** ./src/img/cheese.jpg ***!
  \****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"30d4c332ec28a40f9160.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/cheese.jpg?\n}");

/***/ },

/***/ "./src/img/crab.png"
/*!**************************!*\
  !*** ./src/img/crab.png ***!
  \**************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"c3a7dec80d937c23f8a8.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/crab.png?\n}");

/***/ },

/***/ "./src/img/icetea.jpg"
/*!****************************!*\
  !*** ./src/img/icetea.jpg ***!
  \****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"cd984e9042cbe67a04d9.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/icetea.jpg?\n}");

/***/ },

/***/ "./src/img/lemonade.jpg"
/*!******************************!*\
  !*** ./src/img/lemonade.jpg ***!
  \******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"1e3f53fb4ecee3615638.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/lemonade.jpg?\n}");

/***/ },

/***/ "./src/img/lemoncake.jpg"
/*!*******************************!*\
  !*** ./src/img/lemoncake.jpg ***!
  \*******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"32cf7f561c8737d0b0bc.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/lemoncake.jpg?\n}");

/***/ },

/***/ "./src/img/lobster.png"
/*!*****************************!*\
  !*** ./src/img/lobster.png ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"6db7d12618dce0ff280f.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/lobster.png?\n}");

/***/ },

/***/ "./src/img/oyster.jpg"
/*!****************************!*\
  !*** ./src/img/oyster.jpg ***!
  \****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"7ff4ecd6ec64f4e92b52.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/oyster.jpg?\n}");

/***/ },

/***/ "./src/img/salmon.jpg"
/*!****************************!*\
  !*** ./src/img/salmon.jpg ***!
  \****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"f98c73a97ef840d98d54.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/salmon.jpg?\n}");

/***/ },

/***/ "./src/img/shrimp.png"
/*!****************************!*\
  !*** ./src/img/shrimp.png ***!
  \****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"7e224099a2adc75b08eb.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/shrimp.png?\n}");

/***/ },

/***/ "./src/img/sorbet.jpg"
/*!****************************!*\
  !*** ./src/img/sorbet.jpg ***!
  \****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"f309d7db895e0dce97d8.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/sorbet.jpg?\n}");

/***/ },

/***/ "./src/img/tart.jpg"
/*!**************************!*\
  !*** ./src/img/tart.jpg ***!
  \**************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"47a4e8af1dfa8e989de1.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/tart.jpg?\n}");

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;