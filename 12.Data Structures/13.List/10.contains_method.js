// contains method
function contains(item) {
  if (this.length === 0) return false;
  for (let i = 0; i < this.length; i++) {
    if (this.data[i] === item) {
      return true;
    }
  }
  return false;
}
