/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
  arr = n.split("");
  let max = arr[0];

  for (let item of arr) {
    max = Math.max(max, item);
  }

  return max;
};
