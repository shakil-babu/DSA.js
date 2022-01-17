function maxLevelSum() {
  if (!this.root) return 0;
  let result = [];
  let queue = [this.root];
  let i = 1;
  while (queue.length) {
    let len = queue.length;
    let height = [];
    for (let i = 0; i < len; i++) {
      let cur = queue.shift();
      height.push(cur.val);
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }
    result.push({ arr: height, ans: i });
    i++;
  }

  let arr = [];
  for (let i = 0; i < result.length; i++) {
    let sum = result[i].arr.reduce((a, b) => a + b, 0);
    arr.push({ sum: sum, ans: result[i].ans });
  }
  return arr.sort((a, b) => b.sum - a.sum)[0].ans;
}
