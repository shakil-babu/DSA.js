/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */

let traverse = (node, arr = []) => {
  arr.push(node.val);
  if (node.children) {
    for (let i = 0; i < node.children.length; i++) {
      traverse(node.children[i], arr);
    }
  }

  return arr;
};
var preorder = function (root) {
  if (!root) return [];
  return traverse(root);
};
