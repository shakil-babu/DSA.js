function insert(index, val) {
  if (index < 0 || index > this.length) return false;
  if (index === 0) return !!this.unshift(val);
  if (index === this.length) return !!this.push(val);

  var newNode = new Node(val);
  var beforeNode = this.get(index - 1);
  var afterNode = beforeNode.next;

  (beforeNode.next = newNode), (newNode.prev = beforeNode);
  (newNode.next = afterNode), (afterNode.prev = newNode);
  this.length++;
  return true;
}
