/* 
  Array: Mode
  
  Create a function that, given an array of ints,
  returns the int that occurs most frequently in the array.
  What if there are multiple items that occur the same number of time?
    - return all of them (in an array)
    - what if all items occur the same number of times?
      - return empty array
*/

const nums1 = [2, 2, 3, 3, 4, 4, 5, 5];
const expected1 = [];

const nums2 = [1];
const expected2 = [1];

const nums3 = [5, 1, 4];
const expected3 = [];

const nums4 = [5, 1, 4, 1];
const expected4 = [1];

const nums5 = [5, 1, 4, 1, 5];
const expected5 = [5, 1];
//  - order doesn't matter

/**
 * Finds the mode or all modes if there are more than one. The mode is the
 *    value which occurs the most times in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Test
 * @returns {Array<number>} Mode or modes in any order.
 */
function makeFrequencyTable(arr) {
  let output = {};
  // for of = value
  for (let item of arr) {
    if (!output[item]) {
      output[item] = 0;
    }
    output[item] += 1;
  }
  return output;
}

function mode(nums) {
  if (nums.length == 0) return [];
  if (nums.length == 1) return nums;

  let frequencyTable = makeFrequencyTable(nums);
  let output = [];
  let currentMax = 0;

  for (let key in frequencyTable) {
    if (frequencyTable[key] > currentMax) {
      currentMax = frequencyTable[key];
      output = [parseInt(key)];
    } else if (frequencyTable[key] == currentMax) {
      output.push(parseInt(key));
    }
  }

  if (output.length == Object.keys(frequencyTable).length) return [];
  return output;
}

console.log(mode(nums1));
console.log(mode(nums2));
console.log(mode(nums3));
console.log(mode(nums4));
console.log(mode(nums5));
