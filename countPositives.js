// var countPositives = 0;
// var numbers = [3, 4, -2, 7, 16, -8, 0];

// for (var i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 0) {
//     // countPositives = countPositives + 1;
//     // countPositives += 1;
//     countPositives++;
//   }
// }

// console.log("there are " + countPositives + " positive values");

// function countPositives(arr) {
//     var counted = 0;
//     for (var i = 0; i < arr.length; i++) {
//       if (arr[i] > 0) {
//         counted++;
//       }
//     }

//     return counted;
//   }

function countPositives(arr) {
  var counted = 0;
  for (var i = 0; i < arr.length; i++) if (arr[i] >= 0) counted++;
  return counted;
}

console.log(
  "there are " + countPositives([3, 4, -2, 7, 16, -8, 0]) + " positive values"
);
