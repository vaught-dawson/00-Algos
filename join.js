function join(arr, seperator) {
  var output = "";
  for (var i = 0; i < arr.length; i++) {
    output += arr[i];
    if (i != arr.length - 1) output += seperator;
  }
  return output;
}

const arr1 = [1, 2, 3];
const separator1 = ", ";
const expected1 = "1, 2, 3";
console.log(join(arr1, separator1));

const arr2 = [1, 2, 3];
const separator2 = "-";
const expected2 = "1-2-3";
console.log(join(arr2, separator2));

const arr3 = [1, 2, 3];
const separator3 = " - ";
const expected3 = "1 - 2 - 3";
console.log(join(arr3, separator3));

const arr4 = [1];
const separator4 = ", ";
const expected4 = "1";
console.log(join(arr4, separator4));

const arr5 = [];
const separator5 = ", ";
const expected5 = "";
console.log(join(arr5, separator5));
