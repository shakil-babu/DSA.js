/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  nums.sort((a, b) => b - a);
  let ans = 0,
    i = 1;
  while (i < nums.length) {
    ans += (nums[i - 1] - nums[i]) * i;
    i++;
  }

  return ans;
};
