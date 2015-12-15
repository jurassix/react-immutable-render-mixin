'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = immutableRenderDecorator;

var _shouldComponentUpdate = require('./shouldComponentUpdate');

var _shouldComponentUpdate2 = _interopRequireDefault(_shouldComponentUpdate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Makes the given component "pure".
 *
 * @param object component Component.
 */
function immutableRenderDecorator(component) {
  component.prototype.shouldComponentUpdate = _shouldComponentUpdate2.default;
}