// class Node {
//   constructor(val, next = null) {
//     this.val = val;
//     this.next = next;
//   }
// }

// class SinglyLinkedList {
//   constructor() {
//     this.head = null;
//     this.length = 0;
//   }

//   // push method
//   push(val) {
//     let node = new Node(val, this.head);
//     this.head = node;
//     this.length++;
//     return this;
//   }

//   // getLast method
//   getLast() {
//     if (!this.head) return null;
//     let current = this.head;
//     while (current) {
//       if (!current.next) {
//         return current;
//       }
//       current = current.next;
//     }
//   }

//   // getFirst method
//   getFirst() {
//     if (!this.head) return null;
//     return this.head;
//   }

//   // find method
//   find(val) {
//     if (!this.head) return null;
//     let current = this.head;
//     while (current) {
//       if (current.val === val) {
//         return current;
//       }
//       current = current.next;
//     }
//     return null;
//   }

//   // insert method
//   insert(newVal, item) {
//     let node = new Node(newVal);
//     let current = this.find(item);
//     node.next = current.next;
//     current.next = node;
//   }

// }

// let ll = new SinglyLinkedList();
// ll.push(1);
// ll.push(2);
// ll.push(100);

// console.log(ll);
// console.log(ll.getLast());

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

  // push method - add in last
  push(val) {
    let current = this.head;
    if (current) {
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(val);
    } else {
      this.head = new Node(val);
    }
    this.length++;
    return this;
  }

  // pop method : delete node from last
  pop() {
    let currentNode = this.head;
    let nextNode = currentNode.next;
    while (nextNode.next) {
      currentNode = nextNode;
      nextNode = currentNode.next;
    }
    let deleteNode = nextNode;
    currentNode.next = null;
    this.length--;
    return deleteNode;
  }

  // unshift method - add in first
  unshift(val) {
    let node = new Node(val, this.head);
    this.head = node;
    this.length++;
    return this;
  }

  // shift method - delete first node;
  shift() {
    let deleteNode = this.head;
    let nextNode = deleteNode.next;
    this.head = nextNode;
    this.length--;
    return deleteNode;
  }

  // get method : get node using index
  get(index) {
    let currentNode = this.head;
    let count = 0;
    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  // reverse method : reverse linked list
  reverse() {
    let current = this.head;
    let prev = null,
      next = null;
    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    return prev;
  }

  deleteMiddle() {
    let len = 0;
    let cur = this.head;
    while (cur) {
      len++;
      cur = cur.next;
    }

    let mid = Math.floor(len / 2);
    let cn = this.head;
    let count = 0;
    while (cn) {
      if (count === mid) {
        cn.next = cn.next.next;
        this.length--;
      }
      count++;
      cn = cn.next;
    }
    return this;
  }

  // delete from end
  removeNthFromEnd(n) {
    let len = 0;
    let current = this.head;
    while (current.next) {
      len++;
      current = current.next;
    }

    return len;
  }
}

// singlyLinkedList
let ll = new SinglyLinkedList();
ll.push(1);

console.log(ll.removeNthFromEnd(1));

console.log(ll);
