// find method
function find(item) {
  if (this.length === 0) return -1;
  for (let i = 0; i < this.length; i++) {
    if (this.data[i] === item) {
      return i;
    }
  }
  return -1;
}
