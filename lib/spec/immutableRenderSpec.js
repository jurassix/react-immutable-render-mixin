'use strict';

var _chai = require('chai');

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

var _immutableRenderMixin = require('../immutableRenderMixin');

var _immutableRenderMixin2 = _interopRequireDefault(_immutableRenderMixin);

var _immutableRenderDecorator = require('../immutableRenderDecorator');

var _immutableRenderDecorator2 = _interopRequireDefault(_immutableRenderDecorator);

var _shallowEqualImmutable = require('../shallowEqualImmutable');

var _shallowEqualImmutable2 = _interopRequireDefault(_shallowEqualImmutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ImmutableRenderMixin', function () {
  describe('exports', function () {
    it('should expose correct default export', function () {
      (0, _chai.expect)(_index2.default).to.deep.equal(_immutableRenderMixin2.default);
    });
    it('should expose decorator on export', function () {
      (0, _chai.expect)(_index.immutableRenderDecorator).to.deep.equal(_immutableRenderDecorator2.default);
    });
    it('should expose shallowEqual function on export', function () {
      (0, _chai.expect)(_index.shallowEqualImmutable).to.deep.equal(_shallowEqualImmutable2.default);
    });
  });
});