// insert method
function insert(val) {
  let node = new Node(val);
  if (this.root === null) {
    this.root = node;
  } else {
    let current = this.root;
    while (true) {
      if (val === current.val) return undefined;
      if (current.val < val) {
        if (current.right === null) {
          current.right = node;
          return this;
        } else {
          current = current.right;
        }
      } else if (current.val > val) {
        if (current.left === null) {
          current.left = node;
          return this;
        } else {
          current = current.left;
        }
      }
    }
  }
}
