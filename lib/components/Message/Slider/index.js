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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01lc3NhZ2UvU2xpZGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbIlNsaWRlciIsImluZGV4IiwidHJhbnNsYXRlV2lkdGgiLCJjYW5QcmV2aW91cyIsImNhbk5leHQiLCJub0Fycm93Iiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJwcmV2aW91c0l0ZW0iLCJpdGVtcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIk1hdGgiLCJtaW4iLCJ3aWR0aCIsIm1heCIsImNoaWxkcmVuIiwicHJvcHMiLCJzdGF0ZSIsImNvbnRlbnQiLCJtYXhXaWR0aCIsImNvbnRhaW5lcldpZHRoIiwiY29udGFpbmVyIiwiaGFzTWF4RWxlbWVudHNEaXNwbGF5ZWQiLCJsZW5ndGgiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJhcnJvd3MiLCJjb250ZW50Tm9BcnJvdyIsInJlZiIsIm9uQ2xpY2tQcmV2aW91cyIsIm9uQ2xpY2tOZXh0IiwidHJhbnNmb3JtIiwiUmVhY3QiLCJDaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwiY2xvbmVFbGVtZW50Iiwic3R5bGUiLCJwYWRkaW5nIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsImFueSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtJQUNNQSxNOzs7Ozs7Ozs7Ozs7Ozs7d0ZBQ0k7QUFDTkMsTUFBQUEsS0FBSyxFQUFFLENBREQ7QUFFTkMsTUFBQUEsY0FBYyxFQUFFLENBRlY7QUFHTkMsTUFBQUEsV0FBVyxFQUFFLEtBSFA7QUFJTkMsTUFBQUEsT0FBTyxFQUFFLEtBSkg7QUFLTkMsTUFBQUEsT0FBTyxFQUFFO0FBTEgsSzt3RkFjQSxFO2tHQUVVLFlBQU07QUFDdEIsWUFBS0MsUUFBTCxDQUFjLFVBQUFDLFNBQVMsRUFBSTtBQUN6QixZQUFN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Q1YsT0FBTCxHQUFlVSxLQUFmO0FBQ0Q7QUFMSCxTQU9HSSxlQUFNQyxRQUFOLENBQWVDLEdBQWYsQ0FBbUJuQixRQUFuQixFQUE2QixVQUFDb0IsS0FBRCxFQUFRbEMsS0FBUjtBQUFBLDRCQUM1QitCLGVBQU1JLFlBQU4sQ0FBbUJELEtBQW5CLEVBQTBCO0FBQ3hCUCxVQUFBQSxHQUFHLEVBQUUsYUFBQUEsSUFBRztBQUFBLG1CQUFLLE1BQUksQ0FBQ25CLEtBQUwsQ0FBV1IsS0FBWCxJQUFvQjJCLElBQXpCO0FBQUEsV0FEZ0I7QUFFeEJTLFVBQUFBLEtBQUssa0NBQU9GLEtBQUssQ0FBQ25CLEtBQU4sQ0FBWXFCLEtBQW5CO0FBQTBCQyxZQUFBQSxPQUFPLEVBQUU7QUFBbkM7QUFGbUIsU0FBMUIsQ0FENEI7QUFBQSxPQUE3QixDQVBILENBbEJGLENBREY7QUFtQ0Q7OztFQTFHa0JDLGdCOztBQTZHckJ2QyxNQUFNLENBQUN3QyxTQUFQLEdBQW1CO0FBQ2pCZCxFQUFBQSxNQUFNLEVBQUVlLG1CQUFVQyxJQUREO0FBRWpCbEIsRUFBQUEsU0FBUyxFQUFFaUIsbUJBQVVFLEdBRko7QUFHakJsQixFQUFBQSxTQUFTLEVBQUVnQixtQkFBVUU7QUFISixDQUFuQjtlQU1lM0MsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5zY3NzJ1xyXG5cclxuLyoqXHJcbiAqIFRPRE86IFNUSUxMIElOIERFVkVMT1BNRU5UIEJFQ0FVU0UgTk9UIENPTVBBVElCTEUgV0lUSCBJRTExIFlFVFxyXG4gKi9cclxuY2xhc3MgU2xpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGluZGV4OiAwLFxyXG4gICAgdHJhbnNsYXRlV2lkdGg6IDAsXHJcbiAgICBjYW5QcmV2aW91czogZmFsc2UsXHJcbiAgICBjYW5OZXh0OiBmYWxzZSxcclxuICAgIG5vQXJyb3c6IHRydWUsXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XHJcbiAgICBpZiAodGhpcy5jb250ZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoID4gdGhpcy5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhbk5leHQ6IHRydWUsIG5vQXJyb3c6IGZhbHNlIH0pIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3Qvbm8tZGlkLW1vdW50LXNldC1zdGF0ZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXRlbXMgPSB7fVxyXG5cclxuICBvbkNsaWNrUHJldmlvdXMgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiB7XHJcbiAgICAgIGNvbnN0IHByZXZpb3VzSXRlbSA9IHRoaXMuaXRlbXNbcHJldlN0YXRlLmluZGV4IC0gMV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgY2FuUHJldmlvdXM6IHByZXZTdGF0ZS5pbmRleCAtIDEgPiAwLFxyXG4gICAgICAgIGNhbk5leHQ6IHByZXZTdGF0ZS5pbmRleCAtIDEgPD0gMCxcclxuICAgICAgICB0cmFuc2xhdGVXaWR0aDogTWF0aC5taW4ocHJldlN0YXRlLnRyYW5zbGF0ZVdpZHRoICsgcHJldmlvdXNJdGVtLndpZHRoLCAwKSxcclxuICAgICAgICBpbmRleDogTWF0aC5tYXgocHJldlN0YXRlLmluZGV4IC0gMSwgMCksXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvbkNsaWNrTmV4dCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcclxuICAgIGNvbnN0IHsgaW5kZXggfSA9IHRoaXMuc3RhdGVcclxuICAgIGNvbnN0IHsgd2lkdGg6IG1heFdpZHRoIH0gPSB0aGlzLmNvbnRlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgIGNvbnN0IHByZXZpb3VzSXRlbSA9IHRoaXMuaXRlbXNbaW5kZXhdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICBjb25zdCBjb250YWluZXJXaWR0aCA9IHRoaXMuY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoXHJcblxyXG4gICAgaWYgKHRoaXMuaGFzTWF4RWxlbWVudHNEaXNwbGF5ZWQoKSkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICBwcmV2U3RhdGUgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBjYW5OZXh0OiB0cnVlLFxyXG4gICAgICAgICAgY2FuUHJldmlvdXM6IHByZXZTdGF0ZS5pbmRleCArIDEgPiAwLFxyXG4gICAgICAgICAgdHJhbnNsYXRlV2lkdGg6IE1hdGgubWF4KFxyXG4gICAgICAgICAgICBwcmV2U3RhdGUudHJhbnNsYXRlV2lkdGggLSBwcmV2aW91c0l0ZW0ud2lkdGgsXHJcbiAgICAgICAgICAgIC1tYXhXaWR0aCArIGNvbnRhaW5lcldpZHRoLFxyXG4gICAgICAgICAgKSxcclxuICAgICAgICAgIGluZGV4OiBNYXRoLm1pbihwcmV2U3RhdGUuaW5kZXggKyAxLCBjaGlsZHJlbi5sZW5ndGggLSAxKSxcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgICgpID0+IHRoaXMuc2V0U3RhdGUoeyBjYW5OZXh0OiAhdGhpcy5oYXNNYXhFbGVtZW50c0Rpc3BsYXllZCgpIH0pLFxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgaGFzTWF4RWxlbWVudHNEaXNwbGF5ZWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGluZGV4LCB0cmFuc2xhdGVXaWR0aCB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgY29uc3QgeyB3aWR0aDogbWF4V2lkdGggfSA9IHRoaXMuY29udGVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgY29uc3QgcHJldmlvdXNJdGVtID0gdGhpcy5pdGVtc1tpbmRleF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gdGhpcy5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGhcclxuICAgIHJldHVybiAoXHJcbiAgICAgIE1hdGgubWF4KHRyYW5zbGF0ZVdpZHRoIC0gcHJldmlvdXNJdGVtLndpZHRoLCAtbWF4V2lkdGggKyBjb250YWluZXJXaWR0aCkgPj0gdHJhbnNsYXRlV2lkdGhcclxuICAgIClcclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBwcmV2QXJyb3csIG5leHRBcnJvdywgYXJyb3dzIH0gPSB0aGlzLnByb3BzXHJcbiAgICBjb25zdCB7IHRyYW5zbGF0ZVdpZHRoLCBjYW5OZXh0LCBjYW5QcmV2aW91cywgbm9BcnJvdyB9ID0gdGhpcy5zdGF0ZVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2N4KCdTbGlkZXInLCB7IGNvbnRlbnROb0Fycm93OiBub0Fycm93IH0pfVxyXG4gICAgICAgIHJlZj17cmVmID0+IHtcclxuICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gcmVmXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtjYW5QcmV2aW91c1xyXG4gICAgICAgICAgJiYgYXJyb3dzICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcnJvdyBsZWZ0JyBvbkNsaWNrPXt0aGlzLm9uQ2xpY2tQcmV2aW91c30+XHJcbiAgICAgICAgICAgIHtwcmV2QXJyb3d9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtjYW5OZXh0XHJcbiAgICAgICAgICAmJiBhcnJvd3MgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Fycm93IHJpZ2h0JyBvbkNsaWNrPXt0aGlzLm9uQ2xpY2tOZXh0fT5cclxuICAgICAgICAgICAge25leHRBcnJvd31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdjb250ZW50J1xyXG4gICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke3RyYW5zbGF0ZVdpZHRofXB4KWAgfX1cclxuICAgICAgICAgIHJlZj17cmVmID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50ID0gcmVmXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xyXG4gICAgICAgICAgICAgIHJlZjogcmVmID0+ICh0aGlzLml0ZW1zW2luZGV4XSA9IHJlZiksXHJcbiAgICAgICAgICAgICAgc3R5bGU6IHsgLi4uY2hpbGQucHJvcHMuc3R5bGUsIHBhZGRpbmc6IDUgfSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcblNsaWRlci5wcm9wVHlwZXMgPSB7XHJcbiAgYXJyb3dzOiBQcm9wVHlwZXMuYm9vbCxcclxuICBwcmV2QXJyb3c6IFByb3BUeXBlcy5hbnksXHJcbiAgbmV4dEFycm93OiBQcm9wVHlwZXMuYW55LFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXJcclxuIl19