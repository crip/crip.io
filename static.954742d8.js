(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "https://crip.io/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@rebass/grid");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("htmr");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(28);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  z-index: 5;\n\n  h1 {\n    letter-spacing: 1px;\n    font-size: 3.5em;\n    margin-bottom: 2rem;\n    color: white;\n  }\n\n  p {\n    font-size: 1.2em;\n    line-height: 1.56;\n    margin-bottom: 2em;\n  }\n\n  @media (max-width: 32em) {\n    h1 {\n      font-size: 2em;\n    }\n\n    p {\n      font-size: 1.1em;\n    }\n  }\n'], ['\n  position: relative;\n  z-index: 5;\n\n  h1 {\n    letter-spacing: 1px;\n    font-size: 3.5em;\n    margin-bottom: 2rem;\n    color: white;\n  }\n\n  p {\n    font-size: 1.2em;\n    line-height: 1.56;\n    margin-bottom: 2em;\n  }\n\n  @media (max-width: 32em) {\n    h1 {\n      font-size: 2em;\n    }\n\n    p {\n      font-size: 1.1em;\n    }\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  @media (max-width: 32em) {\n    display: none;\n  }\n\n  img {\n    width: 100%;\n    max-width: 350px;\n    height: auto;\n  }\n'], ['\n  @media (max-width: 32em) {\n    display: none;\n  }\n\n  img {\n    width: 100%;\n    max-width: 350px;\n    height: auto;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  background-image: ', ';\n  text-align: ', ';\n  padding: 6em 0;\n\n  @media (max-width: 32em) {\n    padding: 2em 0;\n  }\n'], ['\n  background-image: ', ';\n  text-align: ', ';\n  padding: 6em 0;\n\n  @media (max-width: 32em) {\n    padding: 2em 0;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  max-width: var(--main-width);\n  margin: 0 auto;\n  text-align: ', ';\n\n  @media (max-width: 32em) {\n    flex-direction: column;\n  }\n'], ['\n  max-width: var(--main-width);\n  margin: 0 auto;\n  text-align: ', ';\n\n  @media (max-width: 32em) {\n    flex-direction: column;\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  max-width: ', ';\n  margin: 0 auto;\n  line-height: 1.68;\n  font-size: 1.2em;\n  margin-bottom: 1em;\n  color: #444;\n\n  @media (max-width: 32em) {\n    font-size: 1em;\n  }\n'], ['\n  max-width: ', ';\n  margin: 0 auto;\n  line-height: 1.68;\n  font-size: 1.2em;\n  margin-bottom: 1em;\n  color: #444;\n\n  @media (max-width: 32em) {\n    font-size: 1em;\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  max-width: 100%;\n  height: auto;\n  display: block;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n'], ['\n  max-width: 100%;\n  height: auto;\n  display: block;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  clip-path: polygon(-15% 100%, 100% 85%, 100% 0, 0 15%);\n  overflow: hidden;\n  position: relative;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n\n  &:last-of-type {\n    margin-top: -36%;\n    left: 34%;\n    position: relative;\n    overflow: hidden;\n    width: auto;\n  }\n\n  @media (max-width: 32em) {\n    width: 90%;\n    &:last-of-type {\n      width: 90%;\n      margin-top: -50%;\n      left: 10%;\n    }\n  }\n'], ['\n  clip-path: polygon(-15% 100%, 100% 85%, 100% 0, 0 15%);\n  overflow: hidden;\n  position: relative;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n\n  &:last-of-type {\n    margin-top: -36%;\n    left: 34%;\n    position: relative;\n    overflow: hidden;\n    width: auto;\n  }\n\n  @media (max-width: 32em) {\n    width: 90%;\n    &:last-of-type {\n      width: 90%;\n      margin-top: -50%;\n      left: 10%;\n    }\n  }\n']),
    _templateObject8 = _taggedTemplateLiteral([''], ['']),
    _templateObject9 = _taggedTemplateLiteral(['\n  background-color: var(\n    ', '\n  );\n  color: var(', ');\n  clip-path: polygon(0 100%, 100% 90%, 100% 0, 0 10%);\n  position: relative;\n\n  h2 {\n    color: inherit;\n    margin: 0;\n    font-size: 3em;\n    font-weight: bold;\n  }\n\n  .subtitle {\n    color: var(', ');\n    margin: 0;\n    font-size: 1.7em;\n    font-weight: 400;\n    margin-bottom: 1.5em;\n  }\n\n  ', ' {\n    color: var(', ');\n  }\n\n  @media (max-width: 32em) {\n    clip-path: polygon(0 100%, 100% 95%, 100% 0, 0 5%);\n\n    h2 {\n      font-size: 2em;\n    }\n\n    .subtitle {\n      font-size: 1.2em;\n    }\n  }\n'], ['\n  background-color: var(\n    ', '\n  );\n  color: var(', ');\n  clip-path: polygon(0 100%, 100% 90%, 100% 0, 0 10%);\n  position: relative;\n\n  h2 {\n    color: inherit;\n    margin: 0;\n    font-size: 3em;\n    font-weight: bold;\n  }\n\n  .subtitle {\n    color: var(', ');\n    margin: 0;\n    font-size: 1.7em;\n    font-weight: 400;\n    margin-bottom: 1.5em;\n  }\n\n  ', ' {\n    color: var(', ');\n  }\n\n  @media (max-width: 32em) {\n    clip-path: polygon(0 100%, 100% 95%, 100% 0, 0 5%);\n\n    h2 {\n      font-size: 2em;\n    }\n\n    .subtitle {\n      font-size: 1.2em;\n    }\n  }\n']),
    _templateObject10 = _taggedTemplateLiteral(['\n  display: inline-block;\n  background-color: var(\n    ', '\n  );\n  color: var(', ');\n  line-height: 2.5;\n  padding: 0 1.2em;\n  border-radius: 4em;\n  font-size: 1.2em;\n  text-decoration: none;\n  font-weight: 600;\n  cursor: pointer;\n\n  .icon {\n    margin-left: 0.5em;\n    font-size: 0.9em;\n    vertical-align: middle;\n    display: inline-block;\n    position: relative;\n    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n  }\n\n  &:hover,\n  &:focus {\n    text-decoration: none;\n    color: var(', ');\n\n    .icon-plus {\n      transform: rotate(90deg);\n    }\n\n    .icon-arrow-right {\n      margin-left: 1em;\n    }\n  }\n\n  @media (max-width: 32em) {\n    font-size: 1em;\n  }\n'], ['\n  display: inline-block;\n  background-color: var(\n    ', '\n  );\n  color: var(', ');\n  line-height: 2.5;\n  padding: 0 1.2em;\n  border-radius: 4em;\n  font-size: 1.2em;\n  text-decoration: none;\n  font-weight: 600;\n  cursor: pointer;\n\n  .icon {\n    margin-left: 0.5em;\n    font-size: 0.9em;\n    vertical-align: middle;\n    display: inline-block;\n    position: relative;\n    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n  }\n\n  &:hover,\n  &:focus {\n    text-decoration: none;\n    color: var(', ');\n\n    .icon-plus {\n      transform: rotate(90deg);\n    }\n\n    .icon-arrow-right {\n      margin-left: 1em;\n    }\n  }\n\n  @media (max-width: 32em) {\n    font-size: 1em;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _grid = __webpack_require__(3);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _htmr = __webpack_require__(5);

var _htmr2 = _interopRequireDefault(_htmr);

var _cloudinaryReact = __webpack_require__(29);

var _sal = __webpack_require__(30);

var _sal2 = _interopRequireDefault(_sal);

__webpack_require__(31);

var _celebrate = __webpack_require__(32);

var _celebrate2 = _interopRequireDefault(_celebrate);

var _cripcommunity = __webpack_require__(33);

var _cripcommunity2 = _interopRequireDefault(_cripcommunity);

var _header = __webpack_require__(9);

var _navigation = __webpack_require__(10);

var _navigation2 = _interopRequireDefault(_navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//

var HeroContent = (0, _styledComponents2.default)(_grid.Box)(_templateObject);

var HeroImage = (0, _styledComponents2.default)(_grid.Flex)(_templateObject2);

var grad = 'linear-gradient(to bottom, #f3f7fc 50%, #fff)';

var Section = _styledComponents2.default.section(_templateObject3, function (props) {
  return props.type === 'gradient' ? grad : '';
}, function (props) {
  return props.textAlign || 'center';
});

var Container = (0, _styledComponents2.default)(_grid.Flex)(_templateObject4, function (props) {
  return props.textAlign || 'left';
});

var Text = _styledComponents2.default.p(_templateObject5, function (props) {
  return props.maxWidth || '100%';
});

var Img = (0, _styledComponents2.default)(_cloudinaryReact.Image)(_templateObject6);

var Poly = _styledComponents2.default.div(_templateObject7);

var ProfileImg = (0, _styledComponents2.default)(_cloudinaryReact.Image)(_templateObject8);

var Engage = (0, _styledComponents2.default)(_grid.Box)(_templateObject9, function (props) {
  return props.theme === 'light' ? '--secondary-color' : '--main-color';
}, function (props) {
  return props.theme === 'light' ? '--main-color-dark' : '--light-color';
}, function (props) {
  return props.theme === 'light' ? '--main-color' : '--secondary-color';
}, Text, function (props) {
  return props.theme === 'light' ? '--main-color-dark' : '--light-color';
});

var Btn = _styledComponents2.default.a(_templateObject10, function (props) {
  return props.theme === 'light' ? '--main-color' : '--secondary-color';
}, function (props) {
  return props.theme === 'light' ? '--light-color' : '--main-color-dark';
}, function (props) {
  return props.theme === 'light' ? '--light-color' : '--main-color-dark';
});

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _sal2.default)({ once: true });
    }
  }, {
    key: 'goToContent',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var content;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(typeof document !== 'undefined')) {
                  _context.next = 4;
                  break;
                }

                content = document.querySelector('#content');
                _context.next = 4;
                return (0, _reactStatic.scrollTo)(content, {
                  duration: 500
                });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function goToContent() {
        return _ref.apply(this, arguments);
      }

      return goToContent;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var header = this.props.header;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_navigation2.default, null),
        _react2.default.createElement(
          _header.HeroHeader,
          null,
          _react2.default.createElement(
            _grid.Flex,
            null,
            _react2.default.createElement(
              HeroContent,
              {
                width: [1, 1, 2 / 3, 1 / 2],
                p: 3,
                'data-sal': 'fade',
                'data-sal-delay': '100',
                'data-sal-easing': 'ease-out'
              },
              (0, _htmr2.default)(header.contents),
              _react2.default.createElement(
                Btn,
                { onClick: _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                    return _regenerator2.default.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            return _context2.abrupt('return', _this2.goToContent());

                          case 1:
                          case 'end':
                            return _context2.stop();
                        }
                      }
                    }, _callee2, _this2);
                  })) },
                'Join the ride ',
                _react2.default.createElement('i', { className: 'icon icon-plus' })
              )
            ),
            _react2.default.createElement(
              HeroImage,
              { width: [1, 1, 2 / 3, 1 / 2], p: 3, justifyContent: 'center' },
              _react2.default.createElement('img', { src: _cripcommunity2.default, alt: '' })
            )
          )
        ),
        _react2.default.createElement(
          Section,
          { id: 'content' },
          _react2.default.createElement(
            _grid.Flex,
            null,
            _react2.default.createElement(
              _grid.Box,
              { width: [1, 1 / 2], ml: [0, '25%'], px: [3, 0] },
              _react2.default.createElement(
                'h2',
                null,
                'Why we are here'
              ),
              _react2.default.createElement(
                Text,
                null,
                'Ok. First of all, welcome. We know you are busy so we\'ll get straight to the point. You have discovered Crip in Tech.'
              ),
              _react2.default.createElement(
                Text,
                null,
                'Crip in Tech is the culmination of years spent working passionately within tech. Over time, this passion blossomed into this consultant agency that we hope will touch nearly every corner of our lives and others.'
              )
            )
          ),
          _react2.default.createElement(
            _grid.Box,
            { width: 1, my: [0, 2], px: 3, 'data-sal': 'slide-up', 'data-sal-easing': 'ease-out' },
            _react2.default.createElement(Img, {
              cloudName: 'crip',
              publicId: 'Company/People/Crips/one-strong-crew.jpg',
              secure: 'true'
            })
          )
        ),
        _react2.default.createElement(
          Section,
          { type: 'gradient' },
          _react2.default.createElement(
            Container,
            null,
            _react2.default.createElement(
              _grid.Box,
              { width: [1, 1 / 2], p: 3 },
              _react2.default.createElement(
                'h2',
                null,
                'Two hearts, one beat'
              ),
              _react2.default.createElement(
                Text,
                null,
                'We are two professional crips who imagine a world where people wake up every day inspired to go to work. Return home at the end of the day feeling fulfilled by the work they do, feeling that they have contributed to something greater than themselves.'
              ),
              _react2.default.createElement(
                Text,
                null,
                'By harnessing the powers of disrupting culture, technology and incredible people; we hack creative crips and make them shine.'
              ),
              _react2.default.createElement(
                Text,
                null,
                'Bright like a diamond, that is.'
              ),
              _react2.default.createElement(
                Text,
                null,
                'It\u2019ll be our business to do pleasure with you. Or, you know what we mean.'
              )
            ),
            _react2.default.createElement(
              _grid.Box,
              { width: [1, 1 / 2], p: 3, style: { overflow: 'hidden' } },
              _react2.default.createElement(
                Poly,
                { 'data-sal': 'slide-up', 'data-sal-delay': '300', 'data-sal-easing': 'ease-out-bounce' },
                _react2.default.createElement(
                  ProfileImg,
                  {
                    cloudName: 'crip',
                    publicId: 'Company/People/Management/viktor.jpg',
                    secure: 'true',
                    alt: 'Viktor Johansson'
                  },
                  _react2.default.createElement(_cloudinaryReact.Transformation, { width: '400', crop: 'scale' })
                )
              ),
              _react2.default.createElement(
                Poly,
                { 'data-sal': 'slide-up', 'data-sal-delay': '500', 'data-sal-easing': 'ease-out-bounce' },
                _react2.default.createElement(
                  ProfileImg,
                  {
                    cloudName: 'crip',
                    publicId: 'Company/People/Management/johnie.jpg',
                    secure: 'true',
                    alt: 'Johnie Hjelm'
                  },
                  _react2.default.createElement(_cloudinaryReact.Transformation, { width: '400', crop: 'scale' })
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          Section,
          null,
          _react2.default.createElement(
            Container,
            null,
            _react2.default.createElement(
              _grid.Box,
              { width: [1, 1 / 2], px: 3 },
              _react2.default.createElement('img', { src: _celebrate2.default, alt: 'Celebrate' })
            ),
            _react2.default.createElement(
              _grid.Box,
              { width: [1, 1 / 2], px: 3 },
              _react2.default.createElement(
                'h2',
                null,
                'Our ethos'
              ),
              _react2.default.createElement(
                'h3',
                null,
                'Be Different'
              ),
              _react2.default.createElement(
                Text,
                null,
                'We approach life & work with a unique perspective.'
              ),
              _react2.default.createElement(
                'h3',
                null,
                'Be intellectually honest'
              ),
              _react2.default.createElement(
                Text,
                null,
                'Everyone is direct, honest, and without ego. From our mentors to our CEO, all are upfront with feedback.'
              ),
              _react2.default.createElement(
                'h3',
                null,
                'Be meaningful'
              ),
              _react2.default.createElement(
                Text,
                null,
                'We strive to create lasting value in everything we do.'
              ),
              _react2.default.createElement(
                'h3',
                null,
                'Be passionate'
              ),
              _react2.default.createElement(
                Text,
                null,
                'We take a stand for what we believe is right.'
              )
            )
          )
        ),
        _react2.default.createElement(
          Section,
          { type: 'gradient' },
          _react2.default.createElement(
            Container,
            null,
            _react2.default.createElement(
              _grid.Box,
              { width: [1, 1 / 2], p: 3 },
              _react2.default.createElement(
                'h2',
                null,
                'Our igniters'
              ),
              _react2.default.createElement(
                Text,
                null,
                'Over the years we\u2019ve met some amazing people who have embraced our ideas and philosophies. We call them Igniters because they were using those ideas to ignite positive change in their and other\'s organizations. We are in awe of their impactful work. Today, they work with us, arm-in-arm, to inspire people and advance our vision.'
              ),
              _react2.default.createElement(
                Text,
                null,
                'Fredrik and Christofer are two unshakable optimists who believe in a bright future and our ability to build it together. We are all marching toward the same vision; together we can have greater impact than any of us could have alone.'
              )
            ),
            _react2.default.createElement(
              _grid.Box,
              { width: [1, 1 / 2], p: 3, style: { overflow: 'hidden' } },
              _react2.default.createElement(
                Poly,
                { 'data-sal': 'slide-up', 'data-sal-delay': '300', 'data-sal-easing': 'ease-out-bounce' },
                _react2.default.createElement(
                  ProfileImg,
                  {
                    cloudName: 'crip',
                    publicId: 'Company/People/Management/coffe.jpg',
                    secure: 'true',
                    alt: 'Viktor Johansson'
                  },
                  _react2.default.createElement(_cloudinaryReact.Transformation, { width: '400', crop: 'scale' })
                )
              ),
              _react2.default.createElement(
                Poly,
                { 'data-sal': 'slide-up', 'data-sal-delay': '500', 'data-sal-easing': 'ease-out-bounce' },
                _react2.default.createElement(
                  ProfileImg,
                  {
                    cloudName: 'crip',
                    publicId: 'Company/People/Management/fredrik.jpg',
                    secure: 'true',
                    alt: 'Johnie Hjelm'
                  },
                  _react2.default.createElement(_cloudinaryReact.Transformation, { width: '400', crop: 'scale' })
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          Section,
          null,
          _react2.default.createElement(
            Container,
            { p: 3 },
            _react2.default.createElement(
              Engage,
              { theme: 'light', width: [1, 1 / 2], py: [5, '10%'], px: [3, 5] },
              _react2.default.createElement(
                'h2',
                null,
                'For Crips'
              ),
              _react2.default.createElement(
                'p',
                { className: 'subtitle' },
                'Let us launch your career in tech.'
              ),
              _react2.default.createElement(
                Text,
                null,
                'The Nordic tech industry needs you. We are currently missing 30 000 tech professionals in Sweden and that number is growing fast.'
              ),
              _react2.default.createElement(
                Text,
                null,
                'We know that you will become the next big software developer or QA consultant within our hiring ecosystem. That is why we are investing in you.'
              ),
              _react2.default.createElement(
                Btn,
                { href: 'mailto:info@crip.io', theme: 'light' },
                'Join us now ',
                _react2.default.createElement('i', { className: 'icon icon-arrow-right' })
              )
            ),
            _react2.default.createElement(
              Engage,
              { width: [1, 1 / 2], py: [5, '10%'], px: [3, 5] },
              _react2.default.createElement(
                'h2',
                null,
                'For Partners'
              ),
              _react2.default.createElement(
                'p',
                { className: 'subtitle' },
                'We are stronger together.'
              ),
              _react2.default.createElement(
                Text,
                null,
                'Diversity is what makes us who we are. We seek to celebrate our diverse identities. Diversity is where we acknowledge that our different backgrounds bring unique perspectives to our work.'
              ),
              _react2.default.createElement(
                Text,
                null,
                'Let us show you how we can bring a new generation of software developers and QA\'s to your company by connecting diverse and technical talents to your teams. Pipin\' hot, directly from Crip in Tech.'
              ),
              _react2.default.createElement(
                Btn,
                { href: 'mailto:engage@crip.io' },
                'Become our partner ',
                _react2.default.createElement('i', { className: 'icon icon-arrow-right' })
              )
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

exports.default = (0, _reactStatic.withRouteData)(Home);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SmallHeader = exports.HeroHeader = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  overflow: hidden;\n'], ['\n  position: relative;\n  overflow: hidden;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  background-color: var(--main-color-dark);\n  color: white;\n  padding-top: 80px;\n  position: relative;\n'], ['\n  background-color: var(--main-color-dark);\n  color: white;\n  padding-top: 80px;\n  position: relative;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  max-width: var(--main-width);\n  margin: 0 auto;\n\n  @media (max-width: 32em) {\n    flex-direction: column;\n  }\n'], ['\n  max-width: var(--main-width);\n  margin: 0 auto;\n\n  @media (max-width: 32em) {\n    flex-direction: column;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  position: relative;\n  top: -1px;\n  width: 101%;\n  height: auto;\n'], ['\n  position: relative;\n  top: -1px;\n  width: 101%;\n  height: auto;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  height: 50px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  background: transparent url(\'assets/images/wave-blue.svg\') top left repeat-x;\n  animation: wave 6s linear infinite;\n  margin-bottom: 2em;\n\n  &::before {\n    content: \'\';\n    display: block;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: -1;\n    background: transparent url(\'assets/images/wave-green.svg\') top center repeat-x;\n  }\n\n  @media (max-width: 32em) {\n  }\n'], ['\n  height: 50px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  background: transparent url(\'assets/images/wave-blue.svg\') top left repeat-x;\n  animation: wave 6s linear infinite;\n  margin-bottom: 2em;\n\n  &::before {\n    content: \'\';\n    display: block;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: -1;\n    background: transparent url(\'assets/images/wave-green.svg\') top center repeat-x;\n  }\n\n  @media (max-width: 32em) {\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _grid = __webpack_require__(3);

var _waves = __webpack_require__(34);

var _waves2 = _interopRequireDefault(_waves);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderWrapper = _styledComponents2.default.div(_templateObject);

var Header = _styledComponents2.default.div(_templateObject2);

var Inner = (0, _styledComponents2.default)(_grid.Flex)(_templateObject3);

var HeaderWavesLarge = _styledComponents2.default.img(_templateObject4);

var HeaderWavesSmall = _styledComponents2.default.div(_templateObject5);

var HeroHeader = function HeroHeader(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    HeaderWrapper,
    null,
    _react2.default.createElement(
      Header,
      null,
      _react2.default.createElement(
        Inner,
        { alignItems: 'baseline' },
        children
      )
    ),
    _react2.default.createElement(HeaderWavesLarge, { src: _waves2.default })
  );
};

var SmallHeader = function SmallHeader(_ref2) {
  var children = _ref2.children;
  return _react2.default.createElement(
    HeaderWrapper,
    null,
    _react2.default.createElement(
      Header,
      null,
      _react2.default.createElement(
        Inner,
        { alignItems: 'baseline', p: 3 },
        children
      )
    ),
    _react2.default.createElement(HeaderWavesSmall, null)
  );
};

exports.HeroHeader = HeroHeader;
exports.SmallHeader = SmallHeader;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 10;\n'], ['\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 10;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  max-width: var(--main-width);\n  margin: 0 auto;\n\n  @media (max-width: 32em) {\n    .hide-on-mobile {\n      display: none;\n    }\n  }\n'], ['\n  max-width: var(--main-width);\n  margin: 0 auto;\n\n  @media (max-width: 32em) {\n    .hide-on-mobile {\n      display: none;\n    }\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _grid = __webpack_require__(3);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _logo = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NavigationWrap = _styledComponents2.default.div(_templateObject);

var Inner = (0, _styledComponents2.default)(_grid.Flex)(_templateObject2);

// const NavLink = styled(Link)`
//   color: white;
//   text-decoration: none;
//   font-weight: 700;
//   text-transform: uppercase;
//   letter-spacing: 0.04em;
//   margin-left: 16px;
// `

var Navigation = function (_Component) {
  _inherits(Navigation, _Component);

  function Navigation() {
    _classCallCheck(this, Navigation);

    return _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).apply(this, arguments));
  }

  _createClass(Navigation, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        NavigationWrap,
        { as: 'header', role: 'banner' },
        _react2.default.createElement(
          Inner,
          { p: 3, alignItems: 'center', justifyContent: 'space-between' },
          _react2.default.createElement(
            _grid.Box,
            null,
            _react2.default.createElement(
              _reactStatic.Link,
              { exact: true, to: '/' },
              _react2.default.createElement(_logo.LogoFull, { textClass: 'hide-on-mobile' })
            )
          )
        )
      );
    }
  }]);

  return Navigation;
}(_react.Component);

exports.default = (0, _reactStatic.withSiteData)(Navigation);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogoFull = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Logo = function Logo(_ref) {
  var _ref$fill = _ref.fill,
      fill = _ref$fill === undefined ? 'white' : _ref$fill,
      _ref$width = _ref.width,
      width = _ref$width === undefined ? '100px' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 'auto' : _ref$height;
  return _react2.default.createElement(
    'svg',
    {
      version: '1.1',
      x: '0px',
      y: '0px',
      width: width,
      height: height,
      fill: fill,
      viewBox: '0 0 140.533 168',
      enableBackground: 'new 0 0 140.533 168',
      xmlSpace: 'preserve'
    },
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement('circle', { cx: '84', cy: '84.666', r: '17.977' }),
      _react2.default.createElement('path', {
        d: 'M104.593,105.968c-0.777-0.796-1.815-1.204-2.861-1.204c-0.81,0-1.622,0.244-2.322,0.744 c-4.425,3.156-9.638,4.825-15.076,4.825c-14.337,0-26.001-11.663-26.001-26s11.664-26,26.001-26c5.253,0,10.314,1.561,14.638,4.513 c0.686,0.468,1.472,0.697,2.255,0.697c1.041,0,2.075-0.406,2.851-1.193L139.382,26.5c0.774-0.786,1.189-1.856,1.147-2.958 c-0.042-1.103-0.537-2.138-1.368-2.863C123.866,7.344,104.276,0,84,0C37.682,0,0,37.682,0,84s37.682,84,84,84 c20.261,0,39.84-7.334,55.13-20.651c0.83-0.724,1.326-1.756,1.37-2.856c0.044-1.1-0.367-2.169-1.137-2.956L104.593,105.968z M103.566,143.023c-6.291,2.107-12.874,3.177-19.567,3.177c-33.93,0-61.534-27.604-61.534-61.534s27.604-61.534,61.534-61.534 c6.693,0,13.276,1.069,19.567,3.177c2.618,0.877,4.029,3.711,3.152,6.33c-0.878,2.619-3.712,4.03-6.33,3.152 c-5.265-1.764-10.778-2.659-16.39-2.659c-28.415,0-51.534,23.118-51.534,51.534c0,28.416,23.119,51.534,51.534,51.534 c5.611,0,11.125-0.895,16.39-2.659c2.617-0.873,5.452,0.533,6.33,3.152C107.595,139.311,106.184,142.145,103.566,143.023z'
      })
    )
  );
}; // prettier-ignore


var LogoFull = function LogoFull(_ref2) {
  var _ref2$fill = _ref2.fill,
      fill = _ref2$fill === undefined ? 'white' : _ref2$fill,
      _ref2$width = _ref2.width,
      width = _ref2$width === undefined ? '180px' : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === undefined ? 'auto' : _ref2$height,
      _ref2$textClass = _ref2.textClass,
      textClass = _ref2$textClass === undefined ? '' : _ref2$textClass;
  return _react2.default.createElement(
    'svg',
    {
      version: '1.1',
      x: '0px',
      y: '0px',
      width: width,
      height: height,
      fill: fill,
      viewBox: '0 0 838.9 168',
      enableBackground: 'new 0 0 838.9 168',
      xmlSpace: 'preserve'
    },
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement('circle', { cx: '84', cy: '84.7', r: '18' }),
      _react2.default.createElement('path', {
        d: 'M104.6,106c-0.8-0.8-1.8-1.2-2.9-1.2c-0.8,0-1.6,0.2-2.3,0.7c-4.4,3.2-9.6,4.8-15.1,4.8c-14.3,0-26-11.7-26-26 s11.7-26,26-26c5.3,0,10.3,1.6,14.6,4.5c0.7,0.5,1.5,0.7,2.3,0.7c1,0,2.1-0.4,2.9-1.2l35.3-35.8c0.8-0.8,1.2-1.9,1.1-3 c0-1.1-0.5-2.1-1.4-2.9C123.9,7.3,104.3,0,84,0C37.7,0,0,37.7,0,84s37.7,84,84,84c20.3,0,39.8-7.3,55.1-20.7 c0.8-0.7,1.3-1.8,1.4-2.9c0-1.1-0.4-2.2-1.1-3L104.6,106z M103.6,143c-6.3,2.1-12.9,3.2-19.6,3.2c-33.9,0-61.5-27.6-61.5-61.5 S50.1,23.1,84,23.1c6.7,0,13.3,1.1,19.6,3.2c2.6,0.9,4,3.7,3.2,6.3c-0.9,2.6-3.7,4-6.3,3.2C95.1,34,89.6,33.1,84,33.1 c-28.4,0-51.5,23.1-51.5,51.5s23.1,51.5,51.5,51.5c5.6,0,11.1-0.9,16.4-2.7c2.6-0.9,5.5,0.5,6.3,3.2 C107.6,139.3,106.2,142.1,103.6,143z'
      })
    ),
    _react2.default.createElement(
      'g',
      { className: textClass },
      _react2.default.createElement('path', {
        d: 'M181.2,84.4c0-24.7,18.4-43.7,43.7-43.7c15.2,0,28.7,7.6,36,19.4l-16.6,9.6c-3.7-6.5-10.9-10.3-19.4-10.3 c-14.9,0-24.5,10-24.5,25c0,15,9.6,25,24.5,25c8.5,0,15.8-3.8,19.4-10.3l16.6,9.6c-7.2,11.9-20.6,19.4-36,19.4 C199.6,128.1,181.2,109.2,181.2,84.4z'
      }),
      _react2.default.createElement('path', { d: 'M307.7,65.2v20.4c-7.4-1.2-18,1.8-18,13.7v27.1h-18v-60h18v10.7C292.1,69.1,300.1,65.2,307.7,65.2z' }),
      _react2.default.createElement('path', {
        d: 'M315.5,50.4c0-5.9,4.9-10.8,10.8-10.8c5.9,0,10.8,4.9,10.8,10.8s-4.9,10.8-10.8,10.8C320.4,61.2,315.5,56.2,315.5,50.4z M317.3,66.4h18v60h-18V66.4z'
      }),
      _react2.default.createElement('path', {
        d: 'M414.3,96.4c0,17.9-13,31.7-28.7,31.7c-8,0-13.9-2.8-17.9-7.3v29.6h-18v-84h18v5.6c4-4.6,9.8-7.3,17.9-7.3 C401.3,64.8,414.3,78.6,414.3,96.4z M396.3,96.4c0-9-6-14.6-14.3-14.6s-14.3,5.6-14.3,14.6s6,14.6,14.3,14.6 S396.3,105.4,396.3,96.4z'
      }),
      _react2.default.createElement('path', {
        d: 'M455.1,50.4c0-5.9,4.9-10.8,10.8-10.8c5.9,0,10.8,4.9,10.8,10.8s-4.9,10.8-10.8,10.8C460,61.2,455.1,56.2,455.1,50.4z M456.9,66.4h18v60h-18V66.4z'
      }),
      _react2.default.createElement('path', {
        d: 'M546.9,89.6v36.8h-18V92.2c0-7.4-4.7-10.9-10.4-10.9c-6.6,0-11.2,3.8-11.2,12.4v32.8h-18v-60h18v5.6 c3.2-4.4,9.2-7.3,17.2-7.3C536.5,64.8,546.9,73.4,546.9,89.6z'
      }),
      _react2.default.createElement('path', { d: 'M648.6,60.9H627v65.5h-19.2V60.9h-21.6V42.4h62.4V60.9z' }),
      _react2.default.createElement('path', {
        d: 'M677.3,112c4.9,0,9.1-1.9,11.5-4.6l14.4,8.3c-5.9,8.2-14.8,12.4-26.2,12.4c-20.5,0-33.2-13.8-33.2-31.7 c0-17.9,13-31.7,31.9-31.7c17.5,0,30.5,13.6,30.5,31.7c0,2.5-0.2,4.9-0.7,7.2h-42.6C665.2,109.9,670.7,112,677.3,112z M688.3,90.2 c-1.9-7-7.3-9.5-12.7-9.5c-6.8,0-11.4,3.4-13.1,9.5H688.3z'
      }),
      _react2.default.createElement('path', {
        d: 'M714,96.4c0-17.9,13.6-31.7,31.8-31.7c11.6,0,22,6.1,27.1,15.4l-15.7,9.1c-2-4.2-6.4-6.7-11.6-6.7 c-7.8,0-13.6,5.6-13.6,13.9c0,8.3,5.8,13.9,13.6,13.9c5.3,0,9.7-2.5,11.6-6.7l15.7,9c-5.2,9.4-15.4,15.5-27.1,15.5 C727.6,128.1,714,114.3,714,96.4z'
      }),
      _react2.default.createElement('path', {
        d: 'M838.9,89.6v36.8h-18V92.2c0-7.4-4.7-10.9-10.4-10.9c-6.6,0-11.2,3.8-11.2,12.4v32.8h-18v-84h18v29.6 c3.2-4.4,9.2-7.3,17.2-7.3C828.6,64.8,838.9,73.4,838.9,89.6z'
      })
    )
  );
};

exports.LogoFull = LogoFull;
exports.default = Logo;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _htmr = __webpack_require__(5);

var _htmr2 = _interopRequireDefault(_htmr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var about = _ref.about;
  return _react2.default.createElement(
    'div',
    null,
    (0, _htmr2.default)(about.contents)
  );
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  color: white;\n\n  @media (max-width: 32em) {\n    font-size: 2.5em;\n  }\n'], ['\n  color: white;\n\n  @media (max-width: 32em) {\n    font-size: 2.5em;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 40px;\n  height: 4px;\n  background-color: var(--secondary-color);\n  margin-bottom: 2em;\n'], ['\n  width: 40px;\n  height: 4px;\n  background-color: var(--secondary-color);\n  margin-bottom: 2em;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  max-width: 800px;\n  margin: 0 auto;\n\n  p {\n    font-size: 1.2em;\n    line-height: 1.68;\n    margin-bottom: 2em;\n    color: #444;\n  }\n\n  a {\n    color: var(--main-color);\n    text-decoration: none;\n  }\n\n  h3 {\n    font-size: 1.5em;\n    margin-bottom: 0;\n  }\n\n  @media (max-width: 32em) {\n    p {\n      font-size: 1em;\n    }\n  }\n'], ['\n  max-width: 800px;\n  margin: 0 auto;\n\n  p {\n    font-size: 1.2em;\n    line-height: 1.68;\n    margin-bottom: 2em;\n    color: #444;\n  }\n\n  a {\n    color: var(--main-color);\n    text-decoration: none;\n  }\n\n  h3 {\n    font-size: 1.5em;\n    margin-bottom: 0;\n  }\n\n  @media (max-width: 32em) {\n    p {\n      font-size: 1em;\n    }\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  color: #fff;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  font-size: 0.875rem;\n  font-weight: 500;\n  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n  cursor: pointer;\n\n  .icon {\n    display: flex;\n    text-decoration: none;\n    justify-content: center;\n    align-items: center;\n    width: 54px;\n    height: 54px;\n    border-radius: 50%;\n    border: solid 2px rgba(255, 255, 255, 0.2);\n    color: #fff;\n    margin-right: 20px;\n    font-size: 1rem;\n    transition: inherit;\n    cursor: pointer;\n  }\n\n  &:hover,\n  &:focus {\n    text-decoration: none;\n    color: #fff;\n\n    .icon {\n      border: solid 2px rgba(255, 255, 255, 0.4);\n      text-decoration: none;\n    }\n  }\n\n  @media (max-width: 32em) {\n    .icon {\n      width: 34px;\n      height: 34px;\n    }\n  }\n'], ['\n  color: #fff;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  font-size: 0.875rem;\n  font-weight: 500;\n  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n  cursor: pointer;\n\n  .icon {\n    display: flex;\n    text-decoration: none;\n    justify-content: center;\n    align-items: center;\n    width: 54px;\n    height: 54px;\n    border-radius: 50%;\n    border: solid 2px rgba(255, 255, 255, 0.2);\n    color: #fff;\n    margin-right: 20px;\n    font-size: 1rem;\n    transition: inherit;\n    cursor: pointer;\n  }\n\n  &:hover,\n  &:focus {\n    text-decoration: none;\n    color: #fff;\n\n    .icon {\n      border: solid 2px rgba(255, 255, 255, 0.4);\n      text-decoration: none;\n    }\n  }\n\n  @media (max-width: 32em) {\n    .icon {\n      width: 34px;\n      height: 34px;\n    }\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _htmr = __webpack_require__(5);

var _htmr2 = _interopRequireDefault(_htmr);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _grid = __webpack_require__(3);

var _header = __webpack_require__(9);

var _navigation = __webpack_require__(10);

var _navigation2 = _interopRequireDefault(_navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//

var PageTitle = _styledComponents2.default.h1(_templateObject);

var Line = _styledComponents2.default.div(_templateObject2);

var Content = (0, _styledComponents2.default)(_grid.Box)(_templateObject3);

var ReadMoreBtn = _styledComponents2.default.a(_templateObject4);

var ReadMore = function ReadMore(_ref) {
  var _ref$subtitle = _ref.subtitle,
      subtitle = _ref$subtitle === undefined ? 'Read more' : _ref$subtitle;

  if (typeof document !== 'undefined') {
    var cnt = document.querySelector('.maincontent');
    return _react2.default.createElement(
      ReadMoreBtn,
      { onClick: function onClick() {
          return (0, _reactStatic.scrollTo)(cnt, { duration: 250 });
        } },
      _react2.default.createElement('i', { className: 'icon icon-arrow-down' }),
      _react2.default.createElement(
        'span',
        null,
        subtitle
      )
    );
  }

  return null;
};

exports.default = (0, _reactStatic.withRouteData)(function (_ref2) {
  var page = _ref2.page;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactStatic.Head, { title: page.title }),
    _react2.default.createElement(_navigation2.default, null),
    _react2.default.createElement(
      _header.SmallHeader,
      null,
      _react2.default.createElement(
        _grid.Box,
        { width: [1, 1 / 2], py: [4, 5] },
        _react2.default.createElement(Line, null),
        _react2.default.createElement(
          PageTitle,
          null,
          page.title
        )
      ),
      _react2.default.createElement(
        _grid.Box,
        { width: [1, 'auto'], ml: 'auto' },
        _react2.default.createElement(ReadMore, { subtitle: page.subtitle })
      )
    ),
    _react2.default.createElement(
      Content,
      { p: 3, className: 'maincontent' },
      (0, _htmr2.default)(page.contents)
    )
  );
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      '404 - Oh no\'s! We couldn\'t find that page :('
    )
  );
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(16);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(17);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  window.addEventListener('load', function () {
    var ga = window.ga;
    ga('create', "UA-128959515-1", 'auto');

    ga('require', 'outboundLinkTracker');
    ga('require', 'urlChangeTracker');
    // Require additional plugins imported in the build:autotrack.

    ga('send', 'pageview');

    // bugsnag
    window.bugsnagClient = window.bugsnag("6b7b69bade238c55826fa842e8847140");
  });
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactHotLoader = __webpack_require__(18);

var _reactStaticRoutes = __webpack_require__(19);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _footer = __webpack_require__(35);

var _footer2 = _interopRequireDefault(_footer);

var _cookies = __webpack_require__(37);

var _cookies2 = _interopRequireDefault(_cookies);

__webpack_require__(39);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = (0, _reactStatic.withSiteData)(function (_ref) {
  var title = _ref.title,
      slogan = _ref.slogan;
  return _react2.default.createElement(
    _reactStatic.Router,
    null,
    _react2.default.createElement(
      _react2.default.Fragment,
      null,
      _react2.default.createElement(_reactStatic.Head, { titleTemplate: title + ' - %s', defaultTitle: title + ' - ' + slogan }),
      _react2.default.createElement(
        'div',
        { className: 'content' },
        _react2.default.createElement(_reactStaticRoutes2.default, null)
      ),
      _react2.default.createElement(_footer2.default, null),
      _react2.default.createElement(_cookies2.default, null)
    )
  );
});

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(20);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(21);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(22);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(23);

var _reactUniversalComponent = __webpack_require__(24);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Home',
  file: '/home/travis/build/crip/crip.io/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 8)), (0, _importCss3.default)('src/containers/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(8);
  },
  chunkName: function chunkName() {
    return 'src/containers/Home';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/About',
  file: '/home/travis/build/crip/crip.io/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 12)), (0, _importCss3.default)('src/containers/About', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/About');
  },
  resolve: function resolve() {
    return /*require.resolve*/(12);
  },
  chunkName: function chunkName() {
    return 'src/containers/About';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Page',
  file: '/home/travis/build/crip/crip.io/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 13)), (0, _importCss3.default)('src/containers/Page', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Page');
  },
  resolve: function resolve() {
    return /*require.resolve*/(13);
  },
  chunkName: function chunkName() {
    return 'src/containers/Page';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/404',
  file: '/home/travis/build/crip/crip.io/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 14)), (0, _importCss3.default)('src/containers/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(14);
  },
  chunkName: function chunkName() {
    return 'src/containers/404';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2, t_3];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 3

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          // If Comp is used as a component here, it triggers React to re-mount the entire
          // component tree underneath during reconciliation, losing all internal state.
          // By unwrapping it here we keep the real, static component exposed directly to React.
          return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(25);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(26);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(27);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (Component) return Component;
          return requireAsync(props, context);
        }).then(function (Component) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });
          return Component;
        });
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(6);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("cloudinary-react");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("sal.js");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("sal.js/dist/sal.css");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/celebrate.010fe00d.svg";

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyMTAgMjM1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMTAgMjM1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe29wYWNpdHk6MC4xNTtmaWxsOiMyMkVBQUE7fQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiMyMkVBQUE7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6c3F1YXJlO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS1kYXNoYXJyYXk6NCw4O30KCS5zdDN7ZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Q0e2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00OS4yLDE3MGMzLjEsNC4zLDQuOCw5LjcsNC44LDE1LjR2LTAuMmwwLjEsNDAuMkg4LjN2Ni4yaDUybDAuNi00MC4zdjAuMkM2MC45LDE4Mi42LDU1LjksMTc0LjgsNDkuMiwxNzAKCUw0OS4yLDE3MHoiLz4KPHBhdGggY2xhc3M9InN0MSIgZD0iTTIsMTg1LjVDMiwxNzEsMTMuNSwxNTksMjgsMTU5czI2LDEyLDI2LDI2LjUiLz4KPHBhdGggY2xhc3M9InN0MSIgZD0iTTU0LDE4NS41djM5LjhsLTUxLjksMC4xdi00MC4xIi8+CjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yNiwxNjUuNWMwLDEyLjcsOS42LDIwLjcsMjIsMjJ2MTFjMCwxMC44LTguNywxOS41LTE5LjUsMTkuNVM5LDIwOS4zLDksMTk4LjV2LTE0CglDMTguNiwxODMuOSwyNiwxNzUuMiwyNiwxNjUuNSIvPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzgsMjAwLjVjMCw1LjQtNC4xLDkuNS05LjUsOS41cy05LjUtNC4xLTkuNS05LjVIMzh6IE0xMi41LDE5M2MwLTIuNCwyLjEtNC41LDQuNS00LjVzNC41LDIuMSw0LjUsNC41CgkgTTM0LjUsMTkzYzAtMi40LDIuMS00LjUsNC41LTQuNXM0LjUsMi4xLDQuNSw0LjUiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTIwOCwxNjYuNWgtMTBjLTMsMy40LTYsNS02LDV2MzBjMCwxMy40LTExLjUsMjQuNC0yNC45LDI0LjRjLTUsMC05LjYtMS41LTEzLjUtNC4xCgljNC40LDYuNSwxMS44LDEwLjcsMjAuMSwxMC43YzEzLjMsMCwyNS4zLTEwLjYsMjUuMy0yNHYtMzFDMTk5LDE3Ny41LDIwNS45LDE3NC44LDIwOCwxNjYuNUwyMDgsMTY2LjV6Ii8+CjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xOTIsMTgyLjV2MTljMCwxMy40LTExLjcsMjQtMjUsMjRzLTI0LjEtMTAuNS0yNC4xLTIzLjl2LTE2LjgiLz4KPHBhdGggY2xhc3M9InN0MSIgZD0iTTE3OSwyMDMuNWMwLDYuNy01LjMsMTMtMTIsMTNzLTEyLTYuMy0xMi0xM0gxNzl6IE0xNDksMTk0LjVjMC0zLDIuNS01LDUuNS01czUuNSwyLDUuNSw1IE0xNzUsMTk0LjUKCWMwLTMsMi41LTUsNS41LTVzNS41LDIsNS41LDUgTTE5MiwxODIuNXYtMTFjMCwwLDYuOS0zLjcsOS0xMmgtNDhjLTUuOSwwLTEwLDUuMS0xMCwxMWwtMC4xLDE0LjRjNCwwLDcuMS0zLjMsNy4xLTcuNHYtNmwyMiw4di04CglMMTkyLDE4Mi41Ii8+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMjMsMjguNXYwLjFjMCwwLTEsMjEuNSw5LDI0LjljLTMuNi03LjUtMy0xOC41LTMtMTguNXYtMC4xYzAtOC44LTQuMy0xNi42LTExLTIxLjQKCUMxMjEsMTcuOCwxMjMsMjIuOSwxMjMsMjguNXogTTEyMS4xLDYwLjhjLTMuNiwwLTcuNS0xLjgtMTAtNGMtMy42LDQuMS04LjQsNi44LTE0LjMsNi44cy0xMS4xLTIuNy0xNC43LTYuOGMtMi41LDIuMi02LjQsNC0xMCw0CgljLTEuNywwLTIuNi0wLjYtNC0xYy0wLjMsMC4yLTEuNi0wLjEtMiwwbDEsMWMyLjYsMy44LDYuNSw2LDExLjUsNmMzLjYsMCw3LTEuOCw5LjUtNGMzLjYsNC4xLDkuMSw3LDE1LDdzMTAuOS0yLjQsMTQuNS02LjV2LTAuMQoJYzIuNSwyLjIsNS45LDMuNiw5LjUsMy42YzUsMCw4LjktMi4yLDExLjUtNmwwLjUtMWMtMi45LTAuOS01LjYtMy40LTcuMS02LjJDMTMyLDUzLjUsMTI2LjIsNjAuOCwxMjEuMSw2MC44eiIvPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNOTQsMTEuNWMwLDEyLjcsOS42LDE5LjcsMjIsMjFsMC4xLDUuMXY2LjNjMCwxMC44LTguMywxOS42LTE5LjEsMTkuNmgtMWMtMTAuOCwwLTE5LTguMi0xOS0xOXYtMTUKCUM4Ni41LDI4LjksOTQsMjEuMiw5NCwxMS41Ii8+CjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xMDYsNDUuNWMwLDUuNC00LjEsMTAuMS05LjUsMTAuMVM4Nyw1MC45LDg3LDQ1LjVIMTA2eiBNODEuNSwzOC41YzAtMi4zLDIuMS00LjMsNC40LTQuM3M0LjEsMiw0LjEsNC4zCgkgTTEwMi41LDM4LjVjMC0yLjMsMi00LjMsNC4zLTQuM3M0LjIsMiw0LjIsNC4zIi8+CjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xMTEsNTYuNWMyLjUsMi4yLDYuNCw0LDEwLDRjNSwwLDguNC0yLjIsMTEtNmwwLjUtMWMtMTAuMy0zLjEtOS41LTI0LjktOS41LTI0Ljl2LTAuMWMwLTE0LjUtMTItMjYtMjYuNS0yNgoJUzcwLDE0LDcwLDI4LjV2MC4xYzAsMC0wLjIsMjEuOC0xMC41LDI0LjlsMC41LDFjMi42LDMuOCw3LDYsMTIsNmMzLjYsMCw3LjUtMS44LDEwLTQiLz4KPHBhdGggY2xhc3M9InN0MiIgZD0iTTk3LDc1LjV2MTMgTTY1LDE0Ni41bC0xMiwxMyBNMTI5LDE0Ni41bDEyLDEzIi8+CjxjaXJjbGUgY2xhc3M9InN0MyIgY3g9Ijk2LjkiIGN5PSIxMjUuNCIgcj0iMjkuMSIvPgo8Zz4KCTxjaXJjbGUgY2xhc3M9InN0NCIgY3g9Ijk2LjQiIGN5PSIxMjUuNiIgcj0iNC42Ii8+Cgk8cGF0aCBjbGFzcz0ic3Q0IiBkPSJNMTAxLjcsMTMxLjFjLTAuMi0wLjItMC41LTAuMy0wLjctMC4zYy0wLjIsMC0wLjQsMC4xLTAuNiwwLjJjLTEuMSwwLjgtMi41LDEuMi0zLjksMS4yYy0zLjcsMC02LjctMy02LjctNi43CgkJYzAtMy43LDMtNi43LDYuNy02LjdjMS40LDAsMi43LDAuNCwzLjgsMS4yYzAuMiwwLjEsMC40LDAuMiwwLjYsMC4yYzAuMywwLDAuNS0wLjEsMC43LTAuM2w5LjEtOS4yYzAuMi0wLjIsMC4zLTAuNSwwLjMtMC44CgkJYzAtMC4zLTAuMS0wLjUtMC40LTAuN2MtMy45LTMuNC05LTUuMy0xNC4yLTUuM2MtMTIsMC0yMS43LDkuNy0yMS43LDIxLjdzOS43LDIxLjcsMjEuNywyMS43YzUuMiwwLDEwLjMtMS45LDE0LjItNS4zCgkJYzAuMi0wLjIsMC4zLTAuNSwwLjQtMC43YzAtMC4zLTAuMS0wLjYtMC4zLTAuOEwxMDEuNywxMzEuMXogTTEwMS40LDE0MC42Yy0xLjYsMC41LTMuMywwLjgtNS4xLDAuOGMtOC44LDAtMTUuOS03LjEtMTUuOS0xNS45CgkJczcuMS0xNS45LDE1LjktMTUuOWMxLjcsMCwzLjQsMC4zLDUuMSwwLjhjMC43LDAuMiwxLDEsMC44LDEuNmMtMC4yLDAuNy0xLDEtMS42LDAuOGMtMS40LTAuNS0yLjgtMC43LTQuMy0wLjcKCQljLTcuMywwLTEzLjMsNi0xMy4zLDEzLjNzNiwxMy4zLDEzLjMsMTMuM2MxLjQsMCwyLjktMC4yLDQuMi0wLjdjMC43LTAuMiwxLjQsMC4xLDEuNiwwLjhDMTAyLjUsMTM5LjcsMTAyLjEsMTQwLjQsMTAxLjQsMTQwLjZ6IgoJCS8+CjwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNDQwIDE4OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTQ0MCAxODk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMjJFQUFBO30KCS5zdDF7ZmlsbDojM0IwMDdGO30KCS5zdDJ7ZmlsbDojMjQxMjREO30KPC9zdHlsZT4KPHRpdGxlPndhdmVzPC90aXRsZT4KPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CjxnIGlkPSJQYWdlLTMiPgoJPGcgaWQ9ImhvbWUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAtMzkzLjAwMDAwMCkiPgoJCTxnIGlkPSJiZy1jb2xvcnMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNDQuMDAwMDAwLCAwLjAwMDAwMCkiPgoJCQk8ZyBpZD0id2F2ZXMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI5MS4wMDAwMDAsIDM5Mi41MDAwMDApIj4KCQkJCTxwYXRoIGlkPSJSZWN0YW5nbGUtMiIgY2xhc3M9InN0MCIgZD0iTTExNDcuNyw1LjljMCwwLTg3OC4xLDE3LjMtOTEzLjMsMjAuM0MyMjYsMjcsMTA4LjIsMTAuMSwxMTQuOCwxMS40CgkJCQkJYzE4NC43LDM3LjEsNDExLjYsMTI3LjUsNTM3LjgsMTQzLjRjMjgyLjQsMzUuNSw1NDkuMS04Mi43LDU0OS4xLTgyLjdMMTE0Ny43LDUuOXoiLz4KCQkJCTxwYXRoIGlkPSJSZWN0YW5nbGUtMl8xXyIgY2xhc3M9InN0MSIgZD0iTTE0OTQsMC41TDY0NC42LDAuOWMwLDAtMTA5LjcsNy40LTQzLjUsMjcuMWMxMzAuNywzOC44LDI1OC43LDgyLjIsMzQyLjUsOTIuNwoJCQkJCWMyNzkuNCwzNS4yLDU0My45LTgwLjMsNTQ5LjQtODIuN2MwLjEsMCwwLjctMC40LDAuNy0wLjRMMTQ5NCwwLjV6Ii8+CgkJCQk8cGF0aCBpZD0iUmVjdGFuZ2xlLTJfMl8iIGNsYXNzPSJzdDIiIGQ9Ik00My42LDAuNWwxMzU3LjMsMGw0OC44LDBjMCwwLTQzLjcsMS40LTUxLjksMS44Yy03My43LDIuOS0xODQuNSwxMS43LTMxMSwzNy4xCgkJCQkJQzkwMi4yLDc2LjQsNjc1LjMsMTY2LjksNTQ5LjEsMTgyLjhjLTIwNi4yLDI2LTQwNC4xLTMwLjEtNDk1LjgtNjIuM0MxOS40LDEwOC43LDAsMTAwLjEsMCwxMDAuMUw0My42LDAuNXoiLz4KCQkJPC9nPgoJCTwvZz4KCTwvZz4KPC9nPgo8L3N2Zz4K"

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background-color: var(--main-color-dark);\n  color: white;\n  padding: 3em 0;\n'], ['\n  background-color: var(--main-color-dark);\n  color: white;\n  padding: 3em 0;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: block;\n  margin-bottom: -5px;\n  width: 100%;\n  height: auto;\n'], ['\n  display: block;\n  margin-bottom: -5px;\n  width: 100%;\n  height: auto;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  max-width: var(--main-width);\n  margin: 0 auto;\n\n  svg {\n    height: auto;\n  }\n\n  a {\n    color: white;\n    text-decoration: none;\n    margin-bottom: 8px;\n    display: inline-block;\n    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n  }\n\n  a::before {\n    content: \'\';\n    display: block;\n    width: 15px;\n    height: 1px;\n    border-top: 2px solid var(--secondary-color);\n    position: absolute;\n    top: 50%;\n    left: 0;\n    transform: translateY(-50%);\n    transition: inherit;\n    opacity: 0;\n  }\n\n  a:hover,\n  a:focus {\n    transform: translateX(10px);\n    color: var(--secondary-color);\n    text-decoration: none;\n\n    &::before {\n      opacity: 1;\n      transform: translateX(-25px) translateY(-50%);\n    }\n  }\n\n  @media (max-width: 32em) {\n    flex-direction: column;\n  }\n'], ['\n  max-width: var(--main-width);\n  margin: 0 auto;\n\n  svg {\n    height: auto;\n  }\n\n  a {\n    color: white;\n    text-decoration: none;\n    margin-bottom: 8px;\n    display: inline-block;\n    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n  }\n\n  a::before {\n    content: \'\';\n    display: block;\n    width: 15px;\n    height: 1px;\n    border-top: 2px solid var(--secondary-color);\n    position: absolute;\n    top: 50%;\n    left: 0;\n    transform: translateY(-50%);\n    transition: inherit;\n    opacity: 0;\n  }\n\n  a:hover,\n  a:focus {\n    transform: translateX(10px);\n    color: var(--secondary-color);\n    text-decoration: none;\n\n    &::before {\n      opacity: 1;\n      transform: translateX(-25px) translateY(-50%);\n    }\n  }\n\n  @media (max-width: 32em) {\n    flex-direction: column;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  color: var(--secondary-color);\n  font-size: 1em;\n  margin-bottom: 1em;\n  font-weight: bold;\n'], ['\n  color: var(--secondary-color);\n  font-size: 1em;\n  margin-bottom: 1em;\n  font-weight: bold;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  margin: 0;\n  font-size: 14px;\n'], ['\n  margin: 0;\n  font-size: 14px;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  font-size: 1em;\n'], ['\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  font-size: 1em;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _grid = __webpack_require__(3);

var _footerbg = __webpack_require__(36);

var _footerbg2 = _interopRequireDefault(_footerbg);

var _logo = __webpack_require__(11);

var _logo2 = _interopRequireDefault(_logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents2.default.footer(_templateObject);

var FooterCurve = _styledComponents2.default.img(_templateObject2);

var Inner = (0, _styledComponents2.default)(_grid.Flex)(_templateObject3);

var FooterTitle = _styledComponents2.default.h3(_templateObject4);

var Copyright = _styledComponents2.default.p(_templateObject5);

var Menu = _styledComponents2.default.ul(_templateObject6);

var FooterMenu = function FooterMenu(_ref) {
  var menu = _ref.menu;

  if (Array.isArray(menu)) {
    return _react2.default.createElement(
      Menu,
      null,
      menu.map(function (item, index) {
        return _react2.default.createElement(
          'li',
          { key: 'menu-item-' + index },
          _react2.default.createElement(
            _reactStatic.Link,
            { to: item.path },
            item.name
          )
        );
      })
    );
  }
};

var Footer = function Footer(_ref2) {
  var title = _ref2.title,
      menus = _ref2.menus;

  var currentYear = new Date().getFullYear();
  var main = menus.main,
      follow = menus.follow,
      legal = menus.legal;

  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(FooterCurve, { src: _footerbg2.default, role: 'img' }),
    _react2.default.createElement(
      Wrapper,
      null,
      _react2.default.createElement(
        Inner,
        { pb: 4 },
        _react2.default.createElement(
          _grid.Box,
          { px: 3, width: [1, 1 / 5], pb: [3, 0] },
          _react2.default.createElement(_logo2.default, { width: '50' }),
          _react2.default.createElement(
            'p',
            null,
            'We create possibilities for the connected world. ',
            _react2.default.createElement(
              'strong',
              null,
              'Be Bold.'
            )
          )
        ),
        _react2.default.createElement(
          _grid.Box,
          { px: 3, width: [1, 1 / 5], pb: [3, 0] },
          _react2.default.createElement(
            FooterTitle,
            null,
            'Explore'
          ),
          _react2.default.createElement(FooterMenu, { menu: main })
        ),
        _react2.default.createElement(
          _grid.Box,
          { px: 3, width: [1, 1 / 5], pb: [3, 0] },
          _react2.default.createElement(
            FooterTitle,
            null,
            'Visit'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Convendum Coworking Space',
            _react2.default.createElement('br', null),
            'Regeringsgatan 48,',
            _react2.default.createElement('br', null),
            '111 56 Stockholm'
          ),
          _react2.default.createElement(
            FooterTitle,
            null,
            'New business'
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'a',
              { href: 'mailto:engage@crip.io' },
              'engage@crip.io'
            ),
            _react2.default.createElement('br', null),
            '+4670-458 09 74'
          )
        ),
        _react2.default.createElement(
          _grid.Box,
          { px: 3, width: [1, 1 / 5], pb: [3, 0] },
          _react2.default.createElement(
            FooterTitle,
            null,
            'Follow'
          ),
          _react2.default.createElement(FooterMenu, { menu: follow })
        ),
        _react2.default.createElement(
          _grid.Box,
          { px: 3, width: [1, 1 / 5], pb: [3, 0] },
          _react2.default.createElement(
            FooterTitle,
            null,
            'Legal'
          ),
          _react2.default.createElement(FooterMenu, { menu: legal })
        )
      ),
      _react2.default.createElement(
        Inner,
        { px: 3, justifyContent: 'space-between' },
        _react2.default.createElement(
          _grid.Box,
          null,
          _react2.default.createElement(
            Copyright,
            null,
            '\xA9 ',
            currentYear,
            ' ',
            title,
            '. All Rights Reserved.'
          )
        )
      )
    )
  );
};

