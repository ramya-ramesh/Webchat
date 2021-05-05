"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _sanitizeUrl = require("@braintree/sanitize-url");

var _ramda = require("ramda");

require("./style.scss");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var IsTyping = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(IsTyping, _Component);

  var _super = _createSuper(IsTyping);

  function IsTyping(props) {
    var _this;

    (0, _classCallCheck2.default)(this, IsTyping);
    _this = _super.call(this, props);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "_setTimeoutCallBack", function () {
      var callback = function callback() {
        _this._timer = null;

        if (typeof _this.props.callAfterTimeout === 'function') {
          _this.props.callAfterTimeout();
        }
      };

      var timeout = (0, _ramda.propOr)(20000, 'timeout', _this.props);

      if (_this._timer) {
        clearTimeout(_this._timer);
        _this._timer = null;
      }

      _this._timer = setTimeout(callback, timeout);
    });
    _this._setTimeoutCallBack = _this._setTimeoutCallBack.bind((0, _assertThisInitialized2.default)(_this));
    _this._timer = null;
    return _this;
  }

  (0, _createClass2.default)(IsTyping, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return this.props.timeout !== nextProps.timeout || this.props.callAfterTimeout !== nextProps.callAfterTimeout;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this._setTimeoutCallBack();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._timer) {
        clearTimeout(this._timer);
        this._timer = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          image = _this$props.image,
          onImageLoaded = _this$props.onImageLoaded;

      if (image && (0, _sanitizeUrl.sanitizeUrl)(image) === 'about:blank') {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "RecastAppMessage CaiAppMessage bot"
      }, image && /*#__PURE__*/_react.default.createElement("img", {
        className: "RecastAppMessage--logo CaiAppMessage--logo visible",
        src: image
      }), /*#__PURE__*/_react.default.createElement("img", {
        src: "https://cdn.cai.tools.sap/webchat/istyping.gif",
        onLoad: onImageLoaded
      }));
    }
  }]);
  return IsTyping;
}(_react.Component); // ESLint thinks some PropTypes are not used, but they are retrived in method calls, so disable check

/* eslint-disable */


