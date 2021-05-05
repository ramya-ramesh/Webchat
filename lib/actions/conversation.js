"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createConversation = exports.removeConversationId = exports.setCredentials = void 0;

var _reduxActions = require("redux-actions");

var setCredentials = (0, _reduxActions.createAction)('SET_CREDENTIALS');
exports.setCredentials = setCredentials;
var removeConversationId = (0, _reduxActions.createAction)('REMOVE_CONVERSATION_ID');
exports.removeConversationId = removeConversationId;
var createConversation = (0, _reduxActions.createAction)('API:CREATE_CONVERSATION', function (channelId, token) {
  return {
    url: "/webhook/".concat(channelId, "/conversations"),
    method: 'post',
    headers: {
      Authorization: token,
      'X-Token': token
    }
  };
});
exports.createConversation = createConversation;