exports.default = (0, _reactStatic.withSiteData)(Footer);

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBhcmlhLWxhYmVsbGVkYnk9InRpdGxlIiB2aWV3Qm94PSIwIDAgMTkyMCAyNDAiIGZpbGw9IiMyNDEyNGQiPjxnPjxwYXRoIGQ9Ik0xOTIwLDExMS45MDRsMCwxMjguMDk2bC0xOTIwLDBsMCwtMTMyLjUzNmMzOTAuNzQ1LDEwNC4xMTUgMTE2OC4wMiwxNDYuMzk5IDE3NjMsMzQuNTM2YzYwLjYzLC0xMS4zOTkgMTEyLjU5LC0yMS40MDUgMTU3LC0zMC4wOTZaIj48L3BhdGg+PC9nPjwvc3ZnPgo="

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  background-color: var(--main-color);\n  color: var(--light-color);\n  display: flex;\n  position: fixed;\n  max-width: 600px;\n  bottom: 16px;\n  left: 16px;\n  border-radius: 4px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n\n  img {\n    margin-left: 16px;\n  }\n\n  p {\n    padding: 0 16px;\n  }\n\n  p a {\n    color: var(--light-color);\n  }\n\n  @media (max-width: 32em) {\n    bottom: 36px;\n    right: 16px;\n\n    img {\n      display: none;\n    }\n  }\n'], ['\n  background-color: var(--main-color);\n  color: var(--light-color);\n  display: flex;\n  position: fixed;\n  max-width: 600px;\n  bottom: 16px;\n  left: 16px;\n  border-radius: 4px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n\n  img {\n    margin-left: 16px;\n  }\n\n  p {\n    padding: 0 16px;\n  }\n\n  p a {\n    color: var(--light-color);\n  }\n\n  @media (max-width: 32em) {\n    bottom: 36px;\n    right: 16px;\n\n    img {\n      display: none;\n    }\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  background-color: var(--secondary-color);\n  color: var(--main-color-dark);\n  border-radius: 0 4px 4px 0;\n  padding: 0 16px;\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 1.2em;\n'], ['\n  background-color: var(--secondary-color);\n  color: var(--main-color-dark);\n  border-radius: 0 4px 4px 0;\n  padding: 0 16px;\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 1.2em;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _cookies = __webpack_require__(38);

var _cookies2 = _interopRequireDefault(_cookies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents2.default.div(_templateObject);

var Btn = _styledComponents2.default.a(_templateObject2);

var Cookies = function (_React$Component) {
  _inherits(Cookies, _React$Component);

  function Cookies() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Cookies);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Cookies.__proto__ || Object.getPrototypeOf(Cookies)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      noAction: true
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Cookies, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (typeof window !== 'undefined' && window.localStorage.getItem('accept-cookies')) {
        this.setState(function () {
          return { noAction: false };
        });
      }
    }
  }, {
    key: 'acceptCookies',
    value: function acceptCookies() {
      this.setState(function () {
        return { noAction: false };
      });
      if (typeof window !== 'undefined') {
        window.ga('send', {
          hitType: 'event',
          eventCategory: 'Cookies',
          eventAction: 'accept',
          eventLabel: 'Accepted Cookies'
        });
        window.localStorage.setItem('accept-cookies', true);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var noAction = this.state.noAction;


      if (noAction) {
        return _react2.default.createElement(
          Wrapper,
          null,
          _react2.default.createElement('img', { src: _cookies2.default, alt: 'Cookies' }),
          _react2.default.createElement(
            'p',
            null,
            'By using this website, you accept the use of some delicious cookies. For more information, read our ',
            _react2.default.createElement(
              _reactStatic.Link,
              { to: '/cookies' },
              'Cookie Policy'
            ),
            '.'
          ),
          _react2.default.createElement(
            Btn,
            { onClick: function onClick() {
                return _this2.acceptCookies();
              } },
            'Accept'
          )
        );
      }

      return null;
    }
  }]);

  return Cookies;
}(_react2.default.Component);

