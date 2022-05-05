/* 
    https://visualgo.net/en/sorting
    Selection sort works by iterating through the list, finding the minimum
    value, and moving it to the beginning of the list. Then, ignoring the first
    position, which is now sorted, iterate through the list again to find the
    next minimum value and move it to index 1. This continues until all values
    are sorted.
    Unstable sort.
    Time Complexity
        - Best: O(n^2) quadratic.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic.
    
    Space: O(1) constant.
    Selection sort is one of the slower sorts.
        - ideal for: pagination, where page 1 displays 10 records for example,
        you run selection sort for 10 iterations only to display the first 10
        sorted items...
*/
const myArr = [3, 2, 9, 5, 1, 4, 8];

function selectionSort(numArr) {
  for (let i = 0; i < numArr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < numArr.length; j++) {
      if (numArr[minIndex] > numArr[j]) minIndex = j;
    }
    [numArr[i], numArr[minIndex]] = [numArr[minIndex], numArr[i]];
  }
  return numArr;
}

console.log(selectionSort(myArr));
