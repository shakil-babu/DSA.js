const cmap = (arr) => {
  let obj = {};
  for (let item of arr) {
    obj[item] ? obj[item]++ : (obj[item] = 1);
  }
  return obj;
};
var topKFrequent = function (nums, k) {
  let obj = cmap(nums);
  let sorted = Object.entries(obj)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k);
  let keys = Object.keys(obj);
  let ans = [];
  for (let item of sorted) {
    ans.push(parseInt(item[0]));
  }
  return ans;
};
