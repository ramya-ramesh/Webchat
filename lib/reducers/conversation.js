"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _reduxActions = require("redux-actions");

var _propOr = _interopRequireDefault(require("ramda/es/propOr"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  token: '',
  chatId: '',
  channelId: '',
  conversationId: '',
  lastMessageId: null
};

var _default = (0, _reduxActions.handleActions)({
  SET_CREDENTIALS: function SET_CREDENTIALS(state, _ref) {
    var payload = _ref.payload;
    return _objectSpread(_objectSpread({}, state), payload);
  },
  REMOVE_CONVERSATION_ID: function REMOVE_CONVERSATION_ID(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      conversationId: '',
      lastMessageId: null
    });
  },
  CREATE_CONVERSATION_SUCCESS: function CREATE_CONVERSATION_SUCCESS(state, _ref2) {
    var conversation = _ref2.payload;
    var id = conversation.id,
        chatId = conversation.chatId;
    return _objectSpread(_objectSpread({}, state), {}, {
      chatId: chatId,
      conversationId: id
    });
  },
  POLL_MESSAGES_SUCCESS: function POLL_MESSAGES_SUCCESS(state, _ref3) {
    var messages = _ref3.payload.messages;
    var messagesLength = messages.length;
    return messagesLength !== 0 ? _objectSpread(_objectSpread({}, state), {}, {
      lastMessageId: messages[messagesLength - 1].id
    }) : state;
  },
  POLL_MESSAGES_ERROR: function POLL_MESSAGES_ERROR(state, _ref4) {
    var payload = _ref4.payload;
    var error = (0, _propOr.default)({}, 'error', payload);
    var response = (0, _propOr.default)({}, 'response', error);
    var status = response.status,
        data = response.data;
    var errorMessage = (0, _propOr.default)(null, 'message', data);
    return status === 404 && errorMessage === 'Conversation not found' ? _objectSpread(_objectSpread({}, state), {}, {
      conversationId: '',
      lastMessageId: null
    }) : state;
  },
  GET_MESSAGES_SUCCESS: function GET_MESSAGES_SUCCESS(state, _ref5) {
    var messages = _ref5.payload.messages;
    var messagesLength = messages.length;
    return messagesLength !== 0 ? _objectSpread(_objectSpread({}, state), {}, {
      lastMessageId: messages[messagesLength - 1].id
    }) : state;
  }
}, initialState);

exports.default = _default;