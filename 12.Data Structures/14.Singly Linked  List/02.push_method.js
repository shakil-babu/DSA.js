// create node
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

  // push data
  push(element) {
    var newNode = new Node(element);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

// create list
let list = new SinglyLinkedList();
list.push("Hey");
list.push("Coders");
console.log(list);
