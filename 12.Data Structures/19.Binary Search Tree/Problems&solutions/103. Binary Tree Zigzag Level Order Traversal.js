var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let result = [];
  let queue = [root];
  while (queue.length) {
    let len = queue.length;
    let height = [];
    for (let i = 0; i < len; i++) {
      let cur = queue.shift();
      height.push(cur.val);
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }
    result.push(height);
  }

  let ans = [];
  for (let i = 0; i < result.length; i++) {
    if (i % 2 === 1) {
      let it = result[i].reverse();
      ans.push(it);
    } else {
      ans.push(result[i]);
    }
  }

  return ans;
};
