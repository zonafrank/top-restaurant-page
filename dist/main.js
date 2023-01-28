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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --navbar-bg-primary: #3e2323;\\n  --navbar-bg-secondary: #784646;\\n  ---navbar-text-color: #fff;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  margin: 0;\\n}\\n\\nbody {\\n  font-family: Arial, Helvetica, sans-serif;\\n  margin: 0;\\n  color: #fff;\\n  text-align: center;\\n}\\n\\nh1 {\\n  padding: 1rem;\\n}\\n\\nh2 {\\n  padding: 0.8rem;\\n}\\n\\n#navbar {\\n  height: 3rem;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  padding: 0 1rem;\\n  background-color: var(--navbar-bg-primary);\\n}\\n\\n#logo {\\n  height: 80%;\\n}\\n\\n#logo img {\\n  height: 100%;\\n}\\n\\n#nav-links {\\n  height: 100%;\\n}\\n\\n#navbar .nav-link {\\n  margin-left: 1rem;\\n  color: var(---navbar-text-color);\\n  cursor: pointer;\\n  text-transform: uppercase;\\n  display: inline-block;\\n  height: 100%;\\n  line-height: 3rem;\\n}\\n\\n#navbar .nav-link.active {\\n  background-color: var(--navbar-bg-secondary);\\n}\\n\\n#main {\\n  min-height: calc(100vh - 3rem);\\n  background-image: url(\\\"https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Vwd2s2MTcxMzA4Ni13aWtpbWVkaWEtaW1hZ2Utam9iNTcyLTEuanBn.jpg\\\");\\n  background-repeat: no-repeat;\\n  background-position: center;\\n  background-size: cover;\\n  padding-left: 10rem;\\n  padding-right: 10rem;\\n}\\n\\n.form-input {\\n  width: 100%;\\n  padding: 0.6rem;\\n  margin: 0.5rem;\\n}\\n\\n.form-btn {\\n  width: 50%;\\n  padding: 0.5rem;\\n}\\n\\n#footer {\\n  background-color: var(--navbar-bg-primary);\\n  padding: 1rem;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/assets/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/style.css":
/*!******************************!*\
  !*** ./src/assets/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/assets/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHeaderSection() {\n  const header = document.createElement(\"header\");\n  const h1 = document.createElement(\"h1\");\n  h1.textContent = \"About our coffee shop\";\n  header.appendChild(h1);\n  return header;\n}\n\nfunction createAboutSection() {\n  const menuSection = document.createElement(\"section\");\n  menuSection.setAttribute(\"id\", \"about-us\");\n  const h2 = document.createElement(\"h2\");\n  h2.textContent = \"How we started\";\n  menuSection.appendChild(h2);\n  const p = document.createElement(\"p\");\n  p.textContent =\n    \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse unde quasi molestiae dolore aliquid temporibus, animi maxime hic ipsa at repellendus nam perspiciatis aperiam deserunt maiores tempore? Minima, minus exercitationem!\";\n  menuSection.appendChild(p);\n  return menuSection;\n}\n\nfunction createAboutMainSection() {\n  const fragment = document.createDocumentFragment();\n  const header = createHeaderSection();\n  fragment.appendChild(header);\n  const section = createAboutSection();\n  fragment.appendChild(section);\n  return fragment;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAboutMainSection);\n\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHeaderSection() {\n  const header = document.createElement(\"header\");\n  const h1 = document.createElement(\"h1\");\n  h1.textContent = \"About our coffee shop\";\n  header.appendChild(h1);\n  return header;\n}\n\nfunction createContactForm() {\n  const form = document.createElement(\"form\");\n  const nameInput = document.createElement(\"input\");\n  nameInput.classList.add(\"form-input\");\n  nameInput.placeholder = \"Enter your email here...\";\n  form.appendChild(nameInput);\n  const emailInput = document.createElement(\"input\");\n  emailInput.classList.add(\"form-input\");\n  emailInput.placeholder = \"Enter your email here...\";\n  form.appendChild(emailInput);\n  const commentInput = document.createElement(\"textarea\");\n  commentInput.classList.add(\"form-input\");\n  commentInput.placeholder = \"Enter your comment here please\";\n  commentInput.rows = \"5\";\n  form.appendChild(commentInput);\n  const submitButton = document.createElement(\"button\");\n  submitButton.classList.add(\"form-btn\");\n  submitButton.textContent = \"Submit\";\n  form.appendChild(submitButton);\n  return form;\n}\n\nfunction createContactSection() {\n  const menuSection = document.createElement(\"section\");\n  menuSection.setAttribute(\"id\", \"contact-us\");\n  const h2 = document.createElement(\"h2\");\n  h2.textContent = \"Get in touch\";\n  menuSection.appendChild(h2);\n  const contactForm = createContactForm();\n  menuSection.appendChild(contactForm);\n  return menuSection;\n}\n\nfunction createContactMainSection() {\n  const fragment = document.createDocumentFragment();\n  const header = createHeaderSection();\n  fragment.appendChild(header);\n  const section = createContactSection();\n  fragment.appendChild(section);\n  return fragment;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactMainSection);\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createFooter() {\n  const footer = document.createElement(\"footer\");\n  footer.setAttribute(\"id\", \"footer\");\n  footer.innerHTML = \"&copy;\" + \"Eche's coffe shop \" + new Date().getFullYear();\n  return footer;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFooter);\n\n\n//# sourceURL=webpack://restaurant-page/./src/footer.js?");

/***/ }),

