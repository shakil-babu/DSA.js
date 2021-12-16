var findGCD = function (nums) {
  let arr = nums.sort((a, b) => a - b);
  let max = arr[arr.length - 1],
    min = arr[0];

  let gcd, temp;
  if (max === 0) return (gcd = max);
  else if (min === 0) return (gcd = min);
  else {
    while (min !== 0) {
      temp = min;
      min = max % min;
      max = temp;
    }
    gcd = max;
  }

  return gcd;
};
