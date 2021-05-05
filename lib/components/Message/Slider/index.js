"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.array.map.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./style.scss");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * TODO: STILL IN DEVELOPMENT BECAUSE NOT COMPATIBLE WITH IE11 YET
 */
var Slider = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Slider, _Component);

  var _super = _createSuper(Slider);

  function Slider() {
    var _this;

    (0, _classCallCheck2.default)(this, Slider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      index: 0,
      translateWidth: 0,
      canPrevious: false,
      canNext: false,
      noArrow: true
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "items", {});
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onClickPrevious", function () {
      _this.setState(function (prevState) {
        var previousItem = _this.items[prevState.index - 1].getBoundingClientRect();

        return {
          canPrevious: prevState.index - 1 > 0,
          canNext: prevState.index - 1 <= 0,
          translateWidth: Math.min(prevState.translateWidth + previousItem.width, 0),
          index: Math.max(prevState.index - 1, 0)
        };
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onClickNext", function () {
      var children = _this.props.children;
      var index = _this.state.index;

      var _this$content$getBoun = _this.content.getBoundingClientRect(),
          maxWidth = _this$content$getBoun.width;

      var previousItem = _this.items[index].getBoundingClientRect();

      var containerWidth = _this.container.getBoundingClientRect().width;

      if (_this.hasMaxElementsDisplayed()) {
        return;
      }

      _this.setState(function (prevState) {
        return {
          canNext: true,
          canPrevious: prevState.index + 1 > 0,
          translateWidth: Math.max(prevState.translateWidth - previousItem.width, -maxWidth + containerWidth),
          index: Math.min(prevState.index + 1, children.length - 1)
        };
      }, function () {
        return _this.setState({
          canNext: !_this.hasMaxElementsDisplayed()
        });
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "hasMaxElementsDisplayed", function () {
      var _this$state = _this.state,
          index = _this$state.index,
          translateWidth = _this$state.translateWidth;

      var _this$content$getBoun2 = _this.content.getBoundingClientRect(),
          maxWidth = _this$content$getBoun2.width;

      var previousItem = _this.items[index].getBoundingClientRect();

      var containerWidth = _this.container.getBoundingClientRect().width;

      return Math.max(translateWidth - previousItem.width, -maxWidth + containerWidth) >= translateWidth;
    });
    return _this;
  }

  (0, _createClass2.default)(Slider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.content.getBoundingClientRect().width > this.container.getBoundingClientRect().width) {
        this.setState({
          canNext: true,
          noArrow: false
        }); // eslint-disable-line react/no-did-mount-set-state
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          prevArrow = _this$props.prevArrow,
          nextArrow = _this$props.nextArrow,
          arrows = _this$props.arrows;
      var _this$state2 = this.state,
          translateWidth = _this$state2.translateWidth,
          canNext = _this$state2.canNext,
          canPrevious = _this$state2.canPrevious,
          noArrow = _this$state2.noArrow;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _classnames.default)('Slider', {
          contentNoArrow: noArrow
        }),
        ref: function ref(_ref3) {
          _this2.container = _ref3;
        }
      }, canPrevious && arrows && /*#__PURE__*/_react.default.createElement("div", {
        className: "arrow left",
        onClick: this.onClickPrevious
      }, prevArrow), canNext && arrows && /*#__PURE__*/_react.default.createElement("div", {
        className: "arrow right",
        onClick: this.onClickNext
      }, nextArrow), /*#__PURE__*/_react.default.createElement("div", {
        className: "content",
        style: {
          transform: "translateX(".concat(translateWidth, "px)")
        },
        ref: function ref(_ref2) {
          _this2.content = _ref2;
        }
      }, _react.default.Children.map(children, function (child, index) {
        return /*#__PURE__*/_react.default.cloneElement(child, {
          ref: function ref(_ref) {
            return _this2.items[index] = _ref;
          },
          style: _objectSpread(_objectSpread({}, child.props.style), {}, {
            padding: 5
          })
        });
      })));
    }
  }]);
  return Slider;
}(_react.Component);

Slider.propTypes = {
  arrows: _propTypes.default.bool,
  prevArrow: _propTypes.default.any,
  nextArrow: _propTypes.default.any
};
var _default = Slider;
exports.default = _default;