/***/ "./src/generatePageContent.js":
/*!************************************!*\
  !*** ./src/generatePageContent.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mainSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainSection */ \"./src/mainSection.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nfunction generatePageMainContent(page) {\n  const main = document.createElement(\"main\");\n  main.setAttribute(\"id\", \"main\");\n  let section;\n\n  if (page === \"home\") {\n    section = (0,_mainSection__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  } else if (page === \"about\") {\n    section = (0,_about__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  } else if (page === \"contact\") {\n    section = (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  } else {\n    section = (0,_mainSection__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  }\n\n  main.appendChild(section);\n  return main;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generatePageMainContent);\n\n\n//# sourceURL=webpack://restaurant-page/./src/generatePageContent.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/style.css */ \"./src/assets/style.css\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n/* harmony import */ var _generatePageContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generatePageContent */ \"./src/generatePageContent.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n\n\n\n\n\nfunction updatePage() {\n  const container = document.getElementById(\"content\");\n  // alert(\"Hello\");\n  // create and append navigation bar\n  const navBar = (0,_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  container.appendChild(navBar);\n  // create and append main section\n  const mainSection = (0,_generatePageContent__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  console.log(mainSection);\n  container.appendChild(mainSection);\n  // create and append footer\n  const footer = (0,_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  container.appendChild(footer);\n  container.app;\n}\n\nwindow.onload = updatePage;\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/mainSection.js":
