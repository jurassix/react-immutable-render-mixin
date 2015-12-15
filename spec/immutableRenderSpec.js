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
  });
});
