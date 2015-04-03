var Immutable = require('immutable');

var is = Immutable.is.bind(Immutable),
    getKeys = Object.keys.bind(Object);

function shallowEqualImmutable(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }
  var keysA = getKeys(objA),
      keysB = getKeys(objB),
      keysAlength = keysA.length,
      keysBlength = keysB.length
      
  if(keysAlength !== keysBlength) {
    return false;
  }
  
  // Test for A's keys different from B.
  for(var i = 0; i < keysAlength; i++) {
    if (!objB.hasOwnProperty(keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]]) ) {
      return false;
    }
  }
  
  // Now we dont need to test for B's keys missing from A,
  // because if length's is same and prev check success - objB hasn't more keys
  return true;
}

module.exports = shallowEqualImmutable;
