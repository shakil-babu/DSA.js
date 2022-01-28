var countElements = function (nums) {
  if (!nums) return 0;
  let arr = nums.sort((a, b) => a - b);
  let copy = Array.from(nums);
  let count = 0;
  for (let i = 1; i < arr.length - 1; i++) {
    let item = arr[i];
    let a = nums.some((em) => em > item);
    let b = nums.some((it) => it < item);
    if (a && b) {
      count++;
    }
  }
  return count;
};

let ans = countElements([-71, -71, 93, -71, 40]);
console.log(ans);
