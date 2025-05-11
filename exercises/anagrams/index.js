// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

module.exports = anagrams;

// My first solution
/*
function anagrams(stringA, stringB) {
  const normalizeA = stringA.replace(/[^\w]/g, "").toLowerCase();
  const normalizeB = stringB.replace(/[^\w]/g, "").toLowerCase();

  const countA = {};
  const countB = {};

  for (let el of normalizeA) {
    countA[el] = countA[el]++ || 1;
  }

  for (let el of normalizeB) {
    countB[el] = countB[el]++ || 1;
  }

  if (Object.keys(countA).length !== Object.keys(countB).length) {
    return false;
  }

  for (let k in countA) {
    if (countB[k] !== countA[k]) {
      return false;
    }
  }

  return true;
}
*/

// A second solution
/*
function anagrams(stringA, stringB) {
  const countA = buildCharMap(stringA);
  const countB = buildCharMap(stringB);

  if (Object.keys(countA).length !== Object.keys(countB).length) return false;

  for (let k in countA) {
    if (countB[k] !== countA[k]) {
      return false;
    }
  }

  return true;
}

function buildCharMap(str) {
  const charMap = {};
  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char]++ || 1;
  }
  return charMap;
}
*/

// A third solution
/*
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}
*/