exports.default = Cookies;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NCIgaGVpZ2h0PSI0NiIgdmlld0JveD0iMCAwIDQ0IDQ2Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiMyMmVhYWEiIGQ9Ik00Mi44NDEgMjQuMmEzLjkzMyAzLjkzMyAwIDAgMS01LjU3MyAwIDMuOTk4IDMuOTk4IDAgMCAxIDAtNS42MDcgMy45MzkgMy45MzkgMCAwIDEgNS41NzMgMGwuMDUuMDU2di0uMDIyYTMuOTkzIDMuOTkzIDAgMCAxLS4wNSA1LjU3M3ptLTEuMjg4LTQuMjQ1bC0uMDM5LS4wMzktLjAwMS0uMDAxYTIuMDg3IDIuMDg3IDAgMCAwLTIuOTYzLjAwMSAyLjEyMyAyLjEyMyAwIDAgMCAwIDIuOTgzIDIuMDkxIDIuMDkxIDAgMCAwIDIuOTY0IDAgMi4xMjMgMi4xMjMgMCAwIDAgLjAzOS0yLjk0NHptLTEuNTY2IDE1LjQ0M2wuNTU4LjE1N2EuOTQuOTQgMCAwIDEgLjQ0IDEuNTI1IDIyLjg1OCAyMi44NTggMCAwIDEtMTYuMzU4IDguODU2QzEyLjAyIDQ2LjkgMS4wMjQgMzcuMzk4LjA2NiAyNC43MTMtLjg5MiAxMi4wMjggOC41NTEuOTYzIDIxLjE1OC0uMDAxYS45MzIuOTMyIDAgMCAxIC45NjQuNjYyYy4yNzMuNzEyLjU2MyAxLjQ1Mi44OCAyLjE0Mi4yMjEuNTM1LjUwOCAxLjAzOS44NTMgMS41MDNhMTcuMjA4IDE3LjIwOCAwIDAgMCA0LjMzIDMuNDQ4YzIuODM2IDEuNzYxIDUuMjE2IDMuMjM2IDUuNDMzIDguMjgyYTEwLjQxMiAxMC40MTIgMCAwIDEtLjY2OSAzLjY4NGMtLjU3NCAxLjgyMi0xLjE0MiAzLjYzMy42MjQgNi4wNDQuODQyIDEuMTc4Ljk3NiAyLjUyNCAxLjExNSAzLjkyNi4yMTcgMi4xNzUuNDUxIDQuNTUzIDQuNTk3IDUuNTM5bC43MDIuMTY5em0tNy4xMjctNS41MDdjLS4xMTEtMS4xMzgtLjIxMi0yLjIzMS0uNzY5LTIuOTc3LTIuMzI0LTMuMTk2LTEuNjE2LTUuNDU2LS45MDMtNy43MTYuMzctLjk3NC41NjgtMi4wMDcuNTg2LTMuMDUtLjE3My00LjA1NC0yLjE2OC01LjI5My00LjU0OC02Ljc3M2ExOC44MDMgMTguODAzIDAgMCAxLTQuNzctMy44MjQgOC42NjEgOC42NjEgMCAwIDEtMS4xNDItMS45NDFjLS4yMzQtLjUxNS0uNDY4LTEuMTIxLS42OTctMS42ODJhMjAuOTY5IDIwLjk2OSAwIDAgMC02Ljk3MSAyLjA0QzMuMjIgOS4xMTktMS4wODEgMjEuOCA0LjAzOCAzMi4yOWM1LjEyIDEwLjQ5MSAxNy43MjIgMTQuODE5IDI4LjE0OCA5LjY2OGgtLjAxMWEyMS4xMSAyMS4xMSAwIDAgMCA2LjQ2NC00Ljk0NWMtNS4yMjItMS4zMjQtNS41LTQuMzE4LTUuNzc5LTcuMTIyem0tMy4wMjEgOS40MWEyLjY2NCAyLjY2NCAwIDAgMS0zLjc4My0uMDA2bC0uMDA2LS4wMDdhMi43MDMgMi43MDMgMCAwIDEgLjAwNi0zLjgwNiAyLjY2NiAyLjY2NiAwIDAgMSAxLjg5NS0uNzkxbC0uMDA2LS4wMDVhMi42NzYgMi42NzYgMCAwIDEgMS44OTEuNzg2IDIuNzE1IDIuNzE1IDAgMCAxIC4wMDkgMy44MjNsLS4wMDYuMDA2em0tMS4zMzQtMi40OThhLjgyMi44MjIgMCAwIDAtMS4xNjcuMDA0LjgzMy44MzMgMCAwIDAgLjAwNCAxLjE3My44Mi44MiAwIDAgMCAxLjE2Ni0uMDAzaC4wMjJhLjgzNi44MzYgMCAwIDAgLjIxOC0uNTYxLjg0Ljg0IDAgMCAwLS4yNDMtLjYxM3ptLTQuNDgzLTE3LjkwMmwtMi4yOTYtMS42ODJhLjk0OC45NDggMCAwIDEtLjE5OC0xLjMyLjkzNS45MzUgMCAwIDEgMS4zMTMtLjE5OWwyLjI5NiAxLjY4MmEuOTQ3Ljk0NyAwIDAgMSAuMTk3IDEuMzIuOTM0LjkzNCAwIDAgMS0xLjMxMi4xOTl6bS04LjE2OSAxMS4zNDRsLS4wNTYtLjA2MmEzLjA4NyAzLjA4NyAwIDAgMSAuMDU2LTQuMjk1IDMuMDQ1IDMuMDQ1IDAgMCAxIDQuMzI0IDBoLjAwNmEzLjA5NiAzLjA5NiAwIDAgMSAwIDQuMzU3IDMuMDQ5IDMuMDQ5IDAgMCAxLTQuMzMgMHptMy4wMDMtMy4wNDVhMS4xOTcgMS4xOTcgMCAwIDAtMS42NzEgMCAxLjIxNiAxLjIxNiAwIDAgMC0uMDM0IDEuNjgybC4wMzkuMDM0YTEuMTkzIDEuMTkzIDAgMCAwIDEuNjcyIDBsLS4wMDYtLjAzNGExLjIxIDEuMjEgMCAwIDAgMC0xLjY4MnptLjgxNC0xNy4xMzZhMi40MTIgMi40MTIgMCAwIDEtMy4zNzktLjA1OCAyLjQ1NiAyLjQ1NiAwIDAgMSAuMDAyLTMuNDU3bC4wMS0uMDExYTIuNDEzIDIuNDEzIDAgMCAxIDMuNDMuMDEzIDIuNDU0IDIuNDU0IDAgMCAxLS4wMDIgMy40NTdsLS4wNjEuMDU2ek0xOC40MTYgNy44NWEuNTY4LjU2OCAwIDAgMC0uODA4IDBsLjAyOC4wMjhhLjU2NC41NjQgMCAwIDAgMCAuODEzLjU1Ni41NTYgMCAwIDAgLjc4IDB2LS4wMjhhLjU3OC41NzggMCAwIDAgMC0uODEzem0tLjc5NyAzMS4wOTdjLjQxNy4zMS41MDYuOTAxLjE5OCAxLjMyYS45MzUuOTM1IDAgMCAxLTEuMzEyLjJsLTIuMjk2LTEuNjgzYS45NDcuOTQ3IDAgMCAxLS4xOTgtMS4zMi45MzQuOTM0IDAgMCAxIDEuMzEyLS4xOTlsMi4yOTYgMS42ODJ6bS00LjA4Ny0yMy4yMzNhLjkzNC45MzQgMCAwIDEtMS4wMzQtLjgyMmwtLjMzNC0yLjgzN2EuOTM1LjkzNSAwIDAgMSAuODE2LTEuMDQuOTMyLjkzMiAwIDAgMSAxLjAzNC44MjFsLjMzNCAyLjgzN2EuOTM2LjkzNiAwIDAgMS0uODE2IDEuMDQxem0tMS45MDMgNi4xMzdsLS4wMS4wMWMtLjk1Ljk1LTIuNDg1Ljk0NS0zLjQyOS0uMDFsLS4wMS0uMDExYTIuNDUgMi40NSAwIDAgMSAuMDEtMy40NDlsLjAxMS0uMDFhMi40MTMgMi40MTMgMCAwIDEgMy40MjguMDFsLjAxLjAxYTIuNDUgMi40NSAwIDAgMS0uMDEgMy40NXptLTEuMzEzLTIuMTExYS41NTUuNTU1IDAgMCAwLS43ODgtLjAwOC41NjMuNTYzIDAgMCAwLS4wMDguNzkzLjU1NS41NTUgMCAwIDAgLjc4OC4wMDguNTYyLjU2MiAwIDAgMCAuMDA4LS43OTN6bS0yLjQ4MiA1LjQxM2wuMzM0IDIuODM4YS45MzYuOTM2IDAgMCAxLS44MTYgMS4wNC45MzQuOTM0IDAgMCAxLTEuMDM0LS44MjJsLS4zMzQtMi44MzdhLjkzNS45MzUgMCAwIDEgLjgxNi0xLjA0LjkzMi45MzIgMCAwIDEgMS4wMzQuODIxek0zNC4zODcgNy44MWEyLjQxMiAyLjQxMiAwIDAgMS0zLjM3Ny0uMDU2bC0uMDAyLS4wMDJhMi40NTYgMi40NTYgMCAwIDEgLjAwMi0zLjQ1NyAyLjQxNSAyLjQxNSAwIDAgMSAzLjQ0MS4wMDIgMi40NTUgMi40NTUgMCAwIDEtLjAwMyAzLjQ1N2wtLjA2MS4wNTZ6bS0xLjIwNC0yLjExOGEuNTU0LjU1NCAwIDAgMC0uNzg3LS4wMi41NjMuNTYzIDAgMCAwLS4wMjEuNzkzLjU1Ni41NTYgMCAwIDAgLjc4IDB2LS4wMjhsLjAyOC4wMjhhLjU2My41NjMgMCAwIDAgMC0uNzczeiI+PC9wYXRoPjwvc3ZnPgo="

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(40)(false);
// imports


