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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9pbmRleC5qcyJdLCJuYW1lcyI6WyJtZXNzYWdlcyIsImNvbnZlcnNhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O2VBRWUsNEJBQWdCO0FBQzdCQSxFQUFBQSxRQUFRLEVBQVJBLGlCQUQ2QjtBQUU3QkMsRUFBQUEsWUFBWSxFQUFaQTtBQUY2QixDQUFoQixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXHJcblxyXG5pbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi9tZXNzYWdlcydcclxuaW1wb3J0IGNvbnZlcnNhdGlvbiBmcm9tICcuL2NvbnZlcnNhdGlvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgbWVzc2FnZXMsXHJcbiAgY29udmVyc2F0aW9uLFxyXG59KVxyXG4iXX0=