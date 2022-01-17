var divideString = function (s, k, fill) {
  if (s.length === 0) return [];
  let ans = [];
  for (let i = 0, knife = 0; i < s.length; i += 1, knife += k) {
    let slc = s.substr(knife, k);
    ans.push(slc);
  }

  let uniqued = ans.filter((item) => item !== "");

  let final = [];
  uniqued.map((item, index) => {
    if (item.length < k) {
      let len = k - item.length;
      let i = item.concat(fill.repeat(len));
      final.push(i);
    } else final.push(item);
  });

  return final;
};
