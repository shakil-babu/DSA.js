let maxSubArraySum = (arr) => {
  let current = 0;
  let maximum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    current = Math.max(arr[i], current + arr[i]);
    if (current > maximum) {
      maximum = current;
    }
  }

  return maximum;
};

let ans = maxSubArraySum([4, -8, -2, 8, -1, 3, 2, -6, 2]);
console.log(ans);
