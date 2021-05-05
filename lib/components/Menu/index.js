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