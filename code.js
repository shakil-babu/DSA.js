// max subarray sub
// const maxSubarraySum = (arr, len) => {
//   if (arr.length < len) return false;
//   let temp = 0;
//   let max = 0;
//   for (let i = 0; i < len; i++) {
//     max += arr[i];
//   }

//   temp = max;
//   for (let i = len; i < arr.length; i++) {
//     temp = max - arr[i - len] + arr[i];
//     max = Math.max(max, temp);
//   }

//   return max;
// };
