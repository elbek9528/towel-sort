
// You should implement your task here.

module.exports = function towelSort (matrix) {
  var emptyArr = [];
  if (matrix === undefined) {
    return emptyArr;
  }
  if (matrix.length === 0) {
    return matrix;
  }
  var towelSortedArr = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      towelSortedArr = towelSortedArr.concat(matrix[i])
    } else {
      towelSortedArr = towelSortedArr.concat(matrix[i].sort((a, b) => b - a))
    }
  }
  return towelSortedArr;
}
