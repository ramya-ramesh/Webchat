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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlbmRCdXR0b24vaW5kZXguanMiXSwibmFtZXMiOlsiU2VuZEJ1dHRvbiIsInNlbmRNZXNzYWdlIiwicHJlZmVyZW5jZXMiLCJ2YWx1ZSIsIndpZHRoIiwiZmlsbCIsImFjY2VudENvbG9yIiwiYm90TWVzc2FnZUNvbG9yIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiZnVuYyIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxNQUFHQyxXQUFILFFBQUdBLFdBQUg7QUFBQSxNQUFnQkMsV0FBaEIsUUFBZ0JBLFdBQWhCO0FBQUEsTUFBNkJDLEtBQTdCLFFBQTZCQSxLQUE3QjtBQUFBLHNCQUNqQjtBQUNFLElBQUEsU0FBUyxFQUFDO0FBRFosa0JBR0U7QUFDRSxJQUFBLFNBQVMsRUFBQyxnQ0FEWjtBQUVFLElBQUEsT0FBTyxFQUFFRixXQUZYO0FBR0UsSUFBQSxRQUFRLEVBQUUsQ0FBQ0U7QUFIYixrQkFLRTtBQUNFLElBQUEsS0FBSyxFQUFFO0FBQ0xDLE1BQUFBLEtBQUssRUFBRSxFQURGO0FBRUxDLE1BQUFBLElBQUksRUFBRUYsS0FBSyxHQUFHRCxXQUFXLENBQUNJLFdBQWYsR0FBNkJKLFdBQVcsQ0FBQ0s7QUFGL0MsS0FEVDtBQUtFLElBQUEsT0FBTyxFQUFDO0FBTFYsa0JBT0U7QUFBTSxJQUFBLENBQUMsRUFBQztBQUFSLElBUEYsQ0FMRixDQUhGLENBRGlCO0FBQUEsQ0FBbkI7O0FBc0JBUCxVQUFVLENBQUNRLFNBQVgsR0FBdUI7QUFDckJOLEVBQUFBLFdBQVcsRUFBRU8sbUJBQVVDLE1BREY7QUFFckJULEVBQUFBLFdBQVcsRUFBRVEsbUJBQVVFLElBRkY7QUFHckJSLEVBQUFBLEtBQUssRUFBRU0sbUJBQVVHO0FBSEksQ0FBdkI7ZUFNZVosVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnXHJcblxyXG5jb25zdCBTZW5kQnV0dG9uID0gKHsgc2VuZE1lc3NhZ2UsIHByZWZlcmVuY2VzLCB2YWx1ZSB9KSA9PiAoXHJcbiAgPGRpdlxyXG4gICAgY2xhc3NOYW1lPSdSZWNhc3RTZW5kQnV0dG9uQ29udGFpbmVyIENhaVNlbmRCdXR0b25Db250YWluZXInXHJcbiAgPlxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9J1JlY2FzdFNlbmRCdXR0b24gQ2FpU2VuZEJ1dHRvbidcclxuICAgICAgb25DbGljaz17c2VuZE1lc3NhZ2V9XHJcbiAgICAgIGRpc2FibGVkPXshdmFsdWV9XHJcbiAgICA+XHJcbiAgICAgIDxzdmdcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgd2lkdGg6IDIzLFxyXG4gICAgICAgICAgZmlsbDogdmFsdWUgPyBwcmVmZXJlbmNlcy5hY2NlbnRDb2xvciA6IHByZWZlcmVuY2VzLmJvdE1lc3NhZ2VDb2xvcixcclxuICAgICAgICB9fVxyXG4gICAgICAgIHZpZXdCb3g9JzAgMCA1MTIgNTEyJ1xyXG4gICAgICA+XHJcbiAgICAgICAgPHBhdGggZD0nTTg1IDI3Ny4zNzVoMjU5LjcwNEwyMjUuMDAyIDM5Ny4wNzcgMjU2IDQyN2wxNzEtMTcxTDI1NiA4NWwtMjkuOTIyIDI5LjkyNCAxMTguNjI2IDExOS43MDFIODV2NDIuNzV6JyAvPlxyXG4gICAgICA8L3N2Zz5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5TZW5kQnV0dG9uLnByb3BUeXBlcyA9IHtcclxuICBwcmVmZXJlbmNlczogUHJvcFR5cGVzLm9iamVjdCxcclxuICBzZW5kTWVzc2FnZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbmRCdXR0b25cclxuIl19