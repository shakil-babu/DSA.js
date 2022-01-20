class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  // insert method
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  // bubbleUp function
  bubbleUp() {
    let idx = this.values.length - 1;
    let element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parentElement = this.values[parentIdx];
      if (parentElement >= element) break;
      this.values[idx] = parentElement;
      this.values[parentIdx] = element;
      idx = parentIdx;
    }
  }

  // _maxHepify
  _maxHepify(index = 0) {
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

  // exactMax
  _exactMax() {
    let max = this.values[0];
    let lastItem = this.values.pop();
    this.values[0] = lastItem;
    this._maxHepify();
    return max;
  }

  // size
  _size() {
    return this.values.length;
  }

  // isEmty method
  _isEmty() {
    return this.values.length === 0;
  }

  // findMax
  _findMax() {
    return this.values[0];
  }
}

// initialize
let maxHeap = new MaxBinaryHeap();

maxHeap.insert(10);
maxHeap.insert(30);
maxHeap.insert(100);
maxHeap.insert(500);
console.log(maxHeap._exactMax());
console.log(maxHeap);
