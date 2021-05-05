"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./style.scss");

var menu = function menu(_ref) {
  var onClick = _ref.onClick,
      className = _ref.className;
  return /*#__PURE__*/_react.default.createElement("svg", {
    viewBox: "0 0 512 512",
    id: "menu-svg",
    width: 18,
    height: 18,
    onClick: onClick,
    className: (0, _classnames.default)('MenuSVG', {
      className: className
    })
  }, /*#__PURE__*/_react.default.createElement("path", {
    id: "menu-svg-path",
    fill: "cornflowerblue",
    d: "M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z"
  }));
};

var _default = menu;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3N2Z3MvbWVudS5qcyJdLCJuYW1lcyI6WyJtZW51Iiwib25DbGljayIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBNEI7QUFBQSxNQUF6QkMsT0FBeUIsUUFBekJBLE9BQXlCO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUN2QyxzQkFDRTtBQUNFLElBQUEsT0FBTyxFQUFDLGFBRFY7QUFFRSxJQUFBLEVBQUUsRUFBQyxVQUZMO0FBR0UsSUFBQSxLQUFLLEVBQUUsRUFIVDtBQUlFLElBQUEsTUFBTSxFQUFFLEVBSlY7QUFLRSxJQUFBLE9BQU8sRUFBRUQsT0FMWDtBQU1FLElBQUEsU0FBUyxFQUFFLHlCQUFHLFNBQUgsRUFBYztBQUFFQyxNQUFBQSxTQUFTLEVBQVRBO0FBQUYsS0FBZDtBQU5iLGtCQVFFO0FBQ0UsSUFBQSxFQUFFLEVBQUMsZUFETDtBQUVFLElBQUEsSUFBSSxFQUFDLGdCQUZQO0FBR0UsSUFBQSxDQUFDLEVBQUM7QUFISixJQVJGLENBREY7QUFnQkQsQ0FqQkQ7O2VBa0JlRixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5zY3NzJ1xyXG5cclxuY29uc3QgbWVudSA9ICh7IG9uQ2xpY2ssIGNsYXNzTmFtZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgdmlld0JveD0nMCAwIDUxMiA1MTInXHJcbiAgICAgIGlkPSdtZW51LXN2ZydcclxuICAgICAgd2lkdGg9ezE4fVxyXG4gICAgICBoZWlnaHQ9ezE4fVxyXG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICBjbGFzc05hbWU9e2N4KCdNZW51U1ZHJywgeyBjbGFzc05hbWUgfSl9XHJcbiAgICA+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgaWQ9J21lbnUtc3ZnLXBhdGgnXHJcbiAgICAgICAgZmlsbD0nY29ybmZsb3dlcmJsdWUnXHJcbiAgICAgICAgZD0nTTY0IDM4NGgzODR2LTQyLjY2Nkg2NFYzODR6bTAtMTA2LjY2NmgzODR2LTQyLjY2N0g2NHY0Mi42Njd6TTY0IDEyOHY0Mi42NjVoMzg0VjEyOEg2NHonXHJcbiAgICAgIC8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbWVudVxyXG4iXX0=