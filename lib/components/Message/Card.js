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

var _sanitizeUrl = require("@braintree/sanitize-url");

var _helpers = require("../../helpers");

var _Button = _interopRequireDefault(require("../Button"));

var Card = function Card(_ref) {
  var content = _ref.content,
      sendMessage = _ref.sendMessage,
      onImageLoaded = _ref.onImageLoaded,
      readOnlyMode = _ref.readOnlyMode,
      isLastMessage = _ref.isLastMessage;
  var title = content.title,
      subtitle = content.subtitle,
      imageUrl = content.imageUrl,
      buttons = content.buttons;

  if (imageUrl && (0, _sanitizeUrl.sanitizeUrl)(imageUrl) === 'about:blank') {
    return null;
  } // https://sapjira.wdf.sap.corp/browse/SAPMLCONV-6296
  // Need to check if buttons is null before rendering the button html.


  return /*#__PURE__*/_react.default.createElement("div", {
    className: 'RecastAppCard CaiAppCard'
  }, imageUrl && /*#__PURE__*/_react.default.createElement("img", {
    src: imageUrl,
    onLoad: onImageLoaded,
    className: "RecastAppCard--img CaiAppCard--img"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "RecastAppCard--text CaiAppCard--text"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "RecastAppCard--text-title CaiAppCard--text-title"
  }, (0, _helpers.truncate)(title, 80)), subtitle && /*#__PURE__*/_react.default.createElement("p", {
    className: "Card--text-subtitle"
  }, (0, _helpers.truncate)(subtitle, 80))), buttons && buttons.length ? /*#__PURE__*/_react.default.createElement("div", {
    className: "RecastAppCard--button-container CaiAppCard--button-container"
  }, (0, _helpers.safeArrayOfItem)(buttons).slice(0, 3).map(function (b, i) {
    return /*#__PURE__*/_react.default.createElement(_Button.default, {
      key: i,
      button: b,
      sendMessage: sendMessage,
      isLastMessage: isLastMessage,
      readOnlyMode: readOnlyMode
    });
  })) : null);
};

Card.propTypes = {
  isLastMessage: _propTypes.default.bool,
  content: _propTypes.default.object,
  sendMessage: _propTypes.default.func,
  onImageLoaded: _propTypes.default.func,
  readOnlyMode: _propTypes.default.bool
};
var _default = Card;
exports.default = _default;