IsTyping.propTypes = {
  image: _propTypes.default.string,
  callAfterTimeout: _propTypes.default.func,
  onImageLoaded: _propTypes.default.func,
  timeout: _propTypes.default.number
};
var _default = IsTyping;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01lc3NhZ2UvaXNUeXBpbmcuanMiXSwibmFtZXMiOlsiSXNUeXBpbmciLCJwcm9wcyIsImNhbGxiYWNrIiwiX3RpbWVyIiwiY2FsbEFmdGVyVGltZW91dCIsInRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiX3NldFRpbWVvdXRDYWxsQmFjayIsImJpbmQiLCJuZXh0UHJvcHMiLCJpbWFnZSIsIm9uSW1hZ2VMb2FkZWQiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJmdW5jIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7OztJQUVNQSxROzs7OztBQUNKLG9CQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBQUE7QUFDbEIsOEJBQU1BLEtBQU47QUFEa0Isc0dBc0JFLFlBQU07QUFDMUIsVUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixjQUFLQyxNQUFMLEdBQWMsSUFBZDs7QUFDQSxZQUFJLE9BQU8sTUFBS0YsS0FBTCxDQUFXRyxnQkFBbEIsS0FBdUMsVUFBM0MsRUFBdUQ7QUFDckQsZ0JBQUtILEtBQUwsQ0FBV0csZ0JBQVg7QUFDRDtBQUNGLE9BTEQ7O0FBTUEsVUFBTUMsT0FBTyxHQUFHLG1CQUFPLEtBQVAsRUFBYyxTQUFkLEVBQXlCLE1BQUtKLEtBQTlCLENBQWhCOztBQUNBLFVBQUksTUFBS0UsTUFBVCxFQUFpQjtBQUNmRyxRQUFBQSxZQUFZLENBQUMsTUFBS0gsTUFBTixDQUFaO0FBQ0EsY0FBS0EsTUFBTCxHQUFjLElBQWQ7QUFDRDs7QUFDRCxZQUFLQSxNQUFMLEdBQWNJLFVBQVUsQ0FBQ0wsUUFBRCxFQUFXRyxPQUFYLENBQXhCO0FBQ0QsS0FuQ21CO0FBRWxCLFVBQUtHLG1CQUFMLEdBQTJCLE1BQUtBLG1CQUFMLENBQXlCQyxJQUF6Qiw2Q0FBM0I7QUFDQSxVQUFLTixNQUFMLEdBQWMsSUFBZDtBQUhrQjtBQUluQjs7OzswQ0FFc0JPLFMsRUFBVztBQUNoQyxhQUFPLEtBQUtULEtBQUwsQ0FBV0ksT0FBWCxLQUF1QkssU0FBUyxDQUFDTCxPQUFqQyxJQUNGLEtBQUtKLEtBQUwsQ0FBV0csZ0JBQVgsS0FBZ0NNLFNBQVMsQ0FBQ04sZ0JBRC9DO0FBRUQ7Ozt5Q0FFcUI7QUFDcEIsV0FBS0ksbUJBQUw7QUFDRDs7OzJDQUV1QjtBQUN0QixVQUFJLEtBQUtMLE1BQVQsRUFBaUI7QUFDZkcsUUFBQUEsWUFBWSxDQUFDLEtBQUtILE1BQU4sQ0FBWjtBQUNBLGFBQUtBLE1BQUwsR0FBYyxJQUFkO0FBQ0Q7QUFDRjs7OzZCQWlCUztBQUFBLHdCQUN5QixLQUFLRixLQUQ5QjtBQUFBLFVBQ0FVLEtBREEsZUFDQUEsS0FEQTtBQUFBLFVBQ09DLGFBRFAsZUFDT0EsYUFEUDs7QUFFUixVQUFJRCxLQUFLLElBQUksOEJBQVlBLEtBQVosTUFBdUIsYUFBcEMsRUFBbUQ7QUFDakQsZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsMEJBQ0U7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFNBQ0dBLEtBQUssaUJBQUk7QUFBSyxRQUFBLFNBQVMsRUFBQyxvREFBZjtBQUFvRSxRQUFBLEdBQUcsRUFBRUE7QUFBekUsUUFEWixlQUVFO0FBQUssUUFBQSxHQUFHLEVBQUMsZ0RBQVQ7QUFBMEQsUUFBQSxNQUFNLEVBQUVDO0FBQWxFLFFBRkYsQ0FERjtBQU1EOzs7RUFsRG9CQyxnQixHQXFEdkI7O0FBQ0E7OztBQUNBYixRQUFRLENBQUNjLFNBQVQsR0FBcUI7QUFDbkJILEVBQUFBLEtBQUssRUFBRUksbUJBQVVDLE1BREU7QUFFbkJaLEVBQUFBLGdCQUFnQixFQUFFVyxtQkFBVUUsSUFGVDtBQUduQkwsRUFBQUEsYUFBYSxFQUFFRyxtQkFBVUUsSUFITjtBQUluQlosRUFBQUEsT0FBTyxFQUFFVSxtQkFBVUc7QUFKQSxDQUFyQjtlQU9lbEIsUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgeyBzYW5pdGl6ZVVybCB9IGZyb20gJ0BicmFpbnRyZWUvc2FuaXRpemUtdXJsJ1xyXG5pbXBvcnQgeyBwcm9wT3IgfSBmcm9tICdyYW1kYSdcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5zY3NzJ1xyXG5cclxuY2xhc3MgSXNUeXBpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLl9zZXRUaW1lb3V0Q2FsbEJhY2sgPSB0aGlzLl9zZXRUaW1lb3V0Q2FsbEJhY2suYmluZCh0aGlzKVxyXG4gICAgdGhpcy5fdGltZXIgPSBudWxsXHJcbiAgfVxyXG5cclxuICBzaG91bGRDb21wb25lbnRVcGRhdGUgKG5leHRQcm9wcykge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvcHMudGltZW91dCAhPT0gbmV4dFByb3BzLnRpbWVvdXRcclxuICAgICAgfHwgdGhpcy5wcm9wcy5jYWxsQWZ0ZXJUaW1lb3V0ICE9PSBuZXh0UHJvcHMuY2FsbEFmdGVyVGltZW91dFxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlICgpIHtcclxuICAgIHRoaXMuX3NldFRpbWVvdXRDYWxsQmFjaygpXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XHJcbiAgICBpZiAodGhpcy5fdGltZXIpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVyKVxyXG4gICAgICB0aGlzLl90aW1lciA9IG51bGxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9zZXRUaW1lb3V0Q2FsbEJhY2sgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjYWxsYmFjayA9ICgpID0+IHtcclxuICAgICAgdGhpcy5fdGltZXIgPSBudWxsXHJcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5jYWxsQWZ0ZXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5jYWxsQWZ0ZXJUaW1lb3V0KClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgdGltZW91dCA9IHByb3BPcigyMDAwMCwgJ3RpbWVvdXQnLCB0aGlzLnByb3BzKVxyXG4gICAgaWYgKHRoaXMuX3RpbWVyKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lcilcclxuICAgICAgdGhpcy5fdGltZXIgPSBudWxsXHJcbiAgICB9XHJcbiAgICB0aGlzLl90aW1lciA9IHNldFRpbWVvdXQoY2FsbGJhY2ssIHRpbWVvdXQpXHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgY29uc3QgeyBpbWFnZSwgb25JbWFnZUxvYWRlZCB9ID0gdGhpcy5wcm9wc1xyXG4gICAgaWYgKGltYWdlICYmIHNhbml0aXplVXJsKGltYWdlKSA9PT0gJ2Fib3V0OmJsYW5rJykge1xyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdSZWNhc3RBcHBNZXNzYWdlIENhaUFwcE1lc3NhZ2UgYm90Jz5cclxuICAgICAgICB7aW1hZ2UgJiYgPGltZyBjbGFzc05hbWU9J1JlY2FzdEFwcE1lc3NhZ2UtLWxvZ28gQ2FpQXBwTWVzc2FnZS0tbG9nbyB2aXNpYmxlJyBzcmM9e2ltYWdlfSAvPn1cclxuICAgICAgICA8aW1nIHNyYz0naHR0cHM6Ly9jZG4uY2FpLnRvb2xzLnNhcC93ZWJjaGF0L2lzdHlwaW5nLmdpZicgb25Mb2FkPXtvbkltYWdlTG9hZGVkfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbi8vIEVTTGludCB0aGlua3Mgc29tZSBQcm9wVHlwZXMgYXJlIG5vdCB1c2VkLCBidXQgdGhleSBhcmUgcmV0cml2ZWQgaW4gbWV0aG9kIGNhbGxzLCBzbyBkaXNhYmxlIGNoZWNrXHJcbi8qIGVzbGludC1kaXNhYmxlICovXHJcbklzVHlwaW5nLnByb3BUeXBlcyA9IHtcclxuICBpbWFnZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBjYWxsQWZ0ZXJUaW1lb3V0OiBQcm9wVHlwZXMuZnVuYyxcclxuICBvbkltYWdlTG9hZGVkOiBQcm9wVHlwZXMuZnVuYyxcclxuICB0aW1lb3V0OiBQcm9wVHlwZXMubnVtYmVyLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJc1R5cGluZ1xyXG4iXX0=