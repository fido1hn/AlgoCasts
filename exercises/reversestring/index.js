// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Starting here - Method 3 using array helper fn reduce
function reverse(str) {
  return str.split("").reduce((reversed, char) => char + reversed, "");
}

module.exports = reverse;

// Method 1 - builtin array reverse fn
// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// Method 2 - For loop
// function reverse(str) {
//   let reversed = "";

//   for (let char of str) {
//     reversed = char + reversed;
//   }

//   return reversed;
// }
