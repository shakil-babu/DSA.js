// unshift method
function unshift(val) {
  var newNode = new Node(val);
  if (!this.head) {
    this.head = newNode;
    this.tail = this.head;
  }
  newNode.next = this.head;
  this.head = newNode;
  this.length++;
  return this;
}
