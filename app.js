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

// JavaScript bitwise operators
/*

& - and -> if 1 & 1 = 1 otherwise 0;
| - or -> if 1 is in it then 1 otherwise 0 ;
~ - not -> 1 to 0, 0 to 1 ;
>> - right shift -> 10 >> 2 = 10 / (2*2)
<< - left shift -> 10 << 2 = 10 * (2*2);
^ - xor -> when two bits are different then 1 other wise 0;
>>> - zero-fill right shift -> it's divide by n/2 for input times;


*/

var xorOperation = function (n, start) {
  let arr = [];
  let ans = 0;
  for (let i = 0; i < n; i++) {
    let temp = start + 2 * i;
    arr.push(temp);
    ans = ans ^ arr[i];
  }

  return ans;
};

let ans = xorOperation(5, 0);
console.log(ans);
