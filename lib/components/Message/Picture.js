"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _sanitizeUrl = require("@braintree/sanitize-url");

require("./style.scss");

var Picture = function Picture(_ref) {
  var content = _ref.content,
      onImageLoaded = _ref.onImageLoaded;

  if (content && (0, _sanitizeUrl.sanitizeUrl)(content) === 'about:blank') {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement("img", {
    onLoad: onImageLoaded,
    src: content,
    className: 'RecastAppPicture CaiAppPicture'
  });
};

Picture.propTypes = {
  content: _propTypes.default.string,
  onImageLoaded: _propTypes.default.func
};
var _default = Picture;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01lc3NhZ2UvUGljdHVyZS5qcyJdLCJuYW1lcyI6WyJQaWN0dXJlIiwiY29udGVudCIsIm9uSW1hZ2VMb2FkZWQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFnQztBQUFBLE1BQTdCQyxPQUE2QixRQUE3QkEsT0FBNkI7QUFBQSxNQUFwQkMsYUFBb0IsUUFBcEJBLGFBQW9COztBQUM5QyxNQUFJRCxPQUFPLElBQUksOEJBQVlBLE9BQVosTUFBeUIsYUFBeEMsRUFBdUQ7QUFDckQsV0FBTyxJQUFQO0FBQ0Q7O0FBQ0Qsc0JBQU87QUFBSyxJQUFBLE1BQU0sRUFBRUMsYUFBYjtBQUE0QixJQUFBLEdBQUcsRUFBRUQsT0FBakM7QUFBMEMsSUFBQSxTQUFTLEVBQUU7QUFBckQsSUFBUDtBQUNELENBTEQ7O0FBT0FELE9BQU8sQ0FBQ0csU0FBUixHQUFvQjtBQUNsQkYsRUFBQUEsT0FBTyxFQUFFRyxtQkFBVUMsTUFERDtBQUVsQkgsRUFBQUEsYUFBYSxFQUFFRSxtQkFBVUU7QUFGUCxDQUFwQjtlQUtlTixPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCB7IHNhbml0aXplVXJsIH0gZnJvbSAnQGJyYWludHJlZS9zYW5pdGl6ZS11cmwnXHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuc2NzcydcclxuXHJcbmNvbnN0IFBpY3R1cmUgPSAoeyBjb250ZW50LCBvbkltYWdlTG9hZGVkIH0pID0+IHtcclxuICBpZiAoY29udGVudCAmJiBzYW5pdGl6ZVVybChjb250ZW50KSA9PT0gJ2Fib3V0OmJsYW5rJykge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcbiAgcmV0dXJuIDxpbWcgb25Mb2FkPXtvbkltYWdlTG9hZGVkfSBzcmM9e2NvbnRlbnR9IGNsYXNzTmFtZT17J1JlY2FzdEFwcFBpY3R1cmUgQ2FpQXBwUGljdHVyZSd9IC8+XHJcbn1cclxuXHJcblBpY3R1cmUucHJvcFR5cGVzID0ge1xyXG4gIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgb25JbWFnZUxvYWRlZDogUHJvcFR5cGVzLmZ1bmMsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBpY3R1cmVcclxuIl19