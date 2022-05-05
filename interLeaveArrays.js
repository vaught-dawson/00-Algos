const two_arrA1 = [1, 2, 3];
const two_arrB1 = ["a", "b", "c"];
const two_expected1 = [1, "a", 2, "b", 3, "c"];

const two_arrA2 = [1, 3];
const two_arrB2 = [2, 4, 6, 8];
const two_expected2 = [1, 2, 3, 4, 6, 8];

const two_arrA3 = [1, 3, 5, 7];
const two_arrB3 = [2, 4];
const two_expected3 = [1, 2, 3, 4, 5, 7];

const two_arrA4 = [];
const two_arrB4 = [42, 0, 6];
const two_expected4 = [42, 0, 6];

/* 
  Given two arrays, interleave them into one new array.
  The arrays may be different lengths. The extra items should be added to the
  back of the new array.

  - Create a function that inputs two arrays
  - Create an empty output array
  - Dermine which array is longer
  - Loop through the longer array
    - If the first array is not out of items
      - Add the current item of the first array to the output array
    - If the second array is not out of items
      - Add the current item of the second array to the output array
  - Return the output array
*/
/**
 * Interleaves two arrays into a new array. Interleaving means alternating
 * the items starting from the first array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @returns {Array<any>} A new array of interleaved items.
 */
function interleaveArrays(arr1, arr2) {
  if (arr1 == []) return arr2;
  if (arr2 == []) return arr1;

  let output = [];
  let longerArray = arr1.length >= arr2.length ? arr1 : arr2; // (conditional) ? (If true do this) : (If false do this)
  for (let i = 0; i < longerArray.length; i++) {
    if (arr1.length > i) {
      output.push(arr1[i]);
    }

    if (arr2.length > i) {
      output.push(arr2[i]);
    }
  }
  return output;
}

// push = adds to the end of an array and returns the length
// unshift = adds to the start of an array and returns the length
// pop = removes the last item from the array and returns the item
// shift = removes the first item in the array and returns the item

console.log(interleaveArrays(two_arrA1, two_arrB1));
console.log(interleaveArrays(two_arrA2, two_arrB2));
console.log(interleaveArrays(two_arrA3, two_arrB3));
console.log(interleaveArrays(two_arrA4, two_arrB4));
