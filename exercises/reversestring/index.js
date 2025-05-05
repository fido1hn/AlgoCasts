// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Starting here
function reverse(str) {
  const stack = str.split("");
  return stack.reverse().join("");
}

module.exports = reverse;
