var rotate = function (nums, k) {
  if (!nums || !nums.length) return;
  if (k >= nums.length) {
    k = k % nums.length;
  }
  nums.splice(0, 0, ...nums.splice(nums.length - k));
};
