// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charMap = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;

// My first solution
/*
function maxChar(str) {
  let count = {};
  for (let char of str) {
    count[char] = count[char] + 1 || 1;
  }
  let max = Math.max(...Object.values(count));
  for (let x in count) {
    if (count[x] === max) return x;
  }
}
*/

// Method 2 solution
/*
function maxChar(str) {
  let charMap = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (let x in charMap) {
    if (charMap[x] > max) {
      max = charMap[x];
      maxChar = x;
    }
  }

  return maxChar;
}
*/
