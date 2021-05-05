"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style.scss");

var SendButton = function SendButton(_ref) {
  var sendMessage = _ref.sendMessage,
      preferences = _ref.preferences,
      value = _ref.value;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "RecastSendButtonContainer CaiSendButtonContainer"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "RecastSendButton CaiSendButton",
    onClick: sendMessage,
    disabled: !value
  }, /*#__PURE__*/_react.default.createElement("svg", {
    style: {
      width: 23,
      fill: value ? preferences.accentColor : preferences.botMessageColor
    },
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M85 277.375h259.704L225.002 397.077 256 427l171-171L256 85l-29.922 29.924 118.626 119.701H85v42.75z"
  }))));
};

SendButton.propTypes = {
  preferences: _propTypes.default.object,
  sendMessage: _propTypes.default.func,
  value: _propTypes.default.string
};
var _default = SendButton;
exports.default = _default;