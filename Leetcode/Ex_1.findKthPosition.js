var findKthPositive = function (arr, k) {
  let space = [];
  for (let i = 1; i <= 2000; i++) {
    space.push(i);
  }

  let ans = [];
  space.forEach((item, index) => {
    if (!arr.includes(item)) {
      ans.push(item);
    }
  });
  return ans[k - 1];
};
