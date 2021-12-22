class Solution {
  solve(nums: Array<number>, target: number): number {
    if (nums.length < 2) return 0;
    nums.sort((a, b) => a - b);
    let left: number = 0,
      right: number = nums.length - 1;
    let count: number = 0;

    while (left < right) {
      let sum: number = nums[left] + nums[right];
      if (sum === target) {
        count++;
        left++;
        right--;
      } else if (sum > target) {
        right--;
      } else {
        left++;
      }
    }
    return count;
  }
}
