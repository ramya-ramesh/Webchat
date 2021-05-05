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