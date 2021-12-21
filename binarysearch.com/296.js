class Solution {
  solve(nums) {
    let a = Array.from(nums);
    let arr = [...new Set(a)].sort((a, b) => b - a);
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 1]) {
        if (i === 0) {
          obj[arr[i]] = 0;
        } else {
          obj[arr[i]] = i;
        }
      }

      obj[arr[i]] = i;
    }

    return nums.map((item) => obj[item]);
  }
}

/*

class Solution {
    solve(nums) {
      let arr = Array.from(nums);
  let sorted = [...new Set(nums.sort((a, b) => b - a))];

  let map = new Map();
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i + 1]) {
      map.set(sorted[i], i - 1);
    }
    map.set(sorted[i], i);
  }

  return arr.map((item) => map.get(item));
    }
}



*/
