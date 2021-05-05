"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./style.scss");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Expander = function Expander(_ref) {
  var onClick = _ref.onClick,
      preferences = _ref.preferences,
      style = _ref.style,
      show = _ref.show;
  return /*#__PURE__*/_react.default.createElement("div", {
    onClick: onClick,
    className: (0, _classnames.default)('RecastAppExpander CaiAppExpander', {
      open: show,
      close: !show
    }),
    style: _objectSpread({
      color: preferences.complementaryColor,
      backgroundColor: preferences.accentColor
    }, style)
  }, preferences.expanderLogo && /*#__PURE__*/_react.default.createElement("img", {
    className: "RecastAppExpander--logo CaiAppExpander--logo",
    src: preferences.expanderLogo
  }), preferences.expanderTitle, preferences.onboardingMessage && /*#__PURE__*/_react.default.createElement("div", {
    className: "RecastAppExpander--onboarding CaiAppExpander--onboarding"
  }, preferences.onboardingMessage));
};

Expander.propTypes = {
  preferences: _propTypes.default.object,
  onClick: _propTypes.default.func.isRequired,
  style: _propTypes.default.object,
  show: _propTypes.default.bool
};
var _default = Expander;
exports.default = _default;