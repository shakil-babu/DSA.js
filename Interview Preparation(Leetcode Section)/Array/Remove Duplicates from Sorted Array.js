// using two pointer
var removeDuplicates = function (nums) {
  let i = 0,
    j = 1;
  while (j < nums.length) {
    if (nums[i] === nums[j]) {
      nums.splice(j, 1);
    } else {
      i++;
      j++;
    }
  }

  console.log(nums);
};

// using iterator
var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length - 1; ) {
    if (nums[i] == nums[i + 1]) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
  console.log(nums);
};
