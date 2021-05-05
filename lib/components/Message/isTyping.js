"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _sanitizeUrl = require("@braintree/sanitize-url");

var _ramda = require("ramda");

require("./style.scss");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var IsTyping = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(IsTyping, _Component);

  var _super = _createSuper(IsTyping);

  function IsTyping(props) {
    var _this;

    (0, _classCallCheck2.default)(this, IsTyping);
    _this = _super.call(this, props);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "_setTimeoutCallBack", function () {
      var callback = function callback() {
        _this._timer = null;

        if (typeof _this.props.callAfterTimeout === 'function') {
          _this.props.callAfterTimeout();
        }
      };

      var timeout = (0, _ramda.propOr)(20000, 'timeout', _this.props);

      if (_this._timer) {
        clearTimeout(_this._timer);
        _this._timer = null;
      }

      _this._timer = setTimeout(callback, timeout);
    });
    _this._setTimeoutCallBack = _this._setTimeoutCallBack.bind((0, _assertThisInitialized2.default)(_this));
    _this._timer = null;
    return _this;
  }

  (0, _createClass2.default)(IsTyping, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return this.props.timeout !== nextProps.timeout || this.props.callAfterTimeout !== nextProps.callAfterTimeout;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this._setTimeoutCallBack();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._timer) {
        clearTimeout(this._timer);
        this._timer = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          image = _this$props.image,
          onImageLoaded = _this$props.onImageLoaded;

      if (image && (0, _sanitizeUrl.sanitizeUrl)(image) === 'about:blank') {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "RecastAppMessage CaiAppMessage bot"
      }, image && /*#__PURE__*/_react.default.createElement("img", {
        className: "RecastAppMessage--logo CaiAppMessage--logo visible",
        src: image
      }), /*#__PURE__*/_react.default.createElement("img", {
        src: "https://cdn.cai.tools.sap/webchat/istyping.gif",
        onLoad: onImageLoaded
      }));
    }
  }]);
  return IsTyping;
}(_react.Component); // ESLint thinks some PropTypes are not used, but they are retrived in method calls, so disable check

/* eslint-disable */


IsTyping.propTypes = {
  image: _propTypes.default.string,
  callAfterTimeout: _propTypes.default.func,
  onImageLoaded: _propTypes.default.func,
  timeout: _propTypes.default.number
};
var _default = IsTyping;
exports.default = _default;