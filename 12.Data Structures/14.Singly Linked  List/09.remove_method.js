function remove(index) {
  if (index < 0 || index >= this.length) return undefined;
  if (index === 0) return this.shift();
  if (index === this.length - 1) return this.pop();
  var previousNode = this.get(index - 1);
  var removed = previousNode.next;
  previousNode.next = removed.next;
  this.length--;
  return removed;
}
