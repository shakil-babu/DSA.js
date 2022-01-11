// Node
class Node {
  constructor(val) {
    this.val = val;
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
      if (current.val === val) return undefined;
      if (current.val > val) {
        if (current.left === null) {
          current.left = node;
          return this;
        } else {
          current = current.left;
        }
      } else if (current.val < val) {
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
      if (current.val > val) {
        current = current.left;
      } else if (current.val < val) {
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
      if (current.val < val) {
        current = current.left;
      } else if (current.val > val) {
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

  // BFS
  BFS() {
    let queue = [this.root];
    let data = [];
    while (queue.length) {
      let cur = queue.shift();
      data.push(cur.val);
      if (cur.left !== null) queue.push(cur.left);
      if (cur.right !== null) queue.push(cur.right);
    }

    return data;
  }

  maxLevelSum() {
    if (!this.root) return 0;
    let result = [];
    let queue = [this.root];
    let i = 1;
    while (queue.length) {
      let len = queue.length;
      let height = [];
      for (let i = 0; i < len; i++) {
        let cur = queue.shift();
        height.push(cur.val);
        if (cur.left) queue.push(cur.left);
        if (cur.right) queue.push(cur.right);
      }
      result.push({ arr: height, ans: i });
      i++;
    }

    let arr = [];
    for (let i = 0; i < result.length; i++) {
      let sum = result[i].arr.reduce((a, b) => a + b, 0);
      arr.push({ sum: sum, ans: result[i].ans });
    }
    return arr.sort((a, b) => b.sum - a.sum)[0].ans;
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
// console.log(tree.find(13));
// log
console.log(tree.maxLevelSum());
console.log(tree);
