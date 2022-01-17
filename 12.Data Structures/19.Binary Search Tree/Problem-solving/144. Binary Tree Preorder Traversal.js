var preorderTraversal = function (root) {
  let data = [];
  if (!root) return data;
  var traverse = (node) => {
    data.push(node.val);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  };
  traverse(root);
  return data;
};
