"use strict";

require("core-js/modules/es.array.concat.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addUserMessage = exports.addBotMessage = exports.removeAllMessages = exports.setFirstMessage = exports.removeMessage = exports.pollMessages = exports.getMessages = exports.postMessage = void 0;

var _reduxActions = require("redux-actions");

var postMessage = (0, _reduxActions.createAction)('API:POST_MESSAGE', function (channelId, token, data) {
  return {
    url: "/webhook/".concat(channelId),
    method: 'post',
    headers: {
      Authorization: token,
      'X-Token': token
    },
    data: data
  };
});
exports.postMessage = postMessage;
var getMessages = (0, _reduxActions.createAction)('API:GET_MESSAGES', function (channelId, token, conversationId) {
  return {
    url: "/webhook/".concat(channelId, "/conversations/").concat(conversationId, "/messages"),
    method: 'get',
    headers: {
      Authorization: token,
      'X-Token': token
    }
  };
});
exports.getMessages = getMessages;
var pollMessages = (0, _reduxActions.createAction)('API:POLL_MESSAGES', function (channelId, token, conversationId, lastMessageId) {
  return {
    url: "/webhook/".concat(channelId, "/conversations/").concat(conversationId, "/poll"),
    method: 'get',
    headers: {
      Authorization: token,
      'X-Token': token
    },
    query: {
      last_message_id: lastMessageId
    } // eslint-disable-line camelcase

  };
});
exports.pollMessages = pollMessages;
var removeMessage = (0, _reduxActions.createAction)('REMOVE_MESSAGE');
exports.removeMessage = removeMessage;
var setFirstMessage = (0, _reduxActions.createAction)('SET_FIRST_MESSAGE');
exports.setFirstMessage = setFirstMessage;
var removeAllMessages = (0, _reduxActions.createAction)('REMOVE_ALL_MESSAGES');
exports.removeAllMessages = removeAllMessages;
var addBotMessage = (0, _reduxActions.createAction)('ADD_BOT_MESSAGE', function (messages, data) {
  return {
    messages: messages,
    data: data
  };
});
exports.addBotMessage = addBotMessage;
var addUserMessage = (0, _reduxActions.createAction)('ADD_USER_MESSAGE');
exports.addUserMessage = addUserMessage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL21lc3NhZ2VzLmpzIl0sIm5hbWVzIjpbInBvc3RNZXNzYWdlIiwiY2hhbm5lbElkIiwidG9rZW4iLCJkYXRhIiwidXJsIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJnZXRNZXNzYWdlcyIsImNvbnZlcnNhdGlvbklkIiwicG9sbE1lc3NhZ2VzIiwibGFzdE1lc3NhZ2VJZCIsInF1ZXJ5IiwibGFzdF9tZXNzYWdlX2lkIiwicmVtb3ZlTWVzc2FnZSIsInNldEZpcnN0TWVzc2FnZSIsInJlbW92ZUFsbE1lc3NhZ2VzIiwiYWRkQm90TWVzc2FnZSIsIm1lc3NhZ2VzIiwiYWRkVXNlck1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVPLElBQU1BLFdBQVcsR0FBRyxnQ0FBYSxrQkFBYixFQUFpQyxVQUFDQyxTQUFELEVBQVlDLEtBQVosRUFBbUJDLElBQW5CO0FBQUEsU0FBNkI7QUFDdkZDLElBQUFBLEdBQUcscUJBQWNILFNBQWQsQ0FEb0Y7QUFFdkZJLElBQUFBLE1BQU0sRUFBRSxNQUYrRTtBQUd2RkMsSUFBQUEsT0FBTyxFQUFFO0FBQUVDLE1BQUFBLGFBQWEsRUFBRUwsS0FBakI7QUFBd0IsaUJBQVdBO0FBQW5DLEtBSDhFO0FBSXZGQyxJQUFBQSxJQUFJLEVBQUpBO0FBSnVGLEdBQTdCO0FBQUEsQ0FBakMsQ0FBcEI7O0FBT0EsSUFBTUssV0FBVyxHQUFHLGdDQUFhLGtCQUFiLEVBQWlDLFVBQUNQLFNBQUQsRUFBWUMsS0FBWixFQUFtQk8sY0FBbkI7QUFBQSxTQUF1QztBQUNqR0wsSUFBQUEsR0FBRyxxQkFBY0gsU0FBZCw0QkFBeUNRLGNBQXpDLGNBRDhGO0FBRWpHSixJQUFBQSxNQUFNLEVBQUUsS0FGeUY7QUFHakdDLElBQUFBLE9BQU8sRUFBRTtBQUFFQyxNQUFBQSxhQUFhLEVBQUVMLEtBQWpCO0FBQXdCLGlCQUFXQTtBQUFuQztBQUh3RixHQUF2QztBQUFBLENBQWpDLENBQXBCOztBQU1BLElBQU1RLFlBQVksR0FBRyxnQ0FDMUIsbUJBRDBCLEVBRTFCLFVBQUNULFNBQUQsRUFBWUMsS0FBWixFQUFtQk8sY0FBbkIsRUFBbUNFLGFBQW5DO0FBQUEsU0FBc0Q7QUFDcERQLElBQUFBLEdBQUcscUJBQWNILFNBQWQsNEJBQXlDUSxjQUF6QyxVQURpRDtBQUVwREosSUFBQUEsTUFBTSxFQUFFLEtBRjRDO0FBR3BEQyxJQUFBQSxPQUFPLEVBQUU7QUFBRUMsTUFBQUEsYUFBYSxFQUFFTCxLQUFqQjtBQUF3QixpQkFBV0E7QUFBbkMsS0FIMkM7QUFJcERVLElBQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxlQUFlLEVBQUVGO0FBQW5CLEtBSjZDLENBSVQ7O0FBSlMsR0FBdEQ7QUFBQSxDQUYwQixDQUFyQjs7QUFVQSxJQUFNRyxhQUFhLEdBQUcsZ0NBQWEsZ0JBQWIsQ0FBdEI7O0FBRUEsSUFBTUMsZUFBZSxHQUFHLGdDQUFhLG1CQUFiLENBQXhCOztBQUVBLElBQU1DLGlCQUFpQixHQUFHLGdDQUFhLHFCQUFiLENBQTFCOztBQUVBLElBQU1DLGFBQWEsR0FBRyxnQ0FBYSxpQkFBYixFQUFnQyxVQUFDQyxRQUFELEVBQVdmLElBQVg7QUFBQSxTQUFxQjtBQUNoRmUsSUFBQUEsUUFBUSxFQUFSQSxRQURnRjtBQUVoRmYsSUFBQUEsSUFBSSxFQUFKQTtBQUZnRixHQUFyQjtBQUFBLENBQWhDLENBQXRCOztBQUtBLElBQU1nQixjQUFjLEdBQUcsZ0NBQWEsa0JBQWIsQ0FBdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tICdyZWR1eC1hY3Rpb25zJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3RNZXNzYWdlID0gY3JlYXRlQWN0aW9uKCdBUEk6UE9TVF9NRVNTQUdFJywgKGNoYW5uZWxJZCwgdG9rZW4sIGRhdGEpID0+ICh7XHJcbiAgdXJsOiBgL3dlYmhvb2svJHtjaGFubmVsSWR9YCxcclxuICBtZXRob2Q6ICdwb3N0JyxcclxuICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IHRva2VuLCAnWC1Ub2tlbic6IHRva2VuIH0sXHJcbiAgZGF0YSxcclxufSkpXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TWVzc2FnZXMgPSBjcmVhdGVBY3Rpb24oJ0FQSTpHRVRfTUVTU0FHRVMnLCAoY2hhbm5lbElkLCB0b2tlbiwgY29udmVyc2F0aW9uSWQpID0+ICh7XHJcbiAgdXJsOiBgL3dlYmhvb2svJHtjaGFubmVsSWR9L2NvbnZlcnNhdGlvbnMvJHtjb252ZXJzYXRpb25JZH0vbWVzc2FnZXNgLFxyXG4gIG1ldGhvZDogJ2dldCcsXHJcbiAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiB0b2tlbiwgJ1gtVG9rZW4nOiB0b2tlbiB9LFxyXG59KSlcclxuXHJcbmV4cG9ydCBjb25zdCBwb2xsTWVzc2FnZXMgPSBjcmVhdGVBY3Rpb24oXHJcbiAgJ0FQSTpQT0xMX01FU1NBR0VTJyxcclxuICAoY2hhbm5lbElkLCB0b2tlbiwgY29udmVyc2F0aW9uSWQsIGxhc3RNZXNzYWdlSWQpID0+ICh7XHJcbiAgICB1cmw6IGAvd2ViaG9vay8ke2NoYW5uZWxJZH0vY29udmVyc2F0aW9ucy8ke2NvbnZlcnNhdGlvbklkfS9wb2xsYCxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IHRva2VuLCAnWC1Ub2tlbic6IHRva2VuIH0sXHJcbiAgICBxdWVyeTogeyBsYXN0X21lc3NhZ2VfaWQ6IGxhc3RNZXNzYWdlSWQgfSwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcclxuICB9KSxcclxuKVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZU1lc3NhZ2UgPSBjcmVhdGVBY3Rpb24oJ1JFTU9WRV9NRVNTQUdFJylcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRGaXJzdE1lc3NhZ2UgPSBjcmVhdGVBY3Rpb24oJ1NFVF9GSVJTVF9NRVNTQUdFJylcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVBbGxNZXNzYWdlcyA9IGNyZWF0ZUFjdGlvbignUkVNT1ZFX0FMTF9NRVNTQUdFUycpXHJcblxyXG5leHBvcnQgY29uc3QgYWRkQm90TWVzc2FnZSA9IGNyZWF0ZUFjdGlvbignQUREX0JPVF9NRVNTQUdFJywgKG1lc3NhZ2VzLCBkYXRhKSA9PiAoe1xyXG4gIG1lc3NhZ2VzLFxyXG4gIGRhdGEsXHJcbn0pKVxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFVzZXJNZXNzYWdlID0gY3JlYXRlQWN0aW9uKCdBRERfVVNFUl9NRVNTQUdFJylcclxuIl19