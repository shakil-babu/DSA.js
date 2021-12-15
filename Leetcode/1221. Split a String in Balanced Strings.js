var balancedStringSplit = function (s) {
  let counter = 0;
  let ans = 0;
  for (let item of s) {
    item === "R" ? counter++ : counter--;
    if (counter === 0) {
      ans = ans + 1;
    }
  }

  return ans;
};
let ans = balancedStringSplit("RLRRLLRLRL");
console.log(ans);
