// reverse method
function reverse() {
  if (this.length === 0) return undefined;
  let arr = [],
    index = 0;
  for (let i = this.length - 1; i >= 0; i--) {
    arr[index++] = this.data[i];
  }
  return arr;
}
