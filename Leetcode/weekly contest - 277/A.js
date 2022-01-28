var countElements = function (nums) {
  if (!nums) return 0;
  let min = Math.min(...nums);
  let max = Math.max(...nums);
  let count = 0;
  nums.forEach((item, index) => {
    if (item > min && item < max) {
      count++;
    }
  });
  return count;
};

// var countElements = function (nums) {
//   if (!nums) return 0;
//   let arr = nums.sort((a, b) => a - b);
//   let count = 0;
//   for (let i = 1; i < arr.length - 1; i++) {
//     let item = arr[i];
//     let a = nums.some((em) => em > item);
//     let b = nums.some((it) => it < item);
//     if (a && b) {
//       count++;
//     }
//   }
//   return count;
// };
