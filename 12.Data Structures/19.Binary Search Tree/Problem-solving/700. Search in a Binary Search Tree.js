var searchBST = function (root, val) {
  let current = root;
  while (current) {
    if (current.val > val) {
      current = current.left;
    } else if (current.val < val) {
      current = current.right;
    } else {
      return current;
    }
  }

  return null;
};
