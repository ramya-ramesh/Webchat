"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _store = require("./store");

var _redux = require("redux");

var _reducers = _interopRequireDefault(require("./reducers"));

var _App = _interopRequireDefault(require("./containers/App"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// https://github.com/babel/babel-loader/issues/401
// if (!global._babelPolyfill) {
//   require('@babel/polyfill')
// }
var CaiWebchat = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(CaiWebchat, _Component);

  var _super = _createSuper(CaiWebchat);

  function CaiWebchat(props) {
    var _this;

    (0, _classCallCheck2.default)(this, CaiWebchat);
    _this = _super.call(this, props);
    _this.store = (0, _redux.createStore)(_reducers.default);
    return _this;
  }

  (0, _createClass2.default)(CaiWebchat, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
        store: this.store
      }, /*#__PURE__*/_react.default.createElement(_App.default, this.props));
    }
  }]);
  return CaiWebchat;
}(_react.Component);

exports.default = CaiWebchat;