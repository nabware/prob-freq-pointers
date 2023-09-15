"use strict";

/** Takes a word and string of letters,
 * compares frequency counters to check for enough letters,
 * returns true or false if can construct word with letters. */

/** Examples:
 * canConstructWord('aa', 'abc'); // {'a': 2} {'a': 1, 'b': 1, 'c': 1} false
 * canConstructWord('abc', 'dcba'); // {'a': 1, 'b': 1, 'c': 1} {'a': 1, 'b': 1, 'c': 1, 'd': 1} true
 * canConstructWord('aabb', 'bcabad'); // {'a': 2, 'b': 2} {'a': 2, 'b': 2, 'c': 1, 'd': 1} true
 */

/** Break it down:
 * if string of letters is smaller than word, return false
 * create frequency counters for each input
 * Check that letters frequency counter value
 * is greater than or equal to the word frequency counter value
 */

// add whatever parameters you deem necessary & write doc comment
function canConstructWord(word, letters) {
  if (letters.length < word.length) return false;

  let wordFreq = getFrequencyCounter(word);
  let letterFreq = getFrequencyCounter(letters);

  for (let key in wordFreq) {
    if (!(key in letterFreq)) return false;
    if (wordFreq[key] > letterFreq[key]) return false;
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