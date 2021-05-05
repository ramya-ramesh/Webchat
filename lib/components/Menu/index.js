"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.map.js");

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

var _helpers = require("../../helpers");

var _arrowLeft = _interopRequireDefault(require("../svgs/arrowLeft"));

var _arrowRight = _interopRequireDefault(require("../svgs/arrowRight"));

require("./style.scss");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Menu = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Menu, _Component);

  var _super = _createSuper(Menu);

  function Menu(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Menu);
    _this = _super.call(this, props);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleMouseClick", function (e) {
      if (!_this.node.contains(e.target) && e.target.id !== 'menu-svg' && e.target.id !== 'menu-svg-path') {
        _this.props.closeMenu();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleMenuSelection", function (action) {
      if (action) {
        var type = action.type,
            title = action.title,
            payload = action.payload;
        var data = {
          type: 'button',
          content: {
            title: title,
            value: payload,
            type: type
          }
        };

        _this.props.postbackClick(data);
      }
    });
    document.addEventListener('mousedown', _this.handleMouseClick);
    return _this;
  }

  (0, _createClass2.default)(Menu, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleMouseClick);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          currentMenu = _this$props.currentMenu,
          addMenuIndex = _this$props.addMenuIndex,
          removeMenuIndex = _this$props.removeMenuIndex,
          closeMenu = _this$props.closeMenu;
      var title = currentMenu.title,
          call_to_actions = currentMenu.call_to_actions;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "Menu",
        ref: function ref(node) {
          return _this2.node = node;
        }
      }, !!title && /*#__PURE__*/_react.default.createElement("div", {
        onClick: removeMenuIndex,
        className: "MenuHeader"
      }, /*#__PURE__*/_react.default.createElement(_arrowLeft.default, {
        className: "MenuHeader--SVG"
      }), /*#__PURE__*/_react.default.createElement("p", {
        className: "MenuHeader--Title"
      }, title)), (0, _helpers.safeArrayOfItem)(call_to_actions).map(function (action, index) {
        var component = false;

        switch (action.type) {
          case 'postback':
            component = /*#__PURE__*/_react.default.createElement("div", {
              key: index,
              className: "MenuElement",
              onClick: function onClick() {
                _this2.handleMenuSelection(action);

                closeMenu();
              }
            }, action.title);
            break;

          case 'nested':
            component = /*#__PURE__*/_react.default.createElement("div", {
              key: index,
              className: "MenuElement",
              onClick: function onClick() {
                return addMenuIndex(index);
              }
            }, /*#__PURE__*/_react.default.createElement("p", {
              style: {
                flex: 1
              }
            }, action.title), /*#__PURE__*/_react.default.createElement(_arrowRight.default, null));
            break;

          case 'Link':
            // TODO Should be "web_url" from backend
            component = /*#__PURE__*/_react.default.createElement("a", {
              key: index,
              className: "MenuElement",
              href: action.payload,
              rel: "noopener noreferrer",
              target: "_self"
            }, action.title);
            break;

          default:
            component = false;
        }

        return component;
      }));
    }
  }]);
  return Menu;
}(_react.Component);

