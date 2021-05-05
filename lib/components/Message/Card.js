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

var _sanitizeUrl = require("@braintree/sanitize-url");

var _helpers = require("../../helpers");

var _Button = _interopRequireDefault(require("../Button"));

var Card = function Card(_ref) {
  var content = _ref.content,
      sendMessage = _ref.sendMessage,
      onImageLoaded = _ref.onImageLoaded,
      readOnlyMode = _ref.readOnlyMode,
      isLastMessage = _ref.isLastMessage;
  var title = content.title,
      subtitle = content.subtitle,
      imageUrl = content.imageUrl,
      buttons = content.buttons;

  if (imageUrl && (0, _sanitizeUrl.sanitizeUrl)(imageUrl) === 'about:blank') {
    return null;
  } // https://sapjira.wdf.sap.corp/browse/SAPMLCONV-6296
  // Need to check if buttons is null before rendering the button html.


  return /*#__PURE__*/_react.default.createElement("div", {
    className: 'RecastAppCard CaiAppCard'
  }, imageUrl && /*#__PURE__*/_react.default.createElement("img", {
    src: imageUrl,
    onLoad: onImageLoaded,
    className: "RecastAppCard--img CaiAppCard--img"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "RecastAppCard--text CaiAppCard--text"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "RecastAppCard--text-title CaiAppCard--text-title"
  }, (0, _helpers.truncate)(title, 80)), subtitle && /*#__PURE__*/_react.default.createElement("p", {
    className: "Card--text-subtitle"
  }, (0, _helpers.truncate)(subtitle, 80))), buttons && buttons.length ? /*#__PURE__*/_react.default.createElement("div", {
    className: "RecastAppCard--button-container CaiAppCard--button-container"
  }, (0, _helpers.safeArrayOfItem)(buttons).slice(0, 3).map(function (b, i) {
    return /*#__PURE__*/_react.default.createElement(_Button.default, {
      key: i,
      button: b,
      sendMessage: sendMessage,
      isLastMessage: isLastMessage,
      readOnlyMode: readOnlyMode
    });
  })) : null);
};

