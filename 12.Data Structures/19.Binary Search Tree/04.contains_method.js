// contains method
function contains(val) {
  if (this.root === null) return true;
  let current = this.root,
    found = false;
  while (current && !found) {
    if (current.val > val) {
      current = current.left;
    } else if (current.val < val) {
      current = current.right;
    } else {
      return true;
    }
  }

  return false;
}
