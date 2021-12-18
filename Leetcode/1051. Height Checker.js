var heightChecker = function (heights) {
  let arr = Array.from(heights).sort((a, b) => a - b);
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (heights[i] !== arr[i]) {
      ans.push(i);
    }
  }

  return ans.length;
};
