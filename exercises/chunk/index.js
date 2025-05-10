// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunks = [];
  let index = 0;
  while (index < array.length) {
    chunks.push(array.slice(index, index + size));
    index += size;
  }
  return chunks;
}

module.exports = chunk;

// My first solution
/*
function chunk(array, size) {
  let chunks = [];
  while (array.length > 0) {
    let sub = array.splice(0, size);
    chunks.push(sub);
  }
  return chunks;
}
*/

// A second solution
/*
function chunk(array, size) {
  const chunks = [];
  for (let el of array) {
    let chunkLast = chunks[chunks.length - 1];
    if (!chunkLast || chunkLast.length === size) {
      chunks.push([el]);
    } else {
      chunkLast.push(el);
    }
  }
  return chunks;
}
*/

// A third solution
/*
function chunk(array, size) {
  const chunks = [];
  let index = 0;
  while (index < array.length) {
    chunks.push(array.slice(index, index + size));
    index += size;
  }
  return chunks;
}
*/
