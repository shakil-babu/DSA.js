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
}

/*




*/

// initialize
let maxHeap = new MaxHeap();
maxHeap.insert(29);
maxHeap.insert(200);
maxHeap.insert(199);
maxHeap.insert(201);
console.log(maxHeap);
