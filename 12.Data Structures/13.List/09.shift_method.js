// shift method
function shift() {
  if (this.length === 0) return 0;
  let shifted = this.data.splice(0, 1);
  --this.length;
  return shifted;
}
