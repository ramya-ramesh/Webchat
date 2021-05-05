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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01lc3NhZ2UvQnV0dG9ucy5qcyJdLCJuYW1lcyI6WyJCdXR0b25zIiwiY29udGVudCIsInNlbmRNZXNzYWdlIiwic3R5bGUiLCJyZWFkT25seU1vZGUiLCJpc0xhc3RNZXNzYWdlIiwidGl0bGUiLCJidXR0b25zIiwic2xpY2UiLCJtYXAiLCJiIiwiaSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJvYmplY3QiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBa0U7QUFBQSxNQUEvREMsT0FBK0QsUUFBL0RBLE9BQStEO0FBQUEsTUFBdERDLFdBQXNELFFBQXREQSxXQUFzRDtBQUFBLE1BQXpDQyxLQUF5QyxRQUF6Q0EsS0FBeUM7QUFBQSxNQUFsQ0MsWUFBa0MsUUFBbENBLFlBQWtDO0FBQUEsTUFBcEJDLGFBQW9CLFFBQXBCQSxhQUFvQjtBQUFBLE1BQ3hFQyxLQUR3RSxHQUNyREwsT0FEcUQsQ0FDeEVLLEtBRHdFO0FBQUEsTUFDakVDLE9BRGlFLEdBQ3JETixPQURxRCxDQUNqRU0sT0FEaUU7QUFFaEYsc0JBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFO0FBQUcsSUFBQSxTQUFTLEVBQUMsZ0JBQWI7QUFBOEIsSUFBQSxLQUFLLEVBQUVKO0FBQXJDLEtBQ0csdUJBQVNHLEtBQVQsRUFBZ0IsR0FBaEIsQ0FESCxDQURGLGVBS0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0csOEJBQWdCQyxPQUFoQixFQUF5QkMsS0FBekIsQ0FBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUNDLEdBQXJDLENBQXlDLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLHdCQUN4Qyw2QkFBQyxlQUFEO0FBQ0UsTUFBQSxHQUFHLEVBQUVBLENBRFA7QUFFRSxNQUFBLE1BQU0sRUFBRUQsQ0FGVjtBQUdFLE1BQUEsV0FBVyxFQUFFUixXQUhmO0FBSUUsTUFBQSxhQUFhLEVBQUVHLGFBSmpCO0FBS0UsTUFBQSxZQUFZLEVBQUVEO0FBTGhCLE1BRHdDO0FBQUEsR0FBekMsQ0FESCxDQUxGLENBREY7QUFrQkQsQ0FwQkQ7O0FBc0JBSixPQUFPLENBQUNZLFNBQVIsR0FBb0I7QUFDbEJQLEVBQUFBLGFBQWEsRUFBRVEsbUJBQVVDLElBRFA7QUFFbEJYLEVBQUFBLEtBQUssRUFBRVUsbUJBQVVFLE1BRkM7QUFHbEJkLEVBQUFBLE9BQU8sRUFBRVksbUJBQVVFLE1BSEQ7QUFJbEJiLEVBQUFBLFdBQVcsRUFBRVcsbUJBQVVHLElBSkw7QUFLbEJaLEVBQUFBLFlBQVksRUFBRVMsbUJBQVVDO0FBTE4sQ0FBcEI7ZUFRZWQsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdjb21wb25lbnRzL0J1dHRvbidcclxuXHJcbmltcG9ydCB7IHRydW5jYXRlLCBzYWZlQXJyYXlPZkl0ZW0gfSBmcm9tICdoZWxwZXJzJ1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnXHJcblxyXG5jb25zdCBCdXR0b25zID0gKHsgY29udGVudCwgc2VuZE1lc3NhZ2UsIHN0eWxlLCByZWFkT25seU1vZGUsIGlzTGFzdE1lc3NhZ2UgfSkgPT4ge1xyXG4gIGNvbnN0IHsgdGl0bGUsIGJ1dHRvbnMgfSA9IGNvbnRlbnRcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J0J1dHRvbnMnPlxyXG4gICAgICA8cCBjbGFzc05hbWU9J0J1dHRvbnMtLXRpdGxlJyBzdHlsZT17c3R5bGV9PlxyXG4gICAgICAgIHt0cnVuY2F0ZSh0aXRsZSwgNjQwKX1cclxuICAgICAgPC9wPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J0J1dHRvbnMtLWNvbnRhaW5lcic+XHJcbiAgICAgICAge3NhZmVBcnJheU9mSXRlbShidXR0b25zKS5zbGljZSgwLCAzKS5tYXAoKGIsIGkpID0+IChcclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICBidXR0b249e2J9XHJcbiAgICAgICAgICAgIHNlbmRNZXNzYWdlPXtzZW5kTWVzc2FnZX1cclxuICAgICAgICAgICAgaXNMYXN0TWVzc2FnZT17aXNMYXN0TWVzc2FnZX1cclxuICAgICAgICAgICAgcmVhZE9ubHlNb2RlPXtyZWFkT25seU1vZGV9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5CdXR0b25zLnByb3BUeXBlcyA9IHtcclxuICBpc0xhc3RNZXNzYWdlOiBQcm9wVHlwZXMuYm9vbCxcclxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBjb250ZW50OiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIHNlbmRNZXNzYWdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICByZWFkT25seU1vZGU6IFByb3BUeXBlcy5ib29sLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b25zXHJcbiJdfQ==