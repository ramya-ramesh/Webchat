"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChannelPreferences = void 0;

var _config = _interopRequireDefault(require("../config"));

var _axios = _interopRequireDefault(require("axios"));

var getChannelPreferences = function getChannelPreferences(channelId, token) {
  var client = _axios.default.create({
    baseURL: _config.default.apiUrl,
    headers: {
      Authorization: token,
      'X-Token': token,
      Accept: 'application/json'
    }
  });

  return client.get("/webhook/".concat(channelId, "/preferences")).then(function (res) {
    return res.data.results;
  });
};

exports.getChannelPreferences = getChannelPreferences;