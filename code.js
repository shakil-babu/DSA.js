// let maxSubArraySum = (arr) => {
//   let current = 0;
//   let maximum = Number.MIN_SAFE_INTEGER;

//   for (let i = 0; i < arr.length; i++) {
//     current = Math.max(arr[i], current + arr[i]);
//     if (current > maximum) {
//       maximum = current;
//     }
//   }

//   return maximum;
// };

// let ans = maxSubArraySum([4, -8, -2, 8, -1, 3, 2, -6, 2]);
// console.log(ans);

// var maxAscendingSum = function (nums) {
//   let c = 0,
//     m = 0;
//   for (let i = 0; i < nums.length; i++) {
//     c += nums[i];
//     if (nums[i] >= nums[i + 1] || !nums[i + 1]) {
//       m = Math.max(c, m);
//       c = 0;
//     }
//   }

//   return m;
// };
// let ans = maxAscendingSum([10, 20, 30, 5, 10, 50]);
// // 5  10 20  20  30 50
