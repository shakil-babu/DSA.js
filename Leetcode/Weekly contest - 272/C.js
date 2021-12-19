var getDescentPeriods = function (prices) {
  if (prices.length === 1) return 1;
  let result = 0;
  let count = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i - 1] === prices[i] + 1) {
      count++;
      result += count;
    } else {
      count = 0;
    }
  }

  return result + prices.length;
};
