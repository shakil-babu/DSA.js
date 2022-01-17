var levelOrder = function (root) {
  if (!root) return [];
  let queue = [root];
  let ans = [];
  while (queue.length) {
    let height = [];
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let cur = queue.shift();
      height.push(cur.val);

      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }
    ans.push(height);
  }

  return ans;
};
