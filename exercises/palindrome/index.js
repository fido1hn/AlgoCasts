// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return str.split("").every((char, i) => char === str[str.length - i - 1]);
}

module.exports = palindrome;

// Method 1
/*
function palindrome(str) {
  return str === str.split("").reverse().join("");
}
*/

// Method 2 using array fn helpers, not ideal, does more work than is required
/*
function palindrome(str) {
  return str.split("").every((char, i) => char === str[str.length - i - 1]);
}
*/
