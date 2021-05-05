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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0lucHV0L2luZGV4LmpzIl0sIm5hbWVzIjpbIk5VTUJFUl9CRUZPUkVfTElNSVQiLCJJbnB1dCIsInZhbHVlIiwicHJldmlvdXNWYWx1ZXMiLCJoaXN0b3J5VmFsdWVzIiwiaW5kZXhIaXN0b3J5IiwibWVudU9wZW5lZCIsImlzT3BlbiIsImhhc0ZvY3VzIiwibWVudUluZGV4ZXMiLCJlIiwicGVyc2lzdCIsImNoYXJhY3RlckxpbWl0IiwicHJvcHMiLCJ0YXJnZXQiLCJsZW5ndGgiLCJzZXRTdGF0ZSIsInByZXZTdGF0ZSIsIm5ld1ByZXZpb3VzVmFsdWVzIiwiYXV0b0dyb3ciLCJvbklucHV0SGVpZ2h0IiwiaW5wdXRDb250YWluZXIiLCJjbGllbnRIZWlnaHQiLCJhY3Rpb24iLCJvblN1Ym1pdCIsImNvbnRlbnQiLCJzdGF0ZSIsInRyaW0iLCJ0eXBlIiwiX2lucHV0Iiwic3R5bGUiLCJoZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJrZXlOYW1lIiwiTWF0aCIsIm1heCIsInNldFRpbWVvdXQiLCJzZWxlY3Rpb25TdGFydCIsInNlbGVjdGlvbkVuZCIsIm1pbiIsInNsaWNlIiwiaSIsInJlZHVjZSIsImN1cnJlbnRNZW51IiwiY2FsbF90b19hY3Rpb25zIiwibWVudSIsInNldEZvY3VzU3RhdGUiLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJmb2N1cyIsImVuYWJsZUhpc3RvcnlJbnB1dCIsInByZWZlcmVuY2VzIiwiaW5wdXRQbGFjZWhvbGRlciIsIm1lbnVBY3Rpb25zIiwic2hvd01lbnVJY29uIiwic2hvd0xpbWl0Q2hhcmFjdGVyIiwicmVmIiwidHJpZ2dlck1lbnUiLCJnZXRDdXJyZW50TWVudSIsImFkZE1lbnVJbmRleCIsInJlbW92ZU1lbnVJbmRleCIsInNlbmRNZW51U2VsZWN0aW9uIiwid2lkdGgiLCJtYXhIZWlnaHQiLCJyZXNpemUiLCJvbklucHV0Q2hhbmdlIiwia2V5Iiwic2VuZE1lc3NhZ2UiLCJwcmV2ZW50RGVmYXVsdCIsImV2ZW50IiwiaGFuZGxlS2V5Ym9hcmQiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwib2JqZWN0IiwiZnVuYyIsIm51bWJlciIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUE7QUFDQSxJQUFNQSxtQkFBbUIsR0FBRyxDQUE1Qjs7SUFFTUMsSzs7Ozs7Ozs7Ozs7Ozs7O3dGQUNJO0FBQ05DLE1BQUFBLEtBQUssRUFBRSxFQUREO0FBRU5DLE1BQUFBLGNBQWMsRUFBRSxFQUZWO0FBR05DLE1BQUFBLGFBQWEsRUFBRSxFQUhUO0FBSU5DLE1BQUFBLFlBQVksRUFBRSxDQUpSO0FBS05DLE1BQUFBLFVBQVUsRUFBRSxLQUxOO0FBTU5DLE1BQUFBLE1BQU0sRUFBRSxLQU5GO0FBT05DLE1BQUFBLFFBQVEsRUFBRSxLQVBKO0FBUU5DLE1BQUFBLFdBQVcsRUFBRTtBQVJQLEs7Z0dBNkRRLFVBQUFDLENBQUMsRUFBSTtBQUNuQkEsTUFBQUEsQ0FBQyxDQUFDQyxPQUFGO0FBRG1CLFVBR1hDLGNBSFcsR0FHUSxNQUFLQyxLQUhiLENBR1hELGNBSFc7QUFBQSxVQUlYVixLQUpXLEdBSURRLENBQUMsQ0FBQ0ksTUFKRCxDQUlYWixLQUpXOztBQU1uQixVQUFJVSxjQUFjLElBQUlWLEtBQUssQ0FBQ2EsTUFBTixHQUFlSCxjQUFyQyxFQUFxRDtBQUNuRDtBQUNEOztBQUVELFlBQUtJLFFBQUwsQ0FBYyxVQUFBQyxTQUFTLEVBQUk7QUFDekIsWUFBTUMsaUJBQWlCLG9DQUFPRCxTQUFTLENBQUNkLGNBQWpCLENBQXZCO0FBQ0FlLFFBQUFBLGlCQUFpQixDQUFDRCxTQUFTLENBQUNaLFlBQVgsQ0FBakIsR0FBNENILEtBQTVDO0FBQ0EsZUFBTztBQUNMQSxVQUFBQSxLQUFLLEVBQUVRLENBQUMs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ZUFXZTFFLEsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IGFwcGVuZCBmcm9tICdyYW1kYS9lcy9hcHBlbmQnXHJcblxyXG5pbXBvcnQgU2VuZEJ1dHRvbiBmcm9tICdjb21wb25lbnRzL1NlbmRCdXR0b24nXHJcbmltcG9ydCB7IHNhZmVBcnJheU9mSXRlbSB9IGZyb20gJ2hlbHBlcnMnXHJcblxyXG5pbXBvcnQgTWVudSBmcm9tICdjb21wb25lbnRzL01lbnUnXHJcbmltcG9ydCBNZW51U1ZHIGZyb20gJ2NvbXBvbmVudHMvc3Zncy9tZW51J1xyXG5pbXBvcnQgJy4vc3R5bGUuc2NzcydcclxuXHJcbi8vIE51bWJlciBvZiBtaW5pbXVtIGNoYXIgdG8gZGlzcGxheSB0aGUgY2hhciBsaW1pdC5cclxuY29uc3QgTlVNQkVSX0JFRk9SRV9MSU1JVCA9IDVcclxuXHJcbmNsYXNzIElucHV0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIHZhbHVlOiAnJyxcclxuICAgIHByZXZpb3VzVmFsdWVzOiBbXSxcclxuICAgIGhpc3RvcnlWYWx1ZXM6IFtdLFxyXG4gICAgaW5kZXhIaXN0b3J5OiAwLFxyXG4gICAgbWVudU9wZW5lZDogZmFsc2UsXHJcbiAgICBpc09wZW46IGZhbHNlLFxyXG4gICAgaGFzRm9jdXM6IGZhbHNlLFxyXG4gICAgbWVudUluZGV4ZXM6IFtdLFxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyAocHJvcHMsIHN0YXRlKSB7XHJcbiAgICBpZiAoIXByb3BzLmlzT3Blbikge1xyXG4gICAgICByZXR1cm4geyBpc09wZW46IHByb3BzLmlzT3BlbiwgaGFzRm9jdXM6IGZhbHNlIH1cclxuICAgIH1cclxuICAgIHJldHVybiB7IGlzT3BlbjogcHJvcHMuaXNPcGVuIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmlzT3Blbikge1xyXG4gICAgICB0aGlzLnNldEZvY3VzU3RhdGUoKVxyXG4gICAgfVxyXG4gICAgdGhpcy5faW5wdXQudmFsdWUgPSAnJ1xyXG5cclxuICAgIHRoaXMub25JbnB1dEhlaWdodCgpXHJcbiAgfVxyXG5cclxuICBzaG91bGRDb21wb25lbnRVcGRhdGUgKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBuZXh0U3RhdGUudmFsdWUgIT09IHRoaXMuc3RhdGUudmFsdWVcclxuICAgICAgfHwgbmV4dFN0YXRlLm1lbnVPcGVuZWQgIT09IHRoaXMuc3RhdGUubWVudU9wZW5lZFxyXG4gICAgICB8fCBuZXh0U3RhdGUubWVudUluZGV4ZXMubGVuZ3RoICE9PSB0aGlzLnN0YXRlLm1lbnVJbmRleGVzLmxlbmd0aFxyXG4gICAgICB8fCBuZXh0U3RhdGUuaXNPcGVuICE9PSB0aGlzLnN0YXRlLmlzT3BlblxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlICgpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmlzT3Blbikge1xyXG4gICAgICB0aGlzLnNldEZvY3VzU3RhdGUoKVxyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLnN0YXRlLnZhbHVlKSB7XHJcbiAgICAgIC8vIERpcnR5IGZpeCB0ZXh0YXJlYSBwbGFjZWhvbGRlciB0byByZXNldCBzdHlsZSBjb3JyZWN0bHlcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5faW5wdXQuc3R5bGUuaGVpZ2h0ID0gJzE4cHgnXHJcbiAgICAgICAgdGhpcy5faW5wdXQudmFsdWUgPSAnJ1xyXG4gICAgICAgIHRoaXMub25JbnB1dEhlaWdodCgpXHJcbiAgICAgIH0sIDEwMClcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm9uSW5wdXRIZWlnaHQoKVxyXG4gIH1cclxuXHJcbiAgc2V0Rm9jdXNTdGF0ZSAoKSB7XHJcbiAgICBpZiAoIXRoaXMuc3RhdGUuaGFzRm9jdXMgJiYgdGhpcy5faW5wdXQpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5faW5wdXQuZm9jdXMoKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoYXNGb2N1czogdHJ1ZSB9KVxyXG4gICAgICB9LCAxMDApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbklucHV0Q2hhbmdlID0gZSA9PiB7XHJcbiAgICBlLnBlcnNpc3QoKVxyXG5cclxuICAgIGNvbnN0IHsgY2hhcmFjdGVyTGltaXQgfSA9IHRoaXMucHJvcHNcclxuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGUudGFyZ2V0XHJcblxyXG4gICAgaWYgKGNoYXJhY3RlckxpbWl0ICYmIHZhbHVlLmxlbmd0aCA+IGNoYXJhY3RlckxpbWl0KSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+IHtcclxuICAgICAgY29uc3QgbmV3UHJldmlvdXNWYWx1ZXMgPSBbLi4ucHJldlN0YXRlLnByZXZpb3VzVmFsdWVzXVxyXG4gICAgICBuZXdQcmV2aW91c1ZhbHVlc1twcmV2U3RhdGUuaW5kZXhIaXN0b3J5XSA9IHZhbHVlXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdmFsdWU6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgIHByZXZpb3VzVmFsdWVzOiBuZXdQcmV2aW91c1ZhbHVlcyxcclxuICAgICAgfVxyXG4gICAgfSwgdGhpcy5hdXRvR3JvdylcclxuICB9XHJcblxyXG4gIG9uSW5wdXRIZWlnaHQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IG9uSW5wdXRIZWlnaHQgfSA9IHRoaXMucHJvcHNcclxuICAgIGlmIChvbklucHV0SGVpZ2h0KSB7XHJcbiAgICAgIG9uSW5wdXRIZWlnaHQodGhpcy5pbnB1dENvbnRhaW5lci5jbGllbnRIZWlnaHQpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHNlbmRNZW51U2VsZWN0aW9uID0gKGFjdGlvbikgPT4ge1xyXG4gICAgaWYgKGFjdGlvbikge1xyXG4gICAgICB0aGlzLnByb3BzLm9uU3VibWl0KGFjdGlvbilcclxuICAgIH1cclxuICB9XHJcbiAgc2VuZE1lc3NhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5zdGF0ZS52YWx1ZS50cmltKClcclxuICAgIGlmIChjb250ZW50KSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25TdWJtaXQoe1xyXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICBjb250ZW50LFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGlzdG9yeVZhbHVlcyA9IGFwcGVuZChjb250ZW50LCBwcmV2U3RhdGUuaGlzdG9yeVZhbHVlcylcclxuICAgICAgICBjb25zdCBwcmV2aW91c1ZhbHVlcyA9IGFwcGVuZCgnJywgaGlzdG9yeVZhbHVlcylcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHZhbHVlOiAnJyxcclxuICAgICAgICAgIHByZXZpb3VzVmFsdWVzLFxyXG4gICAgICAgICAgaGlzdG9yeVZhbHVlcyxcclxuICAgICAgICAgIGluZGV4SGlzdG9yeTogcHJldmlvdXNWYWx1ZXMubGVuZ3RoIC0gMSxcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhdXRvR3JvdyA9ICgpID0+IHtcclxuICAgIHRoaXMuX2lucHV0LnN0eWxlLmhlaWdodCA9ICcxOHB4J1xyXG4gICAgdGhpcy5faW5wdXQuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5faW5wdXQuc2Nyb2xsSGVpZ2h0fXB4YFxyXG4gIH1cclxuXHJcbiAgaGFuZGxlS2V5Ym9hcmQgPSBrZXlOYW1lID0+IHtcclxuICAgIGNvbnN0IHsgaW5kZXhIaXN0b3J5LCBwcmV2aW91c1ZhbHVlcyB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgaWYgKGtleU5hbWUgPT09ICdBcnJvd1VwJykge1xyXG4gICAgICBpZiAoaW5kZXhIaXN0b3J5ID4gLTEpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgcHJldlN0YXRlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXhIaXN0b3J5ID0gTWF0aC5tYXgocHJldlN0YXRlLmluZGV4SGlzdG9yeSAtIDEsIDApXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgaW5kZXhIaXN0b3J5LFxyXG4gICAgICAgICAgICAgIHZhbHVlOiBwcmV2U3RhdGUucHJldmlvdXNWYWx1ZXNbaW5kZXhIaXN0b3J5XSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgLy8gVHJpY2sgdG8gZ28gdG8gdGhlIGVuZCBvZiB0aGUgbGluZSB3aGVuIHByZXNzaW5nIEFycm93VXAga2V5XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuX2lucHV0LnNlbGVjdGlvblN0YXJ0ID0gdGhpcy5faW5wdXQudmFsdWUubGVuZ3RoXHJcbiAgICAgICAgICAgICAgdGhpcy5faW5wdXQuc2VsZWN0aW9uRW5kID0gdGhpcy5faW5wdXQudmFsdWUubGVuZ3RoXHJcbiAgICAgICAgICAgIH0sIDEwKVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoa2V5TmFtZSA9PT0gJ0Fycm93RG93bicpIHtcclxuICAgICAgaWYgKGluZGV4SGlzdG9yeSA8IHByZXZpb3VzVmFsdWVzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBpbmRleEhpc3RvcnkgPSBNYXRoLm1pbihcclxuICAgICAgICAgICAgcHJldlN0YXRlLmluZGV4SGlzdG9yeSArIDEsXHJcbiAgICAgICAgICAgIE1hdGgubWF4KHByZXZTdGF0ZS5wcmV2aW91c1ZhbHVlcy5sZW5ndGggLSAxLCAwKSxcclxuICAgICAgICAgIClcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGluZGV4SGlzdG9yeSxcclxuICAgICAgICAgICAgdmFsdWU6IHByZXZTdGF0ZS5wcmV2aW91c1ZhbHVlc1tpbmRleEhpc3RvcnldLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICB2YWx1ZTogJycsXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlTWVudUluZGV4ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBtZW51SW5kZXhlcyB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1lbnVJbmRleGVzOiBtZW51SW5kZXhlcy5zbGljZSgwLCAtMSkgfSlcclxuICB9XHJcblxyXG4gIGFkZE1lbnVJbmRleCA9IGkgPT4ge1xyXG4gICAgY29uc3QgeyBtZW51SW5kZXhlcyB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1lbnVJbmRleGVzOiBbLi4ubWVudUluZGV4ZXMsIGldIH0pXHJcbiAgfVxyXG5cclxuICBnZXRDdXJyZW50TWVudSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgbWVudUluZGV4ZXMgfSA9IHRoaXMuc3RhdGVcclxuXHJcbiAgICByZXR1cm4gbWVudUluZGV4ZXMucmVkdWNlKChjdXJyZW50TWVudSwgaSkgPT4gY3VycmVudE1lbnUuY2FsbF90b19hY3Rpb25zW2ldLCB0aGlzLnByb3BzLm1lbnUpXHJcbiAgfVxyXG5cclxuICB0cmlnZ2VyTWVudSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgbWVudU9wZW5lZCB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgaWYgKG1lbnVPcGVuZWQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyBtZW51T3BlbmVkOiBmYWxzZSwgbWVudUluZGV4ZXM6IFtdIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7IG1lbnVPcGVuZWQ6IHRydWUgfSlcclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICBjb25zdCB7IGVuYWJsZUhpc3RvcnlJbnB1dCwgY2hhcmFjdGVyTGltaXQsIG1lbnUsIHByZWZlcmVuY2VzLCBpbnB1dFBsYWNlaG9sZGVyIH0gPSB0aGlzLnByb3BzXHJcbiAgICBjb25zdCB7IHZhbHVlLCBtZW51T3BlbmVkIH0gPSB0aGlzLnN0YXRlXHJcbiAgICBjb25zdCB7IGNhbGxfdG9fYWN0aW9ucyB9ID0gbWVudSB8fCBbXVxyXG4gICAgY29uc3QgbWVudUFjdGlvbnMgPSBzYWZlQXJyYXlPZkl0ZW0oY2FsbF90b19hY3Rpb25zKVxyXG4gICAgY29uc3Qgc2hvd01lbnVJY29uID0gbWVudUFjdGlvbnMubGVuZ3RoID4gMFxyXG5cclxuICAgIGNvbnN0IHNob3dMaW1pdENoYXJhY3RlciA9IGNoYXJhY3RlckxpbWl0XHJcbiAgICAgID8gY2hhcmFjdGVyTGltaXQgLSB2YWx1ZS5sZW5ndGggPD0gTlVNQkVSX0JFRk9SRV9MSU1JVFxyXG4gICAgICA6IG51bGxcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPSdSZWNhc3RBcHBJbnB1dCBDYWlBcHBJbnB1dCdcclxuICAgICAgICByZWY9e3JlZiA9PiB7XHJcbiAgICAgICAgICB0aGlzLmlucHV0Q29udGFpbmVyID0gcmVmXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtzaG93TWVudUljb24gJiYgPE1lbnVTVkcgb25DbGljaz17dGhpcy50cmlnZ2VyTWVudX0gLz59XHJcblxyXG4gICAgICAgIHttZW51T3BlbmVkICYmIChcclxuICAgICAgICAgIDxNZW51XHJcbiAgICAgICAgICAgIGNsb3NlTWVudT17dGhpcy50cmlnZ2VyTWVudX1cclxuICAgICAgICAgICAgY3VycmVudE1lbnU9e3RoaXMuZ2V0Q3VycmVudE1lbnUoKX1cclxuICAgICAgICAgICAgYWRkTWVudUluZGV4PXt0aGlzLmFkZE1lbnVJbmRleH1cclxuICAgICAgICAgICAgcmVtb3ZlTWVudUluZGV4PXt0aGlzLnJlbW92ZU1lbnVJbmRleH1cclxuICAgICAgICAgICAgcG9zdGJhY2tDbGljaz17YWN0aW9uID0+IHRoaXMuc2VuZE1lbnVTZWxlY3Rpb24oYWN0aW9uKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICByZWY9e2kgPT4gKHRoaXMuX2lucHV0ID0gaSl9XHJcbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBtYXhIZWlnaHQ6IDcwLFxyXG4gICAgICAgICAgICByZXNpemU6ICdub25lJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17aW5wdXRQbGFjZWhvbGRlcn1cclxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICBvbktleVByZXNzPXtlID0+IHtcclxuICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZW5kTWVzc2FnZSgpXHJcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbktleURvd249e2V2ZW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKGVuYWJsZUhpc3RvcnlJbnB1dCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuaGFuZGxlS2V5Ym9hcmQoZXZlbnQua2V5KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgcm93cz17MX1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8U2VuZEJ1dHRvblxyXG4gICAgICAgICAgcHJlZmVyZW5jZXM9e3ByZWZlcmVuY2VzfVxyXG4gICAgICAgICAgc2VuZE1lc3NhZ2U9e3RoaXMuc2VuZE1lc3NhZ2V9XHJcbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAge3Nob3dMaW1pdENoYXJhY3RlciAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhcmFjdGVyTGltaXQnPntjaGFyYWN0ZXJMaW1pdCAtIHZhbHVlLmxlbmd0aH08L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbklucHV0LnByb3BUeXBlcyA9IHtcclxuICBpc09wZW46IFByb3BUeXBlcy5ib29sLFxyXG4gIG1lbnU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLFxyXG4gIG9uSW5wdXRIZWlnaHQ6IFByb3BUeXBlcy5mdW5jLFxyXG4gIGVuYWJsZUhpc3RvcnlJbnB1dDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgY2hhcmFjdGVyTGltaXQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgaW5wdXRQbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICBwcmVmZXJlbmNlczogUHJvcFR5cGVzLm9iamVjdCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXRcclxuIl19