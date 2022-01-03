var peakIndexInMountainArray = function (arr) {
  let max = Math.max(...arr);
  return arr.findIndex((item, index) => item === max);
};
