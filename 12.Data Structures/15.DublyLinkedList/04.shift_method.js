// shift method
function shift() {
  if (!this.head) return undefined;
  let shiftedNode = this.head;
  if (this.length === 1) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = shiftedNode.next;
    this.head.prev = null;
    shiftedNode.next = null;
    // shiftedNode.prev = null;
  }
  this.length--;
  return shiftedNode;
}
