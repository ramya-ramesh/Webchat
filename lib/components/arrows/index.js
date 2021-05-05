"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NextArrow = exports.PrevArrow = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./style.scss");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var PrevArrow = function PrevArrow(_ref) {
  var className = _ref.className,
      style = _ref.style,
      onClick = _ref.onClick;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('RecastAppArrow CaiAppArrow prev', className),
    style: _objectSpread({}, style),
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "https://cdn.cai.tools.sap/webchat/arrow-back.svg",
    className: "arrowSvg"
  }));
};

exports.PrevArrow = PrevArrow;

var NextArrow = function NextArrow(_ref2) {
  var className = _ref2.className,
      style = _ref2.style,
      onClick = _ref2.onClick;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('RecastAppArrow CaiAppArrow next', className),
    style: _objectSpread({}, style),
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "https://cdn.cai.tools.sap/webchat/arrow-forward.svg",
    className: "arrowSvg"
  }));
};

exports.NextArrow = NextArrow;
var arrowPropTypes = {
  className: _propTypes.default.string,
  onClick: _propTypes.default.func,
  style: _propTypes.default.object
};
PrevArrow.propTypes = arrowPropTypes;
NextArrow.propTypes = arrowPropTypes;