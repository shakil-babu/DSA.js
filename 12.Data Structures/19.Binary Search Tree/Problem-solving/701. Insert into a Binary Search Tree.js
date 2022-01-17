var insertIntoBST = function (root, val) {
  let node = new TreeNode(val);
  if (root === null) {
    root = node;
    return root;
  }
  let current = root;
  while (true) {
    if (current.val > val) {
      if (current.left === null) {
        current.left = node;
        return root;
      } else {
        current = current.left;
      }
    } else if (current.val < val) {
      if (current.right === null) {
        current.right = node;
        return root;
      } else {
        current = current.right;
      }
    }
  }
};
