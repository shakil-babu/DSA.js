var decompressRLElist = function (nums) {
  let ans = [];
  let l = 0,
    r = l + 1;
  while (r < nums.length) {
    for (let i = 0; i < nums[l]; i++) {
      ans.push(nums[r]);
    }

    l += 2;
    r += 2;
  }

  return ans;
};
