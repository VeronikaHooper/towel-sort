
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let array = [];

  if (!matrix) {
    return array;
  }

  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      array = [...array, ...matrix[i]];
    } else {
      array = [...array, ...matrix[i].reverse()];
    }

  }

  return array;
}
