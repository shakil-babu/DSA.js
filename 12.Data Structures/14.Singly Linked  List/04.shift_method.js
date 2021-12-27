// shift method
function shift() {
  if (!this.head) return undefined;
  let current = this.head;
  this.head = current.next;
  this.length--;
  if (this.length === 0) {
    this.tail = null;
  }
  return current;
}
