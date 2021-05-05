"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.concat.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

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

var _contains = _interopRequireDefault(require("ramda/es/contains"));

var _helpers = require("../../helpers");

var _Text = _interopRequireDefault(require("./Text"));

var _Card = _interopRequireDefault(require("./Card"));

var _List = _interopRequireDefault(require("./List"));

var _Buttons = _interopRequireDefault(require("./Buttons"));

var _Picture = _interopRequireDefault(require("./Picture"));

var _Carousel = _interopRequireDefault(require("./Carousel"));

var _QuickReplies = _interopRequireDefault(require("./QuickReplies"));

require("./style.scss");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Message = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Message, _Component);

  var _super = _createSuper(Message);

  function Message() {
    var _this;

    (0, _classCallCheck2.default)(this, Message);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      exceptionThrownOccurred: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "_isValidRenderType", function (type) {
      if (type && typeof type === 'string') {
        switch (type.toLowerCase()) {
          case 'text':
          case 'action': // trigger_skill return type

          case 'card':
          case 'picture':
          case 'carousel':
          case 'carouselle':
          case 'list':
          case 'buttons':
          case 'quickreplies':
          case 'quickreply':
          case 'button':
            return true;

          case 'client_data':
            return false;

          default:
            console.info("Unknown type ".concat(type));
            break;
        }
      }

      return false;
    });
    return _this;
  }

  (0, _createClass2.default)(Message, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      this.setState({
        exceptionThrownOccurred: true
      });
      console.error(error, info);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          message = _this$props.message,
          isLastMessage = _this$props.isLastMessage,
          sendMessage = _this$props.sendMessage,
          preferences = _this$props.preferences,
          onImageLoaded = _this$props.onImageLoaded,
          retry = _this$props.retry,
          isSending = _this$props.isSending,
          onRetrySendMessage = _this$props.onRetrySendMessage,
          onCancelSendMessage = _this$props.onCancelSendMessage,
          showInfo = _this$props.showInfo,
          onClickShowInfo = _this$props.onClickShowInfo,
          readOnlyMode = _this$props.readOnlyMode;
      var botPicture = preferences.botPicture,
          userPicture = preferences.userPicture,
          accentColor = preferences.accentColor,
          complementaryColor = preferences.complementaryColor,
          botMessageColor = preferences.botMessageColor,
          botMessageBackgroundColor = preferences.botMessageBackgroundColor;
      var displayIcon = message.displayIcon,
          attachment = message.attachment,
          participant = message.participant;
      var type = attachment.type,
          content = attachment.content,
          error = attachment.error,
          title = attachment.title,
          markdown = attachment.markdown;
      var exceptionThrownOccurred = this.state.exceptionThrownOccurred;

      if (exceptionThrownOccurred) {
        var style = {
          color: '#fff',
          backgroundColor: '#f44336',
          padding: '1.0rem',
          textAlign: 'center'
        };
        return /*#__PURE__*/_react.default.createElement("div", {
          style: style,
          className: 'RecastAppText CaiAppText'
        }, "An Error has occured, unable to display this message");
      }

      if (!content) {
        console.error('Missing content unable to proceed');
        return null;
      }

      var isBot = participant.isBot;
      var image = isBot ? botPicture : userPicture;
      var messageProps = {
        isBot: isBot,
        // Make sure we display the title of a button/quickReply click, and not its value
        content: title || content,
        isMarkdown: (0, _helpers.safeBooleanValue)(markdown),
        readOnlyMode: readOnlyMode,
        isLastMessage: isLastMessage,
        onImageLoaded: onImageLoaded,
        style: {
          color: isBot ? error ? '#fff' : botMessageColor : complementaryColor,
          backgroundColor: isBot ? error ? '#f44336' : botMessageBackgroundColor : accentColor,
          opacity: retry || isSending ? 0.5 : 1,
          accentColor: accentColor
        }
      };

      if (!showInfo && !this._isValidRenderType(type)) {
        return null; // ignore unknown types
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _classnames.default)('RecastAppMessageContainer CaiAppMessageContainer', {
          bot: isBot,
          user: !isBot
        })
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _classnames.default)('RecastAppMessage CaiAppMessage', {
          bot: isBot,
          user: !isBot
        })
      }, image && /*#__PURE__*/_react.default.createElement("img", {
        className: (0, _classnames.default)('RecastAppMessage--logo CaiAppMessage--logo', {
          visible: displayIcon
        }),
        src: image,
        style: {}
      }), (type === 'text' || type === 'action') && /*#__PURE__*/_react.default.createElement(_Text.default, messageProps), type === 'picture' && /*#__PURE__*/_react.default.createElement(_Picture.default, messageProps), type === 'card' && /*#__PURE__*/_react.default.createElement(_Card.default, (0, _extends2.default)({}, messageProps, {
        sendMessage: sendMessage
      })), (0, _contains.default)(type, ['carousel', 'carouselle']) && /*#__PURE__*/_react.default.createElement(_Carousel.default, (0, _extends2.default)({}, messageProps, {
        sendMessage: sendMessage
      })), type === 'list' && /*#__PURE__*/_react.default.createElement(_List.default, (0, _extends2.default)({}, messageProps, {
        sendMessage: sendMessage
      })), type === 'buttons' && /*#__PURE__*/_react.default.createElement(_Buttons.default, (0, _extends2.default)({}, messageProps, {
        sendMessage: sendMessage
      })), type === 'quickReplies' && /*#__PURE__*/_react.default.createElement(_QuickReplies.default, (0, _extends2.default)({}, messageProps, {
        sendMessage: sendMessage,
        isLastMessage: isLastMessage
      })), isBot && showInfo && type === 'client_data' && /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _classnames.default)('RecastAppMessage--retry CaiAppMessage--retry', {
          bot: isBot
        })
      }, "Custom JSON message type. Not visible in channels."), isBot && showInfo && /*#__PURE__*/_react.default.createElement("div", {
        className: "RecastAppMessage--JsonButton CaiAppMessage--JsonButton",
        onClick: function onClick() {
          if (onClickShowInfo) {
            onClickShowInfo(message);
          }
        }
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: "https://cdn.cai.tools.sap/website/bot-builder/info.png"
      }))), retry && /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _classnames.default)('RecastAppMessage--retry CaiAppMessage--retry', {
          bot: isBot
        })
      }, "Couldn\u2019t send this message", ' ', /*#__PURE__*/_react.default.createElement("span", {
        onClick: onRetrySendMessage,
        className: "button"
      }, "Try again"), ' ', "|", ' ', /*#__PURE__*/_react.default.createElement("span", {
        onClick: onCancelSendMessage,
        className: "button"
      }, "Cancel")));
    }
  }]);
  return Message;
}(_react.Component);

Message.propTypes = {
  message: _propTypes.default.object,
  sendMessage: _propTypes.default.func,
  preferences: _propTypes.default.object,
  isLastMessage: _propTypes.default.bool,
  onImageLoaded: _propTypes.default.func,
  retry: _propTypes.default.bool,
  isSending: _propTypes.default.bool,
  onRetrySendMessage: _propTypes.default.func,
  onCancelSendMessage: _propTypes.default.func,
  showInfo: _propTypes.default.bool,
  onClickShowInfo: _propTypes.default.func,
  error: _propTypes.default.bool,
  readOnlyMode: _propTypes.default.bool
};
var _default = Message;
exports.default = _default;