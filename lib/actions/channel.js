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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL2NoYW5uZWwuanMiXSwibmFtZXMiOlsiZ2V0Q2hhbm5lbFByZWZlcmVuY2VzIiwiY2hhbm5lbElkIiwidG9rZW4iLCJjbGllbnQiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJjb25maWciLCJhcGlVcmwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIkFjY2VwdCIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwicmVzdWx0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRU8sSUFBTUEscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFDQyxTQUFELEVBQVlDLEtBQVosRUFBc0I7QUFDekQsTUFBTUMsTUFBTSxHQUFHQyxlQUFNQyxNQUFOLENBQWE7QUFDMUJDLElBQUFBLE9BQU8sRUFBRUMsZ0JBQU9DLE1BRFU7QUFFMUJDLElBQUFBLE9BQU8sRUFBRTtBQUNQQyxNQUFBQSxhQUFhLEVBQUVSLEtBRFI7QUFFUCxpQkFBV0EsS0FGSjtBQUdQUyxNQUFBQSxNQUFNLEVBQUU7QUFIRDtBQUZpQixHQUFiLENBQWY7O0FBU0EsU0FBT1IsTUFBTSxDQUFDUyxHQUFQLG9CQUF1QlgsU0FBdkIsbUJBQWdEWSxJQUFoRCxDQUFxRCxVQUFBQyxHQUFHO0FBQUEsV0FBSUEsR0FBRyxDQUFDQyxJQUFKLENBQVNDLE9BQWI7QUFBQSxHQUF4RCxDQUFQO0FBQ0QsQ0FYTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2hhbm5lbFByZWZlcmVuY2VzID0gKGNoYW5uZWxJZCwgdG9rZW4pID0+IHtcclxuICBjb25zdCBjbGllbnQgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgYmFzZVVSTDogY29uZmlnLmFwaVVybCxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW4sXHJcbiAgICAgICdYLVRva2VuJzogdG9rZW4sXHJcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgfSxcclxuICB9KVxyXG5cclxuICByZXR1cm4gY2xpZW50LmdldChgL3dlYmhvb2svJHtjaGFubmVsSWR9L3ByZWZlcmVuY2VzYCkudGhlbihyZXMgPT4gcmVzLmRhdGEucmVzdWx0cylcclxufVxyXG4iXX0=