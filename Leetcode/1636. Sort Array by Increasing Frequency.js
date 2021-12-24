const cmap = (arr) => {
  let obj = {};
  for (let item of arr) {
    obj[item] ? obj[item]++ : (obj[item] = 1);
  }
  return obj;
};
var frequencySort = function (nums) {
  let obj = cmap(nums);
  let ans = [];
  var arr = Object.entries(obj).sort((a, b) => {
    if (a[1] === b[1]) {
      return b[0] - a[0];
    } else {
      return a[1] - b[1];
    }
  });
  for (let item of arr) {
    for (let i = 0; i < item[1]; i++) {
      ans.push(parseInt(item[0]));
    }
  }
  return ans;
};

/*
 Time complexity:
 => O(n+n+nlogn+n^2)
 => O(n^2)

*/
