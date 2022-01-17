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
var getAllElements = function (root1, root2) {
  let a = BFS(root1);
  let b = BFS(root2);
  return [...a, ...b].sort((a, b) => a - b);
};
