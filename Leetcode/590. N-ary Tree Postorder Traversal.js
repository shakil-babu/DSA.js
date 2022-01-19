/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */

let traverse = (root, arr = []) => {
  if (root.children) {
    for (let i = 0; i < root.children.length; i++) {
      traverse(root.children[i], arr);
    }
  }
  arr.push(root.val);
  return arr;
};
var postorder = function (root) {
  if (!root) return [];
  return traverse(root);
};