// module
exports.push([module.i, ":root{--main-color:#3b007f;--main-color-dark:#24124d;--secondary-color:#22eaaa;--light-color:#f3f7fc;--note-color:#fff0cc;--main-width:1280px;--blue:#0063ff;--indigo:#6610f2;--purple:#876cff;--pink:#ff3e7f;--red:#e93d3d;--orange:#ff6f00;--yellow:#f1da09;--green:#37ca37;--teal:#17cfbc;--cyan:#17a2b8;--white:#fff;--gray:#6c757d;--gray-dark:#343a40;--primary:#0063ff;--secondary:#ff6f00;--success:#37ca37;--info:#17cfbc;--warning:#f1da09;--danger:#e93d3d;--light:#adb5bd;--dark:#0c0c0c;--breakpoint-xs:32em;--breakpoint-sm:48em;--breakpoint-md:64em;--font-family-sans-serif:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-family-monospace:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}@font-face{font-family:Brandon Grotesque;src:url(\"/assets/fonts/BrandonGrotesque-Regular.eot\");src:url(\"/assets/fonts/BrandonGrotesque-Regular.eot?#iefix\") format(\"embedded-opentype\"),url(\"/assets/fonts/BrandonGrotesque-Regular.woff\") format(\"woff\"),url(\"/assets/fonts/BrandonGrotesque-Regular.ttf##{Brandon Grotesque}\") format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:Brandon Grotesque;src:url(\"/assets/fonts/BrandonGrotesque-Bold.eot\");src:url(\"/assets/fonts/BrandonGrotesque-Bold.eot?#iefix\") format(\"embedded-opentype\"),url(\"/assets/fonts/BrandonGrotesque-Bold.woff\") format(\"woff\"),url(\"/assets/fonts/BrandonGrotesque-Bold.ttf##{Brandon Grotesque}\") format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:NeutrifPro;src:url(\"/assets/fonts/neutrif-pro.eot\");src:url(\"/assets/fonts/neutrif-pro.eot%3F\") format(\"embedded-opentype\"),url(\"/assets/fonts/neutrif-pro.woff2\") format(\"woff2\"),url(\"/assets/fonts/neutrif-pro.woff\") format(\"woff\"),url(\"/assets/fonts/neutrif-pro.ttf\") format(\"truetype\"),url(\"/assets/fonts/neutrif-pro.svg\") format(\"svg\");font-weight:400;font-style:normal}@font-face{font-family:NeutrifPro;src:url(\"/assets/fonts/neutrif-pro-medium.eot\");src:url(\"/assets/fonts/neutrif-pro-medium.eot%3F\") format(\"embedded-opentype\"),url(\"/assets/fonts/neutrif-pro-medium.woff2\") format(\"woff2\"),url(\"/assets/fonts/neutrif-pro-medium.woff\") format(\"woff\"),url(\"/assets/fonts/neutrif-pro-medium.ttf\") format(\"truetype\"),url(\"/assets/fonts/neutrif-pro-medium.svg\") format(\"svg\");font-weight:500;font-style:normal}@font-face{font-family:NeutrifPro;src:url(\"/assets/fonts/neutrif-pro-bold.eot\");src:url(\"/assets/fonts/neutrif-pro-bold.eot%3F\") format(\"embedded-opentype\"),url(\"/assets/fonts/neutrif-pro-bold.woff2\") format(\"woff2\"),url(\"/assets/fonts/neutrif-pro-bold.woff\") format(\"woff\"),url(\"/assets/fonts/neutrif-pro-bold.ttf\") format(\"truetype\"),url(\"/assets/fonts/neutrif-pro-bold.svg\") format(\"svg\");font-weight:700;font-style:normal}@font-face{font-family:iconfont;src:url(\"/assets/icons/iconfont.eot\");src:url(\"/assets/icons/iconfont.eot%3F\") format(\"eot\"),url(\"/assets/icons/iconfont.woff2\") format(\"woff2\"),url(\"/assets/icons/iconfont.woff\") format(\"woff\"),url(\"/assets/icons/iconfont.ttf\") format(\"truetype\"),url(\"/assets/icons/iconfont.svg\") format(\"svg\")}@-webkit-keyframes wave{0%{background-position:0 0}to{background-position:-1600px 0}}@keyframes wave{0%{background-position:0 0}to{background-position:-1600px 0}}body{font-family:NeutrifPro,Brandon Grotesque,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:0;padding:0;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}a{color:var(--main-color);text-decoration:none;background-color:transparent;-webkit-text-decoration-skip:objects}a:hover{color:#004fcc;text-decoration:underline}h1{font-size:3.5em}h1,h2{font-weight:500;letter-spacing:-1px;margin:0;color:var(--main-color-dark)}h2{font-size:calc(1.25rem + 2vw);margin-bottom:.75em}h3{font-weight:500;letter-spacing:.025rem;font-size:1.5em;margin:0;color:var(--main-color-dark);margin-bottom:.25em}@media (max-width:32em){h2{font-size:1.8em}h3{font-size:1.2em}}.icon:before{font-family:iconfont;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;text-transform:none}.icon-arrow-down:before{content:\"\\E001\"}.icon-arrow-left:before{content:\"\\E002\"}.icon-arrow-right:before{content:\"\\E003\"}.icon-arrow-up:before{content:\"\\E004\"}.icon-cap-icon1:before{content:\"\\E005\"}.icon-cap-icon2:before{content:\"\\E006\"}.icon-cap-icon3:before{content:\"\\E007\"}.icon-cap-icon4:before{content:\"\\E008\"}.icon-cap-icon5:before{content:\"\\E009\"}.icon-cap-icon6:before{content:\"\\E00A\"}.icon-cap-icon7:before{content:\"\\E00B\"}.icon-car:before{content:\"\\E00C\"}.icon-caret:before{content:\"\\E00D\"}.icon-check:before{content:\"\\E00E\"}.icon-comment:before{content:\"\\E00F\"}.icon-comments:before{content:\"\\E010\"}.icon-download:before{content:\"\\E011\"}.icon-dribbble:before{content:\"\\E012\"}.icon-facebook:before{content:\"\\E013\"}.icon-github:before{content:\"\\E014\"}.icon-instagram:before{content:\"\\E015\"}.icon-internet:before{content:\"\\E016\"}.icon-linkedin:before{content:\"\\E017\"}.icon-map:before{content:\"\\E018\"}.icon-megaphone:before{content:\"\\E019\"}.icon-plus:before{content:\"\\E01A\"}.icon-send:before{content:\"\\E01B\"}.icon-signal:before{content:\"\\E01C\"}.icon-time:before{content:\"\\E01D\"}.icon-twitter:before{content:\"\\E01E\"}", ""]);

// exports


/***/ }),
/* 40 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ })
/******/ ]);
});
//# sourceMappingURL=static.954742d8.js.map