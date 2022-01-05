// unshift
function unshift(val) {
  let node = new Node(val);
  if (!this.head) {
    this.head = node;
    this.tail = this.head;
  } else {
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
  }
  this.length++;
  return this;
}
