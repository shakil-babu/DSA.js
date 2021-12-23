// insert method
function insert(item, current) {
  let insertPosition = this.find(current);
  if (insertPosition > -1) {
    this.data.splice(insertPosition + 1, 0, item);
    this.length++;
    return true;
  }
  return false;
}
