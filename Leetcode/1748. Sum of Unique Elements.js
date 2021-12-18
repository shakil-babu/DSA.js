let cmap = (arr) => {
  let map = {};
  for (let item of arr) {
    map[item] ? map[item]++ : (map[item] = 1);
  }
  return map;
};
var sumOfUnique = function (nums) {
  let obj = cmap(nums);
  let sum = 0;
  for (let key in obj) {
    if (obj[key] === 1) {
      sum += parseInt(key);
    }
  }

  return sum;
};
