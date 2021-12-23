// remove method
function remove(value) {
  let index = this.find(value);
  if (index > -1) {
    this.data.splice(index, 1);
    --this.length;
    return true;
  }
  return false;
}
