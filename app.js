// Node
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// BinarySearchTree
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  //insert method
  insert(val) {
    let node = new Node(val);
    if (this.root === null) {
      this.root = node;
    }

    let current = this.root;
    while (true) {
      if (current.value === val) return undefined;
      if (current.value > val) {
        if (current.left === null) {
          current.left = node;
          return this;
        } else {
          current = current.left;
        }
      } else if (current.value < val) {
        if (current.right === null) {
          current.right = node;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  // find method
  find(val) {
    if (this.root === null) return undefined;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (current.value > val) {
        current = current.left;
      } else if (current.value < val) {
        current = current.right;
      } else {
        found = true;
      }
    }

    if (!found) return undefined;
    return current;
  }

  // contains method
  contains(val) {
    if (this.root === null) return undefined;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (current.value < val) {
        current = current.left;
      } else if (current.value > val) {
        current = current.right;
      } else {
        return true;
      }
    }

    return false;
  }

  // findMinimum
  findMinimum() {
    if (this.root === null) return undefined;
    let current = this.root;
    let prev = current;
    while (current) {
      prev = current;
      current = current.left;
    }
    return prev.value;
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
    return prev.value;
  }

  // BFS
  BFS() {
    let queue = [this.root];
    let data = [];
    while (queue.length) {
      let cur = queue.shift();
      data.push(cur.value);
      if (cur.left !== null) queue.push(cur.left);
      if (cur.right !== null) queue.push(cur.right);
    }

    return data;
  }

  // searchBST
  getMinimumDifference(root) {
    let arr = this.BFS(this).sort((a, b) => a - b);
    return arr;
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
tree.insert(10);
tree.insert(8);
tree.insert(15);
tree.insert(5);
tree.insert(9);
tree.insert(13);
tree.insert(20);

// find
console.log(tree.find(13));
// log
console.log(tree.getMinimumDifference());
console.log(tree);
