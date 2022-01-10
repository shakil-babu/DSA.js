var averageOfLevels = function (root) {
  if (!root) return [];
  let queue = [root];
  let result = [];

  while (queue.length) {
    let sum = 0;
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let cur = queue.shift();
      sum += cur.val;
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }
    result.push(sum / len);
  }
  return result;
};
