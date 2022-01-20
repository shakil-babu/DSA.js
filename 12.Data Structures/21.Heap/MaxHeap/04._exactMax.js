// exactMax
function _exactMax() {
  let max = this.values[0];
  let lastItem = this.values.pop();
  this.values[0] = lastItem;
  this._maxHepify();
  return max;
}
