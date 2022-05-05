const two_num1 = 0;
const two_expected1 = 0;

const two_num2 = 1;
const two_expected2 = 1;

const two_num3 = 2;
const two_expected3 = 1;

const two_num4 = 3;
const two_expected4 = 2;

const two_num5 = 4;
const two_expected5 = 3;

const two_num6 = 8;
const two_expected6 = 21;

/**
 * Recursively finds the nth number in the fibonacci sequence.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num The position of the desired number in the fibonacci sequence.
 * @returns {number} The fibonacci number at the given position.
 */
var times = 0;
function fibonacci(num) {
  if (num <= 0) return 0;
  if (num == 1 || num == 2) return 1;
  times++;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

// console.log(fibonacci(two_num1));
// console.log(fibonacci(two_num2));
// console.log(fibonacci(two_num3));
// console.log(fibonacci(two_num4));
// console.log(fibonacci(two_num5));
console.log(fibonacci(two_num6));
console.log(`This function ran ${times} times!`);
