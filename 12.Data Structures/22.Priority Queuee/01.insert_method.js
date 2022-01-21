// insert method
function insert(element, priority) {
  let node = new Node(element, priority);
  let isAdded = false;
  for (let i = 0; i < this.items.length; i++) {
    if (node.priority > this.items[i].priority) {
      this.items.splice(i, 0, node);

      // mark the the flag true
      isAdded = true;
      break;
    }
  }

  if (!isAdded) {
    this.items.push(node);
  }
}
