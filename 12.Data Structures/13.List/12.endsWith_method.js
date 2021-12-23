// endsWith method
function endsWith(item) {
  if (this.length === 0) return false;
  else if (this.data[this.length - 1] === item) return true;
  else return false;
}
