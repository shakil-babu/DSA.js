// Node structure
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// SinglyLinkedList
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

// create list
let list = new SinglyLinkedList();
console.log(list);
