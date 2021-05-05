"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.index-of.js");

require("core-js/modules/es.array.map.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _sanitizeUrl = require("@braintree/sanitize-url");

var _propOr = _interopRequireDefault(require("ramda/es/propOr"));

var _classnames = _interopRequireDefault(require("classnames"));

var _helpers = require("../../helpers");

var _Button = _interopRequireDefault(require("../Button"));

var _getValidTelHref = function _getValidTelHref(button, readOnlyMode) {
  var value = (0, _propOr.default)(null, 'value', button);

  if (!readOnlyMode && value) {
    return value.indexOf('tel:') === 0 ? value : "tel:".concat(value);
  }

  return '#';
};

var _getUrlInfo = function _getUrlInfo(button, readOnlyMode) {
  var value = (0, _propOr.default)('#', 'value', button);
  var target = readOnlyMode ? '_self' : '_blank';
  var href = readOnlyMode ? '#' : value;
  return {
    target: target,
    href: href
  };
};

var _getButtonTitle = function _getButtonTitle(button, buttonTitleMaxLength) {
  var title = (0, _propOr.default)(null, 'title', button);
  return title ? (0, _helpers.truncate)(title, buttonTitleMaxLength) : null;
};

var ListElement = function ListElement(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      imageUrl = _ref.imageUrl,
      buttons = _ref.buttons,
      sendMessage = _ref.sendMessage,
      readOnlyMode = _ref.readOnlyMode,
      isLastMessage = _ref.isLastMessage;
  var titleMaxLength = 25;
  var subTitleMaxLength = 50;
  var buttonTitleMaxLength = 20;
  var button = (0, _propOr.default)(null, 0, buttons);
  var type = (0, _propOr.default)('none', 'type', button);
  var disableButton = readOnlyMode || !isLastMessage && type === 'trigger_skill'; // https://sapjira.wdf.sap.corp/browse/SAPMLCONV-4781 - Support the phonenumber options

  var buttonTitle = _getButtonTitle(button, buttonTitleMaxLength);

  var buttonClassName = (0, _classnames.default)('RecastAppListElement--button CaiAppListElement--button', {
    'CaiAppListElement--ReadOnly': disableButton
  });
  var content = null;

  switch (type) {
    case 'phonenumber':
      content = /*#__PURE__*/_react.default.createElement("a", {
        className: buttonClassName,
        href: _getValidTelHref(button, disableButton)
      }, buttonTitle);
      break;

    case 'web_url':
      if ((0, _sanitizeUrl.sanitizeUrl)(button.value) !== 'about:blank') {
        var _getUrlInfo2 = _getUrlInfo(button, disableButton),
            href = _getUrlInfo2.href,
            target = _getUrlInfo2.target;

        content = /*#__PURE__*/_react.default.createElement("a", {
          className: buttonClassName,
          href: href,
          target: target,
          rel: "noopener noreferrer"
        }, buttonTitle);
      } else {
        content = 'about:blank';
      }

      break;

    default:
      break;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "RecastAppListElement CaiAppListElement"
  }, imageUrl && (0, _sanitizeUrl.sanitizeUrl)(imageUrl) !== 'about:blank' && /*#__PURE__*/_react.default.createElement("img", {
    src: imageUrl,
    className: "RecastAppListElement--img CaiAppListElement--img"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "RecastAppListElement--container CaiAppListElement--container"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "RecastAppListElement--title CaiAppListElement--title"
  }, (0, _helpers.truncate)(title, titleMaxLength)), /*#__PURE__*/_react.default.createElement("p", {
    className: "RecastAppListElement--subtitle CaiAppListElement--subtitle"
  }, (0, _helpers.truncate)(subtitle, subTitleMaxLength)), button && (content ? content !== 'about:blank' && content : /*#__PURE__*/_react.default.createElement("div", {
    className: buttonClassName,
    onClick: function onClick() {
      // eslint-disable-next-line no-unused-expressions
      !disableButton && sendMessage({
        type: 'button',
        content: (0, _helpers.validButtonContent)(button)
      }, _getButtonTitle(button, 480));
    }
  }, buttonTitle))));
};

ListElement.propTypes = {
  isLastMessage: _propTypes.default.bool,
  title: _propTypes.default.string,
  subtitle: _propTypes.default.string,
  imageUrl: _propTypes.default.string,
  buttons: _propTypes.default.array,
  sendMessage: _propTypes.default.func,
  readOnlyMode: _propTypes.default.bool
};

var List = function List(_ref2) {
  var content = _ref2.content,
      sendMessage = _ref2.sendMessage,
      readOnlyMode = _ref2.readOnlyMode,
      isLastMessage = _ref2.isLastMessage;
  var buttons = content.buttons;
  var button = (0, _propOr.default)(null, 0, buttons);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: 'RecastAppList CaiAppList'
  }, (0, _helpers.safeArrayOfItem)(content && content.elements).map(function (element, i) {
    return /*#__PURE__*/_react.default.createElement(ListElement, (0, _extends2.default)({
      key: i
    }, element, {
      sendMessage: sendMessage,
      isLastMessage: isLastMessage,
      readOnlyMode: readOnlyMode
    }));
  }), button && /*#__PURE__*/_react.default.createElement("div", {
    className: "RecastAppList--button CaiAppList--button"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    button: button,
    sendMessage: sendMessage,
    isLastMessage: isLastMessage,
    readOnlyMode: readOnlyMode
  })));
};

List.propTypes = {
  isLastMessage: _propTypes.default.bool,
  content: _propTypes.default.object,
  sendMessage: _propTypes.default.func,
  readOnlyMode: _propTypes.default.bool
};
var _default = List;
exports.default = _default;