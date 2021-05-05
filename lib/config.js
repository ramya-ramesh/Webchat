"use strict";

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.array.slice.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var config = function () {
  var script;

  if (typeof document !== 'undefined') {
    script = document && (document.currentScript || document.getElementById('cai-webchat'));
  }

  var apiRoot = script && script.getAttribute('apiRoot') || 'https://api.cai.tools.sap';
  return {
    apiUrl: "".concat(apiRoot).concat(apiRoot.slice(-1) === '/' ? '' : '/', "connect/v1")
  };
}();

var _default = config;
exports.default = _default;