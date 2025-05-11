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
