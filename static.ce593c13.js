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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
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
/* 3 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 4 */
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  padding-top: 80px;\n  margin-bottom: -100px;\n  z-index: 5;\n\n  span {\n    font-size: 2em;\n  }\n\n  h1 {\n    letter-spacing: 1px;\n    font-size: 4em;\n    margin-bottom: 2rem;\n    max-width: 800px;\n    color: white;\n  }\n\n  p {\n    max-width: 750px;\n    font-size: 1.4em;\n    line-height: 1.5;\n  }\n'], ['\n  position: relative;\n  padding-top: 80px;\n  margin-bottom: -100px;\n  z-index: 5;\n\n  span {\n    font-size: 2em;\n  }\n\n  h1 {\n    letter-spacing: 1px;\n    font-size: 4em;\n    margin-bottom: 2rem;\n    max-width: 800px;\n    color: white;\n  }\n\n  p {\n    max-width: 750px;\n    font-size: 1.4em;\n    line-height: 1.5;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  background-image: ', ';\n  text-align: ', ';\n  padding: 6em 0;\n'], ['\n  background-image: ', ';\n  text-align: ', ';\n  padding: 6em 0;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  max-width: var(--main-width);\n  margin: 0 auto;\n  padding: 0;\n  box-sizing: border-box;\n  text-align: ', ';\n'], ['\n  max-width: var(--main-width);\n  margin: 0 auto;\n  padding: 0;\n  box-sizing: border-box;\n  text-align: ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-wrap: column;\n  padding: 0;\n  margin: 0;\n\n  div {\n    width: 50%;\n    margin: 0;\n  }\n'], ['\n  display: flex;\n  flex-wrap: column;\n  padding: 0;\n  margin: 0;\n\n  div {\n    width: 50%;\n    margin: 0;\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  max-width: ', ';\n  margin: 0 auto;\n  line-height: 1.68;\n  font-size: 1.4em;\n  margin-bottom: 1em;\n  color: #444;\n'], ['\n  max-width: ', ';\n  margin: 0 auto;\n  line-height: 1.68;\n  font-size: 1.4em;\n  margin-bottom: 1em;\n  color: #444;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  margin: 4em 0;\n  max-width: 100%;\n  height: auto;\n  display: block;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n'], ['\n  margin: 4em 0;\n  max-width: 100%;\n  height: auto;\n  display: block;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  border-radius: 100%;\n  display: inline-block;\n  margin: 0 1em;\n'], ['\n  border-radius: 100%;\n  display: inline-block;\n  margin: 0 1em;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _styledComponents = __webpack_require__(3);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _cloudinaryReact = __webpack_require__(25);

var _celebrate = __webpack_require__(26);

var _celebrate2 = _interopRequireDefault(_celebrate);

var _header = __webpack_require__(27);

var _navigation = __webpack_require__(29);

var _navigation2 = _interopRequireDefault(_navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//

var HeroContent = _styledComponents2.default.div(_templateObject);

var grad = 'linear-gradient(to bottom, #f3f7fc 50%, #fff)';

var Section = _styledComponents2.default.section(_templateObject2, function (props) {
  return props.type === 'gradient' ? grad : '';
}, function (props) {
  return props.textAlign || 'center';
});

var Inner = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.textAlign || 'left';
});

var Double = (0, _styledComponents2.default)(Section)(_templateObject4);

var Text = _styledComponents2.default.p(_templateObject5, function (props) {
  return props.maxWidth || '100%';
});

var Img = (0, _styledComponents2.default)(_cloudinaryReact.Image)(_templateObject6);

var ProfileImg = (0, _styledComponents2.default)(Img)(_templateObject7);

var Home = function (_React$PureComponent) {
  _inherits(Home, _React$PureComponent);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_navigation2.default, null),
        _react2.default.createElement(
          _header.HeroHeader,
          null,
          _react2.default.createElement(
            HeroContent,
            null,
            _react2.default.createElement(
              'h1',
              null,
              'We are set to make a difference in the tech industry'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Technology is changing how people interact. How products and services are imagined, created and delivered. It is transforming and reshaping businesses, economies and life itself. Allowing us to connect people with businesses in a innovative and groundbreaking way.'
            )
          )
        ),
        _react2.default.createElement(
          Section,
          null,
          _react2.default.createElement(
            Inner,
            { textAlign: 'center' },
            _react2.default.createElement(
              'h2',
              null,
              'Why we\'re here'
            ),
            _react2.default.createElement(
              Text,
              { maxWidth: '1000px' },
              'Ok. First of all, welcome. We know you are busy so we\'ll get straight to the point. You have found Crip in Tech.'
            ),
            _react2.default.createElement(
              Text,
              { maxWidth: '1000px' },
              'Crip in Tech is the culmination of years spent working passionately within tech. Over time, this passion blossomed into this consultant company that we hope will touch nearly every corner of our lives and others.',
              ' '
            ),
            _react2.default.createElement(Img, { cloudName: 'crip', publicId: 'Company/People/Crips/one-strong-crew.jpg' })
          )
        ),
        _react2.default.createElement(
          Section,
          { type: 'gradient' },
          _react2.default.createElement(
            Inner,
            null,
            _react2.default.createElement(
              Double,
              { textAlign: 'left' },
              _react2.default.createElement(
                Inner,
                { maxWidth: '20%' },
                _react2.default.createElement(
                  'h2',
                  null,
                  'Two hearts, one beat.'
                ),
                _react2.default.createElement(
                  Text,
                  null,
                  'We are two professional crips who imagine a world where people wake up every day inspired to go to work and return home at the end of the day feeling fulfilled by the work they do, feeling that they have contributed to something greater than themselves.'
                ),
                _react2.default.createElement(
                  Text,
                  null,
                  'By harnessing the powers of disrupting culture, technology and incredible people, we hack creative crips and make them shine.'
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
                Inner,
                { textAlign: 'center' },
                _react2.default.createElement(
                  ProfileImg,
                  {
                    cloudName: 'crip',
                    publicId: 'Company/People/Management/Viktor_Johansson.jpg',
                    alt: 'Viktor Johansson'
                  },
                  _react2.default.createElement(_cloudinaryReact.Transformation, { width: '250', crop: 'scale' })
                ),
                _react2.default.createElement(
                  ProfileImg,
                  {
                    cloudName: 'crip',
                    publicId: 'Company/People/Management/Johnie_Hjelm.jpg',
                    alt: 'Johnie Hjelm'
                  },
                  _react2.default.createElement(_cloudinaryReact.Transformation, { width: '250', crop: 'scale' })
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          Section,
          null,
          _react2.default.createElement(
            Inner,
            null,
            _react2.default.createElement(
              Double,
              null,
              _react2.default.createElement(
                Inner,
                null,
                _react2.default.createElement('img', { src: _celebrate2.default, alt: 'Celebrate' })
              ),
              _react2.default.createElement(
                Inner,
                { style: { paddingLeft: '2em' } },
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
                  'We approach life & work with an unique perspective.'
                ),
                _react2.default.createElement(
                  'h3',
                  null,
                  'Be intellectually honest'
                ),
                _react2.default.createElement(
                  Text,
                  null,
                  'Everyone, from our mentors to our CEO, is upfront with feedback, direct, honest, and without ego.'
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
          )
        )
      );
    }
  }]);

  return Home;
}(_react2.default.PureComponent);

exports.default = (0, _reactStatic.withRouteData)(Home);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _htmr = __webpack_require__(8);

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
/* 8 */
/***/ (function(module, exports) {

module.exports = require("htmr");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var posts = _ref.posts;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'It\'s blog time.'
    ),
    _react2.default.createElement('br', null),
    'All Posts:',
    _react2.default.createElement(
      'ul',
      null,
      posts.map(function (post) {
        return _react2.default.createElement(
          'li',
          { key: post.slug },
          _react2.default.createElement(
            _reactStatic.Link,
            { to: '/blog/post/' + post.slug + '/' },
            post.title
          )
        );
      })
    )
  );
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _htmr = __webpack_require__(8);

var _htmr2 = _interopRequireDefault(_htmr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var post = _ref.post;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactStatic.Link,
      { to: '/blog/' },
      '<',
      ' Back'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h3',
      null,
      post.title
    ),
    (0, _htmr2.default)(post.contents)
  );
});

