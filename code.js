class MinHeap {
  constructor() {
    this.values = [];
  }

  // insert method
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  // bubbleup funciton
  bubbleUp() {
    let idx = this.values.length - 1;
    let element = this.values[idx];
    while (idx > 0) {
      let pidx = Math.floor((idx - 1) / 2);
      let parent = this.values[pidx];
      if (parent <= element) break;
      this.values[idx] = parent;
      this.values[pidx] = element;
      idx = pidx;
    }
  }

  // min hepify method
  _minHepify(index = 0) {
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

  // _exactMin
  _exactMin() {
    let min = this.values[0];
    this.values[0] = this.values.pop();
    this._minHepify();
    return min;
  }
}

// initialization
let minHeap = new MinHeap();

// insert
minHeap.insert(10);
minHeap.insert(100);
minHeap.insert(2);

// log minHeap
console.log(minHeap);
