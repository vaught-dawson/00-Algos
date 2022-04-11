const arr1 = ["a", "a", "a"];
const expected1 = {
  a: 3,
};
console.log(makeFrequencyTable(arr1));

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
  a: 2,
  b: 1,
  c: 3,
  B: 1,
  d: 1,
};
console.log(makeFrequencyTable(arr2));

const arr3 = [];
const expected3 = {};
console.log(makeFrequencyTable(arr3));

/* 
  Given an array of strings
  return a sum to represent how many times each array item is found (a frequency table)
  Useful methods:
    Object.hasOwnProperty("keyName")
      - returns true or false if the object has the key or not
    Python: key in dict
    - Create function that inputs an array | outputs a dictionary/object
    - Create an empty output object
    - Loop through the array:
        - Check if item exists in output object
            - Add that item key to the object set to zero
        - Add one to that value
    - Return the output
*/
/**
 * Builds a frequency table based on the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} arr
 * @returns {Object<string, number>} A frequency table where the keys are items
 *    from the given arr and the values are the amnt of times that item occurs.
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

// ***************************************************************************

/* 
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.

- Create a function that inputs an array
- Create an object that has the frequency count of each item
- Loop through the dictionary
    - If value is odd
        - Return key
- Return nothing

*/

const two_nums1 = [1];
const two_expected1 = 1;
console.log(oddOccurrencesInArray(two_nums1));

const two_nums2 = [5, 4, 5];
const two_expected2 = 4;
console.log(oddOccurrencesInArray(two_nums2));

const two_nums3 = [5, 4, 3, 4, 3, 4, 5];
const two_expected3 = 4; // there is a pair of 4s but one 4 has no pair.
console.log(oddOccurrencesInArray(two_nums3));

const two_nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const two_expected4 = 1;
console.log(oddOccurrencesInArray(two_nums4));

function oddOccurrencesInArray(nums) {
  let frequency = makeFrequencyTable(nums);
  // for in = key/index
  for (let key in frequency) {
    if (frequency[key] % 2 == 1) return key;
  }
  return null;
}
