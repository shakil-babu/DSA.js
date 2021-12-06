const cmap = (arr) => {
  let map = {};
  for (let item of arr) {
    map[item] ? map[item]++ : (map[item] = 1);
  }
  return map;
};

var containsDuplicate = function (nums) {
  let a = cmap(nums);
  for (let item in a) {
    if (a[item] > 1) return true;
  }

  return false;
};

let ans = containsDuplicate([1, 2, 3, 1]);
console.log(ans);
