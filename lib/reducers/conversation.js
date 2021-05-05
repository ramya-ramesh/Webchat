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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9jb252ZXJzYXRpb24uanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwidG9rZW4iLCJjaGF0SWQiLCJjaGFubmVsSWQiLCJjb252ZXJzYXRpb25JZCIsImxhc3RNZXNzYWdlSWQiLCJTRVRfQ1JFREVOVElBTFMiLCJzdGF0ZSIsInBheWxvYWQiLCJSRU1PVkVfQ09OVkVSU0FUSU9OX0lEIiwiQ1JFQVRFX0NPTlZFUlNBVElPTl9TVUNDRVNTIiwiY29udmVyc2F0aW9uIiwiaWQiLCJQT0xMX01FU1NBR0VTX1NVQ0NFU1MiLCJtZXNzYWdlcyIsIm1lc3NhZ2VzTGVuZ3RoIiwibGVuZ3RoIiwiUE9MTF9NRVNTQUdFU19FUlJPUiIsImVycm9yIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJkYXRhIiwiZXJyb3JNZXNzYWdlIiwiR0VUX01FU1NBR0VTX1NVQ0NFU1MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsRUFBQUEsS0FBSyxFQUFFLEVBRFk7QUFFbkJDLEVBQUFBLE1BQU0sRUFBRSxFQUZXO0FBR25CQyxFQUFBQSxTQUFTLEVBQUUsRUFIUTtBQUluQkMsRUFBQUEsY0FBYyxFQUFFLEVBSkc7QUFLbkJDLEVBQUFBLGFBQWEsRUFBRTtBQUxJLENBQXJCOztlQVFlLGlDQUNiO0FBQ0VDLEVBQUFBLGVBQWUsRUFBRSx5QkFBQ0MsS0FBRCxRQUF3QjtBQUFBLFFBQWRDLE9BQWMsUUFBZEEsT0FBYztBQUN2QywyQ0FBWUQsS0FBWixHQUFzQkMsT0FBdEI7QUFDRCxHQUhIO0FBS0VDLEVBQUFBLHNCQUFzQixFQUFFLGdDQUFDRixLQUFELEVBQVc7QUFDakMsMkNBQVlBLEtBQVo7QUFBbUJILE1BQUFBLGNBQWMsRUFBRSxFQUFuQztBQUF1Q0MsTUFBQUEsYUFBYSxFQUFFO0FBQXREO0FBQ0QsR0FQSDtBQVNFSyxFQUFBQSwyQkFBMkIsRUFBRSxxQ0FBQ0gsS0FBRCxTQUFzQztBQUFBLFFBQW5CSSxZQUFtQixTQUE1QkgsT0FBNEI7QUFBQSxRQUN6REksRUFEeUQsR0FDMUNELFlBRDBDLENBQ3pEQyxFQUR5RDtBQUFBLFFBQ3JEVixNQURxRCxHQUMxQ1MsWUFEMEMsQ0FDckRULE1BRHFEO0FBRWpFLDJDQUFZSyxLQUFaO0FBQW1CTCxNQUFBQSxNQUFNLEVBQU5BLE1BQW5CO0FBQTJCRSxNQUFBQSxjQUFjLEVBQUVRO0FBQTNDO0FBQ0QsR0FaSDtBQWNFQyxFQUFBQSxxQkFBcUIsRUFBRSwrQkFBQ04sS0FBRCxTQUFzQztBQUFBLFFBQWpCTyxRQUFpQixTQUE1Qk4sT0FBNEIsQ0FBakJNLFFBQWlCO0FBQzNELFFBQU1DLGNBQWMsR0FBR0QsUUFBUSxDQUFDRSxNQUFoQztBQUVBLFdBQU9ELGNBQWMsS0FBSyxDQUFuQixtQ0FDRVIsS0FERjtBQUNTRixNQUFBQSxhQUFhLEVBQUVTLFFBQVEsQ0FBQ0MsY0FBYyxHQUFHLENBQWxCLENBQVIsQ0FBNkJIO0FBRHJELFNBRUhMLEtBRko7QUFHRCxHQXBCSDtBQXNCRVUsRUFBQUEsbUJBQW1CLEVBQUUsNkJBQUNWLEtBQUQsU0FBd0I7QUFBQSxRQUFkQyxPQUFjLFNBQWRBLE9BQWM7QUFDM0MsUUFBTVUsS0FBSyxHQUFHLHFCQUFPLEVBQVAsRUFBVyxPQUFYLEVBQW9CVixPQUFwQixDQUFkO0FBQ0EsUUFBTVcsUUFBUSxHQUFHLHFCQUFPLEVBQVAsRUFBVyxVQUFYLEVBQXVCRCxLQUF2QixDQUFqQjtBQUYyQyxRQUduQ0UsTUFIbUMsR0FHbEJELFFBSGtCLENBR25DQyxNQUhtQztBQUFBLFFBRzNCQyxJQUgyQixHQUdsQkYsUUFIa0IsQ0FHM0JFLElBSDJCO0FBSTNDLFFBQU1DLFlBQVksR0FBRyxxQkFBTyxJQUFQLEVBQWEsU0FBYixFQUF3QkQsSUFBeEIsQ0FBckI7QUFFQSxXQUFPRCxNQUFNLEtBQUssR0FBWCxJQUFrQkUsWUFBWSxLQUFLLHdCQUFuQyxtQ0FDRWYsS0FERjtBQUNTSCxNQUFBQSxjQUFjLEVBQUUsRUFEekI7QUFDNkJDLE1BQUFBLGFBQWEsRUFBRTtBQUQ1QyxTQUVIRSxLQUZKO0FBR0QsR0EvQkg7QUFpQ0VnQixFQUFBQSxvQkFBb0IsRUFBRSw4QkFBQ2hCLEtBQUQsU0FBc0M7QUFBQSxRQUFqQk8sUUFBaUIsU0FBNUJOLE9BQTRCLENBQWpCTSxRQUFpQjtBQUMxRCxRQUFNQyxjQUFjLEdBQUdELFFBQVEsQ0FBQ0UsTUFBaEM7QUFFQSxXQUFPRCxjQUFjLEtBQUssQ0FBbkIsbUNBQ0VSLEtBREY7QUFDU0YsTUFBQUEsYUFBYSxFQUFFUyxRQUFRLENBQUNDLGNBQWMsR0FBRyxDQUFsQixDQUFSLENBQTZCSDtBQURyRCxTQUVITCxLQUZKO0FBR0Q7QUF2Q0gsQ0FEYSxFQTBDYlAsWUExQ2EsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhbmRsZUFjdGlvbnMgfSBmcm9tICdyZWR1eC1hY3Rpb25zJ1xyXG5pbXBvcnQgcHJvcE9yIGZyb20gJ3JhbWRhL2VzL3Byb3BPcidcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB0b2tlbjogJycsXHJcbiAgY2hhdElkOiAnJyxcclxuICBjaGFubmVsSWQ6ICcnLFxyXG4gIGNvbnZlcnNhdGlvbklkOiAnJyxcclxuICBsYXN0TWVzc2FnZUlkOiBudWxsLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVBY3Rpb25zKFxyXG4gIHtcclxuICAgIFNFVF9DUkVERU5USUFMUzogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4ucGF5bG9hZCB9XHJcbiAgICB9LFxyXG5cclxuICAgIFJFTU9WRV9DT05WRVJTQVRJT05fSUQ6IChzdGF0ZSkgPT4ge1xyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY29udmVyc2F0aW9uSWQ6ICcnLCBsYXN0TWVzc2FnZUlkOiBudWxsIH1cclxuICAgIH0sXHJcblxyXG4gICAgQ1JFQVRFX0NPTlZFUlNBVElPTl9TVUNDRVNTOiAoc3RhdGUsIHsgcGF5bG9hZDogY29udmVyc2F0aW9uIH0pID0+IHtcclxuICAgICAgY29uc3QgeyBpZCwgY2hhdElkIH0gPSBjb252ZXJzYXRpb25cclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNoYXRJZCwgY29udmVyc2F0aW9uSWQ6IGlkIH1cclxuICAgIH0sXHJcblxyXG4gICAgUE9MTF9NRVNTQUdFU19TVUNDRVNTOiAoc3RhdGUsIHsgcGF5bG9hZDogeyBtZXNzYWdlcyB9IH0pID0+IHtcclxuICAgICAgY29uc3QgbWVzc2FnZXNMZW5ndGggPSBtZXNzYWdlcy5sZW5ndGhcclxuXHJcbiAgICAgIHJldHVybiBtZXNzYWdlc0xlbmd0aCAhPT0gMFxyXG4gICAgICAgID8geyAuLi5zdGF0ZSwgbGFzdE1lc3NhZ2VJZDogbWVzc2FnZXNbbWVzc2FnZXNMZW5ndGggLSAxXS5pZCB9XHJcbiAgICAgICAgOiBzdGF0ZVxyXG4gICAgfSxcclxuXHJcbiAgICBQT0xMX01FU1NBR0VTX0VSUk9SOiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIGNvbnN0IGVycm9yID0gcHJvcE9yKHt9LCAnZXJyb3InLCBwYXlsb2FkKVxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IHByb3BPcih7fSwgJ3Jlc3BvbnNlJywgZXJyb3IpXHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzLCBkYXRhIH0gPSByZXNwb25zZVxyXG4gICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBwcm9wT3IobnVsbCwgJ21lc3NhZ2UnLCBkYXRhKVxyXG5cclxuICAgICAgcmV0dXJuIHN0YXR1cyA9PT0gNDA0ICYmIGVycm9yTWVzc2FnZSA9PT0gJ0NvbnZlcnNhdGlvbiBub3QgZm91bmQnXHJcbiAgICAgICAgPyB7IC4uLnN0YXRlLCBjb252ZXJzYXRpb25JZDogJycsIGxhc3RNZXNzYWdlSWQ6IG51bGwgfVxyXG4gICAgICAgIDogc3RhdGVcclxuICAgIH0sXHJcblxyXG4gICAgR0VUX01FU1NBR0VTX1NVQ0NFU1M6IChzdGF0ZSwgeyBwYXlsb2FkOiB7IG1lc3NhZ2VzIH0gfSkgPT4ge1xyXG4gICAgICBjb25zdCBtZXNzYWdlc0xlbmd0aCA9IG1lc3NhZ2VzLmxlbmd0aFxyXG5cclxuICAgICAgcmV0dXJuIG1lc3NhZ2VzTGVuZ3RoICE9PSAwXHJcbiAgICAgICAgPyB7IC4uLnN0YXRlLCBsYXN0TWVzc2FnZUlkOiBtZXNzYWdlc1ttZXNzYWdlc0xlbmd0aCAtIDFdLmlkIH1cclxuICAgICAgICA6IHN0YXRlXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4pXHJcbiJdfQ==