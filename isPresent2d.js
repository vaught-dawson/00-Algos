function isPresent2d(arr2d, value) {
  // Outer loop to loop through arrays
  for (var mainI = 0; mainI < arr2d.length; mainI++) {
    console.log(arr2d[mainI]);
    // Inner loop to loop through values
    for (var secondI = 0; secondI < arr2d[mainI].length; secondI++) {
      console.log(arr2d[mainI][secondI]);
      // Compare to see if value is equal to input value
      if (arr2d[mainI][secondI] == value) {
        return true;
      }
    }
  }
  return false;
}

console.log(
  isPresent2d(
    [
      ["Bulbasaur", "poison", "gas"],
      ["Blastoise", "water"],
    ],
    "Meowth"
  )
);
