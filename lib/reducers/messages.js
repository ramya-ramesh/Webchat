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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9tZXNzYWdlcy5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJTRVRfRklSU1RfTUVTU0FHRSIsInN0YXRlIiwibWVzc2FnZSIsInBheWxvYWQiLCJhdHRhY2htZW50IiwidHlwZSIsImNvbnRlbnQiLCJpZCIsIk1hdGgiLCJyYW5kb20iLCJpc1dlbGNvbWVNZXNzYWdlIiwicGFydGljaXBhbnQiLCJpc0JvdCIsIlBPTExfTUVTU0FHRVNfU1VDQ0VTUyIsIm0xIiwibTIiLCJtZXNzYWdlcyIsIkdFVF9NRVNTQUdFU19TVUNDRVNTIiwiUE9TVF9NRVNTQUdFX0VSUk9SIiwiZXJyb3IiLCJyZXNwb25zZSIsInN0YXR1cyIsImRhdGEiLCJlcnJvck1lc3NhZ2UiLCJtc2ciLCJyZXRyeSIsImNvbnZlcnNhdGlvbkV4cGlyZWQiLCJpbmNsdWRlcyIsIlJFTU9WRV9NRVNTQUdFIiwibWVzc2FnZUlkIiwibmV3U3RhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJpbmRleE1lc3NhZ2UiLCJmaW5kSW5kZXgiLCJzcGxpY2UiLCJSRU1PVkVfQUxMX01FU1NBR0VTIiwiQUREX0JPVF9NRVNTQUdFIiwiZ2V0TWVzc2FnZVRlbXBsYXRlIiwibWVzc2FnZV9pZCIsImZvcm1hdHRlZE1lc3NhZ2VzIiwibWFwIiwiQUREX1VTRVJfTUVTU0FHRSIsImlzU2VuZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFlBQVksR0FBRyxFQUFyQjs7ZUFFZSxpQ0FDYjtBQUNFQyxFQUFBQSxpQkFBaUIsRUFBRSwyQkFBQ0MsS0FBRCxRQUFpQztBQUFBLFFBQWRDLE9BQWMsUUFBdkJDLE9BQXVCO0FBQ2xELFlBQ0U7QUFDRUMsTUFBQUEsVUFBVSxFQUFFO0FBQUVDLFFBQUFBLElBQUksRUFBRSxNQUFSO0FBQWdCQyxRQUFBQSxPQUFPLEVBQUVKO0FBQXpCLE9BRGQ7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LE9BRHlCO0FBRXJDZ0IsUUFBQUEsSUFBSSxFQUFFbkIsT0FBTyxDQUFDbUIsSUFGdUI7QUFHckNmLFFBQUFBLEVBQUUsRUFBRUQsT0FBTyxDQUFDaUMsVUFBUixvQkFBK0IvQixJQUFJLENBQUNDLE1BQUwsRUFBL0IsQ0FIaUM7QUFJckNFLFFBQUFBLFdBQVcsRUFBRTtBQUNYQyxVQUFBQSxLQUFLLEVBQUU7QUFESTtBQUp3QixPQUFMO0FBQUEsS0FBbEM7O0FBU0EsUUFBTTRCLGlCQUFpQixHQUFHckMsT0FBTyxDQUFDYSxRQUFSLENBQWlCeUIsR0FBakIsQ0FBcUIsVUFBQXZDLE9BQU87QUFBQSxhQUFJb0Msa0JBQWtCLENBQUNwQyxPQUFELENBQXRCO0FBQUEsS0FBNUIsQ0FBMUI7QUFDQSxzREFBV0QsS0FBWCxvQ0FBcUJ1QyxpQkFBckI7QUFDRCxHQXRFSDtBQXdFRUUsRUFBQUEsZ0JBQWdCLEVBQUUsMEJBQUN6QyxLQUFELFNBQXdCO0FBQUEsUUFBZEUsT0FBYyxTQUFkQSxPQUFjOztBQUN4QyxRQUFNRCxPQUFPLG1DQUNSQyxPQURRO0FBRVhJLE1BQUFBLEVBQUUsa0JBQVdDLElBQUksQ0FBQ0MsTUFBTCxFQUFYLENBRlM7QUFHWGtDLE1BQUFBLFNBQVMsRUFBRSxLQUhBO0FBSVhoQyxNQUFBQSxXQUFXLEVBQUU7QUFDWEMsUUFBQUEsS0FBSyxFQUFFO0FBREk7QUFKRixNQUFiOztBQVNBLHNEQUFXWCxLQUFYLEdBQXFCLENBQUNDLE9BQUQsQ0FBckI7QUFDRDtBQW5GSCxDQURhLEVBc0ZiSCxZQXRGYSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlQWN0aW9ucyB9IGZyb20gJ3JlZHV4LWFjdGlvbnMnXHJcbmltcG9ydCB1bmlxV2l0aCBmcm9tICdyYW1kYS9lcy91bmlxV2l0aCdcclxuaW1wb3J0IHByb3BPciBmcm9tICdyYW1kYS9lcy9wcm9wT3InXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSBbXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlQWN0aW9ucyhcclxuICB7XHJcbiAgICBTRVRfRklSU1RfTUVTU0FHRTogKHN0YXRlLCB7IHBheWxvYWQ6IG1lc3NhZ2UgfSkgPT4ge1xyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGF0dGFjaG1lbnQ6IHsgdHlwZTogJ3RleHQnLCBjb250ZW50OiBtZXNzYWdlIH0sXHJcbiAgICAgICAgICBpZDogYGxvY2FsLSR7TWF0aC5yYW5kb20oKX1gLFxyXG4gICAgICAgICAgaXNXZWxjb21lTWVzc2FnZTogdHJ1ZSxcclxuICAgICAgICAgIHBhcnRpY2lwYW50OiB7XHJcbiAgICAgICAgICAgIGlzQm90OiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICBdXHJcbiAgICB9LFxyXG5cclxuICAgIFBPTExfTUVTU0FHRVNfU1VDQ0VTUzogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICByZXR1cm4gdW5pcVdpdGgoKG0xLCBtMikgPT4gbTEuaWQgPT09IG0yLmlkLCBbLi4uc3RhdGUsIC4uLnBheWxvYWQubWVzc2FnZXNdKVxyXG4gICAgfSxcclxuXHJcbiAgICBHRVRfTUVTU0FHRVNfU1VDQ0VTUzogKHN0YXRlLCB7IHBheWxvYWQ6IG1lc3NhZ2VzIH0pID0+IHtcclxuICAgICAgcmV0dXJuIG1lc3NhZ2VzXHJcbiAgICB9LFxyXG5cclxuICAgIFBPU1RfTUVTU0FHRV9FUlJPUjogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBjb25zdCB7IG1lc3NhZ2UgfSA9IHBheWxvYWRcclxuICAgICAgY29uc3QgZXJyb3IgPSBwcm9wT3Ioe30sICdlcnJvcicsIHBheWxvYWQpXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gcHJvcE9yKHt9LCAncmVzcG9uc2UnLCBlcnJvcilcclxuICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IHJlc3BvbnNlXHJcbiAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IHByb3BPcihudWxsLCAnbWVzc2FnZScsIGRhdGEpXHJcblxyXG4gICAgICBjb25zdCBtc2cgPSB7XHJcbiAgICAgICAgLi4ubWVzc2FnZSxcclxuICAgICAgICByZXRyeTogdHJ1ZSxcclxuICAgICAgICBjb252ZXJzYXRpb25FeHBpcmVkOiBzdGF0dXMgPT09IDQwNFxyXG4gICAgICAgICAgJiYgdHlwZW9mIGVycm9yTWVzc2FnZSA9PT0gJ3N0cmluZydcclxuICAgICAgICAgICYmIGVycm9yTWVzc2FnZS5pbmNsdWRlcygnQ29udmVyc2F0aW9uIG5vdCBmb3VuZCcpLFxyXG4gICAgICAgaWQ6IGBsb2NhbC0ke01hdGgucmFuZG9tKCl9YCxcclxuICAgICAgICBwYXJ0aWNpcGFudDoge1xyXG4gICAgICAgICAgaXNCb3Q6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBbLi4uc3RhdGUsIC4uLlttc2ddXVxyXG4gICAgfSxcclxuXHJcbiAgICBSRU1PVkVfTUVTU0FHRTogKHN0YXRlLCB7IHBheWxvYWQ6IG1lc3NhZ2VJZCB9KSA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0gT2JqZWN0LmFzc2lnbihbXSwgc3RhdGUpXHJcbiAgICAgIGNvbnN0IGluZGV4TWVzc2FnZSA9IHN0YXRlLmZpbmRJbmRleChtZXNzYWdlID0+IG1lc3NhZ2UuaWQgPT09IG1lc3NhZ2VJZClcclxuICAgICAgaWYgKGluZGV4TWVzc2FnZSA+PSAwKSB7XHJcbiAgICAgICAgbmV3U3RhdGUuc3BsaWNlKGluZGV4TWVzc2FnZSwgMSlcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbmV3U3RhdGVcclxuICAgIH0sXHJcblxyXG4gICAgUkVNT1ZFX0FMTF9NRVNTQUdFUzogKCkgPT4ge1xyXG4gICAgICByZXR1cm4gW11cclxuICAgIH0sXHJcblxyXG4gICAgQUREX0JPVF9NRVNTQUdFOiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIGNvbnN0IGdldE1lc3NhZ2VUZW1wbGF0ZSA9IGNvbnRlbnQgPT4gKHtcclxuICAgICAgICBhdHRhY2htZW50OiBjb250ZW50LFxyXG4gICAgICAgIGRhdGE6IHBheWxvYWQuZGF0YSxcclxuICAgICAgICBpZDogY29udGVudC5tZXNzYWdlX2lkIHx8IGBsb2NhbC0ke01hdGgucmFuZG9tKCl9YCxcclxuICAgICAgICBwYXJ0aWNpcGFudDoge1xyXG4gICAgICAgICAgaXNCb3Q6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuXHJcbiAgICAgIGNvbnN0IGZvcm1hdHRlZE1lc3NhZ2VzID0gcGF5bG9hZC5tZXNzYWdlcy5tYXAobWVzc2FnZSA9PiBnZXRNZXNzYWdlVGVtcGxhdGUobWVzc2FnZSkpXHJcbiAgICAgIHJldHVybiBbLi4uc3RhdGUsIC4uLmZvcm1hdHRlZE1lc3NhZ2VzXVxyXG4gICAgfSxcclxuXHJcbiAgICBBRERfVVNFUl9NRVNTQUdFOiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSB7XHJcbiAgICAgICAgLi4ucGF5bG9hZCxcclxuICAgICAgICBpZDogYGxvY2FsLSR7TWF0aC5yYW5kb20oKX1gLFxyXG4gICAgICAgIGlzU2VuZGluZzogZmFsc2UsXHJcbiAgICAgICAgcGFydGljaXBhbnQ6IHtcclxuICAgICAgICAgIGlzQm90OiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gWy4uLnN0YXRlLCAuLi5bbWVzc2FnZV1dXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4pXHJcbiJdfQ==