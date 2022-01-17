var inorderTraversal = function (root) {
  var data = [];
  if (!root) return data;
  function traverse(node) {
    if (node.left) traverse(node.left);
    data.push(node.val);
    if (node.right) traverse(node.right);
  }
  traverse(root);
  return data;
};
