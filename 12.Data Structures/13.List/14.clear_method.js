// clear method
function clear() {
  delete this.data;
  this.length = 0;
  this.data = [];
  return this;
}
