class Solution {
  solve(nums) {
    if (nums.length < 1) {
      return 1;
    }
    let map = {};
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) {
        map[nums[i]] = true;
      }
    }

    let i = 1;
    for (i; i <= nums.length; i++) {
      if (!map[i]) {
        return i;
      }
    }
    return i;
  }
}
