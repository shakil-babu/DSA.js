// implement queue
class Queue {
  constructor() {
    this.queue = [];
  }

  // add item in first position
  enqueue(element) {
    this.queue.unshift(element);
  }

  // remove last item which is the first item
  dequeue() {
    if (this.queue.length) {
      return this.queue.pop();
    } else {
      return "(dequeue failed), No item in queue!";
    }
  }

  // length of queue
  size() {
    return this.queue.length;
  }

  // check if queue is empty
  isEmpty() {
    return this.queue.length === 0;
  }
}
