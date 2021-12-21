class Solution {
  solve(s) {
    let count = 1;
    if (s === "") return 0;
    let max = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === s[i + 1]) {
        count++;
      } else {
        max = Math.max(count, max);
        count = 1;
      }
    }

    return max;
  }
}
