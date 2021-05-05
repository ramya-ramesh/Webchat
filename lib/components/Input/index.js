"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.array.reduce.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.string.trim.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _append = _interopRequireDefault(require("ramda/es/append"));

var _SendButton = _interopRequireDefault(require("../SendButton"));

var _helpers = require("../../helpers");

var _Menu = _interopRequireDefault(require("../Menu"));

var _menu = _interopRequireDefault(require("../svgs/menu"));

require("./style.scss");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// Number of minimum char to display the char limit.
var NUMBER_BEFORE_LIMIT = 5;

var Input = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Input, _Component);

  var _super = _createSuper(Input);

  function Input() {
    var _this;

    (0, _classCallCheck2.default)(this, Input);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      value: '',
      previousValues: [],
      historyValues: [],
      indexHistory: 0,
      menuOpened: false,
      isOpen: false,
      hasFocus: false,
      menuIndexes: []
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onInputChange", function (e) {
      e.persist();
      var characterLimit = _this.props.characterLimit;
      var value = e.target.value;

      if (characterLimit && value.length > characterLimit) {
        return;
      }

      _this.setState(function (prevState) {
        var newPreviousValues = (0, _toConsumableArray2.default)(prevState.previousValues);
        newPreviousValues[prevState.indexHistory] = value;
        return {
          value: e.target.value,
          previousValues: newPreviousValues
        };
      }, _this.autoGrow);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onInputHeight", function () {
      var onInputHeight = _this.props.onInputHeight;

      if (onInputHeight) {
        onInputHeight(_this.inputContainer.clientHeight);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "sendMenuSelection", function (action) {
      if (action) {
        _this.props.onSubmit(action);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "sendMessage", function () {
      var content = _this.state.value.trim();

      if (content) {
        _this.props.onSubmit({
          type: 'text',
          content: content
        });

        _this.setState(function (prevState) {
          var historyValues = (0, _append.default)(content, prevState.historyValues);
          var previousValues = (0, _append.default)('', historyValues);
          return {
            value: '',
            previousValues: previousValues,
            historyValues: historyValues,
            indexHistory: previousValues.length - 1
          };
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "autoGrow", function () {
      _this._input.style.height = '18px';
      _this._input.style.height = "".concat(_this._input.scrollHeight, "px");
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleKeyboard", function (keyName) {
      var _this$state = _this.state,
          indexHistory = _this$state.indexHistory,
          previousValues = _this$state.previousValues;

      if (keyName === 'ArrowUp') {
        if (indexHistory > -1) {
          _this.setState(function (prevState) {
            var indexHistory = Math.max(prevState.indexHistory - 1, 0);
            return {
              indexHistory: indexHistory,
              value: prevState.previousValues[indexHistory]
            };
          }, function () {
            // Trick to go to the end of the line when pressing ArrowUp key
            setTimeout(function () {
              _this._input.selectionStart = _this._input.value.length;
              _this._input.selectionEnd = _this._input.value.length;
            }, 10);
          });
        }
      } else if (keyName === 'ArrowDown') {
        if (indexHistory < previousValues.length - 1) {
          _this.setState(function (prevState) {
            var indexHistory = Math.min(prevState.indexHistory + 1, Math.max(prevState.previousValues.length - 1, 0));
            return {
              indexHistory: indexHistory,
              value: prevState.previousValues[indexHistory]
            };
          });
        } else {
          _this.setState({
            value: ''
          });
        }
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "removeMenuIndex", function () {
      var menuIndexes = _this.state.menuIndexes;

      _this.setState({
        menuIndexes: menuIndexes.slice(0, -1)
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "addMenuIndex", function (i) {
      var menuIndexes = _this.state.menuIndexes;

      _this.setState({
        menuIndexes: [].concat((0, _toConsumableArray2.default)(menuIndexes), [i])
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getCurrentMenu", function () {
      var menuIndexes = _this.state.menuIndexes;
      return menuIndexes.reduce(function (currentMenu, i) {
        return currentMenu.call_to_actions[i];
      }, _this.props.menu);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "triggerMenu", function () {
      var menuOpened = _this.state.menuOpened;

      if (menuOpened) {
        return _this.setState({
          menuOpened: false,
          menuIndexes: []
        });
      }

      return _this.setState({
        menuOpened: true
      });
    });
    return _this;
  }

  (0, _createClass2.default)(Input, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.state.isOpen) {
        this.setFocusState();
      }

      this._input.value = '';
      this.onInputHeight();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return nextState.value !== this.state.value || nextState.menuOpened !== this.state.menuOpened || nextState.menuIndexes.length !== this.state.menuIndexes.length || nextState.isOpen !== this.state.isOpen;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this2 = this;

      if (this.state.isOpen) {
        this.setFocusState();
      }

      if (!this.state.value) {
        // Dirty fix textarea placeholder to reset style correctly
        setTimeout(function () {
          _this2._input.style.height = '18px';
          _this2._input.value = '';

          _this2.onInputHeight();
        }, 100);
      }

      this.onInputHeight();
    }
  }, {
    key: "setFocusState",
    value: function setFocusState() {
      var _this3 = this;

      if (!this.state.hasFocus && this._input) {
        setTimeout(function () {
          _this3._input.focus();

          _this3.setState({
            hasFocus: true
          });
        }, 100);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props = this.props,
          enableHistoryInput = _this$props.enableHistoryInput,
          characterLimit = _this$props.characterLimit,
          menu = _this$props.menu,
          preferences = _this$props.preferences,
          inputPlaceholder = _this$props.inputPlaceholder;
      var _this$state2 = this.state,
          value = _this$state2.value,
          menuOpened = _this$state2.menuOpened;

      var _ref = menu || [],
          call_to_actions = _ref.call_to_actions;

      var menuActions = (0, _helpers.safeArrayOfItem)(call_to_actions);
      var showMenuIcon = menuActions.length > 0;
      var showLimitCharacter = characterLimit ? characterLimit - value.length <= NUMBER_BEFORE_LIMIT : null;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "RecastAppInput CaiAppInput",
        ref: function ref(_ref2) {
          _this4.inputContainer = _ref2;
        }
      }, showMenuIcon && /*#__PURE__*/_react.default.createElement(_menu.default, {
        onClick: this.triggerMenu
      }), menuOpened && /*#__PURE__*/_react.default.createElement(_Menu.default, {
        closeMenu: this.triggerMenu,
        currentMenu: this.getCurrentMenu(),
        addMenuIndex: this.addMenuIndex,
        removeMenuIndex: this.removeMenuIndex,
        postbackClick: function postbackClick(action) {
          return _this4.sendMenuSelection(action);
        }
      }), /*#__PURE__*/_react.default.createElement("textarea", {
        ref: function ref(i) {
          return _this4._input = i;
        },
        value: value,
        style: {
          width: '100%',
          maxHeight: 70,
          resize: 'none'
        },
        placeholder: inputPlaceholder,
        onChange: this.onInputChange,
        onKeyPress: function onKeyPress(e) {
          if (e.key === 'Enter') {
            _this4.sendMessage();

            e.preventDefault();
          }
        },
        onKeyDown: function onKeyDown(event) {
          if (enableHistoryInput) {
            _this4.handleKeyboard(event.key);
          }
        },
        rows: 1
      }), /*#__PURE__*/_react.default.createElement(_SendButton.default, {
        preferences: preferences,
        sendMessage: this.sendMessage,
        value: value
      }), showLimitCharacter && /*#__PURE__*/_react.default.createElement("div", {
        className: "characterLimit"
      }, characterLimit - value.length));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (!props.isOpen) {
        return {
          isOpen: props.isOpen,
          hasFocus: false
        };
      }

      return {
        isOpen: props.isOpen
      };
    }
  }]);
  return Input;
}(_react.Component);

Input.propTypes = {
  isOpen: _propTypes.default.bool,
  menu: _propTypes.default.object,
  onSubmit: _propTypes.default.func,
  onInputHeight: _propTypes.default.func,
  enableHistoryInput: _propTypes.default.bool,
  characterLimit: _propTypes.default.number,
  inputPlaceholder: _propTypes.default.string,
  preferences: _propTypes.default.object
};
var _default = Input;
exports.default = _default;