// insert method
function insert(element) {
  this.values.push(element);
  this.bubbleUp();
}
// bubbleup funciton
function bubbleUp() {
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
