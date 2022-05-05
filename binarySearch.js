const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

// bonus, how many times does the search num appear?
const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const searchNum4 = 2;
const expected4 = 4;

/*
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
  Bonus (alumni interview): 
    first complete it without the bonus, because they ask for additions
    after the initial algo is complete
    return how many times the given number occurs

  - Create a function that inputs a sorted array and a number to search for
  - Create a variable to keep track of the current range
  - While the difference of the range is not 0
    - Find the center index of of the range
    - If the value of the center item in the array is equal to the seach number
      - Return true
    - Else if the value of the center item is less than the search number
      - Set the range to the right side
    - Else if the value of the center item is greater than the search number
      - Set the range to the left side
  - Return false
*/

/**
 * Efficiently determines if the given num exists in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the given num exists in the given array.
 */
function binarySearch(sortedNums, searchNum) {
  var range = {
    startingIndex: 0,
    endingIndex: sortedNums.length,
  };
  let timesLooped = 1;
  while (range.endingIndex - range.startingIndex > 1) {
    console.log("Times looped:", timesLooped);
    let centerIndex = Math.floor((range.startingIndex + range.endingIndex) / 2);
    if (sortedNums[centerIndex] == searchNum) return true;
    else if (sortedNums[centerIndex] > searchNum) {
      range.endingIndex = centerIndex;
    } else if (sortedNums[centerIndex] < searchNum) {
      range.startingIndex = centerIndex;
    }
    timesLooped++;
  }

  if (
    sortedNums[range.startingIndex] == searchNum ||
    sortedNums[range.endingIndex] == searchNum
  )
    return true;
  return false;
}

console.log(binarySearch(nums1, searchNum1));
console.log(binarySearch(nums2, searchNum2));
console.log(binarySearch(nums3, searchNum3));
