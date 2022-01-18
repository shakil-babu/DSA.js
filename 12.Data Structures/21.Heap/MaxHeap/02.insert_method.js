// insert method
function insert(element) {
  this.values.push(element);
  this.bubbleUp();
}

// bubbleUp
function bubbleUp() {
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
