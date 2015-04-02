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
  for(var aIndex = 0; aIndex < keysAlength; aIndex++) {
    if (!objB.hasOwnProperty(keysA[aIndex]) || !is(objA[keysA[aIndex]], objB[keysA[aIndex]]) ) {
      return false;
    }
  }
  
  // Test for B's keys missing from A.
  for(var bIndex = 0; bIndex < keysBlength; i++) {
    if(!keysA.hasOwnProperty(keysB[bIndex]) {
      return false;
    }
  }
  
  return true;
}

module.exports = shallowEqualImmutable;
