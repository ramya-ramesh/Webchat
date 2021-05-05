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