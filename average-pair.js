"use strict";
// add whatever parameters you deem necessary & write docstring

/** This function accepts a sorted number array and a target average
 * and determines if there is at least one pair of numbers in the array whose
 * average equals the target
 */

// Examples
// averagePair([1, 2, 3], 2.5);  // true because the average of 2 and 3 = 2.5
// averagePair([3, 3, 6, 12, 19], 8); // false because there is no combo with an average of 8
// averagePair([1, 2, 3], 2);  // true because average of 1 and 3 is 2
// averagePair([], 4);   // false

// Plan
// set a left pointer and a right pointer
// while left is less than right, keep looping
// inside the loop, calculate the average of the left and the right
// if the average equals the target return true
// if the average is less than the target, increment left by one
// if the average if greater than the target, decrement the right
// if while loop did not find a pair, return false

function averagePair(nums, targetAverage) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const average = (nums[left] + nums[right]) / 2;
    if (average === targetAverage) {
      return true;
    }
    else if (average < targetAverage) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}

