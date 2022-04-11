/* 
  String: Is Palindrome
  Create a function that returns a boolean whether the string is a strict palindrome. 
    - palindrome = string that is same forwards and backwards
  
  Do not ignore spaces, punctuation and capitalization
 
 - Create function that accepts a string
 - Loop through half of the array with a left pointer
    - Set a right pointer to the end of the array based on the left pointer
    - Compare values
        - Return false if not equal
 - Return true
  */

function isPalindrome(str) {
  for (let left = 0; left < str.length / 2; left++) {
    let right = str.length - 1 - left;
    if (str[left] != str[right]) return false;
  }
  return true;
}

const str1 = "a x a";
const expected1 = true;
// console.log(isPalindrome(str1));

const str2 = "racecar";
const expected2 = true;
// console.log(isPalindrome(str2));

const str3 = "Dud";
const expected3 = false;
// console.log(isPalindrome(str3));

const str4 = "oho!";
const expected4 = false;
// console.log(isPalindrome(str4));

/**
 * Determines if the given str is a palindrome (same forwards and backwards).
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given str is a palindrome or not.
 */

//   ************************************

/* 
  Longest Palindrome
  For this challenge, we will look not only at the entire string provided,
  but also at the substrings within it.
  Return the longest palindromic substring. 
  Strings longer or shorter than complete words are OK.
  All the substrings of "abc" are:
  a, ab, abc, b, bc, c

  - Create function that takes a string
  - Create an empty output variable
  - Loop through the entire length of the string
    - For each character, find equal characters
        - Check character in-between
        - If all are equal
            - Compare new palindrom to length of current output
                - Set to output if longer
  - If output is equal to one
    - Return first character
  - Return output
*/

function longestPalindrome(str) {
  let output = str[0];
  for (let initialChar = 0; initialChar < str.length; initialChar++) {
    let pal = null;
    for (
      let endingChar = initialChar + 1;
      endingChar < str.length;
      endingChar++
    ) {
      if (isPalindrome(str.substring(initialChar, endingChar)))
        pal = str.substring(initialChar, endingChar);

      if (pal && pal.length > output.length) output = pal;
    }
  }

  if (output.length <= 1) return str[0];
  return output;
}

const two_str1 = "what up, daddy-o?";
const two_expected1 = "dad";
console.log(longestPalindrome(two_str1));

const two_str2 = "uh, not much";
const two_expected2 = "u";
console.log(longestPalindrome(two_str2));

const two_str3 = "Yikes! my favorite racecar erupted!";
const two_expected3 = "e racecar e";
console.log(longestPalindrome(two_str3));

const two_str4 = "a1001x20002y5677765z";
const two_expected4 = "5677765";
console.log(longestPalindrome(two_str4));

const two_str5 = "a1001x20002y567765z";
const two_expected5 = "567765";
console.log(longestPalindrome(two_str5));

/**
 * Finds the longest palindromic substring in the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The longest palindromic substring from the given string.
 */
function longestPalindromicSubstring(str) {}