/*!****************************!*\
  !*** ./src/mainSection.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHeaderSection() {\n  const header = document.createElement(\"header\");\n  const h1 = document.createElement(\"h1\");\n  h1.textContent = \"Eche's coffee shop\";\n  header.appendChild(h1);\n  const paragraph = document.createElement(\"p\");\n  paragraph.textContent =\n    \"We make the best coffee in the world. Come on in to confirm.\";\n  header.appendChild(paragraph);\n  return header;\n}\n\nfunction createMenuItem(item) {\n  const menuItem = document.createElement(\"div\");\n  menuItem.classList.add(\"menu-item\");\n  const titleElem = document.createElement(\"span\");\n  titleElem.classList.add(\"item-title\");\n  titleElem.textContent = item.title;\n  menuItem.appendChild(titleElem);\n  menuItem.insertAdjacentText(\"beforeend\", \" - \");\n  const priceElem = document.createElement(\"span\");\n  priceElem.textContent = item.price;\n  priceElem.classList.add(\"item-price\");\n  menuItem.appendChild(priceElem);\n  return menuItem;\n}\n\nfunction createMenuSection() {\n  const menuItems = [\n    { title: \"Capuccino\", price: \"$1.50\" },\n    { title: \"Latte\", price: \"$1.50\" },\n    { title: \"Expresso\", price: \"$1.00\" },\n    { title: \"Macciato\", price: \"$1.20\" }\n  ];\n\n  const menuSection = document.createElement(\"section\");\n  menuSection.setAttribute(\"id\", \"menu\");\n  const h2 = document.createElement(\"h2\");\n  h2.textContent = \"Our menu\";\n  menuSection.appendChild(h2);\n  for (let item of menuItems) {\n    const menuItem = createMenuItem(item);\n    menuSection.appendChild(menuItem);\n  }\n\n  return menuSection;\n}\n\nfunction createOpeartingHourSection() {\n  const operatingHours = [\n    { day: \"Sunday\", workingHours: \"8am - 8pm\" },\n    { day: \"Monday\", workingHours: \"6am - 6pm\" },\n    { day: \"Tuesday\", workingHours: \"6am - 6pm\" },\n    { day: \"Wednesday\", workingHours: \"6am - 6pm\" },\n    { day: \"Thursday\", workingHours: \"6am - 6pm\" },\n    { day: \"Friday\", workingHours: \"6am - 6pm\" },\n    { day: \"Saturday\", workingHours: \"8am - 10pm\" }\n  ];\n  const operatingHourSection = document.createElement(\"section\");\n  operatingHourSection.setAttribute(\"id\", \"operating-hours\");\n  const h2 = document.createElement(\"h2\");\n  h2.textContent = \"Our operating hours\";\n  operatingHourSection.appendChild(h2);\n\n  for (let item of operatingHours) {\n    const workDayElem = document.createElement(\"div\");\n    const dayElem = document.createElement(\"span\");\n    dayElem.classList.add(\"day-of-week\");\n    dayElem.textContent = item.day;\n    const timeRangeElem = document.createElement(\"span\");\n    timeRangeElem.classList.add(\"time-span\");\n    timeRangeElem.textContent = item.workingHours;\n    workDayElem.appendChild(dayElem);\n    workDayElem.insertAdjacentText(\"beforeend\", \"-\");\n    workDayElem.appendChild(timeRangeElem);\n    operatingHourSection.appendChild(workDayElem);\n  }\n\n  return operatingHourSection;\n}\n\nfunction createMainSection() {\n  const fragment = document.createDocumentFragment();\n  // create and append header\n  const header = createHeaderSection();\n  fragment.appendChild(header);\n  // create and append menu section\n  const menuSection = createMenuSection();\n  fragment.appendChild(menuSection);\n  // create and append operating hour section\n  const operatingHourSection = createOpeartingHourSection();\n  fragment.appendChild(operatingHourSection);\n  return fragment;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMainSection);\n\n\n//# sourceURL=webpack://restaurant-page/./src/mainSection.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_cup_of_coffee_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/cup-of-coffee-svgrepo-com.svg */ \"./src/assets/cup-of-coffee-svgrepo-com.svg\");\n/* harmony import */ var _generatePageContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generatePageContent */ \"./src/generatePageContent.js\");\n\n\n\nfunction createNavLogo() {\n  const logoContainer = document.createElement(\"span\");\n  logoContainer.setAttribute(\"id\", \"logo\");\n  const logo = document.createElement(\"img\");\n  logo.setAttribute(\"src\", _assets_cup_of_coffee_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_0__);\n  logoContainer.appendChild(logo);\n  return logoContainer;\n}\n\nfunction createNavLink(title) {\n  const navLink = document.createElement(\"span\");\n  navLink.classList.add(\"nav-link\");\n  navLink.setAttribute(\"title\", title);\n  navLink.textContent = title;\n  return navLink;\n}\n\nfunction showPage(pageName) {\n  const main = document.getElementById(\"main\");\n  console.log(pageName);\n  const newMain = (0,_generatePageContent__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(pageName);\n  console.log(newMain);\n  main.replaceWith(newMain);\n}\n\nfunction makeLinkActive(title) {\n  const links = document.querySelectorAll(\".nav-link\");\n  for (let link of links) {\n    if (link.title !== title) {\n      link.classList.remove(\"active\");\n    } else {\n      link.classList.add(\"active\");\n    }\n  }\n}\n\nfunction handleNavLinkClick({ target }) {\n  const title = target.title;\n  showPage(title);\n  makeLinkActive(title);\n}\n\nfunction createNavLinks() {\n  const navLinkNames = [\"home\", \"about\", \"contact\"];\n  const linksContainer = document.createElement(\"div\");\n  linksContainer.setAttribute(\"id\", \"nav-links\");\n  for (let title of navLinkNames) {\n    const navLink = createNavLink(title);\n    navLink.addEventListener(\"click\", handleNavLinkClick);\n    linksContainer.appendChild(navLink);\n  }\n  return linksContainer;\n}\n\nfunction createNav() {\n  const navbar = document.createElement(\"nav\");\n  navbar.setAttribute(\"id\", \"navbar\");\n  const logoContainer = createNavLogo();\n  navbar.appendChild(logoContainer);\n  const navLinksContainer = createNavLinks();\n  navbar.append(navLinksContainer);\n  return navbar;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNav);\n\n\n//# sourceURL=webpack://restaurant-page/./src/navbar.js?");

/***/ }),

/***/ "./src/assets/cup-of-coffee-svgrepo-com.svg":
/*!**************************************************!*\
  !*** ./src/assets/cup-of-coffee-svgrepo-com.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"44a629034fc360abe241.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/cup-of-coffee-svgrepo-com.svg?");

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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;