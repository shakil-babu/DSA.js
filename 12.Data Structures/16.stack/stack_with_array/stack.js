class Stack {
  constructor() {
    this.stack = [];
  }

  // push item to stack
  push(item) {
    this.stack.push(item);
  }

  // remove last item
  pop() {
    if (this.stack.length) {
      return this.stack.pop();
    } else {
      return "(pop failed), No item in stack!";
    }
  }

  // get stack length
  size() {
    return this.stack.length;
  }

  // check if stack is empty
  isEmpty() {
    return this.stack.length === 0;
  }
}
