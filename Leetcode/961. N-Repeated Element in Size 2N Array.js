/**
 * @param {number[]} nums
 * @return {number}
 */
let cmap = (arr) => {
  let obj = {};
  for (let item of arr) {
    obj[item] ? obj[item]++ : (obj[item] = 1);
  }
  return obj;
};
var repeatedNTimes = function (nums) {
  let obj = cmap(nums);
  let sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  return sorted[0][0];
};
