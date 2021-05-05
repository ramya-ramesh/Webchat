"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./style.scss");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Expander = function Expander(_ref) {
  var onClick = _ref.onClick,
      preferences = _ref.preferences,
      style = _ref.style,
      show = _ref.show;
  return /*#__PURE__*/_react.default.createElement("div", {
    onClick: onClick,
    className: (0, _classnames.default)('RecastAppExpander CaiAppExpander', {
      open: show,
      close: !show
    }),
    style: _objectSpread({
      color: preferences.complementaryColor,
      backgroundColor: preferences.accentColor
    }, style)
  }, preferences.expanderLogo && /*#__PURE__*/_react.default.createElement("img", {
    className: "RecastAppExpander--logo CaiAppExpander--logo",
    src: preferences.expanderLogo
  }), preferences.expanderTitle, preferences.onboardingMessage && /*#__PURE__*/_react.default.createElement("div", {
    className: "RecastAppExpander--onboarding CaiAppExpander--onboarding"
  }, preferences.onboardingMessage));
};

Expander.propTypes = {
  preferences: _propTypes.default.object,
  onClick: _propTypes.default.func.isRequired,
  style: _propTypes.default.object,
  show: _propTypes.default.bool
};
var _default = Expander;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0V4cGFuZGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbIkV4cGFuZGVyIiwib25DbGljayIsInByZWZlcmVuY2VzIiwic3R5bGUiLCJzaG93Iiwib3BlbiIsImNsb3NlIiwiY29sb3IiLCJjb21wbGVtZW50YXJ5Q29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJhY2NlbnRDb2xvciIsImV4cGFuZGVyTG9nbyIsImV4cGFuZGVyVGl0bGUiLCJvbmJvYXJkaW5nTWVzc2FnZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxNQUFHQyxPQUFILFFBQUdBLE9BQUg7QUFBQSxNQUFZQyxXQUFaLFFBQVlBLFdBQVo7QUFBQSxNQUF5QkMsS0FBekIsUUFBeUJBLEtBQXpCO0FBQUEsTUFBZ0NDLElBQWhDLFFBQWdDQSxJQUFoQztBQUFBLHNCQUNmO0FBQ0UsSUFBQSxPQUFPLEVBQUVILE9BRFg7QUFFRSxJQUFBLFNBQVMsRUFBRSx5QkFBRyxrQ0FBSCxFQUF1QztBQUFFSSxNQUFBQSxJQUFJLEVBQUVELElBQVI7QUFBY0UsTUFBQUEsS0FBSyxFQUFFLENBQUNGO0FBQXRCLEtBQXZDLENBRmI7QUFHRSxJQUFBLEtBQUs7QUFDSEcsTUFBQUEsS0FBSyxFQUFFTCxXQUFXLENBQUNNLGtCQURoQjtBQUVIQyxNQUFBQSxlQUFlLEVBQUVQLFdBQVcsQ0FBQ1E7QUFGMUIsT0FHQVAsS0FIQTtBQUhQLEtBU0dELFdBQVcsQ0FBQ1MsWUFBWixpQkFDQztBQUFLLElBQUEsU0FBUyxFQUFDLDhDQUFmO0FBQThELElBQUEsR0FBRyxFQUFFVCxXQUFXLENBQUNTO0FBQS9FLElBVkosRUFhR1QsV0FBVyxDQUFDVSxhQWJmLEVBZUdWLFdBQVcsQ0FBQ1csaUJBQVosaUJBQ0M7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQTJFWCxXQUFXLENBQUNXLGlCQUF2RixDQWhCSixDQURlO0FBQUEsQ0FBakI7O0FBc0JBYixRQUFRLENBQUNjLFNBQVQsR0FBcUI7QUFDbkJaLEVBQUFBLFdBQVcsRUFBRWEsbUJBQVVDLE1BREo7QUFFbkJmLEVBQUFBLE9BQU8sRUFBRWMsbUJBQVVFLElBQVYsQ0FBZUMsVUFGTDtBQUduQmYsRUFBQUEsS0FBSyxFQUFFWSxtQkFBVUMsTUFIRTtBQUluQlosRUFBQUEsSUFBSSxFQUFFVyxtQkFBVUk7QUFKRyxDQUFyQjtlQU9lbkIsUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcclxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnXHJcblxyXG5jb25zdCBFeHBhbmRlciA9ICh7IG9uQ2xpY2ssIHByZWZlcmVuY2VzLCBzdHlsZSwgc2hvdyB9KSA9PiAoXHJcbiAgPGRpdlxyXG4gICAgb25DbGljaz17b25DbGlja31cclxuICAgIGNsYXNzTmFtZT17Y3goJ1JlY2FzdEFwcEV4cGFuZGVyIENhaUFwcEV4cGFuZGVyJywgeyBvcGVuOiBzaG93LCBjbG9zZTogIXNob3cgfSl9XHJcbiAgICBzdHlsZT17e1xyXG4gICAgICBjb2xvcjogcHJlZmVyZW5jZXMuY29tcGxlbWVudGFyeUNvbG9yLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHByZWZlcmVuY2VzLmFjY2VudENvbG9yLFxyXG4gICAgICAuLi5zdHlsZSxcclxuICAgIH19XHJcbiAgPlxyXG4gICAge3ByZWZlcmVuY2VzLmV4cGFuZGVyTG9nbyAmJiAoXHJcbiAgICAgIDxpbWcgY2xhc3NOYW1lPSdSZWNhc3RBcHBFeHBhbmRlci0tbG9nbyBDYWlBcHBFeHBhbmRlci0tbG9nbycgc3JjPXtwcmVmZXJlbmNlcy5leHBhbmRlckxvZ299IC8+XHJcbiAgICApfVxyXG5cclxuICAgIHtwcmVmZXJlbmNlcy5leHBhbmRlclRpdGxlfVxyXG5cclxuICAgIHtwcmVmZXJlbmNlcy5vbmJvYXJkaW5nTWVzc2FnZSAmJiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdSZWNhc3RBcHBFeHBhbmRlci0tb25ib2FyZGluZyBDYWlBcHBFeHBhbmRlci0tb25ib2FyZGluZyc+e3ByZWZlcmVuY2VzLm9uYm9hcmRpbmdNZXNzYWdlfTwvZGl2PlxyXG4gICAgKX1cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuRXhwYW5kZXIucHJvcFR5cGVzID0ge1xyXG4gIHByZWZlcmVuY2VzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgc2hvdzogUHJvcFR5cGVzLmJvb2wsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cGFuZGVyXHJcbiJdfQ==