// unshift method
function unshift(item) {
  let added = this.data.splice(0, 0, item);
  this.length++;
  return added;
}
