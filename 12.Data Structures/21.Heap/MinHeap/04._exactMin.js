// _exactMin
function _exactMin() {
  let min = this.values[0];
  this.values[0] = this.values.pop();
  this._minHepify();
  return min;
}
