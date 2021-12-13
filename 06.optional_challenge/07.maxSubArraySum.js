// solve using two pointer
const maxSubarraySum = (arr, k) => {
  let windowSum = 0,
    max = 0;
  let left = 0,
    right = 0;

  while (left < k) {
    windowSum += arr[left++];
  }

  while (left < arr.length) {
    windowSum += arr[left++] - arr[right++];
    max = Math.max(max, windowSum);
  }
  return max;
};
let ans = maxSubarraySum([1, 9, -1, -2, 7, 3, -1, 2], 4);
console.log(ans);
