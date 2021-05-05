"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var arrowLeft = function arrowLeft(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 512 512",
    className: className
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M320 128L192 256l128 128z",
    fill: "grey"
  }));
};

var _default = arrowLeft;
exports.default = _default;