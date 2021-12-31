let cmap = (arr) => {
  let obj = {};
  for (let item of arr) {
    obj[item] ? obj[item]++ : (obj[item] = 1);
  }
  return obj;
};
var majorityElement = function (nums) {
  if (nums.length <= 1) return nums;
  let n = Math.floor(nums.length / 3);
  let obj = cmap(nums);

  let ans = [];
  for (let key in obj) {
    if (obj[key] > n) {
      ans.push(parseInt(key));
    }
  }

  return ans;
};
