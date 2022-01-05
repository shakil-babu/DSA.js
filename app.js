// class Node {
//   constructor(val, next = null, prev = null) {
//     this.val = val;
//     this.next = next;
//     this.prev = prev;
//   }
// }

// class DublyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   // push method
//   push(val) {
//     let node = new Node(val);
//     if (!this.head) {
//       this.head = node;
//       this.tail = this.head;
//     } else {
//       this.tail.next = node;
//       node.prev = this.tail;
//       this.tail = node;
//     }
//     this.length++;
//     return this;
//   }

//   // pop method
//   pop() {
//     if (!this.head) return undefined;
//     let popedNode = this.tail;
//     if (this.length === 1) {
//       this.tail = null;
//       this.head = null;
//     } else {
//       this.tail = popedNode.prev;
//       this.tail.next = null;
//       popedNode.prev = null;
//     }
//     this.length--;
//     return popedNode;
//   }

//   // unshift
//   unshift(val) {
//     let node = new Node(val);
//     if (!this.head) {
//       this.head = node;
//       this.tail = this.head;
//     } else {
//       this.head.prev = node;
//       node.next = this.head;
//       this.head = node;
//     }
//     this.length++;
//     return this;
//   }
//   // shift method
//   shift() {
//     if (!this.head) return undefined;
//     let shiftedNode = this.head;
//     if (this.length === 1) {
//       this.head = null;
//       this.tail = null;
//     } else {
//       this.head = shiftedNode.next;
//       this.head.prev = null;
//       shiftedNode.next = null;
//       // shiftedNode.prev = null;
//     }
//     this.length--;
//     return shiftedNode;
//   }

//   // get method
//   get(index) {
//     if (index < 0 || this.length < index) return null;
//   }
// }

// // calling list
// let ll = new DublyLinkedList();

// // push
// ll.push(100);
// ll.unshift("one");
// ll.unshift("First");

// console.log(ll.shift());
// // log
// console.log(ll);
// =================================================================

// let cmap = (arr) => {
//   let obj = {};
//   for (let item of arr) {
//     obj[item] ? obj[item]++ : (obj[item] = 1);
//   }
//   return obj;
// };
// var checkAlmostEquivalent = function (word1, word2) {
//   let a = cmap(word1);
//   let b = cmap(word2);

//   let res = [];
//   for (let key in a) {
//     for (let k in b) {
//       if (key === k) {
//         res.push(Math.abs(a[key] - b[k]));
//       }
//     }
//   }

//   if (res.length === 0) return false;
//   return !!res.filter((item) => item >= 3);
// };

// ans
// let ans = checkAlmostEquivalent("cccddabba", "babababab");
// console.log(ans);

var minimumDeletions = function (nums) {
  if (nums.length === 1) return 1;
  let max = Math.max(...nums),
    min = Math.min(...nums);
  let count = 0;

  let minDiff = [],
    maxDiff = [];
  // find min and max from left
  for (let i = 0; i < nums.length; i++) {
    count++;
    if (min === nums[i]) {
      minDiff.push(count);
    }
    if (max === nums[i]) {
      maxDiff.push(count);
    }
  }

  // find min-max from right
  let c = 0;
  for (let i = nums.length; i > 0; i--) {
    c++;
    if (min === nums[i]) {
      minDiff.push(c);
    }
    if (max === nums[i]) {
      maxDiff.push(c);
    }
  }

  let m = Math.min(...minDiff);
  let mm = Math.min(...maxDiff);

  return m + mm;
};

let ans = minimumDeletions([0, -4, 19, 1, 8, -2, -3, 5]);
console.log(ans);