/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(13);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(14);

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
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactHotLoader = __webpack_require__(15);

var _reactStaticRoutes = __webpack_require__(16);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

__webpack_require__(31);

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
      _react2.default.createElement(_reactStatic.Head, {
        titleTemplate: title + ' - %s',
        defaultTitle: title + ' - ' + slogan
      }),
      _react2.default.createElement(
        'div',
        { className: 'content' },
        _react2.default.createElement(_reactStaticRoutes2.default, null)
      )
    )
  );
});

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(17);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(18);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(19);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(20);

var _reactUniversalComponent = __webpack_require__(21);

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
  file: '/home/travis/build/crip/cripintech/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 6)), (0, _importCss3.default)('src/containers/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(6);
  },
  chunkName: function chunkName() {
    return 'src/containers/Home';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/About',
  file: '/home/travis/build/crip/cripintech/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 7)), (0, _importCss3.default)('src/containers/About', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/About');
  },
  resolve: function resolve() {
    return /*require.resolve*/(7);
  },
  chunkName: function chunkName() {
    return 'src/containers/About';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Blog',
  file: '/home/travis/build/crip/cripintech/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 9)), (0, _importCss3.default)('src/containers/Blog', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Blog');
  },
  resolve: function resolve() {
    return /*require.resolve*/(9);
  },
  chunkName: function chunkName() {
    return 'src/containers/Blog';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Post',
  file: '/home/travis/build/crip/cripintech/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 10)), (0, _importCss3.default)('src/containers/Post', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Post');
  },
  resolve: function resolve() {
    return /*require.resolve*/(10);
  },
  chunkName: function chunkName() {
    return 'src/containers/Post';
  }
}), universalOptions);
var t_4 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/404',
  file: '/home/travis/build/crip/cripintech/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 11)), (0, _importCss3.default)('src/containers/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(11);
  },
  chunkName: function chunkName() {
    return 'src/containers/404';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2, t_3, t_4];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 4

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
/* 17 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(22);

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

var _reportChunks = __webpack_require__(23);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(24);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(4);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(4);

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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

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
/* 24 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("cloudinary-react");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/celebrate.010fe00d.svg";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeroHeader = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  overflow: hidden;\n'], ['\n  position: relative;\n  overflow: hidden;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  background-color: var(--main-color-dark);\n  color: white;\n'], ['\n  background-color: var(--main-color-dark);\n  color: white;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  max-width: var(--main-width);\n  margin: 0 auto;\n  padding: 50px 0;\n'], ['\n  max-width: var(--main-width);\n  margin: 0 auto;\n  padding: 50px 0;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  position: relative;\n  top: -1px;\n  width: 101%;\n  height: auto;\n'], ['\n  position: relative;\n  top: -1px;\n  width: 101%;\n  height: auto;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _waves = __webpack_require__(28);

var _waves2 = _interopRequireDefault(_waves);

var _styledComponents = __webpack_require__(3);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderWrapper = _styledComponents2.default.header(_templateObject);

var Header = _styledComponents2.default.div(_templateObject2);

var Inner = _styledComponents2.default.div(_templateObject3);

var HeaderWavesLarge = _styledComponents2.default.img(_templateObject4);

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
        null,
        children
      )
    ),
    _react2.default.createElement(HeaderWavesLarge, { src: _waves2.default })
  );
};

exports.HeroHeader = HeroHeader;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNDQwIDE4OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTQ0MCAxODk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMjJFQUFBO30KCS5zdDF7ZmlsbDojM0IwMDdGO30KCS5zdDJ7ZmlsbDojMjQxMjREO30KPC9zdHlsZT4KPHRpdGxlPndhdmVzPC90aXRsZT4KPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CjxnIGlkPSJQYWdlLTMiPgoJPGcgaWQ9ImhvbWUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAtMzkzLjAwMDAwMCkiPgoJCTxnIGlkPSJiZy1jb2xvcnMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNDQuMDAwMDAwLCAwLjAwMDAwMCkiPgoJCQk8ZyBpZD0id2F2ZXMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI5MS4wMDAwMDAsIDM5Mi41MDAwMDApIj4KCQkJCTxwYXRoIGlkPSJSZWN0YW5nbGUtMiIgY2xhc3M9InN0MCIgZD0iTTExNDcuNyw1LjljMCwwLTg3OC4xLDE3LjMtOTEzLjMsMjAuM0MyMjYsMjcsMTA4LjIsMTAuMSwxMTQuOCwxMS40CgkJCQkJYzE4NC43LDM3LjEsNDExLjYsMTI3LjUsNTM3LjgsMTQzLjRjMjgyLjQsMzUuNSw1NDkuMS04Mi43LDU0OS4xLTgyLjdMMTE0Ny43LDUuOXoiLz4KCQkJCTxwYXRoIGlkPSJSZWN0YW5nbGUtMl8xXyIgY2xhc3M9InN0MSIgZD0iTTE0OTQsMC41TDY0NC42LDAuOWMwLDAtMTA5LjcsNy40LTQzLjUsMjcuMWMxMzAuNywzOC44LDI1OC43LDgyLjIsMzQyLjUsOTIuNwoJCQkJCWMyNzkuNCwzNS4yLDU0My45LTgwLjMsNTQ5LjQtODIuN2MwLjEsMCwwLjctMC40LDAuNy0wLjRMMTQ5NCwwLjV6Ii8+CgkJCQk8cGF0aCBpZD0iUmVjdGFuZ2xlLTJfMl8iIGNsYXNzPSJzdDIiIGQ9Ik00My42LDAuNWwxMzU3LjMsMGw0OC44LDBjMCwwLTQzLjcsMS40LTUxLjksMS44Yy03My43LDIuOS0xODQuNSwxMS43LTMxMSwzNy4xCgkJCQkJQzkwMi4yLDc2LjQsNjc1LjMsMTY2LjksNTQ5LjEsMTgyLjhjLTIwNi4yLDI2LTQwNC4xLTMwLjEtNDk1LjgtNjIuM0MxOS40LDEwOC43LDAsMTAwLjEsMCwxMDAuMUw0My42LDAuNXoiLz4KCQkJPC9nPgoJCTwvZz4KCTwvZz4KPC9nPgo8L3N2Zz4K"

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 10;\n'], ['\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 10;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  padding: 1.5em 2em;\n'], ['\n  padding: 1.5em 2em;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _styledComponents = __webpack_require__(3);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _logo = __webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NavigationWrap = _styledComponents2.default.div(_templateObject);

var Inner = _styledComponents2.default.div(_templateObject2);

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
        { role: 'banner' },
        _react2.default.createElement(
          Inner,
          null,
          _react2.default.createElement(_logo.LogoFull, null)
        )
      );
    }
  }]);

  return Navigation;
}(_react.Component);

exports.default = (0, _reactStatic.withSiteData)(Navigation);

/***/ }),
/* 30 */
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)(false);
// imports


