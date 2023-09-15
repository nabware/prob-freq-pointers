"use strict";
// add whatever parameters you deem necessary & write docstring

/** This function accepts two positive integers and
 * returns true or false if they have the same
 * frequency of digits
 */

// Examples
// sameFrequency(123, 321);   // true
// sameFrequency(34, 14);     // false
// sameFrequency(22, 22);     // true
// sameFrequency(322, 222);    // false

// Plan
// convert both inputs into strings
// if lengths are not equal, return false
// make frequency object for both strings
// iterate over the first frequency object
// if current key does not exist in object2, return false
// if obj1 and obj2 frequencies are not equal for current key, return false
// return true


function sameFrequency(num1, num2) {
  const num1Str = String(num1);
  const num2Str = String(num2);

  if (num1Str.length !== num2Str.length) {
    return false;
  }

  const num1Freqs = getFrequencyCounter(num1Str);
  const num2Freqs = getFrequencyCounter(num2Str);

  for (let key in num1Freqs) {
    if (!(num2Freqs[key]) || (num1Freqs[key] !== num2Freqs[key])) {
      return false;
    }
  }
  return true;
}

function getFrequencyCounter(items) {
  const freqs = {};

  for (const item of items) {
    const curr = freqs[item] || 0;
    freqs[item] = curr + 1;
  }

  return freqs;
}