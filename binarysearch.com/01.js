class Solution {
  solve(nums, k) {
    if (nums.length <= 1) return false;
    let sorted = nums.sort((a, b) => a - b);
    let l = 0,
      r = sorted.length - 1;
    while (l < r) {
      let sum = sorted[l] + sorted[r];
      if (sum === k) {
        return true;
      } else if (sum > k) {
        r--;
      } else {
        l++;
      }
    }

    return false;
  }
}

// [3,8,18,22,35]
