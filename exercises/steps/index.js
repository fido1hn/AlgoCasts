// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = "") {
  if (n === row) {
    return;
  }
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  const add = stair.length <= row ? "#" : " ";

  steps(n, row, stair + add);
}

module.exports = steps;

// My first solution
/*
function steps(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = n - i;
    let steps = i;
    console.log("#".repeat(steps) + " ".repeat(spaces));
  }
}
*/

// A second solution
/*
function steps(n) {
  for (let row = 0; row < n; row++) {
    let stairs = "";

    for (let col = 0; col < n; col++) {
      if (col <= row) {
        stairs += "#";
      } else {
        stairs += " ";
      }
    }

    console.log(stairs);
  }
}
*/

// A third solution with recursion
/*
function steps(n, row = 0, stair = "") {
  if (n === row) {
    return;
  }
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  const add = stair.length <= row ? "#" : " ";

  steps(n, row, stair + add);
}
*/
