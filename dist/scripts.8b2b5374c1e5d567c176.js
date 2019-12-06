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
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 270);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(71);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createTypeAnnotationBasedOnTypeof = exports.removeTypeDuplicates = exports.createUnionTypeAnnotation = exports.valueToNode = exports.toBlock = exports.toExpression = exports.toStatement = exports.toBindingIdentifierName = exports.toIdentifier = exports.toKeyAlias = exports.toSequenceExpression = exports.toComputedKey = exports.isNodesEquivalent = exports.isImmutable = exports.isScope = exports.isSpecifierDefault = exports.isVar = exports.isBlockScoped = exports.isLet = exports.isValidIdentifier = exports.isReferenced = exports.isBinding = exports.getOuterBindingIdentifiers = exports.getBindingIdentifiers = exports.TYPES = exports.react = exports.DEPRECATED_KEYS = exports.BUILDER_KEYS = exports.NODE_FIELDS = exports.ALIAS_KEYS = exports.VISITOR_KEYS = exports.NOT_LOCAL_BINDING = exports.BLOCK_SCOPED_SYMBOL = exports.INHERIT_KEYS = exports.UNARY_OPERATORS = exports.STRING_UNARY_OPERATORS = exports.NUMBER_UNARY_OPERATORS = exports.BOOLEAN_UNARY_OPERATORS = exports.BINARY_OPERATORS = exports.NUMBER_BINARY_OPERATORS = exports.BOOLEAN_BINARY_OPERATORS = exports.COMPARISON_BINARY_OPERATORS = exports.EQUALITY_BINARY_OPERATORS = exports.BOOLEAN_NUMBER_BINARY_OPERATORS = exports.UPDATE_OPERATORS = exports.LOGICAL_OPERATORS = exports.COMMENT_KEYS = exports.FOR_INIT_KEYS = exports.FLATTENABLE_KEYS = exports.STATEMENT_OR_BLOCK_KEYS = undefined;

var _getOwnPropertySymbols = __webpack_require__(118);

var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);

var _getIterator2 = __webpack_require__(23);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _keys = __webpack_require__(67);

var _keys2 = _interopRequireDefault(_keys);

var _stringify = __webpack_require__(46);

var _stringify2 = _interopRequireDefault(_stringify);

var _constants = __webpack_require__(47);

Object.defineProperty(exports, "STATEMENT_OR_BLOCK_KEYS", {
  enumerable: true,
  get: function get() {
    return _constants.STATEMENT_OR_BLOCK_KEYS;
  }
});
Object.defineProperty(exports, "FLATTENABLE_KEYS", {
  enumerable: true,
  get: function get() {
    return _constants.FLATTENABLE_KEYS;
  }
});
Object.defineProperty(exports, "FOR_INIT_KEYS", {
  enumerable: true,
  get: function get() {
    return _constants.FOR_INIT_KEYS;
  }
});
Object.defineProperty(exports, "COMMENT_KEYS", {
  enumerable: true,
  get: function get() {
    return _constants.COMMENT_KEYS;
  }
});
Object.defineProperty(exports, "LOGICAL_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.LOGICAL_OPERATORS;
  }
});
Object.defineProperty(exports, "UPDATE_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.UPDATE_OPERATORS;
  }
});
Object.defineProperty(exports, "BOOLEAN_NUMBER_BINARY_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.BOOLEAN_NUMBER_BINARY_OPERATORS;
  }
});
Object.defineProperty(exports, "EQUALITY_BINARY_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.EQUALITY_BINARY_OPERATORS;
  }
});
Object.defineProperty(exports, "COMPARISON_BINARY_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.COMPARISON_BINARY_OPERATORS;
  }
});
Object.defineProperty(exports, "BOOLEAN_BINARY_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.BOOLEAN_BINARY_OPERATORS;
  }
});
Object.defineProperty(exports, "NUMBER_BINARY_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.NUMBER_BINARY_OPERATORS;
  }
});
Object.defineProperty(exports, "BINARY_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.BINARY_OPERATORS;
  }
});
Object.defineProperty(exports, "BOOLEAN_UNARY_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.BOOLEAN_UNARY_OPERATORS;
  }
});
Object.defineProperty(exports, "NUMBER_UNARY_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.NUMBER_UNARY_OPERATORS;
  }
});
Object.defineProperty(exports, "STRING_UNARY_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.STRING_UNARY_OPERATORS;
  }
});
Object.defineProperty(exports, "UNARY_OPERATORS", {
  enumerable: true,
  get: function get() {
    return _constants.UNARY_OPERATORS;
  }
});
Object.defineProperty(exports, "INHERIT_KEYS", {
  enumerable: true,
  get: function get() {
    return _constants.INHERIT_KEYS;
  }
});
Object.defineProperty(exports, "BLOCK_SCOPED_SYMBOL", {
  enumerable: true,
  get: function get() {
    return _constants.BLOCK_SCOPED_SYMBOL;
  }
});
Object.defineProperty(exports, "NOT_LOCAL_BINDING", {
  enumerable: true,
  get: function get() {
    return _constants.NOT_LOCAL_BINDING;
  }
});
exports.is = is;
exports.isType = isType;
exports.validate = validate;
exports.shallowEqual = shallowEqual;
exports.appendToMemberExpression = appendToMemberExpression;
exports.prependToMemberExpression = prependToMemberExpression;
exports.ensureBlock = ensureBlock;
exports.clone = clone;
exports.cloneWithoutLoc = cloneWithoutLoc;
exports.cloneDeep = cloneDeep;
exports.buildMatchMemberExpression = buildMatchMemberExpression;
exports.removeComments = removeComments;
exports.inheritsComments = inheritsComments;
exports.inheritTrailingComments = inheritTrailingComments;
exports.inheritLeadingComments = inheritLeadingComments;
exports.inheritInnerComments = inheritInnerComments;
exports.inherits = inherits;
exports.assertNode = assertNode;
exports.isNode = isNode;
exports.traverseFast = traverseFast;
exports.removeProperties = removeProperties;
exports.removePropertiesDeep = removePropertiesDeep;

var _retrievers = __webpack_require__(68);

Object.defineProperty(exports, "getBindingIdentifiers", {
  enumerable: true,
  get: function get() {
    return _retrievers.getBindingIdentifiers;
  }
});
Object.defineProperty(exports, "getOuterBindingIdentifiers", {
  enumerable: true,
  get: function get() {
    return _retrievers.getOuterBindingIdentifiers;
  }
});

var _validators = __webpack_require__(152);

Object.defineProperty(exports, "isBinding", {
  enumerable: true,
  get: function get() {
    return _validators.isBinding;
  }
});
Object.defineProperty(exports, "isReferenced", {
  enumerable: true,
  get: function get() {
    return _validators.isReferenced;
  }
});
Object.defineProperty(exports, "isValidIdentifier", {
  enumerable: true,
  get: function get() {
    return _validators.isValidIdentifier;
  }
});
Object.defineProperty(exports, "isLet", {
  enumerable: true,
  get: function get() {
    return _validators.isLet;
  }
});
Object.defineProperty(exports, "isBlockScoped", {
  enumerable: true,
  get: function get() {
    return _validators.isBlockScoped;
  }
});
Object.defineProperty(exports, "isVar", {
  enumerable: true,
  get: function get() {
    return _validators.isVar;
  }
});
Object.defineProperty(exports, "isSpecifierDefault", {
  enumerable: true,
  get: function get() {
    return _validators.isSpecifierDefault;
  }
});
Object.defineProperty(exports, "isScope", {
  enumerable: true,
  get: function get() {
    return _validators.isScope;
  }
});
Object.defineProperty(exports, "isImmutable", {
  enumerable: true,
  get: function get() {
    return _validators.isImmutable;
  }
});
Object.defineProperty(exports, "isNodesEquivalent", {
  enumerable: true,
  get: function get() {
    return _validators.isNodesEquivalent;
  }
});

var _converters = __webpack_require__(163);

Object.defineProperty(exports, "toComputedKey", {
  enumerable: true,
  get: function get() {
    return _converters.toComputedKey;
  }
});
Object.defineProperty(exports, "toSequenceExpression", {
  enumerable: true,
  get: function get() {
    return _converters.toSequenceExpression;
  }
});
Object.defineProperty(exports, "toKeyAlias", {
  enumerable: true,
  get: function get() {
    return _converters.toKeyAlias;
  }
});
Object.defineProperty(exports, "toIdentifier", {
  enumerable: true,
  get: function get() {
    return _converters.toIdentifier;
  }
});
Object.defineProperty(exports, "toBindingIdentifierName", {
  enumerable: true,
  get: function get() {
    return _converters.toBindingIdentifierName;
  }
});
Object.defineProperty(exports, "toStatement", {
  enumerable: true,
  get: function get() {
    return _converters.toStatement;
  }
});
Object.defineProperty(exports, "toExpression", {
  enumerable: true,
  get: function get() {
    return _converters.toExpression;
  }
});
Object.defineProperty(exports, "toBlock", {
  enumerable: true,
  get: function get() {
    return _converters.toBlock;
  }
});
Object.defineProperty(exports, "valueToNode", {
  enumerable: true,
  get: function get() {
    return _converters.valueToNode;
  }
});

var _flow = __webpack_require__(173);

Object.defineProperty(exports, "createUnionTypeAnnotation", {
  enumerable: true,
  get: function get() {
    return _flow.createUnionTypeAnnotation;
  }
});
Object.defineProperty(exports, "removeTypeDuplicates", {
  enumerable: true,
  get: function get() {
    return _flow.removeTypeDuplicates;
  }
});
Object.defineProperty(exports, "createTypeAnnotationBasedOnTypeof", {
  enumerable: true,
  get: function get() {
    return _flow.createTypeAnnotationBasedOnTypeof;
  }
});

var _toFastProperties = __webpack_require__(174);

var _toFastProperties2 = _interopRequireDefault(_toFastProperties);

var _clone = __webpack_require__(175);

var _clone2 = _interopRequireDefault(_clone);

var _uniq = __webpack_require__(242);

var _uniq2 = _interopRequireDefault(_uniq);

__webpack_require__(256);

var _definitions = __webpack_require__(5);

var _react2 = __webpack_require__(263);

var _react = _interopRequireWildcard(_react2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var t = exports;

function registerType(type) {
  var is = t["is" + type];
  if (!is) {
    is = t["is" + type] = function (node, opts) {
      return t.is(type, node, opts);
    };
  }

  t["assert" + type] = function (node, opts) {
    opts = opts || {};
    if (!is(node, opts)) {
      throw new Error("Expected type " + (0, _stringify2.default)(type) + " with option " + (0, _stringify2.default)(opts));
    }
  };
}

exports.VISITOR_KEYS = _definitions.VISITOR_KEYS;
exports.ALIAS_KEYS = _definitions.ALIAS_KEYS;
exports.NODE_FIELDS = _definitions.NODE_FIELDS;
exports.BUILDER_KEYS = _definitions.BUILDER_KEYS;
exports.DEPRECATED_KEYS = _definitions.DEPRECATED_KEYS;
exports.react = _react;


for (var type in t.VISITOR_KEYS) {
  registerType(type);
}

t.FLIPPED_ALIAS_KEYS = {};

(0, _keys2.default)(t.ALIAS_KEYS).forEach(function (type) {
  t.ALIAS_KEYS[type].forEach(function (alias) {
    var types = t.FLIPPED_ALIAS_KEYS[alias] = t.FLIPPED_ALIAS_KEYS[alias] || [];
    types.push(type);
  });
});

(0, _keys2.default)(t.FLIPPED_ALIAS_KEYS).forEach(function (type) {
  t[type.toUpperCase() + "_TYPES"] = t.FLIPPED_ALIAS_KEYS[type];
  registerType(type);
});

var TYPES = exports.TYPES = (0, _keys2.default)(t.VISITOR_KEYS).concat((0, _keys2.default)(t.FLIPPED_ALIAS_KEYS)).concat((0, _keys2.default)(t.DEPRECATED_KEYS));

function is(type, node, opts) {
  if (!node) return false;

  var matches = isType(node.type, type);
  if (!matches) return false;

  if (typeof opts === "undefined") {
    return true;
  } else {
    return t.shallowEqual(node, opts);
  }
}

function isType(nodeType, targetType) {
  if (nodeType === targetType) return true;

  if (t.ALIAS_KEYS[targetType]) return false;

  var aliases = t.FLIPPED_ALIAS_KEYS[targetType];
  if (aliases) {
    if (aliases[0] === nodeType) return true;

    for (var _iterator = aliases, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var alias = _ref;

      if (nodeType === alias) return true;
    }
  }

  return false;
}

(0, _keys2.default)(t.BUILDER_KEYS).forEach(function (type) {
  var keys = t.BUILDER_KEYS[type];

  function builder() {
    if (arguments.length > keys.length) {
      throw new Error("t." + type + ": Too many arguments passed. Received " + arguments.length + " but can receive " + ("no more than " + keys.length));
    }

    var node = {};
    node.type = type;

    var i = 0;

    for (var _iterator2 = keys, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
      var _ref2;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref2 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref2 = _i2.value;
      }

      var _key = _ref2;

      var field = t.NODE_FIELDS[type][_key];

      var arg = arguments[i++];
      if (arg === undefined) arg = (0, _clone2.default)(field.default);

      node[_key] = arg;
    }

    for (var key in node) {
      validate(node, key, node[key]);
    }

    return node;
  }

  t[type] = builder;
  t[type[0].toLowerCase() + type.slice(1)] = builder;
});

var _loop = function _loop(_type) {
  var newType = t.DEPRECATED_KEYS[_type];

  function proxy(fn) {
    return function () {
      console.trace("The node type " + _type + " has been renamed to " + newType);
      return fn.apply(this, arguments);
    };
  }

  t[_type] = t[_type[0].toLowerCase() + _type.slice(1)] = proxy(t[newType]);
  t["is" + _type] = proxy(t["is" + newType]);
  t["assert" + _type] = proxy(t["assert" + newType]);
};

for (var _type in t.DEPRECATED_KEYS) {
  _loop(_type);
}

function validate(node, key, val) {
  if (!node) return;

  var fields = t.NODE_FIELDS[node.type];
  if (!fields) return;

  var field = fields[key];
  if (!field || !field.validate) return;
  if (field.optional && val == null) return;

  field.validate(node, key, val);
}

function shallowEqual(actual, expected) {
  var keys = (0, _keys2.default)(expected);

  for (var _iterator3 = keys, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);;) {
    var _ref3;

    if (_isArray3) {
      if (_i3 >= _iterator3.length) break;
      _ref3 = _iterator3[_i3++];
    } else {
      _i3 = _iterator3.next();
      if (_i3.done) break;
      _ref3 = _i3.value;
    }

    var key = _ref3;

    if (actual[key] !== expected[key]) {
      return false;
    }
  }

  return true;
}

function appendToMemberExpression(member, append, computed) {
  member.object = t.memberExpression(member.object, member.property, member.computed);
  member.property = append;
  member.computed = !!computed;
  return member;
}

function prependToMemberExpression(member, prepend) {
  member.object = t.memberExpression(prepend, member.object);
  return member;
}

function ensureBlock(node) {
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "body";

  return node[key] = t.toBlock(node[key], node);
}

function clone(node) {
  if (!node) return node;
  var newNode = {};
  for (var key in node) {
    if (key[0] === "_") continue;
    newNode[key] = node[key];
  }
  return newNode;
}

function cloneWithoutLoc(node) {
  var newNode = clone(node);
  delete newNode.loc;
  return newNode;
}

function cloneDeep(node) {
  if (!node) return node;
  var newNode = {};

  for (var key in node) {
    if (key[0] === "_") continue;

    var val = node[key];

    if (val) {
      if (val.type) {
        val = t.cloneDeep(val);
      } else if (Array.isArray(val)) {
        val = val.map(t.cloneDeep);
      }
    }

    newNode[key] = val;
  }

  return newNode;
}

function buildMatchMemberExpression(match, allowPartial) {
  var parts = match.split(".");

  return function (member) {
    if (!t.isMemberExpression(member)) return false;

    var search = [member];
    var i = 0;

    while (search.length) {
      var node = search.shift();

      if (allowPartial && i === parts.length) {
        return true;
      }

      if (t.isIdentifier(node)) {
        if (parts[i] !== node.name) return false;
      } else if (t.isStringLiteral(node)) {
        if (parts[i] !== node.value) return false;
      } else if (t.isMemberExpression(node)) {
        if (node.computed && !t.isStringLiteral(node.property)) {
          return false;
        } else {
          search.push(node.object);
          search.push(node.property);
          continue;
        }
      } else {
        return false;
      }

      if (++i > parts.length) {
        return false;
      }
    }

    return true;
  };
}

function removeComments(node) {
  for (var _iterator4 = t.COMMENT_KEYS, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4);;) {
    var _ref4;

    if (_isArray4) {
      if (_i4 >= _iterator4.length) break;
      _ref4 = _iterator4[_i4++];
    } else {
      _i4 = _iterator4.next();
      if (_i4.done) break;
      _ref4 = _i4.value;
    }

    var key = _ref4;

    delete node[key];
  }
  return node;
}

function inheritsComments(child, parent) {
  inheritTrailingComments(child, parent);
  inheritLeadingComments(child, parent);
  inheritInnerComments(child, parent);
  return child;
}

function inheritTrailingComments(child, parent) {
  _inheritComments("trailingComments", child, parent);
}

function inheritLeadingComments(child, parent) {
  _inheritComments("leadingComments", child, parent);
}

function inheritInnerComments(child, parent) {
  _inheritComments("innerComments", child, parent);
}

function _inheritComments(key, child, parent) {
  if (child && parent) {
    child[key] = (0, _uniq2.default)([].concat(child[key], parent[key]).filter(Boolean));
  }
}

function inherits(child, parent) {
  if (!child || !parent) return child;

  for (var _iterator5 = t.INHERIT_KEYS.optional, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : (0, _getIterator3.default)(_iterator5);;) {
    var _ref5;

    if (_isArray5) {
      if (_i5 >= _iterator5.length) break;
      _ref5 = _iterator5[_i5++];
    } else {
      _i5 = _iterator5.next();
      if (_i5.done) break;
      _ref5 = _i5.value;
    }

    var _key2 = _ref5;

    if (child[_key2] == null) {
      child[_key2] = parent[_key2];
    }
  }

  for (var key in parent) {
    if (key[0] === "_") child[key] = parent[key];
  }

  for (var _iterator6 = t.INHERIT_KEYS.force, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : (0, _getIterator3.default)(_iterator6);;) {
    var _ref6;

    if (_isArray6) {
      if (_i6 >= _iterator6.length) break;
      _ref6 = _iterator6[_i6++];
    } else {
      _i6 = _iterator6.next();
      if (_i6.done) break;
      _ref6 = _i6.value;
    }

    var _key3 = _ref6;

    child[_key3] = parent[_key3];
  }

  t.inheritsComments(child, parent);

  return child;
}

function assertNode(node) {
  if (!isNode(node)) {
    throw new TypeError("Not a valid node " + (node && node.type));
  }
}

function isNode(node) {
  return !!(node && _definitions.VISITOR_KEYS[node.type]);
}

(0, _toFastProperties2.default)(t);
(0, _toFastProperties2.default)(t.VISITOR_KEYS);

function traverseFast(node, enter, opts) {
  if (!node) return;

  var keys = t.VISITOR_KEYS[node.type];
  if (!keys) return;

  opts = opts || {};
  enter(node, opts);

  for (var _iterator7 = keys, _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : (0, _getIterator3.default)(_iterator7);;) {
    var _ref7;

    if (_isArray7) {
      if (_i7 >= _iterator7.length) break;
      _ref7 = _iterator7[_i7++];
    } else {
      _i7 = _iterator7.next();
      if (_i7.done) break;
      _ref7 = _i7.value;
    }

    var key = _ref7;

    var subNode = node[key];

    if (Array.isArray(subNode)) {
      for (var _iterator8 = subNode, _isArray8 = Array.isArray(_iterator8), _i8 = 0, _iterator8 = _isArray8 ? _iterator8 : (0, _getIterator3.default)(_iterator8);;) {
        var _ref8;

        if (_isArray8) {
          if (_i8 >= _iterator8.length) break;
          _ref8 = _iterator8[_i8++];
        } else {
          _i8 = _iterator8.next();
          if (_i8.done) break;
          _ref8 = _i8.value;
        }

        var _node = _ref8;

        traverseFast(_node, enter, opts);
      }
    } else {
      traverseFast(subNode, enter, opts);
    }
  }
}

var CLEAR_KEYS = ["tokens", "start", "end", "loc", "raw", "rawValue"];

var CLEAR_KEYS_PLUS_COMMENTS = t.COMMENT_KEYS.concat(["comments"]).concat(CLEAR_KEYS);

function removeProperties(node, opts) {
  opts = opts || {};
  var map = opts.preserveComments ? CLEAR_KEYS : CLEAR_KEYS_PLUS_COMMENTS;
  for (var _iterator9 = map, _isArray9 = Array.isArray(_iterator9), _i9 = 0, _iterator9 = _isArray9 ? _iterator9 : (0, _getIterator3.default)(_iterator9);;) {
    var _ref9;

    if (_isArray9) {
      if (_i9 >= _iterator9.length) break;
      _ref9 = _iterator9[_i9++];
    } else {
      _i9 = _iterator9.next();
      if (_i9.done) break;
      _ref9 = _i9.value;
    }

    var _key4 = _ref9;

    if (node[_key4] != null) node[_key4] = undefined;
  }

  for (var key in node) {
    if (key[0] === "_" && node[key] != null) node[key] = undefined;
  }

  var syms = (0, _getOwnPropertySymbols2.default)(node);
  for (var _iterator10 = syms, _isArray10 = Array.isArray(_iterator10), _i10 = 0, _iterator10 = _isArray10 ? _iterator10 : (0, _getIterator3.default)(_iterator10);;) {
    var _ref10;

    if (_isArray10) {
      if (_i10 >= _iterator10.length) break;
      _ref10 = _iterator10[_i10++];
    } else {
      _i10 = _iterator10.next();
      if (_i10.done) break;
      _ref10 = _i10.value;
    }

    var sym = _ref10;

    node[sym] = null;
  }
}

function removePropertiesDeep(tree, opts) {
  traverseFast(tree, removeProperties, opts);
  return tree;
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(34)('wks');
var uid = __webpack_require__(20);
var Symbol = __webpack_require__(3).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.DEPRECATED_KEYS = exports.BUILDER_KEYS = exports.NODE_FIELDS = exports.ALIAS_KEYS = exports.VISITOR_KEYS = undefined;

var _getIterator2 = __webpack_require__(23);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _stringify = __webpack_require__(46);

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = __webpack_require__(69);

var _typeof3 = _interopRequireDefault(_typeof2);

exports.assertEach = assertEach;
exports.assertOneOf = assertOneOf;
exports.assertNodeType = assertNodeType;
exports.assertNodeOrValueType = assertNodeOrValueType;
exports.assertValueType = assertValueType;
exports.chain = chain;
exports.default = defineType;

var _index = __webpack_require__(2);

var t = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VISITOR_KEYS = exports.VISITOR_KEYS = {};
var ALIAS_KEYS = exports.ALIAS_KEYS = {};
var NODE_FIELDS = exports.NODE_FIELDS = {};
var BUILDER_KEYS = exports.BUILDER_KEYS = {};
var DEPRECATED_KEYS = exports.DEPRECATED_KEYS = {};

function getType(val) {
  if (Array.isArray(val)) {
    return "array";
  } else if (val === null) {
    return "null";
  } else if (val === undefined) {
    return "undefined";
  } else {
    return typeof val === "undefined" ? "undefined" : (0, _typeof3.default)(val);
  }
}

function assertEach(callback) {
  function validator(node, key, val) {
    if (!Array.isArray(val)) return;

    for (var i = 0; i < val.length; i++) {
      callback(node, key + "[" + i + "]", val[i]);
    }
  }
  validator.each = callback;
  return validator;
}

function assertOneOf() {
  for (var _len = arguments.length, vals = Array(_len), _key = 0; _key < _len; _key++) {
    vals[_key] = arguments[_key];
  }

  function validate(node, key, val) {
    if (vals.indexOf(val) < 0) {
      throw new TypeError("Property " + key + " expected value to be one of " + (0, _stringify2.default)(vals) + " but got " + (0, _stringify2.default)(val));
    }
  }

  validate.oneOf = vals;

  return validate;
}

function assertNodeType() {
  for (var _len2 = arguments.length, types = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    types[_key2] = arguments[_key2];
  }

  function validate(node, key, val) {
    var valid = false;

    for (var _iterator = types, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var type = _ref;

      if (t.is(type, val)) {
        valid = true;
        break;
      }
    }

    if (!valid) {
      throw new TypeError("Property " + key + " of " + node.type + " expected node to be of a type " + (0, _stringify2.default)(types) + " " + ("but instead got " + (0, _stringify2.default)(val && val.type)));
    }
  }

  validate.oneOfNodeTypes = types;

  return validate;
}

function assertNodeOrValueType() {
  for (var _len3 = arguments.length, types = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    types[_key3] = arguments[_key3];
  }

  function validate(node, key, val) {
    var valid = false;

    for (var _iterator2 = types, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
      var _ref2;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref2 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref2 = _i2.value;
      }

      var type = _ref2;

      if (getType(val) === type || t.is(type, val)) {
        valid = true;
        break;
      }
    }

    if (!valid) {
      throw new TypeError("Property " + key + " of " + node.type + " expected node to be of a type " + (0, _stringify2.default)(types) + " " + ("but instead got " + (0, _stringify2.default)(val && val.type)));
    }
  }

  validate.oneOfNodeOrValueTypes = types;

  return validate;
}

function assertValueType(type) {
  function validate(node, key, val) {
    var valid = getType(val) === type;

    if (!valid) {
      throw new TypeError("Property " + key + " expected type of " + type + " but got " + getType(val));
    }
  }

  validate.type = type;

  return validate;
}

function chain() {
  for (var _len4 = arguments.length, fns = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    fns[_key4] = arguments[_key4];
  }

  function validate() {
    for (var _iterator3 = fns, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);;) {
      var _ref3;

      if (_isArray3) {
        if (_i3 >= _iterator3.length) break;
        _ref3 = _iterator3[_i3++];
      } else {
        _i3 = _iterator3.next();
        if (_i3.done) break;
        _ref3 = _i3.value;
      }

      var fn = _ref3;

      fn.apply(undefined, arguments);
    }
  }
  validate.chainOf = fns;
  return validate;
}

function defineType(type) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var inherits = opts.inherits && store[opts.inherits] || {};

  opts.fields = opts.fields || inherits.fields || {};
  opts.visitor = opts.visitor || inherits.visitor || [];
  opts.aliases = opts.aliases || inherits.aliases || [];
  opts.builder = opts.builder || inherits.builder || opts.visitor || [];

  if (opts.deprecatedAlias) {
    DEPRECATED_KEYS[opts.deprecatedAlias] = type;
  }

  for (var _iterator4 = opts.visitor.concat(opts.builder), _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4);;) {
    var _ref4;

    if (_isArray4) {
      if (_i4 >= _iterator4.length) break;
      _ref4 = _iterator4[_i4++];
    } else {
      _i4 = _iterator4.next();
      if (_i4.done) break;
      _ref4 = _i4.value;
    }

    var _key5 = _ref4;

    opts.fields[_key5] = opts.fields[_key5] || {};
  }

  for (var key in opts.fields) {
    var field = opts.fields[key];

    if (opts.builder.indexOf(key) === -1) {
      field.optional = true;
    }
    if (field.default === undefined) {
      field.default = null;
    } else if (!field.validate) {
      field.validate = assertValueType(getType(field.default));
    }
  }

  VISITOR_KEYS[type] = opts.visitor;
  BUILDER_KEYS[type] = opts.builder;
  NODE_FIELDS[type] = opts.fields;
  ALIAS_KEYS[type] = opts.aliases;

  store[type] = opts;
}

var store = {};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(188),
    getValue = __webpack_require__(191);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(14)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11);
var createDesc = __webpack_require__(19);
module.exports = __webpack_require__(9) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(16);
var IE8_DOM_DEFINE = __webpack_require__(58);
var toPrimitive = __webpack_require__(33);
var dP = Object.defineProperty;

exports.f = __webpack_require__(9) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(124);
var defined = __webpack_require__(39);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(48),
    getRawTag = __webpack_require__(169),
    objectToString = __webpack_require__(170);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(0);
var ctx = __webpack_require__(120);
var hide = __webpack_require__(10);
var has = __webpack_require__(6);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(61);
var enumBugKeys = __webpack_require__(42);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(133), __esModule: true };

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(71);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(50)(module)))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(178),
    listCacheDelete = __webpack_require__(179),
    listCacheGet = __webpack_require__(180),
    listCacheHas = __webpack_require__(181),
    listCacheSet = __webpack_require__(182);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(73);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(8);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(200);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(77),
    baseAssignValue = __webpack_require__(78);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(3);
var has = __webpack_require__(6);
var DESCRIPTORS = __webpack_require__(9);
var $export = __webpack_require__(15);
var redefine = __webpack_require__(60);
var META = __webpack_require__(122).KEY;
var $fails = __webpack_require__(14);
var shared = __webpack_require__(34);
var setToStringTag = __webpack_require__(35);
var uid = __webpack_require__(20);
var wks = __webpack_require__(4);
var wksExt = __webpack_require__(36);
var wksDefine = __webpack_require__(37);
var enumKeys = __webpack_require__(123);
var isArray = __webpack_require__(128);
var anObject = __webpack_require__(16);
var isObject = __webpack_require__(17);
var toObject = __webpack_require__(44);
var toIObject = __webpack_require__(12);
var toPrimitive = __webpack_require__(33);
var createDesc = __webpack_require__(19);
var _create = __webpack_require__(45);
var gOPNExt = __webpack_require__(131);
var $GOPD = __webpack_require__(132);
var $GOPS = __webpack_require__(62);
var $DP = __webpack_require__(11);
var $keys = __webpack_require__(22);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(63).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(43).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(21)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(17);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(0);
var global = __webpack_require__(3);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(21) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(11).f;
var has = __webpack_require__(6);
var TAG = __webpack_require__(4)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(4);


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(0);
var LIBRARY = __webpack_require__(21);
var wksExt = __webpack_require__(36);
var defineProperty = __webpack_require__(11).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(34)('keys');
var uid = __webpack_require__(20);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 43 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(39);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(16);
var dPs = __webpack_require__(129);
var enumBugKeys = __webpack_require__(42);
var IE_PROTO = __webpack_require__(41)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(59)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(130).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(146), __esModule: true };

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.NOT_LOCAL_BINDING = exports.BLOCK_SCOPED_SYMBOL = exports.INHERIT_KEYS = exports.UNARY_OPERATORS = exports.STRING_UNARY_OPERATORS = exports.NUMBER_UNARY_OPERATORS = exports.BOOLEAN_UNARY_OPERATORS = exports.BINARY_OPERATORS = exports.NUMBER_BINARY_OPERATORS = exports.BOOLEAN_BINARY_OPERATORS = exports.COMPARISON_BINARY_OPERATORS = exports.EQUALITY_BINARY_OPERATORS = exports.BOOLEAN_NUMBER_BINARY_OPERATORS = exports.UPDATE_OPERATORS = exports.LOGICAL_OPERATORS = exports.COMMENT_KEYS = exports.FOR_INIT_KEYS = exports.FLATTENABLE_KEYS = exports.STATEMENT_OR_BLOCK_KEYS = undefined;

var _for = __webpack_require__(147);

var _for2 = _interopRequireDefault(_for);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STATEMENT_OR_BLOCK_KEYS = exports.STATEMENT_OR_BLOCK_KEYS = ["consequent", "body", "alternate"];
var FLATTENABLE_KEYS = exports.FLATTENABLE_KEYS = ["body", "expressions"];
var FOR_INIT_KEYS = exports.FOR_INIT_KEYS = ["left", "init"];
var COMMENT_KEYS = exports.COMMENT_KEYS = ["leadingComments", "trailingComments", "innerComments"];

var LOGICAL_OPERATORS = exports.LOGICAL_OPERATORS = ["||", "&&"];
var UPDATE_OPERATORS = exports.UPDATE_OPERATORS = ["++", "--"];

var BOOLEAN_NUMBER_BINARY_OPERATORS = exports.BOOLEAN_NUMBER_BINARY_OPERATORS = [">", "<", ">=", "<="];
var EQUALITY_BINARY_OPERATORS = exports.EQUALITY_BINARY_OPERATORS = ["==", "===", "!=", "!=="];
var COMPARISON_BINARY_OPERATORS = exports.COMPARISON_BINARY_OPERATORS = [].concat(EQUALITY_BINARY_OPERATORS, ["in", "instanceof"]);
var BOOLEAN_BINARY_OPERATORS = exports.BOOLEAN_BINARY_OPERATORS = [].concat(COMPARISON_BINARY_OPERATORS, BOOLEAN_NUMBER_BINARY_OPERATORS);
var NUMBER_BINARY_OPERATORS = exports.NUMBER_BINARY_OPERATORS = ["-", "/", "%", "*", "**", "&", "|", ">>", ">>>", "<<", "^"];
var BINARY_OPERATORS = exports.BINARY_OPERATORS = ["+"].concat(NUMBER_BINARY_OPERATORS, BOOLEAN_BINARY_OPERATORS);

var BOOLEAN_UNARY_OPERATORS = exports.BOOLEAN_UNARY_OPERATORS = ["delete", "!"];
var NUMBER_UNARY_OPERATORS = exports.NUMBER_UNARY_OPERATORS = ["+", "-", "++", "--", "~"];
var STRING_UNARY_OPERATORS = exports.STRING_UNARY_OPERATORS = ["typeof"];
var UNARY_OPERATORS = exports.UNARY_OPERATORS = ["void"].concat(BOOLEAN_UNARY_OPERATORS, NUMBER_UNARY_OPERATORS, STRING_UNARY_OPERATORS);

var INHERIT_KEYS = exports.INHERIT_KEYS = {
  optional: ["typeAnnotation", "typeParameters", "returnType"],
  force: ["start", "loc", "end"]
};

var BLOCK_SCOPED_SYMBOL = exports.BLOCK_SCOPED_SYMBOL = (0, _for2.default)("var used to be block scoped");
var NOT_LOCAL_BINDING = exports.NOT_LOCAL_BINDING = (0, _for2.default)("should not be considered a local binding");

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(1);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(72);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(8),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(79),
    baseKeys = __webpack_require__(214),
    isArrayLike = __webpack_require__(82);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 53 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 54 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(222),
    stubArray = __webpack_require__(84);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(226),
    Map = __webpack_require__(51),
    Promise = __webpack_require__(227),
    Set = __webpack_require__(88),
    WeakMap = __webpack_require__(228),
    baseGetTag = __webpack_require__(13),
    toSource = __webpack_require__(75);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(231);

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(9) && !__webpack_require__(14)(function () {
  return Object.defineProperty(__webpack_require__(59)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17);
var document = __webpack_require__(3).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(6);
var toIObject = __webpack_require__(12);
var arrayIndexOf = __webpack_require__(125)(false);
var IE_PROTO = __webpack_require__(41)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 62 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(61);
var hiddenKeys = __webpack_require__(42).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(134);
var global = __webpack_require__(3);
var hide = __webpack_require__(10);
var Iterators = __webpack_require__(24);
var TO_STRING_TAG = __webpack_require__(4)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(21);
var $export = __webpack_require__(15);
var redefine = __webpack_require__(60);
var hide = __webpack_require__(10);
var Iterators = __webpack_require__(24);
var $iterCreate = __webpack_require__(137);
var setToStringTag = __webpack_require__(35);
var getPrototypeOf = __webpack_require__(138);
var ITERATOR = __webpack_require__(4)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(139)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(65)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(143), __esModule: true };

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _create = __webpack_require__(149);

var _create2 = _interopRequireDefault(_create);

exports.getBindingIdentifiers = getBindingIdentifiers;
exports.getOuterBindingIdentifiers = getOuterBindingIdentifiers;

var _index = __webpack_require__(2);

var t = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getBindingIdentifiers(node, duplicates, outerOnly) {
  var search = [].concat(node);
  var ids = (0, _create2.default)(null);

  while (search.length) {
    var id = search.shift();
    if (!id) continue;

    var keys = t.getBindingIdentifiers.keys[id.type];

    if (t.isIdentifier(id)) {
      if (duplicates) {
        var _ids = ids[id.name] = ids[id.name] || [];
        _ids.push(id);
      } else {
        ids[id.name] = id;
      }
      continue;
    }

    if (t.isExportDeclaration(id)) {
      if (t.isDeclaration(id.declaration)) {
        search.push(id.declaration);
      }
      continue;
    }

    if (outerOnly) {
      if (t.isFunctionDeclaration(id)) {
        search.push(id.id);
        continue;
      }

      if (t.isFunctionExpression(id)) {
        continue;
      }
    }

    if (keys) {
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (id[key]) {
          search = search.concat(id[key]);
        }
      }
    }
  }

  return ids;
}

getBindingIdentifiers.keys = {
  DeclareClass: ["id"],
  DeclareFunction: ["id"],
  DeclareModule: ["id"],
  DeclareVariable: ["id"],
  InterfaceDeclaration: ["id"],
  TypeAlias: ["id"],
  OpaqueType: ["id"],

  CatchClause: ["param"],
  LabeledStatement: ["label"],
  UnaryExpression: ["argument"],
  AssignmentExpression: ["left"],

  ImportSpecifier: ["local"],
  ImportNamespaceSpecifier: ["local"],
  ImportDefaultSpecifier: ["local"],
  ImportDeclaration: ["specifiers"],

  ExportSpecifier: ["exported"],
  ExportNamespaceSpecifier: ["exported"],
  ExportDefaultSpecifier: ["exported"],

  FunctionDeclaration: ["id", "params"],
  FunctionExpression: ["id", "params"],

  ClassDeclaration: ["id"],
  ClassExpression: ["id"],

  RestElement: ["argument"],
  UpdateExpression: ["argument"],

  RestProperty: ["argument"],
  ObjectProperty: ["value"],

  AssignmentPattern: ["left"],
  ArrayPattern: ["elements"],
  ObjectPattern: ["properties"],

  VariableDeclaration: ["declarations"],
  VariableDeclarator: ["id"]
};

function getOuterBindingIdentifiers(node, duplicates) {
  return getBindingIdentifiers(node, duplicates, true);
}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(153);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(155);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 70 */
/***/ (function(module, exports) {

/*
  Copyright (C) 2013-2014 Yusuke Suzuki <utatane.tea@gmail.com>
  Copyright (C) 2014 Ivan Nikulin <ifaaan@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

(function () {
    'use strict';

    var ES6Regex, ES5Regex, NON_ASCII_WHITESPACES, IDENTIFIER_START, IDENTIFIER_PART, ch;

    // See `tools/generate-identifier-regex.js`.
    ES5Regex = {
        // ECMAScript 5.1/Unicode v7.0.0 NonAsciiIdentifierStart:
        NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B2\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
        // ECMAScript 5.1/Unicode v7.0.0 NonAsciiIdentifierPart:
        NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B2\u08E4-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA69D\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2D\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/
    };

    ES6Regex = {
        // ECMAScript 6/Unicode v7.0.0 NonAsciiIdentifierStart:
        NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B2\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDE00-\uDE11\uDE13-\uDE2B\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDE00-\uDE2F\uDE44\uDE80-\uDEAA]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF98]|\uD809[\uDC00-\uDC6E]|[\uD80C\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]/,
        // ECMAScript 6/Unicode v7.0.0 NonAsciiIdentifierPart:
        NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B2\u08E4-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA69D\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2D\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDD0-\uDDDA\uDE00-\uDE11\uDE13-\uDE37\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF01-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF98]|\uD809[\uDC00-\uDC6E]|[\uD80C\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
    };

    function isDecimalDigit(ch) {
        return 0x30 <= ch && ch <= 0x39;  // 0..9
    }

    function isHexDigit(ch) {
        return 0x30 <= ch && ch <= 0x39 ||  // 0..9
            0x61 <= ch && ch <= 0x66 ||     // a..f
            0x41 <= ch && ch <= 0x46;       // A..F
    }

    function isOctalDigit(ch) {
        return ch >= 0x30 && ch <= 0x37;  // 0..7
    }

    // 7.2 White Space

    NON_ASCII_WHITESPACES = [
        0x1680, 0x180E,
        0x2000, 0x2001, 0x2002, 0x2003, 0x2004, 0x2005, 0x2006, 0x2007, 0x2008, 0x2009, 0x200A,
        0x202F, 0x205F,
        0x3000,
        0xFEFF
    ];

    function isWhiteSpace(ch) {
        return ch === 0x20 || ch === 0x09 || ch === 0x0B || ch === 0x0C || ch === 0xA0 ||
            ch >= 0x1680 && NON_ASCII_WHITESPACES.indexOf(ch) >= 0;
    }

    // 7.3 Line Terminators

    function isLineTerminator(ch) {
        return ch === 0x0A || ch === 0x0D || ch === 0x2028 || ch === 0x2029;
    }

    // 7.6 Identifier Names and Identifiers

    function fromCodePoint(cp) {
        if (cp <= 0xFFFF) { return String.fromCharCode(cp); }
        var cu1 = String.fromCharCode(Math.floor((cp - 0x10000) / 0x400) + 0xD800);
        var cu2 = String.fromCharCode(((cp - 0x10000) % 0x400) + 0xDC00);
        return cu1 + cu2;
    }

    IDENTIFIER_START = new Array(0x80);
    for(ch = 0; ch < 0x80; ++ch) {
        IDENTIFIER_START[ch] =
            ch >= 0x61 && ch <= 0x7A ||  // a..z
            ch >= 0x41 && ch <= 0x5A ||  // A..Z
            ch === 0x24 || ch === 0x5F;  // $ (dollar) and _ (underscore)
    }

    IDENTIFIER_PART = new Array(0x80);
    for(ch = 0; ch < 0x80; ++ch) {
        IDENTIFIER_PART[ch] =
            ch >= 0x61 && ch <= 0x7A ||  // a..z
            ch >= 0x41 && ch <= 0x5A ||  // A..Z
            ch >= 0x30 && ch <= 0x39 ||  // 0..9
            ch === 0x24 || ch === 0x5F;  // $ (dollar) and _ (underscore)
    }

    function isIdentifierStartES5(ch) {
        return ch < 0x80 ? IDENTIFIER_START[ch] : ES5Regex.NonAsciiIdentifierStart.test(fromCodePoint(ch));
    }

    function isIdentifierPartES5(ch) {
        return ch < 0x80 ? IDENTIFIER_PART[ch] : ES5Regex.NonAsciiIdentifierPart.test(fromCodePoint(ch));
    }

    function isIdentifierStartES6(ch) {
        return ch < 0x80 ? IDENTIFIER_START[ch] : ES6Regex.NonAsciiIdentifierStart.test(fromCodePoint(ch));
    }

    function isIdentifierPartES6(ch) {
        return ch < 0x80 ? IDENTIFIER_PART[ch] : ES6Regex.NonAsciiIdentifierPart.test(fromCodePoint(ch));
    }

    module.exports = {
        isDecimalDigit: isDecimalDigit,
        isHexDigit: isHexDigit,
        isOctalDigit: isOctalDigit,
        isWhiteSpace: isWhiteSpace,
        isLineTerminator: isLineTerminator,
        isIdentifierStartES5: isIdentifierStartES5,
        isIdentifierPartES5: isIdentifierPartES5,
        isIdentifierStartES6: isIdentifierStartES6,
        isIdentifierPartES6: isIdentifierPartES6
    };
}());
/* vim: set sw=4 ts=4 et tw=80 : */


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(168)))

/***/ }),
/* 72 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 73 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(13),
    isObject = __webpack_require__(18);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 75 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(192),
    mapCacheDelete = __webpack_require__(199),
    mapCacheGet = __webpack_require__(201),
    mapCacheHas = __webpack_require__(202),
    mapCacheSet = __webpack_require__(203);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(78),
    eq = __webpack_require__(73);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(205);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(207),
    isArguments = __webpack_require__(208),
    isArray = __webpack_require__(53),
    isBuffer = __webpack_require__(80),
    isIndex = __webpack_require__(211),
    isTypedArray = __webpack_require__(212);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(1),
    stubFalse = __webpack_require__(210);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(50)(module)))

/***/ }),
/* 81 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(74),
    isLength = __webpack_require__(81);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(79),
    baseKeysIn = __webpack_require__(217),
    isArrayLike = __webpack_require__(82);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),
/* 84 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(86),
    getPrototype = __webpack_require__(49),
    getSymbols = __webpack_require__(55),
    stubArray = __webpack_require__(84);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),
/* 86 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(86),
    isArray = __webpack_require__(53);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(8),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 89 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./sprite.svg": 93
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 92;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sprite.svg";

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 95 */
/***/ (function(module, exports) {

var page__preload = document.querySelector('.page__preload');
window.addEventListener('load', function () {
  if (page__preload) page__preload.classList.remove('page__preload');
}, false);

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(119), __esModule: true };

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(32);
module.exports = __webpack_require__(0).Object.getOwnPropertySymbols;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(121);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(20)('meta');
var isObject = __webpack_require__(17);
var has = __webpack_require__(6);
var setDesc = __webpack_require__(11).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(14)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(22);
var gOPS = __webpack_require__(62);
var pIE = __webpack_require__(43);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(38);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(12);
var toLength = __webpack_require__(126);
var toAbsoluteIndex = __webpack_require__(127);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(40);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(40);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(38);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11);
var anObject = __webpack_require__(16);
var getKeys = __webpack_require__(22);

module.exports = __webpack_require__(9) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(3).document;
module.exports = document && document.documentElement;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(12);
var gOPN = __webpack_require__(63).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(43);
var createDesc = __webpack_require__(19);
var toIObject = __webpack_require__(12);
var toPrimitive = __webpack_require__(33);
var has = __webpack_require__(6);
var IE8_DOM_DEFINE = __webpack_require__(58);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(9) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(64);
__webpack_require__(66);
module.exports = __webpack_require__(140);


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(135);
var step = __webpack_require__(136);
var Iterators = __webpack_require__(24);
var toIObject = __webpack_require__(12);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(65)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 135 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 136 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(45);
var descriptor = __webpack_require__(19);
var setToStringTag = __webpack_require__(35);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(10)(IteratorPrototype, __webpack_require__(4)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(6);
var toObject = __webpack_require__(44);
var IE_PROTO = __webpack_require__(41)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(40);
var defined = __webpack_require__(39);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(16);
var get = __webpack_require__(141);
module.exports = __webpack_require__(0).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(142);
var ITERATOR = __webpack_require__(4)('iterator');
var Iterators = __webpack_require__(24);
module.exports = __webpack_require__(0).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(38);
var TAG = __webpack_require__(4)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(144);
module.exports = __webpack_require__(0).Object.keys;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(44);
var $keys = __webpack_require__(22);

__webpack_require__(145)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(15);
var core = __webpack_require__(0);
var fails = __webpack_require__(14);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(0);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(148), __esModule: true };

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(32);
module.exports = __webpack_require__(0).Symbol['for'];


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(150), __esModule: true };

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
var $Object = __webpack_require__(0).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(15);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(45) });


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _keys = __webpack_require__(67);

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = __webpack_require__(69);

var _typeof3 = _interopRequireDefault(_typeof2);

var _getIterator2 = __webpack_require__(23);

var _getIterator3 = _interopRequireDefault(_getIterator2);

exports.isBinding = isBinding;
exports.isReferenced = isReferenced;
exports.isValidIdentifier = isValidIdentifier;
exports.isLet = isLet;
exports.isBlockScoped = isBlockScoped;
exports.isVar = isVar;
exports.isSpecifierDefault = isSpecifierDefault;
exports.isScope = isScope;
exports.isImmutable = isImmutable;
exports.isNodesEquivalent = isNodesEquivalent;

var _retrievers = __webpack_require__(68);

var _esutils = __webpack_require__(160);

var _esutils2 = _interopRequireDefault(_esutils);

var _index = __webpack_require__(2);

var t = _interopRequireWildcard(_index);

var _constants = __webpack_require__(47);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBinding(node, parent) {
  var keys = _retrievers.getBindingIdentifiers.keys[parent.type];
  if (keys) {
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var val = parent[key];
      if (Array.isArray(val)) {
        if (val.indexOf(node) >= 0) return true;
      } else {
        if (val === node) return true;
      }
    }
  }

  return false;
}

function isReferenced(node, parent) {
  switch (parent.type) {
    case "BindExpression":
      return parent.object === node || parent.callee === node;

    case "MemberExpression":
    case "JSXMemberExpression":
      if (parent.property === node && parent.computed) {
        return true;
      } else if (parent.object === node) {
        return true;
      } else {
        return false;
      }

    case "MetaProperty":
      return false;

    case "ObjectProperty":
      if (parent.key === node) {
        return parent.computed;
      }

    case "VariableDeclarator":
      return parent.id !== node;

    case "ArrowFunctionExpression":
    case "FunctionDeclaration":
    case "FunctionExpression":
      for (var _iterator = parent.params, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var param = _ref;

        if (param === node) return false;
      }

      return parent.id !== node;

    case "ExportSpecifier":
      if (parent.source) {
        return false;
      } else {
        return parent.local === node;
      }

    case "ExportNamespaceSpecifier":
    case "ExportDefaultSpecifier":
      return false;

    case "JSXAttribute":
      return parent.name !== node;

    case "ClassProperty":
      if (parent.key === node) {
        return parent.computed;
      } else {
        return parent.value === node;
      }

    case "ImportDefaultSpecifier":
    case "ImportNamespaceSpecifier":
    case "ImportSpecifier":
      return false;

    case "ClassDeclaration":
    case "ClassExpression":
      return parent.id !== node;

    case "ClassMethod":
    case "ObjectMethod":
      return parent.key === node && parent.computed;

    case "LabeledStatement":
      return false;

    case "CatchClause":
      return parent.param !== node;

    case "RestElement":
      return false;

    case "AssignmentExpression":
      return parent.right === node;

    case "AssignmentPattern":
      return parent.right === node;

    case "ObjectPattern":
    case "ArrayPattern":
      return false;
  }

  return true;
}

function isValidIdentifier(name) {
  if (typeof name !== "string" || _esutils2.default.keyword.isReservedWordES6(name, true)) {
    return false;
  } else if (name === "await") {
    return false;
  } else {
    return _esutils2.default.keyword.isIdentifierNameES6(name);
  }
}

function isLet(node) {
  return t.isVariableDeclaration(node) && (node.kind !== "var" || node[_constants.BLOCK_SCOPED_SYMBOL]);
}

function isBlockScoped(node) {
  return t.isFunctionDeclaration(node) || t.isClassDeclaration(node) || t.isLet(node);
}

function isVar(node) {
  return t.isVariableDeclaration(node, { kind: "var" }) && !node[_constants.BLOCK_SCOPED_SYMBOL];
}

function isSpecifierDefault(specifier) {
  return t.isImportDefaultSpecifier(specifier) || t.isIdentifier(specifier.imported || specifier.exported, { name: "default" });
}

function isScope(node, parent) {
  if (t.isBlockStatement(node) && t.isFunction(parent, { body: node })) {
    return false;
  }

  return t.isScopable(node);
}

function isImmutable(node) {
  if (t.isType(node.type, "Immutable")) return true;

  if (t.isIdentifier(node)) {
    if (node.name === "undefined") {
      return true;
    } else {
      return false;
    }
  }

  return false;
}

function isNodesEquivalent(a, b) {
  if ((typeof a === "undefined" ? "undefined" : (0, _typeof3.default)(a)) !== "object" || (typeof a === "undefined" ? "undefined" : (0, _typeof3.default)(a)) !== "object" || a == null || b == null) {
    return a === b;
  }

  if (a.type !== b.type) {
    return false;
  }

  var fields = (0, _keys2.default)(t.NODE_FIELDS[a.type] || a.type);

  for (var _iterator2 = fields, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
    var _ref2;

    if (_isArray2) {
      if (_i2 >= _iterator2.length) break;
      _ref2 = _iterator2[_i2++];
    } else {
      _i2 = _iterator2.next();
      if (_i2.done) break;
      _ref2 = _i2.value;
    }

    var field = _ref2;

    if ((0, _typeof3.default)(a[field]) !== (0, _typeof3.default)(b[field])) {
      return false;
    }

    if (Array.isArray(a[field])) {
      if (!Array.isArray(b[field])) {
        return false;
      }
      if (a[field].length !== b[field].length) {
        return false;
      }

      for (var i = 0; i < a[field].length; i++) {
        if (!isNodesEquivalent(a[field][i], b[field][i])) {
          return false;
        }
      }
      continue;
    }

    if (!isNodesEquivalent(a[field], b[field])) {
      return false;
    }
  }

  return true;
}

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(154), __esModule: true };

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(66);
__webpack_require__(64);
module.exports = __webpack_require__(36).f('iterator');


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(156), __esModule: true };

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(32);
__webpack_require__(157);
__webpack_require__(158);
__webpack_require__(159);
module.exports = __webpack_require__(0).Symbol;


/***/ }),
/* 157 */
/***/ (function(module, exports) {



/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(37)('asyncIterator');


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(37)('observable');


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

/*
  Copyright (C) 2013 Yusuke Suzuki <utatane.tea@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/


(function () {
    'use strict';

    exports.ast = __webpack_require__(161);
    exports.code = __webpack_require__(70);
    exports.keyword = __webpack_require__(162);
}());
/* vim: set sw=4 ts=4 et tw=80 : */


/***/ }),
/* 161 */
/***/ (function(module, exports) {

/*
  Copyright (C) 2013 Yusuke Suzuki <utatane.tea@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS 'AS IS'
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

(function () {
    'use strict';

    function isExpression(node) {
        if (node == null) { return false; }
        switch (node.type) {
            case 'ArrayExpression':
            case 'AssignmentExpression':
            case 'BinaryExpression':
            case 'CallExpression':
            case 'ConditionalExpression':
            case 'FunctionExpression':
            case 'Identifier':
            case 'Literal':
            case 'LogicalExpression':
            case 'MemberExpression':
            case 'NewExpression':
            case 'ObjectExpression':
            case 'SequenceExpression':
            case 'ThisExpression':
            case 'UnaryExpression':
            case 'UpdateExpression':
                return true;
        }
        return false;
    }

    function isIterationStatement(node) {
        if (node == null) { return false; }
        switch (node.type) {
            case 'DoWhileStatement':
            case 'ForInStatement':
            case 'ForStatement':
            case 'WhileStatement':
                return true;
        }
        return false;
    }

    function isStatement(node) {
        if (node == null) { return false; }
        switch (node.type) {
            case 'BlockStatement':
            case 'BreakStatement':
            case 'ContinueStatement':
            case 'DebuggerStatement':
            case 'DoWhileStatement':
            case 'EmptyStatement':
            case 'ExpressionStatement':
            case 'ForInStatement':
            case 'ForStatement':
            case 'IfStatement':
            case 'LabeledStatement':
            case 'ReturnStatement':
            case 'SwitchStatement':
            case 'ThrowStatement':
            case 'TryStatement':
            case 'VariableDeclaration':
            case 'WhileStatement':
            case 'WithStatement':
                return true;
        }
        return false;
    }

    function isSourceElement(node) {
      return isStatement(node) || node != null && node.type === 'FunctionDeclaration';
    }

    function trailingStatement(node) {
        switch (node.type) {
        case 'IfStatement':
            if (node.alternate != null) {
                return node.alternate;
            }
            return node.consequent;

        case 'LabeledStatement':
        case 'ForStatement':
        case 'ForInStatement':
        case 'WhileStatement':
        case 'WithStatement':
            return node.body;
        }
        return null;
    }

    function isProblematicIfStatement(node) {
        var current;

        if (node.type !== 'IfStatement') {
            return false;
        }
        if (node.alternate == null) {
            return false;
        }
        current = node.consequent;
        do {
            if (current.type === 'IfStatement') {
                if (current.alternate == null)  {
                    return true;
                }
            }
            current = trailingStatement(current);
        } while (current);

        return false;
    }

    module.exports = {
        isExpression: isExpression,
        isStatement: isStatement,
        isIterationStatement: isIterationStatement,
        isSourceElement: isSourceElement,
        isProblematicIfStatement: isProblematicIfStatement,

        trailingStatement: trailingStatement
    };
}());
/* vim: set sw=4 ts=4 et tw=80 : */


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

/*
  Copyright (C) 2013 Yusuke Suzuki <utatane.tea@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

(function () {
    'use strict';

    var code = __webpack_require__(70);

    function isStrictModeReservedWordES6(id) {
        switch (id) {
        case 'implements':
        case 'interface':
        case 'package':
        case 'private':
        case 'protected':
        case 'public':
        case 'static':
        case 'let':
            return true;
        default:
            return false;
        }
    }

    function isKeywordES5(id, strict) {
        // yield should not be treated as keyword under non-strict mode.
        if (!strict && id === 'yield') {
            return false;
        }
        return isKeywordES6(id, strict);
    }

    function isKeywordES6(id, strict) {
        if (strict && isStrictModeReservedWordES6(id)) {
            return true;
        }

        switch (id.length) {
        case 2:
            return (id === 'if') || (id === 'in') || (id === 'do');
        case 3:
            return (id === 'var') || (id === 'for') || (id === 'new') || (id === 'try');
        case 4:
            return (id === 'this') || (id === 'else') || (id === 'case') ||
                (id === 'void') || (id === 'with') || (id === 'enum');
        case 5:
            return (id === 'while') || (id === 'break') || (id === 'catch') ||
                (id === 'throw') || (id === 'const') || (id === 'yield') ||
                (id === 'class') || (id === 'super');
        case 6:
            return (id === 'return') || (id === 'typeof') || (id === 'delete') ||
                (id === 'switch') || (id === 'export') || (id === 'import');
        case 7:
            return (id === 'default') || (id === 'finally') || (id === 'extends');
        case 8:
            return (id === 'function') || (id === 'continue') || (id === 'debugger');
        case 10:
            return (id === 'instanceof');
        default:
            return false;
        }
    }

    function isReservedWordES5(id, strict) {
        return id === 'null' || id === 'true' || id === 'false' || isKeywordES5(id, strict);
    }

    function isReservedWordES6(id, strict) {
        return id === 'null' || id === 'true' || id === 'false' || isKeywordES6(id, strict);
    }

    function isRestrictedWord(id) {
        return id === 'eval' || id === 'arguments';
    }

    function isIdentifierNameES5(id) {
        var i, iz, ch;

        if (id.length === 0) { return false; }

        ch = id.charCodeAt(0);
        if (!code.isIdentifierStartES5(ch)) {
            return false;
        }

        for (i = 1, iz = id.length; i < iz; ++i) {
            ch = id.charCodeAt(i);
            if (!code.isIdentifierPartES5(ch)) {
                return false;
            }
        }
        return true;
    }

    function decodeUtf16(lead, trail) {
        return (lead - 0xD800) * 0x400 + (trail - 0xDC00) + 0x10000;
    }

    function isIdentifierNameES6(id) {
        var i, iz, ch, lowCh, check;

        if (id.length === 0) { return false; }

        check = code.isIdentifierStartES6;
        for (i = 0, iz = id.length; i < iz; ++i) {
            ch = id.charCodeAt(i);
            if (0xD800 <= ch && ch <= 0xDBFF) {
                ++i;
                if (i >= iz) { return false; }
                lowCh = id.charCodeAt(i);
                if (!(0xDC00 <= lowCh && lowCh <= 0xDFFF)) {
                    return false;
                }
                ch = decodeUtf16(ch, lowCh);
            }
            if (!check(ch)) {
                return false;
            }
            check = code.isIdentifierPartES6;
        }
        return true;
    }

    function isIdentifierES5(id, strict) {
        return isIdentifierNameES5(id) && !isReservedWordES5(id, strict);
    }

    function isIdentifierES6(id, strict) {
        return isIdentifierNameES6(id) && !isReservedWordES6(id, strict);
    }

    module.exports = {
        isKeywordES5: isKeywordES5,
        isKeywordES6: isKeywordES6,
        isReservedWordES5: isReservedWordES5,
        isReservedWordES6: isReservedWordES6,
        isRestrictedWord: isRestrictedWord,
        isIdentifierNameES5: isIdentifierNameES5,
        isIdentifierNameES6: isIdentifierNameES6,
        isIdentifierES5: isIdentifierES5,
        isIdentifierES6: isIdentifierES6
    };
}());
/* vim: set sw=4 ts=4 et tw=80 : */


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _maxSafeInteger = __webpack_require__(164);

var _maxSafeInteger2 = _interopRequireDefault(_maxSafeInteger);

var _stringify = __webpack_require__(46);

var _stringify2 = _interopRequireDefault(_stringify);

var _getIterator2 = __webpack_require__(23);

var _getIterator3 = _interopRequireDefault(_getIterator2);

exports.toComputedKey = toComputedKey;
exports.toSequenceExpression = toSequenceExpression;
exports.toKeyAlias = toKeyAlias;
exports.toIdentifier = toIdentifier;
exports.toBindingIdentifierName = toBindingIdentifierName;
exports.toStatement = toStatement;
exports.toExpression = toExpression;
exports.toBlock = toBlock;
exports.valueToNode = valueToNode;

var _isPlainObject = __webpack_require__(167);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _isRegExp = __webpack_require__(171);

var _isRegExp2 = _interopRequireDefault(_isRegExp);

var _index = __webpack_require__(2);

var t = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toComputedKey(node) {
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : node.key || node.property;

  if (!node.computed) {
    if (t.isIdentifier(key)) key = t.stringLiteral(key.name);
  }
  return key;
}

function gatherSequenceExpressions(nodes, scope, declars) {
  var exprs = [];
  var ensureLastUndefined = true;

  for (var _iterator = nodes, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var node = _ref;

    ensureLastUndefined = false;

    if (t.isExpression(node)) {
      exprs.push(node);
    } else if (t.isExpressionStatement(node)) {
      exprs.push(node.expression);
    } else if (t.isVariableDeclaration(node)) {
      if (node.kind !== "var") return;

      for (var _iterator2 = node.declarations, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
        var _ref2;

        if (_isArray2) {
          if (_i2 >= _iterator2.length) break;
          _ref2 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          _ref2 = _i2.value;
        }

        var declar = _ref2;

        var bindings = t.getBindingIdentifiers(declar);
        for (var key in bindings) {
          declars.push({
            kind: node.kind,
            id: bindings[key]
          });
        }

        if (declar.init) {
          exprs.push(t.assignmentExpression("=", declar.id, declar.init));
        }
      }

      ensureLastUndefined = true;
    } else if (t.isIfStatement(node)) {
      var consequent = node.consequent ? gatherSequenceExpressions([node.consequent], scope, declars) : scope.buildUndefinedNode();
      var alternate = node.alternate ? gatherSequenceExpressions([node.alternate], scope, declars) : scope.buildUndefinedNode();
      if (!consequent || !alternate) return;

      exprs.push(t.conditionalExpression(node.test, consequent, alternate));
    } else if (t.isBlockStatement(node)) {
      var body = gatherSequenceExpressions(node.body, scope, declars);
      if (!body) return;

      exprs.push(body);
    } else if (t.isEmptyStatement(node)) {
      ensureLastUndefined = true;
    } else {
      return;
    }
  }

  if (ensureLastUndefined) {
    exprs.push(scope.buildUndefinedNode());
  }

  if (exprs.length === 1) {
    return exprs[0];
  } else {
    return t.sequenceExpression(exprs);
  }
}

function toSequenceExpression(nodes, scope) {
  if (!nodes || !nodes.length) return;

  var declars = [];
  var result = gatherSequenceExpressions(nodes, scope, declars);
  if (!result) return;

  for (var _iterator3 = declars, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);;) {
    var _ref3;

    if (_isArray3) {
      if (_i3 >= _iterator3.length) break;
      _ref3 = _iterator3[_i3++];
    } else {
      _i3 = _iterator3.next();
      if (_i3.done) break;
      _ref3 = _i3.value;
    }

    var declar = _ref3;

    scope.push(declar);
  }

  return result;
}

function toKeyAlias(node) {
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : node.key;

  var alias = void 0;

  if (node.kind === "method") {
    return toKeyAlias.increment() + "";
  } else if (t.isIdentifier(key)) {
    alias = key.name;
  } else if (t.isStringLiteral(key)) {
    alias = (0, _stringify2.default)(key.value);
  } else {
    alias = (0, _stringify2.default)(t.removePropertiesDeep(t.cloneDeep(key)));
  }

  if (node.computed) {
    alias = "[" + alias + "]";
  }

  if (node.static) {
    alias = "static:" + alias;
  }

  return alias;
}

toKeyAlias.uid = 0;

toKeyAlias.increment = function () {
  if (toKeyAlias.uid >= _maxSafeInteger2.default) {
    return toKeyAlias.uid = 0;
  } else {
    return toKeyAlias.uid++;
  }
};

function toIdentifier(name) {
  name = name + "";

  name = name.replace(/[^a-zA-Z0-9$_]/g, "-");

  name = name.replace(/^[-0-9]+/, "");

  name = name.replace(/[-\s]+(.)?/g, function (match, c) {
    return c ? c.toUpperCase() : "";
  });

  if (!t.isValidIdentifier(name)) {
    name = "_" + name;
  }

  return name || "_";
}

function toBindingIdentifierName(name) {
  name = toIdentifier(name);
  if (name === "eval" || name === "arguments") name = "_" + name;
  return name;
}

function toStatement(node, ignore) {
  if (t.isStatement(node)) {
    return node;
  }

  var mustHaveId = false;
  var newType = void 0;

  if (t.isClass(node)) {
    mustHaveId = true;
    newType = "ClassDeclaration";
  } else if (t.isFunction(node)) {
    mustHaveId = true;
    newType = "FunctionDeclaration";
  } else if (t.isAssignmentExpression(node)) {
    return t.expressionStatement(node);
  }

  if (mustHaveId && !node.id) {
    newType = false;
  }

  if (!newType) {
    if (ignore) {
      return false;
    } else {
      throw new Error("cannot turn " + node.type + " to a statement");
    }
  }

  node.type = newType;

  return node;
}

function toExpression(node) {
  if (t.isExpressionStatement(node)) {
    node = node.expression;
  }

  if (t.isExpression(node)) {
    return node;
  }

  if (t.isClass(node)) {
    node.type = "ClassExpression";
  } else if (t.isFunction(node)) {
    node.type = "FunctionExpression";
  }

  if (!t.isExpression(node)) {
    throw new Error("cannot turn " + node.type + " to an expression");
  }

  return node;
}

function toBlock(node, parent) {
  if (t.isBlockStatement(node)) {
    return node;
  }

  if (t.isEmptyStatement(node)) {
    node = [];
  }

  if (!Array.isArray(node)) {
    if (!t.isStatement(node)) {
      if (t.isFunction(parent)) {
        node = t.returnStatement(node);
      } else {
        node = t.expressionStatement(node);
      }
    }

    node = [node];
  }

  return t.blockStatement(node);
}

function valueToNode(value) {
  if (value === undefined) {
    return t.identifier("undefined");
  }

  if (value === true || value === false) {
    return t.booleanLiteral(value);
  }

  if (value === null) {
    return t.nullLiteral();
  }

  if (typeof value === "string") {
    return t.stringLiteral(value);
  }

  if (typeof value === "number") {
    return t.numericLiteral(value);
  }

  if ((0, _isRegExp2.default)(value)) {
    var pattern = value.source;
    var flags = value.toString().match(/\/([a-z]+|)$/)[1];
    return t.regExpLiteral(pattern, flags);
  }

  if (Array.isArray(value)) {
    return t.arrayExpression(value.map(t.valueToNode));
  }

  if ((0, _isPlainObject2.default)(value)) {
    var props = [];
    for (var key in value) {
      var nodeKey = void 0;
      if (t.isValidIdentifier(key)) {
        nodeKey = t.identifier(key);
      } else {
        nodeKey = t.stringLiteral(key);
      }
      props.push(t.objectProperty(nodeKey, t.valueToNode(value[key])));
    }
    return t.objectExpression(props);
  }

  throw new Error("don't know how to turn this value into a node");
}

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(165), __esModule: true };

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(166);
module.exports = 0x1fffffffffffff;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = __webpack_require__(15);

$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(13),
    getPrototype = __webpack_require__(49),
    isObjectLike = __webpack_require__(7);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),
/* 168 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(48);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 170 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsRegExp = __webpack_require__(172),
    baseUnary = __webpack_require__(25),
    nodeUtil = __webpack_require__(26);

/* Node.js helper references. */
var nodeIsRegExp = nodeUtil && nodeUtil.isRegExp;

/**
 * Checks if `value` is classified as a `RegExp` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 * @example
 *
 * _.isRegExp(/abc/);
 * // => true
 *
 * _.isRegExp('/abc/');
 * // => false
 */
var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

module.exports = isRegExp;


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(13),
    isObjectLike = __webpack_require__(7);

/** `Object#toString` result references. */
var regexpTag = '[object RegExp]';

/**
 * The base implementation of `_.isRegExp` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 */
function baseIsRegExp(value) {
  return isObjectLike(value) && baseGetTag(value) == regexpTag;
}

module.exports = baseIsRegExp;


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createUnionTypeAnnotation = createUnionTypeAnnotation;
exports.removeTypeDuplicates = removeTypeDuplicates;
exports.createTypeAnnotationBasedOnTypeof = createTypeAnnotationBasedOnTypeof;

var _index = __webpack_require__(2);

var t = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function createUnionTypeAnnotation(types) {
  var flattened = removeTypeDuplicates(types);

  if (flattened.length === 1) {
    return flattened[0];
  } else {
    return t.unionTypeAnnotation(flattened);
  }
}

function removeTypeDuplicates(nodes) {
  var generics = {};
  var bases = {};

  var typeGroups = [];

  var types = [];

  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    if (!node) continue;

    if (types.indexOf(node) >= 0) {
      continue;
    }

    if (t.isAnyTypeAnnotation(node)) {
      return [node];
    }

    if (t.isFlowBaseAnnotation(node)) {
      bases[node.type] = node;
      continue;
    }

    if (t.isUnionTypeAnnotation(node)) {
      if (typeGroups.indexOf(node.types) < 0) {
        nodes = nodes.concat(node.types);
        typeGroups.push(node.types);
      }
      continue;
    }

    if (t.isGenericTypeAnnotation(node)) {
      var name = node.id.name;

      if (generics[name]) {
        var existing = generics[name];
        if (existing.typeParameters) {
          if (node.typeParameters) {
            existing.typeParameters.params = removeTypeDuplicates(existing.typeParameters.params.concat(node.typeParameters.params));
          }
        } else {
          existing = node.typeParameters;
        }
      } else {
        generics[name] = node;
      }

      continue;
    }

    types.push(node);
  }

  for (var type in bases) {
    types.push(bases[type]);
  }

  for (var _name in generics) {
    types.push(generics[_name]);
  }

  return types;
}

function createTypeAnnotationBasedOnTypeof(type) {
  if (type === "string") {
    return t.stringTypeAnnotation();
  } else if (type === "number") {
    return t.numberTypeAnnotation();
  } else if (type === "undefined") {
    return t.voidTypeAnnotation();
  } else if (type === "boolean") {
    return t.booleanTypeAnnotation();
  } else if (type === "function") {
    return t.genericTypeAnnotation(t.identifier("Function"));
  } else if (type === "object") {
    return t.genericTypeAnnotation(t.identifier("Object"));
  } else if (type === "symbol") {
    return t.genericTypeAnnotation(t.identifier("Symbol"));
  } else {
    throw new Error("Invalid typeof value");
  }
}

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function toFastproperties(o) {
	function Sub() {}
	Sub.prototype = o;
	var receiver = new Sub(); // create an instance
	function ic() { return typeof receiver.foo; } // perform access
	ic(); 
	ic();
	return o;
	eval("o" + o); // ensure no dead code elimination
}


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(176);

/** Used to compose bitmasks for cloning. */
var CLONE_SYMBOLS_FLAG = 4;

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return baseClone(value, CLONE_SYMBOLS_FLAG);
}

module.exports = clone;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(177),
    arrayEach = __webpack_require__(204),
    assignValue = __webpack_require__(77),
    baseAssign = __webpack_require__(206),
    baseAssignIn = __webpack_require__(216),
    cloneBuffer = __webpack_require__(219),
    copyArray = __webpack_require__(220),
    copySymbols = __webpack_require__(221),
    copySymbolsIn = __webpack_require__(223),
    getAllKeys = __webpack_require__(224),
    getAllKeysIn = __webpack_require__(225),
    getTag = __webpack_require__(56),
    initCloneArray = __webpack_require__(229),
    initCloneByTag = __webpack_require__(230),
    initCloneObject = __webpack_require__(236),
    isArray = __webpack_require__(53),
    isBuffer = __webpack_require__(80),
    isMap = __webpack_require__(238),
    isObject = __webpack_require__(18),
    isSet = __webpack_require__(240),
    keys = __webpack_require__(52);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });

    return result;
  }

  if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });

    return result;
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(27),
    stackClear = __webpack_require__(183),
    stackDelete = __webpack_require__(184),
    stackGet = __webpack_require__(185),
    stackHas = __webpack_require__(186),
    stackSet = __webpack_require__(187);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 178 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(28);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(28);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(28);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(28);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(27);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 184 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 185 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 186 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(27),
    Map = __webpack_require__(51),
    MapCache = __webpack_require__(76);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(74),
    isMasked = __webpack_require__(189),
    isObject = __webpack_require__(18),
    toSource = __webpack_require__(75);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(190);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(1);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 191 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(193),
    ListCache = __webpack_require__(27),
    Map = __webpack_require__(51);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(194),
    hashDelete = __webpack_require__(195),
    hashGet = __webpack_require__(196),
    hashHas = __webpack_require__(197),
    hashSet = __webpack_require__(198);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(29);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 195 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(29);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(29);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(29);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(30);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 200 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(30);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(30);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(30);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 204 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(8);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(31),
    keys = __webpack_require__(52);

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),
/* 207 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(209),
    isObjectLike = __webpack_require__(7);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(13),
    isObjectLike = __webpack_require__(7);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 210 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 211 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(213),
    baseUnary = __webpack_require__(25),
    nodeUtil = __webpack_require__(26);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(13),
    isLength = __webpack_require__(81),
    isObjectLike = __webpack_require__(7);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(54),
    nativeKeys = __webpack_require__(215);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(72);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(31),
    keysIn = __webpack_require__(83);

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(18),
    isPrototype = __webpack_require__(54),
    nativeKeysIn = __webpack_require__(218);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),
/* 218 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(1);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(50)(module)))

/***/ }),
/* 220 */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(31),
    getSymbols = __webpack_require__(55);

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),
/* 222 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(31),
    getSymbolsIn = __webpack_require__(85);

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(87),
    getSymbols = __webpack_require__(55),
    keys = __webpack_require__(52);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(87),
    getSymbolsIn = __webpack_require__(85),
    keysIn = __webpack_require__(83);

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(8),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(8),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(8),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 229 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(57),
    cloneDataView = __webpack_require__(232),
    cloneRegExp = __webpack_require__(233),
    cloneSymbol = __webpack_require__(234),
    cloneTypedArray = __webpack_require__(235);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(1);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(57);

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),
/* 233 */
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(48);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(57);

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(237),
    getPrototype = __webpack_require__(49),
    isPrototype = __webpack_require__(54);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(18);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMap = __webpack_require__(239),
    baseUnary = __webpack_require__(25),
    nodeUtil = __webpack_require__(26);

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(56),
    isObjectLike = __webpack_require__(7);

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsSet = __webpack_require__(241),
    baseUnary = __webpack_require__(25),
    nodeUtil = __webpack_require__(26);

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(56),
    isObjectLike = __webpack_require__(7);

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

var baseUniq = __webpack_require__(243);

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length) ? baseUniq(array) : [];
}

module.exports = uniq;


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(244),
    arrayIncludes = __webpack_require__(247),
    arrayIncludesWith = __webpack_require__(252),
    cacheHas = __webpack_require__(253),
    createSet = __webpack_require__(254),
    setToArray = __webpack_require__(89);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(76),
    setCacheAdd = __webpack_require__(245),
    setCacheHas = __webpack_require__(246);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 245 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 246 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(248);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(249),
    baseIsNaN = __webpack_require__(250),
    strictIndexOf = __webpack_require__(251);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),
/* 249 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),
/* 250 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),
/* 251 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),
/* 252 */
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),
/* 253 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(88),
    noop = __webpack_require__(255),
    setToArray = __webpack_require__(89);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


/***/ }),
/* 255 */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(5);

__webpack_require__(257);

__webpack_require__(258);

__webpack_require__(259);

__webpack_require__(260);

__webpack_require__(261);

__webpack_require__(262);

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(2);

var t = _interopRequireWildcard(_index);

var _constants = __webpack_require__(47);

var _index2 = __webpack_require__(5);

var _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

(0, _index3.default)("ArrayExpression", {
  fields: {
    elements: {
      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeOrValueType)("null", "Expression", "SpreadElement"))),
      default: []
    }
  },
  visitor: ["elements"],
  aliases: ["Expression"]
});

(0, _index3.default)("AssignmentExpression", {
  fields: {
    operator: {
      validate: (0, _index2.assertValueType)("string")
    },
    left: {
      validate: (0, _index2.assertNodeType)("LVal")
    },
    right: {
      validate: (0, _index2.assertNodeType)("Expression")
    }
  },
  builder: ["operator", "left", "right"],
  visitor: ["left", "right"],
  aliases: ["Expression"]
});

(0, _index3.default)("BinaryExpression", {
  builder: ["operator", "left", "right"],
  fields: {
    operator: {
      validate: _index2.assertOneOf.apply(undefined, _constants.BINARY_OPERATORS)
    },
    left: {
      validate: (0, _index2.assertNodeType)("Expression")
    },
    right: {
      validate: (0, _index2.assertNodeType)("Expression")
    }
  },
  visitor: ["left", "right"],
  aliases: ["Binary", "Expression"]
});

(0, _index3.default)("Directive", {
  visitor: ["value"],
  fields: {
    value: {
      validate: (0, _index2.assertNodeType)("DirectiveLiteral")
    }
  }
});

(0, _index3.default)("DirectiveLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _index2.assertValueType)("string")
    }
  }
});

(0, _index3.default)("BlockStatement", {
  builder: ["body", "directives"],
  visitor: ["directives", "body"],
  fields: {
    directives: {
      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Directive"))),
      default: []
    },
    body: {
      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Statement")))
    }
  },
  aliases: ["Scopable", "BlockParent", "Block", "Statement"]
});

(0, _index3.default)("BreakStatement", {
  visitor: ["label"],
  fields: {
    label: {
      validate: (0, _index2.assertNodeType)("Identifier"),
      optional: true
    }
  },
  aliases: ["Statement", "Terminatorless", "CompletionStatement"]
});

(0, _index3.default)("CallExpression", {
  visitor: ["callee", "arguments"],
  fields: {
    callee: {
      validate: (0, _index2.assertNodeType)("Expression")
    },
    arguments: {
      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Expression", "SpreadElement")))
    }
  },
  aliases: ["Expression"]
});

(0, _index3.default)("CatchClause", {
  visitor: ["param", "body"],
  fields: {
    param: {
      validate: (0, _index2.assertNodeType)("Identifier")
    },
    body: {
      validate: (0, _index2.assertNodeType)("BlockStatement")
    }
  },
  aliases: ["Scopable"]
});

(0, _index3.default)("ConditionalExpression", {
  visitor: ["test", "consequent", "alternate"],
  fields: {
    test: {
      validate: (0, _index2.assertNodeType)("Expression")
    },
    consequent: {
      validate: (0, _index2.assertNodeType)("Expression")
    },
    alternate: {
      validate: (0, _index2.assertNodeType)("Expression")
    }
  },
  aliases: ["Expression", "Conditional"]
});

(0, _index3.default)("ContinueStatement", {
  visitor: ["label"],
  fields: {
    label: {
      validate: (0, _index2.assertNodeType)("Identifier"),
      optional: true
    }
  },
  aliases: ["Statement", "Terminatorless", "CompletionStatement"]
});

(0, _index3.default)("DebuggerStatement", {
  aliases: ["Statement"]
});

(0, _index3.default)("DoWhileStatement", {
  visitor: ["test", "body"],
  fields: {
    test: {
      validate: (0, _index2.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _index2.assertNodeType)("Statement")
    }
  },
  aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"]
});

(0, _index3.default)("EmptyStatement", {
  aliases: ["Statement"]
});

(0, _index3.default)("ExpressionStatement", {
  visitor: ["expression"],
  fields: {
    expression: {
      validate: (0, _index2.assertNodeType)("Expression")
    }
  },
  aliases: ["Statement", "ExpressionWrapper"]
});

(0, _index3.default)("File", {
  builder: ["program", "comments", "tokens"],
  visitor: ["program"],
  fields: {
    program: {
      validate: (0, _index2.assertNodeType)("Program")
    }
  }
});

(0, _index3.default)("ForInStatement", {
  visitor: ["left", "right", "body"],
  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
  fields: {
    left: {
      validate: (0, _index2.assertNodeType)("VariableDeclaration", "LVal")
    },
    right: {
      validate: (0, _index2.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _index2.assertNodeType)("Statement")
    }
  }
});

(0, _index3.default)("ForStatement", {
  visitor: ["init", "test", "update", "body"],
  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop"],
  fields: {
    init: {
      validate: (0, _index2.assertNodeType)("VariableDeclaration", "Expression"),
      optional: true
    },
    test: {
      validate: (0, _index2.assertNodeType)("Expression"),
      optional: true
    },
    update: {
      validate: (0, _index2.assertNodeType)("Expression"),
      optional: true
    },
    body: {
      validate: (0, _index2.assertNodeType)("Statement")
    }
  }
});

(0, _index3.default)("FunctionDeclaration", {
  builder: ["id", "params", "body", "generator", "async"],
  visitor: ["id", "params", "body", "returnType", "typeParameters"],
  fields: {
    id: {
      validate: (0, _index2.assertNodeType)("Identifier")
    },
    params: {
      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("LVal")))
    },
    body: {
      validate: (0, _index2.assertNodeType)("BlockStatement")
    },
    generator: {
      default: false,
      validate: (0, _index2.assertValueType)("boolean")
    },
    async: {
      default: false,
      validate: (0, _index2.assertValueType)("boolean")
    }
  },
  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Statement", "Pureish", "Declaration"]
});

(0, _index3.default)("FunctionExpression", {
  inherits: "FunctionDeclaration",
  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
  fields: {
    id: {
      validate: (0, _index2.assertNodeType)("Identifier"),
      optional: true
    },
    params: {
      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("LVal")))
    },
    body: {
      validate: (0, _index2.assertNodeType)("BlockStatement")
    },
    generator: {
      default: false,
      validate: (0, _index2.assertValueType)("boolean")
    },
    async: {
      default: false,
      validate: (0, _index2.assertValueType)("boolean")
    }
  }
});

(0, _index3.default)("Identifier", {
  builder: ["name"],
  visitor: ["typeAnnotation"],
  aliases: ["Expression", "LVal"],
  fields: {
    name: {
      validate: function validate(node, key, val) {
        if (!t.isValidIdentifier(val)) {}
      }
    },
    decorators: {
      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Decorator")))
    }
  }
});

(0, _index3.default)("IfStatement", {
  visitor: ["test", "consequent", "alternate"],
  aliases: ["Statement", "Conditional"],
  fields: {
    test: {
      validate: (0, _index2.assertNodeType)("Expression")
    },
    consequent: {
      validate: (0, _index2.assertNodeType)("Statement")
    },
    alternate: {
      optional: true,
      validate: (0, _index2.assertNodeType)("Statement")
    }
  }
});

(0, _index3.default)("LabeledStatement", {
  visitor: ["label", "body"],
  aliases: ["Statement"],
  fields: {
    label: {
      validate: (0, _index2.assertNodeType)("Identifier")
    },
    body: {
      validate: (0, _index2.assertNodeType)("Statement")
    }
  }
});

(0, _index3.default)("StringLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _index2.assertValueType)("string")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});

(0, _index3.default)("NumericLiteral", {
  builder: ["value"],
  deprecatedAlias: "NumberLiteral",
  fields: {
    value: {
      validate: (0, _index2.assertValueType)("number")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});

(0, _index3.default)("NullLiteral", {
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});

(0, _index3.default)("BooleanLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _index2.assertValueType)("boolean")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});

(0, _index3.default)("RegExpLiteral", {
  builder: ["pattern", "flags"],
  deprecatedAlias: "RegexLiteral",
  aliases: ["Expression", "Literal"],
  fields: {
    pattern: {
      validate: (0, _index2.assertValueType)("string")
    },
    flags: {
      validate: (0, _index2.assertValueType)("string"),
      default: ""
    }
  }
});

(0, _index3.default)("LogicalExpression", {
  builder: ["operator", "left", "right"],
  visitor: ["left", "right"],
  aliases: ["Binary", "Expression"],
  fields: {
    operator: {
      validate: _index2.assertOneOf.apply(undefined, _constants.LOGICAL_OPERATORS)
    },
    left: {
      validate: (0, _index2.assertNodeType)("Expression")
    },
    right: {
      validate: (0, _index2.assertNodeType)("Expression")
    }
  }
});

(0, _index3.default)("MemberExpression", {
  builder: ["object", "property", "computed"],
  visitor: ["object", "property"],
  aliases: ["Expression", "LVal"],
  fields: {
    object: {
      validate: (0, _index2.assertNodeType)("Expression")
    },
    property: {
      validate: function validate(node, key, val) {
        var expectedType = node.computed ? "Expression" : "Identifier";
        (0, _index2.assertNodeType)(expectedType)(node, key, val);
      }
    },
    computed: {
      default: false
    }
  }
});

(0, _index3.default)("NewExpression", {
  visitor: ["callee", "arguments"],
  aliases: ["Expression"],
  fields: {
    callee: {
      validate: (0, _index2.assertNodeType)("Expression")
    },
    arguments: {
      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Expression", "SpreadElement")))
    }
  }
});

(0, _index3.default)("Program", {
  visitor: ["directives", "body"],
  builder: ["body", "directives"],
  fields: {
    directives: {
      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Directive"))),
      default: []
    },
    body: {
      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Statement")))
    }
  },
  aliases: ["Scopable", "BlockParent", "Block", "FunctionParent"]
});

(0, _index3.default)("ObjectExpression", {
  visitor: ["properties"],
  aliases: ["Expression"],
  fields: {
    properties: {
      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("ObjectMethod", "ObjectProperty", "SpreadProperty")))
    }
  }
});

(0, _index3.default)("ObjectMethod", {
  builder: ["kind", "key", "params", "body", "computed"],
  fields: {
    kind: {
      validate: (0, _index2.chain)((0, _index2.assertValueType)("string"), (0, _index2.assertOneOf)("method", "get", "set")),
      default: "method"
    },
    computed: {
      validate: (0, _index2.assertValueType)("boolean"),
      default: false
    },
    key: {
      validate: function validate(node, key, val) {
        var expectedTypes = node.computed ? ["Expression"] : ["Identifier", "StringLiteral", "NumericLiteral"];
        _index2.assertNodeType.apply(undefined, expectedTypes)(node, key, val);
      }
    },
    decorators: {
      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Decorator")))
    },
    body: {
      validate: (0, _index2.assertNodeType)("BlockStatement")
    },
    generator: {
      default: false,
      validate: (0, _index2.assertValueType)("boolean")
    },
    async: {
      default: false,
      validate: (0, _index2.assertValueType)("boolean")
    }
  },
  visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
  aliases: ["UserWhitespacable", "Function", "Scopable", "BlockParent", "FunctionParent", "Method", "ObjectMember"]
});

(0, _index3.default)("ObjectProperty", {
  builder: ["key", "value", "computed", "shorthand", "decorators"],
  fields: {
    computed: {
      validate: (0, _index2.assertValueType)("boolean"),
      default: false
    },
    key: {
      validate: function validate(node, key, val) {
        var expectedTypes = node.computed ? ["Expression"] : ["Identifier", "StringLiteral", "NumericLiteral"];
        _index2.assertNodeType.apply(undefined, expectedTypes)(node, key, val);
      }
    },
    value: {
      validate: (0, _index2.assertNodeType)("Expression", "Pattern", "RestElement")
    },
    shorthand: {
      validate: (0, _index2.assertValueType)("boolean"),
      default: false
    },
    decorators: {
      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Decorator"))),
      optional: true
    }
  },
  visitor: ["key", "value", "decorators"],
  aliases: ["UserWhitespacable", "Property", "ObjectMember"]
});

(0, _index3.default)("RestElement", {
  visitor: ["argument", "typeAnnotation"],
  aliases: ["LVal"],
  fields: {
    argument: {
      validate: (0, _index2.assertNodeType)("LVal")
    },
    decorators: {
      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Decorator")))
    }
  }
});

(0, _index3.default)("ReturnStatement", {
  visitor: ["argument"],
  aliases: ["Statement", "Terminatorless", "CompletionStatement"],
  fields: {
    argument: {
      validate: (0, _index2.assertNodeType)("Expression"),
      optional: true
    }
  }
});

(0, _index3.default)("SequenceExpression", {
  visitor: ["expressions"],
  fields: {
    expressions: {
      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Expression")))
    }
  },
  aliases: ["Expression"]
});

(0, _index3.default)("SwitchCase", {
  visitor: ["test", "consequent"],
  fields: {
    test: {
      validate: (0, _index2.assertNodeType)("Expression"),
      optional: true
    },
    consequent: {
      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Statement")))
    }
  }
});

(0, _index3.default)("SwitchStatement", {
  visitor: ["discriminant", "cases"],
  aliases: ["Statement", "BlockParent", "Scopable"],
  fields: {
    discriminant: {
      validate: (0, _index2.assertNodeType)("Expression")
    },
    cases: {
      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("SwitchCase")))
    }
  }
});

(0, _index3.default)("ThisExpression", {
  aliases: ["Expression"]
});

(0, _index3.default)("ThrowStatement", {
  visitor: ["argument"],
  aliases: ["Statement", "Terminatorless", "CompletionStatement"],
  fields: {
    argument: {
      validate: (0, _index2.assertNodeType)("Expression")
    }
  }
});

(0, _index3.default)("TryStatement", {
  visitor: ["block", "handler", "finalizer"],
  aliases: ["Statement"],
  fields: {
    body: {
      validate: (0, _index2.assertNodeType)("BlockStatement")
    },
    handler: {
      optional: true,
      handler: (0, _index2.assertNodeType)("BlockStatement")
    },
    finalizer: {
      optional: true,
      validate: (0, _index2.assertNodeType)("BlockStatement")
    }
  }
});

(0, _index3.default)("UnaryExpression", {
  builder: ["operator", "argument", "prefix"],
  fields: {
    prefix: {
      default: true
    },
    argument: {
      validate: (0, _index2.assertNodeType)("Expression")
    },
    operator: {
      validate: _index2.assertOneOf.apply(undefined, _constants.UNARY_OPERATORS)
    }
  },
  visitor: ["argument"],
  aliases: ["UnaryLike", "Expression"]
});

(0, _index3.default)("UpdateExpression", {
  builder: ["operator", "argument", "prefix"],
  fields: {
    prefix: {
      default: false
    },
    argument: {
      validate: (0, _index2.assertNodeType)("Expression")
    },
    operator: {
      validate: _index2.assertOneOf.apply(undefined, _constants.UPDATE_OPERATORS)
    }
  },
  visitor: ["argument"],
  aliases: ["Expression"]
});

(0, _index3.default)("VariableDeclaration", {
  builder: ["kind", "declarations"],
  visitor: ["declarations"],
  aliases: ["Statement", "Declaration"],
  fields: {
    kind: {
      validate: (0, _index2.chain)((0, _index2.assertValueType)("string"), (0, _index2.assertOneOf)("var", "let", "const"))
    },
    declarations: {
      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("VariableDeclarator")))
    }
  }
});

(0, _index3.default)("VariableDeclarator", {
  visitor: ["id", "init"],
  fields: {
    id: {
      validate: (0, _index2.assertNodeType)("LVal")
    },
    init: {
      optional: true,
      validate: (0, _index2.assertNodeType)("Expression")
    }
  }
});

(0, _index3.default)("WhileStatement", {
  visitor: ["test", "body"],
  aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"],
  fields: {
    test: {
      validate: (0, _index2.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _index2.assertNodeType)("BlockStatement", "Statement")
    }
  }
});

(0, _index3.default)("WithStatement", {
  visitor: ["object", "body"],
  aliases: ["Statement"],
  fields: {
    object: {
      object: (0, _index2.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _index2.assertNodeType)("BlockStatement", "Statement")
    }
  }
});

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(5);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _index2.default)("AssignmentPattern", {
  visitor: ["left", "right"],
  aliases: ["Pattern", "LVal"],
  fields: {
    left: {
      validate: (0, _index.assertNodeType)("Identifier")
    },
    right: {
      validate: (0, _index.assertNodeType)("Expression")
    },
    decorators: {
      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("Decorator")))
    }
  }
});

(0, _index2.default)("ArrayPattern", {
  visitor: ["elements", "typeAnnotation"],
  aliases: ["Pattern", "LVal"],
  fields: {
    elements: {
      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("Identifier", "Pattern", "RestElement")))
    },
    decorators: {
      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("Decorator")))
    }
  }
});

(0, _index2.default)("ArrowFunctionExpression", {
  builder: ["params", "body", "async"],
  visitor: ["params", "body", "returnType", "typeParameters"],
  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
  fields: {
    params: {
      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("LVal")))
    },
    body: {
      validate: (0, _index.assertNodeType)("BlockStatement", "Expression")
    },
    async: {
      validate: (0, _index.assertValueType)("boolean"),
      default: false
    }
  }
});

(0, _index2.default)("ClassBody", {
  visitor: ["body"],
  fields: {
    body: {
      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("ClassMethod", "ClassProperty")))
    }
  }
});

(0, _index2.default)("ClassDeclaration", {
  builder: ["id", "superClass", "body", "decorators"],
  visitor: ["id", "body", "superClass", "mixins", "typeParameters", "superTypeParameters", "implements", "decorators"],
  aliases: ["Scopable", "Class", "Statement", "Declaration", "Pureish"],
  fields: {
    id: {
      validate: (0, _index.assertNodeType)("Identifier")
    },
    body: {
      validate: (0, _index.assertNodeType)("ClassBody")
    },
    superClass: {
      optional: true,
      validate: (0, _index.assertNodeType)("Expression")
    },
    decorators: {
      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("Decorator")))
    }
  }
});

(0, _index2.default)("ClassExpression", {
  inherits: "ClassDeclaration",
  aliases: ["Scopable", "Class", "Expression", "Pureish"],
  fields: {
    id: {
      optional: true,
      validate: (0, _index.assertNodeType)("Identifier")
    },
    body: {
      validate: (0, _index.assertNodeType)("ClassBody")
    },
    superClass: {
      optional: true,
      validate: (0, _index.assertNodeType)("Expression")
    },
    decorators: {
      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("Decorator")))
    }
  }
});

(0, _index2.default)("ExportAllDeclaration", {
  visitor: ["source"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
  fields: {
    source: {
      validate: (0, _index.assertNodeType)("StringLiteral")
    }
  }
});

(0, _index2.default)("ExportDefaultDeclaration", {
  visitor: ["declaration"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
  fields: {
    declaration: {
      validate: (0, _index.assertNodeType)("FunctionDeclaration", "ClassDeclaration", "Expression")
    }
  }
});

(0, _index2.default)("ExportNamedDeclaration", {
  visitor: ["declaration", "specifiers", "source"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
  fields: {
    declaration: {
      validate: (0, _index.assertNodeType)("Declaration"),
      optional: true
    },
    specifiers: {
      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("ExportSpecifier")))
    },
    source: {
      validate: (0, _index.assertNodeType)("StringLiteral"),
      optional: true
    }
  }
});

(0, _index2.default)("ExportSpecifier", {
  visitor: ["local", "exported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, _index.assertNodeType)("Identifier")
    },
    exported: {
      validate: (0, _index.assertNodeType)("Identifier")
    }
  }
});

(0, _index2.default)("ForOfStatement", {
  visitor: ["left", "right", "body"],
  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
  fields: {
    left: {
      validate: (0, _index.assertNodeType)("VariableDeclaration", "LVal")
    },
    right: {
      validate: (0, _index.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _index.assertNodeType)("Statement")
    }
  }
});

(0, _index2.default)("ImportDeclaration", {
  visitor: ["specifiers", "source"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration"],
  fields: {
    specifiers: {
      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("ImportSpecifier", "ImportDefaultSpecifier", "ImportNamespaceSpecifier")))
    },
    source: {
      validate: (0, _index.assertNodeType)("StringLiteral")
    }
  }
});

(0, _index2.default)("ImportDefaultSpecifier", {
  visitor: ["local"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, _index.assertNodeType)("Identifier")
    }
  }
});

(0, _index2.default)("ImportNamespaceSpecifier", {
  visitor: ["local"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, _index.assertNodeType)("Identifier")
    }
  }
});

(0, _index2.default)("ImportSpecifier", {
  visitor: ["local", "imported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, _index.assertNodeType)("Identifier")
    },
    imported: {
      validate: (0, _index.assertNodeType)("Identifier")
    },
    importKind: {
      validate: (0, _index.assertOneOf)(null, "type", "typeof")
    }
  }
});

(0, _index2.default)("MetaProperty", {
  visitor: ["meta", "property"],
  aliases: ["Expression"],
  fields: {
    meta: {
      validate: (0, _index.assertValueType)("string")
    },
    property: {
      validate: (0, _index.assertValueType)("string")
    }
  }
});

(0, _index2.default)("ClassMethod", {
  aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method"],
  builder: ["kind", "key", "params", "body", "computed", "static"],
  visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
  fields: {
    kind: {
      validate: (0, _index.chain)((0, _index.assertValueType)("string"), (0, _index.assertOneOf)("get", "set", "method", "constructor")),
      default: "method"
    },
    computed: {
      default: false,
      validate: (0, _index.assertValueType)("boolean")
    },
    static: {
      default: false,
      validate: (0, _index.assertValueType)("boolean")
    },
    key: {
      validate: function validate(node, key, val) {
        var expectedTypes = node.computed ? ["Expression"] : ["Identifier", "StringLiteral", "NumericLiteral"];
        _index.assertNodeType.apply(undefined, expectedTypes)(node, key, val);
      }
    },
    params: {
      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("LVal")))
    },
    body: {
      validate: (0, _index.assertNodeType)("BlockStatement")
    },
    generator: {
      default: false,
      validate: (0, _index.assertValueType)("boolean")
    },
    async: {
      default: false,
      validate: (0, _index.assertValueType)("boolean")
    }
  }
});

(0, _index2.default)("ObjectPattern", {
  visitor: ["properties", "typeAnnotation"],
  aliases: ["Pattern", "LVal"],
  fields: {
    properties: {
      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("RestProperty", "Property")))
    },
    decorators: {
      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("Decorator")))
    }
  }
});

(0, _index2.default)("SpreadElement", {
  visitor: ["argument"],
  aliases: ["UnaryLike"],
  fields: {
    argument: {
      validate: (0, _index.assertNodeType)("Expression")
    }
  }
});

(0, _index2.default)("Super", {
  aliases: ["Expression"]
});

(0, _index2.default)("TaggedTemplateExpression", {
  visitor: ["tag", "quasi"],
  aliases: ["Expression"],
  fields: {
    tag: {
      validate: (0, _index.assertNodeType)("Expression")
    },
    quasi: {
      validate: (0, _index.assertNodeType)("TemplateLiteral")
    }
  }
});

(0, _index2.default)("TemplateElement", {
  builder: ["value", "tail"],
  fields: {
    value: {},
    tail: {
      validate: (0, _index.assertValueType)("boolean"),
      default: false
    }
  }
});

(0, _index2.default)("TemplateLiteral", {
  visitor: ["quasis", "expressions"],
  aliases: ["Expression", "Literal"],
  fields: {
    quasis: {
      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("TemplateElement")))
    },
    expressions: {
      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("Expression")))
    }
  }
});

(0, _index2.default)("YieldExpression", {
  builder: ["argument", "delegate"],
  visitor: ["argument"],
  aliases: ["Expression", "Terminatorless"],
  fields: {
    delegate: {
      validate: (0, _index.assertValueType)("boolean"),
      default: false
    },
    argument: {
      optional: true,
      validate: (0, _index.assertNodeType)("Expression")
    }
  }
});

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(5);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _index2.default)("AnyTypeAnnotation", {
  aliases: ["Flow", "FlowBaseAnnotation"],
  fields: {}
});

(0, _index2.default)("ArrayTypeAnnotation", {
  visitor: ["elementType"],
  aliases: ["Flow"],
  fields: {}
});

(0, _index2.default)("BooleanTypeAnnotation", {
  aliases: ["Flow", "FlowBaseAnnotation"],
  fields: {}
});

(0, _index2.default)("BooleanLiteralTypeAnnotation", {
  aliases: ["Flow"],
  fields: {}
});

(0, _index2.default)("NullLiteralTypeAnnotation", {
  aliases: ["Flow", "FlowBaseAnnotation"],
  fields: {}
});

(0, _index2.default)("ClassImplements", {
  visitor: ["id", "typeParameters"],
  aliases: ["Flow"],
  fields: {}
});

(0, _index2.default)("ClassProperty", {
  visitor: ["key", "value", "typeAnnotation", "decorators"],
  builder: ["key", "value", "typeAnnotation", "decorators", "computed"],
  aliases: ["Property"],
  fields: {
    computed: {
      validate: (0, _index.assertValueType)("boolean"),
      default: false
    }
  }
});

(0, _index2.default)("DeclareClass", {
  visitor: ["id", "typeParameters", "extends", "body"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {}
});

(0, _index2.default)("DeclareFunction", {
  visitor: ["id"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {}
});

(0, _index2.default)("DeclareInterface", {
  visitor: ["id", "typeParameters", "extends", "body"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {}
});

(0, _index2.default)("DeclareModule", {
  visitor: ["id", "body"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {}
});

(0, _index2.default)("DeclareModuleExports", {
  visitor: ["typeAnnotation"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {}
});

(0, _index2.default)("DeclareTypeAlias", {
  visitor: ["id", "typeParameters", "right"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {}
});

(0, _index2.default)("DeclareOpaqueType", {
  visitor: ["id", "typeParameters", "supertype"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {}
});

(0, _index2.default)("DeclareVariable", {
  visitor: ["id"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {}
});

(0, _index2.default)("DeclareExportDeclaration", {
  visitor: ["declaration", "specifiers", "source"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {}
});

(0, _index2.default)("ExistentialTypeParam", {
  aliases: ["Flow"]
});

(0, _index2.default)("FunctionTypeAnnotation", {
  visitor: ["typeParameters", "params", "rest", "returnType"],
  aliases: ["Flow"],
  fields: {}
});

(0, _index2.default)("FunctionTypeParam", {
  visitor: ["name", "typeAnnotation"],
  aliases: ["Flow"],
  fields: {}
});

(0, _index2.default)("GenericTypeAnnotation", {
  visitor: ["id", "typeParameters"],
  aliases: ["Flow"],
  fields: {}
});

(0, _index2.default)("InterfaceExtends", {
  visitor: ["id", "typeParameters"],
  aliases: ["Flow"],
  fields: {}
});

(0, _index2.default)("InterfaceDeclaration", {
  visitor: ["id", "typeParameters", "extends", "body"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {}
});

(0, _index2.default)("IntersectionTypeAnnotation", {
  visitor: ["types"],
  aliases: ["Flow"],
  fields: {}
});

(0, _index2.default)("MixedTypeAnnotation", {
  aliases: ["Flow", "FlowBaseAnnotation"]
});

(0, _index2.default)("EmptyTypeAnnotation", {
  aliases: ["Flow", "FlowBaseAnnotation"]
});

(0, _index2.default)("NullableTypeAnnotation", {
  visitor: ["typeAnnotation"],
  aliases: ["Flow"],
  fields: {}
});

(0, _index2.default)("NumericLiteralTypeAnnotation", {
  aliases: ["Flow"],
  fields: {}
});

(0, _index2.default)("NumberTypeAnnotation", {
  aliases: ["Flow", "FlowBaseAnnotation"],
  fields: {}
});

(0, _index2.default)("StringLiteralTypeAnnotation", {
  aliases: ["Flow"],
  fields: {}
});

(0, _index2.default)("StringTypeAnnotation", {
  aliases: ["Flow", "FlowBaseAnnotation"],
  fields: {}
});

(0, _index2.default)("ThisTypeAnnotation", {
  aliases: ["Flow", "FlowBaseAnnotation"],
  fields: {}
});

(0, _index2.default)("TupleTypeAnnotation", {
  visitor: ["types"],
  aliases: ["Flow"],
  fields: {}
});

(0, _index2.default)("TypeofTypeAnnotation", {
  visitor: ["argument"],
  aliases: ["Flow"],
  fields: {}
});

(0, _index2.default)("TypeAlias", {
  visitor: ["id", "typeParameters", "right"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {}
});

(0, _index2.default)("OpaqueType", {
  visitor: ["id", "typeParameters", "impltype", "supertype"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {}
});

(0, _index2.default)("TypeAnnotation", {
  visitor: ["typeAnnotation"],
  aliases: ["Flow"],
  fields: {}
});

(0, _index2.default)("TypeCastExpression", {
  visitor: ["expression", "typeAnnotation"],
  aliases: ["Flow", "ExpressionWrapper", "Expression"],
  fields: {}
});

(0, _index2.default)("TypeParameter", {
  visitor: ["bound"],
  aliases: ["Flow"],
  fields: {}
});

(0, _index2.default)("TypeParameterDeclaration", {
  visitor: ["params"],
  aliases: ["Flow"],
  fields: {}
});

(0, _index2.default)("TypeParameterInstantiation", {
  visitor: ["params"],
  aliases: ["Flow"],
  fields: {}
});

(0, _index2.default)("ObjectTypeAnnotation", {
  visitor: ["properties", "indexers", "callProperties"],
  aliases: ["Flow"],
  fields: {}
});

(0, _index2.default)("ObjectTypeCallProperty", {
  visitor: ["value"],
  aliases: ["Flow", "UserWhitespacable"],
  fields: {}
});

(0, _index2.default)("ObjectTypeIndexer", {
  visitor: ["id", "key", "value"],
  aliases: ["Flow", "UserWhitespacable"],
  fields: {}
});

(0, _index2.default)("ObjectTypeProperty", {
  visitor: ["key", "value"],
  aliases: ["Flow", "UserWhitespacable"],
  fields: {}
});

(0, _index2.default)("ObjectTypeSpreadProperty", {
  visitor: ["argument"],
  aliases: ["Flow", "UserWhitespacable"],
  fields: {}
});

(0, _index2.default)("QualifiedTypeIdentifier", {
  visitor: ["id", "qualification"],
  aliases: ["Flow"],
  fields: {}
});

(0, _index2.default)("UnionTypeAnnotation", {
  visitor: ["types"],
  aliases: ["Flow"],
  fields: {}
});

(0, _index2.default)("VoidTypeAnnotation", {
  aliases: ["Flow", "FlowBaseAnnotation"],
  fields: {}
});

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(5);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _index2.default)("JSXAttribute", {
  visitor: ["name", "value"],
  aliases: ["JSX", "Immutable"],
  fields: {
    name: {
      validate: (0, _index.assertNodeType)("JSXIdentifier", "JSXNamespacedName")
    },
    value: {
      optional: true,
      validate: (0, _index.assertNodeType)("JSXElement", "StringLiteral", "JSXExpressionContainer")
    }
  }
});

(0, _index2.default)("JSXClosingElement", {
  visitor: ["name"],
  aliases: ["JSX", "Immutable"],
  fields: {
    name: {
      validate: (0, _index.assertNodeType)("JSXIdentifier", "JSXMemberExpression")
    }
  }
});

(0, _index2.default)("JSXElement", {
  builder: ["openingElement", "closingElement", "children", "selfClosing"],
  visitor: ["openingElement", "children", "closingElement"],
  aliases: ["JSX", "Immutable", "Expression"],
  fields: {
    openingElement: {
      validate: (0, _index.assertNodeType)("JSXOpeningElement")
    },
    closingElement: {
      optional: true,
      validate: (0, _index.assertNodeType)("JSXClosingElement")
    },
    children: {
      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement")))
    }
  }
});

(0, _index2.default)("JSXEmptyExpression", {
  aliases: ["JSX", "Expression"]
});

(0, _index2.default)("JSXExpressionContainer", {
  visitor: ["expression"],
  aliases: ["JSX", "Immutable"],
  fields: {
    expression: {
      validate: (0, _index.assertNodeType)("Expression")
    }
  }
});

(0, _index2.default)("JSXSpreadChild", {
  visitor: ["expression"],
  aliases: ["JSX", "Immutable"],
  fields: {
    expression: {
      validate: (0, _index.assertNodeType)("Expression")
    }
  }
});

(0, _index2.default)("JSXIdentifier", {
  builder: ["name"],
  aliases: ["JSX", "Expression"],
  fields: {
    name: {
      validate: (0, _index.assertValueType)("string")
    }
  }
});

(0, _index2.default)("JSXMemberExpression", {
  visitor: ["object", "property"],
  aliases: ["JSX", "Expression"],
  fields: {
    object: {
      validate: (0, _index.assertNodeType)("JSXMemberExpression", "JSXIdentifier")
    },
    property: {
      validate: (0, _index.assertNodeType)("JSXIdentifier")
    }
  }
});

(0, _index2.default)("JSXNamespacedName", {
  visitor: ["namespace", "name"],
  aliases: ["JSX"],
  fields: {
    namespace: {
      validate: (0, _index.assertNodeType)("JSXIdentifier")
    },
    name: {
      validate: (0, _index.assertNodeType)("JSXIdentifier")
    }
  }
});

(0, _index2.default)("JSXOpeningElement", {
  builder: ["name", "attributes", "selfClosing"],
  visitor: ["name", "attributes"],
  aliases: ["JSX", "Immutable"],
  fields: {
    name: {
      validate: (0, _index.assertNodeType)("JSXIdentifier", "JSXMemberExpression")
    },
    selfClosing: {
      default: false,
      validate: (0, _index.assertValueType)("boolean")
    },
    attributes: {
      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("JSXAttribute", "JSXSpreadAttribute")))
    }
  }
});

(0, _index2.default)("JSXSpreadAttribute", {
  visitor: ["argument"],
  aliases: ["JSX"],
  fields: {
    argument: {
      validate: (0, _index.assertNodeType)("Expression")
    }
  }
});

(0, _index2.default)("JSXText", {
  aliases: ["JSX", "Immutable"],
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _index.assertValueType)("string")
    }
  }
});

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(5);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _index2.default)("Noop", {
  visitor: []
});

(0, _index2.default)("ParenthesizedExpression", {
  visitor: ["expression"],
  aliases: ["Expression", "ExpressionWrapper"],
  fields: {
    expression: {
      validate: (0, _index.assertNodeType)("Expression")
    }
  }
});

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(5);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _index2.default)("AwaitExpression", {
  builder: ["argument"],
  visitor: ["argument"],
  aliases: ["Expression", "Terminatorless"],
  fields: {
    argument: {
      validate: (0, _index.assertNodeType)("Expression")
    }
  }
});

(0, _index2.default)("ForAwaitStatement", {
  visitor: ["left", "right", "body"],
  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
  fields: {
    left: {
      validate: (0, _index.assertNodeType)("VariableDeclaration", "LVal")
    },
    right: {
      validate: (0, _index.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _index.assertNodeType)("Statement")
    }
  }
});

(0, _index2.default)("BindExpression", {
  visitor: ["object", "callee"],
  aliases: ["Expression"],
  fields: {}
});

(0, _index2.default)("Import", {
  aliases: ["Expression"]
});

(0, _index2.default)("Decorator", {
  visitor: ["expression"],
  fields: {
    expression: {
      validate: (0, _index.assertNodeType)("Expression")
    }
  }
});

(0, _index2.default)("DoExpression", {
  visitor: ["body"],
  aliases: ["Expression"],
  fields: {
    body: {
      validate: (0, _index.assertNodeType)("BlockStatement")
    }
  }
});

(0, _index2.default)("ExportDefaultSpecifier", {
  visitor: ["exported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    exported: {
      validate: (0, _index.assertNodeType)("Identifier")
    }
  }
});

(0, _index2.default)("ExportNamespaceSpecifier", {
  visitor: ["exported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    exported: {
      validate: (0, _index.assertNodeType)("Identifier")
    }
  }
});

(0, _index2.default)("RestProperty", {
  visitor: ["argument"],
  aliases: ["UnaryLike"],
  fields: {
    argument: {
      validate: (0, _index.assertNodeType)("LVal")
    }
  }
});

(0, _index2.default)("SpreadProperty", {
  visitor: ["argument"],
  aliases: ["UnaryLike"],
  fields: {
    argument: {
      validate: (0, _index.assertNodeType)("Expression")
    }
  }
});

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isReactComponent = undefined;
exports.isCompatTag = isCompatTag;
exports.buildChildren = buildChildren;

var _index = __webpack_require__(2);

var t = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var isReactComponent = exports.isReactComponent = t.buildMatchMemberExpression("React.Component");

function isCompatTag(tagName) {
  return !!tagName && /^[a-z]|\-/.test(tagName);
}

function cleanJSXElementLiteralChild(child, args) {
  var lines = child.value.split(/\r\n|\n|\r/);

  var lastNonEmptyLine = 0;

  for (var i = 0; i < lines.length; i++) {
    if (lines[i].match(/[^ \t]/)) {
      lastNonEmptyLine = i;
    }
  }

  var str = "";

  for (var _i = 0; _i < lines.length; _i++) {
    var line = lines[_i];

    var isFirstLine = _i === 0;
    var isLastLine = _i === lines.length - 1;
    var isLastNonEmptyLine = _i === lastNonEmptyLine;

    var trimmedLine = line.replace(/\t/g, " ");

    if (!isFirstLine) {
      trimmedLine = trimmedLine.replace(/^[ ]+/, "");
    }

    if (!isLastLine) {
      trimmedLine = trimmedLine.replace(/[ ]+$/, "");
    }

    if (trimmedLine) {
      if (!isLastNonEmptyLine) {
        trimmedLine += " ";
      }

      str += trimmedLine;
    }
  }

  if (str) args.push(t.stringLiteral(str));
}

function buildChildren(node) {
  var elems = [];

  for (var i = 0; i < node.children.length; i++) {
    var child = node.children[i];

    if (t.isJSXText(child)) {
      cleanJSXElementLiteralChild(child, elems);
      continue;
    }

    if (t.isJSXExpressionContainer(child)) child = child.expression;
    if (t.isJSXEmptyExpression(child)) continue;

    elems.push(child);
  }

  return elems;
}

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 266 */
/***/ (function(module, exports) {

var sectionOtziviContentEl = document.querySelector('.reviews__content');
var sectionOtziviEl = document.querySelector('.reviews');

function makeVideoResponsive(e) {
  var windowWidth = parseInt(document.documentElement.clientWidth);

  if (windowWidth < 480) {
    sectionOtziviEl.style.height = "".concat(parseInt(getComputedStyle(sectionOtziviContentEl).height) + 250, "px");
  } else {
    sectionOtziviEl.style.height = "".concat(parseInt(getComputedStyle(sectionOtziviContentEl).height) + 200, "px");
  }
}

window.addEventListener('resize', makeVideoResponsive);
window.addEventListener('load', makeVideoResponsive);

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 270 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/blocks/_reset.scss
var _reset = __webpack_require__(90);

// EXTERNAL MODULE: ./src/blocks/contacts/_contacts.scss
var _contacts = __webpack_require__(91);

// EXTERNAL MODULE: ./src/blocks/page/_page.scss
var _page = __webpack_require__(94);

// EXTERNAL MODULE: ./src/blocks/page/page.js
var page = __webpack_require__(95);

// EXTERNAL MODULE: ./src/blocks/text/_text.scss
var _text = __webpack_require__(96);

// EXTERNAL MODULE: ./src/blocks/heading/_heading.scss
var _heading = __webpack_require__(97);

// EXTERNAL MODULE: ./src/blocks/embed/_embed.scss
var _embed = __webpack_require__(98);

// EXTERNAL MODULE: ./src/blocks/icons/_icons.scss
var _icons = __webpack_require__(99);

// EXTERNAL MODULE: ./src/blocks/logo/_logo.scss
var _logo = __webpack_require__(100);

// EXTERNAL MODULE: ./src/blocks/img-svg/_img-svg.scss
var _img_svg = __webpack_require__(101);

// EXTERNAL MODULE: ./src/blocks/header/_header.scss
var _header = __webpack_require__(102);

// CONCATENATED MODULE: ./src/blocks/btn/btn.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Btn =
/*#__PURE__*/
function () {
  function Btn(config) {
    _classCallCheck(this, Btn);

    this._config = config;
  }

  _createClass(Btn, [{
    key: "handleEvent",
    value: function handleEvent(e) {
      if (e.type === 'click') {
        e.preventDefault();

        this._config.modal.openModal(this._config.modal.dialog);
      }
    }
  }, {
    key: "findElByID",
    value: function findElByID(id) {
      return document.querySelector("#".concat(id));
    }
  }, {
    key: "findElByClass",
    value: function findElByClass(className) {
      return document.querySelector(".".concat(className));
    }
  }]);

  return Btn;
}();


// CONCATENATED MODULE: ./src/blocks/modal/modal.js
function modal_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function modal_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function modal_createClass(Constructor, protoProps, staticProps) { if (protoProps) modal_defineProperties(Constructor.prototype, protoProps); if (staticProps) modal_defineProperties(Constructor, staticProps); return Constructor; }

var Modal =
/*#__PURE__*/
function () {
  function Modal(config) {
    var _this = this;

    modal_classCallCheck(this, Modal);

    this._config = config;
    this._backdrop = document.querySelector(".".concat(this._config.classes.backdrop));
    this._opened = false;
    this._closeBtn = document.querySelector(".".concat(this._config.classes.backdrop, " .").concat(this._config.classes.closeBtn));
    this.dialog = document.querySelector("#".concat(this._config.IDs.dialog));
    document.addEventListener('keydown', function (e) {
      return _this.onKeydown(e);
    });
    document.addEventListener('click', function (e) {
      return _this.onClick(e);
    });
  } // confirm order moda:


  modal_createClass(Modal, [{
    key: "onClick",
    value: function onClick(e) {
      var clickedEl = e.target;

      if (clickedEl === this._backdrop || clickedEl === this._closeBtn) {
        this.closeModal(this.dialog); // webinar signup modal: this.closeModal();
      }
    }
  }, {
    key: "onKeydown",
    value: function onKeydown(e) {
      if (this._openedDialog && e.code === 'Escape') {
        var videoInModal = this._openedDialog.querySelector(".".concat(this._config.classes.video));

        if (videoInModal) this.stopVideo(videoInModal);
        this.toggleBackdrop();
        this._opened = false;
        document.body.style.overflow = '';
        return;
      }
    }
  }, {
    key: "toggleBackdrop",
    value: function toggleBackdrop() {
      this._backdrop.classList.toggle(this._config.classes.backdropStateModifier);
    }
  }, {
    key: "openModal",
    value: function openModal(dialog) {
      var newDialog = document.querySelector("#".concat(dialog.id));
      var visibleDialog = document.querySelector(".".concat(this._config.classes.dialogStateModifier));
      this._opened = !this._opened;
      this.toggleBackdrop();
      if (visibleDialog) this.hideDialog(visibleDialog);
      this.showDialog(newDialog);
      this._openedDialog = newDialog;
      document.body.style.overflow = 'hidden';
    }
  }, {
    key: "closeModal",
    value: function closeModal(el) {
      if (this._opened) {
        // handle video:
        var videoBlock = this._openedDialog && this._openedDialog.querySelector(".".concat(this._config.classes.video));

        if (videoBlock) this.stopVideo(videoBlock); //

        this._opened = !this._opened;
        this.toggleBackdrop();
        delete this._openedDialog;
        this.hideDialog(el);
        document.body.style.overflow = '';
        return;
      }
    }
  }, {
    key: "hideDialog",
    value: function hideDialog(dialog) {
      dialog.classList.remove(this._config.classes.dialogStateModifier);
    }
  }, {
    key: "showDialog",
    value: function showDialog(dialog) {
      dialog.classList.add(this._config.classes.dialogStateModifier);
    }
  }, {
    key: "stopVideo",
    value: function stopVideo(element) {
      /* Stop an iframe or HTML5 <video> from playing.
       param { element} - the element that contains the video */
      var iframe = element.querySelector('iframe');
      var video = element.querySelector('video');

      if (iframe) {
        var iframeSrc = iframe.src;
        iframe.src = iframeSrc;
      }

      if (video) video.pause();
    }
  }]);

  return Modal;
}();


// CONCATENATED MODULE: ./src/blocks/video-modal/video-modal.js

var videoModal = new Modal({
  IDs: {
    dialog: 'video-dialog'
  },

  /* all class names used in HTML related to modal window component: */
  classes: {
    backdrop: 'modal_video',
    backdropStateModifier: 'modal_visible',
    dialogStateModifier: 'modal__dialog_visible',
    closeBtn: 'modal__close-btn',
    video: 'embed'
  }
});

// CONCATENATED MODULE: ./src/blocks/main/main.js


var videoTriggerBtnEl = document.querySelector('#video-trigger-btn');
var videoTriggerBtn = new Btn({
  btn: videoTriggerBtnEl,
  modal: videoModal
});
videoTriggerBtnEl.addEventListener('click', videoTriggerBtn);
// EXTERNAL MODULE: ./src/blocks/main/_main.scss
var _main = __webpack_require__(103);

// EXTERNAL MODULE: ./src/blocks/benefits1/_benefits1.scss
var _benefits1 = __webpack_require__(104);

// EXTERNAL MODULE: ./src/blocks/benefits2/_benefits2.scss
var _benefits2 = __webpack_require__(105);

// EXTERNAL MODULE: ./src/blocks/benefits3/_benefits3.scss
var _benefits3 = __webpack_require__(106);

// EXTERNAL MODULE: ./src/blocks/benefits4/_benefits4.scss
var _benefits4 = __webpack_require__(107);

// EXTERNAL MODULE: ./src/blocks/benefits5/_benefits5.scss
var _benefits5 = __webpack_require__(108);

// EXTERNAL MODULE: ./src/blocks/certificates/_certificates.scss
var _certificates = __webpack_require__(109);

// EXTERNAL MODULE: ./src/blocks/webinars/_webinars.scss
var _webinars = __webpack_require__(110);

// EXTERNAL MODULE: ./src/blocks/order/_order.scss
var _order = __webpack_require__(111);

// EXTERNAL MODULE: ./src/blocks/order-calculator/_order-calculator.scss
var _order_calculator = __webpack_require__(112);

// CONCATENATED MODULE: ./src/blocks/telegram-bot/telegram-bot.js
function telegram_bot_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function telegram_bot_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function telegram_bot_createClass(Constructor, protoProps, staticProps) { if (protoProps) telegram_bot_defineProperties(Constructor.prototype, protoProps); if (staticProps) telegram_bot_defineProperties(Constructor, staticProps); return Constructor; }

var TelegramBot =
/*#__PURE__*/
function () {
  function TelegramBot(_ref) {
    var name = _ref.name,
        authToken = _ref.authToken,
        chatID = _ref.chatID,
        parseMode = _ref.parseMode,
        disableNotif = _ref.disableNotif;

    telegram_bot_classCallCheck(this, TelegramBot);

    this.name = name;
    this.authToken = authToken;
    this.chatID = chatID;
    this.parseMode = parseMode;
    this.disableNotif = disableNotif;
  }

  telegram_bot_createClass(TelegramBot, [{
    key: "createOrderMsg",
    value: function createOrderMsg(_ref2) {
      var name = _ref2.name,
          email = _ref2.email,
          tel = _ref2.tel,
          address = _ref2.address;
      return "\u0417\u0410\u041A\u0410\u0417 \u0420\u0423\u0427\u041A\u0418 %0A %0A\n    \u0418\u043C\u044F: ".concat(name, " %0A\n    E-mail: ").concat(email, " %0A\n    \u0422\u0435\u043B\u0435\u0444\u043E\u043D: ").concat(tel, " %0A\n    \u0410\u0434\u0440\u0435\u0441: ").concat(address);
    }
  }, {
    key: "createWebinarSignupMsg",
    value: function createWebinarSignupMsg(_ref3) {
      var name = _ref3.name,
          email = _ref3.email,
          tel = _ref3.tel;
      return "\u0417\u0410\u041F\u0418\u0421\u042C \u041D\u0410 \u0412\u0415\u0411\u0418\u041D\u0410\u0420 %0A %0A \n    \u0418\u043C\u044F: ".concat(name, " %0A \n    E-mail: ").concat(email, " %0A \n    \u0422\u0435\u043B\u0435\u0444\u043E\u043D: ").concat(tel);
    } // Helper function to find out bot's chatID when you create a new bot.
    //
    // Before calling this function, open Telegram and send two messages
    // with any text to your bot, otherwise the function won't be able to
    // retrieve chatID:

  }, {
    key: "retrieveChatID",
    value: function retrieveChatID(authToken) {
      var url = "https://api.telegram.org/bot".concat(authToken, "/getUpdates");
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (response) {
        // Telegram chat ID is the same for all messages:
        var chatID = response.result[0].message.chat.id;
        console.log(chatID);
      }).catch(function (error) {
        throw new Error(error);
      });
    }
  }]);

  return TelegramBot;
}();

var userConfigs = [{
  name: 'Andrey Ponomarev',
  authToken: '906724281:AAHXgqvLA_iKEZozDg3yML0InQBPg4nHfng',
  chatID: '338459496',
  parseMode: 'Markdown',
  disableNotif: true
}, {
  name: 'Evgeniy Paykachev',
  authToken: '882907516:AAGrseLPtW0TvCaB5a1yk_MxiZVRvQjhXRQ',
  chatID: '935966517',
  parseMode: 'Markdown',
  disableNotif: true
}];
var myTelegramBot = new TelegramBot(userConfigs[0]);
var ypenTelegramBot = new TelegramBot(userConfigs[1]);

// EXTERNAL MODULE: ./src/blocks/btn/_btn.scss
var _btn = __webpack_require__(113);

// EXTERNAL MODULE: ./src/blocks/form-group/_form-group.scss
var _form_group = __webpack_require__(114);

// CONCATENATED MODULE: ./src/blocks/form-group/form-group.js
function form_group_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function form_group_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function form_group_createClass(Constructor, protoProps, staticProps) { if (protoProps) form_group_defineProperties(Constructor.prototype, protoProps); if (staticProps) form_group_defineProperties(Constructor, staticProps); return Constructor; }

var FormGroup =
/*#__PURE__*/
function () {
  function FormGroup(config) {
    form_group_classCallCheck(this, FormGroup);

    this._config = config;
    this._orderBlock = document.querySelector("#".concat(this._config.blockID));

    for (var id in this._config.inputIDs) {
      this["".concat(id)] = document.querySelector("#".concat(this._config.inputIDs[id]));
    }
  }

  form_group_createClass(FormGroup, [{
    key: "validateName",
    value: function validateName(inputEl) {
      var regex = /^[a-zA-Zа-яА-ЯёЁ]+\s[a-zA-Zа-яА-ЯёЁ]+$/;
      var inputValue = inputEl.value;
      inputEl.parentElement.classList.remove('form-group_validation_success', 'form-group_validation_error');

      if (regex.test(inputValue)) {
        inputEl.parentElement.classList.add('form-group_validation_success');
        return true;
      } else {
        inputEl.parentElement.classList.add('form-group_validation_error');
        var tip = inputEl.parentElement.querySelector('.form-group__tip');
        tip.classList.remove('form-group__tip_hidden');
      }
    }
  }, {
    key: "validateEmail",
    value: function validateEmail(inputEl) {
      var regex = /^\w+\.?\w*@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      var inputValue = inputEl.value.toLowerCase();
      inputEl.parentElement.classList.remove('form-group_validation_success', 'form-group_validation_error');

      if (regex.test(inputValue)) {
        inputEl.parentElement.classList.add('form-group_validation_success');
        return true;
      } else {
        inputEl.parentElement.classList.add('form-group_validation_error');
        var tip = inputEl.parentElement.querySelector('.form-group__tip');
        tip.classList.remove('form-group__tip_hidden');
      }
    }
  }, {
    key: "validateTel",
    value: function validateTel(inputEl) {
      var regex = /^[0-9()+-\s]+$/;
      var inputValue = inputEl.value;
      inputEl.parentElement.classList.remove('form-group_validation_success', 'form-group_validation_error');

      if (regex.test(inputValue)) {
        inputEl.parentElement.classList.add('form-group_validation_success');
        return true;
      } else {
        inputEl.parentElement.classList.add('form-group_validation_error');
        var tip = inputEl.parentElement.querySelector('.form-group__tip');
        tip.classList.remove('form-group__tip_hidden');
      }
    }
  }, {
    key: "validateAddress",
    value: function validateAddress(inputEl) {
      var regex = /^.+$/;
      var inputValue = inputEl.value;
      inputEl.parentElement.classList.remove('form-group_validation_success', 'form-group_validation_error');

      if (regex.test(inputValue)) {
        inputEl.parentElement.classList.add('form-group_validation_success');
        return true;
      } else {
        inputEl.parentElement.classList.add('form-group_validation_error');
        var tip = inputEl.parentElement.querySelector('.form-group__tip');
        tip.classList.remove('form-group__tip_hidden');
      }
    }
  }, {
    key: "resetInputs",
    value: function resetInputs() {
      for (var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++) {
        inputs[_key] = arguments[_key];
      }

      inputs.forEach(function (input) {
        var tip = input.parentElement.querySelector('.form-group__tip');
        tip.classList.add('form-group__tip_hidden');
        input.value = '';
        input.parentElement.classList.remove('form-group_validation_success', 'form-group_validation_error');
      });
    }
  }]);

  return FormGroup;
}();


// EXTERNAL MODULE: ./src/blocks/modal/_modal.scss
var _modal = __webpack_require__(115);

// CONCATENATED MODULE: ./src/blocks/webinar-signup-modal/webinar-signup-modal.js

var webinarSignupModal = new Modal({
  IDs: {
    dialog: 'webinar-sign-up-dialog'
  },

  /* all class names used in HTML related to modal window component: */
  classes: {
    backdrop: 'modal_webinar-signup',
    backdropStateModifier: 'modal_visible',
    dialogStateModifier: 'modal__dialog_visible',
    closeBtn: 'modal__close-btn',
    video: 'embed'
  }
});

// EXTERNAL MODULE: ./src/blocks/webinar-signup-btn/_webinar-signup-btn.scss
var _webinar_signup_btn = __webpack_require__(116);

// CONCATENATED MODULE: ./src/blocks/webinar-signup-form-group/webinar-signup-form-group.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function webinar_signup_form_group_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function webinar_signup_form_group_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function webinar_signup_form_group_createClass(Constructor, protoProps, staticProps) { if (protoProps) webinar_signup_form_group_defineProperties(Constructor.prototype, protoProps); if (staticProps) webinar_signup_form_group_defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var WebinarSignupFormGroup =
/*#__PURE__*/
function (_FormGroup) {
  _inherits(WebinarSignupFormGroup, _FormGroup);

  function WebinarSignupFormGroup(config) {
    var _this;

    webinar_signup_form_group_classCallCheck(this, WebinarSignupFormGroup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WebinarSignupFormGroup).call(this, config));

    _this.name.addEventListener('focusout', function () {
      console.log(_this.name);

      _get(_getPrototypeOf(WebinarSignupFormGroup.prototype), "validateName", _assertThisInitialized(_this)).call(_assertThisInitialized(_this), _this.name);
    });

    _this.email.addEventListener('focusout', function () {
      _this.validateEmail(_this.email);
    });

    _this.tel.addEventListener('focusout', function () {
      _this.validateTel(_this.tel);
    });

    return _this;
  }

  webinar_signup_form_group_createClass(WebinarSignupFormGroup, [{
    key: "inputsData",
    get: function get() {
      return {
        name: this.name.value,
        email: this.email.value,
        tel: this.tel.value
      };
    }
  }]);

  return WebinarSignupFormGroup;
}(FormGroup);

var config = {
  // blockID: 'order',
  inputIDs: {
    name: 'webinar-sign-up-name',
    email: 'webinar-sign-up-email',
    tel: 'webinar-sign-up-tel'
  }
};
var webinarSignupFormGroup = new WebinarSignupFormGroup(config); //console.log(webinarSignupFormGroup);


// CONCATENATED MODULE: ./src/blocks/webinar-signup-btn/webinar-signup-btn.js
function webinar_signup_btn_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { webinar_signup_btn_typeof = function _typeof(obj) { return typeof obj; }; } else { webinar_signup_btn_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return webinar_signup_btn_typeof(obj); }

function webinar_signup_btn_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function webinar_signup_btn_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function webinar_signup_btn_createClass(Constructor, protoProps, staticProps) { if (protoProps) webinar_signup_btn_defineProperties(Constructor.prototype, protoProps); if (staticProps) webinar_signup_btn_defineProperties(Constructor, staticProps); return Constructor; }

function webinar_signup_btn_possibleConstructorReturn(self, call) { if (call && (webinar_signup_btn_typeof(call) === "object" || typeof call === "function")) { return call; } return webinar_signup_btn_assertThisInitialized(self); }

function webinar_signup_btn_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function webinar_signup_btn_getPrototypeOf(o) { webinar_signup_btn_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return webinar_signup_btn_getPrototypeOf(o); }

function webinar_signup_btn_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) webinar_signup_btn_setPrototypeOf(subClass, superClass); }

function webinar_signup_btn_setPrototypeOf(o, p) { webinar_signup_btn_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return webinar_signup_btn_setPrototypeOf(o, p); }

/*
 * Telegram API Doc:
 * https://core.telegram.org/bots/api#available-methods
 *
 * Bot for creating new bots:
 * https://telegram.me/botfather
 * How to use: https://core.telegram.org/bots
 *
 */





var webinar_signup_btn_WebinarSignupBtn =
/*#__PURE__*/
function (_Btn) {
  webinar_signup_btn_inherits(WebinarSignupBtn, _Btn);

  function WebinarSignupBtn(config) {
    webinar_signup_btn_classCallCheck(this, WebinarSignupBtn);

    return webinar_signup_btn_possibleConstructorReturn(this, webinar_signup_btn_getPrototypeOf(WebinarSignupBtn).call(this, config));
  }

  webinar_signup_btn_createClass(WebinarSignupBtn, [{
    key: "handleEvent",
    value: function handleEvent(e) {
      var _this = this;

      if (e.type === 'click') {
        var isValid = webinarSignupFormGroup.validateName(webinarSignupFormGroup.name) && webinarSignupFormGroup.validateEmail(webinarSignupFormGroup.email) && webinarSignupFormGroup.validateTel(webinarSignupFormGroup.tel);

        if (isValid) {
          this.sendInputTo(this._config.bots);
          this._config.btn.textContent = 'Спасибо!';
          setTimeout(function () {
            webinarSignupModal.closeModal(_this._config.modal.dialog);
            webinarSignupFormGroup.resetInputs(webinarSignupFormGroup.name, webinarSignupFormGroup.email, webinarSignupFormGroup.tel);
            _this._config.btn.textContent = 'Записаться на вебинар';
          }, this._config.timeoutBeforeBtnTextChange);
        } else throw new Error('Invalid input');
      }
    }
  }, {
    key: "sendInputTo",
    value: function sendInputTo(bots) {
      bots.forEach(function (bot) {
        // console.log(bot.authToken, bot.chatID, bot.parseMode, bot.disableNotif);
        var url = "https://api.telegram.org/bot".concat(bot.authToken, "/sendMessage?chat_id=").concat(bot.chatID, "&text=\"").concat(bot.createWebinarSignupMsg(webinarSignupFormGroup.inputsData), "\"&parse_mode=").concat(bot.parseMode, "&disable_notification=").concat(bot.disableNotif);
        fetch(url).then(function (response) {
          return response.json();
        }).then(function (response) {
          console.log("Response from bot: ".concat(response.result.from.first_name, " (").concat(response.result.from.username, ") "), response);
        }).catch(function (error) {
          throw new Error(error);
        });
      });
    }
  }]);

  return WebinarSignupBtn;
}(Btn); //


var webinarSignupTriggerBtnEl = document.querySelector('#webinar-signup-trigger-btn');
var webinarSignupTriggerBtn = new Btn({
  btn: webinarSignupTriggerBtnEl,
  modal: webinarSignupModal
});
webinarSignupTriggerBtnEl.addEventListener('click', webinarSignupTriggerBtn); //

var webinarSignupBtnEl = document.querySelector('#webinar-signup-btn');
var webinarSignupBtn = new webinar_signup_btn_WebinarSignupBtn({
  btn: webinarSignupBtnEl,
  modal: webinarSignupModal,
  timeoutBeforeBtnTextChange: 2000,
  bots: [myTelegramBot, ypenTelegramBot]
});
webinarSignupBtnEl.addEventListener('click', webinarSignupBtn);
// EXTERNAL MODULE: ./src/blocks/order-btn/_order-btn.scss
var _order_btn = __webpack_require__(117);

// CONCATENATED MODULE: ./src/blocks/confirm-order-modal/confirm-order-modal.js

var confirmOrderModal = new Modal({
  IDs: {
    dialog: 'confirm-order-dialog'
  },

  /* all class names used in HTML related to modal window component: */
  classes: {
    backdrop: 'modal_confirm-order',
    backdropStateModifier: 'modal_visible',
    dialogStateModifier: 'modal__dialog_visible',
    closeBtn: 'modal__close-btn'
  }
});

// CONCATENATED MODULE: ./src/blocks/order-form-group/order-form-group.js
function order_form_group_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { order_form_group_typeof = function _typeof(obj) { return typeof obj; }; } else { order_form_group_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return order_form_group_typeof(obj); }

function order_form_group_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function order_form_group_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function order_form_group_createClass(Constructor, protoProps, staticProps) { if (protoProps) order_form_group_defineProperties(Constructor.prototype, protoProps); if (staticProps) order_form_group_defineProperties(Constructor, staticProps); return Constructor; }

function order_form_group_possibleConstructorReturn(self, call) { if (call && (order_form_group_typeof(call) === "object" || typeof call === "function")) { return call; } return order_form_group_assertThisInitialized(self); }

function order_form_group_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function order_form_group_getPrototypeOf(o) { order_form_group_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return order_form_group_getPrototypeOf(o); }

function order_form_group_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) order_form_group_setPrototypeOf(subClass, superClass); }

function order_form_group_setPrototypeOf(o, p) { order_form_group_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return order_form_group_setPrototypeOf(o, p); }



var OrderFormGroup =
/*#__PURE__*/
function (_FormGroup) {
  order_form_group_inherits(OrderFormGroup, _FormGroup);

  function OrderFormGroup(config) {
    var _this;

    order_form_group_classCallCheck(this, OrderFormGroup);

    _this = order_form_group_possibleConstructorReturn(this, order_form_group_getPrototypeOf(OrderFormGroup).call(this, config));

    _this.name.addEventListener('focusout', function () {
      _this.validateName(_this.name);
    });

    _this.email.addEventListener('focusout', function () {
      _this.validateEmail(_this.email);
    });

    _this.tel.addEventListener('focusout', function () {
      _this.validateTel(_this.tel);
    });

    _this.address.addEventListener('focusout', function () {
      _this.validateAddress(_this.address);
    });

    return _this;
  }

  order_form_group_createClass(OrderFormGroup, [{
    key: "displayConfirmMsg",
    value: function displayConfirmMsg() {
      var confirmMsg = document.querySelector('.order__confirm-msg');
      confirmMsg.classList.remove('order__confirm-msg_hidden');
    }
  }, {
    key: "inputsData",
    get: function get() {
      return {
        name: this.name.value,
        email: this.email.value,
        tel: this.tel.value,
        address: this.address.value
      };
    }
  }]);

  return OrderFormGroup;
}(FormGroup);

var order_form_group_config = {
  blockID: 'order',
  inputIDs: {
    name: 'order-name',
    email: 'order-email',
    tel: 'order-tel',
    address: 'order-address'
  }
};
var orderFormGroup = new OrderFormGroup(order_form_group_config);

// EXTERNAL MODULE: ./node_modules/babel-types/lib/index.js
var lib = __webpack_require__(2);

// CONCATENATED MODULE: ./src/blocks/order-btn/order-btn.js
function order_btn_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { order_btn_typeof = function _typeof(obj) { return typeof obj; }; } else { order_btn_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return order_btn_typeof(obj); }

function order_btn_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function order_btn_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function order_btn_createClass(Constructor, protoProps, staticProps) { if (protoProps) order_btn_defineProperties(Constructor.prototype, protoProps); if (staticProps) order_btn_defineProperties(Constructor, staticProps); return Constructor; }

function order_btn_possibleConstructorReturn(self, call) { if (call && (order_btn_typeof(call) === "object" || typeof call === "function")) { return call; } return order_btn_assertThisInitialized(self); }

function order_btn_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function order_btn_getPrototypeOf(o) { order_btn_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return order_btn_getPrototypeOf(o); }

function order_btn_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) order_btn_setPrototypeOf(subClass, superClass); }

function order_btn_setPrototypeOf(o, p) { order_btn_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return order_btn_setPrototypeOf(o, p); }

/*
 * Telegram API Doc:
 * https://core.telegram.org/bots/api#available-methods
 *
 * Bot for creating new bots:
 * https://telegram.me/botfather
 * How to use: https://core.telegram.org/bots
 *
 */






var order_btn_OrderBtn =
/*#__PURE__*/
function (_Btn) {
  order_btn_inherits(OrderBtn, _Btn);

  function OrderBtn(config) {
    order_btn_classCallCheck(this, OrderBtn);

    return order_btn_possibleConstructorReturn(this, order_btn_getPrototypeOf(OrderBtn).call(this, config));
  }

  order_btn_createClass(OrderBtn, [{
    key: "handleEvent",
    value: function handleEvent(e) {
      if (e.type === 'click') {
        var isValid = orderFormGroup.validateName(orderFormGroup.name) && orderFormGroup.validateEmail(orderFormGroup.email) && orderFormGroup.validateTel(orderFormGroup.tel) && orderFormGroup.validateAddress(orderFormGroup.address);

        if (isValid) {
          this.sendInputTo(this._config.bots);
          confirmOrderModal.openModal(this._config.modal.dialog);
          orderFormGroup.resetInputs(orderFormGroup.name, orderFormGroup.email, orderFormGroup.tel, orderFormGroup.address);
        } else throw new Error('Invalid input');
      }
    }
  }, {
    key: "sendInputTo",
    value: function sendInputTo(bots) {
      bots.forEach(function (bot) {
        // console.log(bot.authToken, bot.chatID, bot.parseMode, bot.disableNotif);
        var url = "https://api.telegram.org/bot".concat(bot.authToken, "/sendMessage?chat_id=").concat(bot.chatID, "&text=\"").concat(bot.createOrderMsg(orderFormGroup.inputsData), "\"&parse_mode=").concat(bot.parseMode, "&disable_notification=").concat(bot.disableNotif);
        fetch(url).then(function (response) {
          return response.json();
        }).then(function (response) {
          console.log("Response from bot: ".concat(response.result.from.first_name, " (").concat(response.result.from.username, ") "), response);
        }).catch(function (error) {
          throw new Error(error);
        });
      });
    }
  }]);

  return OrderBtn;
}(Btn);

var orderBtnEl = document.querySelector('#order-trigger-btn');
var orderBtn = new order_btn_OrderBtn({
  btn: orderBtnEl,
  modal: confirmOrderModal,
  timeoutBeforeBtnTextChange: 2000,
  bots: [myTelegramBot, ypenTelegramBot]
});
orderBtnEl.addEventListener('click', orderBtn);
// EXTERNAL MODULE: ./src/blocks/order-form-group/_order-form-group.scss
var _order_form_group = __webpack_require__(264);

// EXTERNAL MODULE: ./src/blocks/reviews/_reviews.scss
var _reviews = __webpack_require__(265);

// EXTERNAL MODULE: ./src/blocks/reviews/reviews.js
var reviews = __webpack_require__(266);

// EXTERNAL MODULE: ./src/blocks/footer/_footer.scss
var _footer = __webpack_require__(267);

// EXTERNAL MODULE: ./src/blocks/video-modal/_video-modal.scss
var _video_modal = __webpack_require__(268);

// EXTERNAL MODULE: ./src/blocks/lightbox/_lightbox.scss
var _lightbox = __webpack_require__(269);

// CONCATENATED MODULE: ./src/blocks/lightbox/lightbox.js
function lightbox_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function lightbox_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function lightbox_createClass(Constructor, protoProps, staticProps) { if (protoProps) lightbox_defineProperties(Constructor.prototype, protoProps); if (staticProps) lightbox_defineProperties(Constructor, staticProps); return Constructor; }

var Lightbox =
/*#__PURE__*/
function () {
  function Lightbox(config) {
    var _this = this;

    lightbox_classCallCheck(this, Lightbox);

    this._config = config;
    this._backdrop = document.querySelector(".".concat(this._config.classes.backdrop));
    this._closeBtn = document.querySelector(".".concat(this._config.classes.closeBtn));
    this._slides = document.querySelectorAll('.lightbox__dialog');
    this._counter = 0;
    this._amount = this._slides.length;
    var prevBtn = document.querySelector("#".concat(this._config.classes.prevBtn));
    var nextBtn = document.querySelector("#".concat(this._config.classes.nextBtn));
    prevBtn.addEventListener('click', function (e) {
      return _this.navigate(e, -1);
    });
    nextBtn.addEventListener('click', function (e) {
      return _this.navigate(e, 1);
    });
    document.addEventListener('click', function (e) {
      return _this.onClick(e);
    });
    document.addEventListener('keydown', function (e) {
      return _this.onKeydown(e);
    });
  }

  lightbox_createClass(Lightbox, [{
    key: "getElemIndex",
    value: function getElemIndex(elem) {
      if (elem.dataset.lightbox) return elem.dataset.lightbox.match(/\d/)[0];
    }
  }, {
    key: "navigate",
    value: function navigate(e, direction) {
      this.hideDialog(this._current);
      this._counter = this._counter + direction;
      if (direction === -1 && this._counter < 0) this._counter = this._amount - 1;
      if (direction === 1 && !this._slides[this._counter]) this._counter = 0;
      this._current = this._slides[this._counter];
      this.showDialog(this._current);
    }
  }, {
    key: "openLightbox",
    value: function openLightbox(clickedEl) {
      var newDialog = document.querySelector("#".concat(clickedEl.dataset.lightbox));
      var visibleDialog = document.querySelector(".".concat(this._config.classes.dialogStateModifier));
      this.toggleBackdrop();
      if (visibleDialog) this.hideDialog(visibleDialog);
      this.showDialog(newDialog);
      this._openedDialog = newDialog;
      document.body.style.overflow = 'hidden';
    }
  }, {
    key: "closeLightbox",
    value: function closeLightbox() {
      this.toggleBackdrop();
      delete this._openedDialog;
      document.body.style.overflow = '';
      return;
    }
  }, {
    key: "onClick",
    value: function onClick(e) {
      var clickedEl = e.target;

      if (clickedEl === this._backdrop || clickedEl === this._closeBtn) {
        this.closeLightbox();
      }

      if (clickedEl.dataset.lightbox) {
        e.preventDefault();
        this._counter = Number(this.getElemIndex(clickedEl));
        this._current = this._slides[this._counter];
        this.openLightbox(clickedEl);
      }
    }
  }, {
    key: "onKeydown",
    value: function onKeydown(e) {
      if (this._openedDialog && e.code === 'Escape') {
        this.toggleBackdrop();
        delete this._openedDialog;
        document.body.style.overflow = '';
        return;
      }
    }
  }, {
    key: "showDialog",
    value: function showDialog(dialog) {
      dialog.classList.add(this._config.classes.dialogStateModifier);
    }
  }, {
    key: "hideDialog",
    value: function hideDialog(dialog) {
      dialog.classList.remove(this._config.classes.dialogStateModifier);
    }
  }, {
    key: "toggleBackdrop",
    value: function toggleBackdrop() {
      this._backdrop.classList.toggle(this._config.classes.backdropStateModifier);
    }
  }]);

  return Lightbox;
}();

var lightbox_config = {
  // all class names used in HTML related to Lightbox window component:
  classes: {
    backdrop: 'lightbox',
    backdropStateModifier: 'lightbox_visible',
    dialogStateModifier: 'lightbox__dialog_visible',
    closeBtn: 'lightbox__close-btn',
    prevBtn: 'lightbox-btn-prev',
    nextBtn: 'lightbox-btn-next',
    video: 'embed'
  }
};
var lightbox = new Lightbox(lightbox_config);

// CONCATENATED MODULE: ./src/index.js
/* 
  HELPER FUNCTIONS
*/
// function for requiring images:
function requireFiles(r) {
  r.keys().forEach(r);
}
/*************
 * CSS RESET *
 *************/



/**********
 * BLOCKS *
 **********/


requireFiles(__webpack_require__(92));












































/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXR5cGVzL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtdHlwZXMvbGliL2RlZmluaXRpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldE5hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VVbmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19ub2RlVXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19MaXN0Q2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25hdGl2ZUNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRNYXBEYXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NvcHlPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXR5cGVzL2xpYi9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFN5bWJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lQXJyYXlCdWZmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXR5cGVzL2xpYi9yZXRyaWV2ZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lc3V0aWxzL2xpYi9jb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb3ZlckFyZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2VxLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL190b1NvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19NYXBDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NpZ25WYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQXNzaWduVmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQnVmZmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNMZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2tleXNJbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3N0dWJBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRTeW1ib2xzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlQdXNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRBbGxLZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1NldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRUb0FycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvX3Jlc2V0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9jb250YWN0cy9fY29udGFjdHMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2NvbnRhY3RzIHN5bmMgKHN2Z3xwbmd8anBnKSQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9jb250YWN0cy9zcHJpdGUuc3ZnIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvcGFnZS9fcGFnZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvcGFnZS9wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvdGV4dC9fdGV4dC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaGVhZGluZy9faGVhZGluZy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvZW1iZWQvX2VtYmVkLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9pY29ucy9faWNvbnMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2xvZ28vX2xvZ28uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2ltZy1zdmcvX2ltZy1zdmcuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2hlYWRlci9faGVhZGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9tYWluL19tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9iZW5lZml0czEvX2JlbmVmaXRzMS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvYmVuZWZpdHMyL19iZW5lZml0czIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2JlbmVmaXRzMy9fYmVuZWZpdHMzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9iZW5lZml0czQvX2JlbmVmaXRzNC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvYmVuZWZpdHM1L19iZW5lZml0czUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2NlcnRpZmljYXRlcy9fY2VydGlmaWNhdGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy93ZWJpbmFycy9fd2ViaW5hcnMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL29yZGVyL19vcmRlci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3Mvb3JkZXItY2FsY3VsYXRvci9fb3JkZXItY2FsY3VsYXRvci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvYnRuL19idG4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2Zvcm0tZ3JvdXAvX2Zvcm0tZ3JvdXAuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL21vZGFsL19tb2RhbC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3Mvd2ViaW5hci1zaWdudXAtYnRuL193ZWJpbmFyLXNpZ251cC1idG4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL29yZGVyLWJ0bi9fb3JkZXItYnRuLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2Zvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9mb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXR5cGVzL2xpYi92YWxpZGF0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VzdXRpbHMvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lc3V0aWxzL2xpYi9hc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VzdXRpbHMvbGliL2tleXdvcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXR5cGVzL2xpYi9jb252ZXJ0ZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvbnVtYmVyL21heC1zYWZlLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9udW1iZXIvbWF4LXNhZmUtaW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm51bWJlci5tYXgtc2FmZS1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNQbGFpbk9iamVjdC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzUmVnRXhwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc1JlZ0V4cC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtdHlwZXMvbGliL2Zsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXR5cGVzL25vZGVfbW9kdWxlcy90by1mYXN0LXByb3BlcnRpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9jbG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQ2xvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3RhY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlRGVsZXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlU2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzTWFza2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NvcmVKc0RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0VmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19IYXNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoRGVsZXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaEhhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoU2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzS2V5YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVGltZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9zdHViRmFsc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VLZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25hdGl2ZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUFzc2lnbkluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VLZXlzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlS2V5c0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lQnVmZmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NvcHlBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3B5U3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3B5U3ltYm9sc0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldEFsbEtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0QWxsS2V5c0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0RhdGFWaWV3LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fV2Vha01hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pbml0Q2xvbmVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pbml0Q2xvbmVCeVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19VaW50OEFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lRGF0YVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVSZWdFeHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVTeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2luaXRDbG9uZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzTWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzU2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdW5pcS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVW5pcS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TZXRDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRDYWNoZUFkZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJbmRleE9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VGaW5kSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzTmFOLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0cmljdEluZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlJbmNsdWRlc1dpdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlU2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvbm9vcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtdHlwZXMvbGliL2RlZmluaXRpb25zL2luaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXR5cGVzL2xpYi9kZWZpbml0aW9ucy9jb3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC10eXBlcy9saWIvZGVmaW5pdGlvbnMvZXMyMDE1LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC10eXBlcy9saWIvZGVmaW5pdGlvbnMvZmxvdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtdHlwZXMvbGliL2RlZmluaXRpb25zL2pzeC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtdHlwZXMvbGliL2RlZmluaXRpb25zL21pc2MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXR5cGVzL2xpYi9kZWZpbml0aW9ucy9leHBlcmltZW50YWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXR5cGVzL2xpYi9yZWFjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL29yZGVyLWZvcm0tZ3JvdXAvX29yZGVyLWZvcm0tZ3JvdXAuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3Jldmlld3MvX3Jldmlld3Muc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3Jldmlld3MvcmV2aWV3cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2Zvb3Rlci9fZm9vdGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy92aWRlby1tb2RhbC9fdmlkZW8tbW9kYWwuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2xpZ2h0Ym94L19saWdodGJveC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvYnRuL2J0bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL21vZGFsL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvdmlkZW8tbW9kYWwvdmlkZW8tbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9tYWluL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy90ZWxlZ3JhbS1ib3QvdGVsZWdyYW0tYm90LmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvZm9ybS1ncm91cC9mb3JtLWdyb3VwLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3Mvd2ViaW5hci1zaWdudXAtbW9kYWwvd2ViaW5hci1zaWdudXAtbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy93ZWJpbmFyLXNpZ251cC1mb3JtLWdyb3VwL3dlYmluYXItc2lnbnVwLWZvcm0tZ3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy93ZWJpbmFyLXNpZ251cC1idG4vd2ViaW5hci1zaWdudXAtYnRuLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvY29uZmlybS1vcmRlci1tb2RhbC9jb25maXJtLW9yZGVyLW1vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3Mvb3JkZXItZm9ybS1ncm91cC9vcmRlci1mb3JtLWdyb3VwLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3Mvb3JkZXItYnRuL29yZGVyLWJ0bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2xpZ2h0Ym94L2xpZ2h0Ym94LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJwYWdlX19wcmVsb2FkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInJlbW92ZSIsInNlY3Rpb25PdHppdmlDb250ZW50RWwiLCJzZWN0aW9uT3R6aXZpRWwiLCJtYWtlVmlkZW9SZXNwb25zaXZlIiwiZSIsIndpbmRvd1dpZHRoIiwicGFyc2VJbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsInN0eWxlIiwiaGVpZ2h0IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIkJ0biIsImNvbmZpZyIsIl9jb25maWciLCJ0eXBlIiwicHJldmVudERlZmF1bHQiLCJtb2RhbCIsIm9wZW5Nb2RhbCIsImRpYWxvZyIsImlkIiwiY2xhc3NOYW1lIiwiTW9kYWwiLCJfYmFja2Ryb3AiLCJjbGFzc2VzIiwiYmFja2Ryb3AiLCJfb3BlbmVkIiwiX2Nsb3NlQnRuIiwiY2xvc2VCdG4iLCJJRHMiLCJvbktleWRvd24iLCJvbkNsaWNrIiwiY2xpY2tlZEVsIiwidGFyZ2V0IiwiY2xvc2VNb2RhbCIsIl9vcGVuZWREaWFsb2ciLCJjb2RlIiwidmlkZW9Jbk1vZGFsIiwidmlkZW8iLCJzdG9wVmlkZW8iLCJ0b2dnbGVCYWNrZHJvcCIsImJvZHkiLCJvdmVyZmxvdyIsInRvZ2dsZSIsImJhY2tkcm9wU3RhdGVNb2RpZmllciIsIm5ld0RpYWxvZyIsInZpc2libGVEaWFsb2ciLCJkaWFsb2dTdGF0ZU1vZGlmaWVyIiwiaGlkZURpYWxvZyIsInNob3dEaWFsb2ciLCJlbCIsInZpZGVvQmxvY2siLCJhZGQiLCJlbGVtZW50IiwiaWZyYW1lIiwiaWZyYW1lU3JjIiwic3JjIiwicGF1c2UiLCJ2aWRlb01vZGFsIiwidmlkZW9UcmlnZ2VyQnRuRWwiLCJ2aWRlb1RyaWdnZXJCdG4iLCJidG4iLCJUZWxlZ3JhbUJvdCIsIm5hbWUiLCJhdXRoVG9rZW4iLCJjaGF0SUQiLCJwYXJzZU1vZGUiLCJkaXNhYmxlTm90aWYiLCJlbWFpbCIsInRlbCIsImFkZHJlc3MiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyZXN1bHQiLCJtZXNzYWdlIiwiY2hhdCIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwiRXJyb3IiLCJ1c2VyQ29uZmlncyIsIm15VGVsZWdyYW1Cb3QiLCJ5cGVuVGVsZWdyYW1Cb3QiLCJGb3JtR3JvdXAiLCJfb3JkZXJCbG9jayIsImJsb2NrSUQiLCJpbnB1dElEcyIsImlucHV0RWwiLCJyZWdleCIsImlucHV0VmFsdWUiLCJ2YWx1ZSIsInBhcmVudEVsZW1lbnQiLCJ0ZXN0IiwidGlwIiwidG9Mb3dlckNhc2UiLCJpbnB1dHMiLCJmb3JFYWNoIiwiaW5wdXQiLCJ3ZWJpbmFyU2lnbnVwTW9kYWwiLCJXZWJpbmFyU2lnbnVwRm9ybUdyb3VwIiwidmFsaWRhdGVFbWFpbCIsInZhbGlkYXRlVGVsIiwid2ViaW5hclNpZ251cEZvcm1Hcm91cCIsIldlYmluYXJTaWdudXBCdG4iLCJpc1ZhbGlkIiwidmFsaWRhdGVOYW1lIiwic2VuZElucHV0VG8iLCJib3RzIiwidGV4dENvbnRlbnQiLCJzZXRUaW1lb3V0IiwicmVzZXRJbnB1dHMiLCJ0aW1lb3V0QmVmb3JlQnRuVGV4dENoYW5nZSIsImJvdCIsImNyZWF0ZVdlYmluYXJTaWdudXBNc2ciLCJpbnB1dHNEYXRhIiwiZnJvbSIsImZpcnN0X25hbWUiLCJ1c2VybmFtZSIsIndlYmluYXJTaWdudXBUcmlnZ2VyQnRuRWwiLCJ3ZWJpbmFyU2lnbnVwVHJpZ2dlckJ0biIsIndlYmluYXJTaWdudXBCdG5FbCIsIndlYmluYXJTaWdudXBCdG4iLCJjb25maXJtT3JkZXJNb2RhbCIsIk9yZGVyRm9ybUdyb3VwIiwidmFsaWRhdGVBZGRyZXNzIiwiY29uZmlybU1zZyIsIm9yZGVyRm9ybUdyb3VwIiwiT3JkZXJCdG4iLCJjcmVhdGVPcmRlck1zZyIsIm9yZGVyQnRuRWwiLCJvcmRlckJ0biIsIkxpZ2h0Ym94IiwiX3NsaWRlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfY291bnRlciIsIl9hbW91bnQiLCJsZW5ndGgiLCJwcmV2QnRuIiwibmV4dEJ0biIsIm5hdmlnYXRlIiwiZWxlbSIsImRhdGFzZXQiLCJsaWdodGJveCIsIm1hdGNoIiwiZGlyZWN0aW9uIiwiX2N1cnJlbnQiLCJjbG9zZUxpZ2h0Ym94IiwiTnVtYmVyIiwiZ2V0RWxlbUluZGV4Iiwib3BlbkxpZ2h0Ym94IiwicmVxdWlyZUZpbGVzIiwiciIsImtleXMiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7O0FDbEZBLDZCQUE2QjtBQUM3Qix1Q0FBdUM7Ozs7Ozs7QUNEdkMsaUJBQWlCLG1CQUFPLENBQUMsRUFBZTs7QUFFeEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7OztBQ1JhOztBQUViO0FBQ0E7O0FBRUEsNkJBQTZCLG1CQUFPLENBQUMsR0FBdUQ7O0FBRTVGOztBQUVBLG9CQUFvQixtQkFBTyxDQUFDLEVBQW9DOztBQUVoRTs7QUFFQSxZQUFZLG1CQUFPLENBQUMsRUFBbUM7O0FBRXZEOztBQUVBLGlCQUFpQixtQkFBTyxDQUFDLEVBQXNDOztBQUUvRDs7QUFFQSxpQkFBaUIsbUJBQU8sQ0FBQyxFQUFhOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixtQkFBTyxDQUFDLEVBQWM7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsa0JBQWtCLG1CQUFPLENBQUMsR0FBYzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0tBQXNLO0FBQ3RLOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtLQUErSztBQUMvSzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDRLQUE0SztBQUM1Szs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7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QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlLQUFpSztBQUNqSzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdDQUF3QyxjQUFjO0FBQ3REOztBQUVBO0FBQ0EsNEdBQTRHLGtCQUFrQjtBQUM5SDs7QUFFQTtBQUNBLHdEQUF3RCxhQUFhO0FBQ3JFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsOEpBQThKO0FBQzlKOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7QUN4UUEsa0JBQWtCLFlBQVksbUJBQU8sQ0FBQyxHQUFvQyxzQjs7Ozs7O0FDQTFFLG1CQUFPLENBQUMsRUFBbUM7QUFDM0MsbUJBQU8sQ0FBQyxFQUFnQztBQUN4QyxpQkFBaUIsbUJBQU8sQ0FBQyxFQUF3Qjs7Ozs7OztBQ0ZqRCxrQkFBa0IsWUFBWSxtQkFBTyxDQUFDLEdBQTJCLHNCOzs7Ozs7QUNBakUsbUJBQU8sQ0FBQyxFQUEwQjtBQUNsQyxtQkFBTyxDQUFDLEdBQW9DO0FBQzVDLG1CQUFPLENBQUMsR0FBeUM7QUFDakQsbUJBQU8sQ0FBQyxHQUFxQztBQUM3QyxpQkFBaUIsbUJBQU8sQ0FBQyxDQUFxQjs7Ozs7Ozs7Ozs7OztBQ0o5QyxtQkFBTyxDQUFDLEVBQWU7Ozs7Ozs7QUNBdkIsbUJBQU8sQ0FBQyxFQUFlOzs7Ozs7O0FDQXZCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQSxrQkFBa0IsbUJBQU8sQ0FBQyxHQUFPO0FBQ2pDLG1CQUFtQixtQkFBTyxDQUFDLEVBQVE7QUFDbkMsc0JBQXNCLG1CQUFPLENBQUMsR0FBVztBQUN6QyxDQUFDO0FBQ0Q7Ozs7Ozs7QUNoQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsY0FBYztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsY0FBYztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsY0FBYztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7O0FDL0lBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGVBQWUsbUJBQU8sQ0FBQyxFQUFROztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4QkFBOEIsY0FBYzs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DLFFBQVE7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOEJBQThCLGNBQWM7O0FBRTVDO0FBQ0EsbUNBQW1DLFFBQVE7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGNBQWM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7OztBQ3BLYTs7QUFFYjs7QUFFQSxzQkFBc0IsbUJBQU8sQ0FBQyxHQUErQzs7QUFFN0U7O0FBRUEsaUJBQWlCLG1CQUFPLENBQUMsRUFBc0M7O0FBRS9EOztBQUVBLG9CQUFvQixtQkFBTyxDQUFDLEVBQW9DOztBQUVoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLG1CQUFPLENBQUMsR0FBc0I7O0FBRW5EOztBQUVBLGdCQUFnQixtQkFBTyxDQUFDLEdBQWlCOztBQUV6Qzs7QUFFQSxhQUFhLG1CQUFPLENBQUMsQ0FBUzs7QUFFOUI7O0FBRUEsdUNBQXVDLDZCQUE2QixZQUFZLEVBQUUsT0FBTyxpQkFBaUIsbUJBQW1CLHVCQUF1Qiw0RUFBNEUsRUFBRSxFQUFFLHNCQUFzQixlQUFlLEVBQUU7O0FBRTNRLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFKQUFxSjtBQUNySjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDs7QUFFQSw2S0FBNks7QUFDN0s7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwrSkFBK0o7QUFDL0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRTs7Ozs7OztBQzVyQlk7O0FBRWIsYUFBYSxtQkFBTyxDQUFDLENBQVM7O0FBRTlCOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEU7Ozs7Ozs7QUNqV1k7O0FBRWIsYUFBYSxtQkFBTyxDQUFDLENBQVM7O0FBRTlCOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUMsRTs7Ozs7OztBQzVSWTs7QUFFYixhQUFhLG1CQUFPLENBQUMsQ0FBUzs7QUFFOUI7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7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c291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjcwKTtcbiIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjYuOScgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY3JlYXRlVHlwZUFubm90YXRpb25CYXNlZE9uVHlwZW9mID0gZXhwb3J0cy5yZW1vdmVUeXBlRHVwbGljYXRlcyA9IGV4cG9ydHMuY3JlYXRlVW5pb25UeXBlQW5ub3RhdGlvbiA9IGV4cG9ydHMudmFsdWVUb05vZGUgPSBleHBvcnRzLnRvQmxvY2sgPSBleHBvcnRzLnRvRXhwcmVzc2lvbiA9IGV4cG9ydHMudG9TdGF0ZW1lbnQgPSBleHBvcnRzLnRvQmluZGluZ0lkZW50aWZpZXJOYW1lID0gZXhwb3J0cy50b0lkZW50aWZpZXIgPSBleHBvcnRzLnRvS2V5QWxpYXMgPSBleHBvcnRzLnRvU2VxdWVuY2VFeHByZXNzaW9uID0gZXhwb3J0cy50b0NvbXB1dGVkS2V5ID0gZXhwb3J0cy5pc05vZGVzRXF1aXZhbGVudCA9IGV4cG9ydHMuaXNJbW11dGFibGUgPSBleHBvcnRzLmlzU2NvcGUgPSBleHBvcnRzLmlzU3BlY2lmaWVyRGVmYXVsdCA9IGV4cG9ydHMuaXNWYXIgPSBleHBvcnRzLmlzQmxvY2tTY29wZWQgPSBleHBvcnRzLmlzTGV0ID0gZXhwb3J0cy5pc1ZhbGlkSWRlbnRpZmllciA9IGV4cG9ydHMuaXNSZWZlcmVuY2VkID0gZXhwb3J0cy5pc0JpbmRpbmcgPSBleHBvcnRzLmdldE91dGVyQmluZGluZ0lkZW50aWZpZXJzID0gZXhwb3J0cy5nZXRCaW5kaW5nSWRlbnRpZmllcnMgPSBleHBvcnRzLlRZUEVTID0gZXhwb3J0cy5yZWFjdCA9IGV4cG9ydHMuREVQUkVDQVRFRF9LRVlTID0gZXhwb3J0cy5CVUlMREVSX0tFWVMgPSBleHBvcnRzLk5PREVfRklFTERTID0gZXhwb3J0cy5BTElBU19LRVlTID0gZXhwb3J0cy5WSVNJVE9SX0tFWVMgPSBleHBvcnRzLk5PVF9MT0NBTF9CSU5ESU5HID0gZXhwb3J0cy5CTE9DS19TQ09QRURfU1lNQk9MID0gZXhwb3J0cy5JTkhFUklUX0tFWVMgPSBleHBvcnRzLlVOQVJZX09QRVJBVE9SUyA9IGV4cG9ydHMuU1RSSU5HX1VOQVJZX09QRVJBVE9SUyA9IGV4cG9ydHMuTlVNQkVSX1VOQVJZX09QRVJBVE9SUyA9IGV4cG9ydHMuQk9PTEVBTl9VTkFSWV9PUEVSQVRPUlMgPSBleHBvcnRzLkJJTkFSWV9PUEVSQVRPUlMgPSBleHBvcnRzLk5VTUJFUl9CSU5BUllfT1BFUkFUT1JTID0gZXhwb3J0cy5CT09MRUFOX0JJTkFSWV9PUEVSQVRPUlMgPSBleHBvcnRzLkNPTVBBUklTT05fQklOQVJZX09QRVJBVE9SUyA9IGV4cG9ydHMuRVFVQUxJVFlfQklOQVJZX09QRVJBVE9SUyA9IGV4cG9ydHMuQk9PTEVBTl9OVU1CRVJfQklOQVJZX09QRVJBVE9SUyA9IGV4cG9ydHMuVVBEQVRFX09QRVJBVE9SUyA9IGV4cG9ydHMuTE9HSUNBTF9PUEVSQVRPUlMgPSBleHBvcnRzLkNPTU1FTlRfS0VZUyA9IGV4cG9ydHMuRk9SX0lOSVRfS0VZUyA9IGV4cG9ydHMuRkxBVFRFTkFCTEVfS0VZUyA9IGV4cG9ydHMuU1RBVEVNRU5UX09SX0JMT0NLX0tFWVMgPSB1bmRlZmluZWQ7XG5cbnZhciBfZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzXCIpO1xuXG52YXIgX2dldE93blByb3BlcnR5U3ltYm9sczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpO1xuXG52YXIgX2dldEl0ZXJhdG9yMiA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yXCIpO1xuXG52YXIgX2dldEl0ZXJhdG9yMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldEl0ZXJhdG9yMik7XG5cbnZhciBfa2V5cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXNcIik7XG5cbnZhciBfa2V5czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9rZXlzKTtcblxudmFyIF9zdHJpbmdpZnkgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5XCIpO1xuXG52YXIgX3N0cmluZ2lmeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHJpbmdpZnkpO1xuXG52YXIgX2NvbnN0YW50cyA9IHJlcXVpcmUoXCIuL2NvbnN0YW50c1wiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiU1RBVEVNRU5UX09SX0JMT0NLX0tFWVNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2NvbnN0YW50cy5TVEFURU1FTlRfT1JfQkxPQ0tfS0VZUztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJGTEFUVEVOQUJMRV9LRVlTXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9jb25zdGFudHMuRkxBVFRFTkFCTEVfS0VZUztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJGT1JfSU5JVF9LRVlTXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9jb25zdGFudHMuRk9SX0lOSVRfS0VZUztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJDT01NRU5UX0tFWVNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2NvbnN0YW50cy5DT01NRU5UX0tFWVM7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTE9HSUNBTF9PUEVSQVRPUlNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2NvbnN0YW50cy5MT0dJQ0FMX09QRVJBVE9SUztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJVUERBVEVfT1BFUkFUT1JTXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9jb25zdGFudHMuVVBEQVRFX09QRVJBVE9SUztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJCT09MRUFOX05VTUJFUl9CSU5BUllfT1BFUkFUT1JTXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9jb25zdGFudHMuQk9PTEVBTl9OVU1CRVJfQklOQVJZX09QRVJBVE9SUztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJFUVVBTElUWV9CSU5BUllfT1BFUkFUT1JTXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9jb25zdGFudHMuRVFVQUxJVFlfQklOQVJZX09QRVJBVE9SUztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJDT01QQVJJU09OX0JJTkFSWV9PUEVSQVRPUlNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2NvbnN0YW50cy5DT01QQVJJU09OX0JJTkFSWV9PUEVSQVRPUlM7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQk9PTEVBTl9CSU5BUllfT1BFUkFUT1JTXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9jb25zdGFudHMuQk9PTEVBTl9CSU5BUllfT1BFUkFUT1JTO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIk5VTUJFUl9CSU5BUllfT1BFUkFUT1JTXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9jb25zdGFudHMuTlVNQkVSX0JJTkFSWV9PUEVSQVRPUlM7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQklOQVJZX09QRVJBVE9SU1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfY29uc3RhbnRzLkJJTkFSWV9PUEVSQVRPUlM7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQk9PTEVBTl9VTkFSWV9PUEVSQVRPUlNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2NvbnN0YW50cy5CT09MRUFOX1VOQVJZX09QRVJBVE9SUztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJOVU1CRVJfVU5BUllfT1BFUkFUT1JTXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9jb25zdGFudHMuTlVNQkVSX1VOQVJZX09QRVJBVE9SUztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJTVFJJTkdfVU5BUllfT1BFUkFUT1JTXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9jb25zdGFudHMuU1RSSU5HX1VOQVJZX09QRVJBVE9SUztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJVTkFSWV9PUEVSQVRPUlNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2NvbnN0YW50cy5VTkFSWV9PUEVSQVRPUlM7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiSU5IRVJJVF9LRVlTXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9jb25zdGFudHMuSU5IRVJJVF9LRVlTO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkJMT0NLX1NDT1BFRF9TWU1CT0xcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2NvbnN0YW50cy5CTE9DS19TQ09QRURfU1lNQk9MO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIk5PVF9MT0NBTF9CSU5ESU5HXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9jb25zdGFudHMuTk9UX0xPQ0FMX0JJTkRJTkc7XG4gIH1cbn0pO1xuZXhwb3J0cy5pcyA9IGlzO1xuZXhwb3J0cy5pc1R5cGUgPSBpc1R5cGU7XG5leHBvcnRzLnZhbGlkYXRlID0gdmFsaWRhdGU7XG5leHBvcnRzLnNoYWxsb3dFcXVhbCA9IHNoYWxsb3dFcXVhbDtcbmV4cG9ydHMuYXBwZW5kVG9NZW1iZXJFeHByZXNzaW9uID0gYXBwZW5kVG9NZW1iZXJFeHByZXNzaW9uO1xuZXhwb3J0cy5wcmVwZW5kVG9NZW1iZXJFeHByZXNzaW9uID0gcHJlcGVuZFRvTWVtYmVyRXhwcmVzc2lvbjtcbmV4cG9ydHMuZW5zdXJlQmxvY2sgPSBlbnN1cmVCbG9jaztcbmV4cG9ydHMuY2xvbmUgPSBjbG9uZTtcbmV4cG9ydHMuY2xvbmVXaXRob3V0TG9jID0gY2xvbmVXaXRob3V0TG9jO1xuZXhwb3J0cy5jbG9uZURlZXAgPSBjbG9uZURlZXA7XG5leHBvcnRzLmJ1aWxkTWF0Y2hNZW1iZXJFeHByZXNzaW9uID0gYnVpbGRNYXRjaE1lbWJlckV4cHJlc3Npb247XG5leHBvcnRzLnJlbW92ZUNvbW1lbnRzID0gcmVtb3ZlQ29tbWVudHM7XG5leHBvcnRzLmluaGVyaXRzQ29tbWVudHMgPSBpbmhlcml0c0NvbW1lbnRzO1xuZXhwb3J0cy5pbmhlcml0VHJhaWxpbmdDb21tZW50cyA9IGluaGVyaXRUcmFpbGluZ0NvbW1lbnRzO1xuZXhwb3J0cy5pbmhlcml0TGVhZGluZ0NvbW1lbnRzID0gaW5oZXJpdExlYWRpbmdDb21tZW50cztcbmV4cG9ydHMuaW5oZXJpdElubmVyQ29tbWVudHMgPSBpbmhlcml0SW5uZXJDb21tZW50cztcbmV4cG9ydHMuaW5oZXJpdHMgPSBpbmhlcml0cztcbmV4cG9ydHMuYXNzZXJ0Tm9kZSA9IGFzc2VydE5vZGU7XG5leHBvcnRzLmlzTm9kZSA9IGlzTm9kZTtcbmV4cG9ydHMudHJhdmVyc2VGYXN0ID0gdHJhdmVyc2VGYXN0O1xuZXhwb3J0cy5yZW1vdmVQcm9wZXJ0aWVzID0gcmVtb3ZlUHJvcGVydGllcztcbmV4cG9ydHMucmVtb3ZlUHJvcGVydGllc0RlZXAgPSByZW1vdmVQcm9wZXJ0aWVzRGVlcDtcblxudmFyIF9yZXRyaWV2ZXJzID0gcmVxdWlyZShcIi4vcmV0cmlldmVyc1wiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZ2V0QmluZGluZ0lkZW50aWZpZXJzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9yZXRyaWV2ZXJzLmdldEJpbmRpbmdJZGVudGlmaWVycztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJnZXRPdXRlckJpbmRpbmdJZGVudGlmaWVyc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfcmV0cmlldmVycy5nZXRPdXRlckJpbmRpbmdJZGVudGlmaWVycztcbiAgfVxufSk7XG5cbnZhciBfdmFsaWRhdG9ycyA9IHJlcXVpcmUoXCIuL3ZhbGlkYXRvcnNcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzQmluZGluZ1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdmFsaWRhdG9ycy5pc0JpbmRpbmc7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNSZWZlcmVuY2VkXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92YWxpZGF0b3JzLmlzUmVmZXJlbmNlZDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc1ZhbGlkSWRlbnRpZmllclwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdmFsaWRhdG9ycy5pc1ZhbGlkSWRlbnRpZmllcjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc0xldFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdmFsaWRhdG9ycy5pc0xldDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc0Jsb2NrU2NvcGVkXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92YWxpZGF0b3JzLmlzQmxvY2tTY29wZWQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNWYXJcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3ZhbGlkYXRvcnMuaXNWYXI7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNTcGVjaWZpZXJEZWZhdWx0XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92YWxpZGF0b3JzLmlzU3BlY2lmaWVyRGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc1Njb3BlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92YWxpZGF0b3JzLmlzU2NvcGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNJbW11dGFibGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3ZhbGlkYXRvcnMuaXNJbW11dGFibGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNOb2Rlc0VxdWl2YWxlbnRcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3ZhbGlkYXRvcnMuaXNOb2Rlc0VxdWl2YWxlbnQ7XG4gIH1cbn0pO1xuXG52YXIgX2NvbnZlcnRlcnMgPSByZXF1aXJlKFwiLi9jb252ZXJ0ZXJzXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ0b0NvbXB1dGVkS2V5XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9jb252ZXJ0ZXJzLnRvQ29tcHV0ZWRLZXk7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidG9TZXF1ZW5jZUV4cHJlc3Npb25cIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2NvbnZlcnRlcnMudG9TZXF1ZW5jZUV4cHJlc3Npb247XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidG9LZXlBbGlhc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfY29udmVydGVycy50b0tleUFsaWFzO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInRvSWRlbnRpZmllclwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfY29udmVydGVycy50b0lkZW50aWZpZXI7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidG9CaW5kaW5nSWRlbnRpZmllck5hbWVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2NvbnZlcnRlcnMudG9CaW5kaW5nSWRlbnRpZmllck5hbWU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidG9TdGF0ZW1lbnRcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2NvbnZlcnRlcnMudG9TdGF0ZW1lbnQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidG9FeHByZXNzaW9uXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9jb252ZXJ0ZXJzLnRvRXhwcmVzc2lvbjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ0b0Jsb2NrXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9jb252ZXJ0ZXJzLnRvQmxvY2s7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidmFsdWVUb05vZGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2NvbnZlcnRlcnMudmFsdWVUb05vZGU7XG4gIH1cbn0pO1xuXG52YXIgX2Zsb3cgPSByZXF1aXJlKFwiLi9mbG93XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJjcmVhdGVVbmlvblR5cGVBbm5vdGF0aW9uXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9mbG93LmNyZWF0ZVVuaW9uVHlwZUFubm90YXRpb247XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicmVtb3ZlVHlwZUR1cGxpY2F0ZXNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2Zsb3cucmVtb3ZlVHlwZUR1cGxpY2F0ZXM7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiY3JlYXRlVHlwZUFubm90YXRpb25CYXNlZE9uVHlwZW9mXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9mbG93LmNyZWF0ZVR5cGVBbm5vdGF0aW9uQmFzZWRPblR5cGVvZjtcbiAgfVxufSk7XG5cbnZhciBfdG9GYXN0UHJvcGVydGllcyA9IHJlcXVpcmUoXCJ0by1mYXN0LXByb3BlcnRpZXNcIik7XG5cbnZhciBfdG9GYXN0UHJvcGVydGllczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90b0Zhc3RQcm9wZXJ0aWVzKTtcblxudmFyIF9jbG9uZSA9IHJlcXVpcmUoXCJsb2Rhc2gvY2xvbmVcIik7XG5cbnZhciBfY2xvbmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xvbmUpO1xuXG52YXIgX3VuaXEgPSByZXF1aXJlKFwibG9kYXNoL3VuaXFcIik7XG5cbnZhciBfdW5pcTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91bmlxKTtcblxucmVxdWlyZShcIi4vZGVmaW5pdGlvbnMvaW5pdFwiKTtcblxudmFyIF9kZWZpbml0aW9ucyA9IHJlcXVpcmUoXCIuL2RlZmluaXRpb25zXCIpO1xuXG52YXIgX3JlYWN0MiA9IHJlcXVpcmUoXCIuL3JlYWN0XCIpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3JlYWN0Mik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciB0ID0gZXhwb3J0cztcblxuZnVuY3Rpb24gcmVnaXN0ZXJUeXBlKHR5cGUpIHtcbiAgdmFyIGlzID0gdFtcImlzXCIgKyB0eXBlXTtcbiAgaWYgKCFpcykge1xuICAgIGlzID0gdFtcImlzXCIgKyB0eXBlXSA9IGZ1bmN0aW9uIChub2RlLCBvcHRzKSB7XG4gICAgICByZXR1cm4gdC5pcyh0eXBlLCBub2RlLCBvcHRzKTtcbiAgICB9O1xuICB9XG5cbiAgdFtcImFzc2VydFwiICsgdHlwZV0gPSBmdW5jdGlvbiAobm9kZSwgb3B0cykge1xuICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAgIGlmICghaXMobm9kZSwgb3B0cykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIHR5cGUgXCIgKyAoMCwgX3N0cmluZ2lmeTIuZGVmYXVsdCkodHlwZSkgKyBcIiB3aXRoIG9wdGlvbiBcIiArICgwLCBfc3RyaW5naWZ5Mi5kZWZhdWx0KShvcHRzKSk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnRzLlZJU0lUT1JfS0VZUyA9IF9kZWZpbml0aW9ucy5WSVNJVE9SX0tFWVM7XG5leHBvcnRzLkFMSUFTX0tFWVMgPSBfZGVmaW5pdGlvbnMuQUxJQVNfS0VZUztcbmV4cG9ydHMuTk9ERV9GSUVMRFMgPSBfZGVmaW5pdGlvbnMuTk9ERV9GSUVMRFM7XG5leHBvcnRzLkJVSUxERVJfS0VZUyA9IF9kZWZpbml0aW9ucy5CVUlMREVSX0tFWVM7XG5leHBvcnRzLkRFUFJFQ0FURURfS0VZUyA9IF9kZWZpbml0aW9ucy5ERVBSRUNBVEVEX0tFWVM7XG5leHBvcnRzLnJlYWN0ID0gX3JlYWN0O1xuXG5cbmZvciAodmFyIHR5cGUgaW4gdC5WSVNJVE9SX0tFWVMpIHtcbiAgcmVnaXN0ZXJUeXBlKHR5cGUpO1xufVxuXG50LkZMSVBQRURfQUxJQVNfS0VZUyA9IHt9O1xuXG4oMCwgX2tleXMyLmRlZmF1bHQpKHQuQUxJQVNfS0VZUykuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICB0LkFMSUFTX0tFWVNbdHlwZV0uZm9yRWFjaChmdW5jdGlvbiAoYWxpYXMpIHtcbiAgICB2YXIgdHlwZXMgPSB0LkZMSVBQRURfQUxJQVNfS0VZU1thbGlhc10gPSB0LkZMSVBQRURfQUxJQVNfS0VZU1thbGlhc10gfHwgW107XG4gICAgdHlwZXMucHVzaCh0eXBlKTtcbiAgfSk7XG59KTtcblxuKDAsIF9rZXlzMi5kZWZhdWx0KSh0LkZMSVBQRURfQUxJQVNfS0VZUykuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICB0W3R5cGUudG9VcHBlckNhc2UoKSArIFwiX1RZUEVTXCJdID0gdC5GTElQUEVEX0FMSUFTX0tFWVNbdHlwZV07XG4gIHJlZ2lzdGVyVHlwZSh0eXBlKTtcbn0pO1xuXG52YXIgVFlQRVMgPSBleHBvcnRzLlRZUEVTID0gKDAsIF9rZXlzMi5kZWZhdWx0KSh0LlZJU0lUT1JfS0VZUykuY29uY2F0KCgwLCBfa2V5czIuZGVmYXVsdCkodC5GTElQUEVEX0FMSUFTX0tFWVMpKS5jb25jYXQoKDAsIF9rZXlzMi5kZWZhdWx0KSh0LkRFUFJFQ0FURURfS0VZUykpO1xuXG5mdW5jdGlvbiBpcyh0eXBlLCBub2RlLCBvcHRzKSB7XG4gIGlmICghbm9kZSkgcmV0dXJuIGZhbHNlO1xuXG4gIHZhciBtYXRjaGVzID0gaXNUeXBlKG5vZGUudHlwZSwgdHlwZSk7XG4gIGlmICghbWF0Y2hlcykgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2Ygb3B0cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0LnNoYWxsb3dFcXVhbChub2RlLCBvcHRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1R5cGUobm9kZVR5cGUsIHRhcmdldFR5cGUpIHtcbiAgaWYgKG5vZGVUeXBlID09PSB0YXJnZXRUeXBlKSByZXR1cm4gdHJ1ZTtcblxuICBpZiAodC5BTElBU19LRVlTW3RhcmdldFR5cGVdKSByZXR1cm4gZmFsc2U7XG5cbiAgdmFyIGFsaWFzZXMgPSB0LkZMSVBQRURfQUxJQVNfS0VZU1t0YXJnZXRUeXBlXTtcbiAgaWYgKGFsaWFzZXMpIHtcbiAgICBpZiAoYWxpYXNlc1swXSA9PT0gbm9kZVR5cGUpIHJldHVybiB0cnVlO1xuXG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gYWxpYXNlcywgX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvciksIF9pID0gMCwgX2l0ZXJhdG9yID0gX2lzQXJyYXkgPyBfaXRlcmF0b3IgOiAoMCwgX2dldEl0ZXJhdG9yMy5kZWZhdWx0KShfaXRlcmF0b3IpOzspIHtcbiAgICAgIHZhciBfcmVmO1xuXG4gICAgICBpZiAoX2lzQXJyYXkpIHtcbiAgICAgICAgaWYgKF9pID49IF9pdGVyYXRvci5sZW5ndGgpIGJyZWFrO1xuICAgICAgICBfcmVmID0gX2l0ZXJhdG9yW19pKytdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX2kgPSBfaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICBpZiAoX2kuZG9uZSkgYnJlYWs7XG4gICAgICAgIF9yZWYgPSBfaS52YWx1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGFsaWFzID0gX3JlZjtcblxuICAgICAgaWYgKG5vZGVUeXBlID09PSBhbGlhcykgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4oMCwgX2tleXMyLmRlZmF1bHQpKHQuQlVJTERFUl9LRVlTKS5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gIHZhciBrZXlzID0gdC5CVUlMREVSX0tFWVNbdHlwZV07XG5cbiAgZnVuY3Rpb24gYnVpbGRlcigpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IGtleXMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0LlwiICsgdHlwZSArIFwiOiBUb28gbWFueSBhcmd1bWVudHMgcGFzc2VkLiBSZWNlaXZlZCBcIiArIGFyZ3VtZW50cy5sZW5ndGggKyBcIiBidXQgY2FuIHJlY2VpdmUgXCIgKyAoXCJubyBtb3JlIHRoYW4gXCIgKyBrZXlzLmxlbmd0aCkpO1xuICAgIH1cblxuICAgIHZhciBub2RlID0ge307XG4gICAgbm9kZS50eXBlID0gdHlwZTtcblxuICAgIHZhciBpID0gMDtcblxuICAgIGZvciAodmFyIF9pdGVyYXRvcjIgPSBrZXlzLCBfaXNBcnJheTIgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvcjIpLCBfaTIgPSAwLCBfaXRlcmF0b3IyID0gX2lzQXJyYXkyID8gX2l0ZXJhdG9yMiA6ICgwLCBfZ2V0SXRlcmF0b3IzLmRlZmF1bHQpKF9pdGVyYXRvcjIpOzspIHtcbiAgICAgIHZhciBfcmVmMjtcblxuICAgICAgaWYgKF9pc0FycmF5Mikge1xuICAgICAgICBpZiAoX2kyID49IF9pdGVyYXRvcjIubGVuZ3RoKSBicmVhaztcbiAgICAgICAgX3JlZjIgPSBfaXRlcmF0b3IyW19pMisrXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9pMiA9IF9pdGVyYXRvcjIubmV4dCgpO1xuICAgICAgICBpZiAoX2kyLmRvbmUpIGJyZWFrO1xuICAgICAgICBfcmVmMiA9IF9pMi52YWx1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIF9rZXkgPSBfcmVmMjtcblxuICAgICAgdmFyIGZpZWxkID0gdC5OT0RFX0ZJRUxEU1t0eXBlXVtfa2V5XTtcblxuICAgICAgdmFyIGFyZyA9IGFyZ3VtZW50c1tpKytdO1xuICAgICAgaWYgKGFyZyA9PT0gdW5kZWZpbmVkKSBhcmcgPSAoMCwgX2Nsb25lMi5kZWZhdWx0KShmaWVsZC5kZWZhdWx0KTtcblxuICAgICAgbm9kZVtfa2V5XSA9IGFyZztcbiAgICB9XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gbm9kZSkge1xuICAgICAgdmFsaWRhdGUobm9kZSwga2V5LCBub2RlW2tleV0pO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdFt0eXBlXSA9IGJ1aWxkZXI7XG4gIHRbdHlwZVswXS50b0xvd2VyQ2FzZSgpICsgdHlwZS5zbGljZSgxKV0gPSBidWlsZGVyO1xufSk7XG5cbnZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKF90eXBlKSB7XG4gIHZhciBuZXdUeXBlID0gdC5ERVBSRUNBVEVEX0tFWVNbX3R5cGVdO1xuXG4gIGZ1bmN0aW9uIHByb3h5KGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnNvbGUudHJhY2UoXCJUaGUgbm9kZSB0eXBlIFwiICsgX3R5cGUgKyBcIiBoYXMgYmVlbiByZW5hbWVkIHRvIFwiICsgbmV3VHlwZSk7XG4gICAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG5cbiAgdFtfdHlwZV0gPSB0W190eXBlWzBdLnRvTG93ZXJDYXNlKCkgKyBfdHlwZS5zbGljZSgxKV0gPSBwcm94eSh0W25ld1R5cGVdKTtcbiAgdFtcImlzXCIgKyBfdHlwZV0gPSBwcm94eSh0W1wiaXNcIiArIG5ld1R5cGVdKTtcbiAgdFtcImFzc2VydFwiICsgX3R5cGVdID0gcHJveHkodFtcImFzc2VydFwiICsgbmV3VHlwZV0pO1xufTtcblxuZm9yICh2YXIgX3R5cGUgaW4gdC5ERVBSRUNBVEVEX0tFWVMpIHtcbiAgX2xvb3AoX3R5cGUpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZShub2RlLCBrZXksIHZhbCkge1xuICBpZiAoIW5vZGUpIHJldHVybjtcblxuICB2YXIgZmllbGRzID0gdC5OT0RFX0ZJRUxEU1tub2RlLnR5cGVdO1xuICBpZiAoIWZpZWxkcykgcmV0dXJuO1xuXG4gIHZhciBmaWVsZCA9IGZpZWxkc1trZXldO1xuICBpZiAoIWZpZWxkIHx8ICFmaWVsZC52YWxpZGF0ZSkgcmV0dXJuO1xuICBpZiAoZmllbGQub3B0aW9uYWwgJiYgdmFsID09IG51bGwpIHJldHVybjtcblxuICBmaWVsZC52YWxpZGF0ZShub2RlLCBrZXksIHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNoYWxsb3dFcXVhbChhY3R1YWwsIGV4cGVjdGVkKSB7XG4gIHZhciBrZXlzID0gKDAsIF9rZXlzMi5kZWZhdWx0KShleHBlY3RlZCk7XG5cbiAgZm9yICh2YXIgX2l0ZXJhdG9yMyA9IGtleXMsIF9pc0FycmF5MyA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yMyksIF9pMyA9IDAsIF9pdGVyYXRvcjMgPSBfaXNBcnJheTMgPyBfaXRlcmF0b3IzIDogKDAsIF9nZXRJdGVyYXRvcjMuZGVmYXVsdCkoX2l0ZXJhdG9yMyk7Oykge1xuICAgIHZhciBfcmVmMztcblxuICAgIGlmIChfaXNBcnJheTMpIHtcbiAgICAgIGlmIChfaTMgPj0gX2l0ZXJhdG9yMy5sZW5ndGgpIGJyZWFrO1xuICAgICAgX3JlZjMgPSBfaXRlcmF0b3IzW19pMysrXTtcbiAgICB9IGVsc2Uge1xuICAgICAgX2kzID0gX2l0ZXJhdG9yMy5uZXh0KCk7XG4gICAgICBpZiAoX2kzLmRvbmUpIGJyZWFrO1xuICAgICAgX3JlZjMgPSBfaTMudmFsdWU7XG4gICAgfVxuXG4gICAgdmFyIGtleSA9IF9yZWYzO1xuXG4gICAgaWYgKGFjdHVhbFtrZXldICE9PSBleHBlY3RlZFtrZXldKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZFRvTWVtYmVyRXhwcmVzc2lvbihtZW1iZXIsIGFwcGVuZCwgY29tcHV0ZWQpIHtcbiAgbWVtYmVyLm9iamVjdCA9IHQubWVtYmVyRXhwcmVzc2lvbihtZW1iZXIub2JqZWN0LCBtZW1iZXIucHJvcGVydHksIG1lbWJlci5jb21wdXRlZCk7XG4gIG1lbWJlci5wcm9wZXJ0eSA9IGFwcGVuZDtcbiAgbWVtYmVyLmNvbXB1dGVkID0gISFjb21wdXRlZDtcbiAgcmV0dXJuIG1lbWJlcjtcbn1cblxuZnVuY3Rpb24gcHJlcGVuZFRvTWVtYmVyRXhwcmVzc2lvbihtZW1iZXIsIHByZXBlbmQpIHtcbiAgbWVtYmVyLm9iamVjdCA9IHQubWVtYmVyRXhwcmVzc2lvbihwcmVwZW5kLCBtZW1iZXIub2JqZWN0KTtcbiAgcmV0dXJuIG1lbWJlcjtcbn1cblxuZnVuY3Rpb24gZW5zdXJlQmxvY2sobm9kZSkge1xuICB2YXIga2V5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBcImJvZHlcIjtcblxuICByZXR1cm4gbm9kZVtrZXldID0gdC50b0Jsb2NrKG5vZGVba2V5XSwgbm9kZSk7XG59XG5cbmZ1bmN0aW9uIGNsb25lKG5vZGUpIHtcbiAgaWYgKCFub2RlKSByZXR1cm4gbm9kZTtcbiAgdmFyIG5ld05vZGUgPSB7fTtcbiAgZm9yICh2YXIga2V5IGluIG5vZGUpIHtcbiAgICBpZiAoa2V5WzBdID09PSBcIl9cIikgY29udGludWU7XG4gICAgbmV3Tm9kZVtrZXldID0gbm9kZVtrZXldO1xuICB9XG4gIHJldHVybiBuZXdOb2RlO1xufVxuXG5mdW5jdGlvbiBjbG9uZVdpdGhvdXRMb2Mobm9kZSkge1xuICB2YXIgbmV3Tm9kZSA9IGNsb25lKG5vZGUpO1xuICBkZWxldGUgbmV3Tm9kZS5sb2M7XG4gIHJldHVybiBuZXdOb2RlO1xufVxuXG5mdW5jdGlvbiBjbG9uZURlZXAobm9kZSkge1xuICBpZiAoIW5vZGUpIHJldHVybiBub2RlO1xuICB2YXIgbmV3Tm9kZSA9IHt9O1xuXG4gIGZvciAodmFyIGtleSBpbiBub2RlKSB7XG4gICAgaWYgKGtleVswXSA9PT0gXCJfXCIpIGNvbnRpbnVlO1xuXG4gICAgdmFyIHZhbCA9IG5vZGVba2V5XTtcblxuICAgIGlmICh2YWwpIHtcbiAgICAgIGlmICh2YWwudHlwZSkge1xuICAgICAgICB2YWwgPSB0LmNsb25lRGVlcCh2YWwpO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAgdmFsID0gdmFsLm1hcCh0LmNsb25lRGVlcCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbmV3Tm9kZVtrZXldID0gdmFsO1xuICB9XG5cbiAgcmV0dXJuIG5ld05vZGU7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkTWF0Y2hNZW1iZXJFeHByZXNzaW9uKG1hdGNoLCBhbGxvd1BhcnRpYWwpIHtcbiAgdmFyIHBhcnRzID0gbWF0Y2guc3BsaXQoXCIuXCIpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAobWVtYmVyKSB7XG4gICAgaWYgKCF0LmlzTWVtYmVyRXhwcmVzc2lvbihtZW1iZXIpKSByZXR1cm4gZmFsc2U7XG5cbiAgICB2YXIgc2VhcmNoID0gW21lbWJlcl07XG4gICAgdmFyIGkgPSAwO1xuXG4gICAgd2hpbGUgKHNlYXJjaC5sZW5ndGgpIHtcbiAgICAgIHZhciBub2RlID0gc2VhcmNoLnNoaWZ0KCk7XG5cbiAgICAgIGlmIChhbGxvd1BhcnRpYWwgJiYgaSA9PT0gcGFydHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodC5pc0lkZW50aWZpZXIobm9kZSkpIHtcbiAgICAgICAgaWYgKHBhcnRzW2ldICE9PSBub2RlLm5hbWUpIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAodC5pc1N0cmluZ0xpdGVyYWwobm9kZSkpIHtcbiAgICAgICAgaWYgKHBhcnRzW2ldICE9PSBub2RlLnZhbHVlKSByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKHQuaXNNZW1iZXJFeHByZXNzaW9uKG5vZGUpKSB7XG4gICAgICAgIGlmIChub2RlLmNvbXB1dGVkICYmICF0LmlzU3RyaW5nTGl0ZXJhbChub2RlLnByb3BlcnR5KSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWFyY2gucHVzaChub2RlLm9iamVjdCk7XG4gICAgICAgICAgc2VhcmNoLnB1c2gobm9kZS5wcm9wZXJ0eSk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCsraSA+IHBhcnRzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNvbW1lbnRzKG5vZGUpIHtcbiAgZm9yICh2YXIgX2l0ZXJhdG9yNCA9IHQuQ09NTUVOVF9LRVlTLCBfaXNBcnJheTQgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvcjQpLCBfaTQgPSAwLCBfaXRlcmF0b3I0ID0gX2lzQXJyYXk0ID8gX2l0ZXJhdG9yNCA6ICgwLCBfZ2V0SXRlcmF0b3IzLmRlZmF1bHQpKF9pdGVyYXRvcjQpOzspIHtcbiAgICB2YXIgX3JlZjQ7XG5cbiAgICBpZiAoX2lzQXJyYXk0KSB7XG4gICAgICBpZiAoX2k0ID49IF9pdGVyYXRvcjQubGVuZ3RoKSBicmVhaztcbiAgICAgIF9yZWY0ID0gX2l0ZXJhdG9yNFtfaTQrK107XG4gICAgfSBlbHNlIHtcbiAgICAgIF9pNCA9IF9pdGVyYXRvcjQubmV4dCgpO1xuICAgICAgaWYgKF9pNC5kb25lKSBicmVhaztcbiAgICAgIF9yZWY0ID0gX2k0LnZhbHVlO1xuICAgIH1cblxuICAgIHZhciBrZXkgPSBfcmVmNDtcblxuICAgIGRlbGV0ZSBub2RlW2tleV07XG4gIH1cbiAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIGluaGVyaXRzQ29tbWVudHMoY2hpbGQsIHBhcmVudCkge1xuICBpbmhlcml0VHJhaWxpbmdDb21tZW50cyhjaGlsZCwgcGFyZW50KTtcbiAgaW5oZXJpdExlYWRpbmdDb21tZW50cyhjaGlsZCwgcGFyZW50KTtcbiAgaW5oZXJpdElubmVyQ29tbWVudHMoY2hpbGQsIHBhcmVudCk7XG4gIHJldHVybiBjaGlsZDtcbn1cblxuZnVuY3Rpb24gaW5oZXJpdFRyYWlsaW5nQ29tbWVudHMoY2hpbGQsIHBhcmVudCkge1xuICBfaW5oZXJpdENvbW1lbnRzKFwidHJhaWxpbmdDb21tZW50c1wiLCBjaGlsZCwgcGFyZW50KTtcbn1cblxuZnVuY3Rpb24gaW5oZXJpdExlYWRpbmdDb21tZW50cyhjaGlsZCwgcGFyZW50KSB7XG4gIF9pbmhlcml0Q29tbWVudHMoXCJsZWFkaW5nQ29tbWVudHNcIiwgY2hpbGQsIHBhcmVudCk7XG59XG5cbmZ1bmN0aW9uIGluaGVyaXRJbm5lckNvbW1lbnRzKGNoaWxkLCBwYXJlbnQpIHtcbiAgX2luaGVyaXRDb21tZW50cyhcImlubmVyQ29tbWVudHNcIiwgY2hpbGQsIHBhcmVudCk7XG59XG5cbmZ1bmN0aW9uIF9pbmhlcml0Q29tbWVudHMoa2V5LCBjaGlsZCwgcGFyZW50KSB7XG4gIGlmIChjaGlsZCAmJiBwYXJlbnQpIHtcbiAgICBjaGlsZFtrZXldID0gKDAsIF91bmlxMi5kZWZhdWx0KShbXS5jb25jYXQoY2hpbGRba2V5XSwgcGFyZW50W2tleV0pLmZpbHRlcihCb29sZWFuKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5oZXJpdHMoY2hpbGQsIHBhcmVudCkge1xuICBpZiAoIWNoaWxkIHx8ICFwYXJlbnQpIHJldHVybiBjaGlsZDtcblxuICBmb3IgKHZhciBfaXRlcmF0b3I1ID0gdC5JTkhFUklUX0tFWVMub3B0aW9uYWwsIF9pc0FycmF5NSA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yNSksIF9pNSA9IDAsIF9pdGVyYXRvcjUgPSBfaXNBcnJheTUgPyBfaXRlcmF0b3I1IDogKDAsIF9nZXRJdGVyYXRvcjMuZGVmYXVsdCkoX2l0ZXJhdG9yNSk7Oykge1xuICAgIHZhciBfcmVmNTtcblxuICAgIGlmIChfaXNBcnJheTUpIHtcbiAgICAgIGlmIChfaTUgPj0gX2l0ZXJhdG9yNS5sZW5ndGgpIGJyZWFrO1xuICAgICAgX3JlZjUgPSBfaXRlcmF0b3I1W19pNSsrXTtcbiAgICB9IGVsc2Uge1xuICAgICAgX2k1ID0gX2l0ZXJhdG9yNS5uZXh0KCk7XG4gICAgICBpZiAoX2k1LmRvbmUpIGJyZWFrO1xuICAgICAgX3JlZjUgPSBfaTUudmFsdWU7XG4gICAgfVxuXG4gICAgdmFyIF9rZXkyID0gX3JlZjU7XG5cbiAgICBpZiAoY2hpbGRbX2tleTJdID09IG51bGwpIHtcbiAgICAgIGNoaWxkW19rZXkyXSA9IHBhcmVudFtfa2V5Ml07XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIga2V5IGluIHBhcmVudCkge1xuICAgIGlmIChrZXlbMF0gPT09IFwiX1wiKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07XG4gIH1cblxuICBmb3IgKHZhciBfaXRlcmF0b3I2ID0gdC5JTkhFUklUX0tFWVMuZm9yY2UsIF9pc0FycmF5NiA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yNiksIF9pNiA9IDAsIF9pdGVyYXRvcjYgPSBfaXNBcnJheTYgPyBfaXRlcmF0b3I2IDogKDAsIF9nZXRJdGVyYXRvcjMuZGVmYXVsdCkoX2l0ZXJhdG9yNik7Oykge1xuICAgIHZhciBfcmVmNjtcblxuICAgIGlmIChfaXNBcnJheTYpIHtcbiAgICAgIGlmIChfaTYgPj0gX2l0ZXJhdG9yNi5sZW5ndGgpIGJyZWFrO1xuICAgICAgX3JlZjYgPSBfaXRlcmF0b3I2W19pNisrXTtcbiAgICB9IGVsc2Uge1xuICAgICAgX2k2ID0gX2l0ZXJhdG9yNi5uZXh0KCk7XG4gICAgICBpZiAoX2k2LmRvbmUpIGJyZWFrO1xuICAgICAgX3JlZjYgPSBfaTYudmFsdWU7XG4gICAgfVxuXG4gICAgdmFyIF9rZXkzID0gX3JlZjY7XG5cbiAgICBjaGlsZFtfa2V5M10gPSBwYXJlbnRbX2tleTNdO1xuICB9XG5cbiAgdC5pbmhlcml0c0NvbW1lbnRzKGNoaWxkLCBwYXJlbnQpO1xuXG4gIHJldHVybiBjaGlsZDtcbn1cblxuZnVuY3Rpb24gYXNzZXJ0Tm9kZShub2RlKSB7XG4gIGlmICghaXNOb2RlKG5vZGUpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk5vdCBhIHZhbGlkIG5vZGUgXCIgKyAobm9kZSAmJiBub2RlLnR5cGUpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc05vZGUobm9kZSkge1xuICByZXR1cm4gISEobm9kZSAmJiBfZGVmaW5pdGlvbnMuVklTSVRPUl9LRVlTW25vZGUudHlwZV0pO1xufVxuXG4oMCwgX3RvRmFzdFByb3BlcnRpZXMyLmRlZmF1bHQpKHQpO1xuKDAsIF90b0Zhc3RQcm9wZXJ0aWVzMi5kZWZhdWx0KSh0LlZJU0lUT1JfS0VZUyk7XG5cbmZ1bmN0aW9uIHRyYXZlcnNlRmFzdChub2RlLCBlbnRlciwgb3B0cykge1xuICBpZiAoIW5vZGUpIHJldHVybjtcblxuICB2YXIga2V5cyA9IHQuVklTSVRPUl9LRVlTW25vZGUudHlwZV07XG4gIGlmICgha2V5cykgcmV0dXJuO1xuXG4gIG9wdHMgPSBvcHRzIHx8IHt9O1xuICBlbnRlcihub2RlLCBvcHRzKTtcblxuICBmb3IgKHZhciBfaXRlcmF0b3I3ID0ga2V5cywgX2lzQXJyYXk3ID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3I3KSwgX2k3ID0gMCwgX2l0ZXJhdG9yNyA9IF9pc0FycmF5NyA/IF9pdGVyYXRvcjcgOiAoMCwgX2dldEl0ZXJhdG9yMy5kZWZhdWx0KShfaXRlcmF0b3I3KTs7KSB7XG4gICAgdmFyIF9yZWY3O1xuXG4gICAgaWYgKF9pc0FycmF5Nykge1xuICAgICAgaWYgKF9pNyA+PSBfaXRlcmF0b3I3Lmxlbmd0aCkgYnJlYWs7XG4gICAgICBfcmVmNyA9IF9pdGVyYXRvcjdbX2k3KytdO1xuICAgIH0gZWxzZSB7XG4gICAgICBfaTcgPSBfaXRlcmF0b3I3Lm5leHQoKTtcbiAgICAgIGlmIChfaTcuZG9uZSkgYnJlYWs7XG4gICAgICBfcmVmNyA9IF9pNy52YWx1ZTtcbiAgICB9XG5cbiAgICB2YXIga2V5ID0gX3JlZjc7XG5cbiAgICB2YXIgc3ViTm9kZSA9IG5vZGVba2V5XTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHN1Yk5vZGUpKSB7XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3I4ID0gc3ViTm9kZSwgX2lzQXJyYXk4ID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3I4KSwgX2k4ID0gMCwgX2l0ZXJhdG9yOCA9IF9pc0FycmF5OCA/IF9pdGVyYXRvcjggOiAoMCwgX2dldEl0ZXJhdG9yMy5kZWZhdWx0KShfaXRlcmF0b3I4KTs7KSB7XG4gICAgICAgIHZhciBfcmVmODtcblxuICAgICAgICBpZiAoX2lzQXJyYXk4KSB7XG4gICAgICAgICAgaWYgKF9pOCA+PSBfaXRlcmF0b3I4Lmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgX3JlZjggPSBfaXRlcmF0b3I4W19pOCsrXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfaTggPSBfaXRlcmF0b3I4Lm5leHQoKTtcbiAgICAgICAgICBpZiAoX2k4LmRvbmUpIGJyZWFrO1xuICAgICAgICAgIF9yZWY4ID0gX2k4LnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF9ub2RlID0gX3JlZjg7XG5cbiAgICAgICAgdHJhdmVyc2VGYXN0KF9ub2RlLCBlbnRlciwgb3B0cyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYXZlcnNlRmFzdChzdWJOb2RlLCBlbnRlciwgb3B0cyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBDTEVBUl9LRVlTID0gW1widG9rZW5zXCIsIFwic3RhcnRcIiwgXCJlbmRcIiwgXCJsb2NcIiwgXCJyYXdcIiwgXCJyYXdWYWx1ZVwiXTtcblxudmFyIENMRUFSX0tFWVNfUExVU19DT01NRU5UUyA9IHQuQ09NTUVOVF9LRVlTLmNvbmNhdChbXCJjb21tZW50c1wiXSkuY29uY2F0KENMRUFSX0tFWVMpO1xuXG5mdW5jdGlvbiByZW1vdmVQcm9wZXJ0aWVzKG5vZGUsIG9wdHMpIHtcbiAgb3B0cyA9IG9wdHMgfHwge307XG4gIHZhciBtYXAgPSBvcHRzLnByZXNlcnZlQ29tbWVudHMgPyBDTEVBUl9LRVlTIDogQ0xFQVJfS0VZU19QTFVTX0NPTU1FTlRTO1xuICBmb3IgKHZhciBfaXRlcmF0b3I5ID0gbWFwLCBfaXNBcnJheTkgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvcjkpLCBfaTkgPSAwLCBfaXRlcmF0b3I5ID0gX2lzQXJyYXk5ID8gX2l0ZXJhdG9yOSA6ICgwLCBfZ2V0SXRlcmF0b3IzLmRlZmF1bHQpKF9pdGVyYXRvcjkpOzspIHtcbiAgICB2YXIgX3JlZjk7XG5cbiAgICBpZiAoX2lzQXJyYXk5KSB7XG4gICAgICBpZiAoX2k5ID49IF9pdGVyYXRvcjkubGVuZ3RoKSBicmVhaztcbiAgICAgIF9yZWY5ID0gX2l0ZXJhdG9yOVtfaTkrK107XG4gICAgfSBlbHNlIHtcbiAgICAgIF9pOSA9IF9pdGVyYXRvcjkubmV4dCgpO1xuICAgICAgaWYgKF9pOS5kb25lKSBicmVhaztcbiAgICAgIF9yZWY5ID0gX2k5LnZhbHVlO1xuICAgIH1cblxuICAgIHZhciBfa2V5NCA9IF9yZWY5O1xuXG4gICAgaWYgKG5vZGVbX2tleTRdICE9IG51bGwpIG5vZGVbX2tleTRdID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZm9yICh2YXIga2V5IGluIG5vZGUpIHtcbiAgICBpZiAoa2V5WzBdID09PSBcIl9cIiAmJiBub2RlW2tleV0gIT0gbnVsbCkgbm9kZVtrZXldID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgdmFyIHN5bXMgPSAoMCwgX2dldE93blByb3BlcnR5U3ltYm9sczIuZGVmYXVsdCkobm9kZSk7XG4gIGZvciAodmFyIF9pdGVyYXRvcjEwID0gc3ltcywgX2lzQXJyYXkxMCA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yMTApLCBfaTEwID0gMCwgX2l0ZXJhdG9yMTAgPSBfaXNBcnJheTEwID8gX2l0ZXJhdG9yMTAgOiAoMCwgX2dldEl0ZXJhdG9yMy5kZWZhdWx0KShfaXRlcmF0b3IxMCk7Oykge1xuICAgIHZhciBfcmVmMTA7XG5cbiAgICBpZiAoX2lzQXJyYXkxMCkge1xuICAgICAgaWYgKF9pMTAgPj0gX2l0ZXJhdG9yMTAubGVuZ3RoKSBicmVhaztcbiAgICAgIF9yZWYxMCA9IF9pdGVyYXRvcjEwW19pMTArK107XG4gICAgfSBlbHNlIHtcbiAgICAgIF9pMTAgPSBfaXRlcmF0b3IxMC5uZXh0KCk7XG4gICAgICBpZiAoX2kxMC5kb25lKSBicmVhaztcbiAgICAgIF9yZWYxMCA9IF9pMTAudmFsdWU7XG4gICAgfVxuXG4gICAgdmFyIHN5bSA9IF9yZWYxMDtcblxuICAgIG5vZGVbc3ltXSA9IG51bGw7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJvcGVydGllc0RlZXAodHJlZSwgb3B0cykge1xuICB0cmF2ZXJzZUZhc3QodHJlZSwgcmVtb3ZlUHJvcGVydGllcywgb3B0cyk7XG4gIHJldHVybiB0cmVlO1xufSIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5ERVBSRUNBVEVEX0tFWVMgPSBleHBvcnRzLkJVSUxERVJfS0VZUyA9IGV4cG9ydHMuTk9ERV9GSUVMRFMgPSBleHBvcnRzLkFMSUFTX0tFWVMgPSBleHBvcnRzLlZJU0lUT1JfS0VZUyA9IHVuZGVmaW5lZDtcblxudmFyIF9nZXRJdGVyYXRvcjIgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvclwiKTtcblxudmFyIF9nZXRJdGVyYXRvcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRJdGVyYXRvcjIpO1xuXG52YXIgX3N0cmluZ2lmeSA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnlcIik7XG5cbnZhciBfc3RyaW5naWZ5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0cmluZ2lmeSk7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxuZXhwb3J0cy5hc3NlcnRFYWNoID0gYXNzZXJ0RWFjaDtcbmV4cG9ydHMuYXNzZXJ0T25lT2YgPSBhc3NlcnRPbmVPZjtcbmV4cG9ydHMuYXNzZXJ0Tm9kZVR5cGUgPSBhc3NlcnROb2RlVHlwZTtcbmV4cG9ydHMuYXNzZXJ0Tm9kZU9yVmFsdWVUeXBlID0gYXNzZXJ0Tm9kZU9yVmFsdWVUeXBlO1xuZXhwb3J0cy5hc3NlcnRWYWx1ZVR5cGUgPSBhc3NlcnRWYWx1ZVR5cGU7XG5leHBvcnRzLmNoYWluID0gY2hhaW47XG5leHBvcnRzLmRlZmF1bHQgPSBkZWZpbmVUeXBlO1xuXG52YXIgX2luZGV4ID0gcmVxdWlyZShcIi4uL2luZGV4XCIpO1xuXG52YXIgdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9pbmRleCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBWSVNJVE9SX0tFWVMgPSBleHBvcnRzLlZJU0lUT1JfS0VZUyA9IHt9O1xudmFyIEFMSUFTX0tFWVMgPSBleHBvcnRzLkFMSUFTX0tFWVMgPSB7fTtcbnZhciBOT0RFX0ZJRUxEUyA9IGV4cG9ydHMuTk9ERV9GSUVMRFMgPSB7fTtcbnZhciBCVUlMREVSX0tFWVMgPSBleHBvcnRzLkJVSUxERVJfS0VZUyA9IHt9O1xudmFyIERFUFJFQ0FURURfS0VZUyA9IGV4cG9ydHMuREVQUkVDQVRFRF9LRVlTID0ge307XG5cbmZ1bmN0aW9uIGdldFR5cGUodmFsKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICByZXR1cm4gXCJhcnJheVwiO1xuICB9IGVsc2UgaWYgKHZhbCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBcIm51bGxcIjtcbiAgfSBlbHNlIGlmICh2YWwgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBcInVuZGVmaW5lZFwiO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KSh2YWwpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydEVhY2goY2FsbGJhY2spIHtcbiAgZnVuY3Rpb24gdmFsaWRhdG9yKG5vZGUsIGtleSwgdmFsKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbCkpIHJldHVybjtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjYWxsYmFjayhub2RlLCBrZXkgKyBcIltcIiArIGkgKyBcIl1cIiwgdmFsW2ldKTtcbiAgICB9XG4gIH1cbiAgdmFsaWRhdG9yLmVhY2ggPSBjYWxsYmFjaztcbiAgcmV0dXJuIHZhbGlkYXRvcjtcbn1cblxuZnVuY3Rpb24gYXNzZXJ0T25lT2YoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCB2YWxzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgdmFsc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHZhbGlkYXRlKG5vZGUsIGtleSwgdmFsKSB7XG4gICAgaWYgKHZhbHMuaW5kZXhPZih2YWwpIDwgMCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByb3BlcnR5IFwiICsga2V5ICsgXCIgZXhwZWN0ZWQgdmFsdWUgdG8gYmUgb25lIG9mIFwiICsgKDAsIF9zdHJpbmdpZnkyLmRlZmF1bHQpKHZhbHMpICsgXCIgYnV0IGdvdCBcIiArICgwLCBfc3RyaW5naWZ5Mi5kZWZhdWx0KSh2YWwpKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZS5vbmVPZiA9IHZhbHM7XG5cbiAgcmV0dXJuIHZhbGlkYXRlO1xufVxuXG5mdW5jdGlvbiBhc3NlcnROb2RlVHlwZSgpIHtcbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCB0eXBlcyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgdHlwZXNbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHZhbGlkYXRlKG5vZGUsIGtleSwgdmFsKSB7XG4gICAgdmFyIHZhbGlkID0gZmFsc2U7XG5cbiAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSB0eXBlcywgX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvciksIF9pID0gMCwgX2l0ZXJhdG9yID0gX2lzQXJyYXkgPyBfaXRlcmF0b3IgOiAoMCwgX2dldEl0ZXJhdG9yMy5kZWZhdWx0KShfaXRlcmF0b3IpOzspIHtcbiAgICAgIHZhciBfcmVmO1xuXG4gICAgICBpZiAoX2lzQXJyYXkpIHtcbiAgICAgICAgaWYgKF9pID49IF9pdGVyYXRvci5sZW5ndGgpIGJyZWFrO1xuICAgICAgICBfcmVmID0gX2l0ZXJhdG9yW19pKytdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX2kgPSBfaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICBpZiAoX2kuZG9uZSkgYnJlYWs7XG4gICAgICAgIF9yZWYgPSBfaS52YWx1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHR5cGUgPSBfcmVmO1xuXG4gICAgICBpZiAodC5pcyh0eXBlLCB2YWwpKSB7XG4gICAgICAgIHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByb3BlcnR5IFwiICsga2V5ICsgXCIgb2YgXCIgKyBub2RlLnR5cGUgKyBcIiBleHBlY3RlZCBub2RlIHRvIGJlIG9mIGEgdHlwZSBcIiArICgwLCBfc3RyaW5naWZ5Mi5kZWZhdWx0KSh0eXBlcykgKyBcIiBcIiArIChcImJ1dCBpbnN0ZWFkIGdvdCBcIiArICgwLCBfc3RyaW5naWZ5Mi5kZWZhdWx0KSh2YWwgJiYgdmFsLnR5cGUpKSk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUub25lT2ZOb2RlVHlwZXMgPSB0eXBlcztcblxuICByZXR1cm4gdmFsaWRhdGU7XG59XG5cbmZ1bmN0aW9uIGFzc2VydE5vZGVPclZhbHVlVHlwZSgpIHtcbiAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCB0eXBlcyA9IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgdHlwZXNbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHZhbGlkYXRlKG5vZGUsIGtleSwgdmFsKSB7XG4gICAgdmFyIHZhbGlkID0gZmFsc2U7XG5cbiAgICBmb3IgKHZhciBfaXRlcmF0b3IyID0gdHlwZXMsIF9pc0FycmF5MiA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yMiksIF9pMiA9IDAsIF9pdGVyYXRvcjIgPSBfaXNBcnJheTIgPyBfaXRlcmF0b3IyIDogKDAsIF9nZXRJdGVyYXRvcjMuZGVmYXVsdCkoX2l0ZXJhdG9yMik7Oykge1xuICAgICAgdmFyIF9yZWYyO1xuXG4gICAgICBpZiAoX2lzQXJyYXkyKSB7XG4gICAgICAgIGlmIChfaTIgPj0gX2l0ZXJhdG9yMi5sZW5ndGgpIGJyZWFrO1xuICAgICAgICBfcmVmMiA9IF9pdGVyYXRvcjJbX2kyKytdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX2kyID0gX2l0ZXJhdG9yMi5uZXh0KCk7XG4gICAgICAgIGlmIChfaTIuZG9uZSkgYnJlYWs7XG4gICAgICAgIF9yZWYyID0gX2kyLnZhbHVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgdHlwZSA9IF9yZWYyO1xuXG4gICAgICBpZiAoZ2V0VHlwZSh2YWwpID09PSB0eXBlIHx8IHQuaXModHlwZSwgdmFsKSkge1xuICAgICAgICB2YWxpZCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcm9wZXJ0eSBcIiArIGtleSArIFwiIG9mIFwiICsgbm9kZS50eXBlICsgXCIgZXhwZWN0ZWQgbm9kZSB0byBiZSBvZiBhIHR5cGUgXCIgKyAoMCwgX3N0cmluZ2lmeTIuZGVmYXVsdCkodHlwZXMpICsgXCIgXCIgKyAoXCJidXQgaW5zdGVhZCBnb3QgXCIgKyAoMCwgX3N0cmluZ2lmeTIuZGVmYXVsdCkodmFsICYmIHZhbC50eXBlKSkpO1xuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlLm9uZU9mTm9kZU9yVmFsdWVUeXBlcyA9IHR5cGVzO1xuXG4gIHJldHVybiB2YWxpZGF0ZTtcbn1cblxuZnVuY3Rpb24gYXNzZXJ0VmFsdWVUeXBlKHR5cGUpIHtcbiAgZnVuY3Rpb24gdmFsaWRhdGUobm9kZSwga2V5LCB2YWwpIHtcbiAgICB2YXIgdmFsaWQgPSBnZXRUeXBlKHZhbCkgPT09IHR5cGU7XG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJvcGVydHkgXCIgKyBrZXkgKyBcIiBleHBlY3RlZCB0eXBlIG9mIFwiICsgdHlwZSArIFwiIGJ1dCBnb3QgXCIgKyBnZXRUeXBlKHZhbCkpO1xuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlLnR5cGUgPSB0eXBlO1xuXG4gIHJldHVybiB2YWxpZGF0ZTtcbn1cblxuZnVuY3Rpb24gY2hhaW4oKSB7XG4gIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwgZm5zID0gQXJyYXkoX2xlbjQpLCBfa2V5NCA9IDA7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICBmbnNbX2tleTRdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHZhbGlkYXRlKCkge1xuICAgIGZvciAodmFyIF9pdGVyYXRvcjMgPSBmbnMsIF9pc0FycmF5MyA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yMyksIF9pMyA9IDAsIF9pdGVyYXRvcjMgPSBfaXNBcnJheTMgPyBfaXRlcmF0b3IzIDogKDAsIF9nZXRJdGVyYXRvcjMuZGVmYXVsdCkoX2l0ZXJhdG9yMyk7Oykge1xuICAgICAgdmFyIF9yZWYzO1xuXG4gICAgICBpZiAoX2lzQXJyYXkzKSB7XG4gICAgICAgIGlmIChfaTMgPj0gX2l0ZXJhdG9yMy5sZW5ndGgpIGJyZWFrO1xuICAgICAgICBfcmVmMyA9IF9pdGVyYXRvcjNbX2kzKytdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX2kzID0gX2l0ZXJhdG9yMy5uZXh0KCk7XG4gICAgICAgIGlmIChfaTMuZG9uZSkgYnJlYWs7XG4gICAgICAgIF9yZWYzID0gX2kzLnZhbHVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgZm4gPSBfcmVmMztcblxuICAgICAgZm4uYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuICB2YWxpZGF0ZS5jaGFpbk9mID0gZm5zO1xuICByZXR1cm4gdmFsaWRhdGU7XG59XG5cbmZ1bmN0aW9uIGRlZmluZVR5cGUodHlwZSkge1xuICB2YXIgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgdmFyIGluaGVyaXRzID0gb3B0cy5pbmhlcml0cyAmJiBzdG9yZVtvcHRzLmluaGVyaXRzXSB8fCB7fTtcblxuICBvcHRzLmZpZWxkcyA9IG9wdHMuZmllbGRzIHx8IGluaGVyaXRzLmZpZWxkcyB8fCB7fTtcbiAgb3B0cy52aXNpdG9yID0gb3B0cy52aXNpdG9yIHx8IGluaGVyaXRzLnZpc2l0b3IgfHwgW107XG4gIG9wdHMuYWxpYXNlcyA9IG9wdHMuYWxpYXNlcyB8fCBpbmhlcml0cy5hbGlhc2VzIHx8IFtdO1xuICBvcHRzLmJ1aWxkZXIgPSBvcHRzLmJ1aWxkZXIgfHwgaW5oZXJpdHMuYnVpbGRlciB8fCBvcHRzLnZpc2l0b3IgfHwgW107XG5cbiAgaWYgKG9wdHMuZGVwcmVjYXRlZEFsaWFzKSB7XG4gICAgREVQUkVDQVRFRF9LRVlTW29wdHMuZGVwcmVjYXRlZEFsaWFzXSA9IHR5cGU7XG4gIH1cblxuICBmb3IgKHZhciBfaXRlcmF0b3I0ID0gb3B0cy52aXNpdG9yLmNvbmNhdChvcHRzLmJ1aWxkZXIpLCBfaXNBcnJheTQgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvcjQpLCBfaTQgPSAwLCBfaXRlcmF0b3I0ID0gX2lzQXJyYXk0ID8gX2l0ZXJhdG9yNCA6ICgwLCBfZ2V0SXRlcmF0b3IzLmRlZmF1bHQpKF9pdGVyYXRvcjQpOzspIHtcbiAgICB2YXIgX3JlZjQ7XG5cbiAgICBpZiAoX2lzQXJyYXk0KSB7XG4gICAgICBpZiAoX2k0ID49IF9pdGVyYXRvcjQubGVuZ3RoKSBicmVhaztcbiAgICAgIF9yZWY0ID0gX2l0ZXJhdG9yNFtfaTQrK107XG4gICAgfSBlbHNlIHtcbiAgICAgIF9pNCA9IF9pdGVyYXRvcjQubmV4dCgpO1xuICAgICAgaWYgKF9pNC5kb25lKSBicmVhaztcbiAgICAgIF9yZWY0ID0gX2k0LnZhbHVlO1xuICAgIH1cblxuICAgIHZhciBfa2V5NSA9IF9yZWY0O1xuXG4gICAgb3B0cy5maWVsZHNbX2tleTVdID0gb3B0cy5maWVsZHNbX2tleTVdIHx8IHt9O1xuICB9XG5cbiAgZm9yICh2YXIga2V5IGluIG9wdHMuZmllbGRzKSB7XG4gICAgdmFyIGZpZWxkID0gb3B0cy5maWVsZHNba2V5XTtcblxuICAgIGlmIChvcHRzLmJ1aWxkZXIuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgZmllbGQub3B0aW9uYWwgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoZmllbGQuZGVmYXVsdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBmaWVsZC5kZWZhdWx0ID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKCFmaWVsZC52YWxpZGF0ZSkge1xuICAgICAgZmllbGQudmFsaWRhdGUgPSBhc3NlcnRWYWx1ZVR5cGUoZ2V0VHlwZShmaWVsZC5kZWZhdWx0KSk7XG4gICAgfVxuICB9XG5cbiAgVklTSVRPUl9LRVlTW3R5cGVdID0gb3B0cy52aXNpdG9yO1xuICBCVUlMREVSX0tFWVNbdHlwZV0gPSBvcHRzLmJ1aWxkZXI7XG4gIE5PREVfRklFTERTW3R5cGVdID0gb3B0cy5maWVsZHM7XG4gIEFMSUFTX0tFWVNbdHlwZV0gPSBvcHRzLmFsaWFzZXM7XG5cbiAgc3RvcmVbdHlwZV0gPSBvcHRzO1xufVxuXG52YXIgc3RvcmUgPSB7fTsiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuIiwidmFyIGJhc2VJc05hdGl2ZSA9IHJlcXVpcmUoJy4vX2Jhc2VJc05hdGl2ZScpLFxuICAgIGdldFZhbHVlID0gcmVxdWlyZSgnLi9fZ2V0VmFsdWUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXROYXRpdmU7XG4iLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciBJU19XUkFQID0gdHlwZSAmICRleHBvcnQuVztcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGtleSwgb3duLCBvdXQ7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKG93biAmJiBoYXMoZXhwb3J0cywga2V5KSkgY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbiAoQykge1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEMpIHtcbiAgICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDKCk7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmIChJU19QUk9UTykge1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmICh0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKSBoaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcbiIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyBtZXRhZGF0YS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FwIGFyZ3VtZW50cyBmb3IuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVW5hcnk7XG4iLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHByb2Nlc3NgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlUHJvY2VzcyA9IG1vZHVsZUV4cG9ydHMgJiYgZnJlZUdsb2JhbC5wcm9jZXNzO1xuXG4vKiogVXNlZCB0byBhY2Nlc3MgZmFzdGVyIE5vZGUuanMgaGVscGVycy4gKi9cbnZhciBub2RlVXRpbCA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICAvLyBVc2UgYHV0aWwudHlwZXNgIGZvciBOb2RlLmpzIDEwKy5cbiAgICB2YXIgdHlwZXMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUucmVxdWlyZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUoJ3V0aWwnKS50eXBlcztcblxuICAgIGlmICh0eXBlcykge1xuICAgICAgcmV0dXJuIHR5cGVzO1xuICAgIH1cblxuICAgIC8vIExlZ2FjeSBgcHJvY2Vzcy5iaW5kaW5nKCd1dGlsJylgIGZvciBOb2RlLmpzIDwgMTAuXG4gICAgcmV0dXJuIGZyZWVQcm9jZXNzICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcgJiYgZnJlZVByb2Nlc3MuYmluZGluZygndXRpbCcpO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBub2RlVXRpbDtcbiIsInZhciBsaXN0Q2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUNsZWFyJyksXG4gICAgbGlzdENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlRGVsZXRlJyksXG4gICAgbGlzdENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlR2V0JyksXG4gICAgbGlzdENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlSGFzJyksXG4gICAgbGlzdENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBsaXN0IGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTGlzdENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBMaXN0Q2FjaGU7XG4iLCJ2YXIgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzb2NJbmRleE9mO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUNyZWF0ZTtcbiIsInZhciBpc0tleWFibGUgPSByZXF1aXJlKCcuL19pc0tleWFibGUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE1hcERhdGE7XG4iLCJ2YXIgYXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19hc3NpZ25WYWx1ZScpLFxuICAgIGJhc2VBc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Jhc2VBc3NpZ25WYWx1ZScpO1xuXG4vKipcbiAqIENvcGllcyBwcm9wZXJ0aWVzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9wcyBUaGUgcHJvcGVydHkgaWRlbnRpZmllcnMgdG8gY29weS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0by5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvcGllZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5T2JqZWN0KHNvdXJjZSwgcHJvcHMsIG9iamVjdCwgY3VzdG9taXplcikge1xuICB2YXIgaXNOZXcgPSAhb2JqZWN0O1xuICBvYmplY3QgfHwgKG9iamVjdCA9IHt9KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF07XG5cbiAgICB2YXIgbmV3VmFsdWUgPSBjdXN0b21pemVyXG4gICAgICA/IGN1c3RvbWl6ZXIob2JqZWN0W2tleV0sIHNvdXJjZVtrZXldLCBrZXksIG9iamVjdCwgc291cmNlKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAobmV3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbmV3VmFsdWUgPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gICAgaWYgKGlzTmV3KSB7XG4gICAgICBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5T2JqZWN0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIE1FVEEgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZO1xudmFyICRmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciB3a3NEZWZpbmUgPSByZXF1aXJlKCcuL193a3MtZGVmaW5lJyk7XG52YXIgZW51bUtleXMgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIF9jcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZ09QTkV4dCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpO1xudmFyICRHT1BEID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKTtcbnZhciAkR09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgJERQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUEQgPSAkR09QRC5mO1xudmFyIGRQID0gJERQLmY7XG52YXIgZ09QTiA9IGdPUE5FeHQuZjtcbnZhciAkU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciAkSlNPTiA9IGdsb2JhbC5KU09OO1xudmFyIF9zdHJpbmdpZnkgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgSElEREVOID0gd2tzKCdfaGlkZGVuJyk7XG52YXIgVE9fUFJJTUlUSVZFID0gd2tzKCd0b1ByaW1pdGl2ZScpO1xudmFyIGlzRW51bSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKTtcbnZhciBBbGxTeW1ib2xzID0gc2hhcmVkKCdzeW1ib2xzJyk7XG52YXIgT1BTeW1ib2xzID0gc2hhcmVkKCdvcC1zeW1ib2xzJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3RbUFJPVE9UWVBFXTtcbnZhciBVU0VfTkFUSVZFID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJyAmJiAhISRHT1BTLmY7XG52YXIgUU9iamVjdCA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRQKHRoaXMsICdhJywgeyB2YWx1ZTogNyB9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uIChpdCwga2V5LCBEKSB7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZiAocHJvdG9EZXNjKSBkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmIChwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKSBkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpIHtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90bykgJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpKSB7XG4gICAgaWYgKCFELmVudW1lcmFibGUpIHtcbiAgICAgIGlmICghaGFzKGl0LCBISURERU4pKSBkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkgaXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7IGVudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpIH0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApIHtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsID0ga2V5cy5sZW5ndGg7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsID4gaSkgJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCkge1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkge1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgaXQgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYgKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSkgRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICB2YXIgbmFtZXMgPSBnT1BOKHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgdmFyIElTX09QID0gaXQgPT09IE9iamVjdFByb3RvO1xuICB2YXIgbmFtZXMgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmIChoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpIHJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKSB0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvKSAkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZiAoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSkgdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZiAoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKSBzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXQgfSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gICRHT1BTLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmIChERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKSB7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBTeW1ib2w6ICRTeW1ib2wgfSk7XG5cbmZvciAodmFyIGVzNlN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaiA9IDA7IGVzNlN5bWJvbHMubGVuZ3RoID4gajspd2tzKGVzNlN5bWJvbHNbaisrXSk7XG5cbmZvciAodmFyIHdlbGxLbm93blN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBrID0gMDsgd2VsbEtub3duU3ltYm9scy5sZW5ndGggPiBrOykgd2tzRGVmaW5lKHdlbGxLbm93blN5bWJvbHNbaysrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioc3ltKSB7XG4gICAgaWYgKCFpc1N5bWJvbChzeW0pKSB0aHJvdyBUeXBlRXJyb3Ioc3ltICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gICAgZm9yICh2YXIga2V5IGluIFN5bWJvbFJlZ2lzdHJ5KSBpZiAoU3ltYm9sUmVnaXN0cnlba2V5XSA9PT0gc3ltKSByZXR1cm4ga2V5O1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIENocm9tZSAzOCBhbmQgMzkgYE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHNgIGZhaWxzIG9uIHByaW1pdGl2ZXNcbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTM0NDNcbnZhciBGQUlMU19PTl9QUklNSVRJVkVTID0gJGZhaWxzKGZ1bmN0aW9uICgpIHsgJEdPUFMuZigxKTsgfSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogRkFJTFNfT05fUFJJTUlUSVZFUywgJ09iamVjdCcsIHtcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgICByZXR1cm4gJEdPUFMuZih0b09iamVjdChpdCkpO1xuICB9XG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7IGE6IFMgfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7XG4gICAgdmFyIGFyZ3MgPSBbaXRdO1xuICAgIHZhciBpID0gMTtcbiAgICB2YXIgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgJHJlcGxhY2VyID0gcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmICghaXNPYmplY3QocmVwbGFjZXIpICYmIGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICBpZiAoIWlzQXJyYXkocmVwbGFjZXIpKSByZXBsYWNlciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mICRyZXBsYWNlciA9PSAnZnVuY3Rpb24nKSB2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG4iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246IGNvcmUudmVyc2lvbixcbiAgbW9kZTogcmVxdWlyZSgnLi9fbGlicmFyeScpID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTkgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcbiIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuIiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmIChuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKSBkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7IHZhbHVlOiB3a3NFeHQuZihuYW1lKSB9KTtcbn07XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG4iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG4iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcbiIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5OT1RfTE9DQUxfQklORElORyA9IGV4cG9ydHMuQkxPQ0tfU0NPUEVEX1NZTUJPTCA9IGV4cG9ydHMuSU5IRVJJVF9LRVlTID0gZXhwb3J0cy5VTkFSWV9PUEVSQVRPUlMgPSBleHBvcnRzLlNUUklOR19VTkFSWV9PUEVSQVRPUlMgPSBleHBvcnRzLk5VTUJFUl9VTkFSWV9PUEVSQVRPUlMgPSBleHBvcnRzLkJPT0xFQU5fVU5BUllfT1BFUkFUT1JTID0gZXhwb3J0cy5CSU5BUllfT1BFUkFUT1JTID0gZXhwb3J0cy5OVU1CRVJfQklOQVJZX09QRVJBVE9SUyA9IGV4cG9ydHMuQk9PTEVBTl9CSU5BUllfT1BFUkFUT1JTID0gZXhwb3J0cy5DT01QQVJJU09OX0JJTkFSWV9PUEVSQVRPUlMgPSBleHBvcnRzLkVRVUFMSVRZX0JJTkFSWV9PUEVSQVRPUlMgPSBleHBvcnRzLkJPT0xFQU5fTlVNQkVSX0JJTkFSWV9PUEVSQVRPUlMgPSBleHBvcnRzLlVQREFURV9PUEVSQVRPUlMgPSBleHBvcnRzLkxPR0lDQUxfT1BFUkFUT1JTID0gZXhwb3J0cy5DT01NRU5UX0tFWVMgPSBleHBvcnRzLkZPUl9JTklUX0tFWVMgPSBleHBvcnRzLkZMQVRURU5BQkxFX0tFWVMgPSBleHBvcnRzLlNUQVRFTUVOVF9PUl9CTE9DS19LRVlTID0gdW5kZWZpbmVkO1xuXG52YXIgX2ZvciA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2ZvclwiKTtcblxudmFyIF9mb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZm9yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFNUQVRFTUVOVF9PUl9CTE9DS19LRVlTID0gZXhwb3J0cy5TVEFURU1FTlRfT1JfQkxPQ0tfS0VZUyA9IFtcImNvbnNlcXVlbnRcIiwgXCJib2R5XCIsIFwiYWx0ZXJuYXRlXCJdO1xudmFyIEZMQVRURU5BQkxFX0tFWVMgPSBleHBvcnRzLkZMQVRURU5BQkxFX0tFWVMgPSBbXCJib2R5XCIsIFwiZXhwcmVzc2lvbnNcIl07XG52YXIgRk9SX0lOSVRfS0VZUyA9IGV4cG9ydHMuRk9SX0lOSVRfS0VZUyA9IFtcImxlZnRcIiwgXCJpbml0XCJdO1xudmFyIENPTU1FTlRfS0VZUyA9IGV4cG9ydHMuQ09NTUVOVF9LRVlTID0gW1wibGVhZGluZ0NvbW1lbnRzXCIsIFwidHJhaWxpbmdDb21tZW50c1wiLCBcImlubmVyQ29tbWVudHNcIl07XG5cbnZhciBMT0dJQ0FMX09QRVJBVE9SUyA9IGV4cG9ydHMuTE9HSUNBTF9PUEVSQVRPUlMgPSBbXCJ8fFwiLCBcIiYmXCJdO1xudmFyIFVQREFURV9PUEVSQVRPUlMgPSBleHBvcnRzLlVQREFURV9PUEVSQVRPUlMgPSBbXCIrK1wiLCBcIi0tXCJdO1xuXG52YXIgQk9PTEVBTl9OVU1CRVJfQklOQVJZX09QRVJBVE9SUyA9IGV4cG9ydHMuQk9PTEVBTl9OVU1CRVJfQklOQVJZX09QRVJBVE9SUyA9IFtcIj5cIiwgXCI8XCIsIFwiPj1cIiwgXCI8PVwiXTtcbnZhciBFUVVBTElUWV9CSU5BUllfT1BFUkFUT1JTID0gZXhwb3J0cy5FUVVBTElUWV9CSU5BUllfT1BFUkFUT1JTID0gW1wiPT1cIiwgXCI9PT1cIiwgXCIhPVwiLCBcIiE9PVwiXTtcbnZhciBDT01QQVJJU09OX0JJTkFSWV9PUEVSQVRPUlMgPSBleHBvcnRzLkNPTVBBUklTT05fQklOQVJZX09QRVJBVE9SUyA9IFtdLmNvbmNhdChFUVVBTElUWV9CSU5BUllfT1BFUkFUT1JTLCBbXCJpblwiLCBcImluc3RhbmNlb2ZcIl0pO1xudmFyIEJPT0xFQU5fQklOQVJZX09QRVJBVE9SUyA9IGV4cG9ydHMuQk9PTEVBTl9CSU5BUllfT1BFUkFUT1JTID0gW10uY29uY2F0KENPTVBBUklTT05fQklOQVJZX09QRVJBVE9SUywgQk9PTEVBTl9OVU1CRVJfQklOQVJZX09QRVJBVE9SUyk7XG52YXIgTlVNQkVSX0JJTkFSWV9PUEVSQVRPUlMgPSBleHBvcnRzLk5VTUJFUl9CSU5BUllfT1BFUkFUT1JTID0gW1wiLVwiLCBcIi9cIiwgXCIlXCIsIFwiKlwiLCBcIioqXCIsIFwiJlwiLCBcInxcIiwgXCI+PlwiLCBcIj4+PlwiLCBcIjw8XCIsIFwiXlwiXTtcbnZhciBCSU5BUllfT1BFUkFUT1JTID0gZXhwb3J0cy5CSU5BUllfT1BFUkFUT1JTID0gW1wiK1wiXS5jb25jYXQoTlVNQkVSX0JJTkFSWV9PUEVSQVRPUlMsIEJPT0xFQU5fQklOQVJZX09QRVJBVE9SUyk7XG5cbnZhciBCT09MRUFOX1VOQVJZX09QRVJBVE9SUyA9IGV4cG9ydHMuQk9PTEVBTl9VTkFSWV9PUEVSQVRPUlMgPSBbXCJkZWxldGVcIiwgXCIhXCJdO1xudmFyIE5VTUJFUl9VTkFSWV9PUEVSQVRPUlMgPSBleHBvcnRzLk5VTUJFUl9VTkFSWV9PUEVSQVRPUlMgPSBbXCIrXCIsIFwiLVwiLCBcIisrXCIsIFwiLS1cIiwgXCJ+XCJdO1xudmFyIFNUUklOR19VTkFSWV9PUEVSQVRPUlMgPSBleHBvcnRzLlNUUklOR19VTkFSWV9PUEVSQVRPUlMgPSBbXCJ0eXBlb2ZcIl07XG52YXIgVU5BUllfT1BFUkFUT1JTID0gZXhwb3J0cy5VTkFSWV9PUEVSQVRPUlMgPSBbXCJ2b2lkXCJdLmNvbmNhdChCT09MRUFOX1VOQVJZX09QRVJBVE9SUywgTlVNQkVSX1VOQVJZX09QRVJBVE9SUywgU1RSSU5HX1VOQVJZX09QRVJBVE9SUyk7XG5cbnZhciBJTkhFUklUX0tFWVMgPSBleHBvcnRzLklOSEVSSVRfS0VZUyA9IHtcbiAgb3B0aW9uYWw6IFtcInR5cGVBbm5vdGF0aW9uXCIsIFwidHlwZVBhcmFtZXRlcnNcIiwgXCJyZXR1cm5UeXBlXCJdLFxuICBmb3JjZTogW1wic3RhcnRcIiwgXCJsb2NcIiwgXCJlbmRcIl1cbn07XG5cbnZhciBCTE9DS19TQ09QRURfU1lNQk9MID0gZXhwb3J0cy5CTE9DS19TQ09QRURfU1lNQk9MID0gKDAsIF9mb3IyLmRlZmF1bHQpKFwidmFyIHVzZWQgdG8gYmUgYmxvY2sgc2NvcGVkXCIpO1xudmFyIE5PVF9MT0NBTF9CSU5ESU5HID0gZXhwb3J0cy5OT1RfTE9DQUxfQklORElORyA9ICgwLCBfZm9yMi5kZWZhdWx0KShcInNob3VsZCBub3QgYmUgY29uc2lkZXJlZCBhIGxvY2FsIGJpbmRpbmdcIik7IiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcbiIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBnZXRQcm90b3R5cGUgPSBvdmVyQXJnKE9iamVjdC5nZXRQcm90b3R5cGVPZiwgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRQcm90b3R5cGU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwO1xuIiwidmFyIGFycmF5TGlrZUtleXMgPSByZXF1aXJlKCcuL19hcnJheUxpa2VLZXlzJyksXG4gICAgYmFzZUtleXMgPSByZXF1aXJlKCcuL19iYXNlS2V5cycpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLiBTZWUgdGhlXG4gKiBbRVMgc3BlY10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5cyhuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiBfLmtleXMoJ2hpJyk7XG4gKiAvLyA9PiBbJzAnLCAnMSddXG4gKi9cbmZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QpIDogYmFzZUtleXMob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1Byb3RvdHlwZTtcbiIsInZhciBhcnJheUZpbHRlciA9IHJlcXVpcmUoJy4vX2FycmF5RmlsdGVyJyksXG4gICAgc3R1YkFycmF5ID0gcmVxdWlyZSgnLi9zdHViQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUdldFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2Ygc3ltYm9scy5cbiAqL1xudmFyIGdldFN5bWJvbHMgPSAhbmF0aXZlR2V0U3ltYm9scyA/IHN0dWJBcnJheSA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIHJldHVybiBhcnJheUZpbHRlcihuYXRpdmVHZXRTeW1ib2xzKG9iamVjdCksIGZ1bmN0aW9uKHN5bWJvbCkge1xuICAgIHJldHVybiBwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG9iamVjdCwgc3ltYm9sKTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFN5bWJvbHM7XG4iLCJ2YXIgRGF0YVZpZXcgPSByZXF1aXJlKCcuL19EYXRhVmlldycpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIFByb21pc2UgPSByZXF1aXJlKCcuL19Qcm9taXNlJyksXG4gICAgU2V0ID0gcmVxdWlyZSgnLi9fU2V0JyksXG4gICAgV2Vha01hcCA9IHJlcXVpcmUoJy4vX1dlYWtNYXAnKSxcbiAgICBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKipcbiAqIEdldHMgdGhlIGB0b1N0cmluZ1RhZ2Agb2YgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG52YXIgZ2V0VGFnID0gYmFzZUdldFRhZztcblxuLy8gRmFsbGJhY2sgZm9yIGRhdGEgdmlld3MsIG1hcHMsIHNldHMsIGFuZCB3ZWFrIG1hcHMgaW4gSUUgMTEgYW5kIHByb21pc2VzIGluIE5vZGUuanMgPCA2LlxuaWYgKChEYXRhVmlldyAmJiBnZXRUYWcobmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigxKSkpICE9IGRhdGFWaWV3VGFnKSB8fFxuICAgIChNYXAgJiYgZ2V0VGFnKG5ldyBNYXApICE9IG1hcFRhZykgfHxcbiAgICAoUHJvbWlzZSAmJiBnZXRUYWcoUHJvbWlzZS5yZXNvbHZlKCkpICE9IHByb21pc2VUYWcpIHx8XG4gICAgKFNldCAmJiBnZXRUYWcobmV3IFNldCkgIT0gc2V0VGFnKSB8fFxuICAgIChXZWFrTWFwICYmIGdldFRhZyhuZXcgV2Vha01hcCkgIT0gd2Vha01hcFRhZykpIHtcbiAgZ2V0VGFnID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gYmFzZUdldFRhZyh2YWx1ZSksXG4gICAgICAgIEN0b3IgPSByZXN1bHQgPT0gb2JqZWN0VGFnID8gdmFsdWUuY29uc3RydWN0b3IgOiB1bmRlZmluZWQsXG4gICAgICAgIGN0b3JTdHJpbmcgPSBDdG9yID8gdG9Tb3VyY2UoQ3RvcikgOiAnJztcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYWc7XG4iLCJ2YXIgVWludDhBcnJheSA9IHJlcXVpcmUoJy4vX1VpbnQ4QXJyYXknKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYGFycmF5QnVmZmVyYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYXJyYXlCdWZmZXIgVGhlIGFycmF5IGJ1ZmZlciB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtBcnJheUJ1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGFycmF5IGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVBcnJheUJ1ZmZlcihhcnJheUJ1ZmZlcikge1xuICB2YXIgcmVzdWx0ID0gbmV3IGFycmF5QnVmZmVyLmNvbnN0cnVjdG9yKGFycmF5QnVmZmVyLmJ5dGVMZW5ndGgpO1xuICBuZXcgVWludDhBcnJheShyZXN1bHQpLnNldChuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcikpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lQXJyYXlCdWZmZXI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG52YXIgRE9NSXRlcmFibGVzID0gKCdDU1NSdWxlTGlzdCxDU1NTdHlsZURlY2xhcmF0aW9uLENTU1ZhbHVlTGlzdCxDbGllbnRSZWN0TGlzdCxET01SZWN0TGlzdCxET01TdHJpbmdMaXN0LCcgK1xuICAnRE9NVG9rZW5MaXN0LERhdGFUcmFuc2Zlckl0ZW1MaXN0LEZpbGVMaXN0LEhUTUxBbGxDb2xsZWN0aW9uLEhUTUxDb2xsZWN0aW9uLEhUTUxGb3JtRWxlbWVudCxIVE1MU2VsZWN0RWxlbWVudCwnICtcbiAgJ01lZGlhTGlzdCxNaW1lVHlwZUFycmF5LE5hbWVkTm9kZU1hcCxOb2RlTGlzdCxQYWludFJlcXVlc3RMaXN0LFBsdWdpbixQbHVnaW5BcnJheSxTVkdMZW5ndGhMaXN0LFNWR051bWJlckxpc3QsJyArXG4gICdTVkdQYXRoU2VnTGlzdCxTVkdQb2ludExpc3QsU1ZHU3RyaW5nTGlzdCxTVkdUcmFuc2Zvcm1MaXN0LFNvdXJjZUJ1ZmZlckxpc3QsU3R5bGVTaGVldExpc3QsVGV4dFRyYWNrQ3VlTGlzdCwnICtcbiAgJ1RleHRUcmFja0xpc3QsVG91Y2hMaXN0Jykuc3BsaXQoJywnKTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCBET01JdGVyYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBET01JdGVyYWJsZXNbaV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZiAocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiB0eXBlb2YgSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdICE9ICdmdW5jdGlvbicpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfY3JlYXRlID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlXCIpO1xuXG52YXIgX2NyZWF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGUpO1xuXG5leHBvcnRzLmdldEJpbmRpbmdJZGVudGlmaWVycyA9IGdldEJpbmRpbmdJZGVudGlmaWVycztcbmV4cG9ydHMuZ2V0T3V0ZXJCaW5kaW5nSWRlbnRpZmllcnMgPSBnZXRPdXRlckJpbmRpbmdJZGVudGlmaWVycztcblxudmFyIF9pbmRleCA9IHJlcXVpcmUoXCIuL2luZGV4XCIpO1xuXG52YXIgdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9pbmRleCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldEJpbmRpbmdJZGVudGlmaWVycyhub2RlLCBkdXBsaWNhdGVzLCBvdXRlck9ubHkpIHtcbiAgdmFyIHNlYXJjaCA9IFtdLmNvbmNhdChub2RlKTtcbiAgdmFyIGlkcyA9ICgwLCBfY3JlYXRlMi5kZWZhdWx0KShudWxsKTtcblxuICB3aGlsZSAoc2VhcmNoLmxlbmd0aCkge1xuICAgIHZhciBpZCA9IHNlYXJjaC5zaGlmdCgpO1xuICAgIGlmICghaWQpIGNvbnRpbnVlO1xuXG4gICAgdmFyIGtleXMgPSB0LmdldEJpbmRpbmdJZGVudGlmaWVycy5rZXlzW2lkLnR5cGVdO1xuXG4gICAgaWYgKHQuaXNJZGVudGlmaWVyKGlkKSkge1xuICAgICAgaWYgKGR1cGxpY2F0ZXMpIHtcbiAgICAgICAgdmFyIF9pZHMgPSBpZHNbaWQubmFtZV0gPSBpZHNbaWQubmFtZV0gfHwgW107XG4gICAgICAgIF9pZHMucHVzaChpZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZHNbaWQubmFtZV0gPSBpZDtcbiAgICAgIH1cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICh0LmlzRXhwb3J0RGVjbGFyYXRpb24oaWQpKSB7XG4gICAgICBpZiAodC5pc0RlY2xhcmF0aW9uKGlkLmRlY2xhcmF0aW9uKSkge1xuICAgICAgICBzZWFyY2gucHVzaChpZC5kZWNsYXJhdGlvbik7XG4gICAgICB9XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAob3V0ZXJPbmx5KSB7XG4gICAgICBpZiAodC5pc0Z1bmN0aW9uRGVjbGFyYXRpb24oaWQpKSB7XG4gICAgICAgIHNlYXJjaC5wdXNoKGlkLmlkKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0LmlzRnVuY3Rpb25FeHByZXNzaW9uKGlkKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoa2V5cykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICBpZiAoaWRba2V5XSkge1xuICAgICAgICAgIHNlYXJjaCA9IHNlYXJjaC5jb25jYXQoaWRba2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gaWRzO1xufVxuXG5nZXRCaW5kaW5nSWRlbnRpZmllcnMua2V5cyA9IHtcbiAgRGVjbGFyZUNsYXNzOiBbXCJpZFwiXSxcbiAgRGVjbGFyZUZ1bmN0aW9uOiBbXCJpZFwiXSxcbiAgRGVjbGFyZU1vZHVsZTogW1wiaWRcIl0sXG4gIERlY2xhcmVWYXJpYWJsZTogW1wiaWRcIl0sXG4gIEludGVyZmFjZURlY2xhcmF0aW9uOiBbXCJpZFwiXSxcbiAgVHlwZUFsaWFzOiBbXCJpZFwiXSxcbiAgT3BhcXVlVHlwZTogW1wiaWRcIl0sXG5cbiAgQ2F0Y2hDbGF1c2U6IFtcInBhcmFtXCJdLFxuICBMYWJlbGVkU3RhdGVtZW50OiBbXCJsYWJlbFwiXSxcbiAgVW5hcnlFeHByZXNzaW9uOiBbXCJhcmd1bWVudFwiXSxcbiAgQXNzaWdubWVudEV4cHJlc3Npb246IFtcImxlZnRcIl0sXG5cbiAgSW1wb3J0U3BlY2lmaWVyOiBbXCJsb2NhbFwiXSxcbiAgSW1wb3J0TmFtZXNwYWNlU3BlY2lmaWVyOiBbXCJsb2NhbFwiXSxcbiAgSW1wb3J0RGVmYXVsdFNwZWNpZmllcjogW1wibG9jYWxcIl0sXG4gIEltcG9ydERlY2xhcmF0aW9uOiBbXCJzcGVjaWZpZXJzXCJdLFxuXG4gIEV4cG9ydFNwZWNpZmllcjogW1wiZXhwb3J0ZWRcIl0sXG4gIEV4cG9ydE5hbWVzcGFjZVNwZWNpZmllcjogW1wiZXhwb3J0ZWRcIl0sXG4gIEV4cG9ydERlZmF1bHRTcGVjaWZpZXI6IFtcImV4cG9ydGVkXCJdLFxuXG4gIEZ1bmN0aW9uRGVjbGFyYXRpb246IFtcImlkXCIsIFwicGFyYW1zXCJdLFxuICBGdW5jdGlvbkV4cHJlc3Npb246IFtcImlkXCIsIFwicGFyYW1zXCJdLFxuXG4gIENsYXNzRGVjbGFyYXRpb246IFtcImlkXCJdLFxuICBDbGFzc0V4cHJlc3Npb246IFtcImlkXCJdLFxuXG4gIFJlc3RFbGVtZW50OiBbXCJhcmd1bWVudFwiXSxcbiAgVXBkYXRlRXhwcmVzc2lvbjogW1wiYXJndW1lbnRcIl0sXG5cbiAgUmVzdFByb3BlcnR5OiBbXCJhcmd1bWVudFwiXSxcbiAgT2JqZWN0UHJvcGVydHk6IFtcInZhbHVlXCJdLFxuXG4gIEFzc2lnbm1lbnRQYXR0ZXJuOiBbXCJsZWZ0XCJdLFxuICBBcnJheVBhdHRlcm46IFtcImVsZW1lbnRzXCJdLFxuICBPYmplY3RQYXR0ZXJuOiBbXCJwcm9wZXJ0aWVzXCJdLFxuXG4gIFZhcmlhYmxlRGVjbGFyYXRpb246IFtcImRlY2xhcmF0aW9uc1wiXSxcbiAgVmFyaWFibGVEZWNsYXJhdG9yOiBbXCJpZFwiXVxufTtcblxuZnVuY3Rpb24gZ2V0T3V0ZXJCaW5kaW5nSWRlbnRpZmllcnMobm9kZSwgZHVwbGljYXRlcykge1xuICByZXR1cm4gZ2V0QmluZGluZ0lkZW50aWZpZXJzKG5vZGUsIGR1cGxpY2F0ZXMsIHRydWUpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2l0ZXJhdG9yID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yXCIpO1xuXG52YXIgX2l0ZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2l0ZXJhdG9yKTtcblxudmFyIF9zeW1ib2wgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2xcIik7XG5cbnZhciBfc3ltYm9sMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N5bWJvbCk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgX2l0ZXJhdG9yMi5kZWZhdWx0ID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZihfaXRlcmF0b3IyLmRlZmF1bHQpID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59IDogZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59OyIsIi8qXG4gIENvcHlyaWdodCAoQykgMjAxMy0yMDE0IFl1c3VrZSBTdXp1a2kgPHV0YXRhbmUudGVhQGdtYWlsLmNvbT5cbiAgQ29weXJpZ2h0IChDKSAyMDE0IEl2YW4gTmlrdWxpbiA8aWZhYWFuQGdtYWlsLmNvbT5cblxuICBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiAgbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG5cbiAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4gICAgICBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodFxuICAgICAgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZVxuICAgICAgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cblxuICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxuICBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFXG4gIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4gIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCA8Q09QWVJJR0hUIEhPTERFUj4gQkUgTElBQkxFIEZPUiBBTllcbiAgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVNcbiAgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTO1xuICBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkRcbiAgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbiAgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GXG4gIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4qL1xuXG4oZnVuY3Rpb24gKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBFUzZSZWdleCwgRVM1UmVnZXgsIE5PTl9BU0NJSV9XSElURVNQQUNFUywgSURFTlRJRklFUl9TVEFSVCwgSURFTlRJRklFUl9QQVJULCBjaDtcblxuICAgIC8vIFNlZSBgdG9vbHMvZ2VuZXJhdGUtaWRlbnRpZmllci1yZWdleC5qc2AuXG4gICAgRVM1UmVnZXggPSB7XG4gICAgICAgIC8vIEVDTUFTY3JpcHQgNS4xL1VuaWNvZGUgdjcuMC4wIE5vbkFzY2lpSWRlbnRpZmllclN0YXJ0OlxuICAgICAgICBOb25Bc2NpaUlkZW50aWZpZXJTdGFydDogL1tcXHhBQVxceEI1XFx4QkFcXHhDMC1cXHhENlxceEQ4LVxceEY2XFx4RjgtXFx1MDJDMVxcdTAyQzYtXFx1MDJEMVxcdTAyRTAtXFx1MDJFNFxcdTAyRUNcXHUwMkVFXFx1MDM3MC1cXHUwMzc0XFx1MDM3NlxcdTAzNzdcXHUwMzdBLVxcdTAzN0RcXHUwMzdGXFx1MDM4NlxcdTAzODgtXFx1MDM4QVxcdTAzOENcXHUwMzhFLVxcdTAzQTFcXHUwM0EzLVxcdTAzRjVcXHUwM0Y3LVxcdTA0ODFcXHUwNDhBLVxcdTA1MkZcXHUwNTMxLVxcdTA1NTZcXHUwNTU5XFx1MDU2MS1cXHUwNTg3XFx1MDVEMC1cXHUwNUVBXFx1MDVGMC1cXHUwNUYyXFx1MDYyMC1cXHUwNjRBXFx1MDY2RVxcdTA2NkZcXHUwNjcxLVxcdTA2RDNcXHUwNkQ1XFx1MDZFNVxcdTA2RTZcXHUwNkVFXFx1MDZFRlxcdTA2RkEtXFx1MDZGQ1xcdTA2RkZcXHUwNzEwXFx1MDcxMi1cXHUwNzJGXFx1MDc0RC1cXHUwN0E1XFx1MDdCMVxcdTA3Q0EtXFx1MDdFQVxcdTA3RjRcXHUwN0Y1XFx1MDdGQVxcdTA4MDAtXFx1MDgxNVxcdTA4MUFcXHUwODI0XFx1MDgyOFxcdTA4NDAtXFx1MDg1OFxcdTA4QTAtXFx1MDhCMlxcdTA5MDQtXFx1MDkzOVxcdTA5M0RcXHUwOTUwXFx1MDk1OC1cXHUwOTYxXFx1MDk3MS1cXHUwOTgwXFx1MDk4NS1cXHUwOThDXFx1MDk4RlxcdTA5OTBcXHUwOTkzLVxcdTA5QThcXHUwOUFBLVxcdTA5QjBcXHUwOUIyXFx1MDlCNi1cXHUwOUI5XFx1MDlCRFxcdTA5Q0VcXHUwOURDXFx1MDlERFxcdTA5REYtXFx1MDlFMVxcdTA5RjBcXHUwOUYxXFx1MEEwNS1cXHUwQTBBXFx1MEEwRlxcdTBBMTBcXHUwQTEzLVxcdTBBMjhcXHUwQTJBLVxcdTBBMzBcXHUwQTMyXFx1MEEzM1xcdTBBMzVcXHUwQTM2XFx1MEEzOFxcdTBBMzlcXHUwQTU5LVxcdTBBNUNcXHUwQTVFXFx1MEE3Mi1cXHUwQTc0XFx1MEE4NS1cXHUwQThEXFx1MEE4Ri1cXHUwQTkxXFx1MEE5My1cXHUwQUE4XFx1MEFBQS1cXHUwQUIwXFx1MEFCMlxcdTBBQjNcXHUwQUI1LVxcdTBBQjlcXHUwQUJEXFx1MEFEMFxcdTBBRTBcXHUwQUUxXFx1MEIwNS1cXHUwQjBDXFx1MEIwRlxcdTBCMTBcXHUwQjEzLVxcdTBCMjhcXHUwQjJBLVxcdTBCMzBcXHUwQjMyXFx1MEIzM1xcdTBCMzUtXFx1MEIzOVxcdTBCM0RcXHUwQjVDXFx1MEI1RFxcdTBCNUYtXFx1MEI2MVxcdTBCNzFcXHUwQjgzXFx1MEI4NS1cXHUwQjhBXFx1MEI4RS1cXHUwQjkwXFx1MEI5Mi1cXHUwQjk1XFx1MEI5OVxcdTBCOUFcXHUwQjlDXFx1MEI5RVxcdTBCOUZcXHUwQkEzXFx1MEJBNFxcdTBCQTgtXFx1MEJBQVxcdTBCQUUtXFx1MEJCOVxcdTBCRDBcXHUwQzA1LVxcdTBDMENcXHUwQzBFLVxcdTBDMTBcXHUwQzEyLVxcdTBDMjhcXHUwQzJBLVxcdTBDMzlcXHUwQzNEXFx1MEM1OFxcdTBDNTlcXHUwQzYwXFx1MEM2MVxcdTBDODUtXFx1MEM4Q1xcdTBDOEUtXFx1MEM5MFxcdTBDOTItXFx1MENBOFxcdTBDQUEtXFx1MENCM1xcdTBDQjUtXFx1MENCOVxcdTBDQkRcXHUwQ0RFXFx1MENFMFxcdTBDRTFcXHUwQ0YxXFx1MENGMlxcdTBEMDUtXFx1MEQwQ1xcdTBEMEUtXFx1MEQxMFxcdTBEMTItXFx1MEQzQVxcdTBEM0RcXHUwRDRFXFx1MEQ2MFxcdTBENjFcXHUwRDdBLVxcdTBEN0ZcXHUwRDg1LVxcdTBEOTZcXHUwRDlBLVxcdTBEQjFcXHUwREIzLVxcdTBEQkJcXHUwREJEXFx1MERDMC1cXHUwREM2XFx1MEUwMS1cXHUwRTMwXFx1MEUzMlxcdTBFMzNcXHUwRTQwLVxcdTBFNDZcXHUwRTgxXFx1MEU4MlxcdTBFODRcXHUwRTg3XFx1MEU4OFxcdTBFOEFcXHUwRThEXFx1MEU5NC1cXHUwRTk3XFx1MEU5OS1cXHUwRTlGXFx1MEVBMS1cXHUwRUEzXFx1MEVBNVxcdTBFQTdcXHUwRUFBXFx1MEVBQlxcdTBFQUQtXFx1MEVCMFxcdTBFQjJcXHUwRUIzXFx1MEVCRFxcdTBFQzAtXFx1MEVDNFxcdTBFQzZcXHUwRURDLVxcdTBFREZcXHUwRjAwXFx1MEY0MC1cXHUwRjQ3XFx1MEY0OS1cXHUwRjZDXFx1MEY4OC1cXHUwRjhDXFx1MTAwMC1cXHUxMDJBXFx1MTAzRlxcdTEwNTAtXFx1MTA1NVxcdTEwNUEtXFx1MTA1RFxcdTEwNjFcXHUxMDY1XFx1MTA2NlxcdTEwNkUtXFx1MTA3MFxcdTEwNzUtXFx1MTA4MVxcdTEwOEVcXHUxMEEwLVxcdTEwQzVcXHUxMEM3XFx1MTBDRFxcdTEwRDAtXFx1MTBGQVxcdTEwRkMtXFx1MTI0OFxcdTEyNEEtXFx1MTI0RFxcdTEyNTAtXFx1MTI1NlxcdTEyNThcXHUxMjVBLVxcdTEyNURcXHUxMjYwLVxcdTEyODhcXHUxMjhBLVxcdTEyOERcXHUxMjkwLVxcdTEyQjBcXHUxMkIyLVxcdTEyQjVcXHUxMkI4LVxcdTEyQkVcXHUxMkMwXFx1MTJDMi1cXHUxMkM1XFx1MTJDOC1cXHUxMkQ2XFx1MTJEOC1cXHUxMzEwXFx1MTMxMi1cXHUxMzE1XFx1MTMxOC1cXHUxMzVBXFx1MTM4MC1cXHUxMzhGXFx1MTNBMC1cXHUxM0Y0XFx1MTQwMS1cXHUxNjZDXFx1MTY2Ri1cXHUxNjdGXFx1MTY4MS1cXHUxNjlBXFx1MTZBMC1cXHUxNkVBXFx1MTZFRS1cXHUxNkY4XFx1MTcwMC1cXHUxNzBDXFx1MTcwRS1cXHUxNzExXFx1MTcyMC1cXHUxNzMxXFx1MTc0MC1cXHUxNzUxXFx1MTc2MC1cXHUxNzZDXFx1MTc2RS1cXHUxNzcwXFx1MTc4MC1cXHUxN0IzXFx1MTdEN1xcdTE3RENcXHUxODIwLVxcdTE4NzdcXHUxODgwLVxcdTE4QThcXHUxOEFBXFx1MThCMC1cXHUxOEY1XFx1MTkwMC1cXHUxOTFFXFx1MTk1MC1cXHUxOTZEXFx1MTk3MC1cXHUxOTc0XFx1MTk4MC1cXHUxOUFCXFx1MTlDMS1cXHUxOUM3XFx1MUEwMC1cXHUxQTE2XFx1MUEyMC1cXHUxQTU0XFx1MUFBN1xcdTFCMDUtXFx1MUIzM1xcdTFCNDUtXFx1MUI0QlxcdTFCODMtXFx1MUJBMFxcdTFCQUVcXHUxQkFGXFx1MUJCQS1cXHUxQkU1XFx1MUMwMC1cXHUxQzIzXFx1MUM0RC1cXHUxQzRGXFx1MUM1QS1cXHUxQzdEXFx1MUNFOS1cXHUxQ0VDXFx1MUNFRS1cXHUxQ0YxXFx1MUNGNVxcdTFDRjZcXHUxRDAwLVxcdTFEQkZcXHUxRTAwLVxcdTFGMTVcXHUxRjE4LVxcdTFGMURcXHUxRjIwLVxcdTFGNDVcXHUxRjQ4LVxcdTFGNERcXHUxRjUwLVxcdTFGNTdcXHUxRjU5XFx1MUY1QlxcdTFGNURcXHUxRjVGLVxcdTFGN0RcXHUxRjgwLVxcdTFGQjRcXHUxRkI2LVxcdTFGQkNcXHUxRkJFXFx1MUZDMi1cXHUxRkM0XFx1MUZDNi1cXHUxRkNDXFx1MUZEMC1cXHUxRkQzXFx1MUZENi1cXHUxRkRCXFx1MUZFMC1cXHUxRkVDXFx1MUZGMi1cXHUxRkY0XFx1MUZGNi1cXHUxRkZDXFx1MjA3MVxcdTIwN0ZcXHUyMDkwLVxcdTIwOUNcXHUyMTAyXFx1MjEwN1xcdTIxMEEtXFx1MjExM1xcdTIxMTVcXHUyMTE5LVxcdTIxMURcXHUyMTI0XFx1MjEyNlxcdTIxMjhcXHUyMTJBLVxcdTIxMkRcXHUyMTJGLVxcdTIxMzlcXHUyMTNDLVxcdTIxM0ZcXHUyMTQ1LVxcdTIxNDlcXHUyMTRFXFx1MjE2MC1cXHUyMTg4XFx1MkMwMC1cXHUyQzJFXFx1MkMzMC1cXHUyQzVFXFx1MkM2MC1cXHUyQ0U0XFx1MkNFQi1cXHUyQ0VFXFx1MkNGMlxcdTJDRjNcXHUyRDAwLVxcdTJEMjVcXHUyRDI3XFx1MkQyRFxcdTJEMzAtXFx1MkQ2N1xcdTJENkZcXHUyRDgwLVxcdTJEOTZcXHUyREEwLVxcdTJEQTZcXHUyREE4LVxcdTJEQUVcXHUyREIwLVxcdTJEQjZcXHUyREI4LVxcdTJEQkVcXHUyREMwLVxcdTJEQzZcXHUyREM4LVxcdTJEQ0VcXHUyREQwLVxcdTJERDZcXHUyREQ4LVxcdTJEREVcXHUyRTJGXFx1MzAwNS1cXHUzMDA3XFx1MzAyMS1cXHUzMDI5XFx1MzAzMS1cXHUzMDM1XFx1MzAzOC1cXHUzMDNDXFx1MzA0MS1cXHUzMDk2XFx1MzA5RC1cXHUzMDlGXFx1MzBBMS1cXHUzMEZBXFx1MzBGQy1cXHUzMEZGXFx1MzEwNS1cXHUzMTJEXFx1MzEzMS1cXHUzMThFXFx1MzFBMC1cXHUzMUJBXFx1MzFGMC1cXHUzMUZGXFx1MzQwMC1cXHU0REI1XFx1NEUwMC1cXHU5RkNDXFx1QTAwMC1cXHVBNDhDXFx1QTREMC1cXHVBNEZEXFx1QTUwMC1cXHVBNjBDXFx1QTYxMC1cXHVBNjFGXFx1QTYyQVxcdUE2MkJcXHVBNjQwLVxcdUE2NkVcXHVBNjdGLVxcdUE2OURcXHVBNkEwLVxcdUE2RUZcXHVBNzE3LVxcdUE3MUZcXHVBNzIyLVxcdUE3ODhcXHVBNzhCLVxcdUE3OEVcXHVBNzkwLVxcdUE3QURcXHVBN0IwXFx1QTdCMVxcdUE3RjctXFx1QTgwMVxcdUE4MDMtXFx1QTgwNVxcdUE4MDctXFx1QTgwQVxcdUE4MEMtXFx1QTgyMlxcdUE4NDAtXFx1QTg3M1xcdUE4ODItXFx1QThCM1xcdUE4RjItXFx1QThGN1xcdUE4RkJcXHVBOTBBLVxcdUE5MjVcXHVBOTMwLVxcdUE5NDZcXHVBOTYwLVxcdUE5N0NcXHVBOTg0LVxcdUE5QjJcXHVBOUNGXFx1QTlFMC1cXHVBOUU0XFx1QTlFNi1cXHVBOUVGXFx1QTlGQS1cXHVBOUZFXFx1QUEwMC1cXHVBQTI4XFx1QUE0MC1cXHVBQTQyXFx1QUE0NC1cXHVBQTRCXFx1QUE2MC1cXHVBQTc2XFx1QUE3QVxcdUFBN0UtXFx1QUFBRlxcdUFBQjFcXHVBQUI1XFx1QUFCNlxcdUFBQjktXFx1QUFCRFxcdUFBQzBcXHVBQUMyXFx1QUFEQi1cXHVBQUREXFx1QUFFMC1cXHVBQUVBXFx1QUFGMi1cXHVBQUY0XFx1QUIwMS1cXHVBQjA2XFx1QUIwOS1cXHVBQjBFXFx1QUIxMS1cXHVBQjE2XFx1QUIyMC1cXHVBQjI2XFx1QUIyOC1cXHVBQjJFXFx1QUIzMC1cXHVBQjVBXFx1QUI1Qy1cXHVBQjVGXFx1QUI2NFxcdUFCNjVcXHVBQkMwLVxcdUFCRTJcXHVBQzAwLVxcdUQ3QTNcXHVEN0IwLVxcdUQ3QzZcXHVEN0NCLVxcdUQ3RkJcXHVGOTAwLVxcdUZBNkRcXHVGQTcwLVxcdUZBRDlcXHVGQjAwLVxcdUZCMDZcXHVGQjEzLVxcdUZCMTdcXHVGQjFEXFx1RkIxRi1cXHVGQjI4XFx1RkIyQS1cXHVGQjM2XFx1RkIzOC1cXHVGQjNDXFx1RkIzRVxcdUZCNDBcXHVGQjQxXFx1RkI0M1xcdUZCNDRcXHVGQjQ2LVxcdUZCQjFcXHVGQkQzLVxcdUZEM0RcXHVGRDUwLVxcdUZEOEZcXHVGRDkyLVxcdUZEQzdcXHVGREYwLVxcdUZERkJcXHVGRTcwLVxcdUZFNzRcXHVGRTc2LVxcdUZFRkNcXHVGRjIxLVxcdUZGM0FcXHVGRjQxLVxcdUZGNUFcXHVGRjY2LVxcdUZGQkVcXHVGRkMyLVxcdUZGQzdcXHVGRkNBLVxcdUZGQ0ZcXHVGRkQyLVxcdUZGRDdcXHVGRkRBLVxcdUZGRENdLyxcbiAgICAgICAgLy8gRUNNQVNjcmlwdCA1LjEvVW5pY29kZSB2Ny4wLjAgTm9uQXNjaWlJZGVudGlmaWVyUGFydDpcbiAgICAgICAgTm9uQXNjaWlJZGVudGlmaWVyUGFydDogL1tcXHhBQVxceEI1XFx4QkFcXHhDMC1cXHhENlxceEQ4LVxceEY2XFx4RjgtXFx1MDJDMVxcdTAyQzYtXFx1MDJEMVxcdTAyRTAtXFx1MDJFNFxcdTAyRUNcXHUwMkVFXFx1MDMwMC1cXHUwMzc0XFx1MDM3NlxcdTAzNzdcXHUwMzdBLVxcdTAzN0RcXHUwMzdGXFx1MDM4NlxcdTAzODgtXFx1MDM4QVxcdTAzOENcXHUwMzhFLVxcdTAzQTFcXHUwM0EzLVxcdTAzRjVcXHUwM0Y3LVxcdTA0ODFcXHUwNDgzLVxcdTA0ODdcXHUwNDhBLVxcdTA1MkZcXHUwNTMxLVxcdTA1NTZcXHUwNTU5XFx1MDU2MS1cXHUwNTg3XFx1MDU5MS1cXHUwNUJEXFx1MDVCRlxcdTA1QzFcXHUwNUMyXFx1MDVDNFxcdTA1QzVcXHUwNUM3XFx1MDVEMC1cXHUwNUVBXFx1MDVGMC1cXHUwNUYyXFx1MDYxMC1cXHUwNjFBXFx1MDYyMC1cXHUwNjY5XFx1MDY2RS1cXHUwNkQzXFx1MDZENS1cXHUwNkRDXFx1MDZERi1cXHUwNkU4XFx1MDZFQS1cXHUwNkZDXFx1MDZGRlxcdTA3MTAtXFx1MDc0QVxcdTA3NEQtXFx1MDdCMVxcdTA3QzAtXFx1MDdGNVxcdTA3RkFcXHUwODAwLVxcdTA4MkRcXHUwODQwLVxcdTA4NUJcXHUwOEEwLVxcdTA4QjJcXHUwOEU0LVxcdTA5NjNcXHUwOTY2LVxcdTA5NkZcXHUwOTcxLVxcdTA5ODNcXHUwOTg1LVxcdTA5OENcXHUwOThGXFx1MDk5MFxcdTA5OTMtXFx1MDlBOFxcdTA5QUEtXFx1MDlCMFxcdTA5QjJcXHUwOUI2LVxcdTA5QjlcXHUwOUJDLVxcdTA5QzRcXHUwOUM3XFx1MDlDOFxcdTA5Q0ItXFx1MDlDRVxcdTA5RDdcXHUwOURDXFx1MDlERFxcdTA5REYtXFx1MDlFM1xcdTA5RTYtXFx1MDlGMVxcdTBBMDEtXFx1MEEwM1xcdTBBMDUtXFx1MEEwQVxcdTBBMEZcXHUwQTEwXFx1MEExMy1cXHUwQTI4XFx1MEEyQS1cXHUwQTMwXFx1MEEzMlxcdTBBMzNcXHUwQTM1XFx1MEEzNlxcdTBBMzhcXHUwQTM5XFx1MEEzQ1xcdTBBM0UtXFx1MEE0MlxcdTBBNDdcXHUwQTQ4XFx1MEE0Qi1cXHUwQTREXFx1MEE1MVxcdTBBNTktXFx1MEE1Q1xcdTBBNUVcXHUwQTY2LVxcdTBBNzVcXHUwQTgxLVxcdTBBODNcXHUwQTg1LVxcdTBBOERcXHUwQThGLVxcdTBBOTFcXHUwQTkzLVxcdTBBQThcXHUwQUFBLVxcdTBBQjBcXHUwQUIyXFx1MEFCM1xcdTBBQjUtXFx1MEFCOVxcdTBBQkMtXFx1MEFDNVxcdTBBQzctXFx1MEFDOVxcdTBBQ0ItXFx1MEFDRFxcdTBBRDBcXHUwQUUwLVxcdTBBRTNcXHUwQUU2LVxcdTBBRUZcXHUwQjAxLVxcdTBCMDNcXHUwQjA1LVxcdTBCMENcXHUwQjBGXFx1MEIxMFxcdTBCMTMtXFx1MEIyOFxcdTBCMkEtXFx1MEIzMFxcdTBCMzJcXHUwQjMzXFx1MEIzNS1cXHUwQjM5XFx1MEIzQy1cXHUwQjQ0XFx1MEI0N1xcdTBCNDhcXHUwQjRCLVxcdTBCNERcXHUwQjU2XFx1MEI1N1xcdTBCNUNcXHUwQjVEXFx1MEI1Ri1cXHUwQjYzXFx1MEI2Ni1cXHUwQjZGXFx1MEI3MVxcdTBCODJcXHUwQjgzXFx1MEI4NS1cXHUwQjhBXFx1MEI4RS1cXHUwQjkwXFx1MEI5Mi1cXHUwQjk1XFx1MEI5OVxcdTBCOUFcXHUwQjlDXFx1MEI5RVxcdTBCOUZcXHUwQkEzXFx1MEJBNFxcdTBCQTgtXFx1MEJBQVxcdTBCQUUtXFx1MEJCOVxcdTBCQkUtXFx1MEJDMlxcdTBCQzYtXFx1MEJDOFxcdTBCQ0EtXFx1MEJDRFxcdTBCRDBcXHUwQkQ3XFx1MEJFNi1cXHUwQkVGXFx1MEMwMC1cXHUwQzAzXFx1MEMwNS1cXHUwQzBDXFx1MEMwRS1cXHUwQzEwXFx1MEMxMi1cXHUwQzI4XFx1MEMyQS1cXHUwQzM5XFx1MEMzRC1cXHUwQzQ0XFx1MEM0Ni1cXHUwQzQ4XFx1MEM0QS1cXHUwQzREXFx1MEM1NVxcdTBDNTZcXHUwQzU4XFx1MEM1OVxcdTBDNjAtXFx1MEM2M1xcdTBDNjYtXFx1MEM2RlxcdTBDODEtXFx1MEM4M1xcdTBDODUtXFx1MEM4Q1xcdTBDOEUtXFx1MEM5MFxcdTBDOTItXFx1MENBOFxcdTBDQUEtXFx1MENCM1xcdTBDQjUtXFx1MENCOVxcdTBDQkMtXFx1MENDNFxcdTBDQzYtXFx1MENDOFxcdTBDQ0EtXFx1MENDRFxcdTBDRDVcXHUwQ0Q2XFx1MENERVxcdTBDRTAtXFx1MENFM1xcdTBDRTYtXFx1MENFRlxcdTBDRjFcXHUwQ0YyXFx1MEQwMS1cXHUwRDAzXFx1MEQwNS1cXHUwRDBDXFx1MEQwRS1cXHUwRDEwXFx1MEQxMi1cXHUwRDNBXFx1MEQzRC1cXHUwRDQ0XFx1MEQ0Ni1cXHUwRDQ4XFx1MEQ0QS1cXHUwRDRFXFx1MEQ1N1xcdTBENjAtXFx1MEQ2M1xcdTBENjYtXFx1MEQ2RlxcdTBEN0EtXFx1MEQ3RlxcdTBEODJcXHUwRDgzXFx1MEQ4NS1cXHUwRDk2XFx1MEQ5QS1cXHUwREIxXFx1MERCMy1cXHUwREJCXFx1MERCRFxcdTBEQzAtXFx1MERDNlxcdTBEQ0FcXHUwRENGLVxcdTBERDRcXHUwREQ2XFx1MEREOC1cXHUwRERGXFx1MERFNi1cXHUwREVGXFx1MERGMlxcdTBERjNcXHUwRTAxLVxcdTBFM0FcXHUwRTQwLVxcdTBFNEVcXHUwRTUwLVxcdTBFNTlcXHUwRTgxXFx1MEU4MlxcdTBFODRcXHUwRTg3XFx1MEU4OFxcdTBFOEFcXHUwRThEXFx1MEU5NC1cXHUwRTk3XFx1MEU5OS1cXHUwRTlGXFx1MEVBMS1cXHUwRUEzXFx1MEVBNVxcdTBFQTdcXHUwRUFBXFx1MEVBQlxcdTBFQUQtXFx1MEVCOVxcdTBFQkItXFx1MEVCRFxcdTBFQzAtXFx1MEVDNFxcdTBFQzZcXHUwRUM4LVxcdTBFQ0RcXHUwRUQwLVxcdTBFRDlcXHUwRURDLVxcdTBFREZcXHUwRjAwXFx1MEYxOFxcdTBGMTlcXHUwRjIwLVxcdTBGMjlcXHUwRjM1XFx1MEYzN1xcdTBGMzlcXHUwRjNFLVxcdTBGNDdcXHUwRjQ5LVxcdTBGNkNcXHUwRjcxLVxcdTBGODRcXHUwRjg2LVxcdTBGOTdcXHUwRjk5LVxcdTBGQkNcXHUwRkM2XFx1MTAwMC1cXHUxMDQ5XFx1MTA1MC1cXHUxMDlEXFx1MTBBMC1cXHUxMEM1XFx1MTBDN1xcdTEwQ0RcXHUxMEQwLVxcdTEwRkFcXHUxMEZDLVxcdTEyNDhcXHUxMjRBLVxcdTEyNERcXHUxMjUwLVxcdTEyNTZcXHUxMjU4XFx1MTI1QS1cXHUxMjVEXFx1MTI2MC1cXHUxMjg4XFx1MTI4QS1cXHUxMjhEXFx1MTI5MC1cXHUxMkIwXFx1MTJCMi1cXHUxMkI1XFx1MTJCOC1cXHUxMkJFXFx1MTJDMFxcdTEyQzItXFx1MTJDNVxcdTEyQzgtXFx1MTJENlxcdTEyRDgtXFx1MTMxMFxcdTEzMTItXFx1MTMxNVxcdTEzMTgtXFx1MTM1QVxcdTEzNUQtXFx1MTM1RlxcdTEzODAtXFx1MTM4RlxcdTEzQTAtXFx1MTNGNFxcdTE0MDEtXFx1MTY2Q1xcdTE2NkYtXFx1MTY3RlxcdTE2ODEtXFx1MTY5QVxcdTE2QTAtXFx1MTZFQVxcdTE2RUUtXFx1MTZGOFxcdTE3MDAtXFx1MTcwQ1xcdTE3MEUtXFx1MTcxNFxcdTE3MjAtXFx1MTczNFxcdTE3NDAtXFx1MTc1M1xcdTE3NjAtXFx1MTc2Q1xcdTE3NkUtXFx1MTc3MFxcdTE3NzJcXHUxNzczXFx1MTc4MC1cXHUxN0QzXFx1MTdEN1xcdTE3RENcXHUxN0REXFx1MTdFMC1cXHUxN0U5XFx1MTgwQi1cXHUxODBEXFx1MTgxMC1cXHUxODE5XFx1MTgyMC1cXHUxODc3XFx1MTg4MC1cXHUxOEFBXFx1MThCMC1cXHUxOEY1XFx1MTkwMC1cXHUxOTFFXFx1MTkyMC1cXHUxOTJCXFx1MTkzMC1cXHUxOTNCXFx1MTk0Ni1cXHUxOTZEXFx1MTk3MC1cXHUxOTc0XFx1MTk4MC1cXHUxOUFCXFx1MTlCMC1cXHUxOUM5XFx1MTlEMC1cXHUxOUQ5XFx1MUEwMC1cXHUxQTFCXFx1MUEyMC1cXHUxQTVFXFx1MUE2MC1cXHUxQTdDXFx1MUE3Ri1cXHUxQTg5XFx1MUE5MC1cXHUxQTk5XFx1MUFBN1xcdTFBQjAtXFx1MUFCRFxcdTFCMDAtXFx1MUI0QlxcdTFCNTAtXFx1MUI1OVxcdTFCNkItXFx1MUI3M1xcdTFCODAtXFx1MUJGM1xcdTFDMDAtXFx1MUMzN1xcdTFDNDAtXFx1MUM0OVxcdTFDNEQtXFx1MUM3RFxcdTFDRDAtXFx1MUNEMlxcdTFDRDQtXFx1MUNGNlxcdTFDRjhcXHUxQ0Y5XFx1MUQwMC1cXHUxREY1XFx1MURGQy1cXHUxRjE1XFx1MUYxOC1cXHUxRjFEXFx1MUYyMC1cXHUxRjQ1XFx1MUY0OC1cXHUxRjREXFx1MUY1MC1cXHUxRjU3XFx1MUY1OVxcdTFGNUJcXHUxRjVEXFx1MUY1Ri1cXHUxRjdEXFx1MUY4MC1cXHUxRkI0XFx1MUZCNi1cXHUxRkJDXFx1MUZCRVxcdTFGQzItXFx1MUZDNFxcdTFGQzYtXFx1MUZDQ1xcdTFGRDAtXFx1MUZEM1xcdTFGRDYtXFx1MUZEQlxcdTFGRTAtXFx1MUZFQ1xcdTFGRjItXFx1MUZGNFxcdTFGRjYtXFx1MUZGQ1xcdTIwMENcXHUyMDBEXFx1MjAzRlxcdTIwNDBcXHUyMDU0XFx1MjA3MVxcdTIwN0ZcXHUyMDkwLVxcdTIwOUNcXHUyMEQwLVxcdTIwRENcXHUyMEUxXFx1MjBFNS1cXHUyMEYwXFx1MjEwMlxcdTIxMDdcXHUyMTBBLVxcdTIxMTNcXHUyMTE1XFx1MjExOS1cXHUyMTFEXFx1MjEyNFxcdTIxMjZcXHUyMTI4XFx1MjEyQS1cXHUyMTJEXFx1MjEyRi1cXHUyMTM5XFx1MjEzQy1cXHUyMTNGXFx1MjE0NS1cXHUyMTQ5XFx1MjE0RVxcdTIxNjAtXFx1MjE4OFxcdTJDMDAtXFx1MkMyRVxcdTJDMzAtXFx1MkM1RVxcdTJDNjAtXFx1MkNFNFxcdTJDRUItXFx1MkNGM1xcdTJEMDAtXFx1MkQyNVxcdTJEMjdcXHUyRDJEXFx1MkQzMC1cXHUyRDY3XFx1MkQ2RlxcdTJEN0YtXFx1MkQ5NlxcdTJEQTAtXFx1MkRBNlxcdTJEQTgtXFx1MkRBRVxcdTJEQjAtXFx1MkRCNlxcdTJEQjgtXFx1MkRCRVxcdTJEQzAtXFx1MkRDNlxcdTJEQzgtXFx1MkRDRVxcdTJERDAtXFx1MkRENlxcdTJERDgtXFx1MkRERVxcdTJERTAtXFx1MkRGRlxcdTJFMkZcXHUzMDA1LVxcdTMwMDdcXHUzMDIxLVxcdTMwMkZcXHUzMDMxLVxcdTMwMzVcXHUzMDM4LVxcdTMwM0NcXHUzMDQxLVxcdTMwOTZcXHUzMDk5XFx1MzA5QVxcdTMwOUQtXFx1MzA5RlxcdTMwQTEtXFx1MzBGQVxcdTMwRkMtXFx1MzBGRlxcdTMxMDUtXFx1MzEyRFxcdTMxMzEtXFx1MzE4RVxcdTMxQTAtXFx1MzFCQVxcdTMxRjAtXFx1MzFGRlxcdTM0MDAtXFx1NERCNVxcdTRFMDAtXFx1OUZDQ1xcdUEwMDAtXFx1QTQ4Q1xcdUE0RDAtXFx1QTRGRFxcdUE1MDAtXFx1QTYwQ1xcdUE2MTAtXFx1QTYyQlxcdUE2NDAtXFx1QTY2RlxcdUE2NzQtXFx1QTY3RFxcdUE2N0YtXFx1QTY5RFxcdUE2OUYtXFx1QTZGMVxcdUE3MTctXFx1QTcxRlxcdUE3MjItXFx1QTc4OFxcdUE3OEItXFx1QTc4RVxcdUE3OTAtXFx1QTdBRFxcdUE3QjBcXHVBN0IxXFx1QTdGNy1cXHVBODI3XFx1QTg0MC1cXHVBODczXFx1QTg4MC1cXHVBOEM0XFx1QThEMC1cXHVBOEQ5XFx1QThFMC1cXHVBOEY3XFx1QThGQlxcdUE5MDAtXFx1QTkyRFxcdUE5MzAtXFx1QTk1M1xcdUE5NjAtXFx1QTk3Q1xcdUE5ODAtXFx1QTlDMFxcdUE5Q0YtXFx1QTlEOVxcdUE5RTAtXFx1QTlGRVxcdUFBMDAtXFx1QUEzNlxcdUFBNDAtXFx1QUE0RFxcdUFBNTAtXFx1QUE1OVxcdUFBNjAtXFx1QUE3NlxcdUFBN0EtXFx1QUFDMlxcdUFBREItXFx1QUFERFxcdUFBRTAtXFx1QUFFRlxcdUFBRjItXFx1QUFGNlxcdUFCMDEtXFx1QUIwNlxcdUFCMDktXFx1QUIwRVxcdUFCMTEtXFx1QUIxNlxcdUFCMjAtXFx1QUIyNlxcdUFCMjgtXFx1QUIyRVxcdUFCMzAtXFx1QUI1QVxcdUFCNUMtXFx1QUI1RlxcdUFCNjRcXHVBQjY1XFx1QUJDMC1cXHVBQkVBXFx1QUJFQ1xcdUFCRURcXHVBQkYwLVxcdUFCRjlcXHVBQzAwLVxcdUQ3QTNcXHVEN0IwLVxcdUQ3QzZcXHVEN0NCLVxcdUQ3RkJcXHVGOTAwLVxcdUZBNkRcXHVGQTcwLVxcdUZBRDlcXHVGQjAwLVxcdUZCMDZcXHVGQjEzLVxcdUZCMTdcXHVGQjFELVxcdUZCMjhcXHVGQjJBLVxcdUZCMzZcXHVGQjM4LVxcdUZCM0NcXHVGQjNFXFx1RkI0MFxcdUZCNDFcXHVGQjQzXFx1RkI0NFxcdUZCNDYtXFx1RkJCMVxcdUZCRDMtXFx1RkQzRFxcdUZENTAtXFx1RkQ4RlxcdUZEOTItXFx1RkRDN1xcdUZERjAtXFx1RkRGQlxcdUZFMDAtXFx1RkUwRlxcdUZFMjAtXFx1RkUyRFxcdUZFMzNcXHVGRTM0XFx1RkU0RC1cXHVGRTRGXFx1RkU3MC1cXHVGRTc0XFx1RkU3Ni1cXHVGRUZDXFx1RkYxMC1cXHVGRjE5XFx1RkYyMS1cXHVGRjNBXFx1RkYzRlxcdUZGNDEtXFx1RkY1QVxcdUZGNjYtXFx1RkZCRVxcdUZGQzItXFx1RkZDN1xcdUZGQ0EtXFx1RkZDRlxcdUZGRDItXFx1RkZEN1xcdUZGREEtXFx1RkZEQ10vXG4gICAgfTtcblxuICAgIEVTNlJlZ2V4ID0ge1xuICAgICAgICAvLyBFQ01BU2NyaXB0IDYvVW5pY29kZSB2Ny4wLjAgTm9uQXNjaWlJZGVudGlmaWVyU3RhcnQ6XG4gICAgICAgIE5vbkFzY2lpSWRlbnRpZmllclN0YXJ0OiAvW1xceEFBXFx4QjVcXHhCQVxceEMwLVxceEQ2XFx4RDgtXFx4RjZcXHhGOC1cXHUwMkMxXFx1MDJDNi1cXHUwMkQxXFx1MDJFMC1cXHUwMkU0XFx1MDJFQ1xcdTAyRUVcXHUwMzcwLVxcdTAzNzRcXHUwMzc2XFx1MDM3N1xcdTAzN0EtXFx1MDM3RFxcdTAzN0ZcXHUwMzg2XFx1MDM4OC1cXHUwMzhBXFx1MDM4Q1xcdTAzOEUtXFx1MDNBMVxcdTAzQTMtXFx1MDNGNVxcdTAzRjctXFx1MDQ4MVxcdTA0OEEtXFx1MDUyRlxcdTA1MzEtXFx1MDU1NlxcdTA1NTlcXHUwNTYxLVxcdTA1ODdcXHUwNUQwLVxcdTA1RUFcXHUwNUYwLVxcdTA1RjJcXHUwNjIwLVxcdTA2NEFcXHUwNjZFXFx1MDY2RlxcdTA2NzEtXFx1MDZEM1xcdTA2RDVcXHUwNkU1XFx1MDZFNlxcdTA2RUVcXHUwNkVGXFx1MDZGQS1cXHUwNkZDXFx1MDZGRlxcdTA3MTBcXHUwNzEyLVxcdTA3MkZcXHUwNzRELVxcdTA3QTVcXHUwN0IxXFx1MDdDQS1cXHUwN0VBXFx1MDdGNFxcdTA3RjVcXHUwN0ZBXFx1MDgwMC1cXHUwODE1XFx1MDgxQVxcdTA4MjRcXHUwODI4XFx1MDg0MC1cXHUwODU4XFx1MDhBMC1cXHUwOEIyXFx1MDkwNC1cXHUwOTM5XFx1MDkzRFxcdTA5NTBcXHUwOTU4LVxcdTA5NjFcXHUwOTcxLVxcdTA5ODBcXHUwOTg1LVxcdTA5OENcXHUwOThGXFx1MDk5MFxcdTA5OTMtXFx1MDlBOFxcdTA5QUEtXFx1MDlCMFxcdTA5QjJcXHUwOUI2LVxcdTA5QjlcXHUwOUJEXFx1MDlDRVxcdTA5RENcXHUwOUREXFx1MDlERi1cXHUwOUUxXFx1MDlGMFxcdTA5RjFcXHUwQTA1LVxcdTBBMEFcXHUwQTBGXFx1MEExMFxcdTBBMTMtXFx1MEEyOFxcdTBBMkEtXFx1MEEzMFxcdTBBMzJcXHUwQTMzXFx1MEEzNVxcdTBBMzZcXHUwQTM4XFx1MEEzOVxcdTBBNTktXFx1MEE1Q1xcdTBBNUVcXHUwQTcyLVxcdTBBNzRcXHUwQTg1LVxcdTBBOERcXHUwQThGLVxcdTBBOTFcXHUwQTkzLVxcdTBBQThcXHUwQUFBLVxcdTBBQjBcXHUwQUIyXFx1MEFCM1xcdTBBQjUtXFx1MEFCOVxcdTBBQkRcXHUwQUQwXFx1MEFFMFxcdTBBRTFcXHUwQjA1LVxcdTBCMENcXHUwQjBGXFx1MEIxMFxcdTBCMTMtXFx1MEIyOFxcdTBCMkEtXFx1MEIzMFxcdTBCMzJcXHUwQjMzXFx1MEIzNS1cXHUwQjM5XFx1MEIzRFxcdTBCNUNcXHUwQjVEXFx1MEI1Ri1cXHUwQjYxXFx1MEI3MVxcdTBCODNcXHUwQjg1LVxcdTBCOEFcXHUwQjhFLVxcdTBCOTBcXHUwQjkyLVxcdTBCOTVcXHUwQjk5XFx1MEI5QVxcdTBCOUNcXHUwQjlFXFx1MEI5RlxcdTBCQTNcXHUwQkE0XFx1MEJBOC1cXHUwQkFBXFx1MEJBRS1cXHUwQkI5XFx1MEJEMFxcdTBDMDUtXFx1MEMwQ1xcdTBDMEUtXFx1MEMxMFxcdTBDMTItXFx1MEMyOFxcdTBDMkEtXFx1MEMzOVxcdTBDM0RcXHUwQzU4XFx1MEM1OVxcdTBDNjBcXHUwQzYxXFx1MEM4NS1cXHUwQzhDXFx1MEM4RS1cXHUwQzkwXFx1MEM5Mi1cXHUwQ0E4XFx1MENBQS1cXHUwQ0IzXFx1MENCNS1cXHUwQ0I5XFx1MENCRFxcdTBDREVcXHUwQ0UwXFx1MENFMVxcdTBDRjFcXHUwQ0YyXFx1MEQwNS1cXHUwRDBDXFx1MEQwRS1cXHUwRDEwXFx1MEQxMi1cXHUwRDNBXFx1MEQzRFxcdTBENEVcXHUwRDYwXFx1MEQ2MVxcdTBEN0EtXFx1MEQ3RlxcdTBEODUtXFx1MEQ5NlxcdTBEOUEtXFx1MERCMVxcdTBEQjMtXFx1MERCQlxcdTBEQkRcXHUwREMwLVxcdTBEQzZcXHUwRTAxLVxcdTBFMzBcXHUwRTMyXFx1MEUzM1xcdTBFNDAtXFx1MEU0NlxcdTBFODFcXHUwRTgyXFx1MEU4NFxcdTBFODdcXHUwRTg4XFx1MEU4QVxcdTBFOERcXHUwRTk0LVxcdTBFOTdcXHUwRTk5LVxcdTBFOUZcXHUwRUExLVxcdTBFQTNcXHUwRUE1XFx1MEVBN1xcdTBFQUFcXHUwRUFCXFx1MEVBRC1cXHUwRUIwXFx1MEVCMlxcdTBFQjNcXHUwRUJEXFx1MEVDMC1cXHUwRUM0XFx1MEVDNlxcdTBFREMtXFx1MEVERlxcdTBGMDBcXHUwRjQwLVxcdTBGNDdcXHUwRjQ5LVxcdTBGNkNcXHUwRjg4LVxcdTBGOENcXHUxMDAwLVxcdTEwMkFcXHUxMDNGXFx1MTA1MC1cXHUxMDU1XFx1MTA1QS1cXHUxMDVEXFx1MTA2MVxcdTEwNjVcXHUxMDY2XFx1MTA2RS1cXHUxMDcwXFx1MTA3NS1cXHUxMDgxXFx1MTA4RVxcdTEwQTAtXFx1MTBDNVxcdTEwQzdcXHUxMENEXFx1MTBEMC1cXHUxMEZBXFx1MTBGQy1cXHUxMjQ4XFx1MTI0QS1cXHUxMjREXFx1MTI1MC1cXHUxMjU2XFx1MTI1OFxcdTEyNUEtXFx1MTI1RFxcdTEyNjAtXFx1MTI4OFxcdTEyOEEtXFx1MTI4RFxcdTEyOTAtXFx1MTJCMFxcdTEyQjItXFx1MTJCNVxcdTEyQjgtXFx1MTJCRVxcdTEyQzBcXHUxMkMyLVxcdTEyQzVcXHUxMkM4LVxcdTEyRDZcXHUxMkQ4LVxcdTEzMTBcXHUxMzEyLVxcdTEzMTVcXHUxMzE4LVxcdTEzNUFcXHUxMzgwLVxcdTEzOEZcXHUxM0EwLVxcdTEzRjRcXHUxNDAxLVxcdTE2NkNcXHUxNjZGLVxcdTE2N0ZcXHUxNjgxLVxcdTE2OUFcXHUxNkEwLVxcdTE2RUFcXHUxNkVFLVxcdTE2RjhcXHUxNzAwLVxcdTE3MENcXHUxNzBFLVxcdTE3MTFcXHUxNzIwLVxcdTE3MzFcXHUxNzQwLVxcdTE3NTFcXHUxNzYwLVxcdTE3NkNcXHUxNzZFLVxcdTE3NzBcXHUxNzgwLVxcdTE3QjNcXHUxN0Q3XFx1MTdEQ1xcdTE4MjAtXFx1MTg3N1xcdTE4ODAtXFx1MThBOFxcdTE4QUFcXHUxOEIwLVxcdTE4RjVcXHUxOTAwLVxcdTE5MUVcXHUxOTUwLVxcdTE5NkRcXHUxOTcwLVxcdTE5NzRcXHUxOTgwLVxcdTE5QUJcXHUxOUMxLVxcdTE5QzdcXHUxQTAwLVxcdTFBMTZcXHUxQTIwLVxcdTFBNTRcXHUxQUE3XFx1MUIwNS1cXHUxQjMzXFx1MUI0NS1cXHUxQjRCXFx1MUI4My1cXHUxQkEwXFx1MUJBRVxcdTFCQUZcXHUxQkJBLVxcdTFCRTVcXHUxQzAwLVxcdTFDMjNcXHUxQzRELVxcdTFDNEZcXHUxQzVBLVxcdTFDN0RcXHUxQ0U5LVxcdTFDRUNcXHUxQ0VFLVxcdTFDRjFcXHUxQ0Y1XFx1MUNGNlxcdTFEMDAtXFx1MURCRlxcdTFFMDAtXFx1MUYxNVxcdTFGMTgtXFx1MUYxRFxcdTFGMjAtXFx1MUY0NVxcdTFGNDgtXFx1MUY0RFxcdTFGNTAtXFx1MUY1N1xcdTFGNTlcXHUxRjVCXFx1MUY1RFxcdTFGNUYtXFx1MUY3RFxcdTFGODAtXFx1MUZCNFxcdTFGQjYtXFx1MUZCQ1xcdTFGQkVcXHUxRkMyLVxcdTFGQzRcXHUxRkM2LVxcdTFGQ0NcXHUxRkQwLVxcdTFGRDNcXHUxRkQ2LVxcdTFGREJcXHUxRkUwLVxcdTFGRUNcXHUxRkYyLVxcdTFGRjRcXHUxRkY2LVxcdTFGRkNcXHUyMDcxXFx1MjA3RlxcdTIwOTAtXFx1MjA5Q1xcdTIxMDJcXHUyMTA3XFx1MjEwQS1cXHUyMTEzXFx1MjExNVxcdTIxMTgtXFx1MjExRFxcdTIxMjRcXHUyMTI2XFx1MjEyOFxcdTIxMkEtXFx1MjEzOVxcdTIxM0MtXFx1MjEzRlxcdTIxNDUtXFx1MjE0OVxcdTIxNEVcXHUyMTYwLVxcdTIxODhcXHUyQzAwLVxcdTJDMkVcXHUyQzMwLVxcdTJDNUVcXHUyQzYwLVxcdTJDRTRcXHUyQ0VCLVxcdTJDRUVcXHUyQ0YyXFx1MkNGM1xcdTJEMDAtXFx1MkQyNVxcdTJEMjdcXHUyRDJEXFx1MkQzMC1cXHUyRDY3XFx1MkQ2RlxcdTJEODAtXFx1MkQ5NlxcdTJEQTAtXFx1MkRBNlxcdTJEQTgtXFx1MkRBRVxcdTJEQjAtXFx1MkRCNlxcdTJEQjgtXFx1MkRCRVxcdTJEQzAtXFx1MkRDNlxcdTJEQzgtXFx1MkRDRVxcdTJERDAtXFx1MkRENlxcdTJERDgtXFx1MkRERVxcdTMwMDUtXFx1MzAwN1xcdTMwMjEtXFx1MzAyOVxcdTMwMzEtXFx1MzAzNVxcdTMwMzgtXFx1MzAzQ1xcdTMwNDEtXFx1MzA5NlxcdTMwOUItXFx1MzA5RlxcdTMwQTEtXFx1MzBGQVxcdTMwRkMtXFx1MzBGRlxcdTMxMDUtXFx1MzEyRFxcdTMxMzEtXFx1MzE4RVxcdTMxQTAtXFx1MzFCQVxcdTMxRjAtXFx1MzFGRlxcdTM0MDAtXFx1NERCNVxcdTRFMDAtXFx1OUZDQ1xcdUEwMDAtXFx1QTQ4Q1xcdUE0RDAtXFx1QTRGRFxcdUE1MDAtXFx1QTYwQ1xcdUE2MTAtXFx1QTYxRlxcdUE2MkFcXHVBNjJCXFx1QTY0MC1cXHVBNjZFXFx1QTY3Ri1cXHVBNjlEXFx1QTZBMC1cXHVBNkVGXFx1QTcxNy1cXHVBNzFGXFx1QTcyMi1cXHVBNzg4XFx1QTc4Qi1cXHVBNzhFXFx1QTc5MC1cXHVBN0FEXFx1QTdCMFxcdUE3QjFcXHVBN0Y3LVxcdUE4MDFcXHVBODAzLVxcdUE4MDVcXHVBODA3LVxcdUE4MEFcXHVBODBDLVxcdUE4MjJcXHVBODQwLVxcdUE4NzNcXHVBODgyLVxcdUE4QjNcXHVBOEYyLVxcdUE4RjdcXHVBOEZCXFx1QTkwQS1cXHVBOTI1XFx1QTkzMC1cXHVBOTQ2XFx1QTk2MC1cXHVBOTdDXFx1QTk4NC1cXHVBOUIyXFx1QTlDRlxcdUE5RTAtXFx1QTlFNFxcdUE5RTYtXFx1QTlFRlxcdUE5RkEtXFx1QTlGRVxcdUFBMDAtXFx1QUEyOFxcdUFBNDAtXFx1QUE0MlxcdUFBNDQtXFx1QUE0QlxcdUFBNjAtXFx1QUE3NlxcdUFBN0FcXHVBQTdFLVxcdUFBQUZcXHVBQUIxXFx1QUFCNVxcdUFBQjZcXHVBQUI5LVxcdUFBQkRcXHVBQUMwXFx1QUFDMlxcdUFBREItXFx1QUFERFxcdUFBRTAtXFx1QUFFQVxcdUFBRjItXFx1QUFGNFxcdUFCMDEtXFx1QUIwNlxcdUFCMDktXFx1QUIwRVxcdUFCMTEtXFx1QUIxNlxcdUFCMjAtXFx1QUIyNlxcdUFCMjgtXFx1QUIyRVxcdUFCMzAtXFx1QUI1QVxcdUFCNUMtXFx1QUI1RlxcdUFCNjRcXHVBQjY1XFx1QUJDMC1cXHVBQkUyXFx1QUMwMC1cXHVEN0EzXFx1RDdCMC1cXHVEN0M2XFx1RDdDQi1cXHVEN0ZCXFx1RjkwMC1cXHVGQTZEXFx1RkE3MC1cXHVGQUQ5XFx1RkIwMC1cXHVGQjA2XFx1RkIxMy1cXHVGQjE3XFx1RkIxRFxcdUZCMUYtXFx1RkIyOFxcdUZCMkEtXFx1RkIzNlxcdUZCMzgtXFx1RkIzQ1xcdUZCM0VcXHVGQjQwXFx1RkI0MVxcdUZCNDNcXHVGQjQ0XFx1RkI0Ni1cXHVGQkIxXFx1RkJEMy1cXHVGRDNEXFx1RkQ1MC1cXHVGRDhGXFx1RkQ5Mi1cXHVGREM3XFx1RkRGMC1cXHVGREZCXFx1RkU3MC1cXHVGRTc0XFx1RkU3Ni1cXHVGRUZDXFx1RkYyMS1cXHVGRjNBXFx1RkY0MS1cXHVGRjVBXFx1RkY2Ni1cXHVGRkJFXFx1RkZDMi1cXHVGRkM3XFx1RkZDQS1cXHVGRkNGXFx1RkZEMi1cXHVGRkQ3XFx1RkZEQS1cXHVGRkRDXXxcXHVEODAwW1xcdURDMDAtXFx1REMwQlxcdURDMEQtXFx1REMyNlxcdURDMjgtXFx1REMzQVxcdURDM0NcXHVEQzNEXFx1REMzRi1cXHVEQzREXFx1REM1MC1cXHVEQzVEXFx1REM4MC1cXHVEQ0ZBXFx1REQ0MC1cXHVERDc0XFx1REU4MC1cXHVERTlDXFx1REVBMC1cXHVERUQwXFx1REYwMC1cXHVERjFGXFx1REYzMC1cXHVERjRBXFx1REY1MC1cXHVERjc1XFx1REY4MC1cXHVERjlEXFx1REZBMC1cXHVERkMzXFx1REZDOC1cXHVERkNGXFx1REZEMS1cXHVERkQ1XXxcXHVEODAxW1xcdURDMDAtXFx1REM5RFxcdUREMDAtXFx1REQyN1xcdUREMzAtXFx1REQ2M1xcdURFMDAtXFx1REYzNlxcdURGNDAtXFx1REY1NVxcdURGNjAtXFx1REY2N118XFx1RDgwMltcXHVEQzAwLVxcdURDMDVcXHVEQzA4XFx1REMwQS1cXHVEQzM1XFx1REMzN1xcdURDMzhcXHVEQzNDXFx1REMzRi1cXHVEQzU1XFx1REM2MC1cXHVEQzc2XFx1REM4MC1cXHVEQzlFXFx1REQwMC1cXHVERDE1XFx1REQyMC1cXHVERDM5XFx1REQ4MC1cXHVEREI3XFx1RERCRVxcdUREQkZcXHVERTAwXFx1REUxMC1cXHVERTEzXFx1REUxNS1cXHVERTE3XFx1REUxOS1cXHVERTMzXFx1REU2MC1cXHVERTdDXFx1REU4MC1cXHVERTlDXFx1REVDMC1cXHVERUM3XFx1REVDOS1cXHVERUU0XFx1REYwMC1cXHVERjM1XFx1REY0MC1cXHVERjU1XFx1REY2MC1cXHVERjcyXFx1REY4MC1cXHVERjkxXXxcXHVEODAzW1xcdURDMDAtXFx1REM0OF18XFx1RDgwNFtcXHVEQzAzLVxcdURDMzdcXHVEQzgzLVxcdURDQUZcXHVEQ0QwLVxcdURDRThcXHVERDAzLVxcdUREMjZcXHVERDUwLVxcdURENzJcXHVERDc2XFx1REQ4My1cXHVEREIyXFx1RERDMS1cXHVEREM0XFx1REREQVxcdURFMDAtXFx1REUxMVxcdURFMTMtXFx1REUyQlxcdURFQjAtXFx1REVERVxcdURGMDUtXFx1REYwQ1xcdURGMEZcXHVERjEwXFx1REYxMy1cXHVERjI4XFx1REYyQS1cXHVERjMwXFx1REYzMlxcdURGMzNcXHVERjM1LVxcdURGMzlcXHVERjNEXFx1REY1RC1cXHVERjYxXXxcXHVEODA1W1xcdURDODAtXFx1RENBRlxcdURDQzRcXHVEQ0M1XFx1RENDN1xcdUREODAtXFx1RERBRVxcdURFMDAtXFx1REUyRlxcdURFNDRcXHVERTgwLVxcdURFQUFdfFxcdUQ4MDZbXFx1RENBMC1cXHVEQ0RGXFx1RENGRlxcdURFQzAtXFx1REVGOF18XFx1RDgwOFtcXHVEQzAwLVxcdURGOThdfFxcdUQ4MDlbXFx1REMwMC1cXHVEQzZFXXxbXFx1RDgwQ1xcdUQ4NDAtXFx1RDg2OFxcdUQ4NkEtXFx1RDg2Q11bXFx1REMwMC1cXHVERkZGXXxcXHVEODBEW1xcdURDMDAtXFx1REMyRV18XFx1RDgxQVtcXHVEQzAwLVxcdURFMzhcXHVERTQwLVxcdURFNUVcXHVERUQwLVxcdURFRURcXHVERjAwLVxcdURGMkZcXHVERjQwLVxcdURGNDNcXHVERjYzLVxcdURGNzdcXHVERjdELVxcdURGOEZdfFxcdUQ4MUJbXFx1REYwMC1cXHVERjQ0XFx1REY1MFxcdURGOTMtXFx1REY5Rl18XFx1RDgyQ1tcXHVEQzAwXFx1REMwMV18XFx1RDgyRltcXHVEQzAwLVxcdURDNkFcXHVEQzcwLVxcdURDN0NcXHVEQzgwLVxcdURDODhcXHVEQzkwLVxcdURDOTldfFxcdUQ4MzVbXFx1REMwMC1cXHVEQzU0XFx1REM1Ni1cXHVEQzlDXFx1REM5RVxcdURDOUZcXHVEQ0EyXFx1RENBNVxcdURDQTZcXHVEQ0E5LVxcdURDQUNcXHVEQ0FFLVxcdURDQjlcXHVEQ0JCXFx1RENCRC1cXHVEQ0MzXFx1RENDNS1cXHVERDA1XFx1REQwNy1cXHVERDBBXFx1REQwRC1cXHVERDE0XFx1REQxNi1cXHVERDFDXFx1REQxRS1cXHVERDM5XFx1REQzQi1cXHVERDNFXFx1REQ0MC1cXHVERDQ0XFx1REQ0NlxcdURENEEtXFx1REQ1MFxcdURENTItXFx1REVBNVxcdURFQTgtXFx1REVDMFxcdURFQzItXFx1REVEQVxcdURFREMtXFx1REVGQVxcdURFRkMtXFx1REYxNFxcdURGMTYtXFx1REYzNFxcdURGMzYtXFx1REY0RVxcdURGNTAtXFx1REY2RVxcdURGNzAtXFx1REY4OFxcdURGOEEtXFx1REZBOFxcdURGQUEtXFx1REZDMlxcdURGQzQtXFx1REZDQl18XFx1RDgzQVtcXHVEQzAwLVxcdURDQzRdfFxcdUQ4M0JbXFx1REUwMC1cXHVERTAzXFx1REUwNS1cXHVERTFGXFx1REUyMVxcdURFMjJcXHVERTI0XFx1REUyN1xcdURFMjktXFx1REUzMlxcdURFMzQtXFx1REUzN1xcdURFMzlcXHVERTNCXFx1REU0MlxcdURFNDdcXHVERTQ5XFx1REU0QlxcdURFNEQtXFx1REU0RlxcdURFNTFcXHVERTUyXFx1REU1NFxcdURFNTdcXHVERTU5XFx1REU1QlxcdURFNURcXHVERTVGXFx1REU2MVxcdURFNjJcXHVERTY0XFx1REU2Ny1cXHVERTZBXFx1REU2Qy1cXHVERTcyXFx1REU3NC1cXHVERTc3XFx1REU3OS1cXHVERTdDXFx1REU3RVxcdURFODAtXFx1REU4OVxcdURFOEItXFx1REU5QlxcdURFQTEtXFx1REVBM1xcdURFQTUtXFx1REVBOVxcdURFQUItXFx1REVCQl18XFx1RDg2OVtcXHVEQzAwLVxcdURFRDZcXHVERjAwLVxcdURGRkZdfFxcdUQ4NkRbXFx1REMwMC1cXHVERjM0XFx1REY0MC1cXHVERkZGXXxcXHVEODZFW1xcdURDMDAtXFx1REMxRF18XFx1RDg3RVtcXHVEQzAwLVxcdURFMURdLyxcbiAgICAgICAgLy8gRUNNQVNjcmlwdCA2L1VuaWNvZGUgdjcuMC4wIE5vbkFzY2lpSWRlbnRpZmllclBhcnQ6XG4gICAgICAgIE5vbkFzY2lpSWRlbnRpZmllclBhcnQ6IC9bXFx4QUFcXHhCNVxceEI3XFx4QkFcXHhDMC1cXHhENlxceEQ4LVxceEY2XFx4RjgtXFx1MDJDMVxcdTAyQzYtXFx1MDJEMVxcdTAyRTAtXFx1MDJFNFxcdTAyRUNcXHUwMkVFXFx1MDMwMC1cXHUwMzc0XFx1MDM3NlxcdTAzNzdcXHUwMzdBLVxcdTAzN0RcXHUwMzdGXFx1MDM4Ni1cXHUwMzhBXFx1MDM4Q1xcdTAzOEUtXFx1MDNBMVxcdTAzQTMtXFx1MDNGNVxcdTAzRjctXFx1MDQ4MVxcdTA0ODMtXFx1MDQ4N1xcdTA0OEEtXFx1MDUyRlxcdTA1MzEtXFx1MDU1NlxcdTA1NTlcXHUwNTYxLVxcdTA1ODdcXHUwNTkxLVxcdTA1QkRcXHUwNUJGXFx1MDVDMVxcdTA1QzJcXHUwNUM0XFx1MDVDNVxcdTA1QzdcXHUwNUQwLVxcdTA1RUFcXHUwNUYwLVxcdTA1RjJcXHUwNjEwLVxcdTA2MUFcXHUwNjIwLVxcdTA2NjlcXHUwNjZFLVxcdTA2RDNcXHUwNkQ1LVxcdTA2RENcXHUwNkRGLVxcdTA2RThcXHUwNkVBLVxcdTA2RkNcXHUwNkZGXFx1MDcxMC1cXHUwNzRBXFx1MDc0RC1cXHUwN0IxXFx1MDdDMC1cXHUwN0Y1XFx1MDdGQVxcdTA4MDAtXFx1MDgyRFxcdTA4NDAtXFx1MDg1QlxcdTA4QTAtXFx1MDhCMlxcdTA4RTQtXFx1MDk2M1xcdTA5NjYtXFx1MDk2RlxcdTA5NzEtXFx1MDk4M1xcdTA5ODUtXFx1MDk4Q1xcdTA5OEZcXHUwOTkwXFx1MDk5My1cXHUwOUE4XFx1MDlBQS1cXHUwOUIwXFx1MDlCMlxcdTA5QjYtXFx1MDlCOVxcdTA5QkMtXFx1MDlDNFxcdTA5QzdcXHUwOUM4XFx1MDlDQi1cXHUwOUNFXFx1MDlEN1xcdTA5RENcXHUwOUREXFx1MDlERi1cXHUwOUUzXFx1MDlFNi1cXHUwOUYxXFx1MEEwMS1cXHUwQTAzXFx1MEEwNS1cXHUwQTBBXFx1MEEwRlxcdTBBMTBcXHUwQTEzLVxcdTBBMjhcXHUwQTJBLVxcdTBBMzBcXHUwQTMyXFx1MEEzM1xcdTBBMzVcXHUwQTM2XFx1MEEzOFxcdTBBMzlcXHUwQTNDXFx1MEEzRS1cXHUwQTQyXFx1MEE0N1xcdTBBNDhcXHUwQTRCLVxcdTBBNERcXHUwQTUxXFx1MEE1OS1cXHUwQTVDXFx1MEE1RVxcdTBBNjYtXFx1MEE3NVxcdTBBODEtXFx1MEE4M1xcdTBBODUtXFx1MEE4RFxcdTBBOEYtXFx1MEE5MVxcdTBBOTMtXFx1MEFBOFxcdTBBQUEtXFx1MEFCMFxcdTBBQjJcXHUwQUIzXFx1MEFCNS1cXHUwQUI5XFx1MEFCQy1cXHUwQUM1XFx1MEFDNy1cXHUwQUM5XFx1MEFDQi1cXHUwQUNEXFx1MEFEMFxcdTBBRTAtXFx1MEFFM1xcdTBBRTYtXFx1MEFFRlxcdTBCMDEtXFx1MEIwM1xcdTBCMDUtXFx1MEIwQ1xcdTBCMEZcXHUwQjEwXFx1MEIxMy1cXHUwQjI4XFx1MEIyQS1cXHUwQjMwXFx1MEIzMlxcdTBCMzNcXHUwQjM1LVxcdTBCMzlcXHUwQjNDLVxcdTBCNDRcXHUwQjQ3XFx1MEI0OFxcdTBCNEItXFx1MEI0RFxcdTBCNTZcXHUwQjU3XFx1MEI1Q1xcdTBCNURcXHUwQjVGLVxcdTBCNjNcXHUwQjY2LVxcdTBCNkZcXHUwQjcxXFx1MEI4MlxcdTBCODNcXHUwQjg1LVxcdTBCOEFcXHUwQjhFLVxcdTBCOTBcXHUwQjkyLVxcdTBCOTVcXHUwQjk5XFx1MEI5QVxcdTBCOUNcXHUwQjlFXFx1MEI5RlxcdTBCQTNcXHUwQkE0XFx1MEJBOC1cXHUwQkFBXFx1MEJBRS1cXHUwQkI5XFx1MEJCRS1cXHUwQkMyXFx1MEJDNi1cXHUwQkM4XFx1MEJDQS1cXHUwQkNEXFx1MEJEMFxcdTBCRDdcXHUwQkU2LVxcdTBCRUZcXHUwQzAwLVxcdTBDMDNcXHUwQzA1LVxcdTBDMENcXHUwQzBFLVxcdTBDMTBcXHUwQzEyLVxcdTBDMjhcXHUwQzJBLVxcdTBDMzlcXHUwQzNELVxcdTBDNDRcXHUwQzQ2LVxcdTBDNDhcXHUwQzRBLVxcdTBDNERcXHUwQzU1XFx1MEM1NlxcdTBDNThcXHUwQzU5XFx1MEM2MC1cXHUwQzYzXFx1MEM2Ni1cXHUwQzZGXFx1MEM4MS1cXHUwQzgzXFx1MEM4NS1cXHUwQzhDXFx1MEM4RS1cXHUwQzkwXFx1MEM5Mi1cXHUwQ0E4XFx1MENBQS1cXHUwQ0IzXFx1MENCNS1cXHUwQ0I5XFx1MENCQy1cXHUwQ0M0XFx1MENDNi1cXHUwQ0M4XFx1MENDQS1cXHUwQ0NEXFx1MENENVxcdTBDRDZcXHUwQ0RFXFx1MENFMC1cXHUwQ0UzXFx1MENFNi1cXHUwQ0VGXFx1MENGMVxcdTBDRjJcXHUwRDAxLVxcdTBEMDNcXHUwRDA1LVxcdTBEMENcXHUwRDBFLVxcdTBEMTBcXHUwRDEyLVxcdTBEM0FcXHUwRDNELVxcdTBENDRcXHUwRDQ2LVxcdTBENDhcXHUwRDRBLVxcdTBENEVcXHUwRDU3XFx1MEQ2MC1cXHUwRDYzXFx1MEQ2Ni1cXHUwRDZGXFx1MEQ3QS1cXHUwRDdGXFx1MEQ4MlxcdTBEODNcXHUwRDg1LVxcdTBEOTZcXHUwRDlBLVxcdTBEQjFcXHUwREIzLVxcdTBEQkJcXHUwREJEXFx1MERDMC1cXHUwREM2XFx1MERDQVxcdTBEQ0YtXFx1MERENFxcdTBERDZcXHUwREQ4LVxcdTBEREZcXHUwREU2LVxcdTBERUZcXHUwREYyXFx1MERGM1xcdTBFMDEtXFx1MEUzQVxcdTBFNDAtXFx1MEU0RVxcdTBFNTAtXFx1MEU1OVxcdTBFODFcXHUwRTgyXFx1MEU4NFxcdTBFODdcXHUwRTg4XFx1MEU4QVxcdTBFOERcXHUwRTk0LVxcdTBFOTdcXHUwRTk5LVxcdTBFOUZcXHUwRUExLVxcdTBFQTNcXHUwRUE1XFx1MEVBN1xcdTBFQUFcXHUwRUFCXFx1MEVBRC1cXHUwRUI5XFx1MEVCQi1cXHUwRUJEXFx1MEVDMC1cXHUwRUM0XFx1MEVDNlxcdTBFQzgtXFx1MEVDRFxcdTBFRDAtXFx1MEVEOVxcdTBFREMtXFx1MEVERlxcdTBGMDBcXHUwRjE4XFx1MEYxOVxcdTBGMjAtXFx1MEYyOVxcdTBGMzVcXHUwRjM3XFx1MEYzOVxcdTBGM0UtXFx1MEY0N1xcdTBGNDktXFx1MEY2Q1xcdTBGNzEtXFx1MEY4NFxcdTBGODYtXFx1MEY5N1xcdTBGOTktXFx1MEZCQ1xcdTBGQzZcXHUxMDAwLVxcdTEwNDlcXHUxMDUwLVxcdTEwOURcXHUxMEEwLVxcdTEwQzVcXHUxMEM3XFx1MTBDRFxcdTEwRDAtXFx1MTBGQVxcdTEwRkMtXFx1MTI0OFxcdTEyNEEtXFx1MTI0RFxcdTEyNTAtXFx1MTI1NlxcdTEyNThcXHUxMjVBLVxcdTEyNURcXHUxMjYwLVxcdTEyODhcXHUxMjhBLVxcdTEyOERcXHUxMjkwLVxcdTEyQjBcXHUxMkIyLVxcdTEyQjVcXHUxMkI4LVxcdTEyQkVcXHUxMkMwXFx1MTJDMi1cXHUxMkM1XFx1MTJDOC1cXHUxMkQ2XFx1MTJEOC1cXHUxMzEwXFx1MTMxMi1cXHUxMzE1XFx1MTMxOC1cXHUxMzVBXFx1MTM1RC1cXHUxMzVGXFx1MTM2OS1cXHUxMzcxXFx1MTM4MC1cXHUxMzhGXFx1MTNBMC1cXHUxM0Y0XFx1MTQwMS1cXHUxNjZDXFx1MTY2Ri1cXHUxNjdGXFx1MTY4MS1cXHUxNjlBXFx1MTZBMC1cXHUxNkVBXFx1MTZFRS1cXHUxNkY4XFx1MTcwMC1cXHUxNzBDXFx1MTcwRS1cXHUxNzE0XFx1MTcyMC1cXHUxNzM0XFx1MTc0MC1cXHUxNzUzXFx1MTc2MC1cXHUxNzZDXFx1MTc2RS1cXHUxNzcwXFx1MTc3MlxcdTE3NzNcXHUxNzgwLVxcdTE3RDNcXHUxN0Q3XFx1MTdEQ1xcdTE3RERcXHUxN0UwLVxcdTE3RTlcXHUxODBCLVxcdTE4MERcXHUxODEwLVxcdTE4MTlcXHUxODIwLVxcdTE4NzdcXHUxODgwLVxcdTE4QUFcXHUxOEIwLVxcdTE4RjVcXHUxOTAwLVxcdTE5MUVcXHUxOTIwLVxcdTE5MkJcXHUxOTMwLVxcdTE5M0JcXHUxOTQ2LVxcdTE5NkRcXHUxOTcwLVxcdTE5NzRcXHUxOTgwLVxcdTE5QUJcXHUxOUIwLVxcdTE5QzlcXHUxOUQwLVxcdTE5REFcXHUxQTAwLVxcdTFBMUJcXHUxQTIwLVxcdTFBNUVcXHUxQTYwLVxcdTFBN0NcXHUxQTdGLVxcdTFBODlcXHUxQTkwLVxcdTFBOTlcXHUxQUE3XFx1MUFCMC1cXHUxQUJEXFx1MUIwMC1cXHUxQjRCXFx1MUI1MC1cXHUxQjU5XFx1MUI2Qi1cXHUxQjczXFx1MUI4MC1cXHUxQkYzXFx1MUMwMC1cXHUxQzM3XFx1MUM0MC1cXHUxQzQ5XFx1MUM0RC1cXHUxQzdEXFx1MUNEMC1cXHUxQ0QyXFx1MUNENC1cXHUxQ0Y2XFx1MUNGOFxcdTFDRjlcXHUxRDAwLVxcdTFERjVcXHUxREZDLVxcdTFGMTVcXHUxRjE4LVxcdTFGMURcXHUxRjIwLVxcdTFGNDVcXHUxRjQ4LVxcdTFGNERcXHUxRjUwLVxcdTFGNTdcXHUxRjU5XFx1MUY1QlxcdTFGNURcXHUxRjVGLVxcdTFGN0RcXHUxRjgwLVxcdTFGQjRcXHUxRkI2LVxcdTFGQkNcXHUxRkJFXFx1MUZDMi1cXHUxRkM0XFx1MUZDNi1cXHUxRkNDXFx1MUZEMC1cXHUxRkQzXFx1MUZENi1cXHUxRkRCXFx1MUZFMC1cXHUxRkVDXFx1MUZGMi1cXHUxRkY0XFx1MUZGNi1cXHUxRkZDXFx1MjAwQ1xcdTIwMERcXHUyMDNGXFx1MjA0MFxcdTIwNTRcXHUyMDcxXFx1MjA3RlxcdTIwOTAtXFx1MjA5Q1xcdTIwRDAtXFx1MjBEQ1xcdTIwRTFcXHUyMEU1LVxcdTIwRjBcXHUyMTAyXFx1MjEwN1xcdTIxMEEtXFx1MjExM1xcdTIxMTVcXHUyMTE4LVxcdTIxMURcXHUyMTI0XFx1MjEyNlxcdTIxMjhcXHUyMTJBLVxcdTIxMzlcXHUyMTNDLVxcdTIxM0ZcXHUyMTQ1LVxcdTIxNDlcXHUyMTRFXFx1MjE2MC1cXHUyMTg4XFx1MkMwMC1cXHUyQzJFXFx1MkMzMC1cXHUyQzVFXFx1MkM2MC1cXHUyQ0U0XFx1MkNFQi1cXHUyQ0YzXFx1MkQwMC1cXHUyRDI1XFx1MkQyN1xcdTJEMkRcXHUyRDMwLVxcdTJENjdcXHUyRDZGXFx1MkQ3Ri1cXHUyRDk2XFx1MkRBMC1cXHUyREE2XFx1MkRBOC1cXHUyREFFXFx1MkRCMC1cXHUyREI2XFx1MkRCOC1cXHUyREJFXFx1MkRDMC1cXHUyREM2XFx1MkRDOC1cXHUyRENFXFx1MkREMC1cXHUyREQ2XFx1MkREOC1cXHUyRERFXFx1MkRFMC1cXHUyREZGXFx1MzAwNS1cXHUzMDA3XFx1MzAyMS1cXHUzMDJGXFx1MzAzMS1cXHUzMDM1XFx1MzAzOC1cXHUzMDNDXFx1MzA0MS1cXHUzMDk2XFx1MzA5OS1cXHUzMDlGXFx1MzBBMS1cXHUzMEZBXFx1MzBGQy1cXHUzMEZGXFx1MzEwNS1cXHUzMTJEXFx1MzEzMS1cXHUzMThFXFx1MzFBMC1cXHUzMUJBXFx1MzFGMC1cXHUzMUZGXFx1MzQwMC1cXHU0REI1XFx1NEUwMC1cXHU5RkNDXFx1QTAwMC1cXHVBNDhDXFx1QTREMC1cXHVBNEZEXFx1QTUwMC1cXHVBNjBDXFx1QTYxMC1cXHVBNjJCXFx1QTY0MC1cXHVBNjZGXFx1QTY3NC1cXHVBNjdEXFx1QTY3Ri1cXHVBNjlEXFx1QTY5Ri1cXHVBNkYxXFx1QTcxNy1cXHVBNzFGXFx1QTcyMi1cXHVBNzg4XFx1QTc4Qi1cXHVBNzhFXFx1QTc5MC1cXHVBN0FEXFx1QTdCMFxcdUE3QjFcXHVBN0Y3LVxcdUE4MjdcXHVBODQwLVxcdUE4NzNcXHVBODgwLVxcdUE4QzRcXHVBOEQwLVxcdUE4RDlcXHVBOEUwLVxcdUE4RjdcXHVBOEZCXFx1QTkwMC1cXHVBOTJEXFx1QTkzMC1cXHVBOTUzXFx1QTk2MC1cXHVBOTdDXFx1QTk4MC1cXHVBOUMwXFx1QTlDRi1cXHVBOUQ5XFx1QTlFMC1cXHVBOUZFXFx1QUEwMC1cXHVBQTM2XFx1QUE0MC1cXHVBQTREXFx1QUE1MC1cXHVBQTU5XFx1QUE2MC1cXHVBQTc2XFx1QUE3QS1cXHVBQUMyXFx1QUFEQi1cXHVBQUREXFx1QUFFMC1cXHVBQUVGXFx1QUFGMi1cXHVBQUY2XFx1QUIwMS1cXHVBQjA2XFx1QUIwOS1cXHVBQjBFXFx1QUIxMS1cXHVBQjE2XFx1QUIyMC1cXHVBQjI2XFx1QUIyOC1cXHVBQjJFXFx1QUIzMC1cXHVBQjVBXFx1QUI1Qy1cXHVBQjVGXFx1QUI2NFxcdUFCNjVcXHVBQkMwLVxcdUFCRUFcXHVBQkVDXFx1QUJFRFxcdUFCRjAtXFx1QUJGOVxcdUFDMDAtXFx1RDdBM1xcdUQ3QjAtXFx1RDdDNlxcdUQ3Q0ItXFx1RDdGQlxcdUY5MDAtXFx1RkE2RFxcdUZBNzAtXFx1RkFEOVxcdUZCMDAtXFx1RkIwNlxcdUZCMTMtXFx1RkIxN1xcdUZCMUQtXFx1RkIyOFxcdUZCMkEtXFx1RkIzNlxcdUZCMzgtXFx1RkIzQ1xcdUZCM0VcXHVGQjQwXFx1RkI0MVxcdUZCNDNcXHVGQjQ0XFx1RkI0Ni1cXHVGQkIxXFx1RkJEMy1cXHVGRDNEXFx1RkQ1MC1cXHVGRDhGXFx1RkQ5Mi1cXHVGREM3XFx1RkRGMC1cXHVGREZCXFx1RkUwMC1cXHVGRTBGXFx1RkUyMC1cXHVGRTJEXFx1RkUzM1xcdUZFMzRcXHVGRTRELVxcdUZFNEZcXHVGRTcwLVxcdUZFNzRcXHVGRTc2LVxcdUZFRkNcXHVGRjEwLVxcdUZGMTlcXHVGRjIxLVxcdUZGM0FcXHVGRjNGXFx1RkY0MS1cXHVGRjVBXFx1RkY2Ni1cXHVGRkJFXFx1RkZDMi1cXHVGRkM3XFx1RkZDQS1cXHVGRkNGXFx1RkZEMi1cXHVGRkQ3XFx1RkZEQS1cXHVGRkRDXXxcXHVEODAwW1xcdURDMDAtXFx1REMwQlxcdURDMEQtXFx1REMyNlxcdURDMjgtXFx1REMzQVxcdURDM0NcXHVEQzNEXFx1REMzRi1cXHVEQzREXFx1REM1MC1cXHVEQzVEXFx1REM4MC1cXHVEQ0ZBXFx1REQ0MC1cXHVERDc0XFx1RERGRFxcdURFODAtXFx1REU5Q1xcdURFQTAtXFx1REVEMFxcdURFRTBcXHVERjAwLVxcdURGMUZcXHVERjMwLVxcdURGNEFcXHVERjUwLVxcdURGN0FcXHVERjgwLVxcdURGOURcXHVERkEwLVxcdURGQzNcXHVERkM4LVxcdURGQ0ZcXHVERkQxLVxcdURGRDVdfFxcdUQ4MDFbXFx1REMwMC1cXHVEQzlEXFx1RENBMC1cXHVEQ0E5XFx1REQwMC1cXHVERDI3XFx1REQzMC1cXHVERDYzXFx1REUwMC1cXHVERjM2XFx1REY0MC1cXHVERjU1XFx1REY2MC1cXHVERjY3XXxcXHVEODAyW1xcdURDMDAtXFx1REMwNVxcdURDMDhcXHVEQzBBLVxcdURDMzVcXHVEQzM3XFx1REMzOFxcdURDM0NcXHVEQzNGLVxcdURDNTVcXHVEQzYwLVxcdURDNzZcXHVEQzgwLVxcdURDOUVcXHVERDAwLVxcdUREMTVcXHVERDIwLVxcdUREMzlcXHVERDgwLVxcdUREQjdcXHVEREJFXFx1RERCRlxcdURFMDAtXFx1REUwM1xcdURFMDVcXHVERTA2XFx1REUwQy1cXHVERTEzXFx1REUxNS1cXHVERTE3XFx1REUxOS1cXHVERTMzXFx1REUzOC1cXHVERTNBXFx1REUzRlxcdURFNjAtXFx1REU3Q1xcdURFODAtXFx1REU5Q1xcdURFQzAtXFx1REVDN1xcdURFQzktXFx1REVFNlxcdURGMDAtXFx1REYzNVxcdURGNDAtXFx1REY1NVxcdURGNjAtXFx1REY3MlxcdURGODAtXFx1REY5MV18XFx1RDgwM1tcXHVEQzAwLVxcdURDNDhdfFxcdUQ4MDRbXFx1REMwMC1cXHVEQzQ2XFx1REM2Ni1cXHVEQzZGXFx1REM3Ri1cXHVEQ0JBXFx1RENEMC1cXHVEQ0U4XFx1RENGMC1cXHVEQ0Y5XFx1REQwMC1cXHVERDM0XFx1REQzNi1cXHVERDNGXFx1REQ1MC1cXHVERDczXFx1REQ3NlxcdUREODAtXFx1RERDNFxcdURERDAtXFx1REREQVxcdURFMDAtXFx1REUxMVxcdURFMTMtXFx1REUzN1xcdURFQjAtXFx1REVFQVxcdURFRjAtXFx1REVGOVxcdURGMDEtXFx1REYwM1xcdURGMDUtXFx1REYwQ1xcdURGMEZcXHVERjEwXFx1REYxMy1cXHVERjI4XFx1REYyQS1cXHVERjMwXFx1REYzMlxcdURGMzNcXHVERjM1LVxcdURGMzlcXHVERjNDLVxcdURGNDRcXHVERjQ3XFx1REY0OFxcdURGNEItXFx1REY0RFxcdURGNTdcXHVERjVELVxcdURGNjNcXHVERjY2LVxcdURGNkNcXHVERjcwLVxcdURGNzRdfFxcdUQ4MDVbXFx1REM4MC1cXHVEQ0M1XFx1RENDN1xcdURDRDAtXFx1RENEOVxcdUREODAtXFx1RERCNVxcdUREQjgtXFx1RERDMFxcdURFMDAtXFx1REU0MFxcdURFNDRcXHVERTUwLVxcdURFNTlcXHVERTgwLVxcdURFQjdcXHVERUMwLVxcdURFQzldfFxcdUQ4MDZbXFx1RENBMC1cXHVEQ0U5XFx1RENGRlxcdURFQzAtXFx1REVGOF18XFx1RDgwOFtcXHVEQzAwLVxcdURGOThdfFxcdUQ4MDlbXFx1REMwMC1cXHVEQzZFXXxbXFx1RDgwQ1xcdUQ4NDAtXFx1RDg2OFxcdUQ4NkEtXFx1RDg2Q11bXFx1REMwMC1cXHVERkZGXXxcXHVEODBEW1xcdURDMDAtXFx1REMyRV18XFx1RDgxQVtcXHVEQzAwLVxcdURFMzhcXHVERTQwLVxcdURFNUVcXHVERTYwLVxcdURFNjlcXHVERUQwLVxcdURFRURcXHVERUYwLVxcdURFRjRcXHVERjAwLVxcdURGMzZcXHVERjQwLVxcdURGNDNcXHVERjUwLVxcdURGNTlcXHVERjYzLVxcdURGNzdcXHVERjdELVxcdURGOEZdfFxcdUQ4MUJbXFx1REYwMC1cXHVERjQ0XFx1REY1MC1cXHVERjdFXFx1REY4Ri1cXHVERjlGXXxcXHVEODJDW1xcdURDMDBcXHVEQzAxXXxcXHVEODJGW1xcdURDMDAtXFx1REM2QVxcdURDNzAtXFx1REM3Q1xcdURDODAtXFx1REM4OFxcdURDOTAtXFx1REM5OVxcdURDOURcXHVEQzlFXXxcXHVEODM0W1xcdURENjUtXFx1REQ2OVxcdURENkQtXFx1REQ3MlxcdUREN0ItXFx1REQ4MlxcdUREODUtXFx1REQ4QlxcdUREQUEtXFx1RERBRFxcdURFNDItXFx1REU0NF18XFx1RDgzNVtcXHVEQzAwLVxcdURDNTRcXHVEQzU2LVxcdURDOUNcXHVEQzlFXFx1REM5RlxcdURDQTJcXHVEQ0E1XFx1RENBNlxcdURDQTktXFx1RENBQ1xcdURDQUUtXFx1RENCOVxcdURDQkJcXHVEQ0JELVxcdURDQzNcXHVEQ0M1LVxcdUREMDVcXHVERDA3LVxcdUREMEFcXHVERDBELVxcdUREMTRcXHVERDE2LVxcdUREMUNcXHVERDFFLVxcdUREMzlcXHVERDNCLVxcdUREM0VcXHVERDQwLVxcdURENDRcXHVERDQ2XFx1REQ0QS1cXHVERDUwXFx1REQ1Mi1cXHVERUE1XFx1REVBOC1cXHVERUMwXFx1REVDMi1cXHVERURBXFx1REVEQy1cXHVERUZBXFx1REVGQy1cXHVERjE0XFx1REYxNi1cXHVERjM0XFx1REYzNi1cXHVERjRFXFx1REY1MC1cXHVERjZFXFx1REY3MC1cXHVERjg4XFx1REY4QS1cXHVERkE4XFx1REZBQS1cXHVERkMyXFx1REZDNC1cXHVERkNCXFx1REZDRS1cXHVERkZGXXxcXHVEODNBW1xcdURDMDAtXFx1RENDNFxcdURDRDAtXFx1RENENl18XFx1RDgzQltcXHVERTAwLVxcdURFMDNcXHVERTA1LVxcdURFMUZcXHVERTIxXFx1REUyMlxcdURFMjRcXHVERTI3XFx1REUyOS1cXHVERTMyXFx1REUzNC1cXHVERTM3XFx1REUzOVxcdURFM0JcXHVERTQyXFx1REU0N1xcdURFNDlcXHVERTRCXFx1REU0RC1cXHVERTRGXFx1REU1MVxcdURFNTJcXHVERTU0XFx1REU1N1xcdURFNTlcXHVERTVCXFx1REU1RFxcdURFNUZcXHVERTYxXFx1REU2MlxcdURFNjRcXHVERTY3LVxcdURFNkFcXHVERTZDLVxcdURFNzJcXHVERTc0LVxcdURFNzdcXHVERTc5LVxcdURFN0NcXHVERTdFXFx1REU4MC1cXHVERTg5XFx1REU4Qi1cXHVERTlCXFx1REVBMS1cXHVERUEzXFx1REVBNS1cXHVERUE5XFx1REVBQi1cXHVERUJCXXxcXHVEODY5W1xcdURDMDAtXFx1REVENlxcdURGMDAtXFx1REZGRl18XFx1RDg2RFtcXHVEQzAwLVxcdURGMzRcXHVERjQwLVxcdURGRkZdfFxcdUQ4NkVbXFx1REMwMC1cXHVEQzFEXXxcXHVEODdFW1xcdURDMDAtXFx1REUxRF18XFx1REI0MFtcXHVERDAwLVxcdURERUZdL1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBpc0RlY2ltYWxEaWdpdChjaCkge1xuICAgICAgICByZXR1cm4gMHgzMCA8PSBjaCAmJiBjaCA8PSAweDM5OyAgLy8gMC4uOVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzSGV4RGlnaXQoY2gpIHtcbiAgICAgICAgcmV0dXJuIDB4MzAgPD0gY2ggJiYgY2ggPD0gMHgzOSB8fCAgLy8gMC4uOVxuICAgICAgICAgICAgMHg2MSA8PSBjaCAmJiBjaCA8PSAweDY2IHx8ICAgICAvLyBhLi5mXG4gICAgICAgICAgICAweDQxIDw9IGNoICYmIGNoIDw9IDB4NDY7ICAgICAgIC8vIEEuLkZcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc09jdGFsRGlnaXQoY2gpIHtcbiAgICAgICAgcmV0dXJuIGNoID49IDB4MzAgJiYgY2ggPD0gMHgzNzsgIC8vIDAuLjdcbiAgICB9XG5cbiAgICAvLyA3LjIgV2hpdGUgU3BhY2VcblxuICAgIE5PTl9BU0NJSV9XSElURVNQQUNFUyA9IFtcbiAgICAgICAgMHgxNjgwLCAweDE4MEUsXG4gICAgICAgIDB4MjAwMCwgMHgyMDAxLCAweDIwMDIsIDB4MjAwMywgMHgyMDA0LCAweDIwMDUsIDB4MjAwNiwgMHgyMDA3LCAweDIwMDgsIDB4MjAwOSwgMHgyMDBBLFxuICAgICAgICAweDIwMkYsIDB4MjA1RixcbiAgICAgICAgMHgzMDAwLFxuICAgICAgICAweEZFRkZcbiAgICBdO1xuXG4gICAgZnVuY3Rpb24gaXNXaGl0ZVNwYWNlKGNoKSB7XG4gICAgICAgIHJldHVybiBjaCA9PT0gMHgyMCB8fCBjaCA9PT0gMHgwOSB8fCBjaCA9PT0gMHgwQiB8fCBjaCA9PT0gMHgwQyB8fCBjaCA9PT0gMHhBMCB8fFxuICAgICAgICAgICAgY2ggPj0gMHgxNjgwICYmIE5PTl9BU0NJSV9XSElURVNQQUNFUy5pbmRleE9mKGNoKSA+PSAwO1xuICAgIH1cblxuICAgIC8vIDcuMyBMaW5lIFRlcm1pbmF0b3JzXG5cbiAgICBmdW5jdGlvbiBpc0xpbmVUZXJtaW5hdG9yKGNoKSB7XG4gICAgICAgIHJldHVybiBjaCA9PT0gMHgwQSB8fCBjaCA9PT0gMHgwRCB8fCBjaCA9PT0gMHgyMDI4IHx8IGNoID09PSAweDIwMjk7XG4gICAgfVxuXG4gICAgLy8gNy42IElkZW50aWZpZXIgTmFtZXMgYW5kIElkZW50aWZpZXJzXG5cbiAgICBmdW5jdGlvbiBmcm9tQ29kZVBvaW50KGNwKSB7XG4gICAgICAgIGlmIChjcCA8PSAweEZGRkYpIHsgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoY3ApOyB9XG4gICAgICAgIHZhciBjdTEgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKE1hdGguZmxvb3IoKGNwIC0gMHgxMDAwMCkgLyAweDQwMCkgKyAweEQ4MDApO1xuICAgICAgICB2YXIgY3UyID0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGNwIC0gMHgxMDAwMCkgJSAweDQwMCkgKyAweERDMDApO1xuICAgICAgICByZXR1cm4gY3UxICsgY3UyO1xuICAgIH1cblxuICAgIElERU5USUZJRVJfU1RBUlQgPSBuZXcgQXJyYXkoMHg4MCk7XG4gICAgZm9yKGNoID0gMDsgY2ggPCAweDgwOyArK2NoKSB7XG4gICAgICAgIElERU5USUZJRVJfU1RBUlRbY2hdID1cbiAgICAgICAgICAgIGNoID49IDB4NjEgJiYgY2ggPD0gMHg3QSB8fCAgLy8gYS4uelxuICAgICAgICAgICAgY2ggPj0gMHg0MSAmJiBjaCA8PSAweDVBIHx8ICAvLyBBLi5aXG4gICAgICAgICAgICBjaCA9PT0gMHgyNCB8fCBjaCA9PT0gMHg1RjsgIC8vICQgKGRvbGxhcikgYW5kIF8gKHVuZGVyc2NvcmUpXG4gICAgfVxuXG4gICAgSURFTlRJRklFUl9QQVJUID0gbmV3IEFycmF5KDB4ODApO1xuICAgIGZvcihjaCA9IDA7IGNoIDwgMHg4MDsgKytjaCkge1xuICAgICAgICBJREVOVElGSUVSX1BBUlRbY2hdID1cbiAgICAgICAgICAgIGNoID49IDB4NjEgJiYgY2ggPD0gMHg3QSB8fCAgLy8gYS4uelxuICAgICAgICAgICAgY2ggPj0gMHg0MSAmJiBjaCA8PSAweDVBIHx8ICAvLyBBLi5aXG4gICAgICAgICAgICBjaCA+PSAweDMwICYmIGNoIDw9IDB4MzkgfHwgIC8vIDAuLjlcbiAgICAgICAgICAgIGNoID09PSAweDI0IHx8IGNoID09PSAweDVGOyAgLy8gJCAoZG9sbGFyKSBhbmQgXyAodW5kZXJzY29yZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0lkZW50aWZpZXJTdGFydEVTNShjaCkge1xuICAgICAgICByZXR1cm4gY2ggPCAweDgwID8gSURFTlRJRklFUl9TVEFSVFtjaF0gOiBFUzVSZWdleC5Ob25Bc2NpaUlkZW50aWZpZXJTdGFydC50ZXN0KGZyb21Db2RlUG9pbnQoY2gpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0lkZW50aWZpZXJQYXJ0RVM1KGNoKSB7XG4gICAgICAgIHJldHVybiBjaCA8IDB4ODAgPyBJREVOVElGSUVSX1BBUlRbY2hdIDogRVM1UmVnZXguTm9uQXNjaWlJZGVudGlmaWVyUGFydC50ZXN0KGZyb21Db2RlUG9pbnQoY2gpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0lkZW50aWZpZXJTdGFydEVTNihjaCkge1xuICAgICAgICByZXR1cm4gY2ggPCAweDgwID8gSURFTlRJRklFUl9TVEFSVFtjaF0gOiBFUzZSZWdleC5Ob25Bc2NpaUlkZW50aWZpZXJTdGFydC50ZXN0KGZyb21Db2RlUG9pbnQoY2gpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0lkZW50aWZpZXJQYXJ0RVM2KGNoKSB7XG4gICAgICAgIHJldHVybiBjaCA8IDB4ODAgPyBJREVOVElGSUVSX1BBUlRbY2hdIDogRVM2UmVnZXguTm9uQXNjaWlJZGVudGlmaWVyUGFydC50ZXN0KGZyb21Db2RlUG9pbnQoY2gpKTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAgICAgaXNEZWNpbWFsRGlnaXQ6IGlzRGVjaW1hbERpZ2l0LFxuICAgICAgICBpc0hleERpZ2l0OiBpc0hleERpZ2l0LFxuICAgICAgICBpc09jdGFsRGlnaXQ6IGlzT2N0YWxEaWdpdCxcbiAgICAgICAgaXNXaGl0ZVNwYWNlOiBpc1doaXRlU3BhY2UsXG4gICAgICAgIGlzTGluZVRlcm1pbmF0b3I6IGlzTGluZVRlcm1pbmF0b3IsXG4gICAgICAgIGlzSWRlbnRpZmllclN0YXJ0RVM1OiBpc0lkZW50aWZpZXJTdGFydEVTNSxcbiAgICAgICAgaXNJZGVudGlmaWVyUGFydEVTNTogaXNJZGVudGlmaWVyUGFydEVTNSxcbiAgICAgICAgaXNJZGVudGlmaWVyU3RhcnRFUzY6IGlzSWRlbnRpZmllclN0YXJ0RVM2LFxuICAgICAgICBpc0lkZW50aWZpZXJQYXJ0RVM2OiBpc0lkZW50aWZpZXJQYXJ0RVM2XG4gICAgfTtcbn0oKSk7XG4vKiB2aW06IHNldCBzdz00IHRzPTQgZXQgdHc9ODAgOiAqL1xuIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuIiwiLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb3ZlckFyZztcbiIsIi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhc3luY1RhZyA9ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIHByb3h5VGFnID0gJ1tvYmplY3QgUHJveHldJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1NvdXJjZTtcbiIsInZhciBtYXBDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVDbGVhcicpLFxuICAgIG1hcENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVEZWxldGUnKSxcbiAgICBtYXBDYWNoZUdldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlR2V0JyksXG4gICAgbWFwQ2FjaGVIYXMgPSByZXF1aXJlKCcuL19tYXBDYWNoZUhhcycpLFxuICAgIG1hcENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENhY2hlQ2xlYXI7XG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwQ2FjaGVHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwQ2FjaGVIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwQ2FjaGU7XG4iLCJ2YXIgYmFzZUFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnblZhbHVlJyksXG4gICAgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQXNzaWducyBgdmFsdWVgIHRvIGBrZXlgIG9mIGBvYmplY3RgIGlmIHRoZSBleGlzdGluZyB2YWx1ZSBpcyBub3QgZXF1aXZhbGVudFxuICogdXNpbmcgW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGZvciBlcXVhbGl0eSBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV07XG4gIGlmICghKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGVxKG9ialZhbHVlLCB2YWx1ZSkpIHx8XG4gICAgICAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzaWduVmFsdWU7XG4iLCJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19kZWZpbmVQcm9wZXJ0eScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBhc3NpZ25WYWx1ZWAgYW5kIGBhc3NpZ25NZXJnZVZhbHVlYCB3aXRob3V0XG4gKiB2YWx1ZSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5ID09ICdfX3Byb3RvX18nICYmIGRlZmluZVByb3BlcnR5KSB7XG4gICAgZGVmaW5lUHJvcGVydHkob2JqZWN0LCBrZXksIHtcbiAgICAgICdjb25maWd1cmFibGUnOiB0cnVlLFxuICAgICAgJ2VudW1lcmFibGUnOiB0cnVlLFxuICAgICAgJ3ZhbHVlJzogdmFsdWUsXG4gICAgICAnd3JpdGFibGUnOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VBc3NpZ25WYWx1ZTtcbiIsInZhciBiYXNlVGltZXMgPSByZXF1aXJlKCcuL19iYXNlVGltZXMnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSksXG4gICAgICBpc0FyZyA9ICFpc0FyciAmJiBpc0FyZ3VtZW50cyh2YWx1ZSksXG4gICAgICBpc0J1ZmYgPSAhaXNBcnIgJiYgIWlzQXJnICYmIGlzQnVmZmVyKHZhbHVlKSxcbiAgICAgIGlzVHlwZSA9ICFpc0FyciAmJiAhaXNBcmcgJiYgIWlzQnVmZiAmJiBpc1R5cGVkQXJyYXkodmFsdWUpLFxuICAgICAgc2tpcEluZGV4ZXMgPSBpc0FyciB8fCBpc0FyZyB8fCBpc0J1ZmYgfHwgaXNUeXBlLFxuICAgICAgcmVzdWx0ID0gc2tpcEluZGV4ZXMgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpIDogW10sXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKFxuICAgICAgICAgICAvLyBTYWZhcmkgOSBoYXMgZW51bWVyYWJsZSBgYXJndW1lbnRzLmxlbmd0aGAgaW4gc3RyaWN0IG1vZGUuXG4gICAgICAgICAgIGtleSA9PSAnbGVuZ3RoJyB8fFxuICAgICAgICAgICAvLyBOb2RlLmpzIDAuMTAgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gYnVmZmVycy5cbiAgICAgICAgICAgKGlzQnVmZiAmJiAoa2V5ID09ICdvZmZzZXQnIHx8IGtleSA9PSAncGFyZW50JykpIHx8XG4gICAgICAgICAgIC8vIFBoYW50b21KUyAyIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIHR5cGVkIGFycmF5cy5cbiAgICAgICAgICAgKGlzVHlwZSAmJiAoa2V5ID09ICdidWZmZXInIHx8IGtleSA9PSAnYnl0ZUxlbmd0aCcgfHwga2V5ID09ICdieXRlT2Zmc2V0JykpIHx8XG4gICAgICAgICAgIC8vIFNraXAgaW5kZXggcHJvcGVydGllcy5cbiAgICAgICAgICAgaXNJbmRleChrZXksIGxlbmd0aClcbiAgICAgICAgKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlMaWtlS2V5cztcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpLFxuICAgIHN0dWJGYWxzZSA9IHJlcXVpcmUoJy4vc3R1YkZhbHNlJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0J1ZmZlcjtcbiIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxuICAgIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0xlbmd0aDtcbiIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlO1xuIiwidmFyIGFycmF5TGlrZUtleXMgPSByZXF1aXJlKCcuL19hcnJheUxpa2VLZXlzJyksXG4gICAgYmFzZUtleXNJbiA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzSW4nKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5c0luKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InLCAnYyddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKi9cbmZ1bmN0aW9uIGtleXNJbihvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCwgdHJ1ZSkgOiBiYXNlS2V5c0luKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5c0luO1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGEgbmV3IGVtcHR5IGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZW1wdHkgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBhcnJheXMgPSBfLnRpbWVzKDIsIF8uc3R1YkFycmF5KTtcbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXMpO1xuICogLy8gPT4gW1tdLCBbXV1cbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXNbMF0gPT09IGFycmF5c1sxXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBzdHViQXJyYXkoKSB7XG4gIHJldHVybiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViQXJyYXk7XG4iLCJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgZ2V0UHJvdG90eXBlID0gcmVxdWlyZSgnLi9fZ2V0UHJvdG90eXBlJyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKSxcbiAgICBzdHViQXJyYXkgPSByZXF1aXJlKCcuL3N0dWJBcnJheScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzSW4gPSAhbmF0aXZlR2V0U3ltYm9scyA/IHN0dWJBcnJheSA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHdoaWxlIChvYmplY3QpIHtcbiAgICBhcnJheVB1c2gocmVzdWx0LCBnZXRTeW1ib2xzKG9iamVjdCkpO1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZShvYmplY3QpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFN5bWJvbHNJbjtcbiIsIi8qKlxuICogQXBwZW5kcyB0aGUgZWxlbWVudHMgb2YgYHZhbHVlc2AgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFwcGVuZC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheVB1c2goYXJyYXksIHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBvZmZzZXQgPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtvZmZzZXQgKyBpbmRleF0gPSB2YWx1ZXNbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVB1c2g7XG4iLCJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRBbGxLZXlzYCBhbmQgYGdldEFsbEtleXNJbmAgd2hpY2ggdXNlc1xuICogYGtleXNGdW5jYCBhbmQgYHN5bWJvbHNGdW5jYCB0byBnZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3ltYm9sc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0Z1bmMsIHN5bWJvbHNGdW5jKSB7XG4gIHZhciByZXN1bHQgPSBrZXlzRnVuYyhvYmplY3QpO1xuICByZXR1cm4gaXNBcnJheShvYmplY3QpID8gcmVzdWx0IDogYXJyYXlQdXNoKHJlc3VsdCwgc3ltYm9sc0Z1bmMob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldEFsbEtleXM7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFNldCA9IGdldE5hdGl2ZShyb290LCAnU2V0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0O1xuIiwiLyoqXG4gKiBDb252ZXJ0cyBgc2V0YCB0byBhbiBhcnJheSBvZiBpdHMgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBzZXRUb0FycmF5KHNldCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KHNldC5zaXplKTtcblxuICBzZXQuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRUb0FycmF5O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIG1hcCA9IHtcblx0XCIuL3Nwcml0ZS5zdmdcIjogOTNcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSA5MjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvc3ByaXRlLnN2Z1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImNvbnN0IHBhZ2VfX3ByZWxvYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZV9fcHJlbG9hZCcpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgJ2xvYWQnLFxuICAoKSA9PiB7XG4gICAgaWYgKHBhZ2VfX3ByZWxvYWQpIHBhZ2VfX3ByZWxvYWQuY2xhc3NMaXN0LnJlbW92ZSgncGFnZV9fcHJlbG9hZCcpO1xuICB9LFxuICBmYWxzZVxuKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwidmFyIE1FVEEgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgc2V0RGVzYyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaWQgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uIChpdCkge1xuICBzZXREZXNjKGl0LCBNRVRBLCB7IHZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSB9KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpIHNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiBNRVRBLFxuICBORUVEOiBmYWxzZSxcbiAgZmFzdEtleTogZmFzdEtleSxcbiAgZ2V0V2VhazogZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuIiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgcmVzdWx0ID0gZ2V0S2V5cyhpdCk7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZiAoZ2V0U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdCk7XG4gICAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChzeW1ib2xzLmxlbmd0aCA+IGkpIGlmIChpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbiIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG4iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcbiIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG4iLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4iLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGdPUE4gPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmY7XG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uIChpdCkge1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcbiIsInZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuIiwicmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvcicpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZG9uZSwgdmFsdWUpIHtcbiAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmUgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcbiIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIHBvcykge1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICAgIHZhciBpID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIGwgPSBzLmxlbmd0aDtcbiAgICB2YXIgYSwgYjtcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSBsKSByZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldCA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvciA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgaXRlckZuID0gZ2V0KGl0KTtcbiAgaWYgKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIHJldHVybiBhbk9iamVjdChpdGVyRm4uY2FsbChpdCkpO1xufTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQVJHID0gY29mKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmtleXMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5rZXlzO1xuIiwiLy8gMTkuMS4yLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpIHtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuIiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBleGVjKSB7XG4gIHZhciBmbiA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXTtcbiAgdmFyIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uICgpIHsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG4iLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKTtcbnZhciAkSlNPTiA9IGNvcmUuSlNPTiB8fCAoY29yZS5KU09OID0geyBzdHJpbmdpZnk6IEpTT04uc3RyaW5naWZ5IH0pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICByZXR1cm4gJEpTT04uc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmd1bWVudHMpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvZm9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5TeW1ib2xbJ2ZvciddO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZShQLCBEKSB7XG4gIHJldHVybiAkT2JqZWN0LmNyZWF0ZShQLCBEKTtcbn07XG4iLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHsgY3JlYXRlOiByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJykgfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9rZXlzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5c1wiKTtcblxudmFyIF9rZXlzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2tleXMpO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbnZhciBfZ2V0SXRlcmF0b3IyID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3JcIik7XG5cbnZhciBfZ2V0SXRlcmF0b3IzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0SXRlcmF0b3IyKTtcblxuZXhwb3J0cy5pc0JpbmRpbmcgPSBpc0JpbmRpbmc7XG5leHBvcnRzLmlzUmVmZXJlbmNlZCA9IGlzUmVmZXJlbmNlZDtcbmV4cG9ydHMuaXNWYWxpZElkZW50aWZpZXIgPSBpc1ZhbGlkSWRlbnRpZmllcjtcbmV4cG9ydHMuaXNMZXQgPSBpc0xldDtcbmV4cG9ydHMuaXNCbG9ja1Njb3BlZCA9IGlzQmxvY2tTY29wZWQ7XG5leHBvcnRzLmlzVmFyID0gaXNWYXI7XG5leHBvcnRzLmlzU3BlY2lmaWVyRGVmYXVsdCA9IGlzU3BlY2lmaWVyRGVmYXVsdDtcbmV4cG9ydHMuaXNTY29wZSA9IGlzU2NvcGU7XG5leHBvcnRzLmlzSW1tdXRhYmxlID0gaXNJbW11dGFibGU7XG5leHBvcnRzLmlzTm9kZXNFcXVpdmFsZW50ID0gaXNOb2Rlc0VxdWl2YWxlbnQ7XG5cbnZhciBfcmV0cmlldmVycyA9IHJlcXVpcmUoXCIuL3JldHJpZXZlcnNcIik7XG5cbnZhciBfZXN1dGlscyA9IHJlcXVpcmUoXCJlc3V0aWxzXCIpO1xuXG52YXIgX2VzdXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXN1dGlscyk7XG5cbnZhciBfaW5kZXggPSByZXF1aXJlKFwiLi9pbmRleFwiKTtcblxudmFyIHQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfaW5kZXgpO1xuXG52YXIgX2NvbnN0YW50cyA9IHJlcXVpcmUoXCIuL2NvbnN0YW50c1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gaXNCaW5kaW5nKG5vZGUsIHBhcmVudCkge1xuICB2YXIga2V5cyA9IF9yZXRyaWV2ZXJzLmdldEJpbmRpbmdJZGVudGlmaWVycy5rZXlzW3BhcmVudC50eXBlXTtcbiAgaWYgKGtleXMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgdmFyIHZhbCA9IHBhcmVudFtrZXldO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgICBpZiAodmFsLmluZGV4T2Yobm9kZSkgPj0gMCkgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodmFsID09PSBub2RlKSByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGlzUmVmZXJlbmNlZChub2RlLCBwYXJlbnQpIHtcbiAgc3dpdGNoIChwYXJlbnQudHlwZSkge1xuICAgIGNhc2UgXCJCaW5kRXhwcmVzc2lvblwiOlxuICAgICAgcmV0dXJuIHBhcmVudC5vYmplY3QgPT09IG5vZGUgfHwgcGFyZW50LmNhbGxlZSA9PT0gbm9kZTtcblxuICAgIGNhc2UgXCJNZW1iZXJFeHByZXNzaW9uXCI6XG4gICAgY2FzZSBcIkpTWE1lbWJlckV4cHJlc3Npb25cIjpcbiAgICAgIGlmIChwYXJlbnQucHJvcGVydHkgPT09IG5vZGUgJiYgcGFyZW50LmNvbXB1dGVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChwYXJlbnQub2JqZWN0ID09PSBub2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgY2FzZSBcIk1ldGFQcm9wZXJ0eVwiOlxuICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgY2FzZSBcIk9iamVjdFByb3BlcnR5XCI6XG4gICAgICBpZiAocGFyZW50LmtleSA9PT0gbm9kZSkge1xuICAgICAgICByZXR1cm4gcGFyZW50LmNvbXB1dGVkO1xuICAgICAgfVxuXG4gICAgY2FzZSBcIlZhcmlhYmxlRGVjbGFyYXRvclwiOlxuICAgICAgcmV0dXJuIHBhcmVudC5pZCAhPT0gbm9kZTtcblxuICAgIGNhc2UgXCJBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvblwiOlxuICAgIGNhc2UgXCJGdW5jdGlvbkRlY2xhcmF0aW9uXCI6XG4gICAgY2FzZSBcIkZ1bmN0aW9uRXhwcmVzc2lvblwiOlxuICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gcGFyZW50LnBhcmFtcywgX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvciksIF9pID0gMCwgX2l0ZXJhdG9yID0gX2lzQXJyYXkgPyBfaXRlcmF0b3IgOiAoMCwgX2dldEl0ZXJhdG9yMy5kZWZhdWx0KShfaXRlcmF0b3IpOzspIHtcbiAgICAgICAgdmFyIF9yZWY7XG5cbiAgICAgICAgaWYgKF9pc0FycmF5KSB7XG4gICAgICAgICAgaWYgKF9pID49IF9pdGVyYXRvci5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgIF9yZWYgPSBfaXRlcmF0b3JbX2krK107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX2kgPSBfaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgIGlmIChfaS5kb25lKSBicmVhaztcbiAgICAgICAgICBfcmVmID0gX2kudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcGFyYW0gPSBfcmVmO1xuXG4gICAgICAgIGlmIChwYXJhbSA9PT0gbm9kZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyZW50LmlkICE9PSBub2RlO1xuXG4gICAgY2FzZSBcIkV4cG9ydFNwZWNpZmllclwiOlxuICAgICAgaWYgKHBhcmVudC5zb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC5sb2NhbCA9PT0gbm9kZTtcbiAgICAgIH1cblxuICAgIGNhc2UgXCJFeHBvcnROYW1lc3BhY2VTcGVjaWZpZXJcIjpcbiAgICBjYXNlIFwiRXhwb3J0RGVmYXVsdFNwZWNpZmllclwiOlxuICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgY2FzZSBcIkpTWEF0dHJpYnV0ZVwiOlxuICAgICAgcmV0dXJuIHBhcmVudC5uYW1lICE9PSBub2RlO1xuXG4gICAgY2FzZSBcIkNsYXNzUHJvcGVydHlcIjpcbiAgICAgIGlmIChwYXJlbnQua2V5ID09PSBub2RlKSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQuY29tcHV0ZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGFyZW50LnZhbHVlID09PSBub2RlO1xuICAgICAgfVxuXG4gICAgY2FzZSBcIkltcG9ydERlZmF1bHRTcGVjaWZpZXJcIjpcbiAgICBjYXNlIFwiSW1wb3J0TmFtZXNwYWNlU3BlY2lmaWVyXCI6XG4gICAgY2FzZSBcIkltcG9ydFNwZWNpZmllclwiOlxuICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgY2FzZSBcIkNsYXNzRGVjbGFyYXRpb25cIjpcbiAgICBjYXNlIFwiQ2xhc3NFeHByZXNzaW9uXCI6XG4gICAgICByZXR1cm4gcGFyZW50LmlkICE9PSBub2RlO1xuXG4gICAgY2FzZSBcIkNsYXNzTWV0aG9kXCI6XG4gICAgY2FzZSBcIk9iamVjdE1ldGhvZFwiOlxuICAgICAgcmV0dXJuIHBhcmVudC5rZXkgPT09IG5vZGUgJiYgcGFyZW50LmNvbXB1dGVkO1xuXG4gICAgY2FzZSBcIkxhYmVsZWRTdGF0ZW1lbnRcIjpcbiAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIGNhc2UgXCJDYXRjaENsYXVzZVwiOlxuICAgICAgcmV0dXJuIHBhcmVudC5wYXJhbSAhPT0gbm9kZTtcblxuICAgIGNhc2UgXCJSZXN0RWxlbWVudFwiOlxuICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgY2FzZSBcIkFzc2lnbm1lbnRFeHByZXNzaW9uXCI6XG4gICAgICByZXR1cm4gcGFyZW50LnJpZ2h0ID09PSBub2RlO1xuXG4gICAgY2FzZSBcIkFzc2lnbm1lbnRQYXR0ZXJuXCI6XG4gICAgICByZXR1cm4gcGFyZW50LnJpZ2h0ID09PSBub2RlO1xuXG4gICAgY2FzZSBcIk9iamVjdFBhdHRlcm5cIjpcbiAgICBjYXNlIFwiQXJyYXlQYXR0ZXJuXCI6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZElkZW50aWZpZXIobmFtZSkge1xuICBpZiAodHlwZW9mIG5hbWUgIT09IFwic3RyaW5nXCIgfHwgX2VzdXRpbHMyLmRlZmF1bHQua2V5d29yZC5pc1Jlc2VydmVkV29yZEVTNihuYW1lLCB0cnVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIGlmIChuYW1lID09PSBcImF3YWl0XCIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIF9lc3V0aWxzMi5kZWZhdWx0LmtleXdvcmQuaXNJZGVudGlmaWVyTmFtZUVTNihuYW1lKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0xldChub2RlKSB7XG4gIHJldHVybiB0LmlzVmFyaWFibGVEZWNsYXJhdGlvbihub2RlKSAmJiAobm9kZS5raW5kICE9PSBcInZhclwiIHx8IG5vZGVbX2NvbnN0YW50cy5CTE9DS19TQ09QRURfU1lNQk9MXSk7XG59XG5cbmZ1bmN0aW9uIGlzQmxvY2tTY29wZWQobm9kZSkge1xuICByZXR1cm4gdC5pc0Z1bmN0aW9uRGVjbGFyYXRpb24obm9kZSkgfHwgdC5pc0NsYXNzRGVjbGFyYXRpb24obm9kZSkgfHwgdC5pc0xldChub2RlKTtcbn1cblxuZnVuY3Rpb24gaXNWYXIobm9kZSkge1xuICByZXR1cm4gdC5pc1ZhcmlhYmxlRGVjbGFyYXRpb24obm9kZSwgeyBraW5kOiBcInZhclwiIH0pICYmICFub2RlW19jb25zdGFudHMuQkxPQ0tfU0NPUEVEX1NZTUJPTF07XG59XG5cbmZ1bmN0aW9uIGlzU3BlY2lmaWVyRGVmYXVsdChzcGVjaWZpZXIpIHtcbiAgcmV0dXJuIHQuaXNJbXBvcnREZWZhdWx0U3BlY2lmaWVyKHNwZWNpZmllcikgfHwgdC5pc0lkZW50aWZpZXIoc3BlY2lmaWVyLmltcG9ydGVkIHx8IHNwZWNpZmllci5leHBvcnRlZCwgeyBuYW1lOiBcImRlZmF1bHRcIiB9KTtcbn1cblxuZnVuY3Rpb24gaXNTY29wZShub2RlLCBwYXJlbnQpIHtcbiAgaWYgKHQuaXNCbG9ja1N0YXRlbWVudChub2RlKSAmJiB0LmlzRnVuY3Rpb24ocGFyZW50LCB7IGJvZHk6IG5vZGUgfSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdC5pc1Njb3BhYmxlKG5vZGUpO1xufVxuXG5mdW5jdGlvbiBpc0ltbXV0YWJsZShub2RlKSB7XG4gIGlmICh0LmlzVHlwZShub2RlLnR5cGUsIFwiSW1tdXRhYmxlXCIpKSByZXR1cm4gdHJ1ZTtcblxuICBpZiAodC5pc0lkZW50aWZpZXIobm9kZSkpIHtcbiAgICBpZiAobm9kZS5uYW1lID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaXNOb2Rlc0VxdWl2YWxlbnQoYSwgYikge1xuICBpZiAoKHR5cGVvZiBhID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShhKSkgIT09IFwib2JqZWN0XCIgfHwgKHR5cGVvZiBhID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShhKSkgIT09IFwib2JqZWN0XCIgfHwgYSA9PSBudWxsIHx8IGIgPT0gbnVsbCkge1xuICAgIHJldHVybiBhID09PSBiO1xuICB9XG5cbiAgaWYgKGEudHlwZSAhPT0gYi50eXBlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGZpZWxkcyA9ICgwLCBfa2V5czIuZGVmYXVsdCkodC5OT0RFX0ZJRUxEU1thLnR5cGVdIHx8IGEudHlwZSk7XG5cbiAgZm9yICh2YXIgX2l0ZXJhdG9yMiA9IGZpZWxkcywgX2lzQXJyYXkyID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IyKSwgX2kyID0gMCwgX2l0ZXJhdG9yMiA9IF9pc0FycmF5MiA/IF9pdGVyYXRvcjIgOiAoMCwgX2dldEl0ZXJhdG9yMy5kZWZhdWx0KShfaXRlcmF0b3IyKTs7KSB7XG4gICAgdmFyIF9yZWYyO1xuXG4gICAgaWYgKF9pc0FycmF5Mikge1xuICAgICAgaWYgKF9pMiA+PSBfaXRlcmF0b3IyLmxlbmd0aCkgYnJlYWs7XG4gICAgICBfcmVmMiA9IF9pdGVyYXRvcjJbX2kyKytdO1xuICAgIH0gZWxzZSB7XG4gICAgICBfaTIgPSBfaXRlcmF0b3IyLm5leHQoKTtcbiAgICAgIGlmIChfaTIuZG9uZSkgYnJlYWs7XG4gICAgICBfcmVmMiA9IF9pMi52YWx1ZTtcbiAgICB9XG5cbiAgICB2YXIgZmllbGQgPSBfcmVmMjtcblxuICAgIGlmICgoMCwgX3R5cGVvZjMuZGVmYXVsdCkoYVtmaWVsZF0pICE9PSAoMCwgX3R5cGVvZjMuZGVmYXVsdCkoYltmaWVsZF0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYVtmaWVsZF0pKSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYltmaWVsZF0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChhW2ZpZWxkXS5sZW5ndGggIT09IGJbZmllbGRdLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYVtmaWVsZF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFpc05vZGVzRXF1aXZhbGVudChhW2ZpZWxkXVtpXSwgYltmaWVsZF1baV0pKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWlzTm9kZXNFcXVpdmFsZW50KGFbZmllbGRdLCBiW2ZpZWxkXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fd2tzLWV4dCcpLmYoJ2l0ZXJhdG9yJyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5TeW1ib2w7XG4iLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTtcbiIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnb2JzZXJ2YWJsZScpO1xuIiwiLypcbiAgQ29weXJpZ2h0IChDKSAyMDEzIFl1c3VrZSBTdXp1a2kgPHV0YXRhbmUudGVhQGdtYWlsLmNvbT5cblxuICBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiAgbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG5cbiAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4gICAgICBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodFxuICAgICAgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZVxuICAgICAgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cblxuICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxuICBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFXG4gIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4gIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCA8Q09QWVJJR0hUIEhPTERFUj4gQkUgTElBQkxFIEZPUiBBTllcbiAgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVNcbiAgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTO1xuICBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkRcbiAgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbiAgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GXG4gIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4qL1xuXG5cbihmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgZXhwb3J0cy5hc3QgPSByZXF1aXJlKCcuL2FzdCcpO1xuICAgIGV4cG9ydHMuY29kZSA9IHJlcXVpcmUoJy4vY29kZScpO1xuICAgIGV4cG9ydHMua2V5d29yZCA9IHJlcXVpcmUoJy4va2V5d29yZCcpO1xufSgpKTtcbi8qIHZpbTogc2V0IHN3PTQgdHM9NCBldCB0dz04MCA6ICovXG4iLCIvKlxuICBDb3B5cmlnaHQgKEMpIDIwMTMgWXVzdWtlIFN1enVraSA8dXRhdGFuZS50ZWFAZ21haWwuY29tPlxuXG4gIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuICBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcblxuICAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcbiAgICAgIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0XG4gICAgICBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlXG4gICAgICBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuXG4gIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgJ0FTIElTJ1xuICBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFXG4gIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4gIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCA8Q09QWVJJR0hUIEhPTERFUj4gQkUgTElBQkxFIEZPUiBBTllcbiAgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVNcbiAgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTO1xuICBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkRcbiAgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbiAgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GXG4gIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4qL1xuXG4oZnVuY3Rpb24gKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGZ1bmN0aW9uIGlzRXhwcmVzc2lvbihub2RlKSB7XG4gICAgICAgIGlmIChub2RlID09IG51bGwpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgIHN3aXRjaCAobm9kZS50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdBcnJheUV4cHJlc3Npb24nOlxuICAgICAgICAgICAgY2FzZSAnQXNzaWdubWVudEV4cHJlc3Npb24nOlxuICAgICAgICAgICAgY2FzZSAnQmluYXJ5RXhwcmVzc2lvbic6XG4gICAgICAgICAgICBjYXNlICdDYWxsRXhwcmVzc2lvbic6XG4gICAgICAgICAgICBjYXNlICdDb25kaXRpb25hbEV4cHJlc3Npb24nOlxuICAgICAgICAgICAgY2FzZSAnRnVuY3Rpb25FeHByZXNzaW9uJzpcbiAgICAgICAgICAgIGNhc2UgJ0lkZW50aWZpZXInOlxuICAgICAgICAgICAgY2FzZSAnTGl0ZXJhbCc6XG4gICAgICAgICAgICBjYXNlICdMb2dpY2FsRXhwcmVzc2lvbic6XG4gICAgICAgICAgICBjYXNlICdNZW1iZXJFeHByZXNzaW9uJzpcbiAgICAgICAgICAgIGNhc2UgJ05ld0V4cHJlc3Npb24nOlxuICAgICAgICAgICAgY2FzZSAnT2JqZWN0RXhwcmVzc2lvbic6XG4gICAgICAgICAgICBjYXNlICdTZXF1ZW5jZUV4cHJlc3Npb24nOlxuICAgICAgICAgICAgY2FzZSAnVGhpc0V4cHJlc3Npb24nOlxuICAgICAgICAgICAgY2FzZSAnVW5hcnlFeHByZXNzaW9uJzpcbiAgICAgICAgICAgIGNhc2UgJ1VwZGF0ZUV4cHJlc3Npb24nOlxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0l0ZXJhdGlvblN0YXRlbWVudChub2RlKSB7XG4gICAgICAgIGlmIChub2RlID09IG51bGwpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgIHN3aXRjaCAobm9kZS50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdEb1doaWxlU3RhdGVtZW50JzpcbiAgICAgICAgICAgIGNhc2UgJ0ZvckluU3RhdGVtZW50JzpcbiAgICAgICAgICAgIGNhc2UgJ0ZvclN0YXRlbWVudCc6XG4gICAgICAgICAgICBjYXNlICdXaGlsZVN0YXRlbWVudCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzU3RhdGVtZW50KG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUgPT0gbnVsbCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgICAgc3dpdGNoIChub2RlLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ0Jsb2NrU3RhdGVtZW50JzpcbiAgICAgICAgICAgIGNhc2UgJ0JyZWFrU3RhdGVtZW50JzpcbiAgICAgICAgICAgIGNhc2UgJ0NvbnRpbnVlU3RhdGVtZW50JzpcbiAgICAgICAgICAgIGNhc2UgJ0RlYnVnZ2VyU3RhdGVtZW50JzpcbiAgICAgICAgICAgIGNhc2UgJ0RvV2hpbGVTdGF0ZW1lbnQnOlxuICAgICAgICAgICAgY2FzZSAnRW1wdHlTdGF0ZW1lbnQnOlxuICAgICAgICAgICAgY2FzZSAnRXhwcmVzc2lvblN0YXRlbWVudCc6XG4gICAgICAgICAgICBjYXNlICdGb3JJblN0YXRlbWVudCc6XG4gICAgICAgICAgICBjYXNlICdGb3JTdGF0ZW1lbnQnOlxuICAgICAgICAgICAgY2FzZSAnSWZTdGF0ZW1lbnQnOlxuICAgICAgICAgICAgY2FzZSAnTGFiZWxlZFN0YXRlbWVudCc6XG4gICAgICAgICAgICBjYXNlICdSZXR1cm5TdGF0ZW1lbnQnOlxuICAgICAgICAgICAgY2FzZSAnU3dpdGNoU3RhdGVtZW50JzpcbiAgICAgICAgICAgIGNhc2UgJ1Rocm93U3RhdGVtZW50JzpcbiAgICAgICAgICAgIGNhc2UgJ1RyeVN0YXRlbWVudCc6XG4gICAgICAgICAgICBjYXNlICdWYXJpYWJsZURlY2xhcmF0aW9uJzpcbiAgICAgICAgICAgIGNhc2UgJ1doaWxlU3RhdGVtZW50JzpcbiAgICAgICAgICAgIGNhc2UgJ1dpdGhTdGF0ZW1lbnQnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc1NvdXJjZUVsZW1lbnQobm9kZSkge1xuICAgICAgcmV0dXJuIGlzU3RhdGVtZW50KG5vZGUpIHx8IG5vZGUgIT0gbnVsbCAmJiBub2RlLnR5cGUgPT09ICdGdW5jdGlvbkRlY2xhcmF0aW9uJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFpbGluZ1N0YXRlbWVudChub2RlKSB7XG4gICAgICAgIHN3aXRjaCAobm9kZS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ0lmU3RhdGVtZW50JzpcbiAgICAgICAgICAgIGlmIChub2RlLmFsdGVybmF0ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUuYWx0ZXJuYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5vZGUuY29uc2VxdWVudDtcblxuICAgICAgICBjYXNlICdMYWJlbGVkU3RhdGVtZW50JzpcbiAgICAgICAgY2FzZSAnRm9yU3RhdGVtZW50JzpcbiAgICAgICAgY2FzZSAnRm9ySW5TdGF0ZW1lbnQnOlxuICAgICAgICBjYXNlICdXaGlsZVN0YXRlbWVudCc6XG4gICAgICAgIGNhc2UgJ1dpdGhTdGF0ZW1lbnQnOlxuICAgICAgICAgICAgcmV0dXJuIG5vZGUuYm9keTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc1Byb2JsZW1hdGljSWZTdGF0ZW1lbnQobm9kZSkge1xuICAgICAgICB2YXIgY3VycmVudDtcblxuICAgICAgICBpZiAobm9kZS50eXBlICE9PSAnSWZTdGF0ZW1lbnQnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUuYWx0ZXJuYXRlID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50ID0gbm9kZS5jb25zZXF1ZW50O1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBpZiAoY3VycmVudC50eXBlID09PSAnSWZTdGF0ZW1lbnQnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQuYWx0ZXJuYXRlID09IG51bGwpICB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnQgPSB0cmFpbGluZ1N0YXRlbWVudChjdXJyZW50KTtcbiAgICAgICAgfSB3aGlsZSAoY3VycmVudCk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0ge1xuICAgICAgICBpc0V4cHJlc3Npb246IGlzRXhwcmVzc2lvbixcbiAgICAgICAgaXNTdGF0ZW1lbnQ6IGlzU3RhdGVtZW50LFxuICAgICAgICBpc0l0ZXJhdGlvblN0YXRlbWVudDogaXNJdGVyYXRpb25TdGF0ZW1lbnQsXG4gICAgICAgIGlzU291cmNlRWxlbWVudDogaXNTb3VyY2VFbGVtZW50LFxuICAgICAgICBpc1Byb2JsZW1hdGljSWZTdGF0ZW1lbnQ6IGlzUHJvYmxlbWF0aWNJZlN0YXRlbWVudCxcblxuICAgICAgICB0cmFpbGluZ1N0YXRlbWVudDogdHJhaWxpbmdTdGF0ZW1lbnRcbiAgICB9O1xufSgpKTtcbi8qIHZpbTogc2V0IHN3PTQgdHM9NCBldCB0dz04MCA6ICovXG4iLCIvKlxuICBDb3B5cmlnaHQgKEMpIDIwMTMgWXVzdWtlIFN1enVraSA8dXRhdGFuZS50ZWFAZ21haWwuY29tPlxuXG4gIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuICBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcblxuICAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcbiAgICAgIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0XG4gICAgICBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlXG4gICAgICBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuXG4gIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiXG4gIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcbiAgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0VcbiAgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIDxDT1BZUklHSFQgSE9MREVSPiBCRSBMSUFCTEUgRk9SIEFOWVxuICBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFU1xuICAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7XG4gIExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORFxuICBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuICAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0ZcbiAgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiovXG5cbihmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIGNvZGUgPSByZXF1aXJlKCcuL2NvZGUnKTtcblxuICAgIGZ1bmN0aW9uIGlzU3RyaWN0TW9kZVJlc2VydmVkV29yZEVTNihpZCkge1xuICAgICAgICBzd2l0Y2ggKGlkKSB7XG4gICAgICAgIGNhc2UgJ2ltcGxlbWVudHMnOlxuICAgICAgICBjYXNlICdpbnRlcmZhY2UnOlxuICAgICAgICBjYXNlICdwYWNrYWdlJzpcbiAgICAgICAgY2FzZSAncHJpdmF0ZSc6XG4gICAgICAgIGNhc2UgJ3Byb3RlY3RlZCc6XG4gICAgICAgIGNhc2UgJ3B1YmxpYyc6XG4gICAgICAgIGNhc2UgJ3N0YXRpYyc6XG4gICAgICAgIGNhc2UgJ2xldCc6XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzS2V5d29yZEVTNShpZCwgc3RyaWN0KSB7XG4gICAgICAgIC8vIHlpZWxkIHNob3VsZCBub3QgYmUgdHJlYXRlZCBhcyBrZXl3b3JkIHVuZGVyIG5vbi1zdHJpY3QgbW9kZS5cbiAgICAgICAgaWYgKCFzdHJpY3QgJiYgaWQgPT09ICd5aWVsZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNLZXl3b3JkRVM2KGlkLCBzdHJpY3QpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzS2V5d29yZEVTNihpZCwgc3RyaWN0KSB7XG4gICAgICAgIGlmIChzdHJpY3QgJiYgaXNTdHJpY3RNb2RlUmVzZXJ2ZWRXb3JkRVM2KGlkKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGlkLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gKGlkID09PSAnaWYnKSB8fCAoaWQgPT09ICdpbicpIHx8IChpZCA9PT0gJ2RvJyk7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJldHVybiAoaWQgPT09ICd2YXInKSB8fCAoaWQgPT09ICdmb3InKSB8fCAoaWQgPT09ICduZXcnKSB8fCAoaWQgPT09ICd0cnknKTtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgcmV0dXJuIChpZCA9PT0gJ3RoaXMnKSB8fCAoaWQgPT09ICdlbHNlJykgfHwgKGlkID09PSAnY2FzZScpIHx8XG4gICAgICAgICAgICAgICAgKGlkID09PSAndm9pZCcpIHx8IChpZCA9PT0gJ3dpdGgnKSB8fCAoaWQgPT09ICdlbnVtJyk7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgIHJldHVybiAoaWQgPT09ICd3aGlsZScpIHx8IChpZCA9PT0gJ2JyZWFrJykgfHwgKGlkID09PSAnY2F0Y2gnKSB8fFxuICAgICAgICAgICAgICAgIChpZCA9PT0gJ3Rocm93JykgfHwgKGlkID09PSAnY29uc3QnKSB8fCAoaWQgPT09ICd5aWVsZCcpIHx8XG4gICAgICAgICAgICAgICAgKGlkID09PSAnY2xhc3MnKSB8fCAoaWQgPT09ICdzdXBlcicpO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICByZXR1cm4gKGlkID09PSAncmV0dXJuJykgfHwgKGlkID09PSAndHlwZW9mJykgfHwgKGlkID09PSAnZGVsZXRlJykgfHxcbiAgICAgICAgICAgICAgICAoaWQgPT09ICdzd2l0Y2gnKSB8fCAoaWQgPT09ICdleHBvcnQnKSB8fCAoaWQgPT09ICdpbXBvcnQnKTtcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgcmV0dXJuIChpZCA9PT0gJ2RlZmF1bHQnKSB8fCAoaWQgPT09ICdmaW5hbGx5JykgfHwgKGlkID09PSAnZXh0ZW5kcycpO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICByZXR1cm4gKGlkID09PSAnZnVuY3Rpb24nKSB8fCAoaWQgPT09ICdjb250aW51ZScpIHx8IChpZCA9PT0gJ2RlYnVnZ2VyJyk7XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICByZXR1cm4gKGlkID09PSAnaW5zdGFuY2VvZicpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNSZXNlcnZlZFdvcmRFUzUoaWQsIHN0cmljdCkge1xuICAgICAgICByZXR1cm4gaWQgPT09ICdudWxsJyB8fCBpZCA9PT0gJ3RydWUnIHx8IGlkID09PSAnZmFsc2UnIHx8IGlzS2V5d29yZEVTNShpZCwgc3RyaWN0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc1Jlc2VydmVkV29yZEVTNihpZCwgc3RyaWN0KSB7XG4gICAgICAgIHJldHVybiBpZCA9PT0gJ251bGwnIHx8IGlkID09PSAndHJ1ZScgfHwgaWQgPT09ICdmYWxzZScgfHwgaXNLZXl3b3JkRVM2KGlkLCBzdHJpY3QpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzUmVzdHJpY3RlZFdvcmQoaWQpIHtcbiAgICAgICAgcmV0dXJuIGlkID09PSAnZXZhbCcgfHwgaWQgPT09ICdhcmd1bWVudHMnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzSWRlbnRpZmllck5hbWVFUzUoaWQpIHtcbiAgICAgICAgdmFyIGksIGl6LCBjaDtcblxuICAgICAgICBpZiAoaWQubGVuZ3RoID09PSAwKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gICAgICAgIGNoID0gaWQuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgaWYgKCFjb2RlLmlzSWRlbnRpZmllclN0YXJ0RVM1KGNoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMSwgaXogPSBpZC5sZW5ndGg7IGkgPCBpejsgKytpKSB7XG4gICAgICAgICAgICBjaCA9IGlkLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgICAgICBpZiAoIWNvZGUuaXNJZGVudGlmaWVyUGFydEVTNShjaCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVjb2RlVXRmMTYobGVhZCwgdHJhaWwpIHtcbiAgICAgICAgcmV0dXJuIChsZWFkIC0gMHhEODAwKSAqIDB4NDAwICsgKHRyYWlsIC0gMHhEQzAwKSArIDB4MTAwMDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNJZGVudGlmaWVyTmFtZUVTNihpZCkge1xuICAgICAgICB2YXIgaSwgaXosIGNoLCBsb3dDaCwgY2hlY2s7XG5cbiAgICAgICAgaWYgKGlkLmxlbmd0aCA9PT0gMCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAgICAgICBjaGVjayA9IGNvZGUuaXNJZGVudGlmaWVyU3RhcnRFUzY7XG4gICAgICAgIGZvciAoaSA9IDAsIGl6ID0gaWQubGVuZ3RoOyBpIDwgaXo7ICsraSkge1xuICAgICAgICAgICAgY2ggPSBpZC5jaGFyQ29kZUF0KGkpO1xuICAgICAgICAgICAgaWYgKDB4RDgwMCA8PSBjaCAmJiBjaCA8PSAweERCRkYpIHtcbiAgICAgICAgICAgICAgICArK2k7XG4gICAgICAgICAgICAgICAgaWYgKGkgPj0gaXopIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgICAgICAgICAgbG93Q2ggPSBpZC5jaGFyQ29kZUF0KGkpO1xuICAgICAgICAgICAgICAgIGlmICghKDB4REMwMCA8PSBsb3dDaCAmJiBsb3dDaCA8PSAweERGRkYpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2ggPSBkZWNvZGVVdGYxNihjaCwgbG93Q2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFjaGVjayhjaCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGVjayA9IGNvZGUuaXNJZGVudGlmaWVyUGFydEVTNjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0lkZW50aWZpZXJFUzUoaWQsIHN0cmljdCkge1xuICAgICAgICByZXR1cm4gaXNJZGVudGlmaWVyTmFtZUVTNShpZCkgJiYgIWlzUmVzZXJ2ZWRXb3JkRVM1KGlkLCBzdHJpY3QpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzSWRlbnRpZmllckVTNihpZCwgc3RyaWN0KSB7XG4gICAgICAgIHJldHVybiBpc0lkZW50aWZpZXJOYW1lRVM2KGlkKSAmJiAhaXNSZXNlcnZlZFdvcmRFUzYoaWQsIHN0cmljdCk7XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgICAgIGlzS2V5d29yZEVTNTogaXNLZXl3b3JkRVM1LFxuICAgICAgICBpc0tleXdvcmRFUzY6IGlzS2V5d29yZEVTNixcbiAgICAgICAgaXNSZXNlcnZlZFdvcmRFUzU6IGlzUmVzZXJ2ZWRXb3JkRVM1LFxuICAgICAgICBpc1Jlc2VydmVkV29yZEVTNjogaXNSZXNlcnZlZFdvcmRFUzYsXG4gICAgICAgIGlzUmVzdHJpY3RlZFdvcmQ6IGlzUmVzdHJpY3RlZFdvcmQsXG4gICAgICAgIGlzSWRlbnRpZmllck5hbWVFUzU6IGlzSWRlbnRpZmllck5hbWVFUzUsXG4gICAgICAgIGlzSWRlbnRpZmllck5hbWVFUzY6IGlzSWRlbnRpZmllck5hbWVFUzYsXG4gICAgICAgIGlzSWRlbnRpZmllckVTNTogaXNJZGVudGlmaWVyRVM1LFxuICAgICAgICBpc0lkZW50aWZpZXJFUzY6IGlzSWRlbnRpZmllckVTNlxuICAgIH07XG59KCkpO1xuLyogdmltOiBzZXQgc3c9NCB0cz00IGV0IHR3PTgwIDogKi9cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX21heFNhZmVJbnRlZ2VyID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9udW1iZXIvbWF4LXNhZmUtaW50ZWdlclwiKTtcblxudmFyIF9tYXhTYWZlSW50ZWdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXhTYWZlSW50ZWdlcik7XG5cbnZhciBfc3RyaW5naWZ5ID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeVwiKTtcblxudmFyIF9zdHJpbmdpZnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RyaW5naWZ5KTtcblxudmFyIF9nZXRJdGVyYXRvcjIgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvclwiKTtcblxudmFyIF9nZXRJdGVyYXRvcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRJdGVyYXRvcjIpO1xuXG5leHBvcnRzLnRvQ29tcHV0ZWRLZXkgPSB0b0NvbXB1dGVkS2V5O1xuZXhwb3J0cy50b1NlcXVlbmNlRXhwcmVzc2lvbiA9IHRvU2VxdWVuY2VFeHByZXNzaW9uO1xuZXhwb3J0cy50b0tleUFsaWFzID0gdG9LZXlBbGlhcztcbmV4cG9ydHMudG9JZGVudGlmaWVyID0gdG9JZGVudGlmaWVyO1xuZXhwb3J0cy50b0JpbmRpbmdJZGVudGlmaWVyTmFtZSA9IHRvQmluZGluZ0lkZW50aWZpZXJOYW1lO1xuZXhwb3J0cy50b1N0YXRlbWVudCA9IHRvU3RhdGVtZW50O1xuZXhwb3J0cy50b0V4cHJlc3Npb24gPSB0b0V4cHJlc3Npb247XG5leHBvcnRzLnRvQmxvY2sgPSB0b0Jsb2NrO1xuZXhwb3J0cy52YWx1ZVRvTm9kZSA9IHZhbHVlVG9Ob2RlO1xuXG52YXIgX2lzUGxhaW5PYmplY3QgPSByZXF1aXJlKFwibG9kYXNoL2lzUGxhaW5PYmplY3RcIik7XG5cbnZhciBfaXNQbGFpbk9iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1BsYWluT2JqZWN0KTtcblxudmFyIF9pc1JlZ0V4cCA9IHJlcXVpcmUoXCJsb2Rhc2gvaXNSZWdFeHBcIik7XG5cbnZhciBfaXNSZWdFeHAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNSZWdFeHApO1xuXG52YXIgX2luZGV4ID0gcmVxdWlyZShcIi4vaW5kZXhcIik7XG5cbnZhciB0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2luZGV4KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gdG9Db21wdXRlZEtleShub2RlKSB7XG4gIHZhciBrZXkgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG5vZGUua2V5IHx8IG5vZGUucHJvcGVydHk7XG5cbiAgaWYgKCFub2RlLmNvbXB1dGVkKSB7XG4gICAgaWYgKHQuaXNJZGVudGlmaWVyKGtleSkpIGtleSA9IHQuc3RyaW5nTGl0ZXJhbChrZXkubmFtZSk7XG4gIH1cbiAgcmV0dXJuIGtleTtcbn1cblxuZnVuY3Rpb24gZ2F0aGVyU2VxdWVuY2VFeHByZXNzaW9ucyhub2Rlcywgc2NvcGUsIGRlY2xhcnMpIHtcbiAgdmFyIGV4cHJzID0gW107XG4gIHZhciBlbnN1cmVMYXN0VW5kZWZpbmVkID0gdHJ1ZTtcblxuICBmb3IgKHZhciBfaXRlcmF0b3IgPSBub2RlcywgX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvciksIF9pID0gMCwgX2l0ZXJhdG9yID0gX2lzQXJyYXkgPyBfaXRlcmF0b3IgOiAoMCwgX2dldEl0ZXJhdG9yMy5kZWZhdWx0KShfaXRlcmF0b3IpOzspIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIGlmIChfaXNBcnJheSkge1xuICAgICAgaWYgKF9pID49IF9pdGVyYXRvci5sZW5ndGgpIGJyZWFrO1xuICAgICAgX3JlZiA9IF9pdGVyYXRvcltfaSsrXTtcbiAgICB9IGVsc2Uge1xuICAgICAgX2kgPSBfaXRlcmF0b3IubmV4dCgpO1xuICAgICAgaWYgKF9pLmRvbmUpIGJyZWFrO1xuICAgICAgX3JlZiA9IF9pLnZhbHVlO1xuICAgIH1cblxuICAgIHZhciBub2RlID0gX3JlZjtcblxuICAgIGVuc3VyZUxhc3RVbmRlZmluZWQgPSBmYWxzZTtcblxuICAgIGlmICh0LmlzRXhwcmVzc2lvbihub2RlKSkge1xuICAgICAgZXhwcnMucHVzaChub2RlKTtcbiAgICB9IGVsc2UgaWYgKHQuaXNFeHByZXNzaW9uU3RhdGVtZW50KG5vZGUpKSB7XG4gICAgICBleHBycy5wdXNoKG5vZGUuZXhwcmVzc2lvbik7XG4gICAgfSBlbHNlIGlmICh0LmlzVmFyaWFibGVEZWNsYXJhdGlvbihub2RlKSkge1xuICAgICAgaWYgKG5vZGUua2luZCAhPT0gXCJ2YXJcIikgcmV0dXJuO1xuXG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3IyID0gbm9kZS5kZWNsYXJhdGlvbnMsIF9pc0FycmF5MiA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yMiksIF9pMiA9IDAsIF9pdGVyYXRvcjIgPSBfaXNBcnJheTIgPyBfaXRlcmF0b3IyIDogKDAsIF9nZXRJdGVyYXRvcjMuZGVmYXVsdCkoX2l0ZXJhdG9yMik7Oykge1xuICAgICAgICB2YXIgX3JlZjI7XG5cbiAgICAgICAgaWYgKF9pc0FycmF5Mikge1xuICAgICAgICAgIGlmIChfaTIgPj0gX2l0ZXJhdG9yMi5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgIF9yZWYyID0gX2l0ZXJhdG9yMltfaTIrK107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX2kyID0gX2l0ZXJhdG9yMi5uZXh0KCk7XG4gICAgICAgICAgaWYgKF9pMi5kb25lKSBicmVhaztcbiAgICAgICAgICBfcmVmMiA9IF9pMi52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkZWNsYXIgPSBfcmVmMjtcblxuICAgICAgICB2YXIgYmluZGluZ3MgPSB0LmdldEJpbmRpbmdJZGVudGlmaWVycyhkZWNsYXIpO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gYmluZGluZ3MpIHtcbiAgICAgICAgICBkZWNsYXJzLnB1c2goe1xuICAgICAgICAgICAga2luZDogbm9kZS5raW5kLFxuICAgICAgICAgICAgaWQ6IGJpbmRpbmdzW2tleV1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkZWNsYXIuaW5pdCkge1xuICAgICAgICAgIGV4cHJzLnB1c2godC5hc3NpZ25tZW50RXhwcmVzc2lvbihcIj1cIiwgZGVjbGFyLmlkLCBkZWNsYXIuaW5pdCkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGVuc3VyZUxhc3RVbmRlZmluZWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodC5pc0lmU3RhdGVtZW50KG5vZGUpKSB7XG4gICAgICB2YXIgY29uc2VxdWVudCA9IG5vZGUuY29uc2VxdWVudCA/IGdhdGhlclNlcXVlbmNlRXhwcmVzc2lvbnMoW25vZGUuY29uc2VxdWVudF0sIHNjb3BlLCBkZWNsYXJzKSA6IHNjb3BlLmJ1aWxkVW5kZWZpbmVkTm9kZSgpO1xuICAgICAgdmFyIGFsdGVybmF0ZSA9IG5vZGUuYWx0ZXJuYXRlID8gZ2F0aGVyU2VxdWVuY2VFeHByZXNzaW9ucyhbbm9kZS5hbHRlcm5hdGVdLCBzY29wZSwgZGVjbGFycykgOiBzY29wZS5idWlsZFVuZGVmaW5lZE5vZGUoKTtcbiAgICAgIGlmICghY29uc2VxdWVudCB8fCAhYWx0ZXJuYXRlKSByZXR1cm47XG5cbiAgICAgIGV4cHJzLnB1c2godC5jb25kaXRpb25hbEV4cHJlc3Npb24obm9kZS50ZXN0LCBjb25zZXF1ZW50LCBhbHRlcm5hdGUpKTtcbiAgICB9IGVsc2UgaWYgKHQuaXNCbG9ja1N0YXRlbWVudChub2RlKSkge1xuICAgICAgdmFyIGJvZHkgPSBnYXRoZXJTZXF1ZW5jZUV4cHJlc3Npb25zKG5vZGUuYm9keSwgc2NvcGUsIGRlY2xhcnMpO1xuICAgICAgaWYgKCFib2R5KSByZXR1cm47XG5cbiAgICAgIGV4cHJzLnB1c2goYm9keSk7XG4gICAgfSBlbHNlIGlmICh0LmlzRW1wdHlTdGF0ZW1lbnQobm9kZSkpIHtcbiAgICAgIGVuc3VyZUxhc3RVbmRlZmluZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuc3VyZUxhc3RVbmRlZmluZWQpIHtcbiAgICBleHBycy5wdXNoKHNjb3BlLmJ1aWxkVW5kZWZpbmVkTm9kZSgpKTtcbiAgfVxuXG4gIGlmIChleHBycy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gZXhwcnNbMF07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHQuc2VxdWVuY2VFeHByZXNzaW9uKGV4cHJzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0b1NlcXVlbmNlRXhwcmVzc2lvbihub2Rlcywgc2NvcGUpIHtcbiAgaWYgKCFub2RlcyB8fCAhbm9kZXMubGVuZ3RoKSByZXR1cm47XG5cbiAgdmFyIGRlY2xhcnMgPSBbXTtcbiAgdmFyIHJlc3VsdCA9IGdhdGhlclNlcXVlbmNlRXhwcmVzc2lvbnMobm9kZXMsIHNjb3BlLCBkZWNsYXJzKTtcbiAgaWYgKCFyZXN1bHQpIHJldHVybjtcblxuICBmb3IgKHZhciBfaXRlcmF0b3IzID0gZGVjbGFycywgX2lzQXJyYXkzID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IzKSwgX2kzID0gMCwgX2l0ZXJhdG9yMyA9IF9pc0FycmF5MyA/IF9pdGVyYXRvcjMgOiAoMCwgX2dldEl0ZXJhdG9yMy5kZWZhdWx0KShfaXRlcmF0b3IzKTs7KSB7XG4gICAgdmFyIF9yZWYzO1xuXG4gICAgaWYgKF9pc0FycmF5Mykge1xuICAgICAgaWYgKF9pMyA+PSBfaXRlcmF0b3IzLmxlbmd0aCkgYnJlYWs7XG4gICAgICBfcmVmMyA9IF9pdGVyYXRvcjNbX2kzKytdO1xuICAgIH0gZWxzZSB7XG4gICAgICBfaTMgPSBfaXRlcmF0b3IzLm5leHQoKTtcbiAgICAgIGlmIChfaTMuZG9uZSkgYnJlYWs7XG4gICAgICBfcmVmMyA9IF9pMy52YWx1ZTtcbiAgICB9XG5cbiAgICB2YXIgZGVjbGFyID0gX3JlZjM7XG5cbiAgICBzY29wZS5wdXNoKGRlY2xhcik7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiB0b0tleUFsaWFzKG5vZGUpIHtcbiAgdmFyIGtleSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbm9kZS5rZXk7XG5cbiAgdmFyIGFsaWFzID0gdm9pZCAwO1xuXG4gIGlmIChub2RlLmtpbmQgPT09IFwibWV0aG9kXCIpIHtcbiAgICByZXR1cm4gdG9LZXlBbGlhcy5pbmNyZW1lbnQoKSArIFwiXCI7XG4gIH0gZWxzZSBpZiAodC5pc0lkZW50aWZpZXIoa2V5KSkge1xuICAgIGFsaWFzID0ga2V5Lm5hbWU7XG4gIH0gZWxzZSBpZiAodC5pc1N0cmluZ0xpdGVyYWwoa2V5KSkge1xuICAgIGFsaWFzID0gKDAsIF9zdHJpbmdpZnkyLmRlZmF1bHQpKGtleS52YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgYWxpYXMgPSAoMCwgX3N0cmluZ2lmeTIuZGVmYXVsdCkodC5yZW1vdmVQcm9wZXJ0aWVzRGVlcCh0LmNsb25lRGVlcChrZXkpKSk7XG4gIH1cblxuICBpZiAobm9kZS5jb21wdXRlZCkge1xuICAgIGFsaWFzID0gXCJbXCIgKyBhbGlhcyArIFwiXVwiO1xuICB9XG5cbiAgaWYgKG5vZGUuc3RhdGljKSB7XG4gICAgYWxpYXMgPSBcInN0YXRpYzpcIiArIGFsaWFzO1xuICB9XG5cbiAgcmV0dXJuIGFsaWFzO1xufVxuXG50b0tleUFsaWFzLnVpZCA9IDA7XG5cbnRvS2V5QWxpYXMuaW5jcmVtZW50ID0gZnVuY3Rpb24gKCkge1xuICBpZiAodG9LZXlBbGlhcy51aWQgPj0gX21heFNhZmVJbnRlZ2VyMi5kZWZhdWx0KSB7XG4gICAgcmV0dXJuIHRvS2V5QWxpYXMudWlkID0gMDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdG9LZXlBbGlhcy51aWQrKztcbiAgfVxufTtcblxuZnVuY3Rpb24gdG9JZGVudGlmaWVyKG5hbWUpIHtcbiAgbmFtZSA9IG5hbWUgKyBcIlwiO1xuXG4gIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1teYS16QS1aMC05JF9dL2csIFwiLVwiKTtcblxuICBuYW1lID0gbmFtZS5yZXBsYWNlKC9eWy0wLTldKy8sIFwiXCIpO1xuXG4gIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1stXFxzXSsoLik/L2csIGZ1bmN0aW9uIChtYXRjaCwgYykge1xuICAgIHJldHVybiBjID8gYy50b1VwcGVyQ2FzZSgpIDogXCJcIjtcbiAgfSk7XG5cbiAgaWYgKCF0LmlzVmFsaWRJZGVudGlmaWVyKG5hbWUpKSB7XG4gICAgbmFtZSA9IFwiX1wiICsgbmFtZTtcbiAgfVxuXG4gIHJldHVybiBuYW1lIHx8IFwiX1wiO1xufVxuXG5mdW5jdGlvbiB0b0JpbmRpbmdJZGVudGlmaWVyTmFtZShuYW1lKSB7XG4gIG5hbWUgPSB0b0lkZW50aWZpZXIobmFtZSk7XG4gIGlmIChuYW1lID09PSBcImV2YWxcIiB8fCBuYW1lID09PSBcImFyZ3VtZW50c1wiKSBuYW1lID0gXCJfXCIgKyBuYW1lO1xuICByZXR1cm4gbmFtZTtcbn1cblxuZnVuY3Rpb24gdG9TdGF0ZW1lbnQobm9kZSwgaWdub3JlKSB7XG4gIGlmICh0LmlzU3RhdGVtZW50KG5vZGUpKSB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2YXIgbXVzdEhhdmVJZCA9IGZhbHNlO1xuICB2YXIgbmV3VHlwZSA9IHZvaWQgMDtcblxuICBpZiAodC5pc0NsYXNzKG5vZGUpKSB7XG4gICAgbXVzdEhhdmVJZCA9IHRydWU7XG4gICAgbmV3VHlwZSA9IFwiQ2xhc3NEZWNsYXJhdGlvblwiO1xuICB9IGVsc2UgaWYgKHQuaXNGdW5jdGlvbihub2RlKSkge1xuICAgIG11c3RIYXZlSWQgPSB0cnVlO1xuICAgIG5ld1R5cGUgPSBcIkZ1bmN0aW9uRGVjbGFyYXRpb25cIjtcbiAgfSBlbHNlIGlmICh0LmlzQXNzaWdubWVudEV4cHJlc3Npb24obm9kZSkpIHtcbiAgICByZXR1cm4gdC5leHByZXNzaW9uU3RhdGVtZW50KG5vZGUpO1xuICB9XG5cbiAgaWYgKG11c3RIYXZlSWQgJiYgIW5vZGUuaWQpIHtcbiAgICBuZXdUeXBlID0gZmFsc2U7XG4gIH1cblxuICBpZiAoIW5ld1R5cGUpIHtcbiAgICBpZiAoaWdub3JlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImNhbm5vdCB0dXJuIFwiICsgbm9kZS50eXBlICsgXCIgdG8gYSBzdGF0ZW1lbnRcIik7XG4gICAgfVxuICB9XG5cbiAgbm9kZS50eXBlID0gbmV3VHlwZTtcblxuICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gdG9FeHByZXNzaW9uKG5vZGUpIHtcbiAgaWYgKHQuaXNFeHByZXNzaW9uU3RhdGVtZW50KG5vZGUpKSB7XG4gICAgbm9kZSA9IG5vZGUuZXhwcmVzc2lvbjtcbiAgfVxuXG4gIGlmICh0LmlzRXhwcmVzc2lvbihub2RlKSkge1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgaWYgKHQuaXNDbGFzcyhub2RlKSkge1xuICAgIG5vZGUudHlwZSA9IFwiQ2xhc3NFeHByZXNzaW9uXCI7XG4gIH0gZWxzZSBpZiAodC5pc0Z1bmN0aW9uKG5vZGUpKSB7XG4gICAgbm9kZS50eXBlID0gXCJGdW5jdGlvbkV4cHJlc3Npb25cIjtcbiAgfVxuXG4gIGlmICghdC5pc0V4cHJlc3Npb24obm9kZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJjYW5ub3QgdHVybiBcIiArIG5vZGUudHlwZSArIFwiIHRvIGFuIGV4cHJlc3Npb25cIik7XG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gdG9CbG9jayhub2RlLCBwYXJlbnQpIHtcbiAgaWYgKHQuaXNCbG9ja1N0YXRlbWVudChub2RlKSkge1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgaWYgKHQuaXNFbXB0eVN0YXRlbWVudChub2RlKSkge1xuICAgIG5vZGUgPSBbXTtcbiAgfVxuXG4gIGlmICghQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgIGlmICghdC5pc1N0YXRlbWVudChub2RlKSkge1xuICAgICAgaWYgKHQuaXNGdW5jdGlvbihwYXJlbnQpKSB7XG4gICAgICAgIG5vZGUgPSB0LnJldHVyblN0YXRlbWVudChub2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUgPSB0LmV4cHJlc3Npb25TdGF0ZW1lbnQobm9kZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbm9kZSA9IFtub2RlXTtcbiAgfVxuXG4gIHJldHVybiB0LmJsb2NrU3RhdGVtZW50KG5vZGUpO1xufVxuXG5mdW5jdGlvbiB2YWx1ZVRvTm9kZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB0LmlkZW50aWZpZXIoXCJ1bmRlZmluZWRcIik7XG4gIH1cblxuICBpZiAodmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIHQuYm9vbGVhbkxpdGVyYWwodmFsdWUpO1xuICB9XG5cbiAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHQubnVsbExpdGVyYWwoKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gdC5zdHJpbmdMaXRlcmFsKHZhbHVlKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICByZXR1cm4gdC5udW1lcmljTGl0ZXJhbCh2YWx1ZSk7XG4gIH1cblxuICBpZiAoKDAsIF9pc1JlZ0V4cDIuZGVmYXVsdCkodmFsdWUpKSB7XG4gICAgdmFyIHBhdHRlcm4gPSB2YWx1ZS5zb3VyY2U7XG4gICAgdmFyIGZsYWdzID0gdmFsdWUudG9TdHJpbmcoKS5tYXRjaCgvXFwvKFthLXpdK3wpJC8pWzFdO1xuICAgIHJldHVybiB0LnJlZ0V4cExpdGVyYWwocGF0dGVybiwgZmxhZ3MpO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHQuYXJyYXlFeHByZXNzaW9uKHZhbHVlLm1hcCh0LnZhbHVlVG9Ob2RlKSk7XG4gIH1cblxuICBpZiAoKDAsIF9pc1BsYWluT2JqZWN0Mi5kZWZhdWx0KSh2YWx1ZSkpIHtcbiAgICB2YXIgcHJvcHMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICAgIHZhciBub2RlS2V5ID0gdm9pZCAwO1xuICAgICAgaWYgKHQuaXNWYWxpZElkZW50aWZpZXIoa2V5KSkge1xuICAgICAgICBub2RlS2V5ID0gdC5pZGVudGlmaWVyKGtleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlS2V5ID0gdC5zdHJpbmdMaXRlcmFsKGtleSk7XG4gICAgICB9XG4gICAgICBwcm9wcy5wdXNoKHQub2JqZWN0UHJvcGVydHkobm9kZUtleSwgdC52YWx1ZVRvTm9kZSh2YWx1ZVtrZXldKSkpO1xuICAgIH1cbiAgICByZXR1cm4gdC5vYmplY3RFeHByZXNzaW9uKHByb3BzKTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihcImRvbid0IGtub3cgaG93IHRvIHR1cm4gdGhpcyB2YWx1ZSBpbnRvIGEgbm9kZVwiKTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vbnVtYmVyL21heC1zYWZlLWludGVnZXJcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5udW1iZXIubWF4LXNhZmUtaW50ZWdlcicpO1xubW9kdWxlLmV4cG9ydHMgPSAweDFmZmZmZmZmZmZmZmZmO1xuIiwiLy8gMjAuMS4yLjYgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywgeyBNQVhfU0FGRV9JTlRFR0VSOiAweDFmZmZmZmZmZmZmZmZmIH0pO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgZ2V0UHJvdG90eXBlID0gcmVxdWlyZSgnLi9fZ2V0UHJvdG90eXBlJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gaW5mZXIgdGhlIGBPYmplY3RgIGNvbnN0cnVjdG9yLiAqL1xudmFyIG9iamVjdEN0b3JTdHJpbmcgPSBmdW5jVG9TdHJpbmcuY2FsbChPYmplY3QpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LCB0aGF0IGlzLCBhbiBvYmplY3QgY3JlYXRlZCBieSB0aGVcbiAqIGBPYmplY3RgIGNvbnN0cnVjdG9yIG9yIG9uZSB3aXRoIGEgYFtbUHJvdG90eXBlXV1gIG9mIGBudWxsYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuOC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiB9XG4gKlxuICogXy5pc1BsYWluT2JqZWN0KG5ldyBGb28pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KHsgJ3gnOiAwLCAneSc6IDAgfSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3RMaWtlKHZhbHVlKSB8fCBiYXNlR2V0VGFnKHZhbHVlKSAhPSBvYmplY3RUYWcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHByb3RvID0gZ2V0UHJvdG90eXBlKHZhbHVlKTtcbiAgaWYgKHByb3RvID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIEN0b3IgPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3RvLCAnY29uc3RydWN0b3InKSAmJiBwcm90by5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuIHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3RvciBpbnN0YW5jZW9mIEN0b3IgJiZcbiAgICBmdW5jVG9TdHJpbmcuY2FsbChDdG9yKSA9PSBvYmplY3RDdG9yU3RyaW5nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUGxhaW5PYmplY3Q7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcbiIsInZhciBiYXNlSXNSZWdFeHAgPSByZXF1aXJlKCcuL19iYXNlSXNSZWdFeHAnKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzUmVnRXhwID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNSZWdFeHA7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBSZWdFeHBgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHJlZ2V4cCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzUmVnRXhwKC9hYmMvKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzUmVnRXhwKCcvYWJjLycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzUmVnRXhwID0gbm9kZUlzUmVnRXhwID8gYmFzZVVuYXJ5KG5vZGVJc1JlZ0V4cCkgOiBiYXNlSXNSZWdFeHA7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNSZWdFeHA7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNSZWdFeHBgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcmVnZXhwLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc1JlZ0V4cCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSByZWdleHBUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzUmVnRXhwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmNyZWF0ZVVuaW9uVHlwZUFubm90YXRpb24gPSBjcmVhdGVVbmlvblR5cGVBbm5vdGF0aW9uO1xuZXhwb3J0cy5yZW1vdmVUeXBlRHVwbGljYXRlcyA9IHJlbW92ZVR5cGVEdXBsaWNhdGVzO1xuZXhwb3J0cy5jcmVhdGVUeXBlQW5ub3RhdGlvbkJhc2VkT25UeXBlb2YgPSBjcmVhdGVUeXBlQW5ub3RhdGlvbkJhc2VkT25UeXBlb2Y7XG5cbnZhciBfaW5kZXggPSByZXF1aXJlKFwiLi9pbmRleFwiKTtcblxudmFyIHQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfaW5kZXgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVBbm5vdGF0aW9uKHR5cGVzKSB7XG4gIHZhciBmbGF0dGVuZWQgPSByZW1vdmVUeXBlRHVwbGljYXRlcyh0eXBlcyk7XG5cbiAgaWYgKGZsYXR0ZW5lZC5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gZmxhdHRlbmVkWzBdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0LnVuaW9uVHlwZUFubm90YXRpb24oZmxhdHRlbmVkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVUeXBlRHVwbGljYXRlcyhub2Rlcykge1xuICB2YXIgZ2VuZXJpY3MgPSB7fTtcbiAgdmFyIGJhc2VzID0ge307XG5cbiAgdmFyIHR5cGVHcm91cHMgPSBbXTtcblxuICB2YXIgdHlwZXMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIG5vZGUgPSBub2Rlc1tpXTtcbiAgICBpZiAoIW5vZGUpIGNvbnRpbnVlO1xuXG4gICAgaWYgKHR5cGVzLmluZGV4T2Yobm9kZSkgPj0gMCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKHQuaXNBbnlUeXBlQW5ub3RhdGlvbihub2RlKSkge1xuICAgICAgcmV0dXJuIFtub2RlXTtcbiAgICB9XG5cbiAgICBpZiAodC5pc0Zsb3dCYXNlQW5ub3RhdGlvbihub2RlKSkge1xuICAgICAgYmFzZXNbbm9kZS50eXBlXSA9IG5vZGU7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAodC5pc1VuaW9uVHlwZUFubm90YXRpb24obm9kZSkpIHtcbiAgICAgIGlmICh0eXBlR3JvdXBzLmluZGV4T2Yobm9kZS50eXBlcykgPCAwKSB7XG4gICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KG5vZGUudHlwZXMpO1xuICAgICAgICB0eXBlR3JvdXBzLnB1c2gobm9kZS50eXBlcyk7XG4gICAgICB9XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAodC5pc0dlbmVyaWNUeXBlQW5ub3RhdGlvbihub2RlKSkge1xuICAgICAgdmFyIG5hbWUgPSBub2RlLmlkLm5hbWU7XG5cbiAgICAgIGlmIChnZW5lcmljc1tuYW1lXSkge1xuICAgICAgICB2YXIgZXhpc3RpbmcgPSBnZW5lcmljc1tuYW1lXTtcbiAgICAgICAgaWYgKGV4aXN0aW5nLnR5cGVQYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgaWYgKG5vZGUudHlwZVBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAgIGV4aXN0aW5nLnR5cGVQYXJhbWV0ZXJzLnBhcmFtcyA9IHJlbW92ZVR5cGVEdXBsaWNhdGVzKGV4aXN0aW5nLnR5cGVQYXJhbWV0ZXJzLnBhcmFtcy5jb25jYXQobm9kZS50eXBlUGFyYW1ldGVycy5wYXJhbXMpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZXhpc3RpbmcgPSBub2RlLnR5cGVQYXJhbWV0ZXJzO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnZW5lcmljc1tuYW1lXSA9IG5vZGU7XG4gICAgICB9XG5cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHR5cGVzLnB1c2gobm9kZSk7XG4gIH1cblxuICBmb3IgKHZhciB0eXBlIGluIGJhc2VzKSB7XG4gICAgdHlwZXMucHVzaChiYXNlc1t0eXBlXSk7XG4gIH1cblxuICBmb3IgKHZhciBfbmFtZSBpbiBnZW5lcmljcykge1xuICAgIHR5cGVzLnB1c2goZ2VuZXJpY3NbX25hbWVdKTtcbiAgfVxuXG4gIHJldHVybiB0eXBlcztcbn1cblxuZnVuY3Rpb24gY3JlYXRlVHlwZUFubm90YXRpb25CYXNlZE9uVHlwZW9mKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gdC5zdHJpbmdUeXBlQW5ub3RhdGlvbigpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICByZXR1cm4gdC5udW1iZXJUeXBlQW5ub3RhdGlvbigpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4gdC52b2lkVHlwZUFubm90YXRpb24oKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcImJvb2xlYW5cIikge1xuICAgIHJldHVybiB0LmJvb2xlYW5UeXBlQW5ub3RhdGlvbigpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB0LmdlbmVyaWNUeXBlQW5ub3RhdGlvbih0LmlkZW50aWZpZXIoXCJGdW5jdGlvblwiKSk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJvYmplY3RcIikge1xuICAgIHJldHVybiB0LmdlbmVyaWNUeXBlQW5ub3RhdGlvbih0LmlkZW50aWZpZXIoXCJPYmplY3RcIikpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwic3ltYm9sXCIpIHtcbiAgICByZXR1cm4gdC5nZW5lcmljVHlwZUFubm90YXRpb24odC5pZGVudGlmaWVyKFwiU3ltYm9sXCIpKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHR5cGVvZiB2YWx1ZVwiKTtcbiAgfVxufSIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdG9GYXN0cHJvcGVydGllcyhvKSB7XG5cdGZ1bmN0aW9uIFN1YigpIHt9XG5cdFN1Yi5wcm90b3R5cGUgPSBvO1xuXHR2YXIgcmVjZWl2ZXIgPSBuZXcgU3ViKCk7IC8vIGNyZWF0ZSBhbiBpbnN0YW5jZVxuXHRmdW5jdGlvbiBpYygpIHsgcmV0dXJuIHR5cGVvZiByZWNlaXZlci5mb287IH0gLy8gcGVyZm9ybSBhY2Nlc3Ncblx0aWMoKTsgXG5cdGljKCk7XG5cdHJldHVybiBvO1xuXHRldmFsKFwib1wiICsgbyk7IC8vIGVuc3VyZSBubyBkZWFkIGNvZGUgZWxpbWluYXRpb25cbn1cbiIsInZhciBiYXNlQ2xvbmUgPSByZXF1aXJlKCcuL19iYXNlQ2xvbmUnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgY2xvbmluZy4gKi9cbnZhciBDTE9ORV9TWU1CT0xTX0ZMQUcgPSA0O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzaGFsbG93IGNsb25lIG9mIGB2YWx1ZWAuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb24gdGhlXG4gKiBbc3RydWN0dXJlZCBjbG9uZSBhbGdvcml0aG1dKGh0dHBzOi8vbWRuLmlvL1N0cnVjdHVyZWRfY2xvbmVfYWxnb3JpdGhtKVxuICogYW5kIHN1cHBvcnRzIGNsb25pbmcgYXJyYXlzLCBhcnJheSBidWZmZXJzLCBib29sZWFucywgZGF0ZSBvYmplY3RzLCBtYXBzLFxuICogbnVtYmVycywgYE9iamVjdGAgb2JqZWN0cywgcmVnZXhlcywgc2V0cywgc3RyaW5ncywgc3ltYm9scywgYW5kIHR5cGVkXG4gKiBhcnJheXMuIFRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0aWVzIG9mIGBhcmd1bWVudHNgIG9iamVjdHMgYXJlIGNsb25lZFxuICogYXMgcGxhaW4gb2JqZWN0cy4gQW4gZW1wdHkgb2JqZWN0IGlzIHJldHVybmVkIGZvciB1bmNsb25lYWJsZSB2YWx1ZXMgc3VjaFxuICogYXMgZXJyb3Igb2JqZWN0cywgZnVuY3Rpb25zLCBET00gbm9kZXMsIGFuZCBXZWFrTWFwcy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgY2xvbmVkIHZhbHVlLlxuICogQHNlZSBfLmNsb25lRGVlcFxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IFt7ICdhJzogMSB9LCB7ICdiJzogMiB9XTtcbiAqXG4gKiB2YXIgc2hhbGxvdyA9IF8uY2xvbmUob2JqZWN0cyk7XG4gKiBjb25zb2xlLmxvZyhzaGFsbG93WzBdID09PSBvYmplY3RzWzBdKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gY2xvbmUodmFsdWUpIHtcbiAgcmV0dXJuIGJhc2VDbG9uZSh2YWx1ZSwgQ0xPTkVfU1lNQk9MU19GTEFHKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZTtcbiIsInZhciBTdGFjayA9IHJlcXVpcmUoJy4vX1N0YWNrJyksXG4gICAgYXJyYXlFYWNoID0gcmVxdWlyZSgnLi9fYXJyYXlFYWNoJyksXG4gICAgYXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19hc3NpZ25WYWx1ZScpLFxuICAgIGJhc2VBc3NpZ24gPSByZXF1aXJlKCcuL19iYXNlQXNzaWduJyksXG4gICAgYmFzZUFzc2lnbkluID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnbkluJyksXG4gICAgY2xvbmVCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUJ1ZmZlcicpLFxuICAgIGNvcHlBcnJheSA9IHJlcXVpcmUoJy4vX2NvcHlBcnJheScpLFxuICAgIGNvcHlTeW1ib2xzID0gcmVxdWlyZSgnLi9fY29weVN5bWJvbHMnKSxcbiAgICBjb3B5U3ltYm9sc0luID0gcmVxdWlyZSgnLi9fY29weVN5bWJvbHNJbicpLFxuICAgIGdldEFsbEtleXMgPSByZXF1aXJlKCcuL19nZXRBbGxLZXlzJyksXG4gICAgZ2V0QWxsS2V5c0luID0gcmVxdWlyZSgnLi9fZ2V0QWxsS2V5c0luJyksXG4gICAgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaW5pdENsb25lQXJyYXkgPSByZXF1aXJlKCcuL19pbml0Q2xvbmVBcnJheScpLFxuICAgIGluaXRDbG9uZUJ5VGFnID0gcmVxdWlyZSgnLi9faW5pdENsb25lQnlUYWcnKSxcbiAgICBpbml0Q2xvbmVPYmplY3QgPSByZXF1aXJlKCcuL19pbml0Q2xvbmVPYmplY3QnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNNYXAgPSByZXF1aXJlKCcuL2lzTWFwJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgaXNTZXQgPSByZXF1aXJlKCcuL2lzU2V0JyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciBjbG9uaW5nLiAqL1xudmFyIENMT05FX0RFRVBfRkxBRyA9IDEsXG4gICAgQ0xPTkVfRkxBVF9GTEFHID0gMixcbiAgICBDTE9ORV9TWU1CT0xTX0ZMQUcgPSA0O1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIHN1cHBvcnRlZCBieSBgXy5jbG9uZWAuICovXG52YXIgY2xvbmVhYmxlVGFncyA9IHt9O1xuY2xvbmVhYmxlVGFnc1thcmdzVGFnXSA9IGNsb25lYWJsZVRhZ3NbYXJyYXlUYWddID1cbmNsb25lYWJsZVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gY2xvbmVhYmxlVGFnc1tkYXRhVmlld1RhZ10gPVxuY2xvbmVhYmxlVGFnc1tib29sVGFnXSA9IGNsb25lYWJsZVRhZ3NbZGF0ZVRhZ10gPVxuY2xvbmVhYmxlVGFnc1tmbG9hdDMyVGFnXSA9IGNsb25lYWJsZVRhZ3NbZmxvYXQ2NFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tpbnQ4VGFnXSA9IGNsb25lYWJsZVRhZ3NbaW50MTZUYWddID1cbmNsb25lYWJsZVRhZ3NbaW50MzJUYWddID0gY2xvbmVhYmxlVGFnc1ttYXBUYWddID1cbmNsb25lYWJsZVRhZ3NbbnVtYmVyVGFnXSA9IGNsb25lYWJsZVRhZ3Nbb2JqZWN0VGFnXSA9XG5jbG9uZWFibGVUYWdzW3JlZ2V4cFRhZ10gPSBjbG9uZWFibGVUYWdzW3NldFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tzdHJpbmdUYWddID0gY2xvbmVhYmxlVGFnc1tzeW1ib2xUYWddID1cbmNsb25lYWJsZVRhZ3NbdWludDhUYWddID0gY2xvbmVhYmxlVGFnc1t1aW50OENsYW1wZWRUYWddID1cbmNsb25lYWJsZVRhZ3NbdWludDE2VGFnXSA9IGNsb25lYWJsZVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG5jbG9uZWFibGVUYWdzW2Vycm9yVGFnXSA9IGNsb25lYWJsZVRhZ3NbZnVuY1RhZ10gPVxuY2xvbmVhYmxlVGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNsb25lYCBhbmQgYF8uY2xvbmVEZWVwYCB3aGljaCB0cmFja3NcbiAqIHRyYXZlcnNlZCBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy5cbiAqICAxIC0gRGVlcCBjbG9uZVxuICogIDIgLSBGbGF0dGVuIGluaGVyaXRlZCBwcm9wZXJ0aWVzXG4gKiAgNCAtIENsb25lIHN5bWJvbHNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNsb25pbmcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2tleV0gVGhlIGtleSBvZiBgdmFsdWVgLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBwYXJlbnQgb2JqZWN0IG9mIGB2YWx1ZWAuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIG9iamVjdHMgYW5kIHRoZWlyIGNsb25lIGNvdW50ZXJwYXJ0cy5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBjbG9uZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VDbG9uZSh2YWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwga2V5LCBvYmplY3QsIHN0YWNrKSB7XG4gIHZhciByZXN1bHQsXG4gICAgICBpc0RlZXAgPSBiaXRtYXNrICYgQ0xPTkVfREVFUF9GTEFHLFxuICAgICAgaXNGbGF0ID0gYml0bWFzayAmIENMT05FX0ZMQVRfRkxBRyxcbiAgICAgIGlzRnVsbCA9IGJpdG1hc2sgJiBDTE9ORV9TWU1CT0xTX0ZMQUc7XG5cbiAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICByZXN1bHQgPSBvYmplY3QgPyBjdXN0b21pemVyKHZhbHVlLCBrZXksIG9iamVjdCwgc3RhY2spIDogY3VzdG9taXplcih2YWx1ZSk7XG4gIH1cbiAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKTtcbiAgaWYgKGlzQXJyKSB7XG4gICAgcmVzdWx0ID0gaW5pdENsb25lQXJyYXkodmFsdWUpO1xuICAgIGlmICghaXNEZWVwKSB7XG4gICAgICByZXR1cm4gY29weUFycmF5KHZhbHVlLCByZXN1bHQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFnID0gZ2V0VGFnKHZhbHVlKSxcbiAgICAgICAgaXNGdW5jID0gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZztcblxuICAgIGlmIChpc0J1ZmZlcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjbG9uZUJ1ZmZlcih2YWx1ZSwgaXNEZWVwKTtcbiAgICB9XG4gICAgaWYgKHRhZyA9PSBvYmplY3RUYWcgfHwgdGFnID09IGFyZ3NUYWcgfHwgKGlzRnVuYyAmJiAhb2JqZWN0KSkge1xuICAgICAgcmVzdWx0ID0gKGlzRmxhdCB8fCBpc0Z1bmMpID8ge30gOiBpbml0Q2xvbmVPYmplY3QodmFsdWUpO1xuICAgICAgaWYgKCFpc0RlZXApIHtcbiAgICAgICAgcmV0dXJuIGlzRmxhdFxuICAgICAgICAgID8gY29weVN5bWJvbHNJbih2YWx1ZSwgYmFzZUFzc2lnbkluKHJlc3VsdCwgdmFsdWUpKVxuICAgICAgICAgIDogY29weVN5bWJvbHModmFsdWUsIGJhc2VBc3NpZ24ocmVzdWx0LCB2YWx1ZSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWNsb25lYWJsZVRhZ3NbdGFnXSkge1xuICAgICAgICByZXR1cm4gb2JqZWN0ID8gdmFsdWUgOiB7fTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IGluaXRDbG9uZUJ5VGFnKHZhbHVlLCB0YWcsIGlzRGVlcCk7XG4gICAgfVxuICB9XG4gIC8vIENoZWNrIGZvciBjaXJjdWxhciByZWZlcmVuY2VzIGFuZCByZXR1cm4gaXRzIGNvcnJlc3BvbmRpbmcgY2xvbmUuXG4gIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KHZhbHVlKTtcbiAgaWYgKHN0YWNrZWQpIHtcbiAgICByZXR1cm4gc3RhY2tlZDtcbiAgfVxuICBzdGFjay5zZXQodmFsdWUsIHJlc3VsdCk7XG5cbiAgaWYgKGlzU2V0KHZhbHVlKSkge1xuICAgIHZhbHVlLmZvckVhY2goZnVuY3Rpb24oc3ViVmFsdWUpIHtcbiAgICAgIHJlc3VsdC5hZGQoYmFzZUNsb25lKHN1YlZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdWJWYWx1ZSwgdmFsdWUsIHN0YWNrKSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaWYgKGlzTWFwKHZhbHVlKSkge1xuICAgIHZhbHVlLmZvckVhY2goZnVuY3Rpb24oc3ViVmFsdWUsIGtleSkge1xuICAgICAgcmVzdWx0LnNldChrZXksIGJhc2VDbG9uZShzdWJWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwga2V5LCB2YWx1ZSwgc3RhY2spKTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICB2YXIga2V5c0Z1bmMgPSBpc0Z1bGxcbiAgICA/IChpc0ZsYXQgPyBnZXRBbGxLZXlzSW4gOiBnZXRBbGxLZXlzKVxuICAgIDogKGlzRmxhdCA/IGtleXNJbiA6IGtleXMpO1xuXG4gIHZhciBwcm9wcyA9IGlzQXJyID8gdW5kZWZpbmVkIDoga2V5c0Z1bmModmFsdWUpO1xuICBhcnJheUVhY2gocHJvcHMgfHwgdmFsdWUsIGZ1bmN0aW9uKHN1YlZhbHVlLCBrZXkpIHtcbiAgICBpZiAocHJvcHMpIHtcbiAgICAgIGtleSA9IHN1YlZhbHVlO1xuICAgICAgc3ViVmFsdWUgPSB2YWx1ZVtrZXldO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBwb3B1bGF0ZSBjbG9uZSAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGFzc2lnblZhbHVlKHJlc3VsdCwga2V5LCBiYXNlQ2xvbmUoc3ViVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGtleSwgdmFsdWUsIHN0YWNrKSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VDbG9uZTtcbiIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBzdGFja0NsZWFyID0gcmVxdWlyZSgnLi9fc3RhY2tDbGVhcicpLFxuICAgIHN0YWNrRGVsZXRlID0gcmVxdWlyZSgnLi9fc3RhY2tEZWxldGUnKSxcbiAgICBzdGFja0dldCA9IHJlcXVpcmUoJy4vX3N0YWNrR2V0JyksXG4gICAgc3RhY2tIYXMgPSByZXF1aXJlKCcuL19zdGFja0hhcycpLFxuICAgIHN0YWNrU2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RhY2sgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU3RhY2soZW50cmllcykge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlKGVudHJpZXMpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTdGFja2AuXG5TdGFjay5wcm90b3R5cGUuY2xlYXIgPSBzdGFja0NsZWFyO1xuU3RhY2sucHJvdG90eXBlWydkZWxldGUnXSA9IHN0YWNrRGVsZXRlO1xuU3RhY2sucHJvdG90eXBlLmdldCA9IHN0YWNrR2V0O1xuU3RhY2sucHJvdG90eXBlLmhhcyA9IHN0YWNrSGFzO1xuU3RhY2sucHJvdG90eXBlLnNldCA9IHN0YWNrU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YWNrO1xuIiwiLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUNsZWFyO1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICAtLXRoaXMuc2l6ZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlRGVsZXRlO1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUdldDtcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlSGFzO1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgICsrdGhpcy5zaXplO1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlU2V0O1xuIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIFN0YWNrXG4gKi9cbmZ1bmN0aW9uIHN0YWNrQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrQ2xlYXI7XG4iLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0RlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgcmVzdWx0ID0gZGF0YVsnZGVsZXRlJ10oa2V5KTtcblxuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tEZWxldGU7XG4iLCIvKipcbiAqIEdldHMgdGhlIHN0YWNrIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzdGFja0dldChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tHZXQ7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBhIHN0YWNrIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tIYXMoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrSGFzO1xuIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKTtcblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqXG4gKiBTZXRzIHRoZSBzdGFjayBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBzdGFjayBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChkYXRhIGluc3RhbmNlb2YgTGlzdENhY2hlKSB7XG4gICAgdmFyIHBhaXJzID0gZGF0YS5fX2RhdGFfXztcbiAgICBpZiAoIU1hcCB8fCAocGFpcnMubGVuZ3RoIDwgTEFSR0VfQVJSQVlfU0laRSAtIDEpKSB7XG4gICAgICBwYWlycy5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgICB0aGlzLnNpemUgPSArK2RhdGEuc2l6ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZShwYWlycyk7XG4gIH1cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tTZXQ7XG4iLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTWFza2VkID0gcmVxdWlyZSgnLi9faXNNYXNrZWQnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gaXNGdW5jdGlvbih2YWx1ZSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTmF0aXZlO1xuIiwidmFyIGNvcmVKc0RhdGEgPSByZXF1aXJlKCcuL19jb3JlSnNEYXRhJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNNYXNrZWQ7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb3JlSnNEYXRhO1xuIiwiLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VmFsdWU7XG4iLCJ2YXIgSGFzaCA9IHJlcXVpcmUoJy4vX0hhc2gnKSxcbiAgICBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5zaXplID0gMDtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlQ2xlYXI7XG4iLCJ2YXIgaGFzaENsZWFyID0gcmVxdWlyZSgnLi9faGFzaENsZWFyJyksXG4gICAgaGFzaERlbGV0ZSA9IHJlcXVpcmUoJy4vX2hhc2hEZWxldGUnKSxcbiAgICBoYXNoR2V0ID0gcmVxdWlyZSgnLi9faGFzaEdldCcpLFxuICAgIGhhc2hIYXMgPSByZXF1aXJlKCcuL19oYXNoSGFzJyksXG4gICAgaGFzaFNldCA9IHJlcXVpcmUoJy4vX2hhc2hTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gSGFzaDtcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaENsZWFyO1xuIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoRGVsZXRlO1xuIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEdldDtcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoYXNoIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoSGFzKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHJldHVybiBuYXRpdmVDcmVhdGUgPyAoZGF0YVtrZXldICE9PSB1bmRlZmluZWQpIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hIYXM7XG4iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgdGhpcy5zaXplICs9IHRoaXMuaGFzKGtleSkgPyAwIDogMTtcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hTZXQ7XG4iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVEZWxldGU7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNLZXlhYmxlO1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUdldDtcbiIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlSGFzO1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IGdldE1hcERhdGEodGhpcywga2V5KSxcbiAgICAgIHNpemUgPSBkYXRhLnNpemU7XG5cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSArPSBkYXRhLnNpemUgPT0gc2l6ZSA/IDAgOiAxO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZVNldDtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZvckVhY2hgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheUVhY2goYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpID09PSBmYWxzZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUVhY2g7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICB2YXIgZnVuYyA9IGdldE5hdGl2ZShPYmplY3QsICdkZWZpbmVQcm9wZXJ0eScpO1xuICAgIGZ1bmMoe30sICcnLCB7fSk7XG4gICAgcmV0dXJuIGZ1bmM7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmluZVByb3BlcnR5O1xuIiwidmFyIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmFzc2lnbmAgd2l0aG91dCBzdXBwb3J0IGZvciBtdWx0aXBsZSBzb3VyY2VzXG4gKiBvciBgY3VzdG9taXplcmAgZnVuY3Rpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnbihvYmplY3QsIHNvdXJjZSkge1xuICByZXR1cm4gb2JqZWN0ICYmIGNvcHlPYmplY3Qoc291cmNlLCBrZXlzKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUFzc2lnbjtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRpbWVzO1xuIiwidmFyIGJhc2VJc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vX2Jhc2VJc0FyZ3VtZW50cycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FyZ3VtZW50cyA9IGJhc2VJc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA/IGJhc2VJc0FyZ3VtZW50cyA6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJndW1lbnRzO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FyZ3VtZW50c2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICovXG5mdW5jdGlvbiBiYXNlSXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNBcmd1bWVudHM7XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICogLy8gPT4gW2ZhbHNlLCBmYWxzZV1cbiAqL1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkZhbHNlO1xuIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eKD86MHxbMS05XVxcZCopJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG5cbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGUgPT0gJ251bWJlcicgfHxcbiAgICAgICh0eXBlICE9ICdzeW1ib2wnICYmIHJlSXNVaW50LnRlc3QodmFsdWUpKSkgJiZcbiAgICAgICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSW5kZXg7XG4iLCJ2YXIgYmFzZUlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Jhc2VJc1R5cGVkQXJyYXknKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVHlwZWRBcnJheTtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIG9mIHR5cGVkIGFycmF5cy4gKi9cbnZhciB0eXBlZEFycmF5VGFncyA9IHt9O1xudHlwZWRBcnJheVRhZ3NbZmxvYXQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1tmbG9hdDY0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQ4VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2ludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50OFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG50eXBlZEFycmF5VGFnc1thcmdzVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2FycmF5VGFnXSA9XG50eXBlZEFycmF5VGFnc1thcnJheUJ1ZmZlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tib29sVGFnXSA9XG50eXBlZEFycmF5VGFnc1tkYXRhVmlld1RhZ10gPSB0eXBlZEFycmF5VGFnc1tkYXRlVGFnXSA9XG50eXBlZEFycmF5VGFnc1tlcnJvclRhZ10gPSB0eXBlZEFycmF5VGFnc1tmdW5jVGFnXSA9XG50eXBlZEFycmF5VGFnc1ttYXBUYWddID0gdHlwZWRBcnJheVRhZ3NbbnVtYmVyVGFnXSA9XG50eXBlZEFycmF5VGFnc1tvYmplY3RUYWddID0gdHlwZWRBcnJheVRhZ3NbcmVnZXhwVGFnXSA9XG50eXBlZEFycmF5VGFnc1tzZXRUYWddID0gdHlwZWRBcnJheVRhZ3Nbc3RyaW5nVGFnXSA9XG50eXBlZEFycmF5VGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzVHlwZWRBcnJheWAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmXG4gICAgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhIXR5cGVkQXJyYXlUYWdzW2Jhc2VHZXRUYWcodmFsdWUpXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNUeXBlZEFycmF5O1xuIiwidmFyIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzID0gcmVxdWlyZSgnLi9fbmF0aXZlS2V5cycpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXM7XG4iLCJ2YXIgb3ZlckFyZyA9IHJlcXVpcmUoJy4vX292ZXJBcmcnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUtleXMgPSBvdmVyQXJnKE9iamVjdC5rZXlzLCBPYmplY3QpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUtleXM7XG4iLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBrZXlzSW4gPSByZXF1aXJlKCcuL2tleXNJbicpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmFzc2lnbkluYCB3aXRob3V0IHN1cHBvcnQgZm9yIG11bHRpcGxlIHNvdXJjZXNcbiAqIG9yIGBjdXN0b21pemVyYCBmdW5jdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduSW4ob2JqZWN0LCBzb3VyY2UpIHtcbiAgcmV0dXJuIG9iamVjdCAmJiBjb3B5T2JqZWN0KHNvdXJjZSwga2V5c0luKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUFzc2lnbkluO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzSW4gPSByZXF1aXJlKCcuL19uYXRpdmVLZXlzSW4nKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzSW5gIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXNJbihvYmplY3QpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXNJbihvYmplY3QpO1xuICB9XG4gIHZhciBpc1Byb3RvID0gaXNQcm90b3R5cGUob2JqZWN0KSxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAoIShrZXkgPT0gJ2NvbnN0cnVjdG9yJyAmJiAoaXNQcm90byB8fCAhaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlS2V5c0luO1xuIiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2VcbiAqIFtgT2JqZWN0LmtleXNgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGV4Y2VwdCB0aGF0IGl0IGluY2x1ZGVzIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnRpZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIG5hdGl2ZUtleXNJbihvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAob2JqZWN0ICE9IG51bGwpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5c0luO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIGFsbG9jVW5zYWZlID0gQnVmZmVyID8gQnVmZmVyLmFsbG9jVW5zYWZlIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiAgYGJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUJ1ZmZlcihidWZmZXIsIGlzRGVlcCkge1xuICBpZiAoaXNEZWVwKSB7XG4gICAgcmV0dXJuIGJ1ZmZlci5zbGljZSgpO1xuICB9XG4gIHZhciBsZW5ndGggPSBidWZmZXIubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gYWxsb2NVbnNhZmUgPyBhbGxvY1Vuc2FmZShsZW5ndGgpIDogbmV3IGJ1ZmZlci5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuXG4gIGJ1ZmZlci5jb3B5KHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVCdWZmZXI7XG4iLCIvKipcbiAqIENvcGllcyB0aGUgdmFsdWVzIG9mIGBzb3VyY2VgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHNvdXJjZSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheT1bXV0gVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIHRvLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlBcnJheShzb3VyY2UsIGFycmF5KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gc291cmNlLmxlbmd0aDtcblxuICBhcnJheSB8fCAoYXJyYXkgPSBBcnJheShsZW5ndGgpKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtpbmRleF0gPSBzb3VyY2VbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5QXJyYXk7XG4iLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBnZXRTeW1ib2xzID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9scycpO1xuXG4vKipcbiAqIENvcGllcyBvd24gc3ltYm9scyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyBmcm9tLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIHRvLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weVN5bWJvbHMoc291cmNlLCBvYmplY3QpIHtcbiAgcmV0dXJuIGNvcHlPYmplY3Qoc291cmNlLCBnZXRTeW1ib2xzKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weVN5bWJvbHM7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5maWx0ZXJgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmaWx0ZXJlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlGaWx0ZXIoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzSW5kZXggPSAwLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF07XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmVzdWx0W3Jlc0luZGV4KytdID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlGaWx0ZXI7XG4iLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBnZXRTeW1ib2xzSW4gPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzSW4nKTtcblxuLyoqXG4gKiBDb3BpZXMgb3duIGFuZCBpbmhlcml0ZWQgc3ltYm9scyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyBmcm9tLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIHRvLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weVN5bWJvbHNJbihzb3VyY2UsIG9iamVjdCkge1xuICByZXR1cm4gY29weU9iamVjdChzb3VyY2UsIGdldFN5bWJvbHNJbihzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlTeW1ib2xzSW47XG4iLCJ2YXIgYmFzZUdldEFsbEtleXMgPSByZXF1aXJlKCcuL19iYXNlR2V0QWxsS2V5cycpLFxuICAgIGdldFN5bWJvbHMgPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEtleXMob2JqZWN0KSB7XG4gIHJldHVybiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXMsIGdldFN5bWJvbHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEFsbEtleXM7XG4iLCJ2YXIgYmFzZUdldEFsbEtleXMgPSByZXF1aXJlKCcuL19iYXNlR2V0QWxsS2V5cycpLFxuICAgIGdldFN5bWJvbHNJbiA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHNJbicpLFxuICAgIGtleXNJbiA9IHJlcXVpcmUoJy4va2V5c0luJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5c0luKG9iamVjdCkge1xuICByZXR1cm4gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzSW4sIGdldFN5bWJvbHNJbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QWxsS2V5c0luO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBEYXRhVmlldyA9IGdldE5hdGl2ZShyb290LCAnRGF0YVZpZXcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBEYXRhVmlldztcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgUHJvbWlzZSA9IGdldE5hdGl2ZShyb290LCAnUHJvbWlzZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb21pc2U7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFdlYWtNYXAgPSBnZXROYXRpdmUocm9vdCwgJ1dlYWtNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBXZWFrTWFwO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBhcnJheSBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lQXJyYXkoYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IG5ldyBhcnJheS5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuXG4gIC8vIEFkZCBwcm9wZXJ0aWVzIGFzc2lnbmVkIGJ5IGBSZWdFeHAjZXhlY2AuXG4gIGlmIChsZW5ndGggJiYgdHlwZW9mIGFycmF5WzBdID09ICdzdHJpbmcnICYmIGhhc093blByb3BlcnR5LmNhbGwoYXJyYXksICdpbmRleCcpKSB7XG4gICAgcmVzdWx0LmluZGV4ID0gYXJyYXkuaW5kZXg7XG4gICAgcmVzdWx0LmlucHV0ID0gYXJyYXkuaW5wdXQ7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0Q2xvbmVBcnJheTtcbiIsInZhciBjbG9uZUFycmF5QnVmZmVyID0gcmVxdWlyZSgnLi9fY2xvbmVBcnJheUJ1ZmZlcicpLFxuICAgIGNsb25lRGF0YVZpZXcgPSByZXF1aXJlKCcuL19jbG9uZURhdGFWaWV3JyksXG4gICAgY2xvbmVSZWdFeHAgPSByZXF1aXJlKCcuL19jbG9uZVJlZ0V4cCcpLFxuICAgIGNsb25lU3ltYm9sID0gcmVxdWlyZSgnLi9fY2xvbmVTeW1ib2wnKSxcbiAgICBjbG9uZVR5cGVkQXJyYXkgPSByZXF1aXJlKCcuL19jbG9uZVR5cGVkQXJyYXknKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gb2JqZWN0IGNsb25lIGJhc2VkIG9uIGl0cyBgdG9TdHJpbmdUYWdgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIG9ubHkgc3VwcG9ydHMgY2xvbmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gKiBgQm9vbGVhbmAsIGBEYXRlYCwgYEVycm9yYCwgYE1hcGAsIGBOdW1iZXJgLCBgUmVnRXhwYCwgYFNldGAsIG9yIGBTdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnIFRoZSBgdG9TdHJpbmdUYWdgIG9mIHRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZUJ5VGFnKG9iamVjdCwgdGFnLCBpc0RlZXApIHtcbiAgdmFyIEN0b3IgPSBvYmplY3QuY29uc3RydWN0b3I7XG4gIHN3aXRjaCAodGFnKSB7XG4gICAgY2FzZSBhcnJheUJ1ZmZlclRhZzpcbiAgICAgIHJldHVybiBjbG9uZUFycmF5QnVmZmVyKG9iamVjdCk7XG5cbiAgICBjYXNlIGJvb2xUYWc6XG4gICAgY2FzZSBkYXRlVGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yKCtvYmplY3QpO1xuXG4gICAgY2FzZSBkYXRhVmlld1RhZzpcbiAgICAgIHJldHVybiBjbG9uZURhdGFWaWV3KG9iamVjdCwgaXNEZWVwKTtcblxuICAgIGNhc2UgZmxvYXQzMlRhZzogY2FzZSBmbG9hdDY0VGFnOlxuICAgIGNhc2UgaW50OFRhZzogY2FzZSBpbnQxNlRhZzogY2FzZSBpbnQzMlRhZzpcbiAgICBjYXNlIHVpbnQ4VGFnOiBjYXNlIHVpbnQ4Q2xhbXBlZFRhZzogY2FzZSB1aW50MTZUYWc6IGNhc2UgdWludDMyVGFnOlxuICAgICAgcmV0dXJuIGNsb25lVHlwZWRBcnJheShvYmplY3QsIGlzRGVlcCk7XG5cbiAgICBjYXNlIG1hcFRhZzpcbiAgICAgIHJldHVybiBuZXcgQ3RvcjtcblxuICAgIGNhc2UgbnVtYmVyVGFnOlxuICAgIGNhc2Ugc3RyaW5nVGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yKG9iamVjdCk7XG5cbiAgICBjYXNlIHJlZ2V4cFRhZzpcbiAgICAgIHJldHVybiBjbG9uZVJlZ0V4cChvYmplY3QpO1xuXG4gICAgY2FzZSBzZXRUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3I7XG5cbiAgICBjYXNlIHN5bWJvbFRhZzpcbiAgICAgIHJldHVybiBjbG9uZVN5bWJvbChvYmplY3QpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdENsb25lQnlUYWc7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgVWludDhBcnJheSA9IHJvb3QuVWludDhBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBVaW50OEFycmF5O1xuIiwidmFyIGNsb25lQXJyYXlCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUFycmF5QnVmZmVyJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBkYXRhVmlld2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhVmlldyBUaGUgZGF0YSB2aWV3IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBkYXRhIHZpZXcuXG4gKi9cbmZ1bmN0aW9uIGNsb25lRGF0YVZpZXcoZGF0YVZpZXcsIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcihkYXRhVmlldy5idWZmZXIpIDogZGF0YVZpZXcuYnVmZmVyO1xuICByZXR1cm4gbmV3IGRhdGFWaWV3LmNvbnN0cnVjdG9yKGJ1ZmZlciwgZGF0YVZpZXcuYnl0ZU9mZnNldCwgZGF0YVZpZXcuYnl0ZUxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVEYXRhVmlldztcbiIsIi8qKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgIGZsYWdzIGZyb20gdGhlaXIgY29lcmNlZCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlRmxhZ3MgPSAvXFx3KiQvO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgcmVnZXhwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHJlZ2V4cCBUaGUgcmVnZXhwIHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVSZWdFeHAocmVnZXhwKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgcmVnZXhwLmNvbnN0cnVjdG9yKHJlZ2V4cC5zb3VyY2UsIHJlRmxhZ3MuZXhlYyhyZWdleHApKTtcbiAgcmVzdWx0Lmxhc3RJbmRleCA9IHJlZ2V4cC5sYXN0SW5kZXg7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVSZWdFeHA7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xWYWx1ZU9mID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by52YWx1ZU9mIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiB0aGUgYHN5bWJvbGAgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc3ltYm9sIFRoZSBzeW1ib2wgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHN5bWJvbCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGNsb25lU3ltYm9sKHN5bWJvbCkge1xuICByZXR1cm4gc3ltYm9sVmFsdWVPZiA/IE9iamVjdChzeW1ib2xWYWx1ZU9mLmNhbGwoc3ltYm9sKSkgOiB7fTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZVN5bWJvbDtcbiIsInZhciBjbG9uZUFycmF5QnVmZmVyID0gcmVxdWlyZSgnLi9fY2xvbmVBcnJheUJ1ZmZlcicpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgdHlwZWRBcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB0eXBlZEFycmF5IFRoZSB0eXBlZCBhcnJheSB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgdHlwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNsb25lVHlwZWRBcnJheSh0eXBlZEFycmF5LCBpc0RlZXApIHtcbiAgdmFyIGJ1ZmZlciA9IGlzRGVlcCA/IGNsb25lQXJyYXlCdWZmZXIodHlwZWRBcnJheS5idWZmZXIpIDogdHlwZWRBcnJheS5idWZmZXI7XG4gIHJldHVybiBuZXcgdHlwZWRBcnJheS5jb25zdHJ1Y3RvcihidWZmZXIsIHR5cGVkQXJyYXkuYnl0ZU9mZnNldCwgdHlwZWRBcnJheS5sZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lVHlwZWRBcnJheTtcbiIsInZhciBiYXNlQ3JlYXRlID0gcmVxdWlyZSgnLi9fYmFzZUNyZWF0ZScpLFxuICAgIGdldFByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2dldFByb3RvdHlwZScpLFxuICAgIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKTtcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVPYmplY3Qob2JqZWN0KSB7XG4gIHJldHVybiAodHlwZW9mIG9iamVjdC5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmICFpc1Byb3RvdHlwZShvYmplY3QpKVxuICAgID8gYmFzZUNyZWF0ZShnZXRQcm90b3R5cGUob2JqZWN0KSlcbiAgICA6IHt9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRDbG9uZU9iamVjdDtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0Q3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5jcmVhdGVgIHdpdGhvdXQgc3VwcG9ydCBmb3IgYXNzaWduaW5nXG4gKiBwcm9wZXJ0aWVzIHRvIHRoZSBjcmVhdGVkIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHByb3RvIFRoZSBvYmplY3QgdG8gaW5oZXJpdCBmcm9tLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqL1xudmFyIGJhc2VDcmVhdGUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIG9iamVjdCgpIHt9XG4gIHJldHVybiBmdW5jdGlvbihwcm90bykge1xuICAgIGlmICghaXNPYmplY3QocHJvdG8pKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGlmIChvYmplY3RDcmVhdGUpIHtcbiAgICAgIHJldHVybiBvYmplY3RDcmVhdGUocHJvdG8pO1xuICAgIH1cbiAgICBvYmplY3QucHJvdG90eXBlID0gcHJvdG87XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBvYmplY3Q7XG4gICAgb2JqZWN0LnByb3RvdHlwZSA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQ3JlYXRlO1xuIiwidmFyIGJhc2VJc01hcCA9IHJlcXVpcmUoJy4vX2Jhc2VJc01hcCcpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIG5vZGVVdGlsID0gcmVxdWlyZSgnLi9fbm9kZVV0aWwnKTtcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNNYXAgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc01hcDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYE1hcGAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbWFwLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNNYXAobmV3IE1hcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc01hcChuZXcgV2Vha01hcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNNYXAgPSBub2RlSXNNYXAgPyBiYXNlVW5hcnkobm9kZUlzTWFwKSA6IGJhc2VJc01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSBpc01hcDtcbiIsInZhciBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbWFwVGFnID0gJ1tvYmplY3QgTWFwXSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNNYXBgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbWFwLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc01hcCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBnZXRUYWcodmFsdWUpID09IG1hcFRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNNYXA7XG4iLCJ2YXIgYmFzZUlzU2V0ID0gcmVxdWlyZSgnLi9fYmFzZUlzU2V0JyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1NldCA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzU2V0O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU2V0YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzZXQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1NldChuZXcgU2V0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU2V0KG5ldyBXZWFrU2V0KTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1NldCA9IG5vZGVJc1NldCA/IGJhc2VVbmFyeShub2RlSXNTZXQpIDogYmFzZUlzU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU2V0O1xuIiwidmFyIGdldFRhZyA9IHJlcXVpcmUoJy4vX2dldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzZXRUYWcgPSAnW29iamVjdCBTZXRdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1NldGAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzZXQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzU2V0KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGdldFRhZyh2YWx1ZSkgPT0gc2V0VGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc1NldDtcbiIsInZhciBiYXNlVW5pcSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmlxJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGR1cGxpY2F0ZS1mcmVlIHZlcnNpb24gb2YgYW4gYXJyYXksIHVzaW5nXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLCBpbiB3aGljaCBvbmx5IHRoZSBmaXJzdCBvY2N1cnJlbmNlIG9mIGVhY2ggZWxlbWVudFxuICogaXMga2VwdC4gVGhlIG9yZGVyIG9mIHJlc3VsdCB2YWx1ZXMgaXMgZGV0ZXJtaW5lZCBieSB0aGUgb3JkZXIgdGhleSBvY2N1clxuICogaW4gdGhlIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBkdXBsaWNhdGUgZnJlZSBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogXy51bmlxKFsyLCAxLCAyXSk7XG4gKiAvLyA9PiBbMiwgMV1cbiAqL1xuZnVuY3Rpb24gdW5pcShhcnJheSkge1xuICByZXR1cm4gKGFycmF5ICYmIGFycmF5Lmxlbmd0aCkgPyBiYXNlVW5pcShhcnJheSkgOiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB1bmlxO1xuIiwidmFyIFNldENhY2hlID0gcmVxdWlyZSgnLi9fU2V0Q2FjaGUnKSxcbiAgICBhcnJheUluY2x1ZGVzID0gcmVxdWlyZSgnLi9fYXJyYXlJbmNsdWRlcycpLFxuICAgIGFycmF5SW5jbHVkZXNXaXRoID0gcmVxdWlyZSgnLi9fYXJyYXlJbmNsdWRlc1dpdGgnKSxcbiAgICBjYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2NhY2hlSGFzJyksXG4gICAgY3JlYXRlU2V0ID0gcmVxdWlyZSgnLi9fY3JlYXRlU2V0JyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmlxQnlgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWVdIFRoZSBpdGVyYXRlZSBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NvbXBhcmF0b3JdIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBkdXBsaWNhdGUgZnJlZSBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuaXEoYXJyYXksIGl0ZXJhdGVlLCBjb21wYXJhdG9yKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgaW5jbHVkZXMgPSBhcnJheUluY2x1ZGVzLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgaXNDb21tb24gPSB0cnVlLFxuICAgICAgcmVzdWx0ID0gW10sXG4gICAgICBzZWVuID0gcmVzdWx0O1xuXG4gIGlmIChjb21wYXJhdG9yKSB7XG4gICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICBpbmNsdWRlcyA9IGFycmF5SW5jbHVkZXNXaXRoO1xuICB9XG4gIGVsc2UgaWYgKGxlbmd0aCA+PSBMQVJHRV9BUlJBWV9TSVpFKSB7XG4gICAgdmFyIHNldCA9IGl0ZXJhdGVlID8gbnVsbCA6IGNyZWF0ZVNldChhcnJheSk7XG4gICAgaWYgKHNldCkge1xuICAgICAgcmV0dXJuIHNldFRvQXJyYXkoc2V0KTtcbiAgICB9XG4gICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICBpbmNsdWRlcyA9IGNhY2hlSGFzO1xuICAgIHNlZW4gPSBuZXcgU2V0Q2FjaGU7XG4gIH1cbiAgZWxzZSB7XG4gICAgc2VlbiA9IGl0ZXJhdGVlID8gW10gOiByZXN1bHQ7XG4gIH1cbiAgb3V0ZXI6XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICBjb21wdXRlZCA9IGl0ZXJhdGVlID8gaXRlcmF0ZWUodmFsdWUpIDogdmFsdWU7XG5cbiAgICB2YWx1ZSA9IChjb21wYXJhdG9yIHx8IHZhbHVlICE9PSAwKSA/IHZhbHVlIDogMDtcbiAgICBpZiAoaXNDb21tb24gJiYgY29tcHV0ZWQgPT09IGNvbXB1dGVkKSB7XG4gICAgICB2YXIgc2VlbkluZGV4ID0gc2Vlbi5sZW5ndGg7XG4gICAgICB3aGlsZSAoc2VlbkluZGV4LS0pIHtcbiAgICAgICAgaWYgKHNlZW5bc2VlbkluZGV4XSA9PT0gY29tcHV0ZWQpIHtcbiAgICAgICAgICBjb250aW51ZSBvdXRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGl0ZXJhdGVlKSB7XG4gICAgICAgIHNlZW4ucHVzaChjb21wdXRlZCk7XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKCFpbmNsdWRlcyhzZWVuLCBjb21wdXRlZCwgY29tcGFyYXRvcikpIHtcbiAgICAgIGlmIChzZWVuICE9PSByZXN1bHQpIHtcbiAgICAgICAgc2Vlbi5wdXNoKGNvbXB1dGVkKTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVW5pcTtcbiIsInZhciBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyksXG4gICAgc2V0Q2FjaGVBZGQgPSByZXF1aXJlKCcuL19zZXRDYWNoZUFkZCcpLFxuICAgIHNldENhY2hlSGFzID0gcmVxdWlyZSgnLi9fc2V0Q2FjaGVIYXMnKTtcblxuLyoqXG4gKlxuICogQ3JlYXRlcyBhbiBhcnJheSBjYWNoZSBvYmplY3QgdG8gc3RvcmUgdW5pcXVlIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbdmFsdWVzXSBUaGUgdmFsdWVzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTZXRDYWNoZSh2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMgPT0gbnVsbCA/IDAgOiB2YWx1ZXMubGVuZ3RoO1xuXG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGU7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdGhpcy5hZGQodmFsdWVzW2luZGV4XSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFNldENhY2hlYC5cblNldENhY2hlLnByb3RvdHlwZS5hZGQgPSBTZXRDYWNoZS5wcm90b3R5cGUucHVzaCA9IHNldENhY2hlQWRkO1xuU2V0Q2FjaGUucHJvdG90eXBlLmhhcyA9IHNldENhY2hlSGFzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldENhY2hlO1xuIiwiLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIEFkZHMgYHZhbHVlYCB0byB0aGUgYXJyYXkgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGFkZFxuICogQG1lbWJlck9mIFNldENhY2hlXG4gKiBAYWxpYXMgcHVzaFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2FjaGUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVBZGQodmFsdWUpIHtcbiAgdGhpcy5fX2RhdGFfXy5zZXQodmFsdWUsIEhBU0hfVU5ERUZJTkVEKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0Q2FjaGVBZGQ7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGluIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlSGFzKHZhbHVlKSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0Q2FjaGVIYXM7XG4iLCJ2YXIgYmFzZUluZGV4T2YgPSByZXF1aXJlKCcuL19iYXNlSW5kZXhPZicpO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5pbmNsdWRlc2AgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBzcGVjaWZ5aW5nIGFuIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB0YXJnZXQgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHRhcmdldGAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlJbmNsdWRlcyhhcnJheSwgdmFsdWUpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiYgYmFzZUluZGV4T2YoYXJyYXksIHZhbHVlLCAwKSA+IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5SW5jbHVkZXM7XG4iLCJ2YXIgYmFzZUZpbmRJbmRleCA9IHJlcXVpcmUoJy4vX2Jhc2VGaW5kSW5kZXgnKSxcbiAgICBiYXNlSXNOYU4gPSByZXF1aXJlKCcuL19iYXNlSXNOYU4nKSxcbiAgICBzdHJpY3RJbmRleE9mID0gcmVxdWlyZSgnLi9fc3RyaWN0SW5kZXhPZicpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmluZGV4T2ZgIHdpdGhvdXQgYGZyb21JbmRleGAgYm91bmRzIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBiYXNlSW5kZXhPZihhcnJheSwgdmFsdWUsIGZyb21JbmRleCkge1xuICByZXR1cm4gdmFsdWUgPT09IHZhbHVlXG4gICAgPyBzdHJpY3RJbmRleE9mKGFycmF5LCB2YWx1ZSwgZnJvbUluZGV4KVxuICAgIDogYmFzZUZpbmRJbmRleChhcnJheSwgYmFzZUlzTmFOLCBmcm9tSW5kZXgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJbmRleE9mO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5maW5kSW5kZXhgIGFuZCBgXy5maW5kTGFzdEluZGV4YCB3aXRob3V0XG4gKiBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmcm9tUmlnaHRdIFNwZWNpZnkgaXRlcmF0aW5nIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSwgZnJvbUluZGV4LCBmcm9tUmlnaHQpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIGluZGV4ID0gZnJvbUluZGV4ICsgKGZyb21SaWdodCA/IDEgOiAtMSk7XG5cbiAgd2hpbGUgKChmcm9tUmlnaHQgPyBpbmRleC0tIDogKytpbmRleCA8IGxlbmd0aCkpIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZpbmRJbmRleDtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYU5gIHdpdGhvdXQgc3VwcG9ydCBmb3IgbnVtYmVyIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYE5hTmAsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmFOKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTmFOO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uaW5kZXhPZmAgd2hpY2ggcGVyZm9ybXMgc3RyaWN0IGVxdWFsaXR5XG4gKiBjb21wYXJpc29ucyBvZiB2YWx1ZXMsIGkuZS4gYD09PWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gc3RyaWN0SW5kZXhPZihhcnJheSwgdmFsdWUsIGZyb21JbmRleCkge1xuICB2YXIgaW5kZXggPSBmcm9tSW5kZXggLSAxLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGFycmF5W2luZGV4XSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmljdEluZGV4T2Y7XG4iLCIvKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgbGlrZSBgYXJyYXlJbmNsdWRlc2AgZXhjZXB0IHRoYXQgaXQgYWNjZXB0cyBhIGNvbXBhcmF0b3IuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHRhcmdldCBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbXBhcmF0b3IgVGhlIGNvbXBhcmF0b3IgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdGFyZ2V0YCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheUluY2x1ZGVzV2l0aChhcnJheSwgdmFsdWUsIGNvbXBhcmF0b3IpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChjb21wYXJhdG9yKHZhbHVlLCBhcnJheVtpbmRleF0pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5SW5jbHVkZXNXaXRoO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYSBgY2FjaGVgIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjYWNoZSBUaGUgY2FjaGUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gY2FjaGVIYXMoY2FjaGUsIGtleSkge1xuICByZXR1cm4gY2FjaGUuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FjaGVIYXM7XG4iLCJ2YXIgU2V0ID0gcmVxdWlyZSgnLi9fU2V0JyksXG4gICAgbm9vcCA9IHJlcXVpcmUoJy4vbm9vcCcpLFxuICAgIHNldFRvQXJyYXkgPSByZXF1aXJlKCcuL19zZXRUb0FycmF5Jyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHNldCBvYmplY3Qgb2YgYHZhbHVlc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFkZCB0byB0aGUgc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IHNldC5cbiAqL1xudmFyIGNyZWF0ZVNldCA9ICEoU2V0ICYmICgxIC8gc2V0VG9BcnJheShuZXcgU2V0KFssLTBdKSlbMV0pID09IElORklOSVRZKSA/IG5vb3AgOiBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgcmV0dXJuIG5ldyBTZXQodmFsdWVzKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlU2V0O1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGB1bmRlZmluZWRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi4zLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5ub29wKTtcbiAqIC8vID0+IFt1bmRlZmluZWQsIHVuZGVmaW5lZF1cbiAqL1xuZnVuY3Rpb24gbm9vcCgpIHtcbiAgLy8gTm8gb3BlcmF0aW9uIHBlcmZvcm1lZC5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBub29wO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnJlcXVpcmUoXCIuL2luZGV4XCIpO1xuXG5yZXF1aXJlKFwiLi9jb3JlXCIpO1xuXG5yZXF1aXJlKFwiLi9lczIwMTVcIik7XG5cbnJlcXVpcmUoXCIuL2Zsb3dcIik7XG5cbnJlcXVpcmUoXCIuL2pzeFwiKTtcblxucmVxdWlyZShcIi4vbWlzY1wiKTtcblxucmVxdWlyZShcIi4vZXhwZXJpbWVudGFsXCIpOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2luZGV4ID0gcmVxdWlyZShcIi4uL2luZGV4XCIpO1xuXG52YXIgdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9pbmRleCk7XG5cbnZhciBfY29uc3RhbnRzID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKTtcblxudmFyIF9pbmRleDIgPSByZXF1aXJlKFwiLi9pbmRleFwiKTtcblxudmFyIF9pbmRleDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmRleDIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG4oMCwgX2luZGV4My5kZWZhdWx0KShcIkFycmF5RXhwcmVzc2lvblwiLCB7XG4gIGZpZWxkczoge1xuICAgIGVsZW1lbnRzOiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleDIuY2hhaW4pKCgwLCBfaW5kZXgyLmFzc2VydFZhbHVlVHlwZSkoXCJhcnJheVwiKSwgKDAsIF9pbmRleDIuYXNzZXJ0RWFjaCkoKDAsIF9pbmRleDIuYXNzZXJ0Tm9kZU9yVmFsdWVUeXBlKShcIm51bGxcIiwgXCJFeHByZXNzaW9uXCIsIFwiU3ByZWFkRWxlbWVudFwiKSkpLFxuICAgICAgZGVmYXVsdDogW11cbiAgICB9XG4gIH0sXG4gIHZpc2l0b3I6IFtcImVsZW1lbnRzXCJdLFxuICBhbGlhc2VzOiBbXCJFeHByZXNzaW9uXCJdXG59KTtcblxuKDAsIF9pbmRleDMuZGVmYXVsdCkoXCJBc3NpZ25tZW50RXhwcmVzc2lvblwiLCB7XG4gIGZpZWxkczoge1xuICAgIG9wZXJhdG9yOiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleDIuYXNzZXJ0VmFsdWVUeXBlKShcInN0cmluZ1wiKVxuICAgIH0sXG4gICAgbGVmdDoge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXgyLmFzc2VydE5vZGVUeXBlKShcIkxWYWxcIilcbiAgICB9LFxuICAgIHJpZ2h0OiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleDIuYXNzZXJ0Tm9kZVR5cGUpKFwiRXhwcmVzc2lvblwiKVxuICAgIH1cbiAgfSxcbiAgYnVpbGRlcjogW1wib3BlcmF0b3JcIiwgXCJsZWZ0XCIsIFwicmlnaHRcIl0sXG4gIHZpc2l0b3I6IFtcImxlZnRcIiwgXCJyaWdodFwiXSxcbiAgYWxpYXNlczogW1wiRXhwcmVzc2lvblwiXVxufSk7XG5cbigwLCBfaW5kZXgzLmRlZmF1bHQpKFwiQmluYXJ5RXhwcmVzc2lvblwiLCB7XG4gIGJ1aWxkZXI6IFtcIm9wZXJhdG9yXCIsIFwibGVmdFwiLCBcInJpZ2h0XCJdLFxuICBmaWVsZHM6IHtcbiAgICBvcGVyYXRvcjoge1xuICAgICAgdmFsaWRhdGU6IF9pbmRleDIuYXNzZXJ0T25lT2YuYXBwbHkodW5kZWZpbmVkLCBfY29uc3RhbnRzLkJJTkFSWV9PUEVSQVRPUlMpXG4gICAgfSxcbiAgICBsZWZ0OiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleDIuYXNzZXJ0Tm9kZVR5cGUpKFwiRXhwcmVzc2lvblwiKVxuICAgIH0sXG4gICAgcmlnaHQ6IHtcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4Mi5hc3NlcnROb2RlVHlwZSkoXCJFeHByZXNzaW9uXCIpXG4gICAgfVxuICB9LFxuICB2aXNpdG9yOiBbXCJsZWZ0XCIsIFwicmlnaHRcIl0sXG4gIGFsaWFzZXM6IFtcIkJpbmFyeVwiLCBcIkV4cHJlc3Npb25cIl1cbn0pO1xuXG4oMCwgX2luZGV4My5kZWZhdWx0KShcIkRpcmVjdGl2ZVwiLCB7XG4gIHZpc2l0b3I6IFtcInZhbHVlXCJdLFxuICBmaWVsZHM6IHtcbiAgICB2YWx1ZToge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXgyLmFzc2VydE5vZGVUeXBlKShcIkRpcmVjdGl2ZUxpdGVyYWxcIilcbiAgICB9XG4gIH1cbn0pO1xuXG4oMCwgX2luZGV4My5kZWZhdWx0KShcIkRpcmVjdGl2ZUxpdGVyYWxcIiwge1xuICBidWlsZGVyOiBbXCJ2YWx1ZVwiXSxcbiAgZmllbGRzOiB7XG4gICAgdmFsdWU6IHtcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4Mi5hc3NlcnRWYWx1ZVR5cGUpKFwic3RyaW5nXCIpXG4gICAgfVxuICB9XG59KTtcblxuKDAsIF9pbmRleDMuZGVmYXVsdCkoXCJCbG9ja1N0YXRlbWVudFwiLCB7XG4gIGJ1aWxkZXI6IFtcImJvZHlcIiwgXCJkaXJlY3RpdmVzXCJdLFxuICB2aXNpdG9yOiBbXCJkaXJlY3RpdmVzXCIsIFwiYm9keVwiXSxcbiAgZmllbGRzOiB7XG4gICAgZGlyZWN0aXZlczoge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXgyLmNoYWluKSgoMCwgX2luZGV4Mi5hc3NlcnRWYWx1ZVR5cGUpKFwiYXJyYXlcIiksICgwLCBfaW5kZXgyLmFzc2VydEVhY2gpKCgwLCBfaW5kZXgyLmFzc2VydE5vZGVUeXBlKShcIkRpcmVjdGl2ZVwiKSkpLFxuICAgICAgZGVmYXVsdDogW11cbiAgICB9LFxuICAgIGJvZHk6IHtcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4Mi5jaGFpbikoKDAsIF9pbmRleDIuYXNzZXJ0VmFsdWVUeXBlKShcImFycmF5XCIpLCAoMCwgX2luZGV4Mi5hc3NlcnRFYWNoKSgoMCwgX2luZGV4Mi5hc3NlcnROb2RlVHlwZSkoXCJTdGF0ZW1lbnRcIikpKVxuICAgIH1cbiAgfSxcbiAgYWxpYXNlczogW1wiU2NvcGFibGVcIiwgXCJCbG9ja1BhcmVudFwiLCBcIkJsb2NrXCIsIFwiU3RhdGVtZW50XCJdXG59KTtcblxuKDAsIF9pbmRleDMuZGVmYXVsdCkoXCJCcmVha1N0YXRlbWVudFwiLCB7XG4gIHZpc2l0b3I6IFtcImxhYmVsXCJdLFxuICBmaWVsZHM6IHtcbiAgICBsYWJlbDoge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXgyLmFzc2VydE5vZGVUeXBlKShcIklkZW50aWZpZXJcIiksXG4gICAgICBvcHRpb25hbDogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgYWxpYXNlczogW1wiU3RhdGVtZW50XCIsIFwiVGVybWluYXRvcmxlc3NcIiwgXCJDb21wbGV0aW9uU3RhdGVtZW50XCJdXG59KTtcblxuKDAsIF9pbmRleDMuZGVmYXVsdCkoXCJDYWxsRXhwcmVzc2lvblwiLCB7XG4gIHZpc2l0b3I6IFtcImNhbGxlZVwiLCBcImFyZ3VtZW50c1wiXSxcbiAgZmllbGRzOiB7XG4gICAgY2FsbGVlOiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleDIuYXNzZXJ0Tm9kZVR5cGUpKFwiRXhwcmVzc2lvblwiKVxuICAgIH0sXG4gICAgYXJndW1lbnRzOiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleDIuY2hhaW4pKCgwLCBfaW5kZXgyLmFzc2VydFZhbHVlVHlwZSkoXCJhcnJheVwiKSwgKDAsIF9pbmRleDIuYXNzZXJ0RWFjaCkoKDAsIF9pbmRleDIuYXNzZXJ0Tm9kZVR5cGUpKFwiRXhwcmVzc2lvblwiLCBcIlNwcmVhZEVsZW1lbnRcIikpKVxuICAgIH1cbiAgfSxcbiAgYWxpYXNlczogW1wiRXhwcmVzc2lvblwiXVxufSk7XG5cbigwLCBfaW5kZXgzLmRlZmF1bHQpKFwiQ2F0Y2hDbGF1c2VcIiwge1xuICB2aXNpdG9yOiBbXCJwYXJhbVwiLCBcImJvZHlcIl0sXG4gIGZpZWxkczoge1xuICAgIHBhcmFtOiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleDIuYXNzZXJ0Tm9kZVR5cGUpKFwiSWRlbnRpZmllclwiKVxuICAgIH0sXG4gICAgYm9keToge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXgyLmFzc2VydE5vZGVUeXBlKShcIkJsb2NrU3RhdGVtZW50XCIpXG4gICAgfVxuICB9LFxuICBhbGlhc2VzOiBbXCJTY29wYWJsZVwiXVxufSk7XG5cbigwLCBfaW5kZXgzLmRlZmF1bHQpKFwiQ29uZGl0aW9uYWxFeHByZXNzaW9uXCIsIHtcbiAgdmlzaXRvcjogW1widGVzdFwiLCBcImNvbnNlcXVlbnRcIiwgXCJhbHRlcm5hdGVcIl0sXG4gIGZpZWxkczoge1xuICAgIHRlc3Q6IHtcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4Mi5hc3NlcnROb2RlVHlwZSkoXCJFeHByZXNzaW9uXCIpXG4gICAgfSxcbiAgICBjb25zZXF1ZW50OiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleDIuYXNzZXJ0Tm9kZVR5cGUpKFwiRXhwcmVzc2lvblwiKVxuICAgIH0sXG4gICAgYWx0ZXJuYXRlOiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleDIuYXNzZXJ0Tm9kZVR5cGUpKFwiRXhwcmVzc2lvblwiKVxuICAgIH1cbiAgfSxcbiAgYWxpYXNlczogW1wiRXhwcmVzc2lvblwiLCBcIkNvbmRpdGlvbmFsXCJdXG59KTtcblxuKDAsIF9pbmRleDMuZGVmYXVsdCkoXCJDb250aW51ZVN0YXRlbWVudFwiLCB7XG4gIHZpc2l0b3I6IFtcImxhYmVsXCJdLFxuICBmaWVsZHM6IHtcbiAgICBsYWJlbDoge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXgyLmFzc2VydE5vZGVUeXBlKShcIklkZW50aWZpZXJcIiksXG4gICAgICBvcHRpb25hbDogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgYWxpYXNlczogW1wiU3RhdGVtZW50XCIsIFwiVGVybWluYXRvcmxlc3NcIiwgXCJDb21wbGV0aW9uU3RhdGVtZW50XCJdXG59KTtcblxuKDAsIF9pbmRleDMuZGVmYXVsdCkoXCJEZWJ1Z2dlclN0YXRlbWVudFwiLCB7XG4gIGFsaWFzZXM6IFtcIlN0YXRlbWVudFwiXVxufSk7XG5cbigwLCBfaW5kZXgzLmRlZmF1bHQpKFwiRG9XaGlsZVN0YXRlbWVudFwiLCB7XG4gIHZpc2l0b3I6IFtcInRlc3RcIiwgXCJib2R5XCJdLFxuICBmaWVsZHM6IHtcbiAgICB0ZXN0OiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleDIuYXNzZXJ0Tm9kZVR5cGUpKFwiRXhwcmVzc2lvblwiKVxuICAgIH0sXG4gICAgYm9keToge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXgyLmFzc2VydE5vZGVUeXBlKShcIlN0YXRlbWVudFwiKVxuICAgIH1cbiAgfSxcbiAgYWxpYXNlczogW1wiU3RhdGVtZW50XCIsIFwiQmxvY2tQYXJlbnRcIiwgXCJMb29wXCIsIFwiV2hpbGVcIiwgXCJTY29wYWJsZVwiXVxufSk7XG5cbigwLCBfaW5kZXgzLmRlZmF1bHQpKFwiRW1wdHlTdGF0ZW1lbnRcIiwge1xuICBhbGlhc2VzOiBbXCJTdGF0ZW1lbnRcIl1cbn0pO1xuXG4oMCwgX2luZGV4My5kZWZhdWx0KShcIkV4cHJlc3Npb25TdGF0ZW1lbnRcIiwge1xuICB2aXNpdG9yOiBbXCJleHByZXNzaW9uXCJdLFxuICBmaWVsZHM6IHtcbiAgICBleHByZXNzaW9uOiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleDIuYXNzZXJ0Tm9kZVR5cGUpKFwiRXhwcmVzc2lvblwiKVxuICAgIH1cbiAgfSxcbiAgYWxpYXNlczogW1wiU3RhdGVtZW50XCIsIFwiRXhwcmVzc2lvbldyYXBwZXJcIl1cbn0pO1xuXG4oMCwgX2luZGV4My5kZWZhdWx0KShcIkZpbGVcIiwge1xuICBidWlsZGVyOiBbXCJwcm9ncmFtXCIsIFwiY29tbWVudHNcIiwgXCJ0b2tlbnNcIl0sXG4gIHZpc2l0b3I6IFtcInByb2dyYW1cIl0sXG4gIGZpZWxkczoge1xuICAgIHByb2dyYW06IHtcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4Mi5hc3NlcnROb2RlVHlwZSkoXCJQcm9ncmFtXCIpXG4gICAgfVxuICB9XG59KTtcblxuKDAsIF9pbmRleDMuZGVmYXVsdCkoXCJGb3JJblN0YXRlbWVudFwiLCB7XG4gIHZpc2l0b3I6IFtcImxlZnRcIiwgXCJyaWdodFwiLCBcImJvZHlcIl0sXG4gIGFsaWFzZXM6IFtcIlNjb3BhYmxlXCIsIFwiU3RhdGVtZW50XCIsIFwiRm9yXCIsIFwiQmxvY2tQYXJlbnRcIiwgXCJMb29wXCIsIFwiRm9yWFN0YXRlbWVudFwiXSxcbiAgZmllbGRzOiB7XG4gICAgbGVmdDoge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXgyLmFzc2VydE5vZGVUeXBlKShcIlZhcmlhYmxlRGVjbGFyYXRpb25cIiwgXCJMVmFsXCIpXG4gICAgfSxcbiAgICByaWdodDoge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXgyLmFzc2VydE5vZGVUeXBlKShcIkV4cHJlc3Npb25cIilcbiAgICB9LFxuICAgIGJvZHk6IHtcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4Mi5hc3NlcnROb2RlVHlwZSkoXCJTdGF0ZW1lbnRcIilcbiAgICB9XG4gIH1cbn0pO1xuXG4oMCwgX2luZGV4My5kZWZhdWx0KShcIkZvclN0YXRlbWVudFwiLCB7XG4gIHZpc2l0b3I6IFtcImluaXRcIiwgXCJ0ZXN0XCIsIFwidXBkYXRlXCIsIFwiYm9keVwiXSxcbiAgYWxpYXNlczogW1wiU2NvcGFibGVcIiwgXCJTdGF0ZW1lbnRcIiwgXCJGb3JcIiwgXCJCbG9ja1BhcmVudFwiLCBcIkxvb3BcIl0sXG4gIGZpZWxkczoge1xuICAgIGluaXQ6IHtcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4Mi5hc3NlcnROb2RlVHlwZSkoXCJWYXJpYWJsZURlY2xhcmF0aW9uXCIsIFwiRXhwcmVzc2lvblwiKSxcbiAgICAgIG9wdGlvbmFsOiB0cnVlXG4gICAgfSxcbiAgICB0ZXN0OiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleDIuYXNzZXJ0Tm9kZVR5cGUpKFwiRXhwcmVzc2lvblwiKSxcbiAgICAgIG9wdGlvbmFsOiB0cnVlXG4gICAgfSxcbiAgICB1cGRhdGU6IHtcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4Mi5hc3NlcnROb2RlVHlwZSkoXCJFeHByZXNzaW9uXCIpLFxuICAgICAgb3B0aW9uYWw6IHRydWVcbiAgICB9LFxuICAgIGJvZHk6IHtcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4Mi5hc3NlcnROb2RlVHlwZSkoXCJTdGF0ZW1lbnRcIilcbiAgICB9XG4gIH1cbn0pO1xuXG4oMCwgX2luZGV4My5kZWZhdWx0KShcIkZ1bmN0aW9uRGVjbGFyYXRpb25cIiwge1xuICBidWlsZGVyOiBbXCJpZFwiLCBcInBhcmFtc1wiLCBcImJvZHlcIiwgXCJnZW5lcmF0b3JcIiwgXCJhc3luY1wiXSxcbiAgdmlzaXRvcjogW1wiaWRcIiwgXCJwYXJhbXNcIiwgXCJib2R5XCIsIFwicmV0dXJuVHlwZVwiLCBcInR5cGVQYXJhbWV0ZXJzXCJdLFxuICBmaWVsZHM6IHtcbiAgICBpZDoge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXgyLmFzc2VydE5vZGVUeXBlKShcIklkZW50aWZpZXJcIilcbiAgICB9LFxuICAgIHBhcmFtczoge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXgyLmNoYWluKSgoMCwgX2luZGV4Mi5hc3NlcnRWYWx1ZVR5cGUpKFwiYXJyYXlcIiksICgwLCBfaW5kZXgyLmFzc2VydEVhY2gpKCgwLCBfaW5kZXgyLmFzc2VydE5vZGVUeXBlKShcIkxWYWxcIikpKVxuICAgIH0sXG4gICAgYm9keToge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXgyLmFzc2VydE5vZGVUeXBlKShcIkJsb2NrU3RhdGVtZW50XCIpXG4gICAgfSxcbiAgICBnZW5lcmF0b3I6IHtcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXgyLmFzc2VydFZhbHVlVHlwZSkoXCJib29sZWFuXCIpXG4gICAgfSxcbiAgICBhc3luYzoge1xuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleDIuYXNzZXJ0VmFsdWVUeXBlKShcImJvb2xlYW5cIilcbiAgICB9XG4gIH0sXG4gIGFsaWFzZXM6IFtcIlNjb3BhYmxlXCIsIFwiRnVuY3Rpb25cIiwgXCJCbG9ja1BhcmVudFwiLCBcIkZ1bmN0aW9uUGFyZW50XCIsIFwiU3RhdGVtZW50XCIsIFwiUHVyZWlzaFwiLCBcIkRlY2xhcmF0aW9uXCJdXG59KTtcblxuKDAsIF9pbmRleDMuZGVmYXVsdCkoXCJGdW5jdGlvbkV4cHJlc3Npb25cIiwge1xuICBpbmhlcml0czogXCJGdW5jdGlvbkRlY2xhcmF0aW9uXCIsXG4gIGFsaWFzZXM6IFtcIlNjb3BhYmxlXCIsIFwiRnVuY3Rpb25cIiwgXCJCbG9ja1BhcmVudFwiLCBcIkZ1bmN0aW9uUGFyZW50XCIsIFwiRXhwcmVzc2lvblwiLCBcIlB1cmVpc2hcIl0sXG4gIGZpZWxkczoge1xuICAgIGlkOiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleDIuYXNzZXJ0Tm9kZVR5cGUpKFwiSWRlbnRpZmllclwiKSxcbiAgICAgIG9wdGlvbmFsOiB0cnVlXG4gICAgfSxcbiAgICBwYXJhbXM6IHtcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4Mi5jaGFpbikoKDAsIF9pbmRleDIuYXNzZXJ0VmFsdWVUeXBlKShcImFycmF5XCIpLCAoMCwgX2luZGV4Mi5hc3NlcnRFYWNoKSgoMCwgX2luZGV4Mi5hc3NlcnROb2RlVHlwZSkoXCJMVmFsXCIpKSlcbiAgICB9LFxuICAgIGJvZHk6IHtcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4Mi5hc3NlcnROb2RlVHlwZSkoXCJCbG9ja1N0YXRlbWVudFwiKVxuICAgIH0sXG4gICAgZ2VuZXJhdG9yOiB7XG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4Mi5hc3NlcnRWYWx1ZVR5cGUpKFwiYm9vbGVhblwiKVxuICAgIH0sXG4gICAgYXN5bmM6IHtcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXgyLmFzc2VydFZhbHVlVHlwZSkoXCJib29sZWFuXCIpXG4gICAgfVxuICB9XG59KTtcblxuKDAsIF9pbmRleDMuZGVmYXVsdCkoXCJJZGVudGlmaWVyXCIsIHtcbiAgYnVpbGRlcjogW1wibmFtZVwiXSxcbiAgdmlzaXRvcjogW1widHlwZUFubm90YXRpb25cIl0sXG4gIGFsaWFzZXM6IFtcIkV4cHJlc3Npb25cIiwgXCJMVmFsXCJdLFxuICBmaWVsZHM6IHtcbiAgICBuYW1lOiB7XG4gICAgICB2YWxpZGF0ZTogZnVuY3Rpb24gdmFsaWRhdGUobm9kZSwga2V5LCB2YWwpIHtcbiAgICAgICAgaWYgKCF0LmlzVmFsaWRJZGVudGlmaWVyKHZhbCkpIHt9XG4gICAgICB9XG4gICAgfSxcbiAgICBkZWNvcmF0b3JzOiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleDIuY2hhaW4pKCgwLCBfaW5kZXgyLmFzc2VydFZhbHVlVHlwZSkoXCJhcnJheVwiKSwgKDAsIF9pbmRleDIuYXNzZXJ0RWFjaCkoKDAsIF9pbmRleDIuYXNzZXJ0Tm9kZVR5cGUpKFwiRGVjb3JhdG9yXCIpKSlcbiAgICB9XG4gIH1cbn0pO1xuXG4oMCwgX2luZGV4My5kZWZhdWx0KShcIklmU3RhdGVtZW50XCIsIHtcbiAgdmlzaXRvcjogW1widGVzdFwiLCBcImNvbnNlcXVlbnRcIiwgXCJhbHRlcm5hdGVcIl0sXG4gIGFsaWFzZXM6IFtcIlN0YXRlbWVudFwiLCBcIkNvbmRpdGlvbmFsXCJdLFxuICBmaWVsZHM6IHtcbiAgICB0ZXN0OiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleDIuYXNzZXJ0Tm9kZVR5cGUpKFwiRXhwcmVzc2lvblwiKVxuICAgIH0sXG4gICAgY29uc2VxdWVudDoge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXgyLmFzc2VydE5vZGVUeXBlKShcIlN0YXRlbWVudFwiKVxuICAgIH0sXG4gICAgYWx0ZXJuYXRlOiB7XG4gICAgICBvcHRpb25hbDogdHJ1ZSxcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4Mi5hc3NlcnROb2RlVHlwZSkoXCJTdGF0ZW1lbnRcIilcbiAgICB9XG4gIH1cbn0pO1xuXG4oMCwgX2luZGV4My5kZWZhdWx0KShcIkxhYmVsZWRTdGF0ZW1lbnRcIiwge1xuICB2aXNpdG9yOiBbXCJsYWJlbFwiLCBcImJvZHlcIl0sXG4gIGFsaWFzZXM6IFtcIlN0YXRlbWVudFwiXSxcbiAgZmllbGRzOiB7XG4gICAgbGFiZWw6IHtcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4Mi5hc3NlcnROb2RlVHlwZSkoXCJJZGVudGlmaWVyXCIpXG4gICAgfSxcbiAgICBib2R5OiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleDIuYXNzZXJ0Tm9kZVR5cGUpKFwiU3RhdGVtZW50XCIpXG4gICAgfVxuICB9XG59KTtcblxuKDAsIF9pbmRleDMuZGVmYXVsdCkoXCJTdHJpbmdMaXRlcmFsXCIsIHtcbiAgYnVpbGRlcjogW1widmFsdWVcIl0sXG4gIGZpZWxkczoge1xuICAgIHZhbHVlOiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleDIuYXNzZXJ0VmFsdWVUeXBlKShcInN0cmluZ1wiKVxuICAgIH1cbiAgfSxcbiAgYWxpYXNlczogW1wiRXhwcmVzc2lvblwiLCBcIlB1cmVpc2hcIiwgXCJMaXRlcmFsXCIsIFwiSW1tdXRhYmxlXCJdXG59KTtcblxuKDAsIF9pbmRleDMuZGVmYXVsdCkoXCJOdW1lcmljTGl0ZXJhbFwiLCB7XG4gIGJ1aWxkZXI6IFtcInZhbHVlXCJdLFxuICBkZXByZWNhdGVkQWxpYXM6IFwiTnVtYmVyTGl0ZXJhbFwiLFxuICBmaWVsZHM6IHtcbiAgICB2YWx1ZToge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXgyLmFzc2VydFZhbHVlVHlwZSkoXCJudW1iZXJcIilcbiAgICB9XG4gIH0sXG4gIGFsaWFzZXM6IFtcIkV4cHJlc3Npb25cIiwgXCJQdXJlaXNoXCIsIFwiTGl0ZXJhbFwiLCBcIkltbXV0YWJsZVwiXVxufSk7XG5cbigwLCBfaW5kZXgzLmRlZmF1bHQpKFwiTnVsbExpdGVyYWxcIiwge1xuICBhbGlhc2VzOiBbXCJFeHByZXNzaW9uXCIsIFwiUHVyZWlzaFwiLCBcIkxpdGVyYWxcIiwgXCJJbW11dGFibGVcIl1cbn0pO1xuXG4oMCwgX2luZGV4My5kZWZhdWx0KShcIkJvb2xlYW5MaXRlcmFsXCIsIHtcbiAgYnVpbGRlcjogW1widmFsdWVcIl0sXG4gIGZpZWxkczoge1xuICAgIHZhbHVlOiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleDIuYXNzZXJ0VmFsdWVUeXBlKShcImJvb2xlYW5cIilcbiAgICB9XG4gIH0sXG4gIGFsaWFzZXM6IFtcIkV4cHJlc3Npb25cIiwgXCJQdXJlaXNoXCIsIFwiTGl0ZXJhbFwiLCBcIkltbXV0YWJsZVwiXVxufSk7XG5cbigwLCBfaW5kZXgzLmRlZmF1bHQpKFwiUmVnRXhwTGl0ZXJhbFwiLCB7XG4gIGJ1aWxkZXI6IFtcInBhdHRlcm5cIiwgXCJmbGFnc1wiXSxcbiAgZGVwcmVjYXRlZEFsaWFzOiBcIlJlZ2V4TGl0ZXJhbFwiLFxuICBhbGlhc2VzOiBbXCJFeHByZXNzaW9uXCIsIFwiTGl0ZXJhbFwiXSxcbiAgZmllbGRzOiB7XG4gICAgcGF0dGVybjoge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXgyLmFzc2VydFZhbHVlVHlwZSkoXCJzdHJpbmdcIilcbiAgICB9LFxuICAgIGZsYWdzOiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleDIuYXNzZXJ0VmFsdWVUeXBlKShcInN0cmluZ1wiKSxcbiAgICAgIGRlZmF1bHQ6IFwiXCJcbiAgICB9XG4gIH1cbn0pO1xuXG4oMCwgX2luZGV4My5kZWZhdWx0KShcIkxvZ2ljYWxFeHByZXNzaW9uXCIsIHtcbiAgYnVpbGRlcjogW1wib3BlcmF0b3JcIiwgXCJsZWZ0XCIsIFwicmlnaHRcIl0sXG4gIHZpc2l0b3I6IFtcImxlZnRcIiwgXCJyaWdodFwiXSxcbiAgYWxpYXNlczogW1wiQmluYXJ5XCIsIFwiRXhwcmVzc2lvblwiXSxcbiAgZmllbGRzOiB7XG4gICAgb3BlcmF0b3I6IHtcbiAgICAgIHZhbGlkYXRlOiBfaW5kZXgyLmFzc2VydE9uZU9mLmFwcGx5KHVuZGVmaW5lZCwgX2NvbnN0YW50cy5MT0dJQ0FMX09QRVJBVE9SUylcbiAgICB9LFxuICAgIGxlZnQ6IHtcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4Mi5hc3NlcnROb2RlVHlwZSkoXCJFeHByZXNzaW9uXCIpXG4gICAgfSxcbiAgICByaWdodDoge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXgyLmFzc2VydE5vZGVUeXBlKShcIkV4cHJlc3Npb25cIilcbiAgICB9XG4gIH1cbn0pO1xuXG4oMCwgX2luZGV4My5kZWZhdWx0KShcIk1lbWJlckV4cHJlc3Npb25cIiwge1xuICBidWlsZGVyOiBbXCJvYmplY3RcIiwgXCJwcm9wZXJ0eVwiLCBcImNvbXB1dGVkXCJdLFxuICB2aXNpdG9yOiBbXCJvYmplY3RcIiwgXCJwcm9wZXJ0eVwiXSxcbiAgYWxpYXNlczogW1wiRXhwcmVzc2lvblwiLCBcIkxWYWxcIl0sXG4gIGZpZWxkczoge1xuICAgIG9iamVjdDoge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXgyLmFzc2VydE5vZGVUeXBlKShcIkV4cHJlc3Npb25cIilcbiAgICB9LFxuICAgIHByb3BlcnR5OiB7XG4gICAgICB2YWxpZGF0ZTogZnVuY3Rpb24gdmFsaWRhdGUobm9kZSwga2V5LCB2YWwpIHtcbiAgICAgICAgdmFyIGV4cGVjdGVkVHlwZSA9IG5vZGUuY29tcHV0ZWQgPyBcIkV4cHJlc3Npb25cIiA6IFwiSWRlbnRpZmllclwiO1xuICAgICAgICAoMCwgX2luZGV4Mi5hc3NlcnROb2RlVHlwZSkoZXhwZWN0ZWRUeXBlKShub2RlLCBrZXksIHZhbCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9XG4gIH1cbn0pO1xuXG4oMCwgX2luZGV4My5kZWZhdWx0KShcIk5ld0V4cHJlc3Npb25cIiwge1xuICB2aXNpdG9yOiBbXCJjYWxsZWVcIiwgXCJhcmd1bWVudHNcIl0sXG4gIGFsaWFzZXM6IFtcIkV4cHJlc3Npb25cIl0sXG4gIGZpZWxkczoge1xuICAgIGNhbGxlZToge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXgyLmFzc2VydE5vZGVUeXBlKShcIkV4cHJlc3Npb25cIilcbiAgICB9LFxuICAgIGFyZ3VtZW50czoge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXgyLmNoYWluKSgoMCwgX2luZGV4Mi5hc3NlcnRWYWx1ZVR5cGUpKFwiYXJyYXlcIiksICgwLCBfaW5kZXgyLmFzc2VydEVhY2gpKCgwLCBfaW5kZXgyLmFzc2VydE5vZGVUeXBlKShcIkV4cHJlc3Npb25cIiwgXCJTcHJlYWRFbGVtZW50XCIpKSlcbiAgICB9XG4gIH1cbn0pO1xuXG4oMCwgX2luZGV4My5kZWZhdWx0KShcIlByb2dyYW1cIiwge1xuICB2aXNpdG9yOiBbXCJkaXJlY3RpdmVzXCIsIFwiYm9keVwiXSxcbiAgYnVpbGRlcjogW1wiYm9keVwiLCBcImRpcmVjdGl2ZXNcIl0sXG4gIGZpZWxkczoge1xuICAgIGRpcmVjdGl2ZXM6IHtcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4Mi5jaGFpbikoKDAsIF9pbmRleDIuYXNzZXJ0VmFsdWVUeXBlKShcImFycmF5XCIpLCAoMCwgX2luZGV4Mi5hc3NlcnRFYWNoKSgoMCwgX2luZGV4Mi5hc3NlcnROb2RlVHlwZSkoXCJEaXJlY3RpdmVcIikpKSxcbiAgICAgIGRlZmF1bHQ6IFtdXG4gICAgfSxcbiAgICBib2R5OiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleDIuY2hhaW4pKCgwLCBfaW5kZXgyLmFzc2VydFZhbHVlVHlwZSkoXCJhcnJheVwiKSwgKDAsIF9pbmRleDIuYXNzZXJ0RWFjaCkoKDAsIF9pbmRleDIuYXNzZXJ0Tm9kZVR5cGUpKFwiU3RhdGVtZW50XCIpKSlcbiAgICB9XG4gIH0sXG4gIGFsaWFzZXM6IFtcIlNjb3BhYmxlXCIsIFwiQmxvY2tQYXJlbnRcIiwgXCJCbG9ja1wiLCBcIkZ1bmN0aW9uUGFyZW50XCJdXG59KTtcblxuKDAsIF9pbmRleDMuZGVmYXVsdCkoXCJPYmplY3RFeHByZXNzaW9uXCIsIHtcbiAgdmlzaXRvcjogW1wicHJvcGVydGllc1wiXSxcbiAgYWxpYXNlczogW1wiRXhwcmVzc2lvblwiXSxcbiAgZmllbGRzOiB7XG4gICAgcHJvcGVydGllczoge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXgyLmNoYWluKSgoMCwgX2luZGV4Mi5hc3NlcnRWYWx1ZVR5cGUpKFwiYXJyYXlcIiksICgwLCBfaW5kZXgyLmFzc2VydEVhY2gpKCgwLCBfaW5kZXgyLmFzc2VydE5vZGVUeXBlKShcIk9iamVjdE1ldGhvZFwiLCBcIk9iamVjdFByb3BlcnR5XCIsIFwiU3ByZWFkUHJvcGVydHlcIikpKVxuICAgIH1cbiAgfVxufSk7XG5cbigwLCBfaW5kZXgzLmRlZmF1bHQpKFwiT2JqZWN0TWV0aG9kXCIsIHtcbiAgYnVpbGRlcjogW1wia2luZFwiLCBcImtleVwiLCBcInBhcmFtc1wiLCBcImJvZHlcIiwgXCJjb21wdXRlZFwiXSxcbiAgZmllbGRzOiB7XG4gICAga2luZDoge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXgyLmNoYWluKSgoMCwgX2luZGV4Mi5hc3NlcnRWYWx1ZVR5cGUpKFwic3RyaW5nXCIpLCAoMCwgX2luZGV4Mi5hc3NlcnRPbmVPZikoXCJtZXRob2RcIiwgXCJnZXRcIiwgXCJzZXRcIikpLFxuICAgICAgZGVmYXVsdDogXCJtZXRob2RcIlxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4Mi5hc3NlcnRWYWx1ZVR5cGUpKFwiYm9vbGVhblwiKSxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBrZXk6IHtcbiAgICAgIHZhbGlkYXRlOiBmdW5jdGlvbiB2YWxpZGF0ZShub2RlLCBrZXksIHZhbCkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRUeXBlcyA9IG5vZGUuY29tcHV0ZWQgPyBbXCJFeHByZXNzaW9uXCJdIDogW1wiSWRlbnRpZmllclwiLCBcIlN0cmluZ0xpdGVyYWxcIiwgXCJOdW1lcmljTGl0ZXJhbFwiXTtcbiAgICAgICAgX2luZGV4Mi5hc3NlcnROb2RlVHlwZS5hcHBseSh1bmRlZmluZWQsIGV4cGVjdGVkVHlwZXMpKG5vZGUsIGtleSwgdmFsKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlY29yYXRvcnM6IHtcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4Mi5jaGFpbikoKDAsIF9pbmRleDIuYXNzZXJ0VmFsdWVUeXBlKShcImFycmF5XCIpLCAoMCwgX2luZGV4Mi5hc3NlcnRFYWNoKSgoMCwgX2luZGV4Mi5hc3NlcnROb2RlVHlwZSkoXCJEZWNvcmF0b3JcIikpKVxuICAgIH0sXG4gICAgYm9keToge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXgyLmFzc2VydE5vZGVUeXBlKShcIkJsb2NrU3RhdGVtZW50XCIpXG4gICAgfSxcbiAgICBnZW5lcmF0b3I6IHtcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXgyLmFzc2VydFZhbHVlVHlwZSkoXCJib29sZWFuXCIpXG4gICAgfSxcbiAgICBhc3luYzoge1xuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleDIuYXNzZXJ0VmFsdWVUeXBlKShcImJvb2xlYW5cIilcbiAgICB9XG4gIH0sXG4gIHZpc2l0b3I6IFtcImtleVwiLCBcInBhcmFtc1wiLCBcImJvZHlcIiwgXCJkZWNvcmF0b3JzXCIsIFwicmV0dXJuVHlwZVwiLCBcInR5cGVQYXJhbWV0ZXJzXCJdLFxuICBhbGlhc2VzOiBbXCJVc2VyV2hpdGVzcGFjYWJsZVwiLCBcIkZ1bmN0aW9uXCIsIFwiU2NvcGFibGVcIiwgXCJCbG9ja1BhcmVudFwiLCBcIkZ1bmN0aW9uUGFyZW50XCIsIFwiTWV0aG9kXCIsIFwiT2JqZWN0TWVtYmVyXCJdXG59KTtcblxuKDAsIF9pbmRleDMuZGVmYXVsdCkoXCJPYmplY3RQcm9wZXJ0eVwiLCB7XG4gIGJ1aWxkZXI6IFtcImtleVwiLCBcInZhbHVlXCIsIFwiY29tcHV0ZWRcIiwgXCJzaG9ydGhhbmRcIiwgXCJkZWNvcmF0b3JzXCJdLFxuICBmaWVsZHM6IHtcbiAgICBjb21wdXRlZDoge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXgyLmFzc2VydFZhbHVlVHlwZSkoXCJib29sZWFuXCIpLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIGtleToge1xuICAgICAgdmFsaWRhdGU6IGZ1bmN0aW9uIHZhbGlkYXRlKG5vZGUsIGtleSwgdmFsKSB7XG4gICAgICAgIHZhciBleHBlY3RlZFR5cGVzID0gbm9kZS5jb21wdXRlZCA/IFtcIkV4cHJlc3Npb25cIl0gOiBbXCJJZGVudGlmaWVyXCIsIFwiU3RyaW5nTGl0ZXJhbFwiLCBcIk51bWVyaWNMaXRlcmFsXCJdO1xuICAgICAgICBfaW5kZXgyLmFzc2VydE5vZGVUeXBlLmFwcGx5KHVuZGVmaW5lZCwgZXhwZWN0ZWRUeXBlcykobm9kZSwga2V5LCB2YWwpO1xuICAgICAgfVxuICAgIH0sXG4gICAgdmFsdWU6IHtcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4Mi5hc3NlcnROb2RlVHlwZSkoXCJFeHByZXNzaW9uXCIsIFwiUGF0dGVyblwiLCBcIlJlc3RFbGVtZW50XCIpXG4gICAgfSxcbiAgICBzaG9ydGhhbmQ6IHtcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4Mi5hc3NlcnRWYWx1ZVR5cGUpKFwiYm9vbGVhblwiKSxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBkZWNvcmF0b3JzOiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleDIuY2hhaW4pKCgwLCBfaW5kZXgyLmFzc2VydFZhbHVlVHlwZSkoXCJhcnJheVwiKSwgKDAsIF9pbmRleDIuYXNzZXJ0RWFjaCkoKDAsIF9pbmRleDIuYXNzZXJ0Tm9kZVR5cGUpKFwiRGVjb3JhdG9yXCIpKSksXG4gICAgICBvcHRpb25hbDogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgdmlzaXRvcjogW1wia2V5XCIsIFwidmFsdWVcIiwgXCJkZWNvcmF0b3JzXCJdLFxuICBhbGlhc2VzOiBbXCJVc2VyV2hpdGVzcGFjYWJsZVwiLCBcIlByb3BlcnR5XCIsIFwiT2JqZWN0TWVtYmVyXCJdXG59KTtcblxuKDAsIF9pbmRleDMuZGVmYXVsdCkoXCJSZXN0RWxlbWVudFwiLCB7XG4gIHZpc2l0b3I6IFtcImFyZ3VtZW50XCIsIFwidHlwZUFubm90YXRpb25cIl0sXG4gIGFsaWFzZXM6IFtcIkxWYWxcIl0sXG4gIGZpZWxkczoge1xuICAgIGFyZ3VtZW50OiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleDIuYXNzZXJ0Tm9kZVR5cGUpKFwiTFZhbFwiKVxuICAgIH0sXG4gICAgZGVjb3JhdG9yczoge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXgyLmNoYWluKSgoMCwgX2luZGV4Mi5hc3NlcnRWYWx1ZVR5cGUpKFwiYXJyYXlcIiksICgwLCBfaW5kZXgyLmFzc2VydEVhY2gpKCgwLCBfaW5kZXgyLmFzc2VydE5vZGVUeXBlKShcIkRlY29yYXRvclwiKSkpXG4gICAgfVxuICB9XG59KTtcblxuKDAsIF9pbmRleDMuZGVmYXVsdCkoXCJSZXR1cm5TdGF0ZW1lbnRcIiwge1xuICB2aXNpdG9yOiBbXCJhcmd1bWVudFwiXSxcbiAgYWxpYXNlczogW1wiU3RhdGVtZW50XCIsIFwiVGVybWluYXRvcmxlc3NcIiwgXCJDb21wbGV0aW9uU3RhdGVtZW50XCJdLFxuICBmaWVsZHM6IHtcbiAgICBhcmd1bWVudDoge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXgyLmFzc2VydE5vZGVUeXBlKShcIkV4cHJlc3Npb25cIiksXG4gICAgICBvcHRpb25hbDogdHJ1ZVxuICAgIH1cbiAgfVxufSk7XG5cbigwLCBfaW5kZXgzLmRlZmF1bHQpKFwiU2VxdWVuY2VFeHByZXNzaW9uXCIsIHtcbiAgdmlzaXRvcjogW1wiZXhwcmVzc2lvbnNcIl0sXG4gIGZpZWxkczoge1xuICAgIGV4cHJlc3Npb25zOiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleDIuY2hhaW4pKCgwLCBfaW5kZXgyLmFzc2VydFZhbHVlVHlwZSkoXCJhcnJheVwiKSwgKDAsIF9pbmRleDIuYXNzZXJ0RWFjaCkoKDAsIF9pbmRleDIuYXNzZXJ0Tm9kZVR5cGUpKFwiRXhwcmVzc2lvblwiKSkpXG4gICAgfVxuICB9LFxuICBhbGlhc2VzOiBbXCJFeHByZXNzaW9uXCJdXG59KTtcblxuKDAsIF9pbmRleDMuZGVmYXVsdCkoXCJTd2l0Y2hDYXNlXCIsIHtcbiAgdmlzaXRvcjogW1widGVzdFwiLCBcImNvbnNlcXVlbnRcIl0sXG4gIGZpZWxkczoge1xuICAgIHRlc3Q6IHtcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4Mi5hc3NlcnROb2RlVHlwZSkoXCJFeHByZXNzaW9uXCIpLFxuICAgICAgb3B0aW9uYWw6IHRydWVcbiAgICB9LFxuICAgIGNvbnNlcXVlbnQ6IHtcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4Mi5jaGFpbikoKDAsIF9pbmRleDIuYXNzZXJ0VmFsdWVUeXBlKShcImFycmF5XCIpLCAoMCwgX2luZGV4Mi5hc3NlcnRFYWNoKSgoMCwgX2luZGV4Mi5hc3NlcnROb2RlVHlwZSkoXCJTdGF0ZW1lbnRcIikpKVxuICAgIH1cbiAgfVxufSk7XG5cbigwLCBfaW5kZXgzLmRlZmF1bHQpKFwiU3dpdGNoU3RhdGVtZW50XCIsIHtcbiAgdmlzaXRvcjogW1wiZGlzY3JpbWluYW50XCIsIFwiY2FzZXNcIl0sXG4gIGFsaWFzZXM6IFtcIlN0YXRlbWVudFwiLCBcIkJsb2NrUGFyZW50XCIsIFwiU2NvcGFibGVcIl0sXG4gIGZpZWxkczoge1xuICAgIGRpc2NyaW1pbmFudDoge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXgyLmFzc2VydE5vZGVUeXBlKShcIkV4cHJlc3Npb25cIilcbiAgICB9LFxuICAgIGNhc2VzOiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleDIuY2hhaW4pKCgwLCBfaW5kZXgyLmFzc2VydFZhbHVlVHlwZSkoXCJhcnJheVwiKSwgKDAsIF9pbmRleDIuYXNzZXJ0RWFjaCkoKDAsIF9pbmRleDIuYXNzZXJ0Tm9kZVR5cGUpKFwiU3dpdGNoQ2FzZVwiKSkpXG4gICAgfVxuICB9XG59KTtcblxuKDAsIF9pbmRleDMuZGVmYXVsdCkoXCJUaGlzRXhwcmVzc2lvblwiLCB7XG4gIGFsaWFzZXM6IFtcIkV4cHJlc3Npb25cIl1cbn0pO1xuXG4oMCwgX2luZGV4My5kZWZhdWx0KShcIlRocm93U3RhdGVtZW50XCIsIHtcbiAgdmlzaXRvcjogW1wiYXJndW1lbnRcIl0sXG4gIGFsaWFzZXM6IFtcIlN0YXRlbWVudFwiLCBcIlRlcm1pbmF0b3JsZXNzXCIsIFwiQ29tcGxldGlvblN0YXRlbWVudFwiXSxcbiAgZmllbGRzOiB7XG4gICAgYXJndW1lbnQ6IHtcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4Mi5hc3NlcnROb2RlVHlwZSkoXCJFeHByZXNzaW9uXCIpXG4gICAgfVxuICB9XG59KTtcblxuKDAsIF9pbmRleDMuZGVmYXVsdCkoXCJUcnlTdGF0ZW1lbnRcIiwge1xuICB2aXNpdG9yOiBbXCJibG9ja1wiLCBcImhhbmRsZXJcIiwgXCJmaW5hbGl6ZXJcIl0sXG4gIGFsaWFzZXM6IFtcIlN0YXRlbWVudFwiXSxcbiAgZmllbGRzOiB7XG4gICAgYm9keToge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXgyLmFzc2VydE5vZGVUeXBlKShcIkJsb2NrU3RhdGVtZW50XCIpXG4gICAgfSxcbiAgICBoYW5kbGVyOiB7XG4gICAgICBvcHRpb25hbDogdHJ1ZSxcbiAgICAgIGhhbmRsZXI6ICgwLCBfaW5kZXgyLmFzc2VydE5vZGVUeXBlKShcIkJsb2NrU3RhdGVtZW50XCIpXG4gICAgfSxcbiAgICBmaW5hbGl6ZXI6IHtcbiAgICAgIG9wdGlvbmFsOiB0cnVlLFxuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXgyLmFzc2VydE5vZGVUeXBlKShcIkJsb2NrU3RhdGVtZW50XCIpXG4gICAgfVxuICB9XG59KTtcblxuKDAsIF9pbmRleDMuZGVmYXVsdCkoXCJVbmFyeUV4cHJlc3Npb25cIiwge1xuICBidWlsZGVyOiBbXCJvcGVyYXRvclwiLCBcImFyZ3VtZW50XCIsIFwicHJlZml4XCJdLFxuICBmaWVsZHM6IHtcbiAgICBwcmVmaXg6IHtcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9LFxuICAgIGFyZ3VtZW50OiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleDIuYXNzZXJ0Tm9kZVR5cGUpKFwiRXhwcmVzc2lvblwiKVxuICAgIH0sXG4gICAgb3BlcmF0b3I6IHtcbiAgICAgIHZhbGlkYXRlOiBfaW5kZXgyLmFzc2VydE9uZU9mLmFwcGx5KHVuZGVmaW5lZCwgX2NvbnN0YW50cy5VTkFSWV9PUEVSQVRPUlMpXG4gICAgfVxuICB9LFxuICB2aXNpdG9yOiBbXCJhcmd1bWVudFwiXSxcbiAgYWxpYXNlczogW1wiVW5hcnlMaWtlXCIsIFwiRXhwcmVzc2lvblwiXVxufSk7XG5cbigwLCBfaW5kZXgzLmRlZmF1bHQpKFwiVXBkYXRlRXhwcmVzc2lvblwiLCB7XG4gIGJ1aWxkZXI6IFtcIm9wZXJhdG9yXCIsIFwiYXJndW1lbnRcIiwgXCJwcmVmaXhcIl0sXG4gIGZpZWxkczoge1xuICAgIHByZWZpeDoge1xuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIGFyZ3VtZW50OiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleDIuYXNzZXJ0Tm9kZVR5cGUpKFwiRXhwcmVzc2lvblwiKVxuICAgIH0sXG4gICAgb3BlcmF0b3I6IHtcbiAgICAgIHZhbGlkYXRlOiBfaW5kZXgyLmFzc2VydE9uZU9mLmFwcGx5KHVuZGVmaW5lZCwgX2NvbnN0YW50cy5VUERBVEVfT1BFUkFUT1JTKVxuICAgIH1cbiAgfSxcbiAgdmlzaXRvcjogW1wiYXJndW1lbnRcIl0sXG4gIGFsaWFzZXM6IFtcIkV4cHJlc3Npb25cIl1cbn0pO1xuXG4oMCwgX2luZGV4My5kZWZhdWx0KShcIlZhcmlhYmxlRGVjbGFyYXRpb25cIiwge1xuICBidWlsZGVyOiBbXCJraW5kXCIsIFwiZGVjbGFyYXRpb25zXCJdLFxuICB2aXNpdG9yOiBbXCJkZWNsYXJhdGlvbnNcIl0sXG4gIGFsaWFzZXM6IFtcIlN0YXRlbWVudFwiLCBcIkRlY2xhcmF0aW9uXCJdLFxuICBmaWVsZHM6IHtcbiAgICBraW5kOiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleDIuY2hhaW4pKCgwLCBfaW5kZXgyLmFzc2VydFZhbHVlVHlwZSkoXCJzdHJpbmdcIiksICgwLCBfaW5kZXgyLmFzc2VydE9uZU9mKShcInZhclwiLCBcImxldFwiLCBcImNvbnN0XCIpKVxuICAgIH0sXG4gICAgZGVjbGFyYXRpb25zOiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleDIuY2hhaW4pKCgwLCBfaW5kZXgyLmFzc2VydFZhbHVlVHlwZSkoXCJhcnJheVwiKSwgKDAsIF9pbmRleDIuYXNzZXJ0RWFjaCkoKDAsIF9pbmRleDIuYXNzZXJ0Tm9kZVR5cGUpKFwiVmFyaWFibGVEZWNsYXJhdG9yXCIpKSlcbiAgICB9XG4gIH1cbn0pO1xuXG4oMCwgX2luZGV4My5kZWZhdWx0KShcIlZhcmlhYmxlRGVjbGFyYXRvclwiLCB7XG4gIHZpc2l0b3I6IFtcImlkXCIsIFwiaW5pdFwiXSxcbiAgZmllbGRzOiB7XG4gICAgaWQ6IHtcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4Mi5hc3NlcnROb2RlVHlwZSkoXCJMVmFsXCIpXG4gICAgfSxcbiAgICBpbml0OiB7XG4gICAgICBvcHRpb25hbDogdHJ1ZSxcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4Mi5hc3NlcnROb2RlVHlwZSkoXCJFeHByZXNzaW9uXCIpXG4gICAgfVxuICB9XG59KTtcblxuKDAsIF9pbmRleDMuZGVmYXVsdCkoXCJXaGlsZVN0YXRlbWVudFwiLCB7XG4gIHZpc2l0b3I6IFtcInRlc3RcIiwgXCJib2R5XCJdLFxuICBhbGlhc2VzOiBbXCJTdGF0ZW1lbnRcIiwgXCJCbG9ja1BhcmVudFwiLCBcIkxvb3BcIiwgXCJXaGlsZVwiLCBcIlNjb3BhYmxlXCJdLFxuICBmaWVsZHM6IHtcbiAgICB0ZXN0OiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleDIuYXNzZXJ0Tm9kZVR5cGUpKFwiRXhwcmVzc2lvblwiKVxuICAgIH0sXG4gICAgYm9keToge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXgyLmFzc2VydE5vZGVUeXBlKShcIkJsb2NrU3RhdGVtZW50XCIsIFwiU3RhdGVtZW50XCIpXG4gICAgfVxuICB9XG59KTtcblxuKDAsIF9pbmRleDMuZGVmYXVsdCkoXCJXaXRoU3RhdGVtZW50XCIsIHtcbiAgdmlzaXRvcjogW1wib2JqZWN0XCIsIFwiYm9keVwiXSxcbiAgYWxpYXNlczogW1wiU3RhdGVtZW50XCJdLFxuICBmaWVsZHM6IHtcbiAgICBvYmplY3Q6IHtcbiAgICAgIG9iamVjdDogKDAsIF9pbmRleDIuYXNzZXJ0Tm9kZVR5cGUpKFwiRXhwcmVzc2lvblwiKVxuICAgIH0sXG4gICAgYm9keToge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXgyLmFzc2VydE5vZGVUeXBlKShcIkJsb2NrU3RhdGVtZW50XCIsIFwiU3RhdGVtZW50XCIpXG4gICAgfVxuICB9XG59KTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbmRleCA9IHJlcXVpcmUoXCIuL2luZGV4XCIpO1xuXG52YXIgX2luZGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luZGV4KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuKDAsIF9pbmRleDIuZGVmYXVsdCkoXCJBc3NpZ25tZW50UGF0dGVyblwiLCB7XG4gIHZpc2l0b3I6IFtcImxlZnRcIiwgXCJyaWdodFwiXSxcbiAgYWxpYXNlczogW1wiUGF0dGVyblwiLCBcIkxWYWxcIl0sXG4gIGZpZWxkczoge1xuICAgIGxlZnQ6IHtcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4LmFzc2VydE5vZGVUeXBlKShcIklkZW50aWZpZXJcIilcbiAgICB9LFxuICAgIHJpZ2h0OiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleC5hc3NlcnROb2RlVHlwZSkoXCJFeHByZXNzaW9uXCIpXG4gICAgfSxcbiAgICBkZWNvcmF0b3JzOiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleC5jaGFpbikoKDAsIF9pbmRleC5hc3NlcnRWYWx1ZVR5cGUpKFwiYXJyYXlcIiksICgwLCBfaW5kZXguYXNzZXJ0RWFjaCkoKDAsIF9pbmRleC5hc3NlcnROb2RlVHlwZSkoXCJEZWNvcmF0b3JcIikpKVxuICAgIH1cbiAgfVxufSk7XG5cbigwLCBfaW5kZXgyLmRlZmF1bHQpKFwiQXJyYXlQYXR0ZXJuXCIsIHtcbiAgdmlzaXRvcjogW1wiZWxlbWVudHNcIiwgXCJ0eXBlQW5ub3RhdGlvblwiXSxcbiAgYWxpYXNlczogW1wiUGF0dGVyblwiLCBcIkxWYWxcIl0sXG4gIGZpZWxkczoge1xuICAgIGVsZW1lbnRzOiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleC5jaGFpbikoKDAsIF9pbmRleC5hc3NlcnRWYWx1ZVR5cGUpKFwiYXJyYXlcIiksICgwLCBfaW5kZXguYXNzZXJ0RWFjaCkoKDAsIF9pbmRleC5hc3NlcnROb2RlVHlwZSkoXCJJZGVudGlmaWVyXCIsIFwiUGF0dGVyblwiLCBcIlJlc3RFbGVtZW50XCIpKSlcbiAgICB9LFxuICAgIGRlY29yYXRvcnM6IHtcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4LmNoYWluKSgoMCwgX2luZGV4LmFzc2VydFZhbHVlVHlwZSkoXCJhcnJheVwiKSwgKDAsIF9pbmRleC5hc3NlcnRFYWNoKSgoMCwgX2luZGV4LmFzc2VydE5vZGVUeXBlKShcIkRlY29yYXRvclwiKSkpXG4gICAgfVxuICB9XG59KTtcblxuKDAsIF9pbmRleDIuZGVmYXVsdCkoXCJBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvblwiLCB7XG4gIGJ1aWxkZXI6IFtcInBhcmFtc1wiLCBcImJvZHlcIiwgXCJhc3luY1wiXSxcbiAgdmlzaXRvcjogW1wicGFyYW1zXCIsIFwiYm9keVwiLCBcInJldHVyblR5cGVcIiwgXCJ0eXBlUGFyYW1ldGVyc1wiXSxcbiAgYWxpYXNlczogW1wiU2NvcGFibGVcIiwgXCJGdW5jdGlvblwiLCBcIkJsb2NrUGFyZW50XCIsIFwiRnVuY3Rpb25QYXJlbnRcIiwgXCJFeHByZXNzaW9uXCIsIFwiUHVyZWlzaFwiXSxcbiAgZmllbGRzOiB7XG4gICAgcGFyYW1zOiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleC5jaGFpbikoKDAsIF9pbmRleC5hc3NlcnRWYWx1ZVR5cGUpKFwiYXJyYXlcIiksICgwLCBfaW5kZXguYXNzZXJ0RWFjaCkoKDAsIF9pbmRleC5hc3NlcnROb2RlVHlwZSkoXCJMVmFsXCIpKSlcbiAgICB9LFxuICAgIGJvZHk6IHtcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4LmFzc2VydE5vZGVUeXBlKShcIkJsb2NrU3RhdGVtZW50XCIsIFwiRXhwcmVzc2lvblwiKVxuICAgIH0sXG4gICAgYXN5bmM6IHtcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4LmFzc2VydFZhbHVlVHlwZSkoXCJib29sZWFuXCIpLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9XG4gIH1cbn0pO1xuXG4oMCwgX2luZGV4Mi5kZWZhdWx0KShcIkNsYXNzQm9keVwiLCB7XG4gIHZpc2l0b3I6IFtcImJvZHlcIl0sXG4gIGZpZWxkczoge1xuICAgIGJvZHk6IHtcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4LmNoYWluKSgoMCwgX2luZGV4LmFzc2VydFZhbHVlVHlwZSkoXCJhcnJheVwiKSwgKDAsIF9pbmRleC5hc3NlcnRFYWNoKSgoMCwgX2luZGV4LmFzc2VydE5vZGVUeXBlKShcIkNsYXNzTWV0aG9kXCIsIFwiQ2xhc3NQcm9wZXJ0eVwiKSkpXG4gICAgfVxuICB9XG59KTtcblxuKDAsIF9pbmRleDIuZGVmYXVsdCkoXCJDbGFzc0RlY2xhcmF0aW9uXCIsIHtcbiAgYnVpbGRlcjogW1wiaWRcIiwgXCJzdXBlckNsYXNzXCIsIFwiYm9keVwiLCBcImRlY29yYXRvcnNcIl0sXG4gIHZpc2l0b3I6IFtcImlkXCIsIFwiYm9keVwiLCBcInN1cGVyQ2xhc3NcIiwgXCJtaXhpbnNcIiwgXCJ0eXBlUGFyYW1ldGVyc1wiLCBcInN1cGVyVHlwZVBhcmFtZXRlcnNcIiwgXCJpbXBsZW1lbnRzXCIsIFwiZGVjb3JhdG9yc1wiXSxcbiAgYWxpYXNlczogW1wiU2NvcGFibGVcIiwgXCJDbGFzc1wiLCBcIlN0YXRlbWVudFwiLCBcIkRlY2xhcmF0aW9uXCIsIFwiUHVyZWlzaFwiXSxcbiAgZmllbGRzOiB7XG4gICAgaWQ6IHtcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4LmFzc2VydE5vZGVUeXBlKShcIklkZW50aWZpZXJcIilcbiAgICB9LFxuICAgIGJvZHk6IHtcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4LmFzc2VydE5vZGVUeXBlKShcIkNsYXNzQm9keVwiKVxuICAgIH0sXG4gICAgc3VwZXJDbGFzczoge1xuICAgICAgb3B0aW9uYWw6IHRydWUsXG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleC5hc3NlcnROb2RlVHlwZSkoXCJFeHByZXNzaW9uXCIpXG4gICAgfSxcbiAgICBkZWNvcmF0b3JzOiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleC5jaGFpbikoKDAsIF9pbmRleC5hc3NlcnRWYWx1ZVR5cGUpKFwiYXJyYXlcIiksICgwLCBfaW5kZXguYXNzZXJ0RWFjaCkoKDAsIF9pbmRleC5hc3NlcnROb2RlVHlwZSkoXCJEZWNvcmF0b3JcIikpKVxuICAgIH1cbiAgfVxufSk7XG5cbigwLCBfaW5kZXgyLmRlZmF1bHQpKFwiQ2xhc3NFeHByZXNzaW9uXCIsIHtcbiAgaW5oZXJpdHM6IFwiQ2xhc3NEZWNsYXJhdGlvblwiLFxuICBhbGlhc2VzOiBbXCJTY29wYWJsZVwiLCBcIkNsYXNzXCIsIFwiRXhwcmVzc2lvblwiLCBcIlB1cmVpc2hcIl0sXG4gIGZpZWxkczoge1xuICAgIGlkOiB7XG4gICAgICBvcHRpb25hbDogdHJ1ZSxcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4LmFzc2VydE5vZGVUeXBlKShcIklkZW50aWZpZXJcIilcbiAgICB9LFxuICAgIGJvZHk6IHtcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4LmFzc2VydE5vZGVUeXBlKShcIkNsYXNzQm9keVwiKVxuICAgIH0sXG4gICAgc3VwZXJDbGFzczoge1xuICAgICAgb3B0aW9uYWw6IHRydWUsXG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleC5hc3NlcnROb2RlVHlwZSkoXCJFeHByZXNzaW9uXCIpXG4gICAgfSxcbiAgICBkZWNvcmF0b3JzOiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleC5jaGFpbikoKDAsIF9pbmRleC5hc3NlcnRWYWx1ZVR5cGUpKFwiYXJyYXlcIiksICgwLCBfaW5kZXguYXNzZXJ0RWFjaCkoKDAsIF9pbmRleC5hc3NlcnROb2RlVHlwZSkoXCJEZWNvcmF0b3JcIikpKVxuICAgIH1cbiAgfVxufSk7XG5cbigwLCBfaW5kZXgyLmRlZmF1bHQpKFwiRXhwb3J0QWxsRGVjbGFyYXRpb25cIiwge1xuICB2aXNpdG9yOiBbXCJzb3VyY2VcIl0sXG4gIGFsaWFzZXM6IFtcIlN0YXRlbWVudFwiLCBcIkRlY2xhcmF0aW9uXCIsIFwiTW9kdWxlRGVjbGFyYXRpb25cIiwgXCJFeHBvcnREZWNsYXJhdGlvblwiXSxcbiAgZmllbGRzOiB7XG4gICAgc291cmNlOiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleC5hc3NlcnROb2RlVHlwZSkoXCJTdHJpbmdMaXRlcmFsXCIpXG4gICAgfVxuICB9XG59KTtcblxuKDAsIF9pbmRleDIuZGVmYXVsdCkoXCJFeHBvcnREZWZhdWx0RGVjbGFyYXRpb25cIiwge1xuICB2aXNpdG9yOiBbXCJkZWNsYXJhdGlvblwiXSxcbiAgYWxpYXNlczogW1wiU3RhdGVtZW50XCIsIFwiRGVjbGFyYXRpb25cIiwgXCJNb2R1bGVEZWNsYXJhdGlvblwiLCBcIkV4cG9ydERlY2xhcmF0aW9uXCJdLFxuICBmaWVsZHM6IHtcbiAgICBkZWNsYXJhdGlvbjoge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXguYXNzZXJ0Tm9kZVR5cGUpKFwiRnVuY3Rpb25EZWNsYXJhdGlvblwiLCBcIkNsYXNzRGVjbGFyYXRpb25cIiwgXCJFeHByZXNzaW9uXCIpXG4gICAgfVxuICB9XG59KTtcblxuKDAsIF9pbmRleDIuZGVmYXVsdCkoXCJFeHBvcnROYW1lZERlY2xhcmF0aW9uXCIsIHtcbiAgdmlzaXRvcjogW1wiZGVjbGFyYXRpb25cIiwgXCJzcGVjaWZpZXJzXCIsIFwic291cmNlXCJdLFxuICBhbGlhc2VzOiBbXCJTdGF0ZW1lbnRcIiwgXCJEZWNsYXJhdGlvblwiLCBcIk1vZHVsZURlY2xhcmF0aW9uXCIsIFwiRXhwb3J0RGVjbGFyYXRpb25cIl0sXG4gIGZpZWxkczoge1xuICAgIGRlY2xhcmF0aW9uOiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleC5hc3NlcnROb2RlVHlwZSkoXCJEZWNsYXJhdGlvblwiKSxcbiAgICAgIG9wdGlvbmFsOiB0cnVlXG4gICAgfSxcbiAgICBzcGVjaWZpZXJzOiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleC5jaGFpbikoKDAsIF9pbmRleC5hc3NlcnRWYWx1ZVR5cGUpKFwiYXJyYXlcIiksICgwLCBfaW5kZXguYXNzZXJ0RWFjaCkoKDAsIF9pbmRleC5hc3NlcnROb2RlVHlwZSkoXCJFeHBvcnRTcGVjaWZpZXJcIikpKVxuICAgIH0sXG4gICAgc291cmNlOiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleC5hc3NlcnROb2RlVHlwZSkoXCJTdHJpbmdMaXRlcmFsXCIpLFxuICAgICAgb3B0aW9uYWw6IHRydWVcbiAgICB9XG4gIH1cbn0pO1xuXG4oMCwgX2luZGV4Mi5kZWZhdWx0KShcIkV4cG9ydFNwZWNpZmllclwiLCB7XG4gIHZpc2l0b3I6IFtcImxvY2FsXCIsIFwiZXhwb3J0ZWRcIl0sXG4gIGFsaWFzZXM6IFtcIk1vZHVsZVNwZWNpZmllclwiXSxcbiAgZmllbGRzOiB7XG4gICAgbG9jYWw6IHtcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4LmFzc2VydE5vZGVUeXBlKShcIklkZW50aWZpZXJcIilcbiAgICB9LFxuICAgIGV4cG9ydGVkOiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleC5hc3NlcnROb2RlVHlwZSkoXCJJZGVudGlmaWVyXCIpXG4gICAgfVxuICB9XG59KTtcblxuKDAsIF9pbmRleDIuZGVmYXVsdCkoXCJGb3JPZlN0YXRlbWVudFwiLCB7XG4gIHZpc2l0b3I6IFtcImxlZnRcIiwgXCJyaWdodFwiLCBcImJvZHlcIl0sXG4gIGFsaWFzZXM6IFtcIlNjb3BhYmxlXCIsIFwiU3RhdGVtZW50XCIsIFwiRm9yXCIsIFwiQmxvY2tQYXJlbnRcIiwgXCJMb29wXCIsIFwiRm9yWFN0YXRlbWVudFwiXSxcbiAgZmllbGRzOiB7XG4gICAgbGVmdDoge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXguYXNzZXJ0Tm9kZVR5cGUpKFwiVmFyaWFibGVEZWNsYXJhdGlvblwiLCBcIkxWYWxcIilcbiAgICB9LFxuICAgIHJpZ2h0OiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleC5hc3NlcnROb2RlVHlwZSkoXCJFeHByZXNzaW9uXCIpXG4gICAgfSxcbiAgICBib2R5OiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleC5hc3NlcnROb2RlVHlwZSkoXCJTdGF0ZW1lbnRcIilcbiAgICB9XG4gIH1cbn0pO1xuXG4oMCwgX2luZGV4Mi5kZWZhdWx0KShcIkltcG9ydERlY2xhcmF0aW9uXCIsIHtcbiAgdmlzaXRvcjogW1wic3BlY2lmaWVyc1wiLCBcInNvdXJjZVwiXSxcbiAgYWxpYXNlczogW1wiU3RhdGVtZW50XCIsIFwiRGVjbGFyYXRpb25cIiwgXCJNb2R1bGVEZWNsYXJhdGlvblwiXSxcbiAgZmllbGRzOiB7XG4gICAgc3BlY2lmaWVyczoge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXguY2hhaW4pKCgwLCBfaW5kZXguYXNzZXJ0VmFsdWVUeXBlKShcImFycmF5XCIpLCAoMCwgX2luZGV4LmFzc2VydEVhY2gpKCgwLCBfaW5kZXguYXNzZXJ0Tm9kZVR5cGUpKFwiSW1wb3J0U3BlY2lmaWVyXCIsIFwiSW1wb3J0RGVmYXVsdFNwZWNpZmllclwiLCBcIkltcG9ydE5hbWVzcGFjZVNwZWNpZmllclwiKSkpXG4gICAgfSxcbiAgICBzb3VyY2U6IHtcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4LmFzc2VydE5vZGVUeXBlKShcIlN0cmluZ0xpdGVyYWxcIilcbiAgICB9XG4gIH1cbn0pO1xuXG4oMCwgX2luZGV4Mi5kZWZhdWx0KShcIkltcG9ydERlZmF1bHRTcGVjaWZpZXJcIiwge1xuICB2aXNpdG9yOiBbXCJsb2NhbFwiXSxcbiAgYWxpYXNlczogW1wiTW9kdWxlU3BlY2lmaWVyXCJdLFxuICBmaWVsZHM6IHtcbiAgICBsb2NhbDoge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXguYXNzZXJ0Tm9kZVR5cGUpKFwiSWRlbnRpZmllclwiKVxuICAgIH1cbiAgfVxufSk7XG5cbigwLCBfaW5kZXgyLmRlZmF1bHQpKFwiSW1wb3J0TmFtZXNwYWNlU3BlY2lmaWVyXCIsIHtcbiAgdmlzaXRvcjogW1wibG9jYWxcIl0sXG4gIGFsaWFzZXM6IFtcIk1vZHVsZVNwZWNpZmllclwiXSxcbiAgZmllbGRzOiB7XG4gICAgbG9jYWw6IHtcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4LmFzc2VydE5vZGVUeXBlKShcIklkZW50aWZpZXJcIilcbiAgICB9XG4gIH1cbn0pO1xuXG4oMCwgX2luZGV4Mi5kZWZhdWx0KShcIkltcG9ydFNwZWNpZmllclwiLCB7XG4gIHZpc2l0b3I6IFtcImxvY2FsXCIsIFwiaW1wb3J0ZWRcIl0sXG4gIGFsaWFzZXM6IFtcIk1vZHVsZVNwZWNpZmllclwiXSxcbiAgZmllbGRzOiB7XG4gICAgbG9jYWw6IHtcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4LmFzc2VydE5vZGVUeXBlKShcIklkZW50aWZpZXJcIilcbiAgICB9LFxuICAgIGltcG9ydGVkOiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleC5hc3NlcnROb2RlVHlwZSkoXCJJZGVudGlmaWVyXCIpXG4gICAgfSxcbiAgICBpbXBvcnRLaW5kOiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleC5hc3NlcnRPbmVPZikobnVsbCwgXCJ0eXBlXCIsIFwidHlwZW9mXCIpXG4gICAgfVxuICB9XG59KTtcblxuKDAsIF9pbmRleDIuZGVmYXVsdCkoXCJNZXRhUHJvcGVydHlcIiwge1xuICB2aXNpdG9yOiBbXCJtZXRhXCIsIFwicHJvcGVydHlcIl0sXG4gIGFsaWFzZXM6IFtcIkV4cHJlc3Npb25cIl0sXG4gIGZpZWxkczoge1xuICAgIG1ldGE6IHtcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4LmFzc2VydFZhbHVlVHlwZSkoXCJzdHJpbmdcIilcbiAgICB9LFxuICAgIHByb3BlcnR5OiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleC5hc3NlcnRWYWx1ZVR5cGUpKFwic3RyaW5nXCIpXG4gICAgfVxuICB9XG59KTtcblxuKDAsIF9pbmRleDIuZGVmYXVsdCkoXCJDbGFzc01ldGhvZFwiLCB7XG4gIGFsaWFzZXM6IFtcIkZ1bmN0aW9uXCIsIFwiU2NvcGFibGVcIiwgXCJCbG9ja1BhcmVudFwiLCBcIkZ1bmN0aW9uUGFyZW50XCIsIFwiTWV0aG9kXCJdLFxuICBidWlsZGVyOiBbXCJraW5kXCIsIFwia2V5XCIsIFwicGFyYW1zXCIsIFwiYm9keVwiLCBcImNvbXB1dGVkXCIsIFwic3RhdGljXCJdLFxuICB2aXNpdG9yOiBbXCJrZXlcIiwgXCJwYXJhbXNcIiwgXCJib2R5XCIsIFwiZGVjb3JhdG9yc1wiLCBcInJldHVyblR5cGVcIiwgXCJ0eXBlUGFyYW1ldGVyc1wiXSxcbiAgZmllbGRzOiB7XG4gICAga2luZDoge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXguY2hhaW4pKCgwLCBfaW5kZXguYXNzZXJ0VmFsdWVUeXBlKShcInN0cmluZ1wiKSwgKDAsIF9pbmRleC5hc3NlcnRPbmVPZikoXCJnZXRcIiwgXCJzZXRcIiwgXCJtZXRob2RcIiwgXCJjb25zdHJ1Y3RvclwiKSksXG4gICAgICBkZWZhdWx0OiBcIm1ldGhvZFwiXG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleC5hc3NlcnRWYWx1ZVR5cGUpKFwiYm9vbGVhblwiKVxuICAgIH0sXG4gICAgc3RhdGljOiB7XG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4LmFzc2VydFZhbHVlVHlwZSkoXCJib29sZWFuXCIpXG4gICAgfSxcbiAgICBrZXk6IHtcbiAgICAgIHZhbGlkYXRlOiBmdW5jdGlvbiB2YWxpZGF0ZShub2RlLCBrZXksIHZhbCkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRUeXBlcyA9IG5vZGUuY29tcHV0ZWQgPyBbXCJFeHByZXNzaW9uXCJdIDogW1wiSWRlbnRpZmllclwiLCBcIlN0cmluZ0xpdGVyYWxcIiwgXCJOdW1lcmljTGl0ZXJhbFwiXTtcbiAgICAgICAgX2luZGV4LmFzc2VydE5vZGVUeXBlLmFwcGx5KHVuZGVmaW5lZCwgZXhwZWN0ZWRUeXBlcykobm9kZSwga2V5LCB2YWwpO1xuICAgICAgfVxuICAgIH0sXG4gICAgcGFyYW1zOiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleC5jaGFpbikoKDAsIF9pbmRleC5hc3NlcnRWYWx1ZVR5cGUpKFwiYXJyYXlcIiksICgwLCBfaW5kZXguYXNzZXJ0RWFjaCkoKDAsIF9pbmRleC5hc3NlcnROb2RlVHlwZSkoXCJMVmFsXCIpKSlcbiAgICB9LFxuICAgIGJvZHk6IHtcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4LmFzc2VydE5vZGVUeXBlKShcIkJsb2NrU3RhdGVtZW50XCIpXG4gICAgfSxcbiAgICBnZW5lcmF0b3I6IHtcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXguYXNzZXJ0VmFsdWVUeXBlKShcImJvb2xlYW5cIilcbiAgICB9LFxuICAgIGFzeW5jOiB7XG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4LmFzc2VydFZhbHVlVHlwZSkoXCJib29sZWFuXCIpXG4gICAgfVxuICB9XG59KTtcblxuKDAsIF9pbmRleDIuZGVmYXVsdCkoXCJPYmplY3RQYXR0ZXJuXCIsIHtcbiAgdmlzaXRvcjogW1wicHJvcGVydGllc1wiLCBcInR5cGVBbm5vdGF0aW9uXCJdLFxuICBhbGlhc2VzOiBbXCJQYXR0ZXJuXCIsIFwiTFZhbFwiXSxcbiAgZmllbGRzOiB7XG4gICAgcHJvcGVydGllczoge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXguY2hhaW4pKCgwLCBfaW5kZXguYXNzZXJ0VmFsdWVUeXBlKShcImFycmF5XCIpLCAoMCwgX2luZGV4LmFzc2VydEVhY2gpKCgwLCBfaW5kZXguYXNzZXJ0Tm9kZVR5cGUpKFwiUmVzdFByb3BlcnR5XCIsIFwiUHJvcGVydHlcIikpKVxuICAgIH0sXG4gICAgZGVjb3JhdG9yczoge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXguY2hhaW4pKCgwLCBfaW5kZXguYXNzZXJ0VmFsdWVUeXBlKShcImFycmF5XCIpLCAoMCwgX2luZGV4LmFzc2VydEVhY2gpKCgwLCBfaW5kZXguYXNzZXJ0Tm9kZVR5cGUpKFwiRGVjb3JhdG9yXCIpKSlcbiAgICB9XG4gIH1cbn0pO1xuXG4oMCwgX2luZGV4Mi5kZWZhdWx0KShcIlNwcmVhZEVsZW1lbnRcIiwge1xuICB2aXNpdG9yOiBbXCJhcmd1bWVudFwiXSxcbiAgYWxpYXNlczogW1wiVW5hcnlMaWtlXCJdLFxuICBmaWVsZHM6IHtcbiAgICBhcmd1bWVudDoge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXguYXNzZXJ0Tm9kZVR5cGUpKFwiRXhwcmVzc2lvblwiKVxuICAgIH1cbiAgfVxufSk7XG5cbigwLCBfaW5kZXgyLmRlZmF1bHQpKFwiU3VwZXJcIiwge1xuICBhbGlhc2VzOiBbXCJFeHByZXNzaW9uXCJdXG59KTtcblxuKDAsIF9pbmRleDIuZGVmYXVsdCkoXCJUYWdnZWRUZW1wbGF0ZUV4cHJlc3Npb25cIiwge1xuICB2aXNpdG9yOiBbXCJ0YWdcIiwgXCJxdWFzaVwiXSxcbiAgYWxpYXNlczogW1wiRXhwcmVzc2lvblwiXSxcbiAgZmllbGRzOiB7XG4gICAgdGFnOiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleC5hc3NlcnROb2RlVHlwZSkoXCJFeHByZXNzaW9uXCIpXG4gICAgfSxcbiAgICBxdWFzaToge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXguYXNzZXJ0Tm9kZVR5cGUpKFwiVGVtcGxhdGVMaXRlcmFsXCIpXG4gICAgfVxuICB9XG59KTtcblxuKDAsIF9pbmRleDIuZGVmYXVsdCkoXCJUZW1wbGF0ZUVsZW1lbnRcIiwge1xuICBidWlsZGVyOiBbXCJ2YWx1ZVwiLCBcInRhaWxcIl0sXG4gIGZpZWxkczoge1xuICAgIHZhbHVlOiB7fSxcbiAgICB0YWlsOiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleC5hc3NlcnRWYWx1ZVR5cGUpKFwiYm9vbGVhblwiKSxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfVxuICB9XG59KTtcblxuKDAsIF9pbmRleDIuZGVmYXVsdCkoXCJUZW1wbGF0ZUxpdGVyYWxcIiwge1xuICB2aXNpdG9yOiBbXCJxdWFzaXNcIiwgXCJleHByZXNzaW9uc1wiXSxcbiAgYWxpYXNlczogW1wiRXhwcmVzc2lvblwiLCBcIkxpdGVyYWxcIl0sXG4gIGZpZWxkczoge1xuICAgIHF1YXNpczoge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXguY2hhaW4pKCgwLCBfaW5kZXguYXNzZXJ0VmFsdWVUeXBlKShcImFycmF5XCIpLCAoMCwgX2luZGV4LmFzc2VydEVhY2gpKCgwLCBfaW5kZXguYXNzZXJ0Tm9kZVR5cGUpKFwiVGVtcGxhdGVFbGVtZW50XCIpKSlcbiAgICB9LFxuICAgIGV4cHJlc3Npb25zOiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleC5jaGFpbikoKDAsIF9pbmRleC5hc3NlcnRWYWx1ZVR5cGUpKFwiYXJyYXlcIiksICgwLCBfaW5kZXguYXNzZXJ0RWFjaCkoKDAsIF9pbmRleC5hc3NlcnROb2RlVHlwZSkoXCJFeHByZXNzaW9uXCIpKSlcbiAgICB9XG4gIH1cbn0pO1xuXG4oMCwgX2luZGV4Mi5kZWZhdWx0KShcIllpZWxkRXhwcmVzc2lvblwiLCB7XG4gIGJ1aWxkZXI6IFtcImFyZ3VtZW50XCIsIFwiZGVsZWdhdGVcIl0sXG4gIHZpc2l0b3I6IFtcImFyZ3VtZW50XCJdLFxuICBhbGlhc2VzOiBbXCJFeHByZXNzaW9uXCIsIFwiVGVybWluYXRvcmxlc3NcIl0sXG4gIGZpZWxkczoge1xuICAgIGRlbGVnYXRlOiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleC5hc3NlcnRWYWx1ZVR5cGUpKFwiYm9vbGVhblwiKSxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBhcmd1bWVudDoge1xuICAgICAgb3B0aW9uYWw6IHRydWUsXG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleC5hc3NlcnROb2RlVHlwZSkoXCJFeHByZXNzaW9uXCIpXG4gICAgfVxuICB9XG59KTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbmRleCA9IHJlcXVpcmUoXCIuL2luZGV4XCIpO1xuXG52YXIgX2luZGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luZGV4KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuKDAsIF9pbmRleDIuZGVmYXVsdCkoXCJBbnlUeXBlQW5ub3RhdGlvblwiLCB7XG4gIGFsaWFzZXM6IFtcIkZsb3dcIiwgXCJGbG93QmFzZUFubm90YXRpb25cIl0sXG4gIGZpZWxkczoge31cbn0pO1xuXG4oMCwgX2luZGV4Mi5kZWZhdWx0KShcIkFycmF5VHlwZUFubm90YXRpb25cIiwge1xuICB2aXNpdG9yOiBbXCJlbGVtZW50VHlwZVwiXSxcbiAgYWxpYXNlczogW1wiRmxvd1wiXSxcbiAgZmllbGRzOiB7fVxufSk7XG5cbigwLCBfaW5kZXgyLmRlZmF1bHQpKFwiQm9vbGVhblR5cGVBbm5vdGF0aW9uXCIsIHtcbiAgYWxpYXNlczogW1wiRmxvd1wiLCBcIkZsb3dCYXNlQW5ub3RhdGlvblwiXSxcbiAgZmllbGRzOiB7fVxufSk7XG5cbigwLCBfaW5kZXgyLmRlZmF1bHQpKFwiQm9vbGVhbkxpdGVyYWxUeXBlQW5ub3RhdGlvblwiLCB7XG4gIGFsaWFzZXM6IFtcIkZsb3dcIl0sXG4gIGZpZWxkczoge31cbn0pO1xuXG4oMCwgX2luZGV4Mi5kZWZhdWx0KShcIk51bGxMaXRlcmFsVHlwZUFubm90YXRpb25cIiwge1xuICBhbGlhc2VzOiBbXCJGbG93XCIsIFwiRmxvd0Jhc2VBbm5vdGF0aW9uXCJdLFxuICBmaWVsZHM6IHt9XG59KTtcblxuKDAsIF9pbmRleDIuZGVmYXVsdCkoXCJDbGFzc0ltcGxlbWVudHNcIiwge1xuICB2aXNpdG9yOiBbXCJpZFwiLCBcInR5cGVQYXJhbWV0ZXJzXCJdLFxuICBhbGlhc2VzOiBbXCJGbG93XCJdLFxuICBmaWVsZHM6IHt9XG59KTtcblxuKDAsIF9pbmRleDIuZGVmYXVsdCkoXCJDbGFzc1Byb3BlcnR5XCIsIHtcbiAgdmlzaXRvcjogW1wia2V5XCIsIFwidmFsdWVcIiwgXCJ0eXBlQW5ub3RhdGlvblwiLCBcImRlY29yYXRvcnNcIl0sXG4gIGJ1aWxkZXI6IFtcImtleVwiLCBcInZhbHVlXCIsIFwidHlwZUFubm90YXRpb25cIiwgXCJkZWNvcmF0b3JzXCIsIFwiY29tcHV0ZWRcIl0sXG4gIGFsaWFzZXM6IFtcIlByb3BlcnR5XCJdLFxuICBmaWVsZHM6IHtcbiAgICBjb21wdXRlZDoge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXguYXNzZXJ0VmFsdWVUeXBlKShcImJvb2xlYW5cIiksXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH1cbiAgfVxufSk7XG5cbigwLCBfaW5kZXgyLmRlZmF1bHQpKFwiRGVjbGFyZUNsYXNzXCIsIHtcbiAgdmlzaXRvcjogW1wiaWRcIiwgXCJ0eXBlUGFyYW1ldGVyc1wiLCBcImV4dGVuZHNcIiwgXCJib2R5XCJdLFxuICBhbGlhc2VzOiBbXCJGbG93XCIsIFwiRmxvd0RlY2xhcmF0aW9uXCIsIFwiU3RhdGVtZW50XCIsIFwiRGVjbGFyYXRpb25cIl0sXG4gIGZpZWxkczoge31cbn0pO1xuXG4oMCwgX2luZGV4Mi5kZWZhdWx0KShcIkRlY2xhcmVGdW5jdGlvblwiLCB7XG4gIHZpc2l0b3I6IFtcImlkXCJdLFxuICBhbGlhc2VzOiBbXCJGbG93XCIsIFwiRmxvd0RlY2xhcmF0aW9uXCIsIFwiU3RhdGVtZW50XCIsIFwiRGVjbGFyYXRpb25cIl0sXG4gIGZpZWxkczoge31cbn0pO1xuXG4oMCwgX2luZGV4Mi5kZWZhdWx0KShcIkRlY2xhcmVJbnRlcmZhY2VcIiwge1xuICB2aXNpdG9yOiBbXCJpZFwiLCBcInR5cGVQYXJhbWV0ZXJzXCIsIFwiZXh0ZW5kc1wiLCBcImJvZHlcIl0sXG4gIGFsaWFzZXM6IFtcIkZsb3dcIiwgXCJGbG93RGVjbGFyYXRpb25cIiwgXCJTdGF0ZW1lbnRcIiwgXCJEZWNsYXJhdGlvblwiXSxcbiAgZmllbGRzOiB7fVxufSk7XG5cbigwLCBfaW5kZXgyLmRlZmF1bHQpKFwiRGVjbGFyZU1vZHVsZVwiLCB7XG4gIHZpc2l0b3I6IFtcImlkXCIsIFwiYm9keVwiXSxcbiAgYWxpYXNlczogW1wiRmxvd1wiLCBcIkZsb3dEZWNsYXJhdGlvblwiLCBcIlN0YXRlbWVudFwiLCBcIkRlY2xhcmF0aW9uXCJdLFxuICBmaWVsZHM6IHt9XG59KTtcblxuKDAsIF9pbmRleDIuZGVmYXVsdCkoXCJEZWNsYXJlTW9kdWxlRXhwb3J0c1wiLCB7XG4gIHZpc2l0b3I6IFtcInR5cGVBbm5vdGF0aW9uXCJdLFxuICBhbGlhc2VzOiBbXCJGbG93XCIsIFwiRmxvd0RlY2xhcmF0aW9uXCIsIFwiU3RhdGVtZW50XCIsIFwiRGVjbGFyYXRpb25cIl0sXG4gIGZpZWxkczoge31cbn0pO1xuXG4oMCwgX2luZGV4Mi5kZWZhdWx0KShcIkRlY2xhcmVUeXBlQWxpYXNcIiwge1xuICB2aXNpdG9yOiBbXCJpZFwiLCBcInR5cGVQYXJhbWV0ZXJzXCIsIFwicmlnaHRcIl0sXG4gIGFsaWFzZXM6IFtcIkZsb3dcIiwgXCJGbG93RGVjbGFyYXRpb25cIiwgXCJTdGF0ZW1lbnRcIiwgXCJEZWNsYXJhdGlvblwiXSxcbiAgZmllbGRzOiB7fVxufSk7XG5cbigwLCBfaW5kZXgyLmRlZmF1bHQpKFwiRGVjbGFyZU9wYXF1ZVR5cGVcIiwge1xuICB2aXNpdG9yOiBbXCJpZFwiLCBcInR5cGVQYXJhbWV0ZXJzXCIsIFwic3VwZXJ0eXBlXCJdLFxuICBhbGlhc2VzOiBbXCJGbG93XCIsIFwiRmxvd0RlY2xhcmF0aW9uXCIsIFwiU3RhdGVtZW50XCIsIFwiRGVjbGFyYXRpb25cIl0sXG4gIGZpZWxkczoge31cbn0pO1xuXG4oMCwgX2luZGV4Mi5kZWZhdWx0KShcIkRlY2xhcmVWYXJpYWJsZVwiLCB7XG4gIHZpc2l0b3I6IFtcImlkXCJdLFxuICBhbGlhc2VzOiBbXCJGbG93XCIsIFwiRmxvd0RlY2xhcmF0aW9uXCIsIFwiU3RhdGVtZW50XCIsIFwiRGVjbGFyYXRpb25cIl0sXG4gIGZpZWxkczoge31cbn0pO1xuXG4oMCwgX2luZGV4Mi5kZWZhdWx0KShcIkRlY2xhcmVFeHBvcnREZWNsYXJhdGlvblwiLCB7XG4gIHZpc2l0b3I6IFtcImRlY2xhcmF0aW9uXCIsIFwic3BlY2lmaWVyc1wiLCBcInNvdXJjZVwiXSxcbiAgYWxpYXNlczogW1wiRmxvd1wiLCBcIkZsb3dEZWNsYXJhdGlvblwiLCBcIlN0YXRlbWVudFwiLCBcIkRlY2xhcmF0aW9uXCJdLFxuICBmaWVsZHM6IHt9XG59KTtcblxuKDAsIF9pbmRleDIuZGVmYXVsdCkoXCJFeGlzdGVudGlhbFR5cGVQYXJhbVwiLCB7XG4gIGFsaWFzZXM6IFtcIkZsb3dcIl1cbn0pO1xuXG4oMCwgX2luZGV4Mi5kZWZhdWx0KShcIkZ1bmN0aW9uVHlwZUFubm90YXRpb25cIiwge1xuICB2aXNpdG9yOiBbXCJ0eXBlUGFyYW1ldGVyc1wiLCBcInBhcmFtc1wiLCBcInJlc3RcIiwgXCJyZXR1cm5UeXBlXCJdLFxuICBhbGlhc2VzOiBbXCJGbG93XCJdLFxuICBmaWVsZHM6IHt9XG59KTtcblxuKDAsIF9pbmRleDIuZGVmYXVsdCkoXCJGdW5jdGlvblR5cGVQYXJhbVwiLCB7XG4gIHZpc2l0b3I6IFtcIm5hbWVcIiwgXCJ0eXBlQW5ub3RhdGlvblwiXSxcbiAgYWxpYXNlczogW1wiRmxvd1wiXSxcbiAgZmllbGRzOiB7fVxufSk7XG5cbigwLCBfaW5kZXgyLmRlZmF1bHQpKFwiR2VuZXJpY1R5cGVBbm5vdGF0aW9uXCIsIHtcbiAgdmlzaXRvcjogW1wiaWRcIiwgXCJ0eXBlUGFyYW1ldGVyc1wiXSxcbiAgYWxpYXNlczogW1wiRmxvd1wiXSxcbiAgZmllbGRzOiB7fVxufSk7XG5cbigwLCBfaW5kZXgyLmRlZmF1bHQpKFwiSW50ZXJmYWNlRXh0ZW5kc1wiLCB7XG4gIHZpc2l0b3I6IFtcImlkXCIsIFwidHlwZVBhcmFtZXRlcnNcIl0sXG4gIGFsaWFzZXM6IFtcIkZsb3dcIl0sXG4gIGZpZWxkczoge31cbn0pO1xuXG4oMCwgX2luZGV4Mi5kZWZhdWx0KShcIkludGVyZmFjZURlY2xhcmF0aW9uXCIsIHtcbiAgdmlzaXRvcjogW1wiaWRcIiwgXCJ0eXBlUGFyYW1ldGVyc1wiLCBcImV4dGVuZHNcIiwgXCJib2R5XCJdLFxuICBhbGlhc2VzOiBbXCJGbG93XCIsIFwiRmxvd0RlY2xhcmF0aW9uXCIsIFwiU3RhdGVtZW50XCIsIFwiRGVjbGFyYXRpb25cIl0sXG4gIGZpZWxkczoge31cbn0pO1xuXG4oMCwgX2luZGV4Mi5kZWZhdWx0KShcIkludGVyc2VjdGlvblR5cGVBbm5vdGF0aW9uXCIsIHtcbiAgdmlzaXRvcjogW1widHlwZXNcIl0sXG4gIGFsaWFzZXM6IFtcIkZsb3dcIl0sXG4gIGZpZWxkczoge31cbn0pO1xuXG4oMCwgX2luZGV4Mi5kZWZhdWx0KShcIk1peGVkVHlwZUFubm90YXRpb25cIiwge1xuICBhbGlhc2VzOiBbXCJGbG93XCIsIFwiRmxvd0Jhc2VBbm5vdGF0aW9uXCJdXG59KTtcblxuKDAsIF9pbmRleDIuZGVmYXVsdCkoXCJFbXB0eVR5cGVBbm5vdGF0aW9uXCIsIHtcbiAgYWxpYXNlczogW1wiRmxvd1wiLCBcIkZsb3dCYXNlQW5ub3RhdGlvblwiXVxufSk7XG5cbigwLCBfaW5kZXgyLmRlZmF1bHQpKFwiTnVsbGFibGVUeXBlQW5ub3RhdGlvblwiLCB7XG4gIHZpc2l0b3I6IFtcInR5cGVBbm5vdGF0aW9uXCJdLFxuICBhbGlhc2VzOiBbXCJGbG93XCJdLFxuICBmaWVsZHM6IHt9XG59KTtcblxuKDAsIF9pbmRleDIuZGVmYXVsdCkoXCJOdW1lcmljTGl0ZXJhbFR5cGVBbm5vdGF0aW9uXCIsIHtcbiAgYWxpYXNlczogW1wiRmxvd1wiXSxcbiAgZmllbGRzOiB7fVxufSk7XG5cbigwLCBfaW5kZXgyLmRlZmF1bHQpKFwiTnVtYmVyVHlwZUFubm90YXRpb25cIiwge1xuICBhbGlhc2VzOiBbXCJGbG93XCIsIFwiRmxvd0Jhc2VBbm5vdGF0aW9uXCJdLFxuICBmaWVsZHM6IHt9XG59KTtcblxuKDAsIF9pbmRleDIuZGVmYXVsdCkoXCJTdHJpbmdMaXRlcmFsVHlwZUFubm90YXRpb25cIiwge1xuICBhbGlhc2VzOiBbXCJGbG93XCJdLFxuICBmaWVsZHM6IHt9XG59KTtcblxuKDAsIF9pbmRleDIuZGVmYXVsdCkoXCJTdHJpbmdUeXBlQW5ub3RhdGlvblwiLCB7XG4gIGFsaWFzZXM6IFtcIkZsb3dcIiwgXCJGbG93QmFzZUFubm90YXRpb25cIl0sXG4gIGZpZWxkczoge31cbn0pO1xuXG4oMCwgX2luZGV4Mi5kZWZhdWx0KShcIlRoaXNUeXBlQW5ub3RhdGlvblwiLCB7XG4gIGFsaWFzZXM6IFtcIkZsb3dcIiwgXCJGbG93QmFzZUFubm90YXRpb25cIl0sXG4gIGZpZWxkczoge31cbn0pO1xuXG4oMCwgX2luZGV4Mi5kZWZhdWx0KShcIlR1cGxlVHlwZUFubm90YXRpb25cIiwge1xuICB2aXNpdG9yOiBbXCJ0eXBlc1wiXSxcbiAgYWxpYXNlczogW1wiRmxvd1wiXSxcbiAgZmllbGRzOiB7fVxufSk7XG5cbigwLCBfaW5kZXgyLmRlZmF1bHQpKFwiVHlwZW9mVHlwZUFubm90YXRpb25cIiwge1xuICB2aXNpdG9yOiBbXCJhcmd1bWVudFwiXSxcbiAgYWxpYXNlczogW1wiRmxvd1wiXSxcbiAgZmllbGRzOiB7fVxufSk7XG5cbigwLCBfaW5kZXgyLmRlZmF1bHQpKFwiVHlwZUFsaWFzXCIsIHtcbiAgdmlzaXRvcjogW1wiaWRcIiwgXCJ0eXBlUGFyYW1ldGVyc1wiLCBcInJpZ2h0XCJdLFxuICBhbGlhc2VzOiBbXCJGbG93XCIsIFwiRmxvd0RlY2xhcmF0aW9uXCIsIFwiU3RhdGVtZW50XCIsIFwiRGVjbGFyYXRpb25cIl0sXG4gIGZpZWxkczoge31cbn0pO1xuXG4oMCwgX2luZGV4Mi5kZWZhdWx0KShcIk9wYXF1ZVR5cGVcIiwge1xuICB2aXNpdG9yOiBbXCJpZFwiLCBcInR5cGVQYXJhbWV0ZXJzXCIsIFwiaW1wbHR5cGVcIiwgXCJzdXBlcnR5cGVcIl0sXG4gIGFsaWFzZXM6IFtcIkZsb3dcIiwgXCJGbG93RGVjbGFyYXRpb25cIiwgXCJTdGF0ZW1lbnRcIiwgXCJEZWNsYXJhdGlvblwiXSxcbiAgZmllbGRzOiB7fVxufSk7XG5cbigwLCBfaW5kZXgyLmRlZmF1bHQpKFwiVHlwZUFubm90YXRpb25cIiwge1xuICB2aXNpdG9yOiBbXCJ0eXBlQW5ub3RhdGlvblwiXSxcbiAgYWxpYXNlczogW1wiRmxvd1wiXSxcbiAgZmllbGRzOiB7fVxufSk7XG5cbigwLCBfaW5kZXgyLmRlZmF1bHQpKFwiVHlwZUNhc3RFeHByZXNzaW9uXCIsIHtcbiAgdmlzaXRvcjogW1wiZXhwcmVzc2lvblwiLCBcInR5cGVBbm5vdGF0aW9uXCJdLFxuICBhbGlhc2VzOiBbXCJGbG93XCIsIFwiRXhwcmVzc2lvbldyYXBwZXJcIiwgXCJFeHByZXNzaW9uXCJdLFxuICBmaWVsZHM6IHt9XG59KTtcblxuKDAsIF9pbmRleDIuZGVmYXVsdCkoXCJUeXBlUGFyYW1ldGVyXCIsIHtcbiAgdmlzaXRvcjogW1wiYm91bmRcIl0sXG4gIGFsaWFzZXM6IFtcIkZsb3dcIl0sXG4gIGZpZWxkczoge31cbn0pO1xuXG4oMCwgX2luZGV4Mi5kZWZhdWx0KShcIlR5cGVQYXJhbWV0ZXJEZWNsYXJhdGlvblwiLCB7XG4gIHZpc2l0b3I6IFtcInBhcmFtc1wiXSxcbiAgYWxpYXNlczogW1wiRmxvd1wiXSxcbiAgZmllbGRzOiB7fVxufSk7XG5cbigwLCBfaW5kZXgyLmRlZmF1bHQpKFwiVHlwZVBhcmFtZXRlckluc3RhbnRpYXRpb25cIiwge1xuICB2aXNpdG9yOiBbXCJwYXJhbXNcIl0sXG4gIGFsaWFzZXM6IFtcIkZsb3dcIl0sXG4gIGZpZWxkczoge31cbn0pO1xuXG4oMCwgX2luZGV4Mi5kZWZhdWx0KShcIk9iamVjdFR5cGVBbm5vdGF0aW9uXCIsIHtcbiAgdmlzaXRvcjogW1wicHJvcGVydGllc1wiLCBcImluZGV4ZXJzXCIsIFwiY2FsbFByb3BlcnRpZXNcIl0sXG4gIGFsaWFzZXM6IFtcIkZsb3dcIl0sXG4gIGZpZWxkczoge31cbn0pO1xuXG4oMCwgX2luZGV4Mi5kZWZhdWx0KShcIk9iamVjdFR5cGVDYWxsUHJvcGVydHlcIiwge1xuICB2aXNpdG9yOiBbXCJ2YWx1ZVwiXSxcbiAgYWxpYXNlczogW1wiRmxvd1wiLCBcIlVzZXJXaGl0ZXNwYWNhYmxlXCJdLFxuICBmaWVsZHM6IHt9XG59KTtcblxuKDAsIF9pbmRleDIuZGVmYXVsdCkoXCJPYmplY3RUeXBlSW5kZXhlclwiLCB7XG4gIHZpc2l0b3I6IFtcImlkXCIsIFwia2V5XCIsIFwidmFsdWVcIl0sXG4gIGFsaWFzZXM6IFtcIkZsb3dcIiwgXCJVc2VyV2hpdGVzcGFjYWJsZVwiXSxcbiAgZmllbGRzOiB7fVxufSk7XG5cbigwLCBfaW5kZXgyLmRlZmF1bHQpKFwiT2JqZWN0VHlwZVByb3BlcnR5XCIsIHtcbiAgdmlzaXRvcjogW1wia2V5XCIsIFwidmFsdWVcIl0sXG4gIGFsaWFzZXM6IFtcIkZsb3dcIiwgXCJVc2VyV2hpdGVzcGFjYWJsZVwiXSxcbiAgZmllbGRzOiB7fVxufSk7XG5cbigwLCBfaW5kZXgyLmRlZmF1bHQpKFwiT2JqZWN0VHlwZVNwcmVhZFByb3BlcnR5XCIsIHtcbiAgdmlzaXRvcjogW1wiYXJndW1lbnRcIl0sXG4gIGFsaWFzZXM6IFtcIkZsb3dcIiwgXCJVc2VyV2hpdGVzcGFjYWJsZVwiXSxcbiAgZmllbGRzOiB7fVxufSk7XG5cbigwLCBfaW5kZXgyLmRlZmF1bHQpKFwiUXVhbGlmaWVkVHlwZUlkZW50aWZpZXJcIiwge1xuICB2aXNpdG9yOiBbXCJpZFwiLCBcInF1YWxpZmljYXRpb25cIl0sXG4gIGFsaWFzZXM6IFtcIkZsb3dcIl0sXG4gIGZpZWxkczoge31cbn0pO1xuXG4oMCwgX2luZGV4Mi5kZWZhdWx0KShcIlVuaW9uVHlwZUFubm90YXRpb25cIiwge1xuICB2aXNpdG9yOiBbXCJ0eXBlc1wiXSxcbiAgYWxpYXNlczogW1wiRmxvd1wiXSxcbiAgZmllbGRzOiB7fVxufSk7XG5cbigwLCBfaW5kZXgyLmRlZmF1bHQpKFwiVm9pZFR5cGVBbm5vdGF0aW9uXCIsIHtcbiAgYWxpYXNlczogW1wiRmxvd1wiLCBcIkZsb3dCYXNlQW5ub3RhdGlvblwiXSxcbiAgZmllbGRzOiB7fVxufSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW5kZXggPSByZXF1aXJlKFwiLi9pbmRleFwiKTtcblxudmFyIF9pbmRleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmRleCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbigwLCBfaW5kZXgyLmRlZmF1bHQpKFwiSlNYQXR0cmlidXRlXCIsIHtcbiAgdmlzaXRvcjogW1wibmFtZVwiLCBcInZhbHVlXCJdLFxuICBhbGlhc2VzOiBbXCJKU1hcIiwgXCJJbW11dGFibGVcIl0sXG4gIGZpZWxkczoge1xuICAgIG5hbWU6IHtcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4LmFzc2VydE5vZGVUeXBlKShcIkpTWElkZW50aWZpZXJcIiwgXCJKU1hOYW1lc3BhY2VkTmFtZVwiKVxuICAgIH0sXG4gICAgdmFsdWU6IHtcbiAgICAgIG9wdGlvbmFsOiB0cnVlLFxuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXguYXNzZXJ0Tm9kZVR5cGUpKFwiSlNYRWxlbWVudFwiLCBcIlN0cmluZ0xpdGVyYWxcIiwgXCJKU1hFeHByZXNzaW9uQ29udGFpbmVyXCIpXG4gICAgfVxuICB9XG59KTtcblxuKDAsIF9pbmRleDIuZGVmYXVsdCkoXCJKU1hDbG9zaW5nRWxlbWVudFwiLCB7XG4gIHZpc2l0b3I6IFtcIm5hbWVcIl0sXG4gIGFsaWFzZXM6IFtcIkpTWFwiLCBcIkltbXV0YWJsZVwiXSxcbiAgZmllbGRzOiB7XG4gICAgbmFtZToge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXguYXNzZXJ0Tm9kZVR5cGUpKFwiSlNYSWRlbnRpZmllclwiLCBcIkpTWE1lbWJlckV4cHJlc3Npb25cIilcbiAgICB9XG4gIH1cbn0pO1xuXG4oMCwgX2luZGV4Mi5kZWZhdWx0KShcIkpTWEVsZW1lbnRcIiwge1xuICBidWlsZGVyOiBbXCJvcGVuaW5nRWxlbWVudFwiLCBcImNsb3NpbmdFbGVtZW50XCIsIFwiY2hpbGRyZW5cIiwgXCJzZWxmQ2xvc2luZ1wiXSxcbiAgdmlzaXRvcjogW1wib3BlbmluZ0VsZW1lbnRcIiwgXCJjaGlsZHJlblwiLCBcImNsb3NpbmdFbGVtZW50XCJdLFxuICBhbGlhc2VzOiBbXCJKU1hcIiwgXCJJbW11dGFibGVcIiwgXCJFeHByZXNzaW9uXCJdLFxuICBmaWVsZHM6IHtcbiAgICBvcGVuaW5nRWxlbWVudDoge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXguYXNzZXJ0Tm9kZVR5cGUpKFwiSlNYT3BlbmluZ0VsZW1lbnRcIilcbiAgICB9LFxuICAgIGNsb3NpbmdFbGVtZW50OiB7XG4gICAgICBvcHRpb25hbDogdHJ1ZSxcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4LmFzc2VydE5vZGVUeXBlKShcIkpTWENsb3NpbmdFbGVtZW50XCIpXG4gICAgfSxcbiAgICBjaGlsZHJlbjoge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXguY2hhaW4pKCgwLCBfaW5kZXguYXNzZXJ0VmFsdWVUeXBlKShcImFycmF5XCIpLCAoMCwgX2luZGV4LmFzc2VydEVhY2gpKCgwLCBfaW5kZXguYXNzZXJ0Tm9kZVR5cGUpKFwiSlNYVGV4dFwiLCBcIkpTWEV4cHJlc3Npb25Db250YWluZXJcIiwgXCJKU1hTcHJlYWRDaGlsZFwiLCBcIkpTWEVsZW1lbnRcIikpKVxuICAgIH1cbiAgfVxufSk7XG5cbigwLCBfaW5kZXgyLmRlZmF1bHQpKFwiSlNYRW1wdHlFeHByZXNzaW9uXCIsIHtcbiAgYWxpYXNlczogW1wiSlNYXCIsIFwiRXhwcmVzc2lvblwiXVxufSk7XG5cbigwLCBfaW5kZXgyLmRlZmF1bHQpKFwiSlNYRXhwcmVzc2lvbkNvbnRhaW5lclwiLCB7XG4gIHZpc2l0b3I6IFtcImV4cHJlc3Npb25cIl0sXG4gIGFsaWFzZXM6IFtcIkpTWFwiLCBcIkltbXV0YWJsZVwiXSxcbiAgZmllbGRzOiB7XG4gICAgZXhwcmVzc2lvbjoge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXguYXNzZXJ0Tm9kZVR5cGUpKFwiRXhwcmVzc2lvblwiKVxuICAgIH1cbiAgfVxufSk7XG5cbigwLCBfaW5kZXgyLmRlZmF1bHQpKFwiSlNYU3ByZWFkQ2hpbGRcIiwge1xuICB2aXNpdG9yOiBbXCJleHByZXNzaW9uXCJdLFxuICBhbGlhc2VzOiBbXCJKU1hcIiwgXCJJbW11dGFibGVcIl0sXG4gIGZpZWxkczoge1xuICAgIGV4cHJlc3Npb246IHtcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4LmFzc2VydE5vZGVUeXBlKShcIkV4cHJlc3Npb25cIilcbiAgICB9XG4gIH1cbn0pO1xuXG4oMCwgX2luZGV4Mi5kZWZhdWx0KShcIkpTWElkZW50aWZpZXJcIiwge1xuICBidWlsZGVyOiBbXCJuYW1lXCJdLFxuICBhbGlhc2VzOiBbXCJKU1hcIiwgXCJFeHByZXNzaW9uXCJdLFxuICBmaWVsZHM6IHtcbiAgICBuYW1lOiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleC5hc3NlcnRWYWx1ZVR5cGUpKFwic3RyaW5nXCIpXG4gICAgfVxuICB9XG59KTtcblxuKDAsIF9pbmRleDIuZGVmYXVsdCkoXCJKU1hNZW1iZXJFeHByZXNzaW9uXCIsIHtcbiAgdmlzaXRvcjogW1wib2JqZWN0XCIsIFwicHJvcGVydHlcIl0sXG4gIGFsaWFzZXM6IFtcIkpTWFwiLCBcIkV4cHJlc3Npb25cIl0sXG4gIGZpZWxkczoge1xuICAgIG9iamVjdDoge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXguYXNzZXJ0Tm9kZVR5cGUpKFwiSlNYTWVtYmVyRXhwcmVzc2lvblwiLCBcIkpTWElkZW50aWZpZXJcIilcbiAgICB9LFxuICAgIHByb3BlcnR5OiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleC5hc3NlcnROb2RlVHlwZSkoXCJKU1hJZGVudGlmaWVyXCIpXG4gICAgfVxuICB9XG59KTtcblxuKDAsIF9pbmRleDIuZGVmYXVsdCkoXCJKU1hOYW1lc3BhY2VkTmFtZVwiLCB7XG4gIHZpc2l0b3I6IFtcIm5hbWVzcGFjZVwiLCBcIm5hbWVcIl0sXG4gIGFsaWFzZXM6IFtcIkpTWFwiXSxcbiAgZmllbGRzOiB7XG4gICAgbmFtZXNwYWNlOiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleC5hc3NlcnROb2RlVHlwZSkoXCJKU1hJZGVudGlmaWVyXCIpXG4gICAgfSxcbiAgICBuYW1lOiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleC5hc3NlcnROb2RlVHlwZSkoXCJKU1hJZGVudGlmaWVyXCIpXG4gICAgfVxuICB9XG59KTtcblxuKDAsIF9pbmRleDIuZGVmYXVsdCkoXCJKU1hPcGVuaW5nRWxlbWVudFwiLCB7XG4gIGJ1aWxkZXI6IFtcIm5hbWVcIiwgXCJhdHRyaWJ1dGVzXCIsIFwic2VsZkNsb3NpbmdcIl0sXG4gIHZpc2l0b3I6IFtcIm5hbWVcIiwgXCJhdHRyaWJ1dGVzXCJdLFxuICBhbGlhc2VzOiBbXCJKU1hcIiwgXCJJbW11dGFibGVcIl0sXG4gIGZpZWxkczoge1xuICAgIG5hbWU6IHtcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4LmFzc2VydE5vZGVUeXBlKShcIkpTWElkZW50aWZpZXJcIiwgXCJKU1hNZW1iZXJFeHByZXNzaW9uXCIpXG4gICAgfSxcbiAgICBzZWxmQ2xvc2luZzoge1xuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleC5hc3NlcnRWYWx1ZVR5cGUpKFwiYm9vbGVhblwiKVxuICAgIH0sXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXguY2hhaW4pKCgwLCBfaW5kZXguYXNzZXJ0VmFsdWVUeXBlKShcImFycmF5XCIpLCAoMCwgX2luZGV4LmFzc2VydEVhY2gpKCgwLCBfaW5kZXguYXNzZXJ0Tm9kZVR5cGUpKFwiSlNYQXR0cmlidXRlXCIsIFwiSlNYU3ByZWFkQXR0cmlidXRlXCIpKSlcbiAgICB9XG4gIH1cbn0pO1xuXG4oMCwgX2luZGV4Mi5kZWZhdWx0KShcIkpTWFNwcmVhZEF0dHJpYnV0ZVwiLCB7XG4gIHZpc2l0b3I6IFtcImFyZ3VtZW50XCJdLFxuICBhbGlhc2VzOiBbXCJKU1hcIl0sXG4gIGZpZWxkczoge1xuICAgIGFyZ3VtZW50OiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleC5hc3NlcnROb2RlVHlwZSkoXCJFeHByZXNzaW9uXCIpXG4gICAgfVxuICB9XG59KTtcblxuKDAsIF9pbmRleDIuZGVmYXVsdCkoXCJKU1hUZXh0XCIsIHtcbiAgYWxpYXNlczogW1wiSlNYXCIsIFwiSW1tdXRhYmxlXCJdLFxuICBidWlsZGVyOiBbXCJ2YWx1ZVwiXSxcbiAgZmllbGRzOiB7XG4gICAgdmFsdWU6IHtcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4LmFzc2VydFZhbHVlVHlwZSkoXCJzdHJpbmdcIilcbiAgICB9XG4gIH1cbn0pOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2luZGV4ID0gcmVxdWlyZShcIi4vaW5kZXhcIik7XG5cbnZhciBfaW5kZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5kZXgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4oMCwgX2luZGV4Mi5kZWZhdWx0KShcIk5vb3BcIiwge1xuICB2aXNpdG9yOiBbXVxufSk7XG5cbigwLCBfaW5kZXgyLmRlZmF1bHQpKFwiUGFyZW50aGVzaXplZEV4cHJlc3Npb25cIiwge1xuICB2aXNpdG9yOiBbXCJleHByZXNzaW9uXCJdLFxuICBhbGlhc2VzOiBbXCJFeHByZXNzaW9uXCIsIFwiRXhwcmVzc2lvbldyYXBwZXJcIl0sXG4gIGZpZWxkczoge1xuICAgIGV4cHJlc3Npb246IHtcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4LmFzc2VydE5vZGVUeXBlKShcIkV4cHJlc3Npb25cIilcbiAgICB9XG4gIH1cbn0pOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2luZGV4ID0gcmVxdWlyZShcIi4vaW5kZXhcIik7XG5cbnZhciBfaW5kZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5kZXgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4oMCwgX2luZGV4Mi5kZWZhdWx0KShcIkF3YWl0RXhwcmVzc2lvblwiLCB7XG4gIGJ1aWxkZXI6IFtcImFyZ3VtZW50XCJdLFxuICB2aXNpdG9yOiBbXCJhcmd1bWVudFwiXSxcbiAgYWxpYXNlczogW1wiRXhwcmVzc2lvblwiLCBcIlRlcm1pbmF0b3JsZXNzXCJdLFxuICBmaWVsZHM6IHtcbiAgICBhcmd1bWVudDoge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXguYXNzZXJ0Tm9kZVR5cGUpKFwiRXhwcmVzc2lvblwiKVxuICAgIH1cbiAgfVxufSk7XG5cbigwLCBfaW5kZXgyLmRlZmF1bHQpKFwiRm9yQXdhaXRTdGF0ZW1lbnRcIiwge1xuICB2aXNpdG9yOiBbXCJsZWZ0XCIsIFwicmlnaHRcIiwgXCJib2R5XCJdLFxuICBhbGlhc2VzOiBbXCJTY29wYWJsZVwiLCBcIlN0YXRlbWVudFwiLCBcIkZvclwiLCBcIkJsb2NrUGFyZW50XCIsIFwiTG9vcFwiLCBcIkZvclhTdGF0ZW1lbnRcIl0sXG4gIGZpZWxkczoge1xuICAgIGxlZnQ6IHtcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4LmFzc2VydE5vZGVUeXBlKShcIlZhcmlhYmxlRGVjbGFyYXRpb25cIiwgXCJMVmFsXCIpXG4gICAgfSxcbiAgICByaWdodDoge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXguYXNzZXJ0Tm9kZVR5cGUpKFwiRXhwcmVzc2lvblwiKVxuICAgIH0sXG4gICAgYm9keToge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXguYXNzZXJ0Tm9kZVR5cGUpKFwiU3RhdGVtZW50XCIpXG4gICAgfVxuICB9XG59KTtcblxuKDAsIF9pbmRleDIuZGVmYXVsdCkoXCJCaW5kRXhwcmVzc2lvblwiLCB7XG4gIHZpc2l0b3I6IFtcIm9iamVjdFwiLCBcImNhbGxlZVwiXSxcbiAgYWxpYXNlczogW1wiRXhwcmVzc2lvblwiXSxcbiAgZmllbGRzOiB7fVxufSk7XG5cbigwLCBfaW5kZXgyLmRlZmF1bHQpKFwiSW1wb3J0XCIsIHtcbiAgYWxpYXNlczogW1wiRXhwcmVzc2lvblwiXVxufSk7XG5cbigwLCBfaW5kZXgyLmRlZmF1bHQpKFwiRGVjb3JhdG9yXCIsIHtcbiAgdmlzaXRvcjogW1wiZXhwcmVzc2lvblwiXSxcbiAgZmllbGRzOiB7XG4gICAgZXhwcmVzc2lvbjoge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXguYXNzZXJ0Tm9kZVR5cGUpKFwiRXhwcmVzc2lvblwiKVxuICAgIH1cbiAgfVxufSk7XG5cbigwLCBfaW5kZXgyLmRlZmF1bHQpKFwiRG9FeHByZXNzaW9uXCIsIHtcbiAgdmlzaXRvcjogW1wiYm9keVwiXSxcbiAgYWxpYXNlczogW1wiRXhwcmVzc2lvblwiXSxcbiAgZmllbGRzOiB7XG4gICAgYm9keToge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXguYXNzZXJ0Tm9kZVR5cGUpKFwiQmxvY2tTdGF0ZW1lbnRcIilcbiAgICB9XG4gIH1cbn0pO1xuXG4oMCwgX2luZGV4Mi5kZWZhdWx0KShcIkV4cG9ydERlZmF1bHRTcGVjaWZpZXJcIiwge1xuICB2aXNpdG9yOiBbXCJleHBvcnRlZFwiXSxcbiAgYWxpYXNlczogW1wiTW9kdWxlU3BlY2lmaWVyXCJdLFxuICBmaWVsZHM6IHtcbiAgICBleHBvcnRlZDoge1xuICAgICAgdmFsaWRhdGU6ICgwLCBfaW5kZXguYXNzZXJ0Tm9kZVR5cGUpKFwiSWRlbnRpZmllclwiKVxuICAgIH1cbiAgfVxufSk7XG5cbigwLCBfaW5kZXgyLmRlZmF1bHQpKFwiRXhwb3J0TmFtZXNwYWNlU3BlY2lmaWVyXCIsIHtcbiAgdmlzaXRvcjogW1wiZXhwb3J0ZWRcIl0sXG4gIGFsaWFzZXM6IFtcIk1vZHVsZVNwZWNpZmllclwiXSxcbiAgZmllbGRzOiB7XG4gICAgZXhwb3J0ZWQ6IHtcbiAgICAgIHZhbGlkYXRlOiAoMCwgX2luZGV4LmFzc2VydE5vZGVUeXBlKShcIklkZW50aWZpZXJcIilcbiAgICB9XG4gIH1cbn0pO1xuXG4oMCwgX2luZGV4Mi5kZWZhdWx0KShcIlJlc3RQcm9wZXJ0eVwiLCB7XG4gIHZpc2l0b3I6IFtcImFyZ3VtZW50XCJdLFxuICBhbGlhc2VzOiBbXCJVbmFyeUxpa2VcIl0sXG4gIGZpZWxkczoge1xuICAgIGFyZ3VtZW50OiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleC5hc3NlcnROb2RlVHlwZSkoXCJMVmFsXCIpXG4gICAgfVxuICB9XG59KTtcblxuKDAsIF9pbmRleDIuZGVmYXVsdCkoXCJTcHJlYWRQcm9wZXJ0eVwiLCB7XG4gIHZpc2l0b3I6IFtcImFyZ3VtZW50XCJdLFxuICBhbGlhc2VzOiBbXCJVbmFyeUxpa2VcIl0sXG4gIGZpZWxkczoge1xuICAgIGFyZ3VtZW50OiB7XG4gICAgICB2YWxpZGF0ZTogKDAsIF9pbmRleC5hc3NlcnROb2RlVHlwZSkoXCJFeHByZXNzaW9uXCIpXG4gICAgfVxuICB9XG59KTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuaXNSZWFjdENvbXBvbmVudCA9IHVuZGVmaW5lZDtcbmV4cG9ydHMuaXNDb21wYXRUYWcgPSBpc0NvbXBhdFRhZztcbmV4cG9ydHMuYnVpbGRDaGlsZHJlbiA9IGJ1aWxkQ2hpbGRyZW47XG5cbnZhciBfaW5kZXggPSByZXF1aXJlKFwiLi9pbmRleFwiKTtcblxudmFyIHQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfaW5kZXgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG52YXIgaXNSZWFjdENvbXBvbmVudCA9IGV4cG9ydHMuaXNSZWFjdENvbXBvbmVudCA9IHQuYnVpbGRNYXRjaE1lbWJlckV4cHJlc3Npb24oXCJSZWFjdC5Db21wb25lbnRcIik7XG5cbmZ1bmN0aW9uIGlzQ29tcGF0VGFnKHRhZ05hbWUpIHtcbiAgcmV0dXJuICEhdGFnTmFtZSAmJiAvXlthLXpdfFxcLS8udGVzdCh0YWdOYW1lKTtcbn1cblxuZnVuY3Rpb24gY2xlYW5KU1hFbGVtZW50TGl0ZXJhbENoaWxkKGNoaWxkLCBhcmdzKSB7XG4gIHZhciBsaW5lcyA9IGNoaWxkLnZhbHVlLnNwbGl0KC9cXHJcXG58XFxufFxcci8pO1xuXG4gIHZhciBsYXN0Tm9uRW1wdHlMaW5lID0gMDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGxpbmVzW2ldLm1hdGNoKC9bXiBcXHRdLykpIHtcbiAgICAgIGxhc3ROb25FbXB0eUxpbmUgPSBpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBzdHIgPSBcIlwiO1xuXG4gIGZvciAodmFyIF9pID0gMDsgX2kgPCBsaW5lcy5sZW5ndGg7IF9pKyspIHtcbiAgICB2YXIgbGluZSA9IGxpbmVzW19pXTtcblxuICAgIHZhciBpc0ZpcnN0TGluZSA9IF9pID09PSAwO1xuICAgIHZhciBpc0xhc3RMaW5lID0gX2kgPT09IGxpbmVzLmxlbmd0aCAtIDE7XG4gICAgdmFyIGlzTGFzdE5vbkVtcHR5TGluZSA9IF9pID09PSBsYXN0Tm9uRW1wdHlMaW5lO1xuXG4gICAgdmFyIHRyaW1tZWRMaW5lID0gbGluZS5yZXBsYWNlKC9cXHQvZywgXCIgXCIpO1xuXG4gICAgaWYgKCFpc0ZpcnN0TGluZSkge1xuICAgICAgdHJpbW1lZExpbmUgPSB0cmltbWVkTGluZS5yZXBsYWNlKC9eWyBdKy8sIFwiXCIpO1xuICAgIH1cblxuICAgIGlmICghaXNMYXN0TGluZSkge1xuICAgICAgdHJpbW1lZExpbmUgPSB0cmltbWVkTGluZS5yZXBsYWNlKC9bIF0rJC8sIFwiXCIpO1xuICAgIH1cblxuICAgIGlmICh0cmltbWVkTGluZSkge1xuICAgICAgaWYgKCFpc0xhc3ROb25FbXB0eUxpbmUpIHtcbiAgICAgICAgdHJpbW1lZExpbmUgKz0gXCIgXCI7XG4gICAgICB9XG5cbiAgICAgIHN0ciArPSB0cmltbWVkTGluZTtcbiAgICB9XG4gIH1cblxuICBpZiAoc3RyKSBhcmdzLnB1c2godC5zdHJpbmdMaXRlcmFsKHN0cikpO1xufVxuXG5mdW5jdGlvbiBidWlsZENoaWxkcmVuKG5vZGUpIHtcbiAgdmFyIGVsZW1zID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGNoaWxkID0gbm9kZS5jaGlsZHJlbltpXTtcblxuICAgIGlmICh0LmlzSlNYVGV4dChjaGlsZCkpIHtcbiAgICAgIGNsZWFuSlNYRWxlbWVudExpdGVyYWxDaGlsZChjaGlsZCwgZWxlbXMpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKHQuaXNKU1hFeHByZXNzaW9uQ29udGFpbmVyKGNoaWxkKSkgY2hpbGQgPSBjaGlsZC5leHByZXNzaW9uO1xuICAgIGlmICh0LmlzSlNYRW1wdHlFeHByZXNzaW9uKGNoaWxkKSkgY29udGludWU7XG5cbiAgICBlbGVtcy5wdXNoKGNoaWxkKTtcbiAgfVxuXG4gIHJldHVybiBlbGVtcztcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJjb25zdCBzZWN0aW9uT3R6aXZpQ29udGVudEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJldmlld3NfX2NvbnRlbnQnKTtcbmNvbnN0IHNlY3Rpb25PdHppdmlFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXZpZXdzJyk7XG5cbmZ1bmN0aW9uIG1ha2VWaWRlb1Jlc3BvbnNpdmUoZSkge1xuICBsZXQgd2luZG93V2lkdGggPSBwYXJzZUludChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpO1xuICBpZiAod2luZG93V2lkdGggPCA0ODApIHtcbiAgICBzZWN0aW9uT3R6aXZpRWwuc3R5bGUuaGVpZ2h0ID0gYCR7cGFyc2VJbnQoXG4gICAgICBnZXRDb21wdXRlZFN0eWxlKHNlY3Rpb25PdHppdmlDb250ZW50RWwpLmhlaWdodFxuICAgICkgKyAyNTB9cHhgO1xuICB9IGVsc2Uge1xuICAgIHNlY3Rpb25PdHppdmlFbC5zdHlsZS5oZWlnaHQgPSBgJHtwYXJzZUludChcbiAgICAgIGdldENvbXB1dGVkU3R5bGUoc2VjdGlvbk90eml2aUNvbnRlbnRFbCkuaGVpZ2h0XG4gICAgKSArIDIwMH1weGA7XG4gIH1cbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG1ha2VWaWRlb1Jlc3BvbnNpdmUpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBtYWtlVmlkZW9SZXNwb25zaXZlKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImNsYXNzIEJ0biB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGUpIHtcbiAgICBpZiAoZS50eXBlID09PSAnY2xpY2snKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLl9jb25maWcubW9kYWwub3Blbk1vZGFsKHRoaXMuX2NvbmZpZy5tb2RhbC5kaWFsb2cpO1xuICAgIH1cbiAgfVxuXG4gIGZpbmRFbEJ5SUQoaWQpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCk7XG4gIH1cblxuICBmaW5kRWxCeUNsYXNzKGNsYXNzTmFtZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjbGFzc05hbWV9YCk7XG4gIH1cbn1cblxuZXhwb3J0IHsgQnRuIH07XG4iLCJjbGFzcyBNb2RhbCB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcblxuICAgIHRoaXMuX2JhY2tkcm9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuJHt0aGlzLl9jb25maWcuY2xhc3Nlcy5iYWNrZHJvcH1gXG4gICAgKTtcbiAgICB0aGlzLl9vcGVuZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9jbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLiR7dGhpcy5fY29uZmlnLmNsYXNzZXMuYmFja2Ryb3B9IC4ke3RoaXMuX2NvbmZpZy5jbGFzc2VzLmNsb3NlQnRufWBcbiAgICApO1xuICAgIHRoaXMuZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5fY29uZmlnLklEcy5kaWFsb2d9YCk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB0aGlzLm9uS2V5ZG93bihlKSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHRoaXMub25DbGljayhlKSk7XG4gIH1cblxuICAvLyBjb25maXJtIG9yZGVyIG1vZGE6XG4gIG9uQ2xpY2soZSkge1xuICAgIGNvbnN0IGNsaWNrZWRFbCA9IGUudGFyZ2V0O1xuXG4gICAgaWYgKGNsaWNrZWRFbCA9PT0gdGhpcy5fYmFja2Ryb3AgfHwgY2xpY2tlZEVsID09PSB0aGlzLl9jbG9zZUJ0bikge1xuICAgICAgdGhpcy5jbG9zZU1vZGFsKHRoaXMuZGlhbG9nKTsgLy8gd2ViaW5hciBzaWdudXAgbW9kYWw6IHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5ZG93bihlKSB7XG4gICAgaWYgKHRoaXMuX29wZW5lZERpYWxvZyAmJiBlLmNvZGUgPT09ICdFc2NhcGUnKSB7XG4gICAgICBjb25zdCB2aWRlb0luTW9kYWwgPSB0aGlzLl9vcGVuZWREaWFsb2cucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC4ke3RoaXMuX2NvbmZpZy5jbGFzc2VzLnZpZGVvfWBcbiAgICAgICk7XG4gICAgICBpZiAodmlkZW9Jbk1vZGFsKSB0aGlzLnN0b3BWaWRlbyh2aWRlb0luTW9kYWwpO1xuICAgICAgdGhpcy50b2dnbGVCYWNrZHJvcCgpO1xuICAgICAgdGhpcy5fb3BlbmVkID0gZmFsc2U7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlQmFja2Ryb3AoKSB7XG4gICAgdGhpcy5fYmFja2Ryb3AuY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLl9jb25maWcuY2xhc3Nlcy5iYWNrZHJvcFN0YXRlTW9kaWZpZXIpO1xuICB9XG5cbiAgb3Blbk1vZGFsKGRpYWxvZykge1xuICAgIGNvbnN0IG5ld0RpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2RpYWxvZy5pZH1gKTtcbiAgICBjb25zdCB2aXNpYmxlRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuJHt0aGlzLl9jb25maWcuY2xhc3Nlcy5kaWFsb2dTdGF0ZU1vZGlmaWVyfWBcbiAgICApO1xuICAgIHRoaXMuX29wZW5lZCA9ICF0aGlzLl9vcGVuZWQ7XG5cbiAgICB0aGlzLnRvZ2dsZUJhY2tkcm9wKCk7XG5cbiAgICBpZiAodmlzaWJsZURpYWxvZykgdGhpcy5oaWRlRGlhbG9nKHZpc2libGVEaWFsb2cpO1xuXG4gICAgdGhpcy5zaG93RGlhbG9nKG5ld0RpYWxvZyk7XG4gICAgdGhpcy5fb3BlbmVkRGlhbG9nID0gbmV3RGlhbG9nO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgfVxuXG4gIGNsb3NlTW9kYWwoZWwpIHtcbiAgICBpZiAodGhpcy5fb3BlbmVkKSB7XG4gICAgICAvLyBoYW5kbGUgdmlkZW86XG4gICAgICBjb25zdCB2aWRlb0Jsb2NrID1cbiAgICAgICAgdGhpcy5fb3BlbmVkRGlhbG9nICYmXG4gICAgICAgIHRoaXMuX29wZW5lZERpYWxvZy5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLl9jb25maWcuY2xhc3Nlcy52aWRlb31gKTtcbiAgICAgIGlmICh2aWRlb0Jsb2NrKSB0aGlzLnN0b3BWaWRlbyh2aWRlb0Jsb2NrKTtcbiAgICAgIC8vXG5cbiAgICAgIHRoaXMuX29wZW5lZCA9ICF0aGlzLl9vcGVuZWQ7XG5cbiAgICAgIHRoaXMudG9nZ2xlQmFja2Ryb3AoKTtcbiAgICAgIGRlbGV0ZSB0aGlzLl9vcGVuZWREaWFsb2c7XG4gICAgICB0aGlzLmhpZGVEaWFsb2coZWwpO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGhpZGVEaWFsb2coZGlhbG9nKSB7XG4gICAgZGlhbG9nLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fY29uZmlnLmNsYXNzZXMuZGlhbG9nU3RhdGVNb2RpZmllcik7XG4gIH1cbiAgc2hvd0RpYWxvZyhkaWFsb2cpIHtcbiAgICBkaWFsb2cuY2xhc3NMaXN0LmFkZCh0aGlzLl9jb25maWcuY2xhc3Nlcy5kaWFsb2dTdGF0ZU1vZGlmaWVyKTtcbiAgfVxuXG4gIHN0b3BWaWRlbyhlbGVtZW50KSB7XG4gICAgLyogU3RvcCBhbiBpZnJhbWUgb3IgSFRNTDUgPHZpZGVvPiBmcm9tIHBsYXlpbmcuXG4gICAgIHBhcmFtIHsgZWxlbWVudH0gLSB0aGUgZWxlbWVudCB0aGF0IGNvbnRhaW5zIHRoZSB2aWRlbyAqL1xuICAgIGNvbnN0IGlmcmFtZSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaWZyYW1lJyk7XG4gICAgY29uc3QgdmlkZW8gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3ZpZGVvJyk7XG5cbiAgICBpZiAoaWZyYW1lKSB7XG4gICAgICBjb25zdCBpZnJhbWVTcmMgPSBpZnJhbWUuc3JjO1xuICAgICAgaWZyYW1lLnNyYyA9IGlmcmFtZVNyYztcbiAgICB9XG5cbiAgICBpZiAodmlkZW8pIHZpZGVvLnBhdXNlKCk7XG4gIH1cbn1cblxuZXhwb3J0IHsgTW9kYWwgfTtcbiIsImltcG9ydCB7IE1vZGFsIH0gZnJvbSAnLi4vbW9kYWwvbW9kYWwnO1xuXG5jb25zdCB2aWRlb01vZGFsID0gbmV3IE1vZGFsKHtcbiAgSURzOiB7XG4gICAgZGlhbG9nOiAndmlkZW8tZGlhbG9nJyxcbiAgfSxcbiAgLyogYWxsIGNsYXNzIG5hbWVzIHVzZWQgaW4gSFRNTCByZWxhdGVkIHRvIG1vZGFsIHdpbmRvdyBjb21wb25lbnQ6ICovXG4gIGNsYXNzZXM6IHtcbiAgICBiYWNrZHJvcDogJ21vZGFsX3ZpZGVvJyxcbiAgICBiYWNrZHJvcFN0YXRlTW9kaWZpZXI6ICdtb2RhbF92aXNpYmxlJyxcbiAgICBkaWFsb2dTdGF0ZU1vZGlmaWVyOiAnbW9kYWxfX2RpYWxvZ192aXNpYmxlJyxcbiAgICBjbG9zZUJ0bjogJ21vZGFsX19jbG9zZS1idG4nLFxuICAgIHZpZGVvOiAnZW1iZWQnLFxuICB9LFxufSk7XG5cbmV4cG9ydCB7IHZpZGVvTW9kYWwgfTtcbiIsImltcG9ydCB7IEJ0biB9IGZyb20gJy4uL2J0bi9idG4nO1xuXG5pbXBvcnQgeyB2aWRlb01vZGFsIH0gZnJvbSAnLi4vdmlkZW8tbW9kYWwvdmlkZW8tbW9kYWwnO1xuXG5jb25zdCB2aWRlb1RyaWdnZXJCdG5FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2aWRlby10cmlnZ2VyLWJ0bicpO1xuXG5jb25zdCB2aWRlb1RyaWdnZXJCdG4gPSBuZXcgQnRuKHtcbiAgYnRuOiB2aWRlb1RyaWdnZXJCdG5FbCxcbiAgbW9kYWw6IHZpZGVvTW9kYWwsXG59KTtcblxudmlkZW9UcmlnZ2VyQnRuRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB2aWRlb1RyaWdnZXJCdG4pO1xuIiwiY2xhc3MgVGVsZWdyYW1Cb3Qge1xuICBjb25zdHJ1Y3Rvcih7IG5hbWUsIGF1dGhUb2tlbiwgY2hhdElELCBwYXJzZU1vZGUsIGRpc2FibGVOb3RpZiB9KSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmF1dGhUb2tlbiA9IGF1dGhUb2tlbjtcbiAgICB0aGlzLmNoYXRJRCA9IGNoYXRJRDtcbiAgICB0aGlzLnBhcnNlTW9kZSA9IHBhcnNlTW9kZTtcbiAgICB0aGlzLmRpc2FibGVOb3RpZiA9IGRpc2FibGVOb3RpZjtcbiAgfVxuXG4gIGNyZWF0ZU9yZGVyTXNnKHsgbmFtZSwgZW1haWwsIHRlbCwgYWRkcmVzcyB9KSB7XG4gICAgcmV0dXJuIGDQl9CQ0JrQkNCXINCg0KPQp9Ca0JggJTBBICUwQVxuICAgINCY0LzRjzogJHtuYW1lfSAlMEFcbiAgICBFLW1haWw6ICR7ZW1haWx9ICUwQVxuICAgINCi0LXQu9C10YTQvtC9OiAke3RlbH0gJTBBXG4gICAg0JDQtNGA0LXRgTogJHthZGRyZXNzfWA7XG4gIH1cblxuICBjcmVhdGVXZWJpbmFyU2lnbnVwTXNnKHsgbmFtZSwgZW1haWwsIHRlbCB9KSB7XG4gICAgcmV0dXJuIGDQl9CQ0J/QmNCh0Kwg0J3QkCDQktCV0JHQmNCd0JDQoCAlMEEgJTBBIFxuICAgINCY0LzRjzogJHtuYW1lfSAlMEEgXG4gICAgRS1tYWlsOiAke2VtYWlsfSAlMEEgXG4gICAg0KLQtdC70LXRhNC+0L06ICR7dGVsfWA7XG4gIH1cblxuICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gZmluZCBvdXQgYm90J3MgY2hhdElEIHdoZW4geW91IGNyZWF0ZSBhIG5ldyBib3QuXG4gIC8vXG4gIC8vIEJlZm9yZSBjYWxsaW5nIHRoaXMgZnVuY3Rpb24sIG9wZW4gVGVsZWdyYW0gYW5kIHNlbmQgdHdvIG1lc3NhZ2VzXG4gIC8vIHdpdGggYW55IHRleHQgdG8geW91ciBib3QsIG90aGVyd2lzZSB0aGUgZnVuY3Rpb24gd29uJ3QgYmUgYWJsZSB0b1xuICAvLyByZXRyaWV2ZSBjaGF0SUQ6XG4gIHJldHJpZXZlQ2hhdElEKGF1dGhUb2tlbikge1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS50ZWxlZ3JhbS5vcmcvYm90JHthdXRoVG9rZW59L2dldFVwZGF0ZXNgO1xuXG4gICAgZmV0Y2godXJsKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgLy8gVGVsZWdyYW0gY2hhdCBJRCBpcyB0aGUgc2FtZSBmb3IgYWxsIG1lc3NhZ2VzOlxuICAgICAgICBjb25zdCBjaGF0SUQgPSByZXNwb25zZS5yZXN1bHRbMF0ubWVzc2FnZS5jaGF0LmlkO1xuICAgICAgICBjb25zb2xlLmxvZyhjaGF0SUQpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgICB9KTtcbiAgfVxufVxuXG5jb25zdCB1c2VyQ29uZmlncyA9IFtcbiAge1xuICAgIG5hbWU6ICdBbmRyZXkgUG9ub21hcmV2JyxcbiAgICBhdXRoVG9rZW46ICc5MDY3MjQyODE6QUFIWGdxdkxBX2lLRVpvekRnM3lNTDBJblFCUGc0bkhmbmcnLFxuICAgIGNoYXRJRDogJzMzODQ1OTQ5NicsXG4gICAgcGFyc2VNb2RlOiAnTWFya2Rvd24nLFxuICAgIGRpc2FibGVOb3RpZjogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdFdmdlbml5IFBheWthY2hldicsXG4gICAgYXV0aFRva2VuOiAnODgyOTA3NTE2OkFBR3JzZUxQdFcwVHZDYUI1YTF5a19NeGlaVlJ2UWpoWFJRJyxcbiAgICBjaGF0SUQ6ICc5MzU5NjY1MTcnLFxuICAgIHBhcnNlTW9kZTogJ01hcmtkb3duJyxcbiAgICBkaXNhYmxlTm90aWY6IHRydWUsXG4gIH0sXG5dO1xuXG5jb25zdCBteVRlbGVncmFtQm90ID0gbmV3IFRlbGVncmFtQm90KHVzZXJDb25maWdzWzBdKTtcbmNvbnN0IHlwZW5UZWxlZ3JhbUJvdCA9IG5ldyBUZWxlZ3JhbUJvdCh1c2VyQ29uZmlnc1sxXSk7XG5cbmV4cG9ydCB7IG15VGVsZWdyYW1Cb3QsIHlwZW5UZWxlZ3JhbUJvdCB9O1xuIiwiY2xhc3MgRm9ybUdyb3VwIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuXG4gICAgdGhpcy5fb3JkZXJCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuX2NvbmZpZy5ibG9ja0lEfWApO1xuXG4gICAgZm9yIChsZXQgaWQgaW4gdGhpcy5fY29uZmlnLmlucHV0SURzKSB7XG4gICAgICB0aGlzW2Ake2lkfWBdID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5fY29uZmlnLmlucHV0SURzW2lkXX1gKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZU5hbWUoaW5wdXRFbCkge1xuICAgIGNvbnN0IHJlZ2V4ID0gL15bYS16QS1a0LAt0Y/QkC3Qr9GR0IFdK1xcc1thLXpBLVrQsC3Rj9CQLdCv0ZHQgV0rJC87XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGlucHV0RWwudmFsdWU7XG5cbiAgICBpbnB1dEVsLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcbiAgICAgICdmb3JtLWdyb3VwX3ZhbGlkYXRpb25fc3VjY2VzcycsXG4gICAgICAnZm9ybS1ncm91cF92YWxpZGF0aW9uX2Vycm9yJ1xuICAgICk7XG5cbiAgICBpZiAocmVnZXgudGVzdChpbnB1dFZhbHVlKSkge1xuICAgICAgaW5wdXRFbC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXBfdmFsaWRhdGlvbl9zdWNjZXNzJyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5wdXRFbC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXBfdmFsaWRhdGlvbl9lcnJvcicpO1xuICAgICAgY29uc3QgdGlwID0gaW5wdXRFbC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWdyb3VwX190aXAnKTtcbiAgICAgIHRpcC5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWdyb3VwX190aXBfaGlkZGVuJyk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGVFbWFpbChpbnB1dEVsKSB7XG4gICAgY29uc3QgcmVnZXggPSAvXlxcdytcXC4/XFx3KkBbYS16QS1aX10rP1xcLlthLXpBLVpdezIsM30kLztcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gaW5wdXRFbC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaW5wdXRFbC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXG4gICAgICAnZm9ybS1ncm91cF92YWxpZGF0aW9uX3N1Y2Nlc3MnLFxuICAgICAgJ2Zvcm0tZ3JvdXBfdmFsaWRhdGlvbl9lcnJvcidcbiAgICApO1xuXG4gICAgaWYgKHJlZ2V4LnRlc3QoaW5wdXRWYWx1ZSkpIHtcbiAgICAgIGlucHV0RWwucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwX3ZhbGlkYXRpb25fc3VjY2VzcycpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0RWwucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwX3ZhbGlkYXRpb25fZXJyb3InKTtcbiAgICAgIGNvbnN0IHRpcCA9IGlucHV0RWwucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1ncm91cF9fdGlwJyk7XG4gICAgICB0aXAuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1ncm91cF9fdGlwX2hpZGRlbicpO1xuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlVGVsKGlucHV0RWwpIHtcbiAgICBjb25zdCByZWdleCA9IC9eWzAtOSgpKy1cXHNdKyQvO1xuICAgIGNvbnN0IGlucHV0VmFsdWUgPSBpbnB1dEVsLnZhbHVlO1xuXG4gICAgaW5wdXRFbC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXG4gICAgICAnZm9ybS1ncm91cF92YWxpZGF0aW9uX3N1Y2Nlc3MnLFxuICAgICAgJ2Zvcm0tZ3JvdXBfdmFsaWRhdGlvbl9lcnJvcidcbiAgICApO1xuXG4gICAgaWYgKHJlZ2V4LnRlc3QoaW5wdXRWYWx1ZSkpIHtcbiAgICAgIGlucHV0RWwucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwX3ZhbGlkYXRpb25fc3VjY2VzcycpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0RWwucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwX3ZhbGlkYXRpb25fZXJyb3InKTtcbiAgICAgIGNvbnN0IHRpcCA9IGlucHV0RWwucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1ncm91cF9fdGlwJyk7XG4gICAgICB0aXAuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1ncm91cF9fdGlwX2hpZGRlbicpO1xuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlQWRkcmVzcyhpbnB1dEVsKSB7XG4gICAgY29uc3QgcmVnZXggPSAvXi4rJC87XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGlucHV0RWwudmFsdWU7XG5cbiAgICBpbnB1dEVsLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcbiAgICAgICdmb3JtLWdyb3VwX3ZhbGlkYXRpb25fc3VjY2VzcycsXG4gICAgICAnZm9ybS1ncm91cF92YWxpZGF0aW9uX2Vycm9yJ1xuICAgICk7XG5cbiAgICBpZiAocmVnZXgudGVzdChpbnB1dFZhbHVlKSkge1xuICAgICAgaW5wdXRFbC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXBfdmFsaWRhdGlvbl9zdWNjZXNzJyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5wdXRFbC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXBfdmFsaWRhdGlvbl9lcnJvcicpO1xuICAgICAgY29uc3QgdGlwID0gaW5wdXRFbC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWdyb3VwX190aXAnKTtcbiAgICAgIHRpcC5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWdyb3VwX190aXBfaGlkZGVuJyk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRJbnB1dHMoLi4uaW5wdXRzKSB7XG4gICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgY29uc3QgdGlwID0gaW5wdXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1ncm91cF9fdGlwJyk7XG4gICAgICB0aXAuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cF9fdGlwX2hpZGRlbicpO1xuICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgIGlucHV0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcbiAgICAgICAgJ2Zvcm0tZ3JvdXBfdmFsaWRhdGlvbl9zdWNjZXNzJyxcbiAgICAgICAgJ2Zvcm0tZ3JvdXBfdmFsaWRhdGlvbl9lcnJvcidcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgRm9ybUdyb3VwIH07XG4iLCJpbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4uL21vZGFsL21vZGFsJztcblxuY29uc3Qgd2ViaW5hclNpZ251cE1vZGFsID0gbmV3IE1vZGFsKHtcbiAgSURzOiB7XG4gICAgZGlhbG9nOiAnd2ViaW5hci1zaWduLXVwLWRpYWxvZycsXG4gIH0sXG4gIC8qIGFsbCBjbGFzcyBuYW1lcyB1c2VkIGluIEhUTUwgcmVsYXRlZCB0byBtb2RhbCB3aW5kb3cgY29tcG9uZW50OiAqL1xuICBjbGFzc2VzOiB7XG4gICAgYmFja2Ryb3A6ICdtb2RhbF93ZWJpbmFyLXNpZ251cCcsXG4gICAgYmFja2Ryb3BTdGF0ZU1vZGlmaWVyOiAnbW9kYWxfdmlzaWJsZScsXG4gICAgZGlhbG9nU3RhdGVNb2RpZmllcjogJ21vZGFsX19kaWFsb2dfdmlzaWJsZScsXG4gICAgY2xvc2VCdG46ICdtb2RhbF9fY2xvc2UtYnRuJyxcbiAgICB2aWRlbzogJ2VtYmVkJyxcbiAgfSxcbn0pO1xuXG5leHBvcnQgeyB3ZWJpbmFyU2lnbnVwTW9kYWwgfTtcbiIsImltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJy4uL2Zvcm0tZ3JvdXAvZm9ybS1ncm91cCc7XG5cbmNsYXNzIFdlYmluYXJTaWdudXBGb3JtR3JvdXAgZXh0ZW5kcyBGb3JtR3JvdXAge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuXG4gICAgdGhpcy5uYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2codGhpcy5uYW1lKTtcbiAgICAgIHN1cGVyLnZhbGlkYXRlTmFtZSh0aGlzLm5hbWUpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5lbWFpbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsICgpID0+IHtcbiAgICAgIHRoaXMudmFsaWRhdGVFbWFpbCh0aGlzLmVtYWlsKTtcbiAgICB9KTtcblxuICAgIHRoaXMudGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKCkgPT4ge1xuICAgICAgdGhpcy52YWxpZGF0ZVRlbCh0aGlzLnRlbCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgaW5wdXRzRGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLnZhbHVlLFxuICAgICAgZW1haWw6IHRoaXMuZW1haWwudmFsdWUsXG4gICAgICB0ZWw6IHRoaXMudGVsLnZhbHVlLFxuICAgIH07XG4gIH1cbn1cblxuY29uc3QgY29uZmlnID0ge1xuICAvLyBibG9ja0lEOiAnb3JkZXInLFxuICBpbnB1dElEczoge1xuICAgIG5hbWU6ICd3ZWJpbmFyLXNpZ24tdXAtbmFtZScsXG4gICAgZW1haWw6ICd3ZWJpbmFyLXNpZ24tdXAtZW1haWwnLFxuICAgIHRlbDogJ3dlYmluYXItc2lnbi11cC10ZWwnLFxuICB9LFxufTtcblxuY29uc3Qgd2ViaW5hclNpZ251cEZvcm1Hcm91cCA9IG5ldyBXZWJpbmFyU2lnbnVwRm9ybUdyb3VwKGNvbmZpZyk7XG4vL2NvbnNvbGUubG9nKHdlYmluYXJTaWdudXBGb3JtR3JvdXApO1xuZXhwb3J0IHsgd2ViaW5hclNpZ251cEZvcm1Hcm91cCB9O1xuIiwiLypcbiAqIFRlbGVncmFtIEFQSSBEb2M6XG4gKiBodHRwczovL2NvcmUudGVsZWdyYW0ub3JnL2JvdHMvYXBpI2F2YWlsYWJsZS1tZXRob2RzXG4gKlxuICogQm90IGZvciBjcmVhdGluZyBuZXcgYm90czpcbiAqIGh0dHBzOi8vdGVsZWdyYW0ubWUvYm90ZmF0aGVyXG4gKiBIb3cgdG8gdXNlOiBodHRwczovL2NvcmUudGVsZWdyYW0ub3JnL2JvdHNcbiAqXG4gKi9cblxuaW1wb3J0IHsgQnRuIH0gZnJvbSAnLi4vYnRuL2J0bic7XG5cbmltcG9ydCB7IHdlYmluYXJTaWdudXBNb2RhbCB9IGZyb20gJy4uL3dlYmluYXItc2lnbnVwLW1vZGFsL3dlYmluYXItc2lnbnVwLW1vZGFsJztcbmltcG9ydCB7IG15VGVsZWdyYW1Cb3QsIHlwZW5UZWxlZ3JhbUJvdCB9IGZyb20gJy4uL3RlbGVncmFtLWJvdC90ZWxlZ3JhbS1ib3QnO1xuaW1wb3J0IHsgd2ViaW5hclNpZ251cEZvcm1Hcm91cCB9IGZyb20gJy4uL3dlYmluYXItc2lnbnVwLWZvcm0tZ3JvdXAvd2ViaW5hci1zaWdudXAtZm9ybS1ncm91cCc7XG5cbmNsYXNzIFdlYmluYXJTaWdudXBCdG4gZXh0ZW5kcyBCdG4ge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbiAgaGFuZGxlRXZlbnQoZSkge1xuICAgIGlmIChlLnR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgIGNvbnN0IGlzVmFsaWQgPVxuICAgICAgICB3ZWJpbmFyU2lnbnVwRm9ybUdyb3VwLnZhbGlkYXRlTmFtZSh3ZWJpbmFyU2lnbnVwRm9ybUdyb3VwLm5hbWUpICYmXG4gICAgICAgIHdlYmluYXJTaWdudXBGb3JtR3JvdXAudmFsaWRhdGVFbWFpbCh3ZWJpbmFyU2lnbnVwRm9ybUdyb3VwLmVtYWlsKSAmJlxuICAgICAgICB3ZWJpbmFyU2lnbnVwRm9ybUdyb3VwLnZhbGlkYXRlVGVsKHdlYmluYXJTaWdudXBGb3JtR3JvdXAudGVsKTtcblxuICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgdGhpcy5zZW5kSW5wdXRUbyh0aGlzLl9jb25maWcuYm90cyk7XG4gICAgICAgIHRoaXMuX2NvbmZpZy5idG4udGV4dENvbnRlbnQgPSAn0KHQv9Cw0YHQuNCx0L4hJztcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB3ZWJpbmFyU2lnbnVwTW9kYWwuY2xvc2VNb2RhbCh0aGlzLl9jb25maWcubW9kYWwuZGlhbG9nKTtcbiAgICAgICAgICB3ZWJpbmFyU2lnbnVwRm9ybUdyb3VwLnJlc2V0SW5wdXRzKFxuICAgICAgICAgICAgd2ViaW5hclNpZ251cEZvcm1Hcm91cC5uYW1lLFxuICAgICAgICAgICAgd2ViaW5hclNpZ251cEZvcm1Hcm91cC5lbWFpbCxcbiAgICAgICAgICAgIHdlYmluYXJTaWdudXBGb3JtR3JvdXAudGVsXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHRoaXMuX2NvbmZpZy5idG4udGV4dENvbnRlbnQgPSAn0JfQsNC/0LjRgdCw0YLRjNGB0Y8g0L3QsCDQstC10LHQuNC90LDRgCc7XG4gICAgICAgIH0sIHRoaXMuX2NvbmZpZy50aW1lb3V0QmVmb3JlQnRuVGV4dENoYW5nZSk7XG4gICAgICB9IGVsc2UgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGlucHV0Jyk7XG4gICAgfVxuICB9XG5cbiAgc2VuZElucHV0VG8oYm90cykge1xuICAgIGJvdHMuZm9yRWFjaChib3QgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coYm90LmF1dGhUb2tlbiwgYm90LmNoYXRJRCwgYm90LnBhcnNlTW9kZSwgYm90LmRpc2FibGVOb3RpZik7XG5cbiAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS50ZWxlZ3JhbS5vcmcvYm90JHtcbiAgICAgICAgYm90LmF1dGhUb2tlblxuICAgICAgfS9zZW5kTWVzc2FnZT9jaGF0X2lkPSR7Ym90LmNoYXRJRH0mdGV4dD1cIiR7Ym90LmNyZWF0ZVdlYmluYXJTaWdudXBNc2coXG4gICAgICAgIHdlYmluYXJTaWdudXBGb3JtR3JvdXAuaW5wdXRzRGF0YVxuICAgICAgKX1cIiZwYXJzZV9tb2RlPSR7Ym90LnBhcnNlTW9kZX0mZGlzYWJsZV9ub3RpZmljYXRpb249JHtib3QuZGlzYWJsZU5vdGlmfWA7XG5cbiAgICAgIGZldGNoKHVybClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgIGBSZXNwb25zZSBmcm9tIGJvdDogJHtyZXNwb25zZS5yZXN1bHQuZnJvbS5maXJzdF9uYW1lfSAoJHtyZXNwb25zZS5yZXN1bHQuZnJvbS51c2VybmFtZX0pIGAsXG4gICAgICAgICAgICByZXNwb25zZVxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuLy9cblxuY29uc3Qgd2ViaW5hclNpZ251cFRyaWdnZXJCdG5FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICcjd2ViaW5hci1zaWdudXAtdHJpZ2dlci1idG4nXG4pO1xuXG5jb25zdCB3ZWJpbmFyU2lnbnVwVHJpZ2dlckJ0biA9IG5ldyBCdG4oe1xuICBidG46IHdlYmluYXJTaWdudXBUcmlnZ2VyQnRuRWwsXG4gIG1vZGFsOiB3ZWJpbmFyU2lnbnVwTW9kYWwsXG59KTtcblxud2ViaW5hclNpZ251cFRyaWdnZXJCdG5FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHdlYmluYXJTaWdudXBUcmlnZ2VyQnRuKTtcblxuLy9cblxuY29uc3Qgd2ViaW5hclNpZ251cEJ0bkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlYmluYXItc2lnbnVwLWJ0bicpO1xuXG5jb25zdCB3ZWJpbmFyU2lnbnVwQnRuID0gbmV3IFdlYmluYXJTaWdudXBCdG4oe1xuICBidG46IHdlYmluYXJTaWdudXBCdG5FbCxcbiAgbW9kYWw6IHdlYmluYXJTaWdudXBNb2RhbCxcbiAgdGltZW91dEJlZm9yZUJ0blRleHRDaGFuZ2U6IDIwMDAsXG4gIGJvdHM6IFtteVRlbGVncmFtQm90LCB5cGVuVGVsZWdyYW1Cb3RdLFxufSk7XG5cbndlYmluYXJTaWdudXBCdG5FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHdlYmluYXJTaWdudXBCdG4pO1xuIiwiaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuLi9tb2RhbC9tb2RhbCc7XG5cbmNvbnN0IGNvbmZpcm1PcmRlck1vZGFsID0gbmV3IE1vZGFsKHtcbiAgSURzOiB7XG4gICAgZGlhbG9nOiAnY29uZmlybS1vcmRlci1kaWFsb2cnLFxuICB9LFxuICAvKiBhbGwgY2xhc3MgbmFtZXMgdXNlZCBpbiBIVE1MIHJlbGF0ZWQgdG8gbW9kYWwgd2luZG93IGNvbXBvbmVudDogKi9cbiAgY2xhc3Nlczoge1xuICAgIGJhY2tkcm9wOiAnbW9kYWxfY29uZmlybS1vcmRlcicsXG4gICAgYmFja2Ryb3BTdGF0ZU1vZGlmaWVyOiAnbW9kYWxfdmlzaWJsZScsXG4gICAgZGlhbG9nU3RhdGVNb2RpZmllcjogJ21vZGFsX19kaWFsb2dfdmlzaWJsZScsXG4gICAgY2xvc2VCdG46ICdtb2RhbF9fY2xvc2UtYnRuJyxcbiAgfSxcbn0pO1xuXG5leHBvcnQgeyBjb25maXJtT3JkZXJNb2RhbCB9O1xuIiwiaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnLi4vZm9ybS1ncm91cC9mb3JtLWdyb3VwJztcblxuY2xhc3MgT3JkZXJGb3JtR3JvdXAgZXh0ZW5kcyBGb3JtR3JvdXAge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuXG4gICAgdGhpcy5uYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKCkgPT4ge1xuICAgICAgdGhpcy52YWxpZGF0ZU5hbWUodGhpcy5uYW1lKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZW1haWwuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoKSA9PiB7XG4gICAgICB0aGlzLnZhbGlkYXRlRW1haWwodGhpcy5lbWFpbCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnRlbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsICgpID0+IHtcbiAgICAgIHRoaXMudmFsaWRhdGVUZWwodGhpcy50ZWwpO1xuICAgIH0pO1xuICAgIHRoaXMuYWRkcmVzcy5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsICgpID0+IHtcbiAgICAgIHRoaXMudmFsaWRhdGVBZGRyZXNzKHRoaXMuYWRkcmVzcyk7XG4gICAgfSk7XG4gIH1cblxuICBkaXNwbGF5Q29uZmlybU1zZygpIHtcbiAgICBjb25zdCBjb25maXJtTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yZGVyX19jb25maXJtLW1zZycpO1xuICAgIGNvbmZpcm1Nc2cuY2xhc3NMaXN0LnJlbW92ZSgnb3JkZXJfX2NvbmZpcm0tbXNnX2hpZGRlbicpO1xuICB9XG5cbiAgZ2V0IGlucHV0c0RhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZS52YWx1ZSxcbiAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLnZhbHVlLFxuICAgICAgdGVsOiB0aGlzLnRlbC52YWx1ZSxcbiAgICAgIGFkZHJlc3M6IHRoaXMuYWRkcmVzcy52YWx1ZSxcbiAgICB9O1xuICB9XG59XG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgYmxvY2tJRDogJ29yZGVyJyxcbiAgaW5wdXRJRHM6IHtcbiAgICBuYW1lOiAnb3JkZXItbmFtZScsXG4gICAgZW1haWw6ICdvcmRlci1lbWFpbCcsXG4gICAgdGVsOiAnb3JkZXItdGVsJyxcbiAgICBhZGRyZXNzOiAnb3JkZXItYWRkcmVzcycsXG4gIH0sXG59O1xuXG5jb25zdCBvcmRlckZvcm1Hcm91cCA9IG5ldyBPcmRlckZvcm1Hcm91cChjb25maWcpO1xuXG5leHBvcnQgeyBvcmRlckZvcm1Hcm91cCB9O1xuIiwiLypcbiAqIFRlbGVncmFtIEFQSSBEb2M6XG4gKiBodHRwczovL2NvcmUudGVsZWdyYW0ub3JnL2JvdHMvYXBpI2F2YWlsYWJsZS1tZXRob2RzXG4gKlxuICogQm90IGZvciBjcmVhdGluZyBuZXcgYm90czpcbiAqIGh0dHBzOi8vdGVsZWdyYW0ubWUvYm90ZmF0aGVyXG4gKiBIb3cgdG8gdXNlOiBodHRwczovL2NvcmUudGVsZWdyYW0ub3JnL2JvdHNcbiAqXG4gKi9cbmltcG9ydCB7IEJ0biB9IGZyb20gJy4uL2J0bi9idG4nO1xuXG5pbXBvcnQgeyBjb25maXJtT3JkZXJNb2RhbCB9IGZyb20gJy4uL2NvbmZpcm0tb3JkZXItbW9kYWwvY29uZmlybS1vcmRlci1tb2RhbCc7XG5pbXBvcnQgeyBteVRlbGVncmFtQm90LCB5cGVuVGVsZWdyYW1Cb3QgfSBmcm9tICcuLi90ZWxlZ3JhbS1ib3QvdGVsZWdyYW0tYm90JztcbmltcG9ydCB7IG9yZGVyRm9ybUdyb3VwIH0gZnJvbSAnLi4vb3JkZXItZm9ybS1ncm91cC9vcmRlci1mb3JtLWdyb3VwJztcbmltcG9ydCB7IGNvbnRpbnVlU3RhdGVtZW50IH0gZnJvbSAnYmFiZWwtdHlwZXMnO1xuXG5jbGFzcyBPcmRlckJ0biBleHRlbmRzIEJ0biB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxuICBoYW5kbGVFdmVudChlKSB7XG4gICAgaWYgKGUudHlwZSA9PT0gJ2NsaWNrJykge1xuICAgICAgY29uc3QgaXNWYWxpZCA9XG4gICAgICAgIG9yZGVyRm9ybUdyb3VwLnZhbGlkYXRlTmFtZShvcmRlckZvcm1Hcm91cC5uYW1lKSAmJlxuICAgICAgICBvcmRlckZvcm1Hcm91cC52YWxpZGF0ZUVtYWlsKG9yZGVyRm9ybUdyb3VwLmVtYWlsKSAmJlxuICAgICAgICBvcmRlckZvcm1Hcm91cC52YWxpZGF0ZVRlbChvcmRlckZvcm1Hcm91cC50ZWwpICYmXG4gICAgICAgIG9yZGVyRm9ybUdyb3VwLnZhbGlkYXRlQWRkcmVzcyhvcmRlckZvcm1Hcm91cC5hZGRyZXNzKTtcblxuICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgdGhpcy5zZW5kSW5wdXRUbyh0aGlzLl9jb25maWcuYm90cyk7XG5cbiAgICAgICAgY29uZmlybU9yZGVyTW9kYWwub3Blbk1vZGFsKHRoaXMuX2NvbmZpZy5tb2RhbC5kaWFsb2cpO1xuICAgICAgICBvcmRlckZvcm1Hcm91cC5yZXNldElucHV0cyhcbiAgICAgICAgICBvcmRlckZvcm1Hcm91cC5uYW1lLFxuICAgICAgICAgIG9yZGVyRm9ybUdyb3VwLmVtYWlsLFxuICAgICAgICAgIG9yZGVyRm9ybUdyb3VwLnRlbCxcbiAgICAgICAgICBvcmRlckZvcm1Hcm91cC5hZGRyZXNzXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGlucHV0Jyk7XG4gICAgfVxuICB9XG5cbiAgc2VuZElucHV0VG8oYm90cykge1xuICAgIGJvdHMuZm9yRWFjaChib3QgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coYm90LmF1dGhUb2tlbiwgYm90LmNoYXRJRCwgYm90LnBhcnNlTW9kZSwgYm90LmRpc2FibGVOb3RpZik7XG5cbiAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS50ZWxlZ3JhbS5vcmcvYm90JHtcbiAgICAgICAgYm90LmF1dGhUb2tlblxuICAgICAgfS9zZW5kTWVzc2FnZT9jaGF0X2lkPSR7Ym90LmNoYXRJRH0mdGV4dD1cIiR7Ym90LmNyZWF0ZU9yZGVyTXNnKFxuICAgICAgICBvcmRlckZvcm1Hcm91cC5pbnB1dHNEYXRhXG4gICAgICApfVwiJnBhcnNlX21vZGU9JHtib3QucGFyc2VNb2RlfSZkaXNhYmxlX25vdGlmaWNhdGlvbj0ke2JvdC5kaXNhYmxlTm90aWZ9YDtcblxuICAgICAgZmV0Y2godXJsKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgYFJlc3BvbnNlIGZyb20gYm90OiAke3Jlc3BvbnNlLnJlc3VsdC5mcm9tLmZpcnN0X25hbWV9ICgke3Jlc3BvbnNlLnJlc3VsdC5mcm9tLnVzZXJuYW1lfSkgYCxcbiAgICAgICAgICAgIHJlc3BvbnNlXG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCBvcmRlckJ0bkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29yZGVyLXRyaWdnZXItYnRuJyk7XG5cbmNvbnN0IG9yZGVyQnRuID0gbmV3IE9yZGVyQnRuKHtcbiAgYnRuOiBvcmRlckJ0bkVsLFxuICBtb2RhbDogY29uZmlybU9yZGVyTW9kYWwsXG4gIHRpbWVvdXRCZWZvcmVCdG5UZXh0Q2hhbmdlOiAyMDAwLFxuICBib3RzOiBbbXlUZWxlZ3JhbUJvdCwgeXBlblRlbGVncmFtQm90XSxcbn0pO1xuXG5vcmRlckJ0bkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3JkZXJCdG4pO1xuIiwiY2xhc3MgTGlnaHRib3gge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG5cbiAgICB0aGlzLl9iYWNrZHJvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLiR7dGhpcy5fY29uZmlnLmNsYXNzZXMuYmFja2Ryb3B9YFxuICAgICk7XG4gICAgdGhpcy5fY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC4ke3RoaXMuX2NvbmZpZy5jbGFzc2VzLmNsb3NlQnRufWBcbiAgICApO1xuXG4gICAgdGhpcy5fc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpZ2h0Ym94X19kaWFsb2cnKTtcbiAgICB0aGlzLl9jb3VudGVyID0gMDtcbiAgICB0aGlzLl9hbW91bnQgPSB0aGlzLl9zbGlkZXMubGVuZ3RoO1xuXG4gICAgY29uc3QgcHJldkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuX2NvbmZpZy5jbGFzc2VzLnByZXZCdG59YCk7XG4gICAgY29uc3QgbmV4dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuX2NvbmZpZy5jbGFzc2VzLm5leHRCdG59YCk7XG4gICAgcHJldkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gdGhpcy5uYXZpZ2F0ZShlLCAtMSkpO1xuICAgIG5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHRoaXMubmF2aWdhdGUoZSwgMSkpO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHRoaXMub25DbGljayhlKSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4gdGhpcy5vbktleWRvd24oZSkpO1xuICB9XG5cbiAgZ2V0RWxlbUluZGV4KGVsZW0pIHtcbiAgICBpZiAoZWxlbS5kYXRhc2V0LmxpZ2h0Ym94KSByZXR1cm4gZWxlbS5kYXRhc2V0LmxpZ2h0Ym94Lm1hdGNoKC9cXGQvKVswXTtcbiAgfVxuXG4gIG5hdmlnYXRlKGUsIGRpcmVjdGlvbikge1xuICAgIHRoaXMuaGlkZURpYWxvZyh0aGlzLl9jdXJyZW50KTtcblxuICAgIHRoaXMuX2NvdW50ZXIgPSB0aGlzLl9jb3VudGVyICsgZGlyZWN0aW9uO1xuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gLTEgJiYgdGhpcy5fY291bnRlciA8IDApIHRoaXMuX2NvdW50ZXIgPSB0aGlzLl9hbW91bnQgLSAxO1xuICAgIGlmIChkaXJlY3Rpb24gPT09IDEgJiYgIXRoaXMuX3NsaWRlc1t0aGlzLl9jb3VudGVyXSkgdGhpcy5fY291bnRlciA9IDA7XG5cbiAgICB0aGlzLl9jdXJyZW50ID0gdGhpcy5fc2xpZGVzW3RoaXMuX2NvdW50ZXJdO1xuICAgIHRoaXMuc2hvd0RpYWxvZyh0aGlzLl9jdXJyZW50KTtcbiAgfVxuXG4gIG9wZW5MaWdodGJveChjbGlja2VkRWwpIHtcbiAgICBjb25zdCBuZXdEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtjbGlja2VkRWwuZGF0YXNldC5saWdodGJveH1gKTtcbiAgICBjb25zdCB2aXNpYmxlRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuJHt0aGlzLl9jb25maWcuY2xhc3Nlcy5kaWFsb2dTdGF0ZU1vZGlmaWVyfWBcbiAgICApO1xuXG4gICAgdGhpcy50b2dnbGVCYWNrZHJvcCgpO1xuICAgIGlmICh2aXNpYmxlRGlhbG9nKSB0aGlzLmhpZGVEaWFsb2codmlzaWJsZURpYWxvZyk7XG5cbiAgICB0aGlzLnNob3dEaWFsb2cobmV3RGlhbG9nKTtcbiAgICB0aGlzLl9vcGVuZWREaWFsb2cgPSBuZXdEaWFsb2c7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICB9XG5cbiAgY2xvc2VMaWdodGJveCgpIHtcbiAgICB0aGlzLnRvZ2dsZUJhY2tkcm9wKCk7XG4gICAgZGVsZXRlIHRoaXMuX29wZW5lZERpYWxvZztcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgb25DbGljayhlKSB7XG4gICAgY29uc3QgY2xpY2tlZEVsID0gZS50YXJnZXQ7XG5cbiAgICBpZiAoY2xpY2tlZEVsID09PSB0aGlzLl9iYWNrZHJvcCB8fCBjbGlja2VkRWwgPT09IHRoaXMuX2Nsb3NlQnRuKSB7XG4gICAgICB0aGlzLmNsb3NlTGlnaHRib3goKTtcbiAgICB9XG5cbiAgICBpZiAoY2xpY2tlZEVsLmRhdGFzZXQubGlnaHRib3gpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuX2NvdW50ZXIgPSBOdW1iZXIodGhpcy5nZXRFbGVtSW5kZXgoY2xpY2tlZEVsKSk7XG4gICAgICB0aGlzLl9jdXJyZW50ID0gdGhpcy5fc2xpZGVzW3RoaXMuX2NvdW50ZXJdO1xuICAgICAgdGhpcy5vcGVuTGlnaHRib3goY2xpY2tlZEVsKTtcbiAgICB9XG4gIH1cblxuICBvbktleWRvd24oZSkge1xuICAgIGlmICh0aGlzLl9vcGVuZWREaWFsb2cgJiYgZS5jb2RlID09PSAnRXNjYXBlJykge1xuICAgICAgdGhpcy50b2dnbGVCYWNrZHJvcCgpO1xuICAgICAgZGVsZXRlIHRoaXMuX29wZW5lZERpYWxvZztcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBzaG93RGlhbG9nKGRpYWxvZykge1xuICAgIGRpYWxvZy5jbGFzc0xpc3QuYWRkKHRoaXMuX2NvbmZpZy5jbGFzc2VzLmRpYWxvZ1N0YXRlTW9kaWZpZXIpO1xuICB9XG5cbiAgaGlkZURpYWxvZyhkaWFsb2cpIHtcbiAgICBkaWFsb2cuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9jb25maWcuY2xhc3Nlcy5kaWFsb2dTdGF0ZU1vZGlmaWVyKTtcbiAgfVxuXG4gIHRvZ2dsZUJhY2tkcm9wKCkge1xuICAgIHRoaXMuX2JhY2tkcm9wLmNsYXNzTGlzdC50b2dnbGUodGhpcy5fY29uZmlnLmNsYXNzZXMuYmFja2Ryb3BTdGF0ZU1vZGlmaWVyKTtcbiAgfVxufVxuXG5jb25zdCBjb25maWcgPSB7XG4gIC8vIGFsbCBjbGFzcyBuYW1lcyB1c2VkIGluIEhUTUwgcmVsYXRlZCB0byBMaWdodGJveCB3aW5kb3cgY29tcG9uZW50OlxuICBjbGFzc2VzOiB7XG4gICAgYmFja2Ryb3A6ICdsaWdodGJveCcsXG4gICAgYmFja2Ryb3BTdGF0ZU1vZGlmaWVyOiAnbGlnaHRib3hfdmlzaWJsZScsXG4gICAgZGlhbG9nU3RhdGVNb2RpZmllcjogJ2xpZ2h0Ym94X19kaWFsb2dfdmlzaWJsZScsXG4gICAgY2xvc2VCdG46ICdsaWdodGJveF9fY2xvc2UtYnRuJyxcbiAgICBwcmV2QnRuOiAnbGlnaHRib3gtYnRuLXByZXYnLFxuICAgIG5leHRCdG46ICdsaWdodGJveC1idG4tbmV4dCcsXG4gICAgdmlkZW86ICdlbWJlZCcsXG4gIH0sXG59O1xuXG5jb25zdCBsaWdodGJveCA9IG5ldyBMaWdodGJveChjb25maWcpO1xuXG5leHBvcnQgeyBsaWdodGJveCB9O1xuIiwiLyogXG4gIEhFTFBFUiBGVU5DVElPTlNcbiovXG5cbi8vIGZ1bmN0aW9uIGZvciByZXF1aXJpbmcgaW1hZ2VzOlxuZnVuY3Rpb24gcmVxdWlyZUZpbGVzKHIpIHtcbiAgci5rZXlzKCkuZm9yRWFjaChyKTtcbn1cblxuLyoqKioqKioqKioqKipcbiAqIENTUyBSRVNFVCAqXG4gKioqKioqKioqKioqKi9cbmltcG9ydCAnLi9ibG9ja3MvX3Jlc2V0LnNjc3MnO1xuXG4vKioqKioqKioqKlxuICogQkxPQ0tTICpcbiAqKioqKioqKioqL1xuXG5pbXBvcnQgJy4vYmxvY2tzL2NvbnRhY3RzL19jb250YWN0cy5zY3NzJztcbnJlcXVpcmVGaWxlcyhyZXF1aXJlLmNvbnRleHQoJy4vYmxvY2tzL2NvbnRhY3RzLycsIHRydWUsIC8oc3ZnfHBuZ3xqcGcpJC8pKTtcblxuaW1wb3J0ICcuL2Jsb2Nrcy9wYWdlL19wYWdlLnNjc3MnO1xuaW1wb3J0ICcuL2Jsb2Nrcy9wYWdlL3BhZ2UuanMnO1xuXG5pbXBvcnQgJy4vYmxvY2tzL3RleHQvX3RleHQuc2Nzcyc7XG5cbmltcG9ydCAnLi9ibG9ja3MvaGVhZGluZy9faGVhZGluZy5zY3NzJztcblxuaW1wb3J0ICcuL2Jsb2Nrcy9lbWJlZC9fZW1iZWQuc2Nzcyc7XG5cbmltcG9ydCAnLi9ibG9ja3MvaWNvbnMvX2ljb25zLnNjc3MnO1xuXG5pbXBvcnQgJy4vYmxvY2tzL2xvZ28vX2xvZ28uc2Nzcyc7XG5cbmltcG9ydCAnLi9ibG9ja3MvaW1nLXN2Zy9faW1nLXN2Zy5zY3NzJztcblxuaW1wb3J0ICcuL2Jsb2Nrcy9oZWFkZXIvX2hlYWRlci5zY3NzJztcblxuaW1wb3J0ICcuL2Jsb2Nrcy9tYWluL21haW4uanMnO1xuaW1wb3J0ICcuL2Jsb2Nrcy9tYWluL19tYWluLnNjc3MnO1xuXG5pbXBvcnQgJy4vYmxvY2tzL2JlbmVmaXRzMS9fYmVuZWZpdHMxLnNjc3MnO1xuXG5pbXBvcnQgJy4vYmxvY2tzL2JlbmVmaXRzMi9fYmVuZWZpdHMyLnNjc3MnO1xuXG5pbXBvcnQgJy4vYmxvY2tzL2JlbmVmaXRzMy9fYmVuZWZpdHMzLnNjc3MnO1xuXG5pbXBvcnQgJy4vYmxvY2tzL2JlbmVmaXRzNC9fYmVuZWZpdHM0LnNjc3MnO1xuXG5pbXBvcnQgJy4vYmxvY2tzL2JlbmVmaXRzNS9fYmVuZWZpdHM1LnNjc3MnO1xuXG5pbXBvcnQgJy4vYmxvY2tzL2NlcnRpZmljYXRlcy9fY2VydGlmaWNhdGVzLnNjc3MnO1xuXG5pbXBvcnQgJy4vYmxvY2tzL3dlYmluYXJzL193ZWJpbmFycy5zY3NzJztcblxuaW1wb3J0ICcuL2Jsb2Nrcy9vcmRlci9fb3JkZXIuc2Nzcyc7XG5cbmltcG9ydCAnLi9ibG9ja3Mvb3JkZXItY2FsY3VsYXRvci9fb3JkZXItY2FsY3VsYXRvci5zY3NzJztcblxuaW1wb3J0ICcuL2Jsb2Nrcy90ZWxlZ3JhbS1ib3QvdGVsZWdyYW0tYm90LmpzJztcblxuaW1wb3J0ICcuL2Jsb2Nrcy9idG4vX2J0bi5zY3NzJztcbmltcG9ydCAnLi9ibG9ja3MvYnRuL2J0bi5qcyc7XG5cbmltcG9ydCAnLi9ibG9ja3MvZm9ybS1ncm91cC9fZm9ybS1ncm91cC5zY3NzJztcbmltcG9ydCAnLi9ibG9ja3MvZm9ybS1ncm91cC9mb3JtLWdyb3VwLmpzJztcblxuaW1wb3J0ICcuL2Jsb2Nrcy9tb2RhbC9fbW9kYWwuc2Nzcyc7XG5pbXBvcnQgJy4vYmxvY2tzL21vZGFsL21vZGFsLmpzJztcblxuaW1wb3J0ICcuL2Jsb2Nrcy93ZWJpbmFyLXNpZ251cC1tb2RhbC93ZWJpbmFyLXNpZ251cC1tb2RhbC5qcyc7XG5cbmltcG9ydCAnLi9ibG9ja3Mvd2ViaW5hci1zaWdudXAtYnRuL193ZWJpbmFyLXNpZ251cC1idG4uc2Nzcyc7XG5pbXBvcnQgJy4vYmxvY2tzL3dlYmluYXItc2lnbnVwLWJ0bi93ZWJpbmFyLXNpZ251cC1idG4uanMnO1xuXG5pbXBvcnQgJy4vYmxvY2tzL3dlYmluYXItc2lnbnVwLWZvcm0tZ3JvdXAvd2ViaW5hci1zaWdudXAtZm9ybS1ncm91cC5qcyc7XG5cbmltcG9ydCAnLi9ibG9ja3Mvb3JkZXItYnRuL19vcmRlci1idG4uc2Nzcyc7XG5pbXBvcnQgJy4vYmxvY2tzL29yZGVyLWJ0bi9vcmRlci1idG4uanMnO1xuXG5pbXBvcnQgJy4vYmxvY2tzL29yZGVyLWZvcm0tZ3JvdXAvX29yZGVyLWZvcm0tZ3JvdXAuc2Nzcyc7XG5pbXBvcnQgJy4vYmxvY2tzL29yZGVyLWZvcm0tZ3JvdXAvb3JkZXItZm9ybS1ncm91cC5qcyc7XG5cbmltcG9ydCAnLi9ibG9ja3MvY29uZmlybS1vcmRlci1tb2RhbC9jb25maXJtLW9yZGVyLW1vZGFsLmpzJztcblxuaW1wb3J0ICcuL2Jsb2Nrcy9yZXZpZXdzL19yZXZpZXdzLnNjc3MnO1xuaW1wb3J0ICcuL2Jsb2Nrcy9yZXZpZXdzL3Jldmlld3MuanMnO1xuXG5pbXBvcnQgJy4vYmxvY2tzL2Zvb3Rlci9fZm9vdGVyLnNjc3MnO1xuXG5pbXBvcnQgJy4vYmxvY2tzL3ZpZGVvLW1vZGFsL192aWRlby1tb2RhbC5zY3NzJztcbmltcG9ydCAnLi9ibG9ja3MvdmlkZW8tbW9kYWwvdmlkZW8tbW9kYWwuanMnO1xuXG5pbXBvcnQgJy4vYmxvY2tzL2xpZ2h0Ym94L19saWdodGJveC5zY3NzJztcbmltcG9ydCAnLi9ibG9ja3MvbGlnaHRib3gvbGlnaHRib3guanMnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==