var peakIndexInMountainArray = function (arr) {
  let max = Math.max(...arr);
  return arr.findIndex((item, index) => item === max);
};
let ans = peakIndexInMountainArray([0, 10, 5, 2]);
console.log(ans);
