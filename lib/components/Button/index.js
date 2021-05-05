"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.index-of.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _sanitizeUrl = require("@braintree/sanitize-url");

var _classnames = _interopRequireDefault(require("classnames"));

var _helpers = require("../../helpers");

require("./style.scss");

var _getValidTelHref = function _getValidTelHref(button, readOnlyMode) {
  var value = button.value;

  if (!readOnlyMode && value) {
    return value.indexOf('tel:') === 0 ? value : "tel:".concat(value);
  }

  return '#';
};

var _getUrlInfo = function _getUrlInfo(button, readOnlyMode) {
  var value = button.value;
  var target = readOnlyMode ? '_self' : '_blank';
  var href = readOnlyMode || !value ? '#' : value;
  return {
    target: target,
    href: href
  };
};

var Button = function Button(_ref) {
  var button = _ref.button,
      sendMessage = _ref.sendMessage,
      readOnlyMode = _ref.readOnlyMode,
      isLastMessage = _ref.isLastMessage;

  if (!button) {
    return null;
  }

  var value = button.value,
      title = button.title,
      type = button.type; // Increase Button length to 80 characters per SAPMLCONV-3486

  var formattedTitle = (0, _helpers.truncate)(title, 80);
  var tooltip = title && title.length > 80 ? title : null;
  var disableButton = readOnlyMode || !isLastMessage && type === 'trigger_skill';

  if (button.type === 'web_url' && (0, _sanitizeUrl.sanitizeUrl)(value) === 'about:blank') {
    return null;
  }

  var content = null; // https://sapjira.wdf.sap.corp/browse/SAPMLCONV-4781 - Support the phonenumber options

  var linkClassName = (0, _classnames.default)('RecastAppButton-Link CaiAppButton-Link', {
    'CaiAppButton--ReadOnly': disableButton
  });

  var _getUrlInfo2 = _getUrlInfo(button, disableButton),
      href = _getUrlInfo2.href,
      target = _getUrlInfo2.target;

  var bData = (0, _helpers.validButtonContent)(button);

  switch (type) {
    case 'phonenumber':
      content = /*#__PURE__*/_react.default.createElement("a", {
        className: linkClassName,
        href: _getValidTelHref(button, disableButton)
      }, formattedTitle);
      break;

    case 'web_url':
      content = /*#__PURE__*/_react.default.createElement("a", {
        className: linkClassName,
        href: href,
        target: target,
        rel: "noopener noreferrer"
      }, formattedTitle);
      break;

    default:
      content = /*#__PURE__*/_react.default.createElement("div", {
        title: tooltip,
        className: (0, _classnames.default)('RecastAppButton CaiAppButton', {
          'CaiAppButton--ReadOnly': disableButton
        }),
        onClick: function onClick() {
          // eslint-disable-next-line no-unused-expressions
          !disableButton && sendMessage({
            type: 'button',
            content: bData
          }, title);
        }
      }, formattedTitle);
      break;
  }

  return content;
};

Button.propTypes = {
  isLastMessage: _propTypes.default.bool,
  button: _propTypes.default.object,
  sendMessage: _propTypes.default.func,
  readOnlyMode: _propTypes.default.bool
};
var _default = Button;
exports.default = _default;