"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _reducers = _interopRequireDefault(require("./reducers"));

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _redux = require("redux");

var _api = _interopRequireDefault(require("./middlewares/api"));

var middlewares = [_reduxThunk.default, _api.default];
var store = (0, _redux.compose)(_redux.applyMiddleware.apply(void 0, middlewares))(_redux.createStore)(_reducers.default);
exports.store = store;