function flatten(arr2d) {
  var flat = [];

  for (var mainI = 0; mainI < arr2d.length; mainI++) {
    for (var secondI = 0; secondI < arr2d[mainI].length; secondI++) {
      flat.push(arr2d[mainI][secondI]);
    }
  }

  return flat;
}

function flattenWhile(arr2d) {
  var flat = [];

  while (arr2d.length > 0) {
    var innerArr = arr2d.shift();
    while (innerArr.length > 0) {
      flat.push(innerArr.shift());
    }
  }

  return flat;
}

var result = flattenWhile([
  [2, 5, 8],
  [3, 6, 1],
  [5, 7, 7],
]);
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]
