function insert(index, val) {
  if (index < 0 || index > this.length) return false;
  if (index === this.length) return !!this.push(val);
  if (index === 0) return !!this.unshift(val);

  var newNode = new Node(val);
  var prev = this.get(index - 1);
  var temp = prev.next;
  prev.next = newNode;
  newNode.next = temp;
  this.length++;
  return true;
}
