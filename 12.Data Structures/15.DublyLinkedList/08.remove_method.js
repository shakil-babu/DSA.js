function remove(index) {
  if (index < 0 || index >= this.length) return undefined;
  if (index === 0) return this.shift();
  if (index === this.length - 1) return this.pop();

  var removedNode = this.get(index);
  let beforeNode = removedNode.prev;
  let afterNode = removedNode.next;
  beforeNode.next = afterNode;
  afterNode.prev = beforeNode;

  removedNode.next = null;
  removedNode.prev = null;
  this.length--;
  return removedNode;
}
