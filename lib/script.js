"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/stable");

require("regenerator-runtime/runtime");

require("react-app-polyfill/ie11");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactRedux = require("react-redux");

var _store = require("./store");

var _channel = require("./actions/channel");

var _App = _interopRequireDefault(require("./containers/App"));

var idChatDiv = 'cai-webchat-div';

if (!document.getElementById(idChatDiv)) {
  var element = document.createElement('div');
  element.id = idChatDiv;
  document.body.appendChild(element);
}

var root = document.getElementById(idChatDiv);
var script = document.currentScript || document.getElementById('cai-webchat');
var channelId = script.getAttribute('channelId');
var token = script.getAttribute('token');
var readOnly = false;

if (root && channelId && token) {
  (0, _channel.getChannelPreferences)(channelId, token).then(function (preferences) {
    _reactDom.default.render( /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
      store: _store.store
    }, /*#__PURE__*/_react.default.createElement(_App.default, {
      token: token,
      channelId: channelId,
      preferences: preferences,
      readOnlyMode: readOnly
    })), root);
  });
}