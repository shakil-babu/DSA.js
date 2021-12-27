class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class SinglyLinkedlist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // push method
  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    }

    this.tail.next = node;
    this.tail = node;
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
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }
}

// called
let ll = new SinglyLinkedlist();
ll.push("First");
ll.push("Second");
ll.push("Third");

console.log(ll.pop());
console.log(ll.pop());
console.log(ll.pop());
console.log(ll);
