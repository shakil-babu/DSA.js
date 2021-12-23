var minimumDifference = function (nums, k) {
  if (nums.length <= 1) return 0;
  nums.sort((a, b) => a - b);

  let result = Infinity;
  for (let i = 0; i <= nums.length - k; i++) {
    result = Math.min(result, nums[i + k - 1] - nums[i]);
  }
  return result;
};
