// using two pointer
// function isSubsequence(str1, str2) {
//   var i = 0;
//   var j = 0;
//   if (!str1) return true;
//   while (j < str2.length) {
//     if (str2[j] === str1[i]) i++;
//     if (i === str1.length) return true;
//     j++;
//   }
//   return false;
// }

// binary search
// const binarySearch = (arr, target) => {
//   if (arr.length === 0) return -1;
//   let left = 0;
//   let right = arr.length - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (arr[mid] === target) return mid;
//     if (arr[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return -1;
// };

// linear search
// const linearSearch = (arr, target) => {
//   let found = -1;
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] === target) {
//       found = i;
//     }
//   }
//   return found;
// };
// let ans = linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7);
// console.log(ans);
