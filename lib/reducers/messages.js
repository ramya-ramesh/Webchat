"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.array.find-index.js");

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.array.splice.js");

require("core-js/modules/es.object.assign.js");

require("core-js/modules/es.string.includes.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _reduxActions = require("redux-actions");

var _uniqWith = _interopRequireDefault(require("ramda/es/uniqWith"));

var _propOr = _interopRequireDefault(require("ramda/es/propOr"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = [];

var _default = (0, _reduxActions.handleActions)({
  SET_FIRST_MESSAGE: function SET_FIRST_MESSAGE(state, _ref) {
    var message = _ref.payload;
    return [{
      attachment: {
        type: 'text',
        content: message
      },
      id: "local-".concat(Math.random()),
      isWelcomeMessage: true,
      participant: {
        isBot: true
      }
    }].concat((0, _toConsumableArray2.default)(state));
  },
  POLL_MESSAGES_SUCCESS: function POLL_MESSAGES_SUCCESS(state, _ref2) {
    var payload = _ref2.payload;
    return (0, _uniqWith.default)(function (m1, m2) {
      return m1.id === m2.id;
    }, [].concat((0, _toConsumableArray2.default)(state), (0, _toConsumableArray2.default)(payload.messages)));
  },
  GET_MESSAGES_SUCCESS: function GET_MESSAGES_SUCCESS(state, _ref3) {
    var messages = _ref3.payload;
    return messages;
  },
  POST_MESSAGE_ERROR: function POST_MESSAGE_ERROR(state, _ref4) {
    var payload = _ref4.payload;
    var message = payload.message;
    var error = (0, _propOr.default)({}, 'error', payload);
    var response = (0, _propOr.default)({}, 'response', error);
    var status = response.status,
        data = response.data;
    var errorMessage = (0, _propOr.default)(null, 'message', data);

    var msg = _objectSpread(_objectSpread({}, message), {}, {
      retry: true,
      conversationExpired: status === 404 && typeof errorMessage === 'string' && errorMessage.includes('Conversation not found'),
      id: "local-".concat(Math.random()),
      participant: {
        isBot: false
      }
    });

    return [].concat((0, _toConsumableArray2.default)(state), [msg]);
  },
  REMOVE_MESSAGE: function REMOVE_MESSAGE(state, _ref5) {
    var messageId = _ref5.payload;
    var newState = Object.assign([], state);
    var indexMessage = state.findIndex(function (message) {
      return message.id === messageId;
    });

    if (indexMessage >= 0) {
      newState.splice(indexMessage, 1);
    }

    return newState;
  },
  REMOVE_ALL_MESSAGES: function REMOVE_ALL_MESSAGES() {
    return [];
  },
  ADD_BOT_MESSAGE: function ADD_BOT_MESSAGE(state, _ref6) {
    var payload = _ref6.payload;

    var getMessageTemplate = function getMessageTemplate(content) {
      return {
        attachment: content,
        data: payload.data,
        id: content.message_id || "local-".concat(Math.random()),
        participant: {
          isBot: true
        }
      };
    };

    var formattedMessages = payload.messages.map(function (message) {
      return getMessageTemplate(message);
    });
    return [].concat((0, _toConsumableArray2.default)(state), (0, _toConsumableArray2.default)(formattedMessages));
  },
  ADD_USER_MESSAGE: function ADD_USER_MESSAGE(state, _ref7) {
    var payload = _ref7.payload;

    var message = _objectSpread(_objectSpread({}, payload), {}, {
      id: "local-".concat(Math.random()),
      isSending: false,
      participant: {
        isBot: false
      }
    });

    return [].concat((0, _toConsumableArray2.default)(state), [message]);
  }
}, initialState);

exports.default = _default;