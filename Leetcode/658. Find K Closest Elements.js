/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  while (arr.length > k) {
    let right = Math.abs(arr[arr.length - 1] - x);
    let left = Math.abs(arr[0] - x);
    if (right < left) {
      arr.shift();
    } else if (right >= left) {
      arr.length--;
    }
  }

  return arr;
};
