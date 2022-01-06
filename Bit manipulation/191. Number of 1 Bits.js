/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = [];
  let arr = n.toString(2).split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "1") {
      count++;
    }
  }

  return count;
};
