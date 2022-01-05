// pop method
function pop() {
  if (!this.head) return undefined;
  let popedNode = this.tail;
  if (this.length === 1) {
    this.tail = null;
    this.head = null;
  } else {
    this.tail = popedNode.prev;
    this.tail.next = null;
    popedNode.prev = null;
  }
  this.length--;
  return popedNode;
}
