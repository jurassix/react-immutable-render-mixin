'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shouldComponentUpdate;

var _shallowEqualImmutable = require('./shallowEqualImmutable');

var _shallowEqualImmutable2 = _interopRequireDefault(_shallowEqualImmutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function shouldComponentUpdate(nextProps, nextState) {
  return !(0, _shallowEqualImmutable2.default)(this.props, nextProps) || !(0, _shallowEqualImmutable2.default)(this.state, nextState);
}