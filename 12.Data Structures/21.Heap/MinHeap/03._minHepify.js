// min hepify method
function _minHepify(index = 0) {
  let left = 2 * index + 1;
  let right = 2 * index + 2;

  let smallest = index;
  let len = this.values.length;

  // if len is gretor than left and left value less than smallest/root value
  if (left < len && this.values[smallest] > this.values[left]) {
    smallest = left;
  }

  // if len is gretor than right and right value less than smallest/root value
  if (right < len && this.values[smallest] > this.values[right]) {
    smallest = right;
  }

  if (smallest != index) {
    let temp = this.values[index];
    this.values[index] = this.values[smallest];
    this.values[smallest] = temp;

    // recursively  called
    this._minHepify(smallest);
  }
}
