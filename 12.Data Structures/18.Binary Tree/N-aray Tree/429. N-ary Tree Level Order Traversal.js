/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let queue = [root];
  let result = [];
  while (queue.length) {
    let len = queue.length;
    let height = [];
    for (let i = 0; i < len; i++) {
      let cur = queue.shift();
      height.push(cur.val);
      for (let j = 0; j < cur.children.length; j++) {
        queue.push(cur.children[j]);
      }
    }
    result.push(height);
  }

  return result;
};
