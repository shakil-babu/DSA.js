const DFS_postOrder = (root) => {
  let data = [];
  if (!root) return data;

  let traverse = (node) => {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    data.push(node.val);
  };
  traverse(root);
  return data;
};
var kthSmallest = function (root, k) {
  let arr = DFS_postOrder(root).sort((a, b) => a - b);
  return arr[k - 1];
};
