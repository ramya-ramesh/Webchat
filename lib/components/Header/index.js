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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0hlYWRlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJjbG9zZVdlYmNoYXQiLCJwcmVmZXJlbmNlcyIsImxvZ29TdHlsZSIsInJlYWRPbmx5TW9kZSIsImNvbG9yIiwiY29tcGxlbWVudGFyeUNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiYWNjZW50Q29sb3IiLCJoZWFkZXJMb2dvIiwiaGVhZGVyVGl0bGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwib2JqZWN0IiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBNEQ7QUFBQSxNQUF6REMsWUFBeUQsUUFBekRBLFlBQXlEO0FBQUEsTUFBM0NDLFdBQTJDLFFBQTNDQSxXQUEyQztBQUFBLE1BQTlCQyxTQUE4QixRQUE5QkEsU0FBOEI7QUFBQSxNQUFuQkMsWUFBbUIsUUFBbkJBLFlBQW1COztBQUN6RSxNQUFJQSxZQUFKLEVBQWtCO0FBQ2hCLFdBQU8sSUFBUDtBQUNEOztBQUNELHNCQUNFO0FBQ0UsSUFBQSxTQUFTLEVBQUMsOEJBRFo7QUFFRSxJQUFBLEtBQUssRUFBRTtBQUNMQyxNQUFBQSxLQUFLLEVBQUVILFdBQVcsQ0FBQ0ksa0JBRGQ7QUFFTEMsTUFBQUEsZUFBZSxFQUFFTCxXQUFXLENBQUNNO0FBRnhCO0FBRlQsa0JBT0U7QUFBSyxJQUFBLFNBQVMsRUFBQywwQ0FBZjtBQUEwRCxJQUFBLEdBQUcsRUFBRU4sV0FBVyxDQUFDTyxVQUEzRTtBQUF1RixJQUFBLEtBQUssRUFBRU47QUFBOUYsSUFQRixlQVNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUE2REQsV0FBVyxDQUFDUSxXQUF6RSxDQVRGLGVBV0U7QUFBSyxJQUFBLFNBQVMsRUFBQyx3Q0FBZjtBQUF3RCxJQUFBLE9BQU8sRUFBRVQ7QUFBakUsa0JBQ0U7QUFBSyxJQUFBLEdBQUcsRUFBQztBQUFULElBREYsQ0FYRixDQURGO0FBaUJELENBckJEOztBQXVCQUQsTUFBTSxDQUFDVyxTQUFQLEdBQW1CO0FBQ2pCVixFQUFBQSxZQUFZLEVBQUVXLG1CQUFVQyxJQURQO0FBRWpCWCxFQUFBQSxXQUFXLEVBQUVVLG1CQUFVRSxNQUZOO0FBR2pCWCxFQUFBQSxTQUFTLEVBQUVTLG1CQUFVRSxNQUhKO0FBSWpCVixFQUFBQSxZQUFZLEVBQUVRLG1CQUFVRztBQUpQLENBQW5CO2VBT2VmLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5zY3NzJ1xyXG5cclxuY29uc3QgSGVhZGVyID0gKHsgY2xvc2VXZWJjaGF0LCBwcmVmZXJlbmNlcywgbG9nb1N0eWxlLCByZWFkT25seU1vZGUgfSkgPT4ge1xyXG4gIGlmIChyZWFkT25seU1vZGUpIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT0nUmVjYXN0QXBwSGVhZGVyIENhaUFwcEhlYWRlcidcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBjb2xvcjogcHJlZmVyZW5jZXMuY29tcGxlbWVudGFyeUNvbG9yLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogcHJlZmVyZW5jZXMuYWNjZW50Q29sb3IsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxpbWcgY2xhc3NOYW1lPSdSZWNhc3RBcHBIZWFkZXItLWxvZ28gQ2FpQXBwSGVhZGVyLS1sb2dvJyBzcmM9e3ByZWZlcmVuY2VzLmhlYWRlckxvZ299IHN0eWxlPXtsb2dvU3R5bGV9IC8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nUmVjYXN0QXBwSGVhZGVyLS10aXRsZSBDYWlBcHBIZWFkZXItLXRpdGxlJz57cHJlZmVyZW5jZXMuaGVhZGVyVGl0bGV9PC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nUmVjYXN0QXBwSGVhZGVyLS1idG4gQ2FpQXBwSGVhZGVyLS1idG4nIG9uQ2xpY2s9e2Nsb3NlV2ViY2hhdH0+XHJcbiAgICAgICAgPGltZyBzcmM9J2h0dHBzOi8vY2RuLmNhaS50b29scy5zYXAvd2ViY2hhdC9jbG9zZS5zdmcnIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5IZWFkZXIucHJvcFR5cGVzID0ge1xyXG4gIGNsb3NlV2ViY2hhdDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgcHJlZmVyZW5jZXM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgbG9nb1N0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIHJlYWRPbmx5TW9kZTogUHJvcFR5cGVzLmJvb2wsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxyXG4iXX0=