// module
exports.push([module.i, ":root{--main-color:#3b007f;--main-color-dark:#24124d;--secondary-color:#22eaaa;--note-color:#fff0cc;--main-width:1280px}@font-face{font-family:Brandon Grotesque;src:url(\"/assets/fonts/BrandonGrotesque-Regular.eot\");src:url(\"/assets/fonts/BrandonGrotesque-Regular.eot?#iefix\") format(\"embedded-opentype\"),url(\"/assets/fonts/BrandonGrotesque-Regular.woff\") format(\"woff\"),url(\"/assets/fonts/BrandonGrotesque-Regular.ttf##{Brandon Grotesque}\") format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:Brandon Grotesque;src:url(\"/assets/fonts/BrandonGrotesque-Bold.eot\");src:url(\"/assets/fonts/BrandonGrotesque-Bold.eot?#iefix\") format(\"embedded-opentype\"),url(\"/assets/fonts/BrandonGrotesque-Bold.woff\") format(\"woff\"),url(\"/assets/fonts/BrandonGrotesque-Bold.ttf##{Brandon Grotesque}\") format(\"truetype\");font-weight:700;font-style:normal}body{font-family:Brandon Grotesque,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:0;padding:0}h1{font-size:3.5em}h1,h2{font-family:Playfair Display,serif;font-weight:900;letter-spacing:.025rem;margin:0;color:var(--main-color-dark)}h2{font-size:2.8em;margin-bottom:.75em}h3{font-weight:900;letter-spacing:.025rem;font-size:1.8em;margin:0;color:var(--main-color-dark);margin-bottom:.25em}.logo-text{opacity:0;-webkit-transform:translateX(-25px);-ms-transform:translateX(-25px);transform:translateX(-25px);-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;-o-transition-property:transform,opacity;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform;-webkit-transition-duration:.25s;-o-transition-duration:.25s;transition-duration:.25s;-webkit-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out}", ""]);

// exports


/***/ }),
/* 32 */
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
//# sourceMappingURL=static.ce593c13.js.map