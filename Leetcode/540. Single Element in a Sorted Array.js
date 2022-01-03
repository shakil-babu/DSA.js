var singleNonDuplicate = function (nums) {
  let left = 0,
    right = left + 1;
  let count = 0;
  while (left < right) {
    if (nums[left] === nums[right]) {
      count++;
      left++;
      right++;
    } else {
      return nums[left];
    }
    left++;
    right++;
  }
};
