webpackJsonp([1],{

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(39);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(40);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.state = {
      name: 'Joe',
      health: 100,
      level: 1,
      lowLevelClass: 'danger-red'
    };
    _this.clickedGirl = _this.clickedGirl.bind(_this);
    return _this;
  }

  // function to click on girl and decrease health


  _createClass(Layout, [{
    key: 'clickedGirl',
    value: function clickedGirl() {
      var _this2 = this;

      this.setState({
        health: this.state.health - 25
      }, function () {
        console.log("hey I clicked the girl her health is now " + _this2.state.health);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'parent' },
        _react2.default.createElement(Header, null),
        _react2.default.createElement(
          'div',
          { className: 'blue-bg ' + (this.state.health < 55 ? this.state.lowLevelClass : '') + ' ' },
          _react2.default.createElement(
            'div',
            { className: 'user-info' },
            _react2.default.createElement(
              'h3',
              null,
              'Name: ',
              this.state.name
            ),
            _react2.default.createElement(
              'h3',
              null,
              'Level: ',
              this.state.level
            )
          ),
          _react2.default.createElement(GirlImage, { bapeGirl: this.clickedGirl, health: this.state.health })
        )
      );
    }
  }]);

  return Layout;
}(_react.Component);

// New component


var GirlImage = function (_Component2) {
  _inherits(GirlImage, _Component2);

  function GirlImage() {
    _classCallCheck(this, GirlImage);

    var _this3 = _possibleConstructorReturn(this, (GirlImage.__proto__ || Object.getPrototypeOf(GirlImage)).call(this));

    _this3.state = {
      gameOver: 'sorry you are dead',
      expired: 'Your way beyond dead'
    };
    return _this3;
  }

  _createClass(GirlImage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'GirlImageComp' },
        _react2.default.createElement('img', { src: 'img/bape.png', alt: 'girl with bape on', onClick: this.props.bapeGirl }),
        _react2.default.createElement(
          'h3',
          null,
          'Health: ',
          this.props.health <= 0 ? this.state.gameOver : this.props.health
        )
      );
    }
  }]);

  return GirlImage;
}(_react.Component);

var Header = function Header() {
  return _react2.default.createElement(
    'header',
    null,
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        'Home'
      ),
      _react2.default.createElement(
        'li',
        null,
        'About'
      ),
      _react2.default.createElement(
        'li',
        null,
        'Contact'
      )
    )
  );
};

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(Layout, null), app);

/***/ })

},[118]);