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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25maWcuanMiXSwibmFtZXMiOlsiY29uZmlnIiwic2NyaXB0IiwiZG9jdW1lbnQiLCJjdXJyZW50U2NyaXB0IiwiZ2V0RWxlbWVudEJ5SWQiLCJhcGlSb290IiwiZ2V0QXR0cmlidXRlIiwiYXBpVXJsIiwic2xpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsTUFBTSxHQUFJLFlBQU07QUFDcEIsTUFBSUMsTUFBSjs7QUFDQSxNQUFJLE9BQU9DLFFBQVAsS0FBb0IsV0FBeEIsRUFBcUM7QUFDbkNELElBQUFBLE1BQU0sR0FBR0MsUUFBUSxLQUFLQSxRQUFRLENBQUNDLGFBQVQsSUFBMEJELFFBQVEsQ0FBQ0UsY0FBVCxDQUF3QixhQUF4QixDQUEvQixDQUFqQjtBQUNEOztBQUNELE1BQU1DLE9BQU8sR0FBSUosTUFBTSxJQUFJQSxNQUFNLENBQUNLLFlBQVAsQ0FBb0IsU0FBcEIsQ0FBWCxJQUE4QywyQkFBOUQ7QUFFQSxTQUFPO0FBQ0xDLElBQUFBLE1BQU0sWUFBS0YsT0FBTCxTQUFlQSxPQUFPLENBQUNHLEtBQVIsQ0FBYyxDQUFDLENBQWYsTUFBc0IsR0FBdEIsR0FBNEIsRUFBNUIsR0FBaUMsR0FBaEQ7QUFERCxHQUFQO0FBR0QsQ0FWYyxFQUFmOztlQVllUixNIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29uZmlnID0gKCgpID0+IHtcclxuICBsZXQgc2NyaXB0XHJcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHNjcmlwdCA9IGRvY3VtZW50ICYmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0IHx8IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYWktd2ViY2hhdCcpKVxyXG4gIH1cclxuICBjb25zdCBhcGlSb290ID0gKHNjcmlwdCAmJiBzY3JpcHQuZ2V0QXR0cmlidXRlKCdhcGlSb290JykpIHx8ICdodHRwczovL2FwaS5jYWkudG9vbHMuc2FwJ1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgYXBpVXJsOiBgJHthcGlSb290fSR7YXBpUm9vdC5zbGljZSgtMSkgPT09ICcvJyA/ICcnIDogJy8nfWNvbm5lY3QvdjFgLFxyXG4gIH1cclxufSkoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlnXHJcbiJdfQ==