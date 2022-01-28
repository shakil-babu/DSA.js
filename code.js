var numberOfArrays = function (differences, lower, upper) {
  if (!differences) return 0;
  let arr = differences.map((item) => Math.abs(item));
  let seq = [];
  for (let i = lower; i <= upper; i++) {
    seq.push(i);
  }
};
let ans = numberOfArrays([1, -3, 4], 1, 6);
console.log(ans);
