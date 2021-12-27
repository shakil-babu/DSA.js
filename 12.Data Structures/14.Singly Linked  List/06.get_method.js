// get method
function get(index) {
  if (index < 0 || index >= this.length) return null;
  var counter = 0;
  var current = this.head;
  while (counter !== index) {
    current = current.next;
    counter++;
  }
  return current;
}
