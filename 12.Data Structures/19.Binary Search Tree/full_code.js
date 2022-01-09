// BST practice
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Binary search tree
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // insert node
  insert(val) {
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

  // find method
  find(val) {
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

  // contains method
  contains(val) {
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

  // findMinimum val
  findMinimum() {
    if (this.root === null) return undefined;
    let current = this.root;
    let prev = current;
    while (current) {
      prev = current;
      current = current.left;
    }
    return prev.val;
  }

  // findMaximum
  findMaximum() {
    if (this.root === null) return undefined;
    let current = this.root;
    let prev = current;
    while (current) {
      prev = current;
      current = current.right;
    }

    return prev.val;
  }
}

/*
                       10
                      /  \
                     8    15
                    / \   / \
                   5   9 13  20
  
  
  */

let tree = new BinarySearchTree();
// tree.insert(10);
// tree.insert(8);
// tree.insert(15);
// tree.insert(5);
// tree.insert(9);
// tree.insert(13);
// tree.insert(20);

// find
console.log(tree.find(10));
// log
console.log(tree.findMinimum());
console.log(tree.findMaximum());
console.log(tree);
