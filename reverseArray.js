function reverse(arr) {
  var reversedArr = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}

// function reverse(arr) {
//     var reversedArr = [];
//     for (var i = arr.length; i > 0; i--) {
//       reversedArr[arr.length - i] = arr[i - 1];
//     }
//     return reversedArr;
//   }

// function reverse(arr) {
//   var reversedArr = [];
//   for (var i = 0; i < arr.length; i++) {
//     reversedArr[i] = arr[arr.length - 1 - i];
//   }
//   return reversedArr;
// }

// function reverse(arr) {
//   return arr.reverse();
// }

var arr = ["a", "b", "c", "d", "e"];
console.log(arr);
arr = reverse(arr);
console.log(arr);
