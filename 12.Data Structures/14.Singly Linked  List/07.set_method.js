// for set method we need get method for indexing
// set method
function set(index, val) {
  var foundNode = this.get(index);
  if (foundNode) {
    foundNode.val = val;
    return true;
  }
  return false;
}
