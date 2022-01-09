let BFS = (root) => {
  let data = [];
  if (!root) return data;
  let queue = [root];
  while (queue.length) {
    let cur = queue.shift();
    data.push(cur.val);
    if (cur.left !== null) queue.push(cur.left);
    if (cur.right !== null) queue.push(cur.right);
  }

  return data;
};
var getMinimumDifference = function (root) {
  let arr = BFS(root).sort((a, b) => a - b);
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[i] - arr[j]) < min) {
        min = Math.abs(arr[i] - arr[j]);
      }
    }
  }

  return min;
};
