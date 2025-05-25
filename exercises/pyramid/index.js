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
  for (let row = 0; row < n; row++) {
    let level = "";
    for (let col = 0; col < 2 * n - 1; col++) {
      const mid = Math.floor((2 * n - 1) / 2);
      if (mid - row <= col && mid + row >= col) {
        level += "#";
      } else {
        level += " ";
      }
    }
    console.log(level);
  }
}

module.exports = pyramid;

// My solution
/*
function pyramid(n) {
  let stair = "#";

  for (let i = 1; i <= n; i++) {
    let spaces = n - i;
    console.log(
      " ".repeat(spaces) + stair.repeat(i + (i - 1)) + " ".repeat(spaces)
    );
  }
}
*/

// second solution - iterative
/*
function pyramid(n) {
  for (let row = 0; row < n; row++) {
    let level = "";
    for (let col = 0; col < 2 * n - 1; col++) {
      const mid = Math.floor((2 * n - 1) / 2);
      if (mid - row <= col && mid + row >= col) {
        level += "#";
      } else {
        level += " ";
      }
    }
    console.log(level);
  }
}
*/
