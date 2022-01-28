var rearrangeArray = function (nums) {
  let p = [],
    n = [];
  nums.map((a) => (0 < a ? p.push(a) : n.push(a)));

  let ans = [];
  p.forEach((item, index) => {
    ans.push(item);
    ans.push(n[index]);
  });

  return ans;
};
