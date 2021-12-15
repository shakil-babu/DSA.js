const getMissingNumber = (arr) => {
  let n = arr.length;
  let sum = ((n + 1) * (n + 2)) / 2;
  for (let i = 0; i < arr.length; i++) {
    sum -= arr[i];
  }
  return sum;
};
