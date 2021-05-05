"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.array.slice.js");

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

var _reduceRight = _interopRequireDefault(require("ramda/es/reduceRight"));

var _pathOr = _interopRequireDefault(require("ramda/es/pathOr"));

var _Message = _interopRequireDefault(require("../Message"));

var _isTyping = _interopRequireDefault(require("../Message/isTyping"));

require("./style.scss");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Live = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Live, _Component);

  var _super = _createSuper(Live);

  function Live() {
    var _this;

    (0, _classCallCheck2.default)(this, Live);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      showTyping: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleScroll", function () {
      if (!_this.messagesList) {
        return;
      }

      var onScrollBottom = _this.props.onScrollBottom;
      var _this$messagesList = _this.messagesList,
          clientHeight = _this$messagesList.clientHeight,
          scrollTop = _this$messagesList.scrollTop,
          scrollHeight = _this$messagesList.scrollHeight;
      var isScrollBottom = scrollHeight - clientHeight === scrollTop;
      onScrollBottom(isScrollBottom);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onImageLoaded", function () {
      if (_this.messagesList) {
        _this.messagesList.scrollTop = _this.messagesList.scrollHeight;
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "fmtMessages", function () {
      return (0, _reduceRight.default)(function (cur, acc) {
        var nextMessage = acc[0];
        cur.displayIcon = !nextMessage || nextMessage.participant.isBot !== cur.participant.isBot;
        acc.unshift(cur);
        return acc;
      }, [], _this.props.messages);
    });
    return _this;
  }

  (0, _createClass2.default)(Live, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.messagesList) {
        this.messagesList.scrollTop = this.messagesList.scrollHeight;
      }

      window.addEventListener('resize', this.handleScroll);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.messages.length !== this.props.messages.length) {
        if (this.messagesList) {
          this.messagesList.scrollTop = this.messagesList.scrollHeight;
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleScroll);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          messages = _this$props.messages,
          sendMessage = _this$props.sendMessage,
          preferences = _this$props.preferences,
          _onRetrySendMessage = _this$props.onRetrySendMessage,
          _onCancelSendMessage = _this$props.onCancelSendMessage,
          containerMessagesStyle = _this$props.containerMessagesStyle,
          showInfo = _this$props.showInfo,
          onClickShowInfo = _this$props.onClickShowInfo,
          readOnlyMode = _this$props.readOnlyMode;
      var showTyping = this.state.showTyping;
      var lastMessage = messages.slice(-1)[0];
      var isBot = (0, _pathOr.default)(false, ['participant', 'isBot'], lastMessage);
      var delayVal = (0, _pathOr.default)(5, ['attachment', 'delay'], lastMessage); // add 2 seconds to the delay to allow for api lag.
      // See https://sapjira.wdf.sap.corp/browse/SAPMLCONV-13428 for requirements

      var maxDelay = ((typeof delayVal === 'string' ? parseFloat(delayVal) : delayVal) + 2) * 1000;
      var timeoutAmount = isBot ? maxDelay : 20000;
      var sendMessagePromiseCondition = lastMessage && ((0, _pathOr.default)(false, ['data', 'hasDelay'], lastMessage) ? (0, _pathOr.default)(false, ['data', 'hasNextMessage'], lastMessage) : lastMessage.participant.isBot === false);
      var pollMessageCondition = lastMessage && (0, _pathOr.default)(false, ['attachment', 'delay'], lastMessage);
      var shouldDisplayTyping = !!(lastMessage && (sendMessagePromiseCondition || pollMessageCondition) && !lastMessage.retry && !lastMessage.isSending && showTyping);
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "RecastAppLive CaiAppLive",
        ref: function ref(_ref) {
          return _this2.messagesList = _ref;
        },
        onScroll: this.handleScroll,
        style: containerMessagesStyle
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "RecastAppLive--message-container CaiAppLive--message-container"
      }, this.fmtMessages().map(function (message, index) {
        return /*#__PURE__*/_react.default.createElement(_Message.default, {
          key: message.id,
          message: message,
          sendMessage: sendMessage,
          preferences: preferences,
          onImageLoaded: _this2.onImageLoaded,
          isLastMessage: messages.length === index + 1,
          retry: message.retry,
          isSending: message.isSending,
          onRetrySendMessage: function onRetrySendMessage() {
            return _onRetrySendMessage(message);
          },
          onCancelSendMessage: function onCancelSendMessage() {
            return _onCancelSendMessage(message);
          },
          showInfo: showInfo,
          onClickShowInfo: onClickShowInfo,
          error: message.error,
          readOnlyMode: readOnlyMode
        });
      }), shouldDisplayTyping && /*#__PURE__*/_react.default.createElement(_isTyping.default, {
        onImageLoaded: this.onImageLoaded,
        image: preferences.botPicture,
        callAfterTimeout: function callAfterTimeout() {
          return _this2.setState({
            showTyping: false
          });
        },
        timeout: timeoutAmount
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.messages.length !== state.msgLength) {
        // only show the busy indicate if the count increase.
        // (on error the cancel will remove the message, so we do not want the busy indicator)
        return {
          showTyping: props.messages.length > state.msgLength,
          msgLength: props.messages.length
        };
      }

      return null;
    }
  }]);
  return Live;
}(_react.Component);

