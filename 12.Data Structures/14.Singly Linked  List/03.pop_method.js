// Node
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// singlyLinedList
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // push method
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  // pop method
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return current;
  }
}

// create list
let list = new SinglyLinkedList();
list.push("Whats");
list.push("up?");
list.push("Coders");

// pop a node
let lastNode = list.pop();
console.log(lastNode);
// Node { val: 'Coders', next: null }
