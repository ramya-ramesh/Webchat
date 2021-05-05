"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style.scss");

var Header = function Header(_ref) {
  var closeWebchat = _ref.closeWebchat,
      preferences = _ref.preferences,
      logoStyle = _ref.logoStyle,
      readOnlyMode = _ref.readOnlyMode;

  if (readOnlyMode) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "RecastAppHeader CaiAppHeader",
    style: {
      color: preferences.complementaryColor,
      backgroundColor: preferences.accentColor
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "RecastAppHeader--logo CaiAppHeader--logo",
    src: preferences.headerLogo,
    style: logoStyle
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "RecastAppHeader--title CaiAppHeader--title"
  }, preferences.headerTitle), /*#__PURE__*/_react.default.createElement("div", {
    className: "RecastAppHeader--btn CaiAppHeader--btn",
    onClick: closeWebchat
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "https://cdn.cai.tools.sap/webchat/close.svg"
  })));
};

Header.propTypes = {
  closeWebchat: _propTypes.default.func,
  preferences: _propTypes.default.object,
  logoStyle: _propTypes.default.object,
  readOnlyMode: _propTypes.default.bool
};
var _default = Header;
exports.default = _default;