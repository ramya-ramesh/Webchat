"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.regexp.to-string.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validButtonContent = exports.safeStringValue = exports.safeBooleanValue = exports.safeArrayOfItem = exports.getCredentialsFromLocalStorage = exports.storeCredentialsToLocalStorage = exports.getCredentialCookieName = exports.truncate = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var truncate = function truncate(string, length) {
  //  console.assert(typeof string === 'string', `Expected a 'string', but got a type:'${typeof string}' - '${string}'`)
  if (typeof string === 'string') {
    if (string.length <= length) {
      return string;
    }

    return "".concat(string.slice(0, length - 3), "...");
  }

  return '';
};

exports.truncate = truncate;

var getCredentialCookieName = function getCredentialCookieName(channelId) {
  return "cai-conversation-".concat(channelId);
};

exports.getCredentialCookieName = getCredentialCookieName;

var storeCredentialsToLocalStorage = function storeCredentialsToLocalStorage(chatId, conversationId, timeToLive, channelId) {
  var payload = {
    chatId: chatId,
    conversationId: conversationId
  };
  var maxAge = 3600 * timeToLive;

  if (typeof window.sessionStorage !== 'undefined') {
    // if maxAge is 0 then it never expires.
    // Currently timeToLive is 0.002777777 (~1 sec) if set to never.
    var expire = maxAge > 0 ? new Date().getTime() + maxAge * 1000 : 0;
    var localData = {
      expire: expire,
      payload: payload
    };
    sessionStorage.setItem(getCredentialCookieName(channelId), JSON.stringify(localData));
  }
};

exports.storeCredentialsToLocalStorage = storeCredentialsToLocalStorage;

var getCredentialsFromLocalStorage = function getCredentialsFromLocalStorage(channelId) {
  if (typeof window.sessionStorage !== 'undefined') {
    var localStorageData = sessionStorage.getItem(getCredentialCookieName(channelId));

    if (localStorageData) {
      try {
        var time = new Date().getTime();
        var localData = JSON.parse(localStorageData);
        var secondsLeftBeforeExpires = localData.expire === 0 ? 9999 : parseInt((localData.expire - time) / 1000, 10);

        if (secondsLeftBeforeExpires > 0) {
          return localData.payload;
        } // The data has expired if we got here, so remove it from the storage.


        sessionStorage.removeItem(getCredentialCookieName(channelId));
      } catch (err) {} // eslint-disable-line no-empty

    }
  }

  return null;
};

exports.getCredentialsFromLocalStorage = getCredentialsFromLocalStorage;

var safeArrayOfItem = function safeArrayOfItem(items) {
  // Assert is for testing only
  // BCP: https://support.wdf.sap.corp/sap/support/message/2080400256
  // console.assert(items && Array.isArray(items), `Expected a array of items, but got a type:'${typeof items}'`)
  if (items && Array.isArray(items)) {
    return items;
  }

  return [];
};

exports.safeArrayOfItem = safeArrayOfItem;

var safeBooleanValue = function safeBooleanValue(flag) {
  if (typeof flag === 'boolean') {
    return flag;
  } else if (typeof flag === 'string') {
    return flag.toLowerCase() === 'true';
  }

  return false;
};

exports.safeBooleanValue = safeBooleanValue;

var safeStringValue = function safeStringValue(content) {
  if (typeof content === 'string') {
    return content;
  } else if ((0, _typeof2.default)(content) === 'object') {
    return JSON.stringify(content);
  } else if (typeof content === 'number') {
    return content.toString();
  } else if (content === undefined) {
    return 'undefined';
  }

  return '';
};

exports.safeStringValue = safeStringValue;

var validButtonContent = function validButtonContent(element) {
  if (element) {
    var type = element.type,
        value = element.value,
        title = element.title;
    var data = {
      type: type,
      value: value,
      title: title
    };
    return data;
  }

  return element;
};

exports.validButtonContent = validButtonContent;