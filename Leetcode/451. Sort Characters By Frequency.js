let cmap = (arr) => {
  let obj = {};
  for (let item of arr) {
    obj[item] ? obj[item]++ : (obj[item] = 1);
  }
  return obj;
};
var topKFrequent = function (words, k) {
  let obj = cmap(words);
  let sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  let ans = [];
  for (let item of sorted) {
    ans.push(item[0]);
  }
  return ans.slice(0, k);
};
console.log(
  topKFrequent(
    ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"],
    4
  )
);
