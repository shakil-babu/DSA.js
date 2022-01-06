/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
  let arr = [];
  let ans = 0;
  for (let i = 0; i < n; i++) {
    let temp = start + 2 * i;
    arr.push(temp);
    ans = ans ^ arr[i];
  }

  return ans;
};
