react-immutable-render-mixin
============================

This mixin/decorator replaces the [PureRenderMixin](http://facebook.github.io/react/docs/pure-render-mixin.html) when using [facebook/immutable-js](https://github.com/facebook/immutable-js) library with [React](https://github.com/facebook/react)

This mixin/decorator implements shouldComponentUpdate method using prop and state equality with Immutable.is().


Installation
------------

```sh
npm install react-immutable-render-mixin
```

Usage as Mixin
-----

```jsx
var ImmutableRenderMixin = require('react-immutable-render-mixin').ImmutableRenderMixin;
React.createClass({
  mixins: [ImmutableRenderMixin],

  render: function() {
    return <div className={this.props.className}>foo</div>;
  }
});
```

Usage as Decorator
-----
```jsx
import React from 'react';
import {ImmutableRenderDecorator} from 'react-immutable-render-mixin';

@ImmutableRenderDecorator
class Test extends React.Component {
  render() {
    return <div></div>;
  }
}
```
