"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NextArrow = exports.PrevArrow = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./style.scss");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var PrevArrow = function PrevArrow(_ref) {
  var className = _ref.className,
      style = _ref.style,
      onClick = _ref.onClick;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('RecastAppArrow CaiAppArrow prev', className),
    style: _objectSpread({}, style),
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "https://cdn.cai.tools.sap/webchat/arrow-back.svg",
    className: "arrowSvg"
  }));
};

exports.PrevArrow = PrevArrow;

var NextArrow = function NextArrow(_ref2) {
  var className = _ref2.className,
      style = _ref2.style,
      onClick = _ref2.onClick;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('RecastAppArrow CaiAppArrow next', className),
    style: _objectSpread({}, style),
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "https://cdn.cai.tools.sap/webchat/arrow-forward.svg",
    className: "arrowSvg"
  }));
};

exports.NextArrow = NextArrow;
var arrowPropTypes = {
  className: _propTypes.default.string,
  onClick: _propTypes.default.func,
  style: _propTypes.default.object
};
PrevArrow.propTypes = arrowPropTypes;
NextArrow.propTypes = arrowPropTypes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Fycm93cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJQcmV2QXJyb3ciLCJjbGFzc05hbWUiLCJzdHlsZSIsIm9uQ2xpY2siLCJOZXh0QXJyb3ciLCJhcnJvd1Byb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJvYmplY3QiLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7OztBQUVPLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsTUFBR0MsU0FBSCxRQUFHQSxTQUFIO0FBQUEsTUFBY0MsS0FBZCxRQUFjQSxLQUFkO0FBQUEsTUFBcUJDLE9BQXJCLFFBQXFCQSxPQUFyQjtBQUFBLHNCQUN2QjtBQUNFLElBQUEsU0FBUyxFQUFFLHlCQUFHLGlDQUFILEVBQXNDRixTQUF0QyxDQURiO0FBRUUsSUFBQSxLQUFLLG9CQUFPQyxLQUFQLENBRlA7QUFHRSxJQUFBLE9BQU8sRUFBRUM7QUFIWCxrQkFLRTtBQUFLLElBQUEsR0FBRyxFQUFDLGtEQUFUO0FBQTRELElBQUEsU0FBUyxFQUFDO0FBQXRFLElBTEYsQ0FEdUI7QUFBQSxDQUFsQjs7OztBQVVBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsTUFBR0gsU0FBSCxTQUFHQSxTQUFIO0FBQUEsTUFBY0MsS0FBZCxTQUFjQSxLQUFkO0FBQUEsTUFBcUJDLE9BQXJCLFNBQXFCQSxPQUFyQjtBQUFBLHNCQUN2QjtBQUNFLElBQUEsU0FBUyxFQUFFLHlCQUFHLGlDQUFILEVBQXNDRixTQUF0QyxDQURiO0FBRUUsSUFBQSxLQUFLLG9CQUFPQyxLQUFQLENBRlA7QUFHRSxJQUFBLE9BQU8sRUFBRUM7QUFIWCxrQkFLRTtBQUFLLElBQUEsR0FBRyxFQUFDLHFEQUFUO0FBQStELElBQUEsU0FBUyxFQUFDO0FBQXpFLElBTEYsQ0FEdUI7QUFBQSxDQUFsQjs7O0FBVVAsSUFBTUUsY0FBYyxHQUFHO0FBQ3JCSixFQUFBQSxTQUFTLEVBQUVLLG1CQUFVQyxNQURBO0FBRXJCSixFQUFBQSxPQUFPLEVBQUVHLG1CQUFVRSxJQUZFO0FBR3JCTixFQUFBQSxLQUFLLEVBQUVJLG1CQUFVRztBQUhJLENBQXZCO0FBTUFULFNBQVMsQ0FBQ1UsU0FBVixHQUFzQkwsY0FBdEI7QUFDQUQsU0FBUyxDQUFDTSxTQUFWLEdBQXNCTCxjQUF0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFByZXZBcnJvdyA9ICh7IGNsYXNzTmFtZSwgc3R5bGUsIG9uQ2xpY2sgfSkgPT4gKFxyXG4gIDxkaXZcclxuICAgIGNsYXNzTmFtZT17Y3goJ1JlY2FzdEFwcEFycm93IENhaUFwcEFycm93IHByZXYnLCBjbGFzc05hbWUpfVxyXG4gICAgc3R5bGU9e3sgLi4uc3R5bGUgfX1cclxuICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgPlxyXG4gICAgPGltZyBzcmM9XCJodHRwczovL2Nkbi5jYWkudG9vbHMuc2FwL3dlYmNoYXQvYXJyb3ctYmFjay5zdmdcIiBjbGFzc05hbWU9XCJhcnJvd1N2Z1wiIC8+XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBjb25zdCBOZXh0QXJyb3cgPSAoeyBjbGFzc05hbWUsIHN0eWxlLCBvbkNsaWNrIH0pID0+IChcclxuICA8ZGl2XHJcbiAgICBjbGFzc05hbWU9e2N4KCdSZWNhc3RBcHBBcnJvdyBDYWlBcHBBcnJvdyBuZXh0JywgY2xhc3NOYW1lKX1cclxuICAgIHN0eWxlPXt7IC4uLnN0eWxlIH19XHJcbiAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gID5cclxuICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9jZG4uY2FpLnRvb2xzLnNhcC93ZWJjaGF0L2Fycm93LWZvcndhcmQuc3ZnXCIgY2xhc3NOYW1lPVwiYXJyb3dTdmdcIiAvPlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5jb25zdCBhcnJvd1Byb3BUeXBlcyA9IHtcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbn1cclxuXHJcblByZXZBcnJvdy5wcm9wVHlwZXMgPSBhcnJvd1Byb3BUeXBlc1xyXG5OZXh0QXJyb3cucHJvcFR5cGVzID0gYXJyb3dQcm9wVHlwZXNcclxuIl19