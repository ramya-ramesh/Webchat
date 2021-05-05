"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.object.assign.js");

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

var _reactRedux = require("react-redux");

var _Chat = _interopRequireDefault(require("../Chat"));

var _Expander = _interopRequireDefault(require("../../components/Expander"));

var _messages = require("../../actions/messages");

var _conversation = require("../../actions/conversation");

var _helpers = require("../../helpers");

require("./style.scss");

var _dec, _class, _temp;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var NO_LOCALSTORAGE_MESSAGE = 'Sorry, your browser does not support web storage. Are you in localhost ?';
var App = (_dec = (0, _reactRedux.connect)(function (state) {
  return {
    isReady: state.conversation.conversationId
  };
}, {
  setCredentials: _conversation.setCredentials,
  setFirstMessage: _messages.setFirstMessage,
  createConversation: _conversation.createConversation,
  removeAllMessages: _messages.removeAllMessages
}), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(App, _Component);

  var _super = _createSuper(App);

  function App() {
    var _this;

    (0, _classCallCheck2.default)(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      expanded: _this.props.expanded || false,
      isReady: null
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "toggleChat", function () {
      var clearMessagesOnclose = _this.props.clearMessagesOnclose;

      _this.setState({
        expanded: !_this.state.expanded
      }, function () {
        if (!_this.state.expanded && clearMessagesOnclose) {
          _this.clearMessages();
        }
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "clearMessages", function () {
      _this.props.removeAllMessages();
    });
    return _this;
  }

  (0, _createClass2.default)(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          channelId = _this$props.channelId,
          token = _this$props.token,
          preferences = _this$props.preferences,
          noCredentials = _this$props.noCredentials,
          onRef = _this$props.onRef;
      var credentials = (0, _helpers.getCredentialsFromLocalStorage)(channelId);
      var payload = {
        channelId: channelId,
        token: token
      };

      if (onRef) {
        onRef(this);
      }

      if (noCredentials) {
        return false;
      }

      if (credentials) {
        Object.assign(payload, credentials);
      } else {// Wait until a message is being send before creating the conversation.
        // this.props.createConversation(channelId, token).then(({ id, chatId }) => {
        //   storeCredentialsToLocalStorage(chatId, id, preferences.conversationTimeToLive, channelId)
        // })
      }

      if (preferences.welcomeMessage) {
        console.log("Printing from the webchat bot");
        var msg = localStorage.getItem("CAIWelcomeMsg") ? localStorage.getItem("CAIWelcomeMsg") : preferences.welcomeMessage;
        console.log(msg);
        this.props.setFirstMessage(msg);
      }

      this.props.setCredentials(payload);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props2 = this.props,
          onToggle = _this$props2.onToggle,
          conversationHistoryId = _this$props2.conversationHistoryId;

      if (prevState.expanded !== this.state.expanded) {
        if (window.localStorage) {
          localStorage.setItem('isChatOpen', this.state.expanded);

          if (onToggle) {
            onToggle(this.state.expanded);
          }
        } else {
          console.log(NO_LOCALSTORAGE_MESSAGE);
        }
      }
    }
  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      console.log(error, info);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          preferences = _this$props3.preferences,
          containerMessagesStyle = _this$props3.containerMessagesStyle,
          containerStyle = _this$props3.containerStyle,
          expanderStyle = _this$props3.expanderStyle,
          logoStyle = _this$props3.logoStyle,
          showInfo = _this$props3.showInfo,
          sendMessagePromise = _this$props3.sendMessagePromise,
          loadConversationHistoryPromise = _this$props3.loadConversationHistoryPromise,
          onClickShowInfo = _this$props3.onClickShowInfo,
          conversationHistoryId = _this$props3.conversationHistoryId,
          primaryHeader = _this$props3.primaryHeader,
          secondaryView = _this$props3.secondaryView,
          secondaryHeader = _this$props3.secondaryHeader,
          secondaryContent = _this$props3.secondaryContent,
          getLastMessage = _this$props3.getLastMessage,
          enableHistoryInput = _this$props3.enableHistoryInput,
          defaultMessageDelay = _this$props3.defaultMessageDelay,
          readOnlyMode = _this$props3.readOnlyMode;
      var expanded = this.state.expanded;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "RecastApp CaiApp"
      }, /*#__PURE__*/_react.default.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      }), /*#__PURE__*/_react.default.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      }), /*#__PURE__*/_react.default.createElement(_Expander.default, {
        show: !expanded,
        onClick: this.toggleChat,
        preferences: preferences,
        style: expanderStyle
      }), /*#__PURE__*/_react.default.createElement(_Chat.default, {
        show: expanded,
        closeWebchat: this.toggleChat,
        preferences: preferences,
        containerMessagesStyle: containerMessagesStyle,
        containerStyle: containerStyle,
        logoStyle: logoStyle,
        showInfo: showInfo,
        onClickShowInfo: onClickShowInfo,
        sendMessagePromise: sendMessagePromise,
        loadConversationHistoryPromise: loadConversationHistoryPromise,
        primaryHeader: primaryHeader,
        secondaryView: secondaryView,
        secondaryHeader: secondaryHeader,
        secondaryContent: secondaryContent,
        getLastMessage: getLastMessage,
        enableHistoryInput: enableHistoryInput,
        defaultMessageDelay: defaultMessageDelay,
        conversationHistoryId: conversationHistoryId,
        readOnlyMode: readOnlyMode
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var isReady = props.isReady,
          preferences = props.preferences; // Since the conversation is only created after the first submit
      // need to check if the current state is expanded to avoid webchat being collasped
      // when the conversation is created.

      if (isReady !== state.isReady && !state.expanded) {
        var expanded = null;

        switch (preferences.openingType) {
          case 'always':
            expanded = true;
            break;

          case 'never':
            expanded = false;
            break;

          case 'memory':
            if (window.localStorage) {
              expanded = localStorage.getItem('isChatOpen') === 'true';
            } else {
              console.log(NO_LOCALSTORAGE_MESSAGE);
            }

            break;

          default:
            break;
        }

        return {
          expanded: expanded,
          isReady: isReady
        };
      }

      return {
        isReady: isReady
      };
    }
  }]);
  return App;
}(_react.Component), _temp)) || _class);
App.propTypes = {
  token: _propTypes.default.string,
  channelId: _propTypes.default.string,
  preferences: _propTypes.default.object.isRequired,
  containerMessagesStyle: _propTypes.default.object,
  expanderStyle: _propTypes.default.object,
  containerStyle: _propTypes.default.object,
  showInfo: _propTypes.default.bool,
  sendMessagePromise: _propTypes.default.func,
  conversationHistoryId: _propTypes.default.string,
  loadConversationHistoryPromise: _propTypes.default.func,
  noCredentials: _propTypes.default.bool,
  primaryHeader: _propTypes.default.func,
  secondaryView: _propTypes.default.bool,
  secondaryHeader: _propTypes.default.any,
  secondaryContent: _propTypes.default.any,
  getLastMessage: _propTypes.default.func,
  expanded: _propTypes.default.bool,
  onToggle: _propTypes.default.func,
  removeAllMessages: _propTypes.default.func,
  onRef: _propTypes.default.func,
  clearMessagesOnclose: _propTypes.default.bool,
  enableHistoryInput: _propTypes.default.bool,
  readOnlyMode: _propTypes.default.bool,
  defaultMessageDelay: _propTypes.default.number
};
var _default = App;
exports.default = _default;