let cmap = (arr) => {
  let obj = {};
  for (let item of arr) {
    obj[item] ? obj[item]++ : (obj[item] = 1);
  }
  return obj;
};

var findLucky = function (arr) {
  let obj = cmap(arr);
  let max = -1;
  for (let [key, value] of Object.entries(obj)) {
    if (value == key) {
      max = Math.max(max, key);
    }
  }

  return max;
};
