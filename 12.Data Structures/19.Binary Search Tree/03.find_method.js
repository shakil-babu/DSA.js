// find method
function find(val) {
  if (this.root === null) return undefined;
  if (this.root.val === val) return this.root;
  let found = false;
  let current = this.root;
  while (current && !found) {
    if (current.val < val) {
      current = current.right;
    } else if (current.val > val) {
      current = current.left;
    } else {
      found = true;
    }
  }

  if (!found) return undefined;
  return current;
}
