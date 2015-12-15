import shallowEqualImmutable from './shallowEqualImmutable';

export default function shouldComponentUpdate(nextProps, nextState) {
  return !shallowEqualImmutable(this.props, nextProps) || !shallowEqualImmutable(this.state, nextState);
}
