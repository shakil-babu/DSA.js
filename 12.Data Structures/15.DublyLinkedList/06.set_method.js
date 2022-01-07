function set(index, val) {
  var foundNode = this.get(index);
  if (foundNode != null) {
    foundNode.val = val;
    return true;
  }
  return false;
}
