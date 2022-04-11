/* 
  Zip Arrays into Map
  
  
   create an associative arrGiven two arrays,ay (aka hash map, an obj / dictionary) containing keys from the first array, and values from the second.
  Associative arrays are sometimes called maps because a key (string) maps to a value 
 */

const keys1 = ["abc", 3, "yo"];
const vals1 = [42, "wassup", true];
const expected1 = {
  abc: 42,
  3: "wassup",
  yo: true,
};
console.log(zipArraysIntoMap(keys1, vals1));

const keys2 = [];
const vals2 = [];
const expected2 = {};
console.log(zipArraysIntoMap(keys2, vals2));

/**
 * Converts the given arrays of keys and values into an object.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} keys
 * @param {Array<any>} values
 * @returns {Object} The object with the given keys and values.
 *
 *
 - Create a function that takes two array inputs
 - Create empty output object
 - Loop through the length of the array
    - Set the key to that index of the key array to the object
    - Set the value to tha index of the value array to the object
 - Return output object
 */

function zipArraysIntoMap(keys, values) {
  if (keys.length != values.length) return;
  let output = {};
  for (let i = 0; i < keys.length; i++) {
    output[keys[i]] = values[i];
  }
  return output;
}

// ------------------------------------------------------------------------------------------------------------------------

/* 
    Invert Hash
    A hash table / hash map is an obj / dictionary
    Given an object / dict,
    return a new object / dict that has the keys and the values swapped so that the keys become the values and the values become the keys
  */

const obj3 = { name: "Zaphod", charm: "high", morals: "dicey" };
const expected3 = { Zaphod: "name", high: "charm", dicey: "morals" };
console.log(invertObj(obj3));

/**
 * Inverts the given object's key value pairs so that the original values
 * become the keys and the original keys become the values.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object<string, any>} obj
 * @return The given object with key value pairs inverted.
 - Create a function that inputs an object
 - Create an empty output object
 - Loop through the keys of the input object
    - Set the value of the input to the output key
    - Set the key of the input to the output value
 - Return output object
 */

function invertObj(obj) {
  let output = {};
  for (let key in obj) {
    let inputValue = obj[key];
    output[inputValue] = key;
  }
  return output;
}
