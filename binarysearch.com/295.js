class Solution {
  solve(s, k) {
    if (s.length < k) return s;
    let ans = [];
    for (let i = 0; i < k; i++) {
      ans.push("");
    }
    for (let i = 0; i < s.length; i++) {
      ans[i % k] += s[i];
    }

    return ans;
  }
}
