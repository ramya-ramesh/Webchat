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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01lc3NhZ2UvVGV4dC5qcyJdLCJuYW1lcyI6WyJhbGxvd2VkTWFya2Rvd25UeXBlcyIsIlRleHQiLCJjb250ZW50Iiwic3R5bGUiLCJpc01hcmtkb3duIiwicmVhZE9ubHlNb2RlIiwicmVzcG9uZCIsIm1heExlbmd0aExpbWl0IiwiZGlzcGxheVRleHQiLCJyZXBsYWNlIiwiTWF0aCIsIm1heCIsImxlbmd0aCIsImNvbXBpbGVkUmVzcG9uc2UiLCJhbGxvd2VkVGFncyIsIkxpbmtSZW5kZXJlciIsInByb3BzIiwiaHJlZiIsImNoaWxkcmVuIiwiZ2ZtIiwibGluayIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsInN0cmluZyIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxJQUFNQSxvQkFBb0IsR0FBRyxDQUMzQixXQUQyQixFQUUzQixNQUYyQixFQUczQixPQUgyQixFQUkzQixVQUoyQixFQUszQixRQUwyQixFQU0zQixNQU4yQixFQU8zQixPQVAyQixFQVEzQixZQVIyQixFQVMzQixRQVQyQixFQVUzQixNQVYyQixFQVczQixVQVgyQixFQVkzQixTQVoyQixFQWEzQixNQWIyQixFQWMzQixlQWQyQixFQWUzQixPQWYyQixFQWdCM0IsV0FoQjJCLEVBaUIzQixXQWpCMkIsRUFrQjNCLFVBbEIyQixFQW1CM0IsV0FuQjJCLENBQTdCOztBQXNCQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFrRDtBQUFBLE1BQS9DQyxPQUErQyxRQUEvQ0EsT0FBK0M7QUFBQSxNQUF0Q0MsS0FBc0MsUUFBdENBLEtBQXNDO0FBQUEsTUFBL0JDLFVBQStCLFFBQS9CQSxVQUErQjtBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7QUFDN0QsTUFBTUMsT0FBTyxHQUFHLDhCQUFnQkosT0FBaEIsQ0FBaEI7O0FBRUEsTUFBSSxPQUFPRSxVQUFQLEtBQXNCLFNBQTFCLEVBQXFDO0FBQ25DQSxJQUFBQSxVQUFVLEdBQUcsS0FBYjtBQUNEOztBQUVELE1BQUlHLGNBQWMsR0FBRyxHQUFyQixDQVA2RCxDQVE3RDs7QUFDQSxNQUFJSCxVQUFKLEVBQWdCO0FBQ2Q7QUFDQSxRQUFNSSxXQUFXLEdBQUdGLE9BQU8sQ0FBQ0csT0FBUixDQUFnQixxQ0FBaEIsRUFBdUQsSUFBdkQsQ0FBcEIsQ0FGYyxDQUdkOztBQUNBRixJQUFBQSxjQUFjLElBQUlHLElBQUksQ0FBQ0MsR0FBTCxDQUFTTCxPQUFPLENBQUNNLE1BQVIsR0FBaUJKLFdBQVcsQ0FBQ0ksTUFBdEMsRUFBOEMsQ0FBOUMsQ0FBbEI7QUFDRDs7QUFFRCxNQUFNQyxnQkFBZ0IsR0FBRyxnQ0FBYSx1QkFBU1AsT0FBVCxFQUFrQkMsY0FBbEIsQ0FBYixFQUFnRDtBQUN2RU8sSUFBQUEsV0FBVyxFQUFFLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxJQUFYLEVBQWlCLFFBQWpCLEVBQTJCLEdBQTNCO0FBRDBELEdBQWhELEVBR3RCTCxPQUhzQixDQUdkLFFBSGMsRUFHSixHQUhJLEVBSXRCQSxPQUpzQixDQUlkLE9BSmMsRUFJTCxHQUpLLEVBS3RCQSxPQUxzQixDQUtkLE9BTGMsRUFLTCxHQUxLLENBQXpCLENBaEI2RCxDQXVCN0Q7QUFDQTs7QUFDQSxNQUFNTSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFDOUIsd0JBQ0U7QUFDRSxNQUFBLFNBQVMsRUFBRSx5QkFBRztBQUFFLGtDQUEwQlg7QUFBNUIsT0FBSCxDQURiO0FBRUUsTUFBQSxJQUFJLEVBQUVBLFlBQVksR0FBRyxHQUFILEdBQVNXLEtBQUssQ0FBQ0MsSUFGbkM7QUFHRSxNQUFBLE1BQU0sRUFBRVosWUFBWSxHQUFHLE9BQUgsR0FBYSxRQUhuQztBQUlFLE1BQUEsR0FBRyxFQUFDO0FBSk4sT0FJNkJXLEtBQUssQ0FBQ0UsUUFKbkMsQ0FERjtBQU9ELEdBUkQ7O0FBVUEsc0JBQ0U7QUFBSyxJQUFBLEtBQUssRUFBRWYsS0FBWjtBQUFtQixJQUFBLFNBQVMsRUFBRTtBQUE5QixLQUNHQyxVQUFVLGdCQUNULDZCQUFDLHNCQUFEO0FBQ0UsSUFBQSxPQUFPLEVBQUUsQ0FBQ2Usa0JBQUQsQ0FEWDtBQUVFLElBQUEsU0FBUyxFQUFFO0FBQUVDLE1BQUFBLElBQUksRUFBRUw7QUFBUixLQUZiO0FBR0UsSUFBQSxZQUFZLEVBQUVmO0FBSGhCLEtBSUVhLGdCQUpGLENBRFMsR0FRVEEsZ0JBVEosQ0FERjtBQWNELENBakREOztBQW1EQVosSUFBSSxDQUFDb0IsU0FBTCxHQUFpQjtBQUNmbEIsRUFBQUEsS0FBSyxFQUFFbUIsbUJBQVVDLE1BREY7QUFFZnJCLEVBQUFBLE9BQU8sRUFBRW9CLG1CQUFVRSxNQUZKO0FBR2ZwQixFQUFBQSxVQUFVLEVBQUVrQixtQkFBVUcsSUFIUDtBQUlmcEIsRUFBQUEsWUFBWSxFQUFFaUIsbUJBQVVHO0FBSlQsQ0FBakI7ZUFPZXhCLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHNhbml0aXplSHRtbCBmcm9tICdzYW5pdGl6ZS1odG1sLXJlYWN0J1xyXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bidcclxuaW1wb3J0IGdmbSBmcm9tICdyZW1hcmstZ2ZtJ1xyXG5cclxuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXHJcblxyXG5pbXBvcnQgeyB0cnVuY2F0ZSwgc2FmZVN0cmluZ1ZhbHVlIH0gZnJvbSAnaGVscGVycydcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5zY3NzJ1xyXG5cclxuY29uc3QgYWxsb3dlZE1hcmtkb3duVHlwZXMgPSBbXHJcbiAgJ3BhcmFncmFwaCcsXHJcbiAgJ3RleHQnLFxyXG4gICdicmVhaycsXHJcbiAgJ2VtcGhhc2lzJyxcclxuICAnc3Ryb25nJyxcclxuICAnbGluaycsXHJcbiAgJ2ltYWdlJyxcclxuICAnYmxvY2txdW90ZScsXHJcbiAgJ2RlbGV0ZScsXHJcbiAgJ2xpc3QnLFxyXG4gICdsaXN0SXRlbScsXHJcbiAgJ2hlYWRpbmcnLFxyXG4gICdjb2RlJyxcclxuICAndGhlbWF0aWNCcmVhaycsXHJcbiAgJ3RhYmxlJyxcclxuICAndGFibGVIZWFkJyxcclxuICAndGFibGVCb2R5JyxcclxuICAndGFibGVSb3cnLFxyXG4gICd0YWJsZUNlbGwnLFxyXG5dXHJcblxyXG5jb25zdCBUZXh0ID0gKHsgY29udGVudCwgc3R5bGUsIGlzTWFya2Rvd24sIHJlYWRPbmx5TW9kZSB9KSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uZCA9IHNhZmVTdHJpbmdWYWx1ZShjb250ZW50KVxyXG5cclxuICBpZiAodHlwZW9mIGlzTWFya2Rvd24gIT09ICdib29sZWFuJykge1xyXG4gICAgaXNNYXJrZG93biA9IGZhbHNlXHJcbiAgfVxyXG5cclxuICBsZXQgbWF4TGVuZ3RoTGltaXQgPSA2NDBcclxuICAvLyBKSVJBOiBodHRwczovL3NhcGppcmEud2RmLnNhcC5jb3JwL2Jyb3dzZS9TQVBNTENPTlYtNDkwNFxyXG4gIGlmIChpc01hcmtkb3duKSB7XHJcbiAgICAvLyBSZW1vdmUgbWFya2Rvd24gdGFncyBhbmQgcmVwbGFjZSBbTGluayBOYW1lIFRleHRdKGh0dHA6dXJsLi4uKSB3aXRoICdMaW5rIE5hbWUgVGV4dCcgb25seS5cclxuICAgIGNvbnN0IGRpc3BsYXlUZXh0ID0gcmVzcG9uZC5yZXBsYWNlKC9fX3xcXCp8I3woPzpcXFsoW15cXF1dKilcXF1cXChbXildKlxcKSkvZ20sICckMScpXHJcbiAgICAvLyBJbmNyZWFzZSB0aGUgbWF4IGxlbmd0aCBsaW1pdCB0byBpbmNsdWRlIGFueSBtYXJrZG93biAobGlua3MpIHN0cmluZ3MsIHRvIGF2b2lkIGxvc2luZyB0aGUgaHJlZiBzdHJpbmdzLlxyXG4gICAgbWF4TGVuZ3RoTGltaXQgKz0gTWF0aC5tYXgocmVzcG9uZC5sZW5ndGggLSBkaXNwbGF5VGV4dC5sZW5ndGgsIDApXHJcbiAgfVxyXG5cclxuICBjb25zdCBjb21waWxlZFJlc3BvbnNlID0gc2FuaXRpemVIdG1sKHRydW5jYXRlKHJlc3BvbmQsIG1heExlbmd0aExpbWl0KSwge1xyXG4gICAgYWxsb3dlZFRhZ3M6IFsnYicsICdpJywgJ2VtJywgJ3N0cm9uZycsICdhJ10sXHJcbiAgfSlcclxuICAgIC5yZXBsYWNlKC8mYW1wOy9nLCAnZycpXHJcbiAgICAucmVwbGFjZSgvJmx0Oy9nLCAnPCcpXHJcbiAgICAucmVwbGFjZSgvJmd0Oy9nLCAnPicpXHJcblxyXG4gIC8vIE1hcmtkb3duIGxpbmtzIG5lZWQgdG8gb3BlbiBpbiBuZXcgd2luZG93LlxyXG4gIC8vIEJDUDogaHR0cHM6Ly9zdXBwb3J0LndkZi5zYXAuY29ycC9zYXAvc3VwcG9ydC9tZXNzYWdlLzE5ODA0MDgyODlcclxuICBjb25zdCBMaW5rUmVuZGVyZXIgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxhXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjeCh7ICdDYWlBcHBCdXR0b24tLVJlYWRPbmx5JzogcmVhZE9ubHlNb2RlIH0pfVxyXG4gICAgICAgIGhyZWY9e3JlYWRPbmx5TW9kZSA/ICcjJyA6IHByb3BzLmhyZWZ9XHJcbiAgICAgICAgdGFyZ2V0PXtyZWFkT25seU1vZGUgPyAnX3NlbGYnIDogJ19ibGFuayd9XHJcbiAgICAgICAgcmVsPSdub29wZW5lciBub3JlZmVycmVyJz57cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgIDwvYT4pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17J1JlY2FzdEFwcFRleHQgQ2FpQXBwVGV4dCd9PlxyXG4gICAgICB7aXNNYXJrZG93biA/IChcclxuICAgICAgICA8UmVhY3RNYXJrZG93blxyXG4gICAgICAgICAgcGx1Z2lucz17W2dmbV19XHJcbiAgICAgICAgICByZW5kZXJlcnM9e3sgbGluazogTGlua1JlbmRlcmVyIH19XHJcbiAgICAgICAgICBhbGxvd2VkVHlwZXM9e2FsbG93ZWRNYXJrZG93blR5cGVzfVxyXG4gICAgICAgID57Y29tcGlsZWRSZXNwb25zZX1cclxuICAgICAgICA8L1JlYWN0TWFya2Rvd24+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgY29tcGlsZWRSZXNwb25zZVxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5UZXh0LnByb3BUeXBlcyA9IHtcclxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGlzTWFya2Rvd246IFByb3BUeXBlcy5ib29sLFxyXG4gIHJlYWRPbmx5TW9kZTogUHJvcFR5cGVzLmJvb2wsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRleHRcclxuIl19