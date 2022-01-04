// Practice singly linked list
class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class SinglyLinkedList {
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
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
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

    if (this.length === 0) {
      this.tail = null;
      this.head = null;
    }
    this.length--;
    return current;
  }

  // unshfit method
  unshift(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      let cur = this.head;
      node.next = cur;
      this.head = node;
    }
    this.length++;
    return this;
  }

  // shift method
  shift() {
    if (!this.head) return undefined;
    let removedNode = this.head;
    this.head = removedNode.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return removedNode;
  }

  // get
  get(index) {
    if (!this.head) return -1;
    let count = 0,
      cur = this.head;
    while (cur) {
      if (count === index) {
        return cur;
      }
      cur = cur.next;
      count++;
    }
    return -1;
  }

  // set
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode !== -1) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  // insert
  insert(index, val) {}

  // remove method
  remove(index) {}
}

// call
let ll = new SinglyLinkedList();
ll.push(10);
ll.push(20);
ll.push(30);

// pop
// console.log(ll.pop());
// console.log(ll.pop());

// unshift
// console.log(ll.unshift(0));

// shift
// console.log(ll.shift());
// console.log(ll.shift());
// console.log(ll.shift());

// get method
console.log(ll.set(0, "First"));

// log
console.log(ll);
