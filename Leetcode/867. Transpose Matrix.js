/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  let ans = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let level = [];
    for (let j = 0; j < matrix.length; j++) {
      level.push(matrix[j][i]);
    }

    ans.push(level);
  }

  return ans;
};
