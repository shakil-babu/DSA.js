// push method
function push(val) {
  let node = new Node(val);
  if (!this.head) {
    this.head = node;
    this.tail = this.head;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
  this.length++;
  return this;
}
