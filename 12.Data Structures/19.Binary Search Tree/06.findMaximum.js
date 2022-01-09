// findMaximum method
function findMaximum() {
  if (this.root === null) return undefined;
  let current = this.root;
  let prev = current;
  while (current) {
    prev = current;
    current = current.right;
  }

  return prev.val;
}
