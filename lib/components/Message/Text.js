"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.replace.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _sanitizeHtmlReact = _interopRequireDefault(require("sanitize-html-react"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _remarkGfm = _interopRequireDefault(require("remark-gfm"));

var _classnames = _interopRequireDefault(require("classnames"));

var _helpers = require("../../helpers");

require("./style.scss");

var allowedMarkdownTypes = ['paragraph', 'text', 'break', 'emphasis', 'strong', 'link', 'image', 'blockquote', 'delete', 'list', 'listItem', 'heading', 'code', 'thematicBreak', 'table', 'tableHead', 'tableBody', 'tableRow', 'tableCell'];

var Text = function Text(_ref) {
  var content = _ref.content,
      style = _ref.style,
      isMarkdown = _ref.isMarkdown,
      readOnlyMode = _ref.readOnlyMode;
  var respond = (0, _helpers.safeStringValue)(content);

  if (typeof isMarkdown !== 'boolean') {
    isMarkdown = false;
  }

  var maxLengthLimit = 640; // JIRA: https://sapjira.wdf.sap.corp/browse/SAPMLCONV-4904

  if (isMarkdown) {
    // Remove markdown tags and replace [Link Name Text](http:url...) with 'Link Name Text' only.
    var displayText = respond.replace(/__|\*|#|(?:\[([^\]]*)\]\([^)]*\))/gm, '$1'); // Increase the max length limit to include any markdown (links) strings, to avoid losing the href strings.

    maxLengthLimit += Math.max(respond.length - displayText.length, 0);
  }

  var compiledResponse = (0, _sanitizeHtmlReact.default)((0, _helpers.truncate)(respond, maxLengthLimit), {
    allowedTags: ['b', 'i', 'em', 'strong', 'a']
  }).replace(/&amp;/g, 'g').replace(/&lt;/g, '<').replace(/&gt;/g, '>'); // Markdown links need to open in new window.
  // BCP: https://support.wdf.sap.corp/sap/support/message/1980408289

  var LinkRenderer = function LinkRenderer(props) {
    return /*#__PURE__*/_react.default.createElement("a", {
      className: (0, _classnames.default)({
        'CaiAppButton--ReadOnly': readOnlyMode
      }),
      href: readOnlyMode ? '#' : props.href,
      target: readOnlyMode ? '_self' : '_blank',
      rel: "noopener noreferrer"
    }, props.children);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    style: style,
    className: 'RecastAppText CaiAppText'
  }, isMarkdown ? /*#__PURE__*/_react.default.createElement(_reactMarkdown.default, {
    plugins: [_remarkGfm.default],
    renderers: {
      link: LinkRenderer
    },
    allowedTypes: allowedMarkdownTypes
  }, compiledResponse) : compiledResponse);
};

Text.propTypes = {
  style: _propTypes.default.object,
  content: _propTypes.default.string,
  isMarkdown: _propTypes.default.bool,
  readOnlyMode: _propTypes.default.bool
};
var _default = Text;
exports.default = _default;