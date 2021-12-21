class Solution {
  solve(nums, target) {
    nums.sort((a, b) => a - b);
    let left = 0,
      right = nums.length - 1,
      max = Number.MIN_SAFE_INTEGER;
    while (left < right) {
      let sum = nums[left] + nums[right];
      if (sum < target) {
        max = Math.max(max, sum);
        left++;
      } else {
        right--;
      }
    }

    return max;
  }
}
