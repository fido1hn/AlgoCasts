// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Starting here
function reverse(str) {
  // Method 1 - builtin array reverse fn
  // return str.split("").reverse().join("");

  // Method 2 - for loop
  let reversed = "";

  for (let char of str) {
    reversed = char + reversed;
  }

  return reversed;
}

module.exports = reverse;
