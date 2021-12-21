class Solution {
  solve(s) {
    let map = {
      "(": ")",
      "{": "}",
      "[": "]",
    };

    let char = [];
    for (let i = 0; i < s.length; i++) {
      if (map[s[i]]) {
        char.push(map[s[i]]);
      } else {
        if (char.pop() !== s[i]) {
          return false;
        }
      }
    }

    return char.length === 0;
  }
}
