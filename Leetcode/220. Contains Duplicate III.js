var containsNearbyAlmostDuplicate = function (nums, k, t) {
  if (nums.length === 1) return false;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (Math.abs(j - i) <= k) {
        if (Math.abs(nums[i] - nums[j]) <= t) {
          return true;
        }
      }
    }
  }
  return false;
};
