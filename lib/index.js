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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJDYWlXZWJjaGF0IiwicHJvcHMiLCJzdG9yZSIsInJlZHVjZXJzIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7SUFFcUJBLFU7Ozs7O0FBRW5CLHNCQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBQUE7QUFDbEIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWEsd0JBQVlDLGlCQUFaLENBQWI7QUFGa0I7QUFHbkI7Ozs7NkJBRVM7QUFDUiwwQkFDRSw2QkFBQyxvQkFBRDtBQUFVLFFBQUEsS0FBSyxFQUFFLEtBQUtEO0FBQXRCLHNCQUNFLDZCQUFDLFlBQUQsRUFBYSxLQUFLRCxLQUFsQixDQURGLENBREY7QUFLRDs7O0VBYnFDRyxnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICdzdG9yZSdcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMnXHJcblxyXG5pbXBvcnQgV2ViY2hhdCBmcm9tICcuL2NvbnRhaW5lcnMvQXBwJ1xyXG5cclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsLWxvYWRlci9pc3N1ZXMvNDAxXHJcbi8vIGlmICghZ2xvYmFsLl9iYWJlbFBvbHlmaWxsKSB7XHJcbi8vICAgcmVxdWlyZSgnQGJhYmVsL3BvbHlmaWxsJylcclxuLy8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FpV2ViY2hhdCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLnN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcnMpXHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXt0aGlzLnN0b3JlfT5cclxuICAgICAgICA8V2ViY2hhdCB7Li4udGhpcy5wcm9wc30gLz5cclxuICAgICAgPC9Qcm92aWRlcj5cclxuICAgIClcclxuICB9XHJcbn1cclxuIl19