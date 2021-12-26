let cmap = (arr) => {
  let obj = {};
  for (let item of arr) {
    obj[item] ? obj[item]++ : (obj[item] = 1);
  }
  return obj;
};

var singleNumber = function (nums) {
  let obj = cmap(nums);
  for (let key in obj) {
    if (obj[key] === 1) {
      return parseInt(key);
    }
  }
};
