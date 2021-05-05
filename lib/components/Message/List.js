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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01lc3NhZ2UvTGlzdC5qcyJdLCJuYW1lcyI6WyJfZ2V0VmFsaWRUZWxIcmVmIiwiYnV0dG9uIiwicmVhZE9ubHlNb2RlIiwidmFsdWUiLCJpbmRleE9mIiwiX2dldFVybEluZm8iLCJ0YXJnZXQiLCJocmVmIiwiX2dldEJ1dHRvblRpdGxlIiwiYnV0dG9uVGl0bGVNYXhMZW5ndGgiLCJ0aXRsZSIsIkxpc3RFbGVtZW50Iiwic3VidGl0bGUiLCJpbWFnZVVybCIsImJ1dHRvbnMiLCJzZW5kTWVzc2FnZSIsImlzTGFzdE1lc3NhZ2UiLCJ0aXRsZU1heExlbmd0aCIsInN1YlRpdGxlTWF4TGVuZ3RoIiwidHlwZSIsImRpc2FibGVCdXR0b24iLCJidXR0b25UaXRsZSIsImJ1dHRvbkNsYXNzTmFtZSIsImNvbnRlbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwiYXJyYXkiLCJmdW5jIiwiTGlzdCIsImVsZW1lbnRzIiwibWFwIiwiZWxlbWVudCIsImkiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQUVBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsTUFBRCxFQUFTQyxZQUFULEVBQTBCO0FBQ2pELE1BQU1DLEtBQUssR0FBRyxxQkFBTyxJQUFQLEVBQWEsT0FBYixFQUFzQkYsTUFBdEIsQ0FBZDs7QUFDQSxNQUFJLENBQUNDLFlBQUQsSUFBaUJDLEtBQXJCLEVBQTRCO0FBQzFCLFdBQU9BLEtBQUssQ0FBQ0MsT0FBTixDQUFjLE1BQWQsTUFBMEIsQ0FBMUIsR0FBOEJELEtBQTlCLGlCQUE2Q0EsS0FBN0MsQ0FBUDtBQUNEOztBQUNELFNBQU8sR0FBUDtBQUNELENBTkQ7O0FBUUEsSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0osTUFBRCxFQUFTQyxZQUFU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ZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgeyBzYW5pdGl6ZVVybCB9IGZyb20gJ0BicmFpbnRyZWUvc2FuaXRpemUtdXJsJ1xyXG5pbXBvcnQgcHJvcE9yIGZyb20gJ3JhbWRhL2VzL3Byb3BPcidcclxuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXHJcblxyXG5pbXBvcnQgeyB0cnVuY2F0ZSwgc2FmZUFycmF5T2ZJdGVtLCB2YWxpZEJ1dHRvbkNvbnRlbnQgfSBmcm9tICdoZWxwZXJzJ1xyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdjb21wb25lbnRzL0J1dHRvbidcclxuXHJcbmNvbnN0IF9nZXRWYWxpZFRlbEhyZWYgPSAoYnV0dG9uLCByZWFkT25seU1vZGUpID0+IHtcclxuICBjb25zdCB2YWx1ZSA9IHByb3BPcihudWxsLCAndmFsdWUnLCBidXR0b24pXHJcbiAgaWYgKCFyZWFkT25seU1vZGUgJiYgdmFsdWUpIHtcclxuICAgIHJldHVybiB2YWx1ZS5pbmRleE9mKCd0ZWw6JykgPT09IDAgPyB2YWx1ZSA6IGB0ZWw6JHt2YWx1ZX1gXHJcbiAgfVxyXG4gIHJldHVybiAnIydcclxufVxyXG5cclxuY29uc3QgX2dldFVybEluZm8gPSAoYnV0dG9uLCByZWFkT25seU1vZGUpID0+IHtcclxuICBjb25zdCB2YWx1ZSA9IHByb3BPcignIycsICd2YWx1ZScsIGJ1dHRvbilcclxuICBjb25zdCB0YXJnZXQgPSByZWFkT25seU1vZGUgPyAnX3NlbGYnIDogJ19ibGFuaydcclxuICBjb25zdCBocmVmID0gcmVhZE9ubHlNb2RlID8gJyMnIDogdmFsdWVcclxuICByZXR1cm4ge1xyXG4gICAgdGFyZ2V0LFxyXG4gICAgaHJlZixcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IF9nZXRCdXR0b25UaXRsZSA9IChidXR0b24sIGJ1dHRvblRpdGxlTWF4TGVuZ3RoKSA9PiB7XHJcbiAgY29uc3QgdGl0bGUgPSBwcm9wT3IobnVsbCwgJ3RpdGxlJywgYnV0dG9uKVxyXG4gIHJldHVybiB0aXRsZSA/IHRydW5jYXRlKHRpdGxlLCBidXR0b25UaXRsZU1heExlbmd0aCkgOiBudWxsXHJcbn1cclxuXHJcbmNvbnN0IExpc3RFbGVtZW50ID0gKHsgdGl0bGUsIHN1YnRpdGxlLCBpbWFnZVVybCwgYnV0dG9ucywgc2VuZE1lc3NhZ2UsIHJlYWRPbmx5TW9kZSwgaXNMYXN0TWVzc2FnZSB9KSA9PiB7XHJcbiAgY29uc3QgdGl0bGVNYXhMZW5ndGggPSAyNVxyXG4gIGNvbnN0IHN1YlRpdGxlTWF4TGVuZ3RoID0gNTBcclxuICBjb25zdCBidXR0b25UaXRsZU1heExlbmd0aCA9IDIwXHJcblxyXG4gIGNvbnN0IGJ1dHRvbiA9IHByb3BPcihudWxsLCAwLCBidXR0b25zKVxyXG4gIGNvbnN0IHR5cGUgPSBwcm9wT3IoJ25vbmUnLCAndHlwZScsIGJ1dHRvbilcclxuICBjb25zdCBkaXNhYmxlQnV0dG9uID0gcmVhZE9ubHlNb2RlIHx8ICghaXNMYXN0TWVzc2FnZSAmJiB0eXBlID09PSAndHJpZ2dlcl9za2lsbCcpXHJcblxyXG4gIC8vIGh0dHBzOi8vc2FwamlyYS53ZGYuc2FwLmNvcnAvYnJvd3NlL1NBUE1MQ09OVi00NzgxIC0gU3VwcG9ydCB0aGUgcGhvbmVudW1iZXIgb3B0aW9uc1xyXG4gIGNvbnN0IGJ1dHRvblRpdGxlID0gX2dldEJ1dHRvblRpdGxlKGJ1dHRvbiwgYnV0dG9uVGl0bGVNYXhMZW5ndGgpXHJcbiAgY29uc3QgYnV0dG9uQ2xhc3NOYW1lID0gY3goJ1JlY2FzdEFwcExpc3RFbGVtZW50LS1idXR0b24gQ2FpQXBwTGlzdEVsZW1lbnQtLWJ1dHRvbicsIHsgJ0NhaUFwcExpc3RFbGVtZW50LS1SZWFkT25seSc6IGRpc2FibGVCdXR0b24gfSlcclxuICBsZXQgY29udGVudCA9IG51bGxcclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICBjYXNlICdwaG9uZW51bWJlcic6XHJcbiAgICBjb250ZW50ID0gKFxyXG4gICAgICA8YVxyXG4gICAgICAgIGNsYXNzTmFtZT17YnV0dG9uQ2xhc3NOYW1lfVxyXG4gICAgICAgIGhyZWY9e19nZXRWYWxpZFRlbEhyZWYoYnV0dG9uLCBkaXNhYmxlQnV0dG9uKX0+XHJcbiAgICAgICAge2J1dHRvblRpdGxlfVxyXG4gICAgICA8L2E+XHJcbiAgICApXHJcbiAgICBicmVha1xyXG4gIGNhc2UgJ3dlYl91cmwnOlxyXG4gICAgaWYgKHNhbml0aXplVXJsKGJ1dHRvbi52YWx1ZSkgIT09ICdhYm91dDpibGFuaycpIHtcclxuICAgICAgY29uc3QgeyBocmVmLCB0YXJnZXQgfSA9IF9nZXRVcmxJbmZvKGJ1dHRvbiwgZGlzYWJsZUJ1dHRvbilcclxuICAgICAgY29udGVudCA9IChcclxuICAgICAgICA8YVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtidXR0b25DbGFzc05hbWV9XHJcbiAgICAgICAgICBocmVmPXtocmVmfVxyXG4gICAgICAgICAgdGFyZ2V0PXt0YXJnZXR9XHJcbiAgICAgICAgICByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInPlxyXG4gICAgICAgICAge2J1dHRvblRpdGxlfVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29udGVudCA9ICdhYm91dDpibGFuaydcclxuICAgIH1cclxuICAgIGJyZWFrXHJcbiAgZGVmYXVsdDpcclxuICAgIGJyZWFrXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J1JlY2FzdEFwcExpc3RFbGVtZW50IENhaUFwcExpc3RFbGVtZW50Jz5cclxuICAgICAge2ltYWdlVXJsXHJcbiAgICAgICAgJiYgc2FuaXRpemVVcmwoaW1hZ2VVcmwpICE9PSAnYWJvdXQ6YmxhbmsnICYmIChcclxuICAgICAgICA8aW1nIHNyYz17aW1hZ2VVcmx9IGNsYXNzTmFtZT0nUmVjYXN0QXBwTGlzdEVsZW1lbnQtLWltZyBDYWlBcHBMaXN0RWxlbWVudC0taW1nJyAvPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J1JlY2FzdEFwcExpc3RFbGVtZW50LS1jb250YWluZXIgQ2FpQXBwTGlzdEVsZW1lbnQtLWNvbnRhaW5lcic+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPSdSZWNhc3RBcHBMaXN0RWxlbWVudC0tdGl0bGUgQ2FpQXBwTGlzdEVsZW1lbnQtLXRpdGxlJz57dHJ1bmNhdGUodGl0bGUsIHRpdGxlTWF4TGVuZ3RoKX08L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPSdSZWNhc3RBcHBMaXN0RWxlbWVudC0tc3VidGl0bGUgQ2FpQXBwTGlzdEVsZW1lbnQtLXN1YnRpdGxlJz57dHJ1bmNhdGUoc3VidGl0bGUsIHN1YlRpdGxlTWF4TGVuZ3RoKX08L3A+XHJcblxyXG4gICAgICAgIHtidXR0b25cclxuICAgICAgICAgICYmIChjb250ZW50ID8gKGNvbnRlbnQgIT09ICdhYm91dDpibGFuaycgJiYgKFxyXG4gICAgICAgICAgICBjb250ZW50XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtidXR0b25DbGFzc05hbWV9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xyXG4gICAgICAgICAgICAgICAgIWRpc2FibGVCdXR0b25cclxuICAgICAgICAgICAgICAgICYmIHNlbmRNZXNzYWdlKHsgdHlwZTogJ2J1dHRvbicsIGNvbnRlbnQ6IHZhbGlkQnV0dG9uQ29udGVudChidXR0b24pIH0sIF9nZXRCdXR0b25UaXRsZShidXR0b24sIDQ4MCkpXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtidXR0b25UaXRsZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbkxpc3RFbGVtZW50LnByb3BUeXBlcyA9IHtcclxuICBpc0xhc3RNZXNzYWdlOiBQcm9wVHlwZXMuYm9vbCxcclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBzdWJ0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBpbWFnZVVybDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBidXR0b25zOiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgc2VuZE1lc3NhZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gIHJlYWRPbmx5TW9kZTogUHJvcFR5cGVzLmJvb2wsXHJcbn1cclxuXHJcbmNvbnN0IExpc3QgPSAoeyBjb250ZW50LCBzZW5kTWVzc2FnZSwgcmVhZE9ubHlNb2RlLCBpc0xhc3RNZXNzYWdlIH0pID0+IHtcclxuICBjb25zdCB7IGJ1dHRvbnMgfSA9IGNvbnRlbnRcclxuICBjb25zdCBidXR0b24gPSBwcm9wT3IobnVsbCwgMCwgYnV0dG9ucylcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXsnUmVjYXN0QXBwTGlzdCBDYWlBcHBMaXN0J30+XHJcbiAgICAgIHtzYWZlQXJyYXlPZkl0ZW0oY29udGVudCAmJiBjb250ZW50LmVsZW1lbnRzKS5tYXAoKGVsZW1lbnQsIGkpID0+IChcclxuICAgICAgICA8TGlzdEVsZW1lbnRcclxuICAgICAgICAgIGtleT17aX0gey4uLmVsZW1lbnR9XHJcbiAgICAgICAgICBzZW5kTWVzc2FnZT17c2VuZE1lc3NhZ2V9XHJcbiAgICAgICAgICBpc0xhc3RNZXNzYWdlPXtpc0xhc3RNZXNzYWdlfVxyXG4gICAgICAgICAgcmVhZE9ubHlNb2RlPXtyZWFkT25seU1vZGV9IC8+XHJcbiAgICAgICkpfVxyXG5cclxuICAgICAge2J1dHRvbiAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J1JlY2FzdEFwcExpc3QtLWJ1dHRvbiBDYWlBcHBMaXN0LS1idXR0b24nPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBidXR0b249e2J1dHRvbn1cclxuICAgICAgICAgICAgc2VuZE1lc3NhZ2U9e3NlbmRNZXNzYWdlfVxyXG4gICAgICAgICAgICBpc0xhc3RNZXNzYWdlPXtpc0xhc3RNZXNzYWdlfVxyXG4gICAgICAgICAgICByZWFkT25seU1vZGU9e3JlYWRPbmx5TW9kZX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuTGlzdC5wcm9wVHlwZXMgPSB7XHJcbiAgaXNMYXN0TWVzc2FnZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgY29udGVudDogUHJvcFR5cGVzLm9iamVjdCxcclxuICBzZW5kTWVzc2FnZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgcmVhZE9ubHlNb2RlOiBQcm9wVHlwZXMuYm9vbCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdFxyXG4iXX0=