Menu.propTypes = {
  currentMenu: _propTypes.default.object,
  closeMenu: _propTypes.default.func,
  addMenuIndex: _propTypes.default.func,
  removeMenuIndex: _propTypes.default.func,
  postbackClick: _propTypes.default.func
};
var _default = Menu;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01lbnUvaW5kZXguanMiXSwibmFtZXMiOlsiTWVudSIsInByb3BzIiwiZSIsIm5vZGUiLCJjb250YWlucyIsInRhcmdldCIsImlkIiwiY2xvc2VNZW51IiwiYWN0aW9uIiwidHlwZSIsInRpdGxlIiwicGF5bG9hZCIsImRhdGEiLCJjb250ZW50IiwidmFsdWUiLCJwb3N0YmFja0NsaWNrIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlTW91c2VDbGljayIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjdXJyZW50TWVudSIsImFkZE1lbnVJbmRleCIsInJlbW92ZU1lbnVJbmRleCIsImNhbGxfdG9fYWN0aW9ucyIsIm1hcCIsImluZGV4IiwiY29tcG9uZW50IiwiaGFuZGxlTWVudVNlbGVjdGlvbiIsImZsZXgiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7Ozs7O0lBRU1BLEk7Ozs7O0FBQ0osZ0JBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFBQTtBQUNsQiw4QkFBTUEsS0FBTjtBQURrQixtR0FTRCxVQUFBQyxDQUFDLEVBQUk7QUFDdEIsVUFDRSxDQUFDLE1BQUtDLElBQUwsQ0FBVUMsUUFBVixDQUFtQkYsQ0FBQyxDQUFDRyxNQUFyQixDQUFELElBQ0dILENBQUMsQ0FBQ0csTUFBRixDQUFTQyxFQUFULEtBQWdCLFVBRG5CLElBRUdKLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxFQUFULEtBQWdCLGVBSHJCLEVBSUU7QUFDQSxjQUFLTCxLQUFMLENBQVdNLFNBQVg7QUFDRDtBQUNGLEtBakJtQjtBQUFBLHNHQW1CRSxVQUFBQyxNQUFNLEVBQUk7QUFDOUIsVUFBSUEsTUFBSixFQUFZO0FBQUEsWUFDRkMsSUFERSxH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RSxjQUFBLE1BQU0sRUFBQztBQUxULGVBT0dILE1BQU0sQ0FBQ0UsS0FQVixDQURGO0FBV0E7O0FBQ0Y7QUFDRWdCLFlBQUFBLFNBQVMsR0FBRyxLQUFaO0FBckNGOztBQXdDQSxlQUFPQSxTQUFQO0FBQ0QsT0EzQ0EsQ0FSSCxDQURGO0FBdUREOzs7RUE3RmdCRyxnQjs7QUFnR25CN0IsSUFBSSxDQUFDOEIsU0FBTCxHQUFpQjtBQUNmVixFQUFBQSxXQUFXLEVBQUVXLG1CQUFVQyxNQURSO0FBRWZ6QixFQUFBQSxTQUFTLEVBQUV3QixtQkFBVUUsSUFGTjtBQUdmWixFQUFBQSxZQUFZLEVBQUVVLG1CQUFVRSxJQUhUO0FBSWZYLEVBQUFBLGVBQWUsRUFBRVMsbUJBQVVFLElBSlo7QUFLZmxCLEVBQUFBLGFBQWEsRUFBRWdCLG1CQUFVRTtBQUxWLENBQWpCO2VBUWVqQyxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCB7IHNhZmVBcnJheU9mSXRlbSB9IGZyb20gJ2hlbHBlcnMnXHJcblxyXG5pbXBvcnQgQXJyb3dMZWZ0IGZyb20gJ2NvbXBvbmVudHMvc3Zncy9hcnJvd0xlZnQnXHJcbmltcG9ydCBBcnJvd1JpZ2h0IGZyb20gJ2NvbXBvbmVudHMvc3Zncy9hcnJvd1JpZ2h0J1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnXHJcblxyXG5jbGFzcyBNZW51IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVNb3VzZUNsaWNrKVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVNb3VzZUNsaWNrKVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlTW91c2VDbGljayA9IGUgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICAhdGhpcy5ub2RlLmNvbnRhaW5zKGUudGFyZ2V0KVxyXG4gICAgICAmJiBlLnRhcmdldC5pZCAhPT0gJ21lbnUtc3ZnJ1xyXG4gICAgICAmJiBlLnRhcmdldC5pZCAhPT0gJ21lbnUtc3ZnLXBhdGgnXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5wcm9wcy5jbG9zZU1lbnUoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlTWVudVNlbGVjdGlvbiA9IGFjdGlvbiA9PiB7XHJcbiAgICBpZiAoYWN0aW9uKSB7XHJcbiAgICAgIGNvbnN0IHsgdHlwZSwgdGl0bGUsIHBheWxvYWQgfSA9IGFjdGlvblxyXG4gICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIHR5cGU6ICdidXR0b24nLFxyXG4gICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgdmFsdWU6IHBheWxvYWQsXHJcbiAgICAgICAgICB0eXBlLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLnByb3BzLnBvc3RiYWNrQ2xpY2soZGF0YSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICBjb25zdCB7IGN1cnJlbnRNZW51LCBhZGRNZW51SW5kZXgsIHJlbW92ZU1lbnVJbmRleCwgY2xvc2VNZW51IH0gPSB0aGlzLnByb3BzXHJcbiAgICBjb25zdCB7IHRpdGxlLCBjYWxsX3RvX2FjdGlvbnMgfSA9IGN1cnJlbnRNZW51XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nTWVudScgcmVmPXtub2RlID0+ICh0aGlzLm5vZGUgPSBub2RlKX0+XHJcbiAgICAgICAgeyEhdGl0bGUgJiYgKFxyXG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXtyZW1vdmVNZW51SW5kZXh9IGNsYXNzTmFtZT0nTWVudUhlYWRlcic+XHJcbiAgICAgICAgICAgIDxBcnJvd0xlZnQgY2xhc3NOYW1lPSdNZW51SGVhZGVyLS1TVkcnIC8+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nTWVudUhlYWRlci0tVGl0bGUnPnt0aXRsZX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7c2FmZUFycmF5T2ZJdGVtKGNhbGxfdG9fYWN0aW9ucykubWFwKChhY3Rpb24sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBsZXQgY29tcG9uZW50ID0gZmFsc2VcclxuICAgICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgIGNhc2UgJ3Bvc3RiYWNrJzpcclxuICAgICAgICAgICAgY29tcG9uZW50ID0gKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J01lbnVFbGVtZW50J1xyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZU1lbnVTZWxlY3Rpb24oYWN0aW9uKVxyXG4gICAgICAgICAgICAgICAgICBjbG9zZU1lbnUoKVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7YWN0aW9uLnRpdGxlfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICBjYXNlICduZXN0ZWQnOlxyXG4gICAgICAgICAgICBjb21wb25lbnQgPSAoXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9J01lbnVFbGVtZW50JyBvbkNsaWNrPXsoKSA9PiBhZGRNZW51SW5kZXgoaW5kZXgpfT5cclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZsZXg6IDEgfX0+e2FjdGlvbi50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8QXJyb3dSaWdodCAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICBjYXNlICdMaW5rJzogLy8gVE9ETyBTaG91bGQgYmUgXCJ3ZWJfdXJsXCIgZnJvbSBiYWNrZW5kXHJcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IChcclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nTWVudUVsZW1lbnQnXHJcbiAgICAgICAgICAgICAgICBocmVmPXthY3Rpb24ucGF5bG9hZH1cclxuICAgICAgICAgICAgICAgIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcidcclxuICAgICAgICAgICAgICAgIHRhcmdldD0nX3NlbGYnXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2FjdGlvbi50aXRsZX1cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IGZhbHNlXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuIGNvbXBvbmVudFxyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbk1lbnUucHJvcFR5cGVzID0ge1xyXG4gIGN1cnJlbnRNZW51OiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGNsb3NlTWVudTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgYWRkTWVudUluZGV4OiBQcm9wVHlwZXMuZnVuYyxcclxuICByZW1vdmVNZW51SW5kZXg6IFByb3BUeXBlcy5mdW5jLFxyXG4gIHBvc3RiYWNrQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51XHJcbiJdfQ==