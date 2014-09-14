
"use strict";

var shallowEqualImmutable = require('./shallowEqualImmutable');

var ImmutableRenderMixin = {
  shouldComponentUpdate: function(nextProps, nextState) {
    return !shallowEqualImmutable(this.props, nextProps) ||
           !shallowEqualImmutable(this.state, nextState);
  }
};

module.exports = ImmutableRenderMixin;
