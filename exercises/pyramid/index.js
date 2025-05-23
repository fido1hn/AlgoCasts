// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  let stair = "#";

  for (let i = 1; i <= n; i++) {
    let spaces = n - i;
    let stairs = i === 1 ? i : i + 1;
    console.log(" ".repeat(spaces) + stair.repeat(i) + " ".repeat(spaces));
  }
}

module.exports = pyramid;
