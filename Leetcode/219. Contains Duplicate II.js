var containsNearbyDuplicate = function (nums, k) {
  let ans = false;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && Math.abs(i - j) <= k) {
        ans = true;
      }
    }
  }

  return ans;
};
