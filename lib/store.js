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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdG9yZS5qcyJdLCJuYW1lcyI6WyJtaWRkbGV3YXJlcyIsInRodW5rIiwiYXBpIiwic3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsQ0FBQ0MsbUJBQUQsRUFBUUMsWUFBUixDQUFwQjtBQUVPLElBQU1DLEtBQUssR0FBRyxvQkFBUUMscUNBQW1CSixXQUFuQixDQUFSLEVBQXlDSyxrQkFBekMsRUFBc0RDLGlCQUF0RCxDQUFkIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlZHVjZXJzIGZyb20gJ3JlZHVjZXJzJ1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnXHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCdcclxuXHJcbmltcG9ydCBhcGkgZnJvbSAnbWlkZGxld2FyZXMvYXBpJ1xyXG5cclxuY29uc3QgbWlkZGxld2FyZXMgPSBbdGh1bmssIGFwaV1cclxuXHJcbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSkoY3JlYXRlU3RvcmUpKHJlZHVjZXJzKVxyXG4iXX0=