"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.array.slice.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("../Button"));

var _helpers = require("../../helpers");

require("./style.scss");

var Buttons = function Buttons(_ref) {
  var content = _ref.content,
      sendMessage = _ref.sendMessage,
      style = _ref.style,
      readOnlyMode = _ref.readOnlyMode,
      isLastMessage = _ref.isLastMessage;
  var title = content.title,
      buttons = content.buttons;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "Buttons"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "Buttons--title",
    style: style
  }, (0, _helpers.truncate)(title, 640)), /*#__PURE__*/_react.default.createElement("div", {
    className: "Buttons--container"
  }, (0, _helpers.safeArrayOfItem)(buttons).slice(0, 3).map(function (b, i) {
    return /*#__PURE__*/_react.default.createElement(_Button.default, {
      key: i,
      button: b,
      sendMessage: sendMessage,
      isLastMessage: isLastMessage,
      readOnlyMode: readOnlyMode
    });
  })));
};

Buttons.propTypes = {
  isLastMessage: _propTypes.default.bool,
  style: _propTypes.default.object,
  content: _propTypes.default.object,
  sendMessage: _propTypes.default.func,
  readOnlyMode: _propTypes.default.bool
};
var _default = Buttons;
exports.default = _default;