react-immutable-render-mixin
============================

This mixin replaces the [PureRenderMixin](http://facebook.github.io/react/docs/pure-render-mixin.html) when using [facebook/immutable-js](https://github.com/facebook/immutable-js) library with [React](https://github.com/facebook/react)

This mixin implements shouldComponentUpdate method using prop and state equality with Immutable.is().

    var ImmutableRenderMixin = require('react-immutable-render-mixin')
    React.createClass({
      mixins: [ImmutableRenderMixin],

      render: function() {
        return <div className={this.props.className}>foo</div>;
      }
    });
