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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01lc3NhZ2UvaW5kZXguanMiXSwibmFtZXMiOlsiTWVzc2FnZSIsImV4Y2VwdGlvblRocm93bk9jY3VycmVkIiwidHlwZSIsInRvTG93ZXJDYXNlIiwiY29uc29sZSIsImluZm8iLCJlcnJvciIsInNldFN0YXRlIiwicHJvcHMiLCJtZXNzYWdlIiwiaXNMYXN0TWVzc2FnZSIsInNlbmRNZXNzYWdlIiwicHJlZmVyZW5jZXMiLCJvbkltYWdlTG9hZGVkIiwicmV0cnkiLCJpc1NlbmRpbmciLCJvblJldHJ5U2VuZE1lc3NhZ2UiLCJvbkNhbmNlbFNlbmRNZXNzYWdlIiwic2hvd0luZm8iLCJvbkNsaWNrU2hvd0luZm8iLCJyZWFkT25seU1vZGUiLCJib3RQaWN0dXJlIiwidXNlclBpY3R1cmUiLCJhY2NlbnRDb2xvciIsImNvbXBsZW1lbnRhcnlDb2xvciIsImJvdE1lc3NhZ2VDb2xvciIsImJvdE1lc3NhZ2VCYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5SWNvbiIsImF0dGFjaG1lbnQiLCJwYXJ0aWNpcGFudCIsImNvbnRlbnQiLCJ0aXRsZSIsIm1hcmtkb3duIiwic3RhdGUiLCJzdHlsZSIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsInRleHRBbGlnbiIsImlzQm90IiwiaW1hZ2UiLCJtZXNzYWdlUHJvcHMiLCJpc01hcmtkb3duIiwib3BhY2l0eSIsIl9pc1ZhbGlkUmVuZGVyVHlwZSIsImJvdCIsInVzZXIiLCJ2aXNpYmxlIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiZnVuYyIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7OztJQUVNQSxPOzs7Ozs7Ozs7Ozs7Ozs7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QUFBQSxXQUFXLEVBQUVzQyxtQkFBVUMsTUFITDtBQUlsQnpDLEVBQUFBLGFBQWEsRUFBRXdDLG1CQUFVRyxJQUpQO0FBS2xCeEMsRUFBQUEsYUFBYSxFQUFFcUMsbUJBQVVFLElBTFA7QUFNbEJ0QyxFQUFBQSxLQUFLLEVBQUVvQyxtQkFBVUcsSUFOQztBQU9sQnRDLEVBQUFBLFNBQVMsRUFBRW1DLG1CQUFVRyxJQVBIO0FBUWxCckMsRUFBQUEsa0JBQWtCLEVBQUVrQyxtQkFBVUUsSUFSWjtBQVNsQm5DLEVBQUFBLG1CQUFtQixFQUFFaUMsbUJBQVVFLElBVGI7QUFVbEJsQyxFQUFBQSxRQUFRLEVBQUVnQyxtQkFBVUcsSUFWRjtBQVdsQmxDLEVBQUFBLGVBQWUsRUFBRStCLG1CQUFVRSxJQVhUO0FBWWxCOUMsRUFBQUEsS0FBSyxFQUFFNEMsbUJBQVVHLElBWkM7QUFhbEJqQyxFQUFBQSxZQUFZLEVBQUU4QixtQkFBVUc7QUFiTixDQUFwQjtlQWdCZXJELE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXHJcbmltcG9ydCBjb250YWlucyBmcm9tICdyYW1kYS9lcy9jb250YWlucydcclxuaW1wb3J0IHsgc2FmZUJvb2xlYW5WYWx1ZSB9IGZyb20gJ2hlbHBlcnMnXHJcblxyXG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQnXHJcbmltcG9ydCBDYXJkIGZyb20gJy4vQ2FyZCdcclxuaW1wb3J0IExpc3QgZnJvbSAnLi9MaXN0J1xyXG5pbXBvcnQgQnV0dG9ucyBmcm9tICcuL0J1dHRvbnMnXHJcbmltcG9ydCBQaWN0dXJlIGZyb20gJy4vUGljdHVyZSdcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJy4vQ2Fyb3VzZWwnXHJcbmltcG9ydCBRdWlja1JlcGxpZXMgZnJvbSAnLi9RdWlja1JlcGxpZXMnXHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuc2NzcydcclxuXHJcbmNsYXNzIE1lc3NhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgZXhjZXB0aW9uVGhyb3duT2NjdXJyZWQ6IGZhbHNlLFxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkQ2F0Y2ggKGVycm9yLCBpbmZvKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZXhjZXB0aW9uVGhyb3duT2NjdXJyZWQ6IHRydWUgfSlcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IsIGluZm8pXHJcbiAgfVxyXG5cclxuICBfaXNWYWxpZFJlbmRlclR5cGUgPSAodHlwZSkgPT4ge1xyXG4gICAgaWYgKHR5cGUgJiYgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHN3aXRjaCAodHlwZS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgIGNhc2UgJ3RleHQnOlxyXG4gICAgICBjYXNlICdhY3Rpb24nOiAvLyB0cmlnZ2VyX3NraWxsIHJldHVybiB0eXBlXHJcbiAgICAgIGNhc2UgJ2NhcmQnOlxyXG4gICAgICBjYXNlICdwaWN0dXJlJzpcclxuICAgICAgY2FzZSAnY2Fyb3VzZWwnOlxyXG4gICAgICBjYXNlICdjYXJvdXNlbGxlJzpcclxuICAgICAgY2FzZSAnbGlzdCc6XHJcbiAgICAgIGNhc2UgJ2J1dHRvbnMnOlxyXG4gICAgICBjYXNlICdxdWlja3JlcGxpZXMnOlxyXG4gICAgICBjYXNlICdxdWlja3JlcGx5JzpcclxuICAgICAgY2FzZSAnYnV0dG9uJzpcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICBjYXNlICdjbGllbnRfZGF0YSc6XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgY29uc29sZS5pbmZvKGBVbmtub3duIHR5cGUgJHt0eXBlfWApXHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIG1lc3NhZ2UsXHJcbiAgICAgIGlzTGFzdE1lc3NhZ2UsXHJcbiAgICAgIHNlbmRNZXNzYWdlLFxyXG4gICAgICBwcmVmZXJlbmNlcyxcclxuICAgICAgb25JbWFnZUxvYWRlZCxcclxuICAgICAgcmV0cnksXHJcbiAgICAgIGlzU2VuZGluZyxcclxuICAgICAgb25SZXRyeVNlbmRNZXNzYWdlLFxyXG4gICAgICBvbkNhbmNlbFNlbmRNZXNzYWdlLFxyXG4gICAgICBzaG93SW5mbyxcclxuICAgICAgb25DbGlja1Nob3dJbmZvLFxyXG4gICAgICByZWFkT25seU1vZGUsXHJcbiAgICB9ID0gdGhpcy5wcm9wc1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBib3RQaWN0dXJlLFxyXG4gICAgICB1c2VyUGljdHVyZSxcclxuICAgICAgYWNjZW50Q29sb3IsXHJcbiAgICAgIGNvbXBsZW1lbnRhcnlDb2xvcixcclxuICAgICAgYm90TWVzc2FnZUNvbG9yLFxyXG4gICAgICBib3RNZXNzYWdlQmFja2dyb3VuZENvbG9yLFxyXG4gICAgfSA9IHByZWZlcmVuY2VzXHJcbiAgICBjb25zdCB7IGRpc3BsYXlJY29uLCBhdHRhY2htZW50LCBwYXJ0aWNpcGFudCB9ID0gbWVzc2FnZVxyXG4gICAgY29uc3QgeyB0eXBlLCBjb250ZW50LCBlcnJvciwgdGl0bGUsIG1hcmtkb3duIH0gPSBhdHRhY2htZW50XHJcbiAgICBjb25zdCB7IGV4Y2VwdGlvblRocm93bk9jY3VycmVkIH0gPSB0aGlzLnN0YXRlXHJcbiAgICBpZiAoZXhjZXB0aW9uVGhyb3duT2NjdXJyZWQpIHtcclxuICAgICAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICAgICAgY29sb3I6ICcjZmZmJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjQ0MzM2JyxcclxuICAgICAgICBwYWRkaW5nOiAnMS4wcmVtJyxcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9eydSZWNhc3RBcHBUZXh0IENhaUFwcFRleHQnfT5cclxuICAgICAgICAgIEFuIEVycm9yIGhhcyBvY2N1cmVkLCB1bmFibGUgdG8gZGlzcGxheSB0aGlzIG1lc3NhZ2VcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gICAgaWYgKCFjb250ZW50KSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ01pc3NpbmcgY29udGVudCB1bmFibGUgdG8gcHJvY2VlZCcpXHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICBjb25zdCB7IGlzQm90IH0gPSBwYXJ0aWNpcGFudFxyXG5cclxuICAgIGNvbnN0IGltYWdlID0gaXNCb3QgPyBib3RQaWN0dXJlIDogdXNlclBpY3R1cmVcclxuICAgIGNvbnN0IG1lc3NhZ2VQcm9wcyA9IHtcclxuICAgICAgaXNCb3QsXHJcbiAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkaXNwbGF5IHRoZSB0aXRsZSBvZiBhIGJ1dHRvbi9xdWlja1JlcGx5IGNsaWNrLCBhbmQgbm90IGl0cyB2YWx1ZVxyXG4gICAgICBjb250ZW50OiB0aXRsZSB8fCBjb250ZW50LFxyXG4gICAgICBpc01hcmtkb3duOiBzYWZlQm9vbGVhblZhbHVlKG1hcmtkb3duKSxcclxuICAgICAgcmVhZE9ubHlNb2RlLFxyXG4gICAgICBpc0xhc3RNZXNzYWdlLFxyXG4gICAgICBvbkltYWdlTG9hZGVkLFxyXG4gICAgICBzdHlsZToge1xyXG4gICAgICAgIGNvbG9yOiBpc0JvdCA/IChlcnJvciA/ICcjZmZmJyA6IGJvdE1lc3NhZ2VDb2xvcikgOiBjb21wbGVtZW50YXJ5Q29sb3IsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0JvdCA/IChlcnJvciA/ICcjZjQ0MzM2JyA6IGJvdE1lc3NhZ2VCYWNrZ3JvdW5kQ29sb3IpIDogYWNjZW50Q29sb3IsXHJcbiAgICAgICAgb3BhY2l0eTogcmV0cnkgfHwgaXNTZW5kaW5nID8gMC41IDogMSxcclxuICAgICAgICBhY2NlbnRDb2xvcixcclxuICAgICAgfSxcclxuICAgIH1cclxuICAgIGlmICghc2hvd0luZm8gJiYgIXRoaXMuX2lzVmFsaWRSZW5kZXJUeXBlKHR5cGUpKSB7XHJcbiAgICAgIHJldHVybiBudWxsIC8vIGlnbm9yZSB1bmtub3duIHR5cGVzXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjeCgnUmVjYXN0QXBwTWVzc2FnZUNvbnRhaW5lciBDYWlBcHBNZXNzYWdlQ29udGFpbmVyJywge1xyXG4gICAgICAgICAgYm90OiBpc0JvdCxcclxuICAgICAgICAgIHVzZXI6ICFpc0JvdCxcclxuICAgICAgICB9KX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnUmVjYXN0QXBwTWVzc2FnZSBDYWlBcHBNZXNzYWdlJywgeyBib3Q6IGlzQm90LCB1c2VyOiAhaXNCb3QgfSl9PlxyXG4gICAgICAgICAge2ltYWdlICYmIChcclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goJ1JlY2FzdEFwcE1lc3NhZ2UtLWxvZ28gQ2FpQXBwTWVzc2FnZS0tbG9nbycsIHsgdmlzaWJsZTogZGlzcGxheUljb24gfSl9XHJcbiAgICAgICAgICAgICAgc3JjPXtpbWFnZX1cclxuICAgICAgICAgICAgICBzdHlsZT17e319XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIHsodHlwZSA9PT0gJ3RleHQnIHx8IHR5cGUgPT09ICdhY3Rpb24nKSAmJiA8VGV4dCB7Li4ubWVzc2FnZVByb3BzfSAvPn1cclxuXHJcbiAgICAgICAgICB7dHlwZSA9PT0gJ3BpY3R1cmUnICYmIDxQaWN0dXJlIHsuLi5tZXNzYWdlUHJvcHN9IC8+fVxyXG5cclxuICAgICAgICAgIHt0eXBlID09PSAnY2FyZCcgJiYgPENhcmQgey4uLm1lc3NhZ2VQcm9wc30gc2VuZE1lc3NhZ2U9e3NlbmRNZXNzYWdlfSAvPn1cclxuXHJcbiAgICAgICAgICB7Y29udGFpbnModHlwZSwgWydjYXJvdXNlbCcsICdjYXJvdXNlbGxlJ10pICYmIChcclxuICAgICAgICAgICAgPENhcm91c2VsIHsuLi5tZXNzYWdlUHJvcHN9IHNlbmRNZXNzYWdlPXtzZW5kTWVzc2FnZX0gLz5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAge3R5cGUgPT09ICdsaXN0JyAmJiA8TGlzdCB7Li4ubWVzc2FnZVByb3BzfSBzZW5kTWVzc2FnZT17c2VuZE1lc3NhZ2V9IC8+fVxyXG5cclxuICAgICAgICAgIHt0eXBlID09PSAnYnV0dG9ucycgJiYgPEJ1dHRvbnMgey4uLm1lc3NhZ2VQcm9wc30gc2VuZE1lc3NhZ2U9e3NlbmRNZXNzYWdlfSAvPn1cclxuXHJcbiAgICAgICAgICB7dHlwZSA9PT0gJ3F1aWNrUmVwbGllcycgJiYgKFxyXG4gICAgICAgICAgICA8UXVpY2tSZXBsaWVzXHJcbiAgICAgICAgICAgICAgey4uLm1lc3NhZ2VQcm9wc31cclxuICAgICAgICAgICAgICBzZW5kTWVzc2FnZT17c2VuZE1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgaXNMYXN0TWVzc2FnZT17aXNMYXN0TWVzc2FnZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7aXNCb3QgJiYgc2hvd0luZm8gJiYgdHlwZSA9PT0gJ2NsaWVudF9kYXRhJyAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnUmVjYXN0QXBwTWVzc2FnZS0tcmV0cnkgQ2FpQXBwTWVzc2FnZS0tcmV0cnknLCB7IGJvdDogaXNCb3QgfSl9PlxyXG4gICAgICAgICAgICAgIEN1c3RvbSBKU09OIG1lc3NhZ2UgdHlwZS4gTm90IHZpc2libGUgaW4gY2hhbm5lbHMuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHtpc0JvdCAmJiBzaG93SW5mbyAmJiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J1JlY2FzdEFwcE1lc3NhZ2UtLUpzb25CdXR0b24gQ2FpQXBwTWVzc2FnZS0tSnNvbkJ1dHRvbidcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAob25DbGlja1Nob3dJbmZvKSB7XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2tTaG93SW5mbyhtZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz0naHR0cHM6Ly9jZG4uY2FpLnRvb2xzLnNhcC93ZWJzaXRlL2JvdC1idWlsZGVyL2luZm8ucG5nJyAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3JldHJ5ICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnUmVjYXN0QXBwTWVzc2FnZS0tcmV0cnkgQ2FpQXBwTWVzc2FnZS0tcmV0cnknLCB7IGJvdDogaXNCb3QgfSl9PlxyXG4gICAgICAgICAgICBDb3VsZG7igJl0IHNlbmQgdGhpcyBtZXNzYWdleycgJ31cclxuICAgICAgICAgICAgPHNwYW4gb25DbGljaz17b25SZXRyeVNlbmRNZXNzYWdlfSBjbGFzc05hbWU9J2J1dHRvbic+XHJcbiAgICAgICAgICAgICAgVHJ5IGFnYWluXHJcbiAgICAgICAgICAgIDwvc3Bhbj57JyAnfVxyXG4gICAgICAgICAgICB8eycgJ31cclxuICAgICAgICAgICAgPHNwYW4gb25DbGljaz17b25DYW5jZWxTZW5kTWVzc2FnZX0gY2xhc3NOYW1lPSdidXR0b24nPlxyXG4gICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbk1lc3NhZ2UucHJvcFR5cGVzID0ge1xyXG4gIG1lc3NhZ2U6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgc2VuZE1lc3NhZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gIHByZWZlcmVuY2VzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGlzTGFzdE1lc3NhZ2U6IFByb3BUeXBlcy5ib29sLFxyXG4gIG9uSW1hZ2VMb2FkZWQ6IFByb3BUeXBlcy5mdW5jLFxyXG4gIHJldHJ5OiBQcm9wVHlwZXMuYm9vbCxcclxuICBpc1NlbmRpbmc6IFByb3BUeXBlcy5ib29sLFxyXG4gIG9uUmV0cnlTZW5kTWVzc2FnZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25DYW5jZWxTZW5kTWVzc2FnZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgc2hvd0luZm86IFByb3BUeXBlcy5ib29sLFxyXG4gIG9uQ2xpY2tTaG93SW5mbzogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxyXG4gIHJlYWRPbmx5TW9kZTogUHJvcFR5cGVzLmJvb2wsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VcclxuIl19