"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./style.scss");

var menu = function menu(_ref) {
  var onClick = _ref.onClick,
      className = _ref.className;
  return /*#__PURE__*/_react.default.createElement("svg", {
    viewBox: "0 0 512 512",
    id: "menu-svg",
    width: 18,
    height: 18,
    onClick: onClick,
    className: (0, _classnames.default)('MenuSVG', {
      className: className
    })
  }, /*#__PURE__*/_react.default.createElement("path", {
    id: "menu-svg-path",
    fill: "cornflowerblue",
    d: "M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z"
  }));
};

var _default = menu;
exports.default = _default;