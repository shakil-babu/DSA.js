class Solution {
  solve(s, t) {
    const cmap = (str) => {
      let map = {};
      for (let item of str) {
        map[item] ? map[item]++ : (map[item] = 1);
      }
      return map;
    };

    let a = cmap(s + t);
    for (let key in a) {
      if (a[key] % 2 === 1) {
        return false;
      }
    }

    return true;
  }
}
