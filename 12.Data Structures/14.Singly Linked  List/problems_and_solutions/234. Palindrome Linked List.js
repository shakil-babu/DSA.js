/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

var isPalindrome = function (head) {
  if (!head) return false;
  let current = head;
  let arr = [];
  while (current) {
    arr.push(current.val);
    current = current.next;
  }

  let str = arr.join("");
  if (str === arr.reverse().join("")) {
    return true;
  } else {
    return false;
  }
};
