var postorderTraversal = function (root) {
  if (!root) return [];
  let data = [];
  let traverse = (node) => {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    data.push(node.val);
  };

  traverse(root);
  return data;
};
