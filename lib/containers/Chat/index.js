"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.array.for-each.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("regenerator-runtime/runtime.js");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _classnames = _interopRequireDefault(require("classnames"));

var _propOr = _interopRequireDefault(require("ramda/es/propOr"));

var _concat = _interopRequireDefault(require("ramda/es/concat"));

var _helpers = require("../../helpers");

var _conversation = require("../../actions/conversation");

var _messages = require("../../actions/messages");

var _Header = _interopRequireDefault(require("../../components/Header"));

var _Live = _interopRequireDefault(require("../../components/Live"));

var _Input = _interopRequireDefault(require("../../components/Input"));

require("./style.scss");

var _dec, _class, _temp;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var MAX_GET_MEMORY_TIME = 10 * 1000; // in ms

var FAILED_TO_GET_MEMORY = 'Could not get memory from webchatMethods.getMemory :';
var WRONG_MEMORY_FORMAT = 'Wrong memory format, expecting : { "memory": <json>, "merge": <boolean> }';
var Chat = (_dec = (0, _reactRedux.connect)(function (state) {
  return {
    token: state.conversation.token,
    chatId: state.conversation.chatId,
    channelId: state.conversation.channelId,
    conversationId: state.conversation.conversationId,
    lastMessageId: state.conversation.lastMessageId,
    messages: state.messages
  };
}, {
  postMessage: _messages.postMessage,
  pollMessages: _messages.pollMessages,
  createConversation: _conversation.createConversation,
  removeMessage: _messages.removeMessage,
  removeAllMessages: _messages.removeAllMessages,
  addUserMessage: _messages.addUserMessage,
  addBotMessage: _messages.addBotMessage,
  removeConversationId: _conversation.removeConversationId
}), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Chat, _Component);

  var _super = _createSuper(Chat);

  function Chat() {
    var _this;

    (0, _classCallCheck2.default)(this, Chat);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      messages: _this.props.messages,
      showSlogan: true,
      inputHeight: 50 // height of input (default: 50px)

    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "messagesDelays", []);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getMemoryOptions", function (chatId) {
      var checkResponseFormat = function checkResponseFormat(memoryOptions) {
        if ((0, _typeof2.default)(memoryOptions) !== 'object') {
          console.error(WRONG_MEMORY_FORMAT);
          console.error('Got : ');
          console.error(memoryOptions);
          return undefined;
        }

        if (!('merge' in memoryOptions) || typeof memoryOptions.merge !== 'boolean') {
          console.error(WRONG_MEMORY_FORMAT);
          console.error('Got : ');
          console.error(memoryOptions);
          return undefined;
        }

        if (!('memory' in memoryOptions) || (0, _typeof2.default)(memoryOptions.memory) !== 'object') {
          console.error(WRONG_MEMORY_FORMAT);
          console.error('Got : ');
          console.error(memoryOptions);
          return undefined;
        }

        return memoryOptions;
      };

      return new Promise(function (resolve) {
        if (!window.webchatMethods || !window.webchatMethods.getMemory) {
          return resolve();
        } // so that we send the message in all cases


        setTimeout(resolve, MAX_GET_MEMORY_TIME);

        try {
          var memoryOptionsResponse = window.webchatMethods.getMemory(chatId);

          if (!memoryOptionsResponse) {
            return resolve();
          }

          if (memoryOptionsResponse.then && typeof memoryOptionsResponse.then === 'function') {
            // the function returned a Promise
            memoryOptionsResponse.then(function (memoryOptions) {
              return resolve(checkResponseFormat(memoryOptions));
            }).catch(function (err) {
              console.error(FAILED_TO_GET_MEMORY);
              console.error(err);
              resolve();
            });
          } else {
            resolve(checkResponseFormat(memoryOptionsResponse));
          }
        } catch (err) {
          console.error(FAILED_TO_GET_MEMORY);
          console.error(err);
          resolve();
        }
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "shouldHideBotReply", function (responseData) {
      return responseData.conversation && responseData.conversation.skill === 'qna' && Array.isArray(responseData.nlp) && !responseData.nlp.length && Array.isArray(responseData.messages) && !responseData.messages.length;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "_onSendMessagePromiseCompleted", function (res) {
      var _this$props = _this.props,
          addBotMessage = _this$props.addBotMessage,
          defaultMessageDelay = _this$props.defaultMessageDelay;

      if (!res) {
        throw new Error('Fail send message');
      }

      var data = res.data;
      var messages = data.messages.length === 0 ? [{
        type: 'text',
        content: 'No reply',
        error: true
      }] : data.messages;

      if (!_this.shouldHideBotReply(data)) {
        var delay = 0;
        messages.forEach(function (message, index) {
          _this.messagesDelays[index] = setTimeout(function () {
            return addBotMessage([message], _objectSpread(_objectSpread({}, data), {}, {
              hasDelay: true,
              hasNextMessage: index !== messages.length - 1
            }));
          }, delay);
          delay += message.delay || message.delay === 0 ? message.delay * 1000 : defaultMessageDelay === null || defaultMessageDelay === undefined ? 0 : defaultMessageDelay * 1000;
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "_sendMessage", function (attachment, userMessage) {
      var _this$props2 = _this.props,
          token = _this$props2.token,
          channelId = _this$props2.channelId,
          chatId = _this$props2.chatId,
          postMessage = _this$props2.postMessage,
          sendMessagePromise = _this$props2.sendMessagePromise,
          addUserMessage = _this$props2.addUserMessage,
          addBotMessage = _this$props2.addBotMessage,
          readOnlyMode = _this$props2.readOnlyMode;
      var payload = {
        message: {
          attachment: attachment
        },
        chatId: chatId
      };

      if (readOnlyMode) {
        return;
      }

      var backendMessage = _objectSpread(_objectSpread({}, payload.message), {}, {
        isSending: true,
        id: "local-".concat(Math.random()),
        participant: {
          isBot: false
        }
      });

      if (userMessage) {
        userMessage = _objectSpread(_objectSpread({}, JSON.parse(JSON.stringify(backendMessage))), {}, {
          attachment: {
            type: 'text',
            content: userMessage
          }
        });
      }

      _this.setState(function (prevState) {
        return {
          messages: (0, _concat.default)(prevState.messages, [backendMessage])
        };
      }, function () {
        if (sendMessagePromise) {
          addUserMessage(userMessage || backendMessage);
          sendMessagePromise(backendMessage).then(function (res) {
            _this._onSendMessagePromiseCompleted(res);
          }).catch(function () {
            addBotMessage([{
              type: 'text',
              content: 'No reply',
              error: true
            }]);
          });
        } else {
          // get potential memoryOptions from website developer
          _this.getMemoryOptions(chatId).then(function (memoryOptions) {
            if (memoryOptions) {
              payload.memoryOptions = memoryOptions;
            }

            return postMessage(channelId, token, payload);
          }).then(function () {
            if (_this.timeout) {
              clearTimeout(_this.timeout);

              _this.timeoutResolve();

              _this.timeout = null;
            }
          });
        }
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "sendMessage", function (attachment, userMessage) {
      var _this$props3 = _this.props,
          token = _this$props3.token,
          channelId = _this$props3.channelId,
          preferences = _this$props3.preferences,
          conversationId = _this$props3.conversationId,
          sendMessagePromise = _this$props3.sendMessagePromise,
          readOnlyMode = _this$props3.readOnlyMode;

      if (readOnlyMode) {
        return;
      }

      if (!sendMessagePromise && !conversationId) {
        // // First time sending a message and no conversationId, so create one.
        // This will cause the component to be updated and polling will start automatically
        _this.props.createConversation(channelId, token).then(function (_ref) {
          var id = _ref.id,
              chatId = _ref.chatId;
          (0, _helpers.storeCredentialsToLocalStorage)(chatId, id, preferences.conversationTimeToLive, channelId);

          _this._sendMessage(attachment, userMessage);
        }).catch(function (err) {
          console.error('Creating the Conversation has failed, unable to post message');
          console.error(err);
        });
      } else {
        _this._sendMessage(attachment, userMessage);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "cancelSendMessage", function (message) {
      _this.props.removeMessage(message.id);

      if (message.conversationExpired) {
        _this.props.removeConversationId();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "retrySendMessage", function (message) {
      if (message.conversationExpired) {
        // Removing the conversation id will cause the sendmessage to create new one.
        // Polling will pickup the new id on the next poll.
        _this.props.removeConversationId();

        setTimeout(function () {
          _this.props.removeMessage(message.id);

          _this.sendMessage(message.attachment);
        }, 100);
      } else {
        _this.props.removeMessage(message.id);

        _this.sendMessage(message.attachment);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "loadConversation", function (res) {
      var _this$props4 = _this.props,
          addUserMessage = _this$props4.addUserMessage,
          addBotMessage = _this$props4.addBotMessage;

      _this.setState({
        messages: []
      }, function () {
        res.forEach(function (item) {
          var data = item.data || {};
          var messages = data.messages || [];
          messages.forEach(function (message) {
            if (item.isBot) {
              addBotMessage([message], _objectSpread({}, data));
            } else {
              var input = {
                id: item.id,
                participant: {
                  isBot: item.isBot
                },
                attachment: message
              };
              addUserMessage(input);
            }
          });
        });
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "doMessagesPolling", /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var shouldPoll, errorCount, _loop, _ret;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(_this._isPolling || !_this.props.conversationId)) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              _this._isPolling = true;
              shouldPoll = true;
              errorCount = 0;
              _loop = /*#__PURE__*/_regenerator.default.mark(function _callee() {
                var _this$props5, lastMessageId, channelId, token, conversationId, shouldWaitXseconds, timeToSleep, _yield$_this$props$po, waitTime;

                return _regenerator.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _this$props5 = _this.props, lastMessageId = _this$props5.lastMessageId, channelId = _this$props5.channelId, token = _this$props5.token, conversationId = _this$props5.conversationId;

                        if (conversationId) {
                          _context.next = 3;
                          break;
                        }

                        return _context.abrupt("return", "break");

                      case 3:
                        shouldWaitXseconds = false;
                        timeToSleep = 0;
                        _context.prev = 5;
                        _context.next = 8;
                        return _this.props.pollMessages(channelId, token, conversationId, lastMessageId);

                      case 8:
                        _yield$_this$props$po = _context.sent;
                        waitTime = _yield$_this$props$po.waitTime;
                        shouldPoll = waitTime === 0;
                        shouldWaitXseconds = waitTime > 0;
                        timeToSleep = waitTime * 1000;
                        errorCount = 0;
                        _context.next = 20;
                        break;

                      case 16:
                        _context.prev = 16;
                        _context.t0 = _context["catch"](5);
                        shouldPoll = false;
                        errorCount++;

                      case 20:
                        if (!shouldWaitXseconds) {
                          _context.next = 26;
                          break;
                        }

                        _context.next = 23;
                        return new Promise(function (resolve) {
                          _this.timeoutResolve = resolve;
                          _this.timeout = setTimeout(resolve, timeToSleep);
                        });

                      case 23:
                        _this.timeout = null;
                        _context.next = 29;
                        break;

                      case 26:
                        if (!(!shouldPoll && errorCount < 4)) {
                          _context.next = 29;
                          break;
                        }

                        _context.next = 29;
                        return new Promise(function (resolve) {
                          return setTimeout(resolve, 300);
                        });

                      case 29:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, null, [[5, 16]]);
              });

            case 6:
              return _context2.delegateYield(_loop(), "t0", 7);

            case 7:
              _ret = _context2.t0;

              if (!(_ret === "break")) {
                _context2.next = 10;
                break;
              }

              return _context2.abrupt("break", 11);

            case 10:
              if (shouldPoll || errorCount < 4) {
                _context2.next = 6;
                break;
              }

            case 11:
              _this._isPolling = false;

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
    return _this;
  }

  (0, _createClass2.default)(Chat, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props6 = this.props,
          sendMessagePromise = _this$props6.sendMessagePromise,
          loadConversationHistoryPromise = _this$props6.loadConversationHistoryPromise,
          conversationHistoryId = _this$props6.conversationHistoryId,
          show = _this$props6.show;
      this._isPolling = false;

      if (!sendMessagePromise && show) {
        this.doMessagesPolling();
      }

      if (loadConversationHistoryPromise && conversationHistoryId && show) {
        loadConversationHistoryPromise(conversationHistoryId).then(this.loadConversation);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var show = this.state.show;
      var _this$props7 = this.props,
          removeAllMessages = _this$props7.removeAllMessages,
          conversationHistoryId = _this$props7.conversationHistoryId,
          loadConversationHistoryPromise = _this$props7.loadConversationHistoryPromise;

      if (show && !this.props.sendMessagePromise && !this._isPolling) {
        this.doMessagesPolling();
      }

      if (show && prevProps.conversationHistoryId !== conversationHistoryId && loadConversationHistoryPromise) {
        removeAllMessages();
        loadConversationHistoryPromise(conversationHistoryId).then(this.loadConversation);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.messagesDelays.length) {
        this.messagesDelays.forEach(function (messageDelay) {
          return clearTimeout(messageDelay);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props8 = this.props,
          closeWebchat = _this$props8.closeWebchat,
          preferences = _this$props8.preferences,
          showInfo = _this$props8.showInfo,
          onClickShowInfo = _this$props8.onClickShowInfo,
          containerMessagesStyle = _this$props8.containerMessagesStyle,
          containerStyle = _this$props8.containerStyle,
          secondaryView = _this$props8.secondaryView,
          primaryHeader = _this$props8.primaryHeader,
          secondaryHeader = _this$props8.secondaryHeader,
          secondaryContent = _this$props8.secondaryContent,
          logoStyle = _this$props8.logoStyle,
          show = _this$props8.show,
          enableHistoryInput = _this$props8.enableHistoryInput,
          readOnlyMode = _this$props8.readOnlyMode;
      var _this$state = this.state,
          showSlogan = _this$state.showSlogan,
          messages = _this$state.messages,
          inputHeight = _this$state.inputHeight;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _classnames.default)('RecastAppChat CaiAppChat', {
          open: show,
          close: !show
        }),
        style: _objectSpread({
          backgroundColor: preferences.backgroundColor
        }, containerStyle)
      }, secondaryView ? secondaryHeader : primaryHeader ? primaryHeader(closeWebchat) : /*#__PURE__*/_react.default.createElement(_Header.default, {
        closeWebchat: closeWebchat,
        preferences: preferences,
        key: "header",
        logoStyle: logoStyle,
        readOnlyMode: readOnlyMode
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "RecastAppChat--content CaiAppChat--content",
        key: "content"
      }, secondaryView ? secondaryContent : [/*#__PURE__*/_react.default.createElement(_Live.default, {
        key: "live",
        messages: messages,
        preferences: preferences,
        sendMessage: this.sendMessage,
        onScrollBottom: function onScrollBottom(bool) {
          return _this2.setState({
            showSlogan: bool
          });
        },
        onRetrySendMessage: this.retrySendMessage,
        onCancelSendMessage: this.cancelSendMessage,
        showInfo: showInfo,
        onClickShowInfo: onClickShowInfo,
        containerMessagesStyle: containerMessagesStyle,
        readOnlyMode: readOnlyMode
      }), /*#__PURE__*/_react.default.createElement("div", {
        key: "slogan",
        style: {
          maxWidth: '23.0rem'
        },
        className: (0, _classnames.default)('RecastAppChat--slogan CaiAppChat--slogan', {
          'RecastAppChat--slogan--hidden CaiAppChat--slogan--hidden': !showSlogan
        })
      }, 'We run with SAP Conversational AI')]), !readOnlyMode && /*#__PURE__*/_react.default.createElement(_Input.default, {
        menu: preferences.menu && preferences.menu.menu,
        isOpen: show,
        onSubmit: this.sendMessage,
        preferences: preferences,
        onInputHeight: function onInputHeight(height) {
          return _this2.setState({
            inputHeight: height
          });
        },
        enableHistoryInput: enableHistoryInput,
        inputPlaceholder: (0, _propOr.default)('Write a reply', 'userInputPlaceholder', preferences),
        characterLimit: (0, _propOr.default)(0, 'characterLimit', preferences)
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var messages = props.messages,
          show = props.show;

      if (props.getLastMessage && messages && messages !== state.messages && messages.length > 0) {
        props.getLastMessage(messages[messages.length - 1]);
      }

      if (messages !== state.messages || show !== state.show) {
        var _ref3 = state.messages.length > 0 && state.messages.slice(-1)[0],
            isSending = _ref3.isSending;

        if (isSending && state.messages.length > messages.length) {
          return {
            show: show
          };
        }

        return {
          messages: messages,
          show: show
        };
      }

      return null;
    }
  }]);
  return Chat;
}(_react.Component), _temp)) || _class);
Chat.propTypes = {
  postMessage: _propTypes.default.func,
  closeWebchat: _propTypes.default.func,
  pollMessages: _propTypes.default.func,
  chatId: _propTypes.default.string,
  channelId: _propTypes.default.string,
  lastMessageId: _propTypes.default.string,
  conversationId: _propTypes.default.string,
  conversationHistoryId: _propTypes.default.string,
  messages: _propTypes.default.array,
  preferences: _propTypes.default.object,
  showInfo: _propTypes.default.bool,
  sendMessagePromise: _propTypes.default.func,
  loadConversationHistoryPromise: _propTypes.default.func,
  primaryHeader: _propTypes.default.func,
  secondaryView: _propTypes.default.bool,
  secondaryHeader: _propTypes.default.any,
  secondaryContent: _propTypes.default.any,
  getLastMessage: _propTypes.default.func,
  containerMessagesStyle: _propTypes.default.object,
  containerStyle: _propTypes.default.object,
  show: _propTypes.default.bool,
  enableHistoryInput: _propTypes.default.bool,
  readOnlyMode: _propTypes.default.bool,
  defaultMessageDelay: _propTypes.default.number
};
var _default = Chat;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250YWluZXJzL0NoYXQvaW5kZXguanMiXSwibmFtZXMiOlsiTUFYX0dFVF9NRU1PUllfVElNRSIsIkZBSUxFRF9UT19HRVRfTUVNT1JZIiwiV1JPTkdfTUVNT1JZX0ZPUk1BVCIsIkNoYXQiLCJzdGF0ZSIsInRva2VuIiwiY29udmVyc2F0aW9uIiwiY2hhdElkIiwiY2hhbm5lbElkIiwiY29udmVyc2F0aW9uSWQiLCJsYXN0TWVzc2FnZUlkIiwibWVzc2FnZXMiLCJwb3N0TWVzc2FnZSIsInBvbGxNZXNzYWdlcyIsImNyZWF0ZUNvbnZlcnNhdGlvbiIsInJlbW92ZU1lc3NhZ2UiLCJyZW1vdmVBbGxNZXNzYWdlcyIsImFkZFVzZXJNZXNzYWdlIiwiYWRkQm90TWVzc2FnZSIsInJlbW92ZUNvbnZlcnNhdGlvbklkIiwicHJvcHMiLCJzaG93U2xvZ2FuIiwiaW5wdXRIZWlnaHQiLCJjaGVja1Jlc3BvbnNlRm9ybWF0IiwibWVtb3J5T3B0aW9ucyIsImNvbnNvbGUiLCJlcnJvciIsInVuZGVmaW5lZCIsIm1lcmdlIiwibWVtb3J5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJ3aW5kb3ciLCJ3ZWJjaGF0TWV0aG9kcyIsImdldE1lbW9yeSIsInNldFRpbWVvdXQiLCJtZW1vcnlPcHRpb25zUmVzcG9uc2UiLCJ0aGVuIiwiY2F0Y2giLCJlcnIiLCJyZXNwb25zZURhdGEiLCJza2lsbCIsIkFycmF5IiwiaXNBcnJheSIsIm5scCIsImxlbmd0aCIsInJlcyIsImRlZmF1bHRNZXNzYWdlRGVsYXkiLCJFcnJvciIsImRhdGEiLCJ0eXBlIiwiY29udGVudCIsInNob3VsZEhpZGVCb3RSZXBseSIsImRlbGF5IiwiZm9yRWFjaCIsIm1lc3NhZ2UiLCJpbmRleCIsIm1lc3NhZ2VzRGVsYXlzIiwiaGFzRGVsYXkiLCJoYXNOZXh0TWVzc2FnZSIsImF0dGFjaG1lbnQiLCJ1c2VyTWVzc2FnZSIsInNlbmRNZXNzYWdlUHJvbWlzZSIsInJlYWRPbmx5TW9kZSIsInBheWxvYWQiLCJiYWNrZW5kTWVzc2FnZSIsImlzU2VuZGluZyIsImlkIiwiTWF0aCIsInJhbmRvbSIsInBhcnRpY2lwYW50IiwiaXNCb3QiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJzZXRTdGF0ZSIsInByZXZTdGF0ZSIsIl9vblNlbmRNZXNzYWdlUHJvbWlzZUNvbXBsZXRlZCIsImdldE1lbW9yeU9wdGlvbnMiLCJ0aW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwidGltZW91dFJlc29sdmUiLCJwcmVmZXJlbmNlcyIsImNvbnZlcnNhdGlvblRpbWVUb0xpdmUiLCJfc2VuZE1lc3NhZ2UiLCJjb252ZXJzYXRpb25FeHBpcmVkIiwic2VuZE1lc3NhZ2UiLCJpdGVtIiwiaW5wdXQiLCJfaXNQb2xsaW5nIiwic2hvdWxkUG9sbCIsImVycm9yQ291bnQiLCJzaG91bGRXYWl0WHNlY29uZHMiLCJ0aW1lVG9TbGVlcCIsIndhaXRUaW1lIiwibG9hZENvbnZlcnNhdGlvbkhpc3RvcnlQcm9taXNlIiwiY29udmVyc2F0aW9uSGlzdG9yeUlkIiwic2hvdyIsImRvTWVzc2FnZXNQb2xsaW5nIiwibG9hZENvbnZlcnNhdGlvbiIsInByZXZQcm9wcyIsIm1lc3NhZ2VEZWxheSIsImNsb3NlV2ViY2hhdCIsInNob3dJbmZvIiwib25DbGlja1Nob3dJbmZvIiwiY29udGFpbmVyTWVzc2FnZXNTdHlsZSIsImNvbnRhaW5lclN0eWxlIiwic2Vjb25kYXJ5VmlldyIsInByaW1hcnlIZWFkZXIiLCJzZWNvbmRhcnlIZWFkZXIiLCJzZWNvbmRhcnlDb250ZW50IiwibG9nb1N0eWxlIiwiZW5hYmxlSGlzdG9yeUlucHV0Iiwib3BlbiIsImNsb3NlIiwiYmFja2dyb3VuZENvbG9yIiwiYm9vbCIsInJldHJ5U2VuZE1lc3NhZ2UiLCJjYW5jZWxTZW5kTWVzc2FnZSIsIm1heFdpZHRoIiwibWVudSIsImhlaWdodCIsImdldExhc3RNZXNzYWdlIiwic2xpY2UiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlw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QUEsTUFBTSxFQUFFdUgsbUJBQVVFLE1BSkg7QUFLZnhILEVBQUFBLFNBQVMsRUFBRXNILG1CQUFVRSxNQUxOO0FBTWZ0SCxFQUFBQSxhQUFhLEVBQUVvSCxtQkFBVUUsTUFOVjtBQU9mdkgsRUFBQUEsY0FBYyxFQUFFcUgsbUJBQVVFLE1BUFg7QUFRZmhDLEVBQUFBLHFCQUFxQixFQUFFOEIsbUJBQVVFLE1BUmxCO0FBU2ZySCxFQUFBQSxRQUFRLEVBQUVtSCxtQkFBVUcsS0FUTDtBQVVmL0MsRUFBQUEsV0FBVyxFQUFFNEMsbUJBQVVJLE1BVlI7QUFXZjNCLEVBQUFBLFFBQVEsRUFBRXVCLG1CQUFVVixJQVhMO0FBWWZ0RCxFQUFBQSxrQkFBa0IsRUFBRWdFLG1CQUFVQyxJQVpmO0FBYWZoQyxFQUFBQSw4QkFBOEIsRUFBRStCLG1CQUFVQyxJQWIzQjtBQWNmbkIsRUFBQUEsYUFBYSxFQUFFa0IsbUJBQVVDLElBZFY7QUFlZnBCLEVBQUFBLGFBQWEsRUFBRW1CLG1CQUFVVixJQWZWO0FBZ0JmUCxFQUFBQSxlQUFlLEVBQUVpQixtQkFBVUssR0FoQlo7QUFpQmZyQixFQUFBQSxnQkFBZ0IsRUFBRWdCLG1CQUFVSyxHQWpCYjtBQWtCZlQsRUFBQUEsY0FBYyxFQUFFSSxtQkFBVUMsSUFsQlg7QUFtQmZ0QixFQUFBQSxzQkFBc0IsRUFBRXFCLG1CQUFVSSxNQW5CbkI7QUFvQmZ4QixFQUFBQSxjQUFjLEVBQUVvQixtQkFBVUksTUFwQlg7QUFxQmZqQyxFQUFBQSxJQUFJLEVBQUU2QixtQkFBVVYsSUFyQkQ7QUFzQmZKLEVBQUFBLGtCQUFrQixFQUFFYyxtQkFBVVYsSUF0QmY7QUF1QmZyRCxFQUFBQSxZQUFZLEVBQUUrRCxtQkFBVVYsSUF2QlQ7QUF3QmZyRSxFQUFBQSxtQkFBbUIsRUFBRStFLG1CQUFVTTtBQXhCaEIsQ0FBakI7ZUEyQmVqSSxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXHJcbmltcG9ydCBwcm9wT3IgZnJvbSAncmFtZGEvZXMvcHJvcE9yJ1xyXG5pbXBvcnQgY29uY2F0IGZyb20gJ3JhbWRhL2VzL2NvbmNhdCdcclxuaW1wb3J0IHsgc3RvcmVDcmVkZW50aWFsc1RvTG9jYWxTdG9yYWdlIH0gZnJvbSAnaGVscGVycydcclxuaW1wb3J0IHsgY3JlYXRlQ29udmVyc2F0aW9uLCByZW1vdmVDb252ZXJzYXRpb25JZCB9IGZyb20gJ2FjdGlvbnMvY29udmVyc2F0aW9uJ1xyXG5cclxuaW1wb3J0IHtcclxuICBwb3N0TWVzc2FnZSxcclxuICBwb2xsTWVzc2FnZXMsXHJcbiAgcmVtb3ZlTWVzc2FnZSxcclxuICByZW1vdmVBbGxNZXNzYWdlcyxcclxuICBhZGRCb3RNZXNzYWdlLFxyXG4gIGFkZFVzZXJNZXNzYWdlLFxyXG59IGZyb20gJ2FjdGlvbnMvbWVzc2FnZXMnXHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvSGVhZGVyJ1xyXG5pbXBvcnQgTGl2ZSBmcm9tICdjb21wb25lbnRzL0xpdmUnXHJcbmltcG9ydCBJbnB1dCBmcm9tICdjb21wb25lbnRzL0lucHV0J1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnXHJcblxyXG5jb25zdCBNQVhfR0VUX01FTU9SWV9USU1FID0gMTAgKiAxMDAwIC8vIGluIG1zXHJcbmNvbnN0IEZBSUxFRF9UT19HRVRfTUVNT1JZID0gJ0NvdWxkIG5vdCBnZXQgbWVtb3J5IGZyb20gd2ViY2hhdE1ldGhvZHMuZ2V0TWVtb3J5IDonXHJcbmNvbnN0IFdST05HX01FTU9SWV9GT1JNQVRcclxuICA9ICdXcm9uZyBtZW1vcnkgZm9ybWF0LCBleHBlY3RpbmcgOiB7IFwibWVtb3J5XCI6IDxqc29uPiwgXCJtZXJnZVwiOiA8Ym9vbGVhbj4gfSdcclxuXHJcbkBjb25uZWN0KFxyXG4gIHN0YXRlID0+ICh7XHJcbiAgICB0b2tlbjogc3RhdGUuY29udmVyc2F0aW9uLnRva2VuLFxyXG4gICAgY2hhdElkOiBzdGF0ZS5jb252ZXJzYXRpb24uY2hhdElkLFxyXG4gICAgY2hhbm5lbElkOiBzdGF0ZS5jb252ZXJzYXRpb24uY2hhbm5lbElkLFxyXG4gICAgY29udmVyc2F0aW9uSWQ6IHN0YXRlLmNvbnZlcnNhdGlvbi5jb252ZXJzYXRpb25JZCxcclxuICAgIGxhc3RNZXNzYWdlSWQ6IHN0YXRlLmNvbnZlcnNhdGlvbi5sYXN0TWVzc2FnZUlkLFxyXG4gICAgbWVzc2FnZXM6IHN0YXRlLm1lc3NhZ2VzLFxyXG4gICAgfSksXHJcbiAge1xyXG4gIHBvc3RNZXNzYWdlLFxyXG4gIHBvbGxNZXNzYWdlcyxcclxuICBjcmVhdGVDb252ZXJzYXRpb24sXHJcbiAgcmVtb3ZlTWVzc2FnZSxcclxuICByZW1vdmVBbGxNZXNzYWdlcyxcclxuICBhZGRVc2VyTWVzc2FnZSxcclxuICBhZGRCb3RNZXNzYWdlLFxyXG4gIHJlbW92ZUNvbnZlcnNhdGlvbklkLFxyXG4gIH0sXHJcbilcclxuY2xhc3MgQ2hhdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBtZXNzYWdlczogdGhpcy5wcm9wcy5tZXNzYWdlcyxcclxuICAgIHNob3dTbG9nYW46IHRydWUsXHJcbiAgICBpbnB1dEhlaWdodDogNTAsIC8vIGhlaWdodCBvZiBpbnB1dCAoZGVmYXVsdDogNTBweClcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgKHByb3BzLCBzdGF0ZSkge1xyXG4gICAgY29uc3QgeyBtZXNzYWdlcywgc2hvdyB9ID0gcHJvcHNcclxuXHJcbiAgICBpZiAocHJvcHMuZ2V0TGFzdE1lc3NhZ2UgJiYgbWVzc2FnZXMgJiYgbWVzc2FnZXMgIT09IHN0YXRlLm1lc3NhZ2VzICYmIG1lc3NhZ2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgcHJvcHMuZ2V0TGFzdE1lc3NhZ2UobWVzc2FnZXNbbWVzc2FnZXMubGVuZ3RoIC0gMV0pXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1lc3NhZ2VzICE9PSBzdGF0ZS5tZXNzYWdlcyB8fCBzaG93ICE9PSBzdGF0ZS5zaG93KSB7XHJcbiAgICAgIGNvbnN0IHsgaXNTZW5kaW5nIH0gPSBzdGF0ZS5tZXNzYWdlcy5sZW5ndGggPiAwICYmIHN0YXRlLm1lc3NhZ2VzLnNsaWNlKC0xKVswXVxyXG4gICAgICBpZiAoaXNTZW5kaW5nICYmIHN0YXRlLm1lc3NhZ2VzLmxlbmd0aCA+IG1lc3NhZ2VzLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiB7IHNob3cgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7IG1lc3NhZ2VzLCBzaG93IH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XHJcbiAgICBjb25zdCB7IHNlbmRNZXNzYWdlUHJvbWlzZSwgbG9hZENvbnZlcnNhdGlvbkhpc3RvcnlQcm9taXNlLCBjb252ZXJzYXRpb25IaXN0b3J5SWQsIHNob3cgfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICB0aGlzLl9pc1BvbGxpbmcgPSBmYWxzZVxyXG4gICAgaWYgKCFzZW5kTWVzc2FnZVByb21pc2UgJiYgc2hvdykge1xyXG4gICAgICB0aGlzLmRvTWVzc2FnZXNQb2xsaW5nKClcclxuICAgIH1cclxuXHJcbiAgICBpZiAobG9hZENvbnZlcnNhdGlvbkhpc3RvcnlQcm9taXNlICYmIGNvbnZlcnNhdGlvbkhpc3RvcnlJZCAmJiBzaG93KSB7XHJcbiAgICAgIGxvYWRDb252ZXJzYXRpb25IaXN0b3J5UHJvbWlzZShjb252ZXJzYXRpb25IaXN0b3J5SWQpLnRoZW4odGhpcy5sb2FkQ29udmVyc2F0aW9uKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlIChwcmV2UHJvcHMpIHtcclxuICAgIGNvbnN0IHsgc2hvdyB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgY29uc3QgeyByZW1vdmVBbGxNZXNzYWdlcywgY29udmVyc2F0aW9uSGlzdG9yeUlkLCBsb2FkQ29udmVyc2F0aW9uSGlzdG9yeVByb21pc2UgfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICBpZiAoc2hvdyAmJiAhdGhpcy5wcm9wcy5zZW5kTWVzc2FnZVByb21pc2UgJiYgIXRoaXMuX2lzUG9sbGluZykge1xyXG4gICAgICB0aGlzLmRvTWVzc2FnZXNQb2xsaW5nKClcclxuICAgIH1cclxuICAgIGlmIChzaG93ICYmIHByZXZQcm9wcy5jb252ZXJzYXRpb25IaXN0b3J5SWQgIT09IGNvbnZlcnNhdGlvbkhpc3RvcnlJZCAmJiBsb2FkQ29udmVyc2F0aW9uSGlzdG9yeVByb21pc2UpIHtcclxuICAgICAgcmVtb3ZlQWxsTWVzc2FnZXMoKVxyXG4gICAgICBsb2FkQ29udmVyc2F0aW9uSGlzdG9yeVByb21pc2UoY29udmVyc2F0aW9uSGlzdG9yeUlkKS50aGVuKHRoaXMubG9hZENvbnZlcnNhdGlvbilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcclxuICAgIGlmICh0aGlzLm1lc3NhZ2VzRGVsYXlzLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLm1lc3NhZ2VzRGVsYXlzLmZvckVhY2gobWVzc2FnZURlbGF5ID0+IGNsZWFyVGltZW91dChtZXNzYWdlRGVsYXkpKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWVzc2FnZXNEZWxheXMgPSBbXVxyXG5cclxuICAvKlxyXG4gICAgVGhlIHdpbmRvdy53ZWJjaGF0TWV0aG9kcy5nZXRNZW1vcnkgZnVuY3Rpb24gY2FuIHJldHVyblxyXG4gICAgYSBKU09OIG9iamVjdCBvciBhIFByb21pc2UgcmVzb2x2aW5nIHRvIGEgSlNPTiBvYmplY3RcclxuICAgIEFjY2VwdGVkIGZvcm1hdCBmb3IgdGhlIHJldHVybmVkIG9iamVjdCBpcyA6XHJcbiAgICB7IG1lbW9yeTogYXJiaXRyYXJ5IEpTT04sIG1lcmdlOiBib29sZWFuIH1cclxuICAqL1xyXG4gIGdldE1lbW9yeU9wdGlvbnMgPSBjaGF0SWQgPT4ge1xyXG4gICAgY29uc3QgY2hlY2tSZXNwb25zZUZvcm1hdCA9IG1lbW9yeU9wdGlvbnMgPT4ge1xyXG4gICAgICBpZiAodHlwZW9mIG1lbW9yeU9wdGlvbnMgIT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihXUk9OR19NRU1PUllfRk9STUFUKVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0dvdCA6ICcpXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihtZW1vcnlPcHRpb25zKVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcclxuICAgICAgfVxyXG4gICAgICBpZiAoISgnbWVyZ2UnIGluIG1lbW9yeU9wdGlvbnMpIHx8IHR5cGVvZiBtZW1vcnlPcHRpb25zLm1lcmdlICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFdST05HX01FTU9SWV9GT1JNQVQpXHJcbiAgICAgICAgY29uc29sZS5lcnJvcignR290IDogJylcclxuICAgICAgICBjb25zb2xlLmVycm9yKG1lbW9yeU9wdGlvbnMpXHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgICB9XHJcbiAgICAgIGlmICghKCdtZW1vcnknIGluIG1lbW9yeU9wdGlvbnMpIHx8IHR5cGVvZiBtZW1vcnlPcHRpb25zLm1lbW9yeSAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFdST05HX01FTU9SWV9GT1JNQVQpXHJcbiAgICAgICAgY29uc29sZS5lcnJvcignR290IDogJylcclxuICAgICAgICBjb25zb2xlLmVycm9yKG1lbW9yeU9wdGlvbnMpXHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBtZW1vcnlPcHRpb25zXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICBpZiAoIXdpbmRvdy53ZWJjaGF0TWV0aG9kcyB8fCAhd2luZG93LndlYmNoYXRNZXRob2RzLmdldE1lbW9yeSkge1xyXG4gICAgICAgIHJldHVybiByZXNvbHZlKClcclxuICAgICAgfVxyXG4gICAgICAvLyBzbyB0aGF0IHdlIHNlbmQgdGhlIG1lc3NhZ2UgaW4gYWxsIGNhc2VzXHJcbiAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgTUFYX0dFVF9NRU1PUllfVElNRSlcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBtZW1vcnlPcHRpb25zUmVzcG9uc2UgPSB3aW5kb3cud2ViY2hhdE1ldGhvZHMuZ2V0TWVtb3J5KGNoYXRJZClcclxuICAgICAgICBpZiAoIW1lbW9yeU9wdGlvbnNSZXNwb25zZSkge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWVtb3J5T3B0aW9uc1Jlc3BvbnNlLnRoZW4gJiYgdHlwZW9mIG1lbW9yeU9wdGlvbnNSZXNwb25zZS50aGVuID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAvLyB0aGUgZnVuY3Rpb24gcmV0dXJuZWQgYSBQcm9taXNlXHJcbiAgICAgICAgICBtZW1vcnlPcHRpb25zUmVzcG9uc2VcclxuICAgICAgICAgICAgLnRoZW4obWVtb3J5T3B0aW9ucyA9PiByZXNvbHZlKGNoZWNrUmVzcG9uc2VGb3JtYXQobWVtb3J5T3B0aW9ucykpKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKEZBSUxFRF9UT19HRVRfTUVNT1JZKVxyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgIHJlc29sdmUoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXNvbHZlKGNoZWNrUmVzcG9uc2VGb3JtYXQobWVtb3J5T3B0aW9uc1Jlc3BvbnNlKSlcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoRkFJTEVEX1RPX0dFVF9NRU1PUlkpXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgcmVzb2x2ZSgpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBzaG91bGRIaWRlQm90UmVwbHkgPSByZXNwb25zZURhdGEgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgcmVzcG9uc2VEYXRhLmNvbnZlcnNhdGlvblxyXG4gICAgICAmJiByZXNwb25zZURhdGEuY29udmVyc2F0aW9uLnNraWxsID09PSAncW5hJ1xyXG4gICAgICAmJiBBcnJheS5pc0FycmF5KHJlc3BvbnNlRGF0YS5ubHApXHJcbiAgICAgICYmICFyZXNwb25zZURhdGEubmxwLmxlbmd0aFxyXG4gICAgICAmJiBBcnJheS5pc0FycmF5KHJlc3BvbnNlRGF0YS5tZXNzYWdlcylcclxuICAgICAgJiYgIXJlc3BvbnNlRGF0YS5tZXNzYWdlcy5sZW5ndGhcclxuICAgIClcclxuICB9XHJcblxyXG4gIF9vblNlbmRNZXNzYWdlUHJvbWlzZUNvbXBsZXRlZCA9IChyZXMpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgYWRkQm90TWVzc2FnZSxcclxuICAgICAgZGVmYXVsdE1lc3NhZ2VEZWxheSxcclxuICAgIH0gPSB0aGlzLnByb3BzXHJcbiAgICBpZiAoIXJlcykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWwgc2VuZCBtZXNzYWdlJylcclxuICAgIH1cclxuICAgIGNvbnN0IGRhdGEgPSByZXMuZGF0YVxyXG4gICAgY29uc3QgbWVzc2FnZXNcclxuICAgID0gZGF0YS5tZXNzYWdlcy5sZW5ndGggPT09IDBcclxuICAgICAgPyBbeyB0eXBlOiAndGV4dCcsIGNvbnRlbnQ6ICdObyByZXBseScsIGVycm9yOiB0cnVlIH1dXHJcbiAgICAgIDogZGF0YS5tZXNzYWdlc1xyXG4gICAgaWYgKCF0aGlzLnNob3VsZEhpZGVCb3RSZXBseShkYXRhKSkge1xyXG4gICAgICBsZXQgZGVsYXkgPSAwXHJcbiAgICAgIG1lc3NhZ2VzLmZvckVhY2goKG1lc3NhZ2UsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlc0RlbGF5c1tpbmRleF0gPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgKCkgPT5cclxuICAgICAgICAgICAgYWRkQm90TWVzc2FnZShbbWVzc2FnZV0sIHtcclxuICAgICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICAgIGhhc0RlbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgIGhhc05leHRNZXNzYWdlOiBpbmRleCAhPT0gbWVzc2FnZXMubGVuZ3RoIC0gMSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICBkZWxheSxcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIGRlbGF5XHJcbiAgICAgICAgKz0gbWVzc2FnZS5kZWxheSB8fCBtZXNzYWdlLmRlbGF5ID09PSAwXHJcbiAgICAgICAgICAgID8gbWVzc2FnZS5kZWxheSAqIDEwMDBcclxuICAgICAgICAgICAgOiBkZWZhdWx0TWVzc2FnZURlbGF5ID09PSBudWxsIHx8IGRlZmF1bHRNZXNzYWdlRGVsYXkgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgID8gMFxyXG4gICAgICAgICAgICAgIDogZGVmYXVsdE1lc3NhZ2VEZWxheSAqIDEwMDBcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9zZW5kTWVzc2FnZSA9IChhdHRhY2htZW50LCB1c2VyTWVzc2FnZSkgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICB0b2tlbixcclxuICAgICAgY2hhbm5lbElkLFxyXG4gICAgICBjaGF0SWQsXHJcbiAgICAgIHBvc3RNZXNzYWdlLFxyXG4gICAgICBzZW5kTWVzc2FnZVByb21pc2UsXHJcbiAgICAgIGFkZFVzZXJNZXNzYWdlLFxyXG4gICAgICBhZGRCb3RNZXNzYWdlLFxyXG4gICAgICByZWFkT25seU1vZGUsXHJcbiAgICB9ID0gdGhpcy5wcm9wc1xyXG4gICAgY29uc3QgcGF5bG9hZCA9IHsgbWVzc2FnZTogeyBhdHRhY2htZW50IH0sIGNoYXRJZCB9XHJcbiAgICBpZiAocmVhZE9ubHlNb2RlKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgY29uc3QgYmFja2VuZE1lc3NhZ2UgPSB7XHJcbiAgICAgIC4uLnBheWxvYWQubWVzc2FnZSxcclxuICAgICAgaXNTZW5kaW5nOiB0cnVlLFxyXG4gICAgICBpZDogYGxvY2FsLSR7TWF0aC5yYW5kb20oKX1gLFxyXG4gICAgICBwYXJ0aWNpcGFudDoge1xyXG4gICAgICAgIGlzQm90OiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgIH1cclxuXHJcbiAgICBpZiAodXNlck1lc3NhZ2UpIHtcclxuICAgICAgdXNlck1lc3NhZ2UgPSB7XHJcbiAgICAgICAgLi4uSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShiYWNrZW5kTWVzc2FnZSkpLFxyXG4gICAgICAgIGF0dGFjaG1lbnQ6IHsgdHlwZTogJ3RleHQnLCBjb250ZW50OiB1c2VyTWVzc2FnZSB9LFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgcHJldlN0YXRlID0+ICh7IG1lc3NhZ2VzOiBjb25jYXQocHJldlN0YXRlLm1lc3NhZ2VzLCBbYmFja2VuZE1lc3NhZ2VdKSB9KSxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIGlmIChzZW5kTWVzc2FnZVByb21pc2UpIHtcclxuICAgICAgICAgIGFkZFVzZXJNZXNzYWdlKHVzZXJNZXNzYWdlIHx8IGJhY2tlbmRNZXNzYWdlKVxyXG5cclxuICAgICAgICAgIHNlbmRNZXNzYWdlUHJvbWlzZShiYWNrZW5kTWVzc2FnZSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLl9vblNlbmRNZXNzYWdlUHJvbWlzZUNvbXBsZXRlZChyZXMpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgYWRkQm90TWVzc2FnZShbeyB0eXBlOiAndGV4dCcsIGNvbnRlbnQ6ICdObyByZXBseScsIGVycm9yOiB0cnVlIH1dKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBnZXQgcG90ZW50aWFsIG1lbW9yeU9wdGlvbnMgZnJvbSB3ZWJzaXRlIGRldmVsb3BlclxyXG4gICAgICAgICAgdGhpcy5nZXRNZW1vcnlPcHRpb25zKGNoYXRJZClcclxuICAgICAgICAgICAgLnRoZW4obWVtb3J5T3B0aW9ucyA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG1lbW9yeU9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIHBheWxvYWQubWVtb3J5T3B0aW9ucyA9IG1lbW9yeU9wdGlvbnNcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlKGNoYW5uZWxJZCwgdG9rZW4sIHBheWxvYWQpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBpZiAodGhpcy50aW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0UmVzb2x2ZSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVvdXQgPSBudWxsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIClcclxuICB9XHJcblxyXG4gIHNlbmRNZXNzYWdlID0gKGF0dGFjaG1lbnQsIHVzZXJNZXNzYWdlKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHRva2VuLFxyXG4gICAgICBjaGFubmVsSWQsXHJcbiAgICAgIHByZWZlcmVuY2VzLFxyXG4gICAgICBjb252ZXJzYXRpb25JZCxcclxuICAgICAgc2VuZE1lc3NhZ2VQcm9taXNlLFxyXG4gICAgICByZWFkT25seU1vZGUsXHJcbiAgICB9ID0gdGhpcy5wcm9wc1xyXG4gICAgaWYgKHJlYWRPbmx5TW9kZSkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGlmICghc2VuZE1lc3NhZ2VQcm9taXNlICYmICFjb252ZXJzYXRpb25JZCkge1xyXG4gICAgICAvLyAvLyBGaXJzdCB0aW1lIHNlbmRpbmcgYSBtZXNzYWdlIGFuZCBubyBjb252ZXJzYXRpb25JZCwgc28gY3JlYXRlIG9uZS5cclxuICAgICAgLy8gVGhpcyB3aWxsIGNhdXNlIHRoZSBjb21wb25lbnQgdG8gYmUgdXBkYXRlZCBhbmQgcG9sbGluZyB3aWxsIHN0YXJ0IGF1dG9tYXRpY2FsbHlcclxuICAgICAgdGhpcy5wcm9wcy5jcmVhdGVDb252ZXJzYXRpb24oY2hhbm5lbElkLCB0b2tlbikudGhlbigoeyBpZCwgY2hhdElkIH0pID0+IHtcclxuICAgICAgICBzdG9yZUNyZWRlbnRpYWxzVG9Mb2NhbFN0b3JhZ2UoY2hhdElkLCBpZCwgcHJlZmVyZW5jZXMuY29udmVyc2F0aW9uVGltZVRvTGl2ZSwgY2hhbm5lbElkKVxyXG4gICAgICAgIHRoaXMuX3NlbmRNZXNzYWdlKGF0dGFjaG1lbnQsIHVzZXJNZXNzYWdlKVxyXG4gICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NyZWF0aW5nIHRoZSBDb252ZXJzYXRpb24gaGFzIGZhaWxlZCwgdW5hYmxlIHRvIHBvc3QgbWVzc2FnZScpXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9zZW5kTWVzc2FnZShhdHRhY2htZW50LCB1c2VyTWVzc2FnZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNhbmNlbFNlbmRNZXNzYWdlID0gbWVzc2FnZSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLnJlbW92ZU1lc3NhZ2UobWVzc2FnZS5pZClcclxuICAgIGlmIChtZXNzYWdlLmNvbnZlcnNhdGlvbkV4cGlyZWQpIHtcclxuICAgICAgdGhpcy5wcm9wcy5yZW1vdmVDb252ZXJzYXRpb25JZCgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXRyeVNlbmRNZXNzYWdlID0gbWVzc2FnZSA9PiB7XHJcbiAgICBpZiAobWVzc2FnZS5jb252ZXJzYXRpb25FeHBpcmVkKSB7XHJcbiAgICAgIC8vIFJlbW92aW5nIHRoZSBjb252ZXJzYXRpb24gaWQgd2lsbCBjYXVzZSB0aGUgc2VuZG1lc3NhZ2UgdG8gY3JlYXRlIG5ldyBvbmUuXHJcbiAgICAgIC8vIFBvbGxpbmcgd2lsbCBwaWNrdXAgdGhlIG5ldyBpZCBvbiB0aGUgbmV4dCBwb2xsLlxyXG4gICAgICB0aGlzLnByb3BzLnJlbW92ZUNvbnZlcnNhdGlvbklkKClcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5yZW1vdmVNZXNzYWdlKG1lc3NhZ2UuaWQpXHJcbiAgICAgICAgdGhpcy5zZW5kTWVzc2FnZShtZXNzYWdlLmF0dGFjaG1lbnQpXHJcbiAgICAgIH0sIDEwMClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucHJvcHMucmVtb3ZlTWVzc2FnZShtZXNzYWdlLmlkKVxyXG4gICAgICB0aGlzLnNlbmRNZXNzYWdlKG1lc3NhZ2UuYXR0YWNobWVudClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxvYWRDb252ZXJzYXRpb24gPSByZXMgPT4ge1xyXG4gICAgY29uc3QgeyBhZGRVc2VyTWVzc2FnZSwgYWRkQm90TWVzc2FnZSB9ID0gdGhpcy5wcm9wc1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlczogW10gfSwgKCkgPT4ge1xyXG4gICAgICByZXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gaXRlbS5kYXRhIHx8IHt9XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZXMgPSBkYXRhLm1lc3NhZ2VzIHx8IFtdXHJcbiAgICAgICAgbWVzc2FnZXMuZm9yRWFjaChtZXNzYWdlID0+IHtcclxuICAgICAgICAgIGlmIChpdGVtLmlzQm90KSB7XHJcbiAgICAgICAgICAgIGFkZEJvdE1lc3NhZ2UoW21lc3NhZ2VdLCB7IC4uLmRhdGEgfSlcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0ge1xyXG4gICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICAgIHBhcnRpY2lwYW50OiB7IGlzQm90OiBpdGVtLmlzQm90IH0sXHJcbiAgICAgICAgICAgICAgYXR0YWNobWVudDogbWVzc2FnZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhZGRVc2VyTWVzc2FnZShpbnB1dClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGRvTWVzc2FnZXNQb2xsaW5nID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuX2lzUG9sbGluZyB8fCAhdGhpcy5wcm9wcy5jb252ZXJzYXRpb25JZCkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHRoaXMuX2lzUG9sbGluZyA9IHRydWVcclxuXHJcbiAgICBsZXQgc2hvdWxkUG9sbCA9IHRydWVcclxuICAgIGxldCBlcnJvckNvdW50ID0gMFxyXG5cclxuICAgIGRvIHtcclxuICAgICAgY29uc3QgeyBsYXN0TWVzc2FnZUlkLCBjaGFubmVsSWQsIHRva2VuLCBjb252ZXJzYXRpb25JZCB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICBpZiAoIWNvbnZlcnNhdGlvbklkKSB7XHJcbiAgICAgICAgLy8gY292ZXJzYXRpb24gaWQgZXhwaXJlZD9cclxuICAgICAgICBicmVha1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBzaG91bGRXYWl0WHNlY29uZHMgPSBmYWxzZVxyXG4gICAgICBsZXQgdGltZVRvU2xlZXAgPSAwXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyB3YWl0VGltZSB9ID0gYXdhaXQgdGhpcy5wcm9wcy5wb2xsTWVzc2FnZXMoXHJcbiAgICAgICAgICBjaGFubmVsSWQsXHJcbiAgICAgICAgICB0b2tlbixcclxuICAgICAgICAgIGNvbnZlcnNhdGlvbklkLFxyXG4gICAgICAgICAgbGFzdE1lc3NhZ2VJZCxcclxuICAgICAgICApXHJcbiAgICAgICAgc2hvdWxkUG9sbCA9IHdhaXRUaW1lID09PSAwXHJcbiAgICAgICAgc2hvdWxkV2FpdFhzZWNvbmRzID0gd2FpdFRpbWUgPiAwXHJcbiAgICAgICAgdGltZVRvU2xlZXAgPSB3YWl0VGltZSAqIDEwMDBcclxuICAgICAgICBlcnJvckNvdW50ID0gMFxyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBzaG91bGRQb2xsID0gZmFsc2VcclxuICAgICAgICBlcnJvckNvdW50KytcclxuICAgICAgfVxyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIE5vdGU6IElmIHRoZSBzZXJ2ZXIgcmV0dXJucyBhIHdhaXRUaW1lICE9IDAsIGl0IG1lYW5zIHRoYXQgY29udmVyc2F0aW9uIGhhcyBubyBuZXcgbWVzc2FnZXMgc2luY2UgMiBtaW51dGVzLlxyXG4gICAgICAgKiBTbywgbGV0J3MgcG9sbCB0byBjaGVjayBuZXcgbWVzc2FnZXMgZXZlcnkgXCJ3YWl0VGltZVwiIHNlY29uZHMgKHdhaXRUaW1lID0gMTIwIHNlY29uZHMgcGVyIGRlZmF1bHQpXHJcbiAgICAgICAqL1xyXG4gICAgICBpZiAoc2hvdWxkV2FpdFhzZWNvbmRzKSB7XHJcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnRpbWVvdXRSZXNvbHZlID0gcmVzb2x2ZVxyXG4gICAgICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChyZXNvbHZlLCB0aW1lVG9TbGVlcClcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMudGltZW91dCA9IG51bGxcclxuICAgICAgfSBlbHNlIGlmICghc2hvdWxkUG9sbCAmJiBlcnJvckNvdW50IDwgNCkge1xyXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAzMDApKVxyXG4gICAgICB9XHJcbiAgICB9IHdoaWxlIChzaG91bGRQb2xsIHx8IGVycm9yQ291bnQgPCA0KVxyXG4gICAgdGhpcy5faXNQb2xsaW5nID0gZmFsc2VcclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGNsb3NlV2ViY2hhdCxcclxuICAgICAgcHJlZmVyZW5jZXMsXHJcbiAgICAgIHNob3dJbmZvLFxyXG4gICAgICBvbkNsaWNrU2hvd0luZm8sXHJcbiAgICAgIGNvbnRhaW5lck1lc3NhZ2VzU3R5bGUsXHJcbiAgICAgIGNvbnRhaW5lclN0eWxlLFxyXG4gICAgICBzZWNvbmRhcnlWaWV3LFxyXG4gICAgICBwcmltYXJ5SGVhZGVyLFxyXG4gICAgICBzZWNvbmRhcnlIZWFkZXIsXHJcbiAgICAgIHNlY29uZGFyeUNvbnRlbnQsXHJcbiAgICAgIGxvZ29TdHlsZSxcclxuICAgICAgc2hvdyxcclxuICAgICAgZW5hYmxlSGlzdG9yeUlucHV0LFxyXG4gICAgICByZWFkT25seU1vZGUsXHJcbiAgICB9ID0gdGhpcy5wcm9wc1xyXG4gICAgY29uc3QgeyBzaG93U2xvZ2FuLCBtZXNzYWdlcywgaW5wdXRIZWlnaHQgfSA9IHRoaXMuc3RhdGVcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjeCgnUmVjYXN0QXBwQ2hhdCBDYWlBcHBDaGF0JywgeyBvcGVuOiBzaG93LCBjbG9zZTogIXNob3cgfSl9XHJcbiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBwcmVmZXJlbmNlcy5iYWNrZ3JvdW5kQ29sb3IsIC4uLmNvbnRhaW5lclN0eWxlIH19XHJcbiAgICAgID5cclxuICAgICAgICB7c2Vjb25kYXJ5VmlldyA/IChcclxuICAgICAgICAgIHNlY29uZGFyeUhlYWRlclxyXG4gICAgICAgICkgOiBwcmltYXJ5SGVhZGVyID8gKFxyXG4gICAgICAgICAgcHJpbWFyeUhlYWRlcihjbG9zZVdlYmNoYXQpXHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxIZWFkZXJcclxuICAgICAgICAgICAgY2xvc2VXZWJjaGF0PXtjbG9zZVdlYmNoYXR9XHJcbiAgICAgICAgICAgIHByZWZlcmVuY2VzPXtwcmVmZXJlbmNlc31cclxuICAgICAgICAgICAga2V5PSdoZWFkZXInXHJcbiAgICAgICAgICAgIGxvZ29TdHlsZT17bG9nb1N0eWxlfVxyXG4gICAgICAgICAgICByZWFkT25seU1vZGU9e3JlYWRPbmx5TW9kZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9J1JlY2FzdEFwcENoYXQtLWNvbnRlbnQgQ2FpQXBwQ2hhdC0tY29udGVudCdcclxuICAgICAgICAgIGtleT0nY29udGVudCdcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7c2Vjb25kYXJ5Vmlld1xyXG4gICAgICAgICAgICA/IHNlY29uZGFyeUNvbnRlbnRcclxuICAgICAgICAgICAgOiBbXHJcbiAgICAgICAgICAgICAgPExpdmVcclxuICAgICAgICAgICAgICAgIGtleT0nbGl2ZSdcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzPXttZXNzYWdlc31cclxuICAgICAgICAgICAgICAgIHByZWZlcmVuY2VzPXtwcmVmZXJlbmNlc31cclxuICAgICAgICAgICAgICAgIHNlbmRNZXNzYWdlPXt0aGlzLnNlbmRNZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgb25TY3JvbGxCb3R0b209e2Jvb2wgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dTbG9nYW46IGJvb2wgfSl9XHJcbiAgICAgICAgICAgICAgICBvblJldHJ5U2VuZE1lc3NhZ2U9e3RoaXMucmV0cnlTZW5kTWVzc2FnZX1cclxuICAgICAgICAgICAgICAgIG9uQ2FuY2VsU2VuZE1lc3NhZ2U9e3RoaXMuY2FuY2VsU2VuZE1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICBzaG93SW5mbz17c2hvd0luZm99XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrU2hvd0luZm89e29uQ2xpY2tTaG93SW5mb31cclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lck1lc3NhZ2VzU3R5bGU9e2NvbnRhaW5lck1lc3NhZ2VzU3R5bGV9XHJcbiAgICAgICAgICAgICAgICByZWFkT25seU1vZGU9e3JlYWRPbmx5TW9kZX1cclxuICAgICAgICAgICAgICAvPixcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBrZXk9J3Nsb2dhbidcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAnMjMuMHJlbScgfX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goJ1JlY2FzdEFwcENoYXQtLXNsb2dhbiBDYWlBcHBDaGF0LS1zbG9nYW4nLCB7XHJcbiAgICAgICAgICAgICAgICAgICdSZWNhc3RBcHBDaGF0LS1zbG9nYW4tLWhpZGRlbiBDYWlBcHBDaGF0LS1zbG9nYW4tLWhpZGRlbic6ICFzaG93U2xvZ2FuLFxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgeydXZSBydW4gd2l0aCBTQVAgQ29udmVyc2F0aW9uYWwgQUknfVxyXG4gICAgICAgICAgICAgIDwvZGl2PixcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7ICFyZWFkT25seU1vZGUgJiYgPElucHV0XHJcbiAgICAgICAgICBtZW51PXtwcmVmZXJlbmNlcy5tZW51ICYmIHByZWZlcmVuY2VzLm1lbnUubWVudX1cclxuICAgICAgICAgIGlzT3Blbj17c2hvd31cclxuICAgICAgICAgIG9uU3VibWl0PXt0aGlzLnNlbmRNZXNzYWdlfVxyXG4gICAgICAgICAgcHJlZmVyZW5jZXM9e3ByZWZlcmVuY2VzfVxyXG4gICAgICAgICAgb25JbnB1dEhlaWdodD17aGVpZ2h0ID0+IHRoaXMuc2V0U3RhdGUoeyBpbnB1dEhlaWdodDogaGVpZ2h0IH0pfVxyXG4gICAgICAgICAgZW5hYmxlSGlzdG9yeUlucHV0PXtlbmFibGVIaXN0b3J5SW5wdXR9XHJcbiAgICAgICAgICBpbnB1dFBsYWNlaG9sZGVyPXtwcm9wT3IoJ1dyaXRlIGEgcmVwbHknLCAndXNlcklucHV0UGxhY2Vob2xkZXInLCBwcmVmZXJlbmNlcyl9XHJcbiAgICAgICAgICBjaGFyYWN0ZXJMaW1pdD17cHJvcE9yKDAsICdjaGFyYWN0ZXJMaW1pdCcsIHByZWZlcmVuY2VzKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5DaGF0LnByb3BUeXBlcyA9IHtcclxuICBwb3N0TWVzc2FnZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgY2xvc2VXZWJjaGF0OiBQcm9wVHlwZXMuZnVuYyxcclxuICBwb2xsTWVzc2FnZXM6IFByb3BUeXBlcy5mdW5jLFxyXG4gIGNoYXRJZDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBjaGFubmVsSWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgbGFzdE1lc3NhZ2VJZDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBjb252ZXJzYXRpb25JZDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBjb252ZXJzYXRpb25IaXN0b3J5SWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgbWVzc2FnZXM6IFByb3BUeXBlcy5hcnJheSxcclxuICBwcmVmZXJlbmNlczogUHJvcFR5cGVzLm9iamVjdCxcclxuICBzaG93SW5mbzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgc2VuZE1lc3NhZ2VQcm9taXNlOiBQcm9wVHlwZXMuZnVuYyxcclxuICBsb2FkQ29udmVyc2F0aW9uSGlzdG9yeVByb21pc2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gIHByaW1hcnlIZWFkZXI6IFByb3BUeXBlcy5mdW5jLFxyXG4gIHNlY29uZGFyeVZpZXc6IFByb3BUeXBlcy5ib29sLFxyXG4gIHNlY29uZGFyeUhlYWRlcjogUHJvcFR5cGVzLmFueSxcclxuICBzZWNvbmRhcnlDb250ZW50OiBQcm9wVHlwZXMuYW55LFxyXG4gIGdldExhc3RNZXNzYWdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICBjb250YWluZXJNZXNzYWdlc1N0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGNvbnRhaW5lclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIHNob3c6IFByb3BUeXBlcy5ib29sLFxyXG4gIGVuYWJsZUhpc3RvcnlJbnB1dDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgcmVhZE9ubHlNb2RlOiBQcm9wVHlwZXMuYm9vbCxcclxuICBkZWZhdWx0TWVzc2FnZURlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0XHJcbiJdfQ==