Card.propTypes = {
  isLastMessage: _propTypes.default.bool,
  content: _propTypes.default.object,
  sendMessage: _propTypes.default.func,
  onImageLoaded: _propTypes.default.func,
  readOnlyMode: _propTypes.default.bool
};
var _default = Card;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01lc3NhZ2UvQ2FyZC5qcyJdLCJuYW1lcyI6WyJDYXJkIiwiY29udGVudCIsInNlbmRNZXNzYWdlIiwib25JbWFnZUxvYWRlZCIsInJlYWRPbmx5TW9kZSIsImlzTGFzdE1lc3NhZ2UiLCJ0aXRsZSIsInN1YnRpdGxlIiwiaW1hZ2VVcmwiLCJidXR0b25zIiwibGVuZ3RoIiwic2xpY2UiLCJtYXAiLCJiIiwiaSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJvYmplY3QiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBMEU7QUFBQSxNQUF2RUMsT0FBdUUsUUFBdkVBLE9BQXVFO0FBQUEsTUFBOURDLFdBQThELFFBQTlEQSxXQUE4RDtBQUFBLE1BQWpEQyxhQUFpRCxRQUFqREEsYUFBaUQ7QUFBQSxNQUFsQ0MsWUFBa0MsUUFBbENBLFlBQWtDO0FBQUEsTUFBcEJDLGFBQW9CLFFBQXBCQSxhQUFvQjtBQUFBLE1BQzdFQyxLQUQ2RSxHQUN0Q0wsT0FEc0MsQ0FDN0VLLEtBRDZFO0FBQUEsTUFDdEVDLFFBRHNFLEdBQ3RDTixPQURzQyxDQUN0RU0sUUFEc0U7QUFBQSxNQUM1REMsUUFENEQsR0FDdENQLE9BRHNDLENBQzVETyxRQUQ0RDtBQUFBLE1BQ2xEQyxPQURrRCxHQUN0Q1IsT0FEc0MsQ0FDbERRLE9BRGtEOztBQUdyRixNQUFJRCxRQUFRLElBQUksOEJBQVlBLFFBQVosTUFBMEIsYUFBMUMsRUFBeUQ7QUFDdkQsV0FBTyxJQUFQO0FBQ0QsR0FMb0YsQ0FNckY7QUFDQTs7O0FBQ0Esc0JBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBRTtBQUFoQixLQUNHQSxRQUFRLGlCQUFJO0FBQUssSUFBQSxHQUFHLEVBQUVBLFFBQVY7QUFBb0IsSUFBQSxNQUFNLEVBQUVMLGFBQTVCO0FBQTJDLElBQUEsU0FBUyxFQUFDO0FBQXJELElBRGYsZUFHRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBRyxJQUFBLFNBQVMsRUFBQztBQUFiLEtBQWlFLHVCQUFTRyxLQUFULEVBQWdCLEVBQWhCLENBQWpFLENBREYsRUFFR0MsUUFBUSxpQkFBSTtBQUFHLElBQUEsU0FBUyxFQUFDO0FBQWIsS0FBb0MsdUJBQVNBLFFBQVQsRUFBbUIsRUFBbkIsQ0FBcEMsQ0FGZixDQUhGLEVBUUdFLE9BQU8sSUFBSUEsT0FBTyxDQUFDQyxNQUFuQixnQkFDQztBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDRyw4QkFBZ0JELE9BQWhCLEVBQXlCRSxLQUF6QixDQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQ0MsR0FBckMsQ0FBeUMsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsd0JBQ3hDLDZCQUFDLGVBQUQ7QUFDRSxNQUFBLEdBQUcsRUFBRUEsQ0FEUDtBQUVFLE1BQUEsTUFBTSxFQUFFRCxDQUZWO0FBR0UsTUFBQSxXQUFXLEVBQUVYLFdBSGY7QUFJRSxNQUFBLGFBQWEsRUFBRUcsYUFKakI7QUFLRSxNQUFBLFlBQVksRUFBRUQ7QUFMaEIsTUFEd0M7QUFBQSxHQUF6QyxDQURILENBREQsR0FXRyxJQW5CTixDQURGO0FBdUJELENBL0JEOztBQWlDQUosSUFBSSxDQUFDZSxTQUFMLEdBQWlCO0FBQ2ZWLEVBQUFBLGFBQWEsRUFBRVcsbUJBQVVDLElBRFY7QUFFZmhCLEVBQUFBLE9BQU8sRUFBRWUsbUJBQVVFLE1BRko7QUFHZmhCLEVBQUFBLFdBQVcsRUFBRWMsbUJBQVVHLElBSFI7QUFJZmhCLEVBQUFBLGFBQWEsRUFBRWEsbUJBQVVHLElBSlY7QUFLZmYsRUFBQUEsWUFBWSxFQUFFWSxtQkFBVUM7QUFMVCxDQUFqQjtlQVFlakIsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgeyBzYW5pdGl6ZVVybCB9IGZyb20gJ0BicmFpbnRyZWUvc2FuaXRpemUtdXJsJ1xyXG5cclxuaW1wb3J0IHsgdHJ1bmNhdGUsIHNhZmVBcnJheU9mSXRlbSB9IGZyb20gJ2hlbHBlcnMnXHJcblxyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ2NvbXBvbmVudHMvQnV0dG9uJ1xyXG5cclxuY29uc3QgQ2FyZCA9ICh7IGNvbnRlbnQsIHNlbmRNZXNzYWdlLCBvbkltYWdlTG9hZGVkLCByZWFkT25seU1vZGUsIGlzTGFzdE1lc3NhZ2UgfSkgPT4ge1xyXG4gIGNvbnN0IHsgdGl0bGUsIHN1YnRpdGxlLCBpbWFnZVVybCwgYnV0dG9ucyB9ID0gY29udGVudFxyXG5cclxuICBpZiAoaW1hZ2VVcmwgJiYgc2FuaXRpemVVcmwoaW1hZ2VVcmwpID09PSAnYWJvdXQ6YmxhbmsnKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuICAvLyBodHRwczovL3NhcGppcmEud2RmLnNhcC5jb3JwL2Jyb3dzZS9TQVBNTENPTlYtNjI5NlxyXG4gIC8vIE5lZWQgdG8gY2hlY2sgaWYgYnV0dG9ucyBpcyBudWxsIGJlZm9yZSByZW5kZXJpbmcgdGhlIGJ1dHRvbiBodG1sLlxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17J1JlY2FzdEFwcENhcmQgQ2FpQXBwQ2FyZCd9PlxyXG4gICAgICB7aW1hZ2VVcmwgJiYgPGltZyBzcmM9e2ltYWdlVXJsfSBvbkxvYWQ9e29uSW1hZ2VMb2FkZWR9IGNsYXNzTmFtZT0nUmVjYXN0QXBwQ2FyZC0taW1nIENhaUFwcENhcmQtLWltZycgLz59XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nUmVjYXN0QXBwQ2FyZC0tdGV4dCBDYWlBcHBDYXJkLS10ZXh0Jz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9J1JlY2FzdEFwcENhcmQtLXRleHQtdGl0bGUgQ2FpQXBwQ2FyZC0tdGV4dC10aXRsZSc+e3RydW5jYXRlKHRpdGxlLCA4MCl9PC9wPlxyXG4gICAgICAgIHtzdWJ0aXRsZSAmJiA8cCBjbGFzc05hbWU9J0NhcmQtLXRleHQtc3VidGl0bGUnPnt0cnVuY2F0ZShzdWJ0aXRsZSwgODApfTwvcD59XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge2J1dHRvbnMgJiYgYnV0dG9ucy5sZW5ndGggPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J1JlY2FzdEFwcENhcmQtLWJ1dHRvbi1jb250YWluZXIgQ2FpQXBwQ2FyZC0tYnV0dG9uLWNvbnRhaW5lcic+XHJcbiAgICAgICAgICB7c2FmZUFycmF5T2ZJdGVtKGJ1dHRvbnMpLnNsaWNlKDAsIDMpLm1hcCgoYiwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgIGJ1dHRvbj17Yn1cclxuICAgICAgICAgICAgICBzZW5kTWVzc2FnZT17c2VuZE1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgaXNMYXN0TWVzc2FnZT17aXNMYXN0TWVzc2FnZX1cclxuICAgICAgICAgICAgICByZWFkT25seU1vZGU9e3JlYWRPbmx5TW9kZX0gLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogbnVsbH1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuQ2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgaXNMYXN0TWVzc2FnZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgY29udGVudDogUHJvcFR5cGVzLm9iamVjdCxcclxuICBzZW5kTWVzc2FnZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25JbWFnZUxvYWRlZDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgcmVhZE9ubHlNb2RlOiBQcm9wVHlwZXMuYm9vbCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZFxyXG4iXX0=