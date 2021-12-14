function recurSum(n) {
  if (n <= 1) return n;
  return n + recurSum(n - 1);
}

let ans = recurSum(4);
console.log(ans);
