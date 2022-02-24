var searchMatrix = function (matrix, target) {
  for (let item of matrix) {
    for (let i = 0; i < item.length; i++) {
      if (item[i] === target) {
        return true;
      }
    }
  }

  return false;
};

let ans = searchMatrix(
  [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
  ],
  5
);
console.log(ans);
