'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shallowEqualImmutable = exports.immutableRenderDecorator = exports.default = undefined;

var _shallowEqualImmutable = require('./shallowEqualImmutable');

var _shallowEqualImmutable2 = _interopRequireDefault(_shallowEqualImmutable);

var _immutableRenderMixin = require('./immutableRenderMixin');

var _immutableRenderMixin2 = _interopRequireDefault(_immutableRenderMixin);

var _immutableRenderDecorator = require('./immutableRenderDecorator');

var _immutableRenderDecorator2 = _interopRequireDefault(_immutableRenderDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _immutableRenderMixin2.default;
exports.immutableRenderDecorator = _immutableRenderDecorator2.default;
exports.shallowEqualImmutable = _shallowEqualImmutable2.default;