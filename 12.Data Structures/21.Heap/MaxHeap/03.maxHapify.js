// _maxHepify
function _maxHepify(index = 0) {
  let left = 2 * index + 1;
  let right = 2 * index + 2;

  let largest = index;
  let len = this.values.length;

  // if len is greator than left and left value large than root
  if (left < len && this.values[largest] < this.values[left]) {
    largest = left;
  }

  // if len is greator than right and right value large than largest
  if (right < len && this.values[largest] < this.values[right]) {
    largest = right;
  }

  if (largest !== index) {
    let temp = this.values[index];
    this.values[index] = this.values[largest];
    this.values[largest] = temp;

    // recursively heapify affected sub-tree
    this._maxHepify(largest);
  }
}
