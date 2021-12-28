class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // push method
  push(val) {
    let node = new Node(val, this.head);
    this.head = node;
    this.length++;
    return this;
  }

  // getLast method
  getLast() {
    if (!this.head) return null;
    let current = this.head;
    while (current) {
      if (!current.next) {
        return current;
      }
      current = current.next;
    }
  }

  // getFirst method
  getFirst() {
    if (!this.head) return null;
    return this.head;
  }

  // find method
  find(val) {
    if (!this.head) return null;
    let current = this.head;
    while (current) {
      if (current.val === val) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  // insert method
  insert(newVal, item) {
    let node = new Node(newVal);
    let current = this.find(item);
    node.next = current.next;
    current.next = node;
  }
}

let ll = new SinglyLinkedList();
ll.push(100);
ll.push("First");
ll.push("Second");
ll.push("Third");

ll.insert("First", "9000");
console.log(ll);
