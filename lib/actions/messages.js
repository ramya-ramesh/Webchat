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