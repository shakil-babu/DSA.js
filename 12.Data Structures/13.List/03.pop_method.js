// pop method
function pop() {
  if (this.length === 0) return undefined;
  // let popItem = this.data.splice(this.length - 1, 1).join("");
  // this.length--;
  // return popItem;

  // using another way
  let popItem = this.data[this.length - 1];
  this.data.length = this.data.length - 1;
  this.length--;
  return popItem;
}
