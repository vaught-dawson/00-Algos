/* 
  Balance Index
  Here, a balance point is ON an index, not between indices.
  Return the balance index where sums are equal on either side
  (exclude its own value).
  
  Return -1 if none exist.
  
*/

const two_nums1 = [-2, 5, 7, 0, 3];
const two_expected1 = 2;

const two_nums2 = [9, 9];
const two_expected2 = -1;

const two_nums3 = [9, 9, 0, 1];
const two_expected3 = -1;

/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */
function balanceIndex(nums) {
  if (nums.length < 3) return -1;
  for (let i = 1; i < nums.length - 1; i++) {
    let leftSum = 0;
    for (let left = 0; left < i; left++) {
      leftSum += nums[left];
    }

    let rightSum = 0;
    for (let right = nums.length - 1; right > i; right--) {
      rightSum += nums[right];
    }

    if (leftSum == rightSum) return i;
  }
  return -1;
}

console.log(balanceIndex(two_nums1));
console.log(balanceIndex(two_nums2));
console.log(balanceIndex(two_nums3));
