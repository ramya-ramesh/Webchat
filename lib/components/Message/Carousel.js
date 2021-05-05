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