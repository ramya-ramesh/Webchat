"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.map.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSlick = _interopRequireDefault(require("react-slick"));

var _Card = _interopRequireDefault(require("./Card"));

var _arrows = require("../arrows");

var _helpers = require("../../helpers");

require("./style.scss");

var Carousel = function Carousel(_ref) {
  var content = _ref.content,
      sendMessage = _ref.sendMessage,
      readOnlyMode = _ref.readOnlyMode,
      isLastMessage = _ref.isLastMessage;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: 'RecastAppCarousel CaiAppCarousel'
  }, /*#__PURE__*/_react.default.createElement(_reactSlick.default, {
    arrows: true,
    prevArrow: /*#__PURE__*/_react.default.createElement(_arrows.PrevArrow, null),
    nextArrow: /*#__PURE__*/_react.default.createElement(_arrows.NextArrow, null),
    centerMode: true,
    centerPadding: "10px",
    speed: 200,
    infinite: false,
    draggable: false,
    slidesToScroll: 1,
    className: "Slider"
  }, (0, _helpers.safeArrayOfItem)(content).map(function (card, i) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_Card.default, {
      isLastMessage: isLastMessage,
      content: card,
      sendMessage: sendMessage,
      readOnlyMode: readOnlyMode
    }));
  })));
};

