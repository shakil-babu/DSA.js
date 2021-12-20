const solve = (s) => {
  if (s === "") return 0;
  let count = 1,
    max = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      count++;
    } else {
      max = Math.max(count, max);
      count = 1;
    }
  }
  return max;
};

console.log(solve("aaabbb"));
