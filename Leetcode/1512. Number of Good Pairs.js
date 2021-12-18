var numIdenticalPairs = function (nums) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        ans.push([i, j]);
      }
    }
  }

  return ans.length;
};

// Optimized solution
var numIdenticalPairs = function (nums) {
  let left = 0;
  right = nums.length - 1;
  let count = 0;

  while (left < right) {
    if (nums[left] === nums[right]) {
      count++;
    }
    right--;

    if (left === right) {
      left++;
      right = nums.length - 1;
    }
  }
  return count;
};
