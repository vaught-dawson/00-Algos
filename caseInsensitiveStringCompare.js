function caseInsensitiveStringCompare(strA, strB) {
  if (strA.length != strB.length) return false;
  strA = strA.toLowerCase();
  strB = strB.toLowerCase();
  if (strA === strB) return true;
  return false;
}

const strA1 = "ABC";
const strB1 = "abc";
const expected1 = true;
console.log(caseInsensitiveStringCompare(strA1, strB1));

const strA2 = "ABC";
const strB2 = "abd";
const expected2 = false;
console.log(caseInsensitiveStringCompare(strA2, strB2));

const strA3 = "ABC";
const strB3 = "bc";
const expected3 = false;
console.log(caseInsensitiveStringCompare(strA3, strB3));
