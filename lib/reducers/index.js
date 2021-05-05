"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _messages = _interopRequireDefault(require("./messages"));

var _conversation = _interopRequireDefault(require("./conversation"));

var _default = (0, _redux.combineReducers)({
  messages: _messages.default,
  conversation: _conversation.default
});

exports.default = _default;