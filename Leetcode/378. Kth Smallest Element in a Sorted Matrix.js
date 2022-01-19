var kthSmallest = function (matrix, k) {
  let data = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      data.push(matrix[i][j]);
    }
  }

  return data.sort((a, b) => a - b)[k - 1];
};
