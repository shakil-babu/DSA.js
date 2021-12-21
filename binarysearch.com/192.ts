class Solution {
  solve(s: string, t: string): boolean {
    let cmap = (str: string): any => {
      let map = {};
      for (let item of str) {
        map[item] ? map[item]++ : (map[item] = 1);
      }

      return map;
    };

    let a: any = cmap(s + t);
    for (let item in a) {
      if (a[item] % 2 === 1) {
        return false;
      }
    }

    return true;
  }
}
