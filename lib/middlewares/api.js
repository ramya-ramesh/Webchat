"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.string.starts-with.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _config = _interopRequireDefault(require("../config"));

var _queryString = _interopRequireDefault(require("query-string"));

var _axios = _interopRequireDefault(require("axios"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _default = function _default(store) {
  return function (next) {
    return function (action) {
      if (!action.type.startsWith('API:')) {
        return next(action);
      }

      var dispatch = store.dispatch;
      var prefix = action.type.split(':')[1];
      var _action$payload = action.payload,
          _action$payload$metho = _action$payload.method,
          method = _action$payload$metho === void 0 ? 'get' : _action$payload$metho,
          url = _action$payload.url,
          data = _action$payload.data,
          headers = _action$payload.headers,
          query = _action$payload.query;
      var options = {
        method: method,
        data: data,
        headers: _objectSpread({
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }, headers),
        url: "".concat(_config.default.apiUrl).concat(url).concat(query ? '?' : '').concat(_queryString.default.stringify(query || {}))
      };
      return (0, _axios.default)(options).then(function (res) {
        dispatch({
          type: "".concat(prefix, "_SUCCESS"),
          payload: _objectSpread({}, res.data.results)
        });
        return res.data.results;
      }).catch(function (err) {
        var response = err.response;
        dispatch({
          type: "".concat(prefix, "_ERROR"),
          payload: _objectSpread(_objectSpread({}, data), {}, {
            error: {
              response: response
            }
          })
        });
        throw new Error(err);
      });
    };
  };
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlcy9hcGkuanMiXSwibmFtZXMiOlsic3RvcmUiLCJuZXh0IiwiYWN0aW9uIiwidHlwZSIsInN0YXJ0c1dpdGgiLCJkaXNwYXRjaCIsInByZWZpeCIsInNwbGl0IiwicGF5bG9hZCIsIm1ldGhvZCIsInVybCIsImRhdGEiLCJoZWFkZXJzIiwicXVlcnkiLCJvcHRpb25zIiwiQWNjZXB0IiwiY29uZmlnIiwiYXBpVXJsIiwicXMiLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwicmVzdWx0cyIsImNhdGNoIiwiZXJyIiwicmVzcG9uc2UiLCJlcnJvciIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7OztlQUVlLGtCQUFBQSxLQUFLO0FBQUEsU0FBSSxVQUFBQyxJQUFJO0FBQUEsV0FBSSxVQUFBQyxNQUFNLEVBQUk7QUFDeEMsVUFBSSxDQUFDQSxNQUFNLENBQUNDLElBQVAsQ0FBWUMsVUFBWixDQUF1QixNQUF2QixDQUFMLEVBQXFDO0FBQ25DLGVBQU9ILElBQUksQ0FBQ0MsTUFBRCxDQUFYO0FBQ0Q7O0FBSHVDLFVBS2hDRyxRQUxnQyxHQUtuQkwsS0FMbUIsQ0FLaENLLFFBTGdDO0FBTXhDLFVBQU1DLE1BQU0sR0FBR0osTUFBTSxDQUFDQyxJQUFQLENBQVlJLEtBQVosQ0FBa0IsR0FBbEIsRUFBdUIsQ0FBdkIsQ0FBZjtBQU53Qyw0QkFPY0wsTUFBTSxDQUFDTSxPQVByQjtBQUFBLGtEQU9oQ0MsTUFQZ0M7QUFBQSxVQU9oQ0EsTUFQZ0Msc0NBT3ZCLEtBUHVCO0FBQUEsVUFPaEJDLEdBUGdCLG1CQU9oQkEsR0FQZ0I7QUFBQSxVQU9YQyxJQVBXLG1CQU9YQSxJQVBXO0FBQUEsVUFPTEMsT0FQSyxtQkFPTEEsT0FQSztBQUFBLFVBT0lDLEtBUEosbUJBT0lBLEtBUEo7QUFTeEMsVUFBTUMsT0FBTyxHQUFHO0FBQ2RMLFFBQUFBLE1BQU0sRUFBTkEsTUFEYztBQUVkRSxRQUFBQSxJQUFJLEVBQUpBLElBRmM7QUFHZEMsUUFBQUEsT0FBTztBQUNMRyxVQUFBQSxNQUFNLEVBQUUsa0JBREg7QUFFTCwwQkFBZ0I7QUFGWCxXQUdGSCxPQUhFLENBSE87QUFRZEYsUUFBQUEsR0FBRyxZQUFLTSxnQkFBT0MsTUFBWixTQUFxQlAsR0FBckIsU0FBMkJHLEtBQUssR0FBRyxHQUFILEdBQVMsRUFBekMsU0FBOENLLHFCQUFHQyxTQUFILENBQWFOLEtBQUssSUFBSSxFQUF0QixDQUE5QztBQVJXLE9BQWhCO0FBV0EsYUFBTyxvQkFBTUMsT0FBTixFQUNKTSxJQURJLENBQ0MsVUFBQUMsR0FBRyxFQUFJO0FBQ1hoQixRQUFBQSxRQUFRLENBQUM7QUFBRUYsVUFBQUEsSUFBSSxZQUFLRyxNQUFMLGFBQU47QUFBNkJFLFVBQUFBLE9BQU8sb0JBQU9hLEdBQUcsQ0FBQ1YsSUFBSixDQUFTVyxPQUFoQjtBQUFwQyxTQUFELENBQVI7QUFDQSxlQUFPRCxHQUFHLENBQUNWLElBQUosQ0FBU1csT0FBaEI7QUFDRCxPQUpJLEVBS0pDLEtBTEksQ0FLRSxVQUFBQyxHQUFHLEVBQUk7QUFBQSxZQUNKQyxRQURJLEdBQ1NELEdBRFQsQ0FDSkMsUUFESTtBQUVacEIsUUFBQUEsUUFBUSxDQUFDO0FBQUVGLFVBQUFBLElBQUksWUFBS0csTUFBTCxXQUFOO0FBQTJCRSxVQUFBQSxPQUFPLGtDQUFPRyxJQUFQO0FBQWFlLFlBQUFBLEtBQUssRUFBRTtBQUFFRCxjQUFBQSxRQUFRLEVBQVJBO0FBQUY7QUFBcEI7QUFBbEMsU0FBRCxDQUFSO0FBQ0EsY0FBTSxJQUFJRSxLQUFKLENBQVVILEdBQVYsQ0FBTjtBQUNELE9BVEksQ0FBUDtBQVVELEtBOUIyQjtBQUFBLEdBQVI7QUFBQSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tICdjb25maWcnXHJcbmltcG9ydCBxcyBmcm9tICdxdWVyeS1zdHJpbmcnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlID0+IG5leHQgPT4gYWN0aW9uID0+IHtcclxuICBpZiAoIWFjdGlvbi50eXBlLnN0YXJ0c1dpdGgoJ0FQSTonKSkge1xyXG4gICAgcmV0dXJuIG5leHQoYWN0aW9uKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBkaXNwYXRjaCB9ID0gc3RvcmVcclxuICBjb25zdCBwcmVmaXggPSBhY3Rpb24udHlwZS5zcGxpdCgnOicpWzFdXHJcbiAgY29uc3QgeyBtZXRob2QgPSAnZ2V0JywgdXJsLCBkYXRhLCBoZWFkZXJzLCBxdWVyeSB9ID0gYWN0aW9uLnBheWxvYWRcclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIG1ldGhvZCxcclxuICAgIGRhdGEsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAuLi5oZWFkZXJzLFxyXG4gICAgfSxcclxuICAgIHVybDogYCR7Y29uZmlnLmFwaVVybH0ke3VybH0ke3F1ZXJ5ID8gJz8nIDogJyd9JHtxcy5zdHJpbmdpZnkocXVlcnkgfHwge30pfWAsXHJcbiAgfVxyXG5cclxuICByZXR1cm4gYXhpb3Mob3B0aW9ucylcclxuICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogYCR7cHJlZml4fV9TVUNDRVNTYCwgcGF5bG9hZDogeyAuLi5yZXMuZGF0YS5yZXN1bHRzIH0gfSlcclxuICAgICAgcmV0dXJuIHJlcy5kYXRhLnJlc3VsdHNcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgY29uc3QgeyByZXNwb25zZSB9ID0gZXJyXHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogYCR7cHJlZml4fV9FUlJPUmAsIHBheWxvYWQ6IHsgLi4uZGF0YSwgZXJyb3I6IHsgcmVzcG9uc2UgfSB9IH0pXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpXHJcbiAgICB9KVxyXG59XHJcbiJdfQ==