Carousel.propTypes = {
  isLastMessage: _propTypes.default.bool,
  content: _propTypes.default.array,
  sendMessage: _propTypes.default.func,
  readOnlyMode: _propTypes.default.bool
};
var _default = Carousel;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01lc3NhZ2UvQ2Fyb3VzZWwuanMiXSwibmFtZXMiOlsiQ2Fyb3VzZWwiLCJjb250ZW50Iiwic2VuZE1lc3NhZ2UiLCJyZWFkT25seU1vZGUiLCJpc0xhc3RNZXNzYWdlIiwibWFwIiwiY2FyZCIsImkiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwiYXJyYXkiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQTJEO0FBQUEsTUFBeERDLE9BQXdELFFBQXhEQSxPQUF3RDtBQUFBLE1BQS9DQyxXQUErQyxRQUEvQ0EsV0FBK0M7QUFBQSxNQUFsQ0MsWUFBa0MsUUFBbENBLFlBQWtDO0FBQUEsTUFBcEJDLGFBQW9CLFFBQXBCQSxhQUFvQjtBQUMxRSxzQkFDRTtBQUFLLElBQUEsU0FBUyxFQUFFO0FBQWhCLGtCQUNFLDZCQUFDLG1CQUFEO0FBQ0UsSUFBQSxNQUFNLE1BRFI7QUFFRSxJQUFBLFNBQVMsZUFBRSw2QkFBQyxpQkFBRCxPQUZiO0FBR0UsSUFBQSxTQUFTLGVBQUUsNkJBQUMsaUJBQUQsT0FIYjtBQUlFLElBQUEsVUFBVSxNQUpaO0FBS0UsSUFBQSxhQUFhLEVBQUMsTUFMaEI7QUFNRSxJQUFBLEtBQUssRUFBRSxHQU5UO0FBT0UsSUFBQSxRQUFRLEVBQUUsS0FQWjtBQVFFLElBQUEsU0FBUyxFQUFFLEtBUmI7QUFTRSxJQUFBLGNBQWMsRUFBRSxDQVRsQjtBQVVFLElBQUEsU0FBUyxFQUFDO0FBVlosS0FZRyw4QkFBZ0JILE9BQWhCLEVBQXlCSSxHQUF6QixDQUE2QixVQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSx3QkFDNUI7QUFBSyxNQUFBLEdBQUcsRUFBRUE7QUFBVixvQkFDRSw2QkFBQyxhQUFEO0FBQU0sTUFBQSxhQUFhLEVBQUVILGFBQXJCO0FBQW9DLE1BQUEsT0FBTyxFQUFFRSxJQUE3QztBQUFtRCxNQUFBLFdBQVcsRUFBRUosV0FBaEU7QUFBNkUsTUFBQSxZQUFZLEVBQUVDO0FBQTNGLE1BREYsQ0FENEI7QUFBQSxHQUE3QixDQVpILENBREYsQ0FERjtBQXNCRCxDQXZCRDs7QUF5QkFILFFBQVEsQ0FBQ1EsU0FBVCxHQUFxQjtBQUNuQkosRUFBQUEsYUFBYSxFQUFFSyxtQkFBVUMsSUFETjtBQUVuQlQsRUFBQUEsT0FBTyxFQUFFUSxtQkFBVUUsS0FGQTtBQUduQlQsRUFBQUEsV0FBVyxFQUFFTyxtQkFBVUcsSUFISjtBQUluQlQsRUFBQUEsWUFBWSxFQUFFTSxtQkFBVUM7QUFKTCxDQUFyQjtlQU9lVixRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCBTbGlkZXIgZnJvbSAncmVhY3Qtc2xpY2snXHJcblxyXG5pbXBvcnQgQ2FyZCBmcm9tICcuL0NhcmQnXHJcbmltcG9ydCB7IFByZXZBcnJvdywgTmV4dEFycm93IH0gZnJvbSAnY29tcG9uZW50cy9hcnJvd3MnXHJcbmltcG9ydCB7IHNhZmVBcnJheU9mSXRlbSB9IGZyb20gJ2hlbHBlcnMnXHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuc2NzcydcclxuXHJcbmNvbnN0IENhcm91c2VsID0gKHsgY29udGVudCwgc2VuZE1lc3NhZ2UsIHJlYWRPbmx5TW9kZSwgaXNMYXN0TWVzc2FnZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXsnUmVjYXN0QXBwQ2Fyb3VzZWwgQ2FpQXBwQ2Fyb3VzZWwnfT5cclxuICAgICAgPFNsaWRlclxyXG4gICAgICAgIGFycm93c1xyXG4gICAgICAgIHByZXZBcnJvdz17PFByZXZBcnJvdyAvPn1cclxuICAgICAgICBuZXh0QXJyb3c9ezxOZXh0QXJyb3cgLz59XHJcbiAgICAgICAgY2VudGVyTW9kZVxyXG4gICAgICAgIGNlbnRlclBhZGRpbmc9JzEwcHgnXHJcbiAgICAgICAgc3BlZWQ9ezIwMH1cclxuICAgICAgICBpbmZpbml0ZT17ZmFsc2V9XHJcbiAgICAgICAgZHJhZ2dhYmxlPXtmYWxzZX1cclxuICAgICAgICBzbGlkZXNUb1Njcm9sbD17MX1cclxuICAgICAgICBjbGFzc05hbWU9J1NsaWRlcidcclxuICAgICAgPlxyXG4gICAgICAgIHtzYWZlQXJyYXlPZkl0ZW0oY29udGVudCkubWFwKChjYXJkLCBpKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17aX0+XHJcbiAgICAgICAgICAgIDxDYXJkIGlzTGFzdE1lc3NhZ2U9e2lzTGFzdE1lc3NhZ2V9IGNvbnRlbnQ9e2NhcmR9IHNlbmRNZXNzYWdlPXtzZW5kTWVzc2FnZX0gcmVhZE9ubHlNb2RlPXtyZWFkT25seU1vZGV9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9TbGlkZXI+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbkNhcm91c2VsLnByb3BUeXBlcyA9IHtcclxuICBpc0xhc3RNZXNzYWdlOiBQcm9wVHlwZXMuYm9vbCxcclxuICBjb250ZW50OiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgc2VuZE1lc3NhZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gIHJlYWRPbmx5TW9kZTogUHJvcFR5cGVzLmJvb2wsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsXHJcbiJdfQ==