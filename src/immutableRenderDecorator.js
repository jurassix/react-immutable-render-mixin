import shouldComponentUpdate from './shouldComponentUpdate';

/**
 * Makes the given component "pure".
 *
 * @param object component Component.
 */
export default function immutableRenderDecorator(component) {
  component.prototype.shouldComponentUpdate = shouldComponentUpdate;
}
