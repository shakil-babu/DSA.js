var judgeSquareSum = function (c) {
  if (c === 0 || c === 2) return true;
  let l = 0;
  let r = Math.floor(Math.sqrt(c));

  while (l <= r) {
    let sum = l * l + r * r;
    if (sum === c) {
      return true;
    } else if (sum > c) {
      r--;
    } else {
      l++;
    }
  }
  return false;
};
