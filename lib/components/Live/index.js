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