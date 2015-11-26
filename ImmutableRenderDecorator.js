
"use strict";

var shallowEqualImmutable = require('./shallowEqualImmutable');

var shouldComponentUpdate = function(nextProps, nextState) {
    return !shallowEqualImmutable(this.props, nextProps) ||
           !shallowEqualImmutable(this.state, nextState);
};

/**
 * Makes the given component "pure".
 *
 * @param object component Component.
 */
function ImmutableRenderDecorator(component) {
  component.prototype.shouldComponentUpdate = shouldComponentUpdate;
}

module.exports = ImmutableRenderDecorator;
