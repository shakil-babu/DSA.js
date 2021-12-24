let cmap = (arr) => {
  let obj = {};
  for (let item of arr) {
    obj[item] ? obj[item]++ : (obj[item] = 1);
  }
  return obj;
};
var topKFrequent = function (words, k) {
  let obj = cmap(words);
  let sorted = Object.entries(obj).sort((a, b) => {
    if (a[1] === b[1]) {
      return a > b ? 1 : -1;
    } else {
      return b[1] - a[1];
    }
  });
  let ans = [];
  for (let item of sorted) {
    ans.push(item[0]);
  }
  return ans.slice(0, k);
};
