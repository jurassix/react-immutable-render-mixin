import { expect } from 'chai';

import immutableRenderMixin, { immutableRenderDecorator, shallowEqualImmutable } from '../index';

import mixin from '../immutableRenderMixin';
import decorator from '../immutableRenderDecorator';
import shallowEqual from '../shallowEqualImmutable';

describe('ImmutableRenderMixin', () => {
  describe('exports', () => {
    it('should expose correct default export', () => {
      expect(immutableRenderMixin).to.deep.equal(mixin);
    });
    it('should expose decorator on export', () => {
      expect(immutableRenderDecorator).to.deep.equal(decorator);
    });
    it('should expose shallowEqual function on export', () => {
      expect(shallowEqualImmutable).to.deep.equal(shallowEqual);
    });
    it('should expose mixin as default for <= ES5', () => {
      const indexDefault = require('../index').default;
      expect(immutableRenderMixin).to.deep.equal(indexDefault);
    });
    it('should expose decorator on export for <= ES5', () => {
      const indexDecorator = require('../index').immutableRenderDecorator;
      expect(immutableRenderDecorator).to.deep.equal(indexDecorator);
    });
    it('should expose shallowEqual function  for <= ES5', () => {
      const indexShallowEqual = require('../index').shallowEqualImmutable;
      expect(shallowEqualImmutable).to.deep.equal(indexShallowEqual);
    });
  });
});
