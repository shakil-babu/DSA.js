class MaxHeap {
  constructor() {
    this.values = [];
  }

  // insert method
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  // bubbleUp
  bubbleUp() {
    let index = this.values.length - 1;
    let element = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parentElement = this.values[parentIndex];
      if (element <= parentElement) break;
      this.values[parentIndex] = element;
      this.values[index] = parentElement;
      index = parentIndex;
    }
  }

  // Hepify
  _maxHepify(index = 0) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let largest = index;

    let len = this.values.length;
    if (len > left && this.values[largest] < this.values(left)) {
      largest = left;
    }

    if (len > right && this.values[largest] < this.values(right)) {
      largest = right;
    }

    // If smallest is not root
    if (largest !== i) {
      [this.values[i], this.values[largest]] = [
        this.values[largest],
        this.values[i],
      ];

      // Recursively heapify the affected sub-tree
      this._maxHepify(largest);
    }
  }
}
