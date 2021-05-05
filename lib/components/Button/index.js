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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9pbmRleC5qcyJdLCJuYW1lcyI6WyJfZ2V0VmFsaWRUZWxIcmVmIiwiYnV0dG9uIiwicmVhZE9ubHlNb2RlIiwidmFsdWUiLCJpbmRleE9mIiwiX2dldFVybEluZm8iLCJ0YXJnZXQiLCJocmVmIiwiQnV0dG9uIiwic2VuZE1lc3NhZ2UiLCJpc0xhc3RNZXNzYWdlIiwidGl0bGUiLCJ0eXBlIiwiZm9ybWF0dGVkVGl0bGUiLCJ0b29sdGlwIiwibGVuZ3RoIiwiZGlzYWJsZUJ1dHRvbiIsImNvbnRlbnQiLCJsaW5rQ2xhc3NOYW1lIiwiYkRhdGEiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwib2JqZWN0IiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLE1BQUQsRUFBU0MsWUFBVCxFQUEwQjtBQUFBLE1BQ3pDQyxLQUR5QyxHQUMvQkYsTUFEK0IsQ0FDekNFLEtBRHlDOztBQUVqRCxNQUFJLENBQUNELFlBQUQsSUFBaUJDLEtBQXJCLEVBQTRCO0FBQzFCLFdBQU9BLEtBQUssQ0FBQ0MsT0FBTixDQUFjLE1BQWQsTUFBMEIsQ0FBMUIsR0FBOEJELEtBQTlCLGlCQUE2Q0EsS0FBN0MsQ0FBUDtBQUNEOztBQUNELFNBQU8sR0FBUDtBQUNELENBTkQ7O0FBUUEsSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0osTUFBRCxFQUFTQyxZQUFULEVBQTBCO0FBQUEsTUFDcENDLEtBRG9DLEdBQzFCRixNQUQwQixDQUNwQ0UsS0FEb0M7QUFFNUMsTUFBTUcsTUFBTSxHQUFHSixZQUFZLEdBQUcsT0FBSCxHQUFhLFFBQXhDO0FBQ0EsTUFBTUssSUFBSSxHQUFHTCxZQUFZLElBQUksQ0FBQ0MsS0FBakIsR0FBeUIsR0FBekIsR0FBK0JBLEtBQTVD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LElBSE47QUFJakJ0QixFQUFBQSxZQUFZLEVBQUVtQixtQkFBVUM7QUFKUCxDQUFuQjtlQU9lZCxNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCB7IHNhbml0aXplVXJsIH0gZnJvbSAnQGJyYWludHJlZS9zYW5pdGl6ZS11cmwnXHJcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xyXG5cclxuaW1wb3J0IHsgdHJ1bmNhdGUsIHZhbGlkQnV0dG9uQ29udGVudCB9IGZyb20gJ2hlbHBlcnMnXHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuc2NzcydcclxuXHJcbmNvbnN0IF9nZXRWYWxpZFRlbEhyZWYgPSAoYnV0dG9uLCByZWFkT25seU1vZGUpID0+IHtcclxuICBjb25zdCB7IHZhbHVlIH0gPSBidXR0b25cclxuICBpZiAoIXJlYWRPbmx5TW9kZSAmJiB2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHZhbHVlLmluZGV4T2YoJ3RlbDonKSA9PT0gMCA/IHZhbHVlIDogYHRlbDoke3ZhbHVlfWBcclxuICB9XHJcbiAgcmV0dXJuICcjJ1xyXG59XHJcblxyXG5jb25zdCBfZ2V0VXJsSW5mbyA9IChidXR0b24sIHJlYWRPbmx5TW9kZSkgPT4ge1xyXG4gIGNvbnN0IHsgdmFsdWUgfSA9IGJ1dHRvblxyXG4gIGNvbnN0IHRhcmdldCA9IHJlYWRPbmx5TW9kZSA/ICdfc2VsZicgOiAnX2JsYW5rJ1xyXG4gIGNvbnN0IGhyZWYgPSByZWFkT25seU1vZGUgfHwgIXZhbHVlID8gJyMnIDogdmFsdWVcclxuICByZXR1cm4ge1xyXG4gICAgdGFyZ2V0LFxyXG4gICAgaHJlZixcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IEJ1dHRvbiA9ICh7IGJ1dHRvbiwgc2VuZE1lc3NhZ2UsIHJlYWRPbmx5TW9kZSwgaXNMYXN0TWVzc2FnZSB9KSA9PiB7XHJcbiAgaWYgKCFidXR0b24pIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG4gIGNvbnN0IHsgdmFsdWUsIHRpdGxlLCB0eXBlIH0gPSBidXR0b25cclxuICAvLyBJbmNyZWFzZSBCdXR0b24gbGVuZ3RoIHRvIDgwIGNoYXJhY3RlcnMgcGVyIFNBUE1MQ09OVi0zNDg2XHJcbiAgY29uc3QgZm9ybWF0dGVkVGl0bGUgPSB0cnVuY2F0ZSh0aXRsZSwgODApXHJcbiAgY29uc3QgdG9vbHRpcCA9IHRpdGxlICYmIHRpdGxlLmxlbmd0aCA+IDgwID8gdGl0bGUgOiBudWxsXHJcbiAgY29uc3QgZGlzYWJsZUJ1dHRvbiA9IHJlYWRPbmx5TW9kZSB8fCAoIWlzTGFzdE1lc3NhZ2UgJiYgdHlwZSA9PT0gJ3RyaWdnZXJfc2tpbGwnKVxyXG4gIGlmIChidXR0b24udHlwZSA9PT0gJ3dlYl91cmwnICYmIHNhbml0aXplVXJsKHZhbHVlKSA9PT0gJ2Fib3V0OmJsYW5rJykge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcblxyXG4gIGxldCBjb250ZW50ID0gbnVsbFxyXG5cclxuICAvLyBodHRwczovL3NhcGppcmEud2RmLnNhcC5jb3JwL2Jyb3dzZS9TQVBNTENPTlYtNDc4MSAtIFN1cHBvcnQgdGhlIHBob25lbnVtYmVyIG9wdGlvbnNcclxuICBjb25zdCBsaW5rQ2xhc3NOYW1lID0gY3goJ1JlY2FzdEFwcEJ1dHRvbi1MaW5rIENhaUFwcEJ1dHRvbi1MaW5rJywgeyAnQ2FpQXBwQnV0dG9uLS1SZWFkT25seSc6IGRpc2FibGVCdXR0b24gfSlcclxuICBjb25zdCB7IGhyZWYsIHRhcmdldCB9ID0gX2dldFVybEluZm8oYnV0dG9uLCBkaXNhYmxlQnV0dG9uKVxyXG4gIGNvbnN0IGJEYXRhID0gdmFsaWRCdXR0b25Db250ZW50KGJ1dHRvbilcclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICBjYXNlICdwaG9uZW51bWJlcic6XHJcbiAgICBjb250ZW50ID0gKFxyXG4gICAgICA8YVxyXG4gICAgICAgIGNsYXNzTmFtZT17bGlua0NsYXNzTmFtZX1cclxuICAgICAgICBocmVmPXtfZ2V0VmFsaWRUZWxIcmVmKGJ1dHRvbiwgZGlzYWJsZUJ1dHRvbil9PlxyXG4gICAgICAgIHtmb3JtYXR0ZWRUaXRsZX1cclxuICAgICAgPC9hPlxyXG4gICAgKVxyXG4gICAgYnJlYWtcclxuICBjYXNlICd3ZWJfdXJsJzpcclxuICAgIGNvbnRlbnQgPSAoXHJcbiAgICAgIDxhXHJcbiAgICAgICAgY2xhc3NOYW1lPXtsaW5rQ2xhc3NOYW1lfVxyXG4gICAgICAgIGhyZWY9e2hyZWZ9XHJcbiAgICAgICAgdGFyZ2V0PXt0YXJnZXR9XHJcbiAgICAgICAgcmVsPSdub29wZW5lciBub3JlZmVycmVyJz5cclxuICAgICAgICB7Zm9ybWF0dGVkVGl0bGV9XHJcbiAgICAgIDwvYT5cclxuICAgIClcclxuICAgIGJyZWFrXHJcbiAgZGVmYXVsdDpcclxuICAgIGNvbnRlbnQgPSAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICB0aXRsZT17dG9vbHRpcH1cclxuICAgICAgICBjbGFzc05hbWU9e2N4KCdSZWNhc3RBcHBCdXR0b24gQ2FpQXBwQnV0dG9uJywgeyAnQ2FpQXBwQnV0dG9uLS1SZWFkT25seSc6IGRpc2FibGVCdXR0b24gfSl9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xyXG4gICAgICAgICAgIWRpc2FibGVCdXR0b24gJiYgc2VuZE1lc3NhZ2UoeyB0eXBlOiAnYnV0dG9uJywgY29udGVudDogYkRhdGEgfSwgdGl0bGUpXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtmb3JtYXR0ZWRUaXRsZX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgICBicmVha1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbnRlbnRcclxufVxyXG5cclxuQnV0dG9uLnByb3BUeXBlcyA9IHtcclxuICBpc0xhc3RNZXNzYWdlOiBQcm9wVHlwZXMuYm9vbCxcclxuICBidXR0b246IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgc2VuZE1lc3NhZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gIHJlYWRPbmx5TW9kZTogUHJvcFR5cGVzLmJvb2wsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxyXG4iXX0=