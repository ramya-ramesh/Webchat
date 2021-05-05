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