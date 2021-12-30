/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
  let len = 1;
  let cur = head;
  while (cur) {
    len++;
    cur = cur.next;
  }

  let mid = Math.ceil(len / 2);
  if (mid <= 1) {
    return (head.next = null);
  }
  let cn = head;
  let count = 1;
  while (cn) {
    if (count === mid - 1) {
      cn.next = cn.next.next;
    }
    count++;
    cn = cn.next;
  }
  return head;
};
