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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250YWluZXJzL0FwcC9pbmRleC5qcyJdLCJuYW1lcyI6WyJOT19MT0NBTFNUT1JBR0VfTUVTU0FHRSIsIkFwcCIsInN0YXRlIiwiaXNSZWFkeSIsImNvbnZlcnNhdGlvbiIsImNvbnZlcnNhdGlvbklkIiwic2V0Q3JlZGVudGlhbHMiLCJzZXRGaXJzdE1lc3NhZ2UiLCJjcmVhdGVDb252ZXJzYXRpb24iLCJyZW1vdmVBbGxNZXNzYWdlcyIsImV4cGFuZGVkIiwicHJvcHMiLCJjbGVhck1lc3NhZ2VzT25jbG9zZSIsInNldFN0YXRlIiwiY2xlYXJNZXNzYWdlcyIsImNoYW5uZWxJZCIsInRva2VuIiwicHJlZmVyZW5jZXMiLCJub0NyZWRlbnRpYWxzIiwib25SZWYiLCJjcmVkZW50aWFscyIsInBheWxvYWQiLCJPYmplY3QiLCJhc3NpZ24iLCJ3ZWxjb21lTWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJtc2ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwib25Ub2dnbGUiLCJjb252ZXJzYXRpb25IaXN0b3J5SWQiLCJ3aW5kb3ciLCJzZXRJdGVtIiwiZXJyb3IiLCJpbmZvIiwiY29udGFpbmVyTWVzc2FnZXNTdHlsZSIsImNvbnRhaW5lclN0eWxlIiwiZXhwYW5kZXJTdHlsZSIsImxvZ29TdHlsZSIsInNob3dJbmZvIiwic2VuZE1lc3NhZ2VQcm9taXNlIiwibG9hZENvbnZlcnNhdGlvbkhpc3RvcnlQcm9taXNlIiwib25DbGlja1Nob3dJbmZvIiwicHJpbWFyeUhlYWRlciIsInNlY29uZGFyeVZpZXciLCJzZWNvbmRhcnlIZWFkZXIiLCJzZWNvbmRhcnlDb250ZW50IiwiZ2V0TGFzdE1lc3NhZ2UiLCJlbmFibGVIaXN0b3J5SW5wdXQiLCJkZWZhdWx0TWVzc2FnZURlbGF5IiwicmVhZE9ubHlNb2RlIiwidG9nZ2xlQ2hhdCIsIm9wZW5pbmdUeXBlIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImJvb2wiLCJmdW5jIiwiYW55IiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7OztBQUVBLElBQU1BLHVCQUF1QixHQUN6QiwwRUFESjtJQWNNQyxHLFdBWEwseUJBQ0MsVUFBQUMsS0FBSztBQUFBLFNBQUs7QUFDUkMsSUFBQUEsT0FBTyxFQUFFRCxLQUFLLENBQUNFLFlBQU4sQ0FBbUJDO0FBRHBCLEdBQUw7QUFBQSxDQUROLEVBSUM7QUFDQUMsRUFBQUEsY0FBYyxFQUFkQSw0QkFEQTtBQUVBQyxFQUFBQSxlQUFlLEVBQWZBLHlCQUZBO0FBR0FDLEVBQUFBLGtCQUFrQixFQUFsQkEsZ0NBSEE7QUFJQUMsRUFBQUEsaUJBQWlCLEVBQWpCQTtBQUpBLENBSkQsQzs7Ozs7Ozs7Ozs7Ozs7O3dGQVlTO0FBQ05DLE1BQUFBLFFBQVEsRUFBRSxNQUFLQyxLQUFMLENBQVdELFFBQVgsSUFBdUIsS0FEM0I7QUFFTlAsTUFBQUEsT0FBTyxFQUFFO0FBRkgsSzs2RkFzRkssWUFBTTtBQUFBLFVBQ1RTLG9CQURTLEdBQ2dCLE1BQUtELEtBRHJCLENBQ1RDLG9CQURTOztBQUVqQixZQUFLQyxRQUFMLENBQWM7QUFBRUgsUUFBQUEsUUFBUSxFQUFFLENBQUMsTUFBS1IsS0FBTCxDQUFXUTtBQUF4QixPQUFkLEVBQWtELFlBQU07QUFDdEQsWUFBSSxDQUFDLE1BQUtSLEtBQUwsQ0FBV1EsUUFBWixJQUF3QkUsb0JBQTVCLEVBQWtEO0FBQ2hELGdCQUFLRSxhQUFMO0FBQ0Q7QUFDRixPQUpEO0FBS0QsSztnR0FFZSxZQUFNO0FBQ3BCLFlBQUtILEtBQUwsQ0FBV0YsaUJBQVg7QUFDRCxLOzs7Ozs7d0NBOURvQjtBQUFBLHdCQUM2QyxLQUFLRSxLQURsRDtBQUFBLFVBQ1hJLFNBRFcs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RU0sbUJBQVVPO0FBeEJqQixDQUFoQjtlQTJCZWhFLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuaW1wb3J0IENoYXQgZnJvbSAnY29udGFpbmVycy9DaGF0J1xyXG5pbXBvcnQgRXhwYW5kZXIgZnJvbSAnY29tcG9uZW50cy9FeHBhbmRlcidcclxuaW1wb3J0IHsgc2V0Rmlyc3RNZXNzYWdlLCByZW1vdmVBbGxNZXNzYWdlcyB9IGZyb20gJ2FjdGlvbnMvbWVzc2FnZXMnXHJcbmltcG9ydCB7IHNldENyZWRlbnRpYWxzLCBjcmVhdGVDb252ZXJzYXRpb24gfSBmcm9tICdhY3Rpb25zL2NvbnZlcnNhdGlvbidcclxuaW1wb3J0IHsgZ2V0Q3JlZGVudGlhbHNGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSAnaGVscGVycydcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5zY3NzJ1xyXG5cclxuY29uc3QgTk9fTE9DQUxTVE9SQUdFX01FU1NBR0VcclxuICA9ICdTb3JyeSwgeW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgd2ViIHN0b3JhZ2UuIEFyZSB5b3UgaW4gbG9jYWxob3N0ID8nXHJcblxyXG5AY29ubmVjdChcclxuICBzdGF0ZSA9PiAoe1xyXG4gICAgaXNSZWFkeTogc3RhdGUuY29udmVyc2F0aW9uLmNvbnZlcnNhdGlvbklkLFxyXG4gICAgfSksXHJcbiAge1xyXG4gIHNldENyZWRlbnRpYWxzLFxyXG4gIHNldEZpcnN0TWVzc2FnZSxcclxuICBjcmVhdGVDb252ZXJzYXRpb24sXHJcbiAgcmVtb3ZlQWxsTWVzc2FnZXMsXHJcbiAgfSxcclxuKVxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgZXhwYW5kZWQ6IHRoaXMucHJvcHMuZXhwYW5kZWQgfHwgZmFsc2UsXHJcbiAgICBpc1JlYWR5OiBudWxsLFxyXG4gIH1cclxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIChwcm9wcywgc3RhdGUpIHtcclxuICAgIGNvbnN0IHsgaXNSZWFkeSwgcHJlZmVyZW5jZXMgfSA9IHByb3BzXHJcblxyXG4gICAgLy8gU2luY2UgdGhlIGNvbnZlcnNhdGlvbiBpcyBvbmx5IGNyZWF0ZWQgYWZ0ZXIgdGhlIGZpcnN0IHN1Ym1pdFxyXG4gICAgLy8gbmVlZCB0byBjaGVjayBpZiB0aGUgY3VycmVudCBzdGF0ZSBpcyBleHBhbmRlZCB0byBhdm9pZCB3ZWJjaGF0IGJlaW5nIGNvbGxhc3BlZFxyXG4gICAgLy8gd2hlbiB0aGUgY29udmVyc2F0aW9uIGlzIGNyZWF0ZWQuXHJcbiAgICBpZiAoaXNSZWFkeSAhPT0gc3RhdGUuaXNSZWFkeSAmJiAhc3RhdGUuZXhwYW5kZWQpIHtcclxuICAgICAgbGV0IGV4cGFuZGVkID0gbnVsbFxyXG5cclxuICAgICAgc3dpdGNoIChwcmVmZXJlbmNlcy5vcGVuaW5nVHlwZSkge1xyXG4gICAgICBjYXNlICdhbHdheXMnOlxyXG4gICAgICAgIGV4cGFuZGVkID0gdHJ1ZVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGNhc2UgJ25ldmVyJzpcclxuICAgICAgICBleHBhbmRlZCA9IGZhbHNlXHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgY2FzZSAnbWVtb3J5JzpcclxuICAgICAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZSkge1xyXG4gICAgICAgICAgZXhwYW5kZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaXNDaGF0T3BlbicpID09PSAndHJ1ZSdcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coTk9fTE9DQUxTVE9SQUdFX01FU1NBR0UpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4geyBleHBhbmRlZCwgaXNSZWFkeSB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBpc1JlYWR5IH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcclxuICAgIGNvbnN0IHsgY2hhbm5lbElkLCB0b2tlbiwgcHJlZmVyZW5jZXMsIG5vQ3JlZGVudGlhbHMsIG9uUmVmIH0gPSB0aGlzLnByb3BzXHJcbiAgICBjb25zdCBjcmVkZW50aWFscyA9IGdldENyZWRlbnRpYWxzRnJvbUxvY2FsU3RvcmFnZShjaGFubmVsSWQpXHJcbiAgICBjb25zdCBwYXlsb2FkID0geyBjaGFubmVsSWQsIHRva2VuIH1cclxuXHJcbiAgICBpZiAob25SZWYpIHtcclxuICAgICAgb25SZWYodGhpcylcclxuICAgIH1cclxuXHJcbiAgICBpZiAobm9DcmVkZW50aWFscykge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY3JlZGVudGlhbHMpIHtcclxuICAgICAgT2JqZWN0LmFzc2lnbihwYXlsb2FkLCBjcmVkZW50aWFscylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFdhaXQgdW50aWwgYSBtZXNzYWdlIGlzIGJlaW5nIHNlbmQgYmVmb3JlIGNyZWF0aW5nIHRoZSBjb252ZXJzYXRpb24uXHJcbiAgICAgIC8vIHRoaXMucHJvcHMuY3JlYXRlQ29udmVyc2F0aW9uKGNoYW5uZWxJZCwgdG9rZW4pLnRoZW4oKHsgaWQsIGNoYXRJZCB9KSA9PiB7XHJcbiAgICAgIC8vICAgc3RvcmVDcmVkZW50aWFsc1RvTG9jYWxTdG9yYWdlKGNoYXRJZCwgaWQsIHByZWZlcmVuY2VzLmNvbnZlcnNhdGlvblRpbWVUb0xpdmUsIGNoYW5uZWxJZClcclxuICAgICAgLy8gfSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAocHJlZmVyZW5jZXMud2VsY29tZU1lc3NhZ2UpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJQcmludGluZyBmcm9tIHRoZSB3ZWJjaGF0IGJvdFwiKVxyXG4gICAgICBsZXQgbXNnID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJDQUlXZWxjb21lTXNnXCIpID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJDQUlXZWxjb21lTXNnXCIpIDogcHJlZmVyZW5jZXMud2VsY29tZU1lc3NhZ2U7XHJcbiAgICAgIGNvbnNvbGUubG9nKG1zZylcclxuICAgICAgdGhpcy5wcm9wcy5zZXRGaXJzdE1lc3NhZ2UobXNnKVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucHJvcHMuc2V0Q3JlZGVudGlhbHMocGF5bG9hZClcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSAocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcclxuICAgIGNvbnN0IHsgb25Ub2dnbGUsIGNvbnZlcnNhdGlvbkhpc3RvcnlJZCB9ID0gdGhpcy5wcm9wc1xyXG5cclxuICAgIGlmIChwcmV2U3RhdGUuZXhwYW5kZWQgIT09IHRoaXMuc3RhdGUuZXhwYW5kZWQpIHtcclxuICAgICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaXNDaGF0T3BlbicsIHRoaXMuc3RhdGUuZXhwYW5kZWQpXHJcbiAgICAgICAgaWYgKG9uVG9nZ2xlKSB7XHJcbiAgICAgICAgICBvblRvZ2dsZSh0aGlzLnN0YXRlLmV4cGFuZGVkKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhOT19MT0NBTFNUT1JBR0VfTUVTU0FHRSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkQ2F0Y2ggKGVycm9yLCBpbmZvKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvciwgaW5mbylcclxuICB9XHJcblxyXG4gIHRvZ2dsZUNoYXQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGNsZWFyTWVzc2FnZXNPbmNsb3NlIH0gPSB0aGlzLnByb3BzXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZXhwYW5kZWQ6ICF0aGlzLnN0YXRlLmV4cGFuZGVkIH0sICgpID0+IHtcclxuICAgICAgaWYgKCF0aGlzLnN0YXRlLmV4cGFuZGVkICYmIGNsZWFyTWVzc2FnZXNPbmNsb3NlKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhck1lc3NhZ2VzKClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNsZWFyTWVzc2FnZXMgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLnJlbW92ZUFsbE1lc3NhZ2VzKClcclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHByZWZlcmVuY2VzLFxyXG4gICAgICBjb250YWluZXJNZXNzYWdlc1N0eWxlLFxyXG4gICAgICBjb250YWluZXJTdHlsZSxcclxuICAgICAgZXhwYW5kZXJTdHlsZSxcclxuICAgICAgbG9nb1N0eWxlLFxyXG4gICAgICBzaG93SW5mbyxcclxuICAgICAgc2VuZE1lc3NhZ2VQcm9taXNlLFxyXG4gICAgICBsb2FkQ29udmVyc2F0aW9uSGlzdG9yeVByb21pc2UsXHJcbiAgICAgIG9uQ2xpY2tTaG93SW5mbyxcclxuICAgICAgY29udmVyc2F0aW9uSGlzdG9yeUlkLFxyXG4gICAgICBwcmltYXJ5SGVhZGVyLFxyXG4gICAgICBzZWNvbmRhcnlWaWV3LFxyXG4gICAgICBzZWNvbmRhcnlIZWFkZXIsXHJcbiAgICAgIHNlY29uZGFyeUNvbnRlbnQsXHJcbiAgICAgIGdldExhc3RNZXNzYWdlLFxyXG4gICAgICBlbmFibGVIaXN0b3J5SW5wdXQsXHJcbiAgICAgIGRlZmF1bHRNZXNzYWdlRGVsYXksXHJcbiAgICAgIHJlYWRPbmx5TW9kZSxcclxuICAgIH0gPSB0aGlzLnByb3BzXHJcbiAgICBjb25zdCB7IGV4cGFuZGVkIH0gPSB0aGlzLnN0YXRlXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J1JlY2FzdEFwcCBDYWlBcHAnPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9J3N0eWxlc2hlZXQnXHJcbiAgICAgICAgICB0eXBlPSd0ZXh0L2NzcydcclxuICAgICAgICAgIGhyZWY9J2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLm1pbi5jc3MnXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPSdzdHlsZXNoZWV0J1xyXG4gICAgICAgICAgdHlwZT0ndGV4dC9jc3MnXHJcbiAgICAgICAgICBocmVmPSdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay10aGVtZS5taW4uY3NzJ1xyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxFeHBhbmRlclxyXG4gICAgICAgICAgc2hvdz17IWV4cGFuZGVkfVxyXG4gICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVDaGF0fVxyXG4gICAgICAgICAgcHJlZmVyZW5jZXM9e3ByZWZlcmVuY2VzfVxyXG4gICAgICAgICAgc3R5bGU9e2V4cGFuZGVyU3R5bGV9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPENoYXRcclxuICAgICAgICAgIHNob3c9e2V4cGFuZGVkfVxyXG4gICAgICAgICAgY2xvc2VXZWJjaGF0PXt0aGlzLnRvZ2dsZUNoYXR9XHJcbiAgICAgICAgICBwcmVmZXJlbmNlcz17cHJlZmVyZW5jZXN9XHJcbiAgICAgICAgICBjb250YWluZXJNZXNzYWdlc1N0eWxlPXtjb250YWluZXJNZXNzYWdlc1N0eWxlfVxyXG4gICAgICAgICAgY29udGFpbmVyU3R5bGU9e2NvbnRhaW5lclN0eWxlfVxyXG4gICAgICAgICAgbG9nb1N0eWxlPXtsb2dvU3R5bGV9XHJcbiAgICAgICAgICBzaG93SW5mbz17c2hvd0luZm99XHJcbiAgICAgICAgICBvbkNsaWNrU2hvd0luZm89e29uQ2xpY2tTaG93SW5mb31cclxuICAgICAgICAgIHNlbmRNZXNzYWdlUHJvbWlzZT17c2VuZE1lc3NhZ2VQcm9taXNlfVxyXG4gICAgICAgICAgbG9hZENvbnZlcnNhdGlvbkhpc3RvcnlQcm9taXNlPXtsb2FkQ29udmVyc2F0aW9uSGlzdG9yeVByb21pc2V9XHJcbiAgICAgICAgICBwcmltYXJ5SGVhZGVyPXtwcmltYXJ5SGVhZGVyfVxyXG4gICAgICAgICAgc2Vjb25kYXJ5Vmlldz17c2Vjb25kYXJ5Vmlld31cclxuICAgICAgICAgIHNlY29uZGFyeUhlYWRlcj17c2Vjb25kYXJ5SGVhZGVyfVxyXG4gICAgICAgICAgc2Vjb25kYXJ5Q29udGVudD17c2Vjb25kYXJ5Q29udGVudH1cclxuICAgICAgICAgIGdldExhc3RNZXNzYWdlPXtnZXRMYXN0TWVzc2FnZX1cclxuICAgICAgICAgIGVuYWJsZUhpc3RvcnlJbnB1dD17ZW5hYmxlSGlzdG9yeUlucHV0fVxyXG4gICAgICAgICAgZGVmYXVsdE1lc3NhZ2VEZWxheT17ZGVmYXVsdE1lc3NhZ2VEZWxheX1cclxuICAgICAgICAgIGNvbnZlcnNhdGlvbkhpc3RvcnlJZD17Y29udmVyc2F0aW9uSGlzdG9yeUlkfVxyXG4gICAgICAgICAgcmVhZE9ubHlNb2RlPXtyZWFkT25seU1vZGV9XHJcblxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuQXBwLnByb3BUeXBlcyA9IHtcclxuICB0b2tlbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICBjaGFubmVsSWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgcHJlZmVyZW5jZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICBjb250YWluZXJNZXNzYWdlc1N0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGV4cGFuZGVyU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgY29udGFpbmVyU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgc2hvd0luZm86IFByb3BUeXBlcy5ib29sLFxyXG4gIHNlbmRNZXNzYWdlUHJvbWlzZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgY29udmVyc2F0aW9uSGlzdG9yeUlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGxvYWRDb252ZXJzYXRpb25IaXN0b3J5UHJvbWlzZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgbm9DcmVkZW50aWFsczogUHJvcFR5cGVzLmJvb2wsXHJcbiAgcHJpbWFyeUhlYWRlcjogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgc2Vjb25kYXJ5VmlldzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgc2Vjb25kYXJ5SGVhZGVyOiBQcm9wVHlwZXMuYW55LFxyXG4gIHNlY29uZGFyeUNvbnRlbnQ6IFByb3BUeXBlcy5hbnksXHJcbiAgZ2V0TGFzdE1lc3NhZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gIGV4cGFuZGVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICBvblRvZ2dsZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgcmVtb3ZlQWxsTWVzc2FnZXM6IFByb3BUeXBlcy5mdW5jLFxyXG4gIG9uUmVmOiBQcm9wVHlwZXMuZnVuYyxcclxuICBjbGVhck1lc3NhZ2VzT25jbG9zZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgZW5hYmxlSGlzdG9yeUlucHV0OiBQcm9wVHlwZXMuYm9vbCxcclxuICByZWFkT25seU1vZGU6IFByb3BUeXBlcy5ib29sLFxyXG4gIGRlZmF1bHRNZXNzYWdlRGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcFxyXG4iXX0=