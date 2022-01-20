function insert(element) {
  this.values.push(element);
  this.bubbleUp();
}

// bubbleUp function
function bubbleUp() {
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
