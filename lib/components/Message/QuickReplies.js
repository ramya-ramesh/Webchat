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

var _reactSlick = _interopRequireDefault(require("react-slick"));

var _sum = _interopRequireDefault(require("ramda/es/sum"));

var _map = _interopRequireDefault(require("ramda/es/map"));

var _values = _interopRequireDefault(require("ramda/es/values"));

var _classnames = _interopRequireDefault(require("classnames"));

var _helpers = require("../../helpers");

var _Text = _interopRequireDefault(require("./Text"));

var _arrows = require("../arrows");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var QuickReplies = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(QuickReplies, _Component);

  var _super = _createSuper(QuickReplies);

  function QuickReplies() {
    var _this;

    (0, _classCallCheck2.default)(this, QuickReplies);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      displayQuickReplies: _this.props.isLastMessage,
      showArrow: true
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "buttons", {});
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "_messageHasAlreadyBeenSent", false);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "doSendMessage", function (message) {
      // BCP https://support.wdf.sap.corp/sap/support/message/2070183780
      // Handle double click on slow systems
      // Once the _messageHasAlreadyBeenSent is true,
      // then one button click has already been send.
      if (!_this._messageHasAlreadyBeenSent) {
        _this._messageHasAlreadyBeenSent = true;

        _this.setState({
          displayQuickReplies: false
        }, function () {
          _this.props.sendMessage(message);
        });
      }
    });
    return _this;
  }

  (0, _createClass2.default)(QuickReplies, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var widthQuickReplies = (0, _sum.default)((0, _values.default)((0, _map.default)(function (button) {
        var dimensions = button.getBoundingClientRect();
        return dimensions.width;
      }, this.buttons)));

      if (widthQuickReplies <= 270) {
        this.setState({
          showArrow: false
        }); // eslint-disable-line react/no-did-mount-set-state
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          content = _this$props.content,
          style = _this$props.style,
          isMarkdown = _this$props.isMarkdown,
          readOnlyMode = _this$props.readOnlyMode;
      var _this$state = this.state,
          displayQuickReplies = _this$state.displayQuickReplies,
          showArrow = _this$state.showArrow;
      var title = content.title,
          buttons = content.buttons;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "RecastAppQuickReplies CaiAppQuickReplies",
        ref: function ref(_ref2) {
          _this2.container = _ref2;
        }
      }, /*#__PURE__*/_react.default.createElement(_Text.default, {
        content: title,
        isMarkdown: isMarkdown,
        style: style
      }), displayQuickReplies && buttons && !!buttons.length && /*#__PURE__*/_react.default.createElement(_reactSlick.default, {
        arrows: showArrow,
        variableWidth: true,
        speed: 200,
        infinite: false,
        draggable: false,
        prevArrow: /*#__PURE__*/_react.default.createElement(_arrows.PrevArrow, null),
        nextArrow: /*#__PURE__*/_react.default.createElement(_arrows.NextArrow, null),
        className: "RecastAppSlider RecastAppQuickReplies--slider CaiAppSlider CaiAppQuickReplies--slider"
      }, (0, _helpers.safeArrayOfItem)(buttons).map(function (b, i) {
        return /*#__PURE__*/_react.default.createElement("div", {
          key: i
        }, /*#__PURE__*/_react.default.createElement("div", {
          ref: function ref(_ref) {
            _this2.buttons[i] = _ref;
          },
          title: b.title.length > 20 ? b.title : null,
          className: (0, _classnames.default)('RecastAppQuickReplies--button CaiAppQuickReplies--button', {
            'CaiAppQuickReplies--ReadOnly': readOnlyMode
          }),
          onClick: function onClick() {
            return _this2.doSendMessage({
              type: 'quickReply',
              content: (0, _helpers.validButtonContent)(b)
            });
          },
          style: {
            border: "1px solid ".concat(style.accentColor),
            color: style.accentColor
          }
        }, (0, _helpers.truncate)(b.title, 20)));
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      return {
        displayQuickReplies: props.isLastMessage
      };
    }
  }]);
  return QuickReplies;
}(_react.Component);

