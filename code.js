// Node
class Node {
  constructor(val) {
    this.left = null;
    this.val = val;
    this.right = null;
  }
}

// Binary Tree
class BinaryTree {
  constructor() {
    this.root = null;
  }

  // addLeft method
  addLeft(val) {
    let node = new Node(val);
    if (!this.root) {
      this.root = node;
    } else {
      let current = this.root;
      if (current.left === null) {
        current.left = node;
        return this;
      } else {
        current = current.left;
      }
    }
  }

  // addRight
  addRight(val) {
    let node = new Node(val);
    if (!this.root) {
      this.root = node;
    } else {
      let current = this.root;
      if (current.right === null) {
        current.right = node;
        return this;
      } else {
        current = current.right;
      }
    }
  }
}

/*
             10
           /    \
         30     39
        /  \      \
       19   28     100

*/

// Initialize binary tree
let bt = new BinaryTree();
bt.addLeft(10);
bt.addLeft(30);
bt.addRight(39);
bt.addLeft(19);
bt.addRight(28);
// log bt
console.log(bt);
