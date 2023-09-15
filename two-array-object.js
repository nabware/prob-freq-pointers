"use strict";
// add whatever parameters you deem necessary & write docstring

/**
 * Takes two arrays of varying lengths,
 * uses first array as keys and second array as values,
 * returns an object from the keys and values.
 */

/** Examples:
 * twoArrayObject(['x', 'y', 'z'], [1, 2]);
 * // {'x': 1, 'y': 2, 'z': null}
 * twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]);
 * // {'a': 1, 'b': 2, 'c': 3}
 */

/** Break it down:
 * Create a POJO
 * Iterate through first array and set keys to first array values
 * Set values to second array values if they exist, else set to null
 * return object
 */

function twoArrayObject(keys, values) {
  const object = {};

for (let i = 0; i < keys.length; i++) {
  object[keys[i]] = i < values.length ? values[i] : null;
}

  return object;
}