Live.propTypes = {
  messages: _propTypes.default.array,
  sendMessage: _propTypes.default.func,
  preferences: _propTypes.default.object,
  onRetrySendMessage: _propTypes.default.func,
  onCancelSendMessage: _propTypes.default.func,
  showInfo: _propTypes.default.bool,
  readOnlyMode: _propTypes.default.bool
};
var _default = Live;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0xpdmUvaW5kZXguanMiXSwibmFtZXMiOlsiTGl2ZSIsInNob3dUeXBpbmciLCJtZXNzYWdlc0xpc3QiLCJvblNjcm9sbEJvdHRvbSIsInByb3BzIiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiaXNTY3JvbGxCb3R0b20iLCJjdXIiLCJhY2MiLCJuZXh0TWVzc2FnZSIsImRpc3BsYXlJY29uIiwicGFydGljaXBhbnQiLCJpc0JvdCIsInVuc2hpZnQiLCJtZXNzYWdlcyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVTY3JvbGwiLCJwcmV2UHJvcHMiLCJsZW5ndGgiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2VuZE1lc3NhZ2UiLCJwcmVmZXJlbmNlcyIsIm9uUmV0cnlTZW5kTWVzc2FnZSIsIm9uQ2FuY2VsU2VuZE1lc3NhZ2UiLCJjb250YWluZXJNZXNzYWdlc1N0eWxlIiwic2hvd0luZm8iLCJvbkNsaWNrU2hvd0luZm8iLCJyZWFkT25seU1vZGUiLCJzdGF0ZSIsImxhc3RNZXNzYWdlIiwic2xpY2UiLCJkZWxheVZhbCIsIm1heERlbGF5IiwicGFyc2VGbG9hdCIsInRpbWVvdXRBbW91bnQiLCJzZW5kTWVzc2FnZVByb21pc2VDb25kaXRpb24iLCJwb2xsTWVzc2FnZUNvbmRpdGlvbiIsInNob3VsZERpc3BsYXlUeXBpbmciLCJyZXRyeSIsImlzU2VuZGluZyIsInJlZiIsImZtdE1lc3NhZ2VzIiwibWFwIiwibWVzc2FnZSIsImluZGV4IiwiaWQiLCJvbkltYWdlTG9hZGVkIiwiZXJyb3IiLCJib3RQaWN0dXJlIiwic2V0U3RhdGUiLCJtc2dMZW5ndGgiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheSIsImZ1bmMiLCJvYmplY3QiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FB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QUFFb0M7QUFKWCxRQXJCSixDQU5GLENBREY7QUFzQ0Q7Ozs2Q0FuSWdDakMsSyxFQUFPMkIsSyxFQUFPO0FBQzdDLFVBQUkzQixLQUFLLENBQUNZLFFBQU4sQ0FBZUssTUFBZixLQUEwQlUsS0FBSyxDQUFDc0IsU0FBcEMsRUFBK0M7QUFDN0M7QUFDQTtBQUNBLGVBQU87QUFBRXBELFVBQUFBLFVBQVUsRUFBRUcsS0FBSyxDQUFDWSxRQUFOLENBQWVLLE1BQWYsR0FBd0JVLEtBQUssQ0FBQ3NCLFNBQTVDO0FBQXVEQSxVQUFBQSxTQUFTLEVBQUVqRCxLQUFLLENBQUNZLFFBQU4sQ0FBZUs7QUFBakYsU0FBUDtBQUNEOztBQUNELGFBQU8sSUFBUDtBQUNEOzs7RUFYZ0JpQyxnQjs7QUEwSW5CdEQsSUFBSSxDQUFDdUQsU0FBTCxHQUFpQjtBQUNmdkMsRUFBQUEsUUFBUSxFQUFFd0MsbUJBQVVDLEtBREw7QUFFZmxDLEVBQUFBLFdBQVcsRUFBRWlDLG1CQUFVRSxJQUZSO0FBR2ZsQyxFQUFBQSxXQUFXLEVBQUVnQyxtQkFBVUcsTUFIUjtBQUlmbEMsRUFBQUEsa0JBQWtCLEVBQUUrQixtQkFBVUUsSUFKZjtBQUtmaEMsRUFBQUEsbUJBQW1CLEVBQUU4QixtQkFBVUUsSUFMaEI7QUFNZjlCLEVBQUFBLFFBQVEsRUFBRTRCLG1CQUFVSSxJQU5MO0FBT2Y5QixFQUFBQSxZQUFZLEVBQUUwQixtQkFBVUk7QUFQVCxDQUFqQjtlQVVlNUQsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgcmVkdWNlUmlnaHQgZnJvbSAncmFtZGEvZXMvcmVkdWNlUmlnaHQnXHJcbmltcG9ydCBwYXRoT3IgZnJvbSAncmFtZGEvZXMvcGF0aE9yJ1xyXG5cclxuaW1wb3J0IE1lc3NhZ2UgZnJvbSAnY29tcG9uZW50cy9NZXNzYWdlJ1xyXG5pbXBvcnQgSXNUeXBpbmcgZnJvbSAnY29tcG9uZW50cy9NZXNzYWdlL2lzVHlwaW5nJ1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnXHJcblxyXG5jbGFzcyBMaXZlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIHNob3dUeXBpbmc6IGZhbHNlLFxyXG4gIH1cclxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIChwcm9wcywgc3RhdGUpIHtcclxuICAgIGlmIChwcm9wcy5tZXNzYWdlcy5sZW5ndGggIT09IHN0YXRlLm1zZ0xlbmd0aCkge1xyXG4gICAgICAvLyBvbmx5IHNob3cgdGhlIGJ1c3kgaW5kaWNhdGUgaWYgdGhlIGNvdW50IGluY3JlYXNlLlxyXG4gICAgICAvLyAob24gZXJyb3IgdGhlIGNhbmNlbCB3aWxsIHJlbW92ZSB0aGUgbWVzc2FnZSwgc28gd2UgZG8gbm90IHdhbnQgdGhlIGJ1c3kgaW5kaWNhdG9yKVxyXG4gICAgICByZXR1cm4geyBzaG93VHlwaW5nOiBwcm9wcy5tZXNzYWdlcy5sZW5ndGggPiBzdGF0ZS5tc2dMZW5ndGgsIG1zZ0xlbmd0aDogcHJvcHMubWVzc2FnZXMubGVuZ3RoIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcclxuICAgIGlmICh0aGlzLm1lc3NhZ2VzTGlzdCkge1xyXG4gICAgICB0aGlzLm1lc3NhZ2VzTGlzdC5zY3JvbGxUb3AgPSB0aGlzLm1lc3NhZ2VzTGlzdC5zY3JvbGxIZWlnaHRcclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVNjcm9sbClcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSAocHJldlByb3BzKSB7XHJcbiAgICBpZiAocHJldlByb3BzLm1lc3NhZ2VzLmxlbmd0aCAhPT0gdGhpcy5wcm9wcy5tZXNzYWdlcy5sZW5ndGgpIHtcclxuICAgICAgaWYgKHRoaXMubWVzc2FnZXNMaXN0KSB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlc0xpc3Quc2Nyb2xsVG9wID0gdGhpcy5tZXNzYWdlc0xpc3Quc2Nyb2xsSGVpZ2h0XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVNjcm9sbClcclxuICB9XHJcblxyXG4gIGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgIGlmICghdGhpcy5tZXNzYWdlc0xpc3QpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBvblNjcm9sbEJvdHRvbSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgY29uc3QgeyBjbGllbnRIZWlnaHQsIHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0IH0gPSB0aGlzLm1lc3NhZ2VzTGlzdFxyXG5cclxuICAgIGNvbnN0IGlzU2Nyb2xsQm90dG9tID0gc2Nyb2xsSGVpZ2h0IC0gY2xpZW50SGVpZ2h0ID09PSBzY3JvbGxUb3BcclxuICAgIG9uU2Nyb2xsQm90dG9tKGlzU2Nyb2xsQm90dG9tKVxyXG4gIH1cclxuXHJcbiAgb25JbWFnZUxvYWRlZCA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLm1lc3NhZ2VzTGlzdCkge1xyXG4gICAgICB0aGlzLm1lc3NhZ2VzTGlzdC5zY3JvbGxUb3AgPSB0aGlzLm1lc3NhZ2VzTGlzdC5zY3JvbGxIZWlnaHRcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZtdE1lc3NhZ2VzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHJlZHVjZVJpZ2h0KFxyXG4gICAgICAoY3VyLCBhY2MpID0+IHtcclxuICAgICAgICBjb25zdCBuZXh0TWVzc2FnZSA9IGFjY1swXVxyXG4gICAgICAgIGN1ci5kaXNwbGF5SWNvbiA9ICFuZXh0TWVzc2FnZSB8fCBuZXh0TWVzc2FnZS5wYXJ0aWNpcGFudC5pc0JvdCAhPT0gY3VyLnBhcnRpY2lwYW50LmlzQm90XHJcbiAgICAgICAgYWNjLnVuc2hpZnQoY3VyKVxyXG4gICAgICAgIHJldHVybiBhY2NcclxuICAgICAgfSxcclxuICAgICAgW10sXHJcbiAgICAgIHRoaXMucHJvcHMubWVzc2FnZXMsXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBtZXNzYWdlcyxcclxuICAgICAgc2VuZE1lc3NhZ2UsXHJcbiAgICAgIHByZWZlcmVuY2VzLFxyXG4gICAgICBvblJldHJ5U2VuZE1lc3NhZ2UsXHJcbiAgICAgIG9uQ2FuY2VsU2VuZE1lc3NhZ2UsXHJcbiAgICAgIGNvbnRhaW5lck1lc3NhZ2VzU3R5bGUsXHJcbiAgICAgIHNob3dJbmZvLFxyXG4gICAgICBvbkNsaWNrU2hvd0luZm8sXHJcbiAgICAgIHJlYWRPbmx5TW9kZSxcclxuICAgIH0gPSB0aGlzLnByb3BzXHJcbiAgICBjb25zdCB7IHNob3dUeXBpbmcgfSA9IHRoaXMuc3RhdGVcclxuICAgIGNvbnN0IGxhc3RNZXNzYWdlID0gbWVzc2FnZXMuc2xpY2UoLTEpWzBdXHJcbiAgICBjb25zdCBpc0JvdCA9IHBhdGhPcihmYWxzZSwgWydwYXJ0aWNpcGFudCcsICdpc0JvdCddLCBsYXN0TWVzc2FnZSlcclxuICAgIGNvbnN0IGRlbGF5VmFsID0gcGF0aE9yKDUsIFsnYXR0YWNobWVudCcsICdkZWxheSddLCBsYXN0TWVzc2FnZSlcclxuICAgIC8vIGFkZCAyIHNlY29uZHMgdG8gdGhlIGRlbGF5IHRvIGFsbG93IGZvciBhcGkgbGFnLlxyXG4gICAgLy8gU2VlIGh0dHBzOi8vc2FwamlyYS53ZGYuc2FwLmNvcnAvYnJvd3NlL1NBUE1MQ09OVi0xMzQyOCBmb3IgcmVxdWlyZW1lbnRzXHJcbiAgICBjb25zdCBtYXhEZWxheSA9ICgodHlwZW9mIGRlbGF5VmFsID09PSAnc3RyaW5nJyA/IHBhcnNlRmxvYXQoZGVsYXlWYWwpIDogZGVsYXlWYWwpICsgMikgKiAxMDAwXHJcbiAgICBjb25zdCB0aW1lb3V0QW1vdW50ID0gaXNCb3QgPyBtYXhEZWxheSA6IDIwMDAwXHJcblxyXG4gICAgY29uc3Qgc2VuZE1lc3NhZ2VQcm9taXNlQ29uZGl0aW9uXHJcbiAgICAgID0gbGFzdE1lc3NhZ2VcclxuICAgICAgJiYgKHBhdGhPcihmYWxzZSwgWydkYXRhJywgJ2hhc0RlbGF5J10sIGxhc3RNZXNzYWdlKVxyXG4gICAgICAgID8gcGF0aE9yKGZhbHNlLCBbJ2RhdGEnLCAnaGFzTmV4dE1lc3NhZ2UnXSwgbGFzdE1lc3NhZ2UpXHJcbiAgICAgICAgOiBsYXN0TWVzc2FnZS5wYXJ0aWNpcGFudC5pc0JvdCA9PT0gZmFsc2UpXHJcbiAgICBjb25zdCBwb2xsTWVzc2FnZUNvbmRpdGlvbiA9IGxhc3RNZXNzYWdlICYmIHBhdGhPcihmYWxzZSwgWydhdHRhY2htZW50JywgJ2RlbGF5J10sIGxhc3RNZXNzYWdlKVxyXG4gICAgY29uc3Qgc2hvdWxkRGlzcGxheVR5cGluZyA9ICEhKFxyXG4gICAgICBsYXN0TWVzc2FnZVxyXG4gICAgICAmJiAoc2VuZE1lc3NhZ2VQcm9taXNlQ29uZGl0aW9uIHx8IHBvbGxNZXNzYWdlQ29uZGl0aW9uKVxyXG4gICAgICAmJiAhbGFzdE1lc3NhZ2UucmV0cnlcclxuICAgICAgJiYgIWxhc3RNZXNzYWdlLmlzU2VuZGluZ1xyXG4gICAgICAmJiBzaG93VHlwaW5nXHJcbiAgICApXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT0nUmVjYXN0QXBwTGl2ZSBDYWlBcHBMaXZlJ1xyXG4gICAgICAgIHJlZj17cmVmID0+ICh0aGlzLm1lc3NhZ2VzTGlzdCA9IHJlZil9XHJcbiAgICAgICAgb25TY3JvbGw9e3RoaXMuaGFuZGxlU2Nyb2xsfVxyXG4gICAgICAgIHN0eWxlPXtjb250YWluZXJNZXNzYWdlc1N0eWxlfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J1JlY2FzdEFwcExpdmUtLW1lc3NhZ2UtY29udGFpbmVyIENhaUFwcExpdmUtLW1lc3NhZ2UtY29udGFpbmVyJz5cclxuICAgICAgICAgIHt0aGlzLmZtdE1lc3NhZ2VzKCkubWFwKChtZXNzYWdlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8TWVzc2FnZVxyXG4gICAgICAgICAgICAgIGtleT17bWVzc2FnZS5pZH1cclxuICAgICAgICAgICAgICBtZXNzYWdlPXttZXNzYWdlfVxyXG4gICAgICAgICAgICAgIHNlbmRNZXNzYWdlPXtzZW5kTWVzc2FnZX1cclxuICAgICAgICAgICAgICBwcmVmZXJlbmNlcz17cHJlZmVyZW5jZXN9XHJcbiAgICAgICAgICAgICAgb25JbWFnZUxvYWRlZD17dGhpcy5vbkltYWdlTG9hZGVkfVxyXG4gICAgICAgICAgICAgIGlzTGFzdE1lc3NhZ2U9e21lc3NhZ2VzLmxlbmd0aCA9PT0gaW5kZXggKyAxfVxyXG4gICAgICAgICAgICAgIHJldHJ5PXttZXNzYWdlLnJldHJ5fVxyXG4gICAgICAgICAgICAgIGlzU2VuZGluZz17bWVzc2FnZS5pc1NlbmRpbmd9XHJcbiAgICAgICAgICAgICAgb25SZXRyeVNlbmRNZXNzYWdlPXsoKSA9PiBvblJldHJ5U2VuZE1lc3NhZ2UobWVzc2FnZSl9XHJcbiAgICAgICAgICAgICAgb25DYW5jZWxTZW5kTWVzc2FnZT17KCkgPT4gb25DYW5jZWxTZW5kTWVzc2FnZShtZXNzYWdlKX1cclxuICAgICAgICAgICAgICBzaG93SW5mbz17c2hvd0luZm99XHJcbiAgICAgICAgICAgICAgb25DbGlja1Nob3dJbmZvPXtvbkNsaWNrU2hvd0luZm99XHJcbiAgICAgICAgICAgICAgZXJyb3I9e21lc3NhZ2UuZXJyb3J9XHJcbiAgICAgICAgICAgICAgcmVhZE9ubHlNb2RlPXtyZWFkT25seU1vZGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICB7c2hvdWxkRGlzcGxheVR5cGluZyAmJiAoXHJcbiAgICAgICAgICAgIDxJc1R5cGluZ1xyXG4gICAgICAgICAgICAgIG9uSW1hZ2VMb2FkZWQ9e3RoaXMub25JbWFnZUxvYWRlZH1cclxuICAgICAgICAgICAgICBpbWFnZT17cHJlZmVyZW5jZXMuYm90UGljdHVyZX1cclxuICAgICAgICAgICAgICBjYWxsQWZ0ZXJUaW1lb3V0PXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd1R5cGluZzogZmFsc2UgfSl9XHJcbiAgICAgICAgICAgICAgdGltZW91dD17dGltZW91dEFtb3VudH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuTGl2ZS5wcm9wVHlwZXMgPSB7XHJcbiAgbWVzc2FnZXM6IFByb3BUeXBlcy5hcnJheSxcclxuICBzZW5kTWVzc2FnZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgcHJlZmVyZW5jZXM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgb25SZXRyeVNlbmRNZXNzYWdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICBvbkNhbmNlbFNlbmRNZXNzYWdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICBzaG93SW5mbzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgcmVhZE9ubHlNb2RlOiBQcm9wVHlwZXMuYm9vbCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGl2ZVxyXG4iXX0=