QuickReplies.propTypes = {
  style: _propTypes.default.object,
  content: _propTypes.default.object,
  sendMessage: _propTypes.default.func,
  readOnlyMode: _propTypes.default.bool
};
var _default = QuickReplies;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01lc3NhZ2UvUXVpY2tSZXBsaWVzLmpzIl0sIm5hbWVzIjpbIlF1aWNrUmVwbGllcyIsImRpc3BsYXlRdWlja1JlcGxpZXMiLCJwcm9wcyIsImlzTGFzdE1lc3NhZ2UiLCJzaG93QXJyb3ciLCJtZXNzYWdlIiwiX21lc3NhZ2VIYXNBbHJlYWR5QmVlblNlbnQiLCJzZXRTdGF0ZSIsInNlbmRNZXNzYWdlIiwid2lkdGhRdWlja1JlcGxpZXMiLCJidXR0b24iLCJkaW1lbnNpb25zIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJidXR0b25zIiwiY29udGVudCIsInN0eWxlIiwiaXNNYXJrZG93biIsInJlYWRPbmx5TW9kZSIsInN0YXRlIiwidGl0bGUiLCJyZWYiLCJjb250YWluZXIiLCJsZW5ndGgiLCJtYXAiLCJiIiwiaSIsImRvU2VuZE1lc3NhZ2UiLCJ0eXBlIiwiYm9yZGVyIiwiYWNjZW50Q29sb3IiLCJjb2xvciIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImZ1bmMiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQUNBOzs7Ozs7SUFFTUEsWTs7Ozs7Ozs7Ozs7Ozs7O3dGQUNJO0FBQ05DLE1BQUFBLG1CQUFtQixFQUFFLE1BQUtDLEtBQUwsQ0FBV0MsYUFEMUI7QUFFTkMsTUFBQUEsU0FBUyxFQUFFO0FBRkwsSzswRkF3QkcsRTs2R0FFbUIsSztnR0FDZCxVQUFBQyxPQUFPLEVBQUk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFJLENBQUMsTUFBS0MsMEJBQVYsRUFBc0M7QUFDcEMsY0FBS0EsMEJBQUwsR0FBa0MsSUFBbEM7O0FBQ0EsY0FBS0MsUUFBTCxDQUFjO0FBQUVOLFVBQUFBLG1CQUFtQixFQUFF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REQ7QUFFTEMsWUFBQUEsS0FBSyxFQUFFZixLQUFLLENBQUNjO0FBRlI7QUFQVCxXQVlHLHVCQUFTTCxDQUFDLENBQUNMLEtBQVgsRUFBa0IsRUFBbEIsQ0FaSCxDQURGLENBRDRCO0FBQUEsT0FBN0IsQ0FWSCxDQVhKLENBREY7QUE0Q0Q7Ozs2Q0FwRmdDbEIsSyxFQUFPaUIsSyxFQUFPO0FBQzdDLGFBQU87QUFBRWxCLFFBQUFBLG1CQUFtQixFQUFFQyxLQUFLLENBQUNDO0FBQTdCLE9BQVA7QUFDRDs7O0VBUndCNkIsZ0I7O0FBNkYzQmhDLFlBQVksQ0FBQ2lDLFNBQWIsR0FBeUI7QUFDdkJqQixFQUFBQSxLQUFLLEVBQUVrQixtQkFBVUMsTUFETTtBQUV2QnBCLEVBQUFBLE9BQU8sRUFBRW1CLG1CQUFVQyxNQUZJO0FBR3ZCM0IsRUFBQUEsV0FBVyxFQUFFMEIsbUJBQVVFLElBSEE7QUFJdkJsQixFQUFBQSxZQUFZLEVBQUVnQixtQkFBVUc7QUFKRCxDQUF6QjtlQU9lckMsWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JlYWN0LXNsaWNrJ1xyXG5pbXBvcnQgc3VtIGZyb20gJ3JhbWRhL2VzL3N1bSdcclxuaW1wb3J0IG1hcCBmcm9tICdyYW1kYS9lcy9tYXAnXHJcbmltcG9ydCB2YWx1ZXMgZnJvbSAncmFtZGEvZXMvdmFsdWVzJ1xyXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcclxuXHJcbmltcG9ydCB7IHRydW5jYXRlLCBzYWZlQXJyYXlPZkl0ZW0sIHZhbGlkQnV0dG9uQ29udGVudCB9IGZyb20gJ2hlbHBlcnMnXHJcblxyXG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQnXHJcbmltcG9ydCB7IFByZXZBcnJvdywgTmV4dEFycm93IH0gZnJvbSAnY29tcG9uZW50cy9hcnJvd3MnXHJcblxyXG5jbGFzcyBRdWlja1JlcGxpZXMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgZGlzcGxheVF1aWNrUmVwbGllczogdGhpcy5wcm9wcy5pc0xhc3RNZXNzYWdlLFxyXG4gICAgc2hvd0Fycm93OiB0cnVlLFxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyAocHJvcHMsIHN0YXRlKSB7XHJcbiAgICByZXR1cm4geyBkaXNwbGF5UXVpY2tSZXBsaWVzOiBwcm9wcy5pc0xhc3RNZXNzYWdlIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcclxuICAgIGNvbnN0IHdpZHRoUXVpY2tSZXBsaWVzID0gc3VtKFxyXG4gICAgICB2YWx1ZXMoXHJcbiAgICAgICAgbWFwKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICBjb25zdCBkaW1lbnNpb25zID0gYnV0dG9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICAgICAgICByZXR1cm4gZGltZW5zaW9ucy53aWR0aFxyXG4gICAgICAgIH0sIHRoaXMuYnV0dG9ucyksXHJcbiAgICAgICksXHJcbiAgICApXHJcblxyXG4gICAgaWYgKHdpZHRoUXVpY2tSZXBsaWVzIDw9IDI3MCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0Fycm93OiBmYWxzZSB9KSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L25vLWRpZC1tb3VudC1zZXQtc3RhdGVcclxuICAgIH1cclxuICB9XHJcblxyXG4gICBidXR0b25zID0ge31cclxuXHJcbiAgIF9tZXNzYWdlSGFzQWxyZWFkeUJlZW5TZW50ID0gZmFsc2VcclxuICBkb1NlbmRNZXNzYWdlID0gbWVzc2FnZSA9PiB7XHJcbiAgICAvLyBCQ1AgaHR0cHM6Ly9zdXBwb3J0LndkZi5zYXAuY29ycC9zYXAvc3VwcG9ydC9tZXNzYWdlLzIwNzAxODM3ODBcclxuICAgIC8vIEhhbmRsZSBkb3VibGUgY2xpY2sgb24gc2xvdyBzeXN0ZW1zXHJcbiAgICAvLyBPbmNlIHRoZSBfbWVzc2FnZUhhc0FscmVhZHlCZWVuU2VudCBpcyB0cnVlLFxyXG4gICAgLy8gdGhlbiBvbmUgYnV0dG9uIGNsaWNrIGhhcyBhbHJlYWR5IGJlZW4gc2VuZC5cclxuICAgIGlmICghdGhpcy5fbWVzc2FnZUhhc0FscmVhZHlCZWVuU2VudCkge1xyXG4gICAgICB0aGlzLl9tZXNzYWdlSGFzQWxyZWFkeUJlZW5TZW50ID0gdHJ1ZVxyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZGlzcGxheVF1aWNrUmVwbGllczogZmFsc2UgfSwgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuc2VuZE1lc3NhZ2UobWVzc2FnZSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICBjb25zdCB7IGNvbnRlbnQsIHN0eWxlLCBpc01hcmtkb3duLCByZWFkT25seU1vZGUgfSA9IHRoaXMucHJvcHNcclxuICAgIGNvbnN0IHsgZGlzcGxheVF1aWNrUmVwbGllcywgc2hvd0Fycm93IH0gPSB0aGlzLnN0YXRlXHJcbiAgICBjb25zdCB7IHRpdGxlLCBidXR0b25zIH0gPSBjb250ZW50XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT0nUmVjYXN0QXBwUXVpY2tSZXBsaWVzIENhaUFwcFF1aWNrUmVwbGllcydcclxuICAgICAgICByZWY9e3JlZiA9PiB7XHJcbiAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHJlZlxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8VGV4dCBjb250ZW50PXt0aXRsZX0gaXNNYXJrZG93bj17aXNNYXJrZG93bn0gc3R5bGU9e3N0eWxlfSAvPlxyXG5cclxuICAgICAgICB7ZGlzcGxheVF1aWNrUmVwbGllc1xyXG4gICAgICAgICAgJiYgYnV0dG9uc1xyXG4gICAgICAgICAgJiYgISFidXR0b25zLmxlbmd0aCAmJiAoXHJcbiAgICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICAgIGFycm93cz17c2hvd0Fycm93fVxyXG4gICAgICAgICAgICB2YXJpYWJsZVdpZHRoXHJcbiAgICAgICAgICAgIHNwZWVkPXsyMDB9XHJcbiAgICAgICAgICAgIGluZmluaXRlPXtmYWxzZX1cclxuICAgICAgICAgICAgZHJhZ2dhYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgcHJldkFycm93PXs8UHJldkFycm93IC8+fVxyXG4gICAgICAgICAgICBuZXh0QXJyb3c9ezxOZXh0QXJyb3cgLz59XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nUmVjYXN0QXBwU2xpZGVyIFJlY2FzdEFwcFF1aWNrUmVwbGllcy0tc2xpZGVyIENhaUFwcFNsaWRlciBDYWlBcHBRdWlja1JlcGxpZXMtLXNsaWRlcidcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3NhZmVBcnJheU9mSXRlbShidXR0b25zKS5tYXAoKGIsIGkpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIHJlZj17cmVmID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbnNbaV0gPSByZWZcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgdGl0bGU9e2IudGl0bGUubGVuZ3RoID4gMjAgPyBiLnRpdGxlIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeCgnUmVjYXN0QXBwUXVpY2tSZXBsaWVzLS1idXR0b24gQ2FpQXBwUXVpY2tSZXBsaWVzLS1idXR0b24nLCB7ICdDYWlBcHBRdWlja1JlcGxpZXMtLVJlYWRPbmx5JzogcmVhZE9ubHlNb2RlIH0pfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmRvU2VuZE1lc3NhZ2UoeyB0eXBlOiAncXVpY2tSZXBseScsIGNvbnRlbnQ6IHZhbGlkQnV0dG9uQ29udGVudChiKSB9KX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtzdHlsZS5hY2NlbnRDb2xvcn1gLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBzdHlsZS5hY2NlbnRDb2xvcixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3RydW5jYXRlKGIudGl0bGUsIDIwKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuUXVpY2tSZXBsaWVzLnByb3BUeXBlcyA9IHtcclxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBjb250ZW50OiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIHNlbmRNZXNzYWdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICByZWFkT25seU1vZGU6IFByb3BUeXBlcy5ib29sLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBRdWlja1JlcGxpZXNcclxuIl19