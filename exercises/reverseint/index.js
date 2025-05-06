// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const abs_no = Math.abs(n);
  const rev_no = (abs_no + "").split("").reverse().join("");
  return n >= 0 ? Number(rev_no) : Number("-" + rev_no);
}

module.exports = reverseInt;

// My first working solution
/*
function reverseInt(n) {
  const abs_no = Math.abs(n);
  const rev_no = (abs_no + "").split("").reverse().join("");
  return n >= 0 ? Number(rev_no) : Number("-" + rev_no);
}
*/
