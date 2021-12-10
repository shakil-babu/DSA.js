var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let left = j + 1;
      let right = nums.length - 1;
      while (left < right) {
        let sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          ans.push([nums[i], nums[j], nums[left], nums[right]]);
          while (nums[left] === nums[left + 1]) left++; //To avoid same values for left pointer
          while (nums[right] === nums[right - 1]) right--; // To avoid same values for right pointer
        }
        if (sum > target) {
          right--;
        } else {
          left++;
        }
      }
      while (nums[j] === nums[j + 1]) j++;
    }
    while (nums[i] === nums[i + 1]) i++;
  }
  return ans;
};
