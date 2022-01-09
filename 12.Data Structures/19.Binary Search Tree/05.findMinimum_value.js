// findMinimum value
function findMinimum() {
  if (this.root === null) return undefined;
  let current = this.root;
  let prev = current;
  while (current) {
    prev = current;
    current = current.left;
  }
  return prev.val;
}
