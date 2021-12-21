class Solution {
  solve(nums, target) {
    if (nums.length < 2) return 0;
    nums.sort((a, b) => a - b);
    let count = 0;
    let left = 0,
      right = nums.length - 1;
    while (left < right) {
      if (nums[left] + nums[right] === target) {
        count++;
        left++;
        right--;
      } else if (nums[left] + nums[right] > target) {
        right--;
      } else {
        left++;
      }
    }
    return count;
  }
}
