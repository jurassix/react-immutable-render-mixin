import { expect } from 'chai';
import Immutable from 'immutable';

import immutableRenderMixin, { immutableRenderDecorator, shallowEqualImmutable } from '../index';

import mixin from '../immutableRenderMixin';
import decorator from '../immutableRenderDecorator';
import shallowEqual from '../shallowEqualImmutable';
import shouldComponentUpdate from '../shouldComponentUpdate';

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

describe('shallowEqualImmutable', () => {
  const equals = [
    ['string', 'string'],
    [true, true],
    [0, -0],    // Immutable.is assumes 0 and -0 are the same value, matching the behavior of ES6 Map key equality.
    [Immutable.List([1, 2, 3]), Immutable.List([1, 2, 3])],
    [Immutable.Map({ a: 1, b: 1, c: 1 }), Immutable.Map({ a: 1, b: 1, c: 1 })],
    [Immutable.Set([NaN]), Immutable.Set([NaN])],
  ];

  const obj = { a: 1, b: 2, c: 3 };
  const map1 = Immutable.Map(obj);
  obj.a = 10;
  const map2 = Immutable.Map(obj);
  const notEquals = [
    ['string', 'other string'],
    [Immutable.List([1, 2, 3]), Immutable.List([3, 2, 1])],
    [Immutable.List([1]), Immutable.Set([1])],
    [map1, map2],
  ];

  it('can determines whether two arguments are the same value or two Immutable Iterable that have equivalent values', () => {
    equals.forEach(pair =>
      expect(shallowEqualImmutable(pair[0], pair[1])).to.be.true
    );

    notEquals.forEach(pair =>
      expect(shallowEqualImmutable(pair[0], pair[1])).to.be.false
    );
  });

  it('should return true if two arguments not equal but all their items do', () => {
    equals.forEach(pair => {
      const obj1 = { key: pair[0] };
      const obj2 = { key: pair[1] };
      expect(shallowEqualImmutable(obj1, obj2)).to.be.true; // eslint-disable-line no-unused-expressions
    });

    expect(shallowEqualImmutable({}, {})).to.be.true; // eslint-disable-line no-unused-expressions

    notEquals.forEach(pair => {
      const obj1 = { key: pair[0] };
      const obj2 = { key: pair[1] };
      expect(shallowEqualImmutable(obj1, obj2)).to.be.false; // eslint-disable-line no-unused-expressions
    });
  });

  it('should return false if two arguments has different number of keys', () => {
    const obj1 = { a: equals[0], b: equals[1] };
    const obj2 = { a: equals[0], b: equals[1], c: equals[2] };
    expect(shallowEqualImmutable(obj1, obj2)).to.be.false; // eslint-disable-line no-unused-expressions
  });
});

describe('shouldComponentUpdate', () => {
  it('can determines whether new props / states and current one are equivalent to', () => {
    const obj = {
      props: { a: Immutable.List([1, 2, 3]) },
      state: Immutable.Map({ a: 1, b: 2 }),
      shouldComponentUpdate,
    };

    expect(       // eslint-disable-line no-unused-expressions
      obj.shouldComponentUpdate({ a: Immutable.List([1, 2, 3]) }, Immutable.Map({ a: 1, b: 2 }))
    ).to.be.false;  // props and state are equal, should not update

    expect(       // eslint-disable-line no-unused-expressions
      obj.shouldComponentUpdate({ a: Immutable.List([1, 2, 3]) }, Immutable.Map({ a: 1, b: 3 }))
    ).to.be.true;
  });
});

describe('immutableRenderDecorator', () => {
  it('can behavior like a HoC', () => {
    class TestComponent {}
    const Enhanced = immutableRenderDecorator(TestComponent);
    expect(Enhanced.prototype.shouldComponentUpdate).equal(shouldComponentUpdate);
  });

  it('should accept functional components', () => {
    const FunctionalComponent = () => null;
    const DecoratedComponent = immutableRenderDecorator(FunctionalComponent);

    expect(DecoratedComponent.prototype.shouldComponentUpdate).equal(shouldComponentUpdate);
  });
});
