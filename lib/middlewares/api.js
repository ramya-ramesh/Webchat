"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.string.starts-with.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _config = _interopRequireDefault(require("../config"));

var _queryString = _interopRequireDefault(require("query-string"));

var _axios = _interopRequireDefault(require("axios"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _default = function _default(store) {
  return function (next) {
    return function (action) {
      if (!action.type.startsWith('API:')) {
        return next(action);
      }

      var dispatch = store.dispatch;
      var prefix = action.type.split(':')[1];
      var _action$payload = action.payload,
          _action$payload$metho = _action$payload.method,
          method = _action$payload$metho === void 0 ? 'get' : _action$payload$metho,
          url = _action$payload.url,
          data = _action$payload.data,
          headers = _action$payload.headers,
          query = _action$payload.query;
      var options = {
        method: method,
        data: data,
        headers: _objectSpread({
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }, headers),
        url: "".concat(_config.default.apiUrl).concat(url).concat(query ? '?' : '').concat(_queryString.default.stringify(query || {}))
      };
      return (0, _axios.default)(options).then(function (res) {
        dispatch({
          type: "".concat(prefix, "_SUCCESS"),
          payload: _objectSpread({}, res.data.results)
        });
        return res.data.results;
      }).catch(function (err) {
        var response = err.response;
        dispatch({
          type: "".concat(prefix, "_ERROR"),
          payload: _objectSpread(_objectSpread({}, data), {}, {
            error: {
              response: response
            }
          })
        });
        throw new Error(err);
      });
    };
  };
};

exports.default = _default;