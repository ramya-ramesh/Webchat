"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var arrowRight = function arrowRight(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 512 512",
    className: className,
    style: {
      marginRight: 3
    }
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M192 128l128 128-128 128z",
    fill: "cornflowerblue"
  }));
};

var _default = arrowRight;
exports.default = _default;