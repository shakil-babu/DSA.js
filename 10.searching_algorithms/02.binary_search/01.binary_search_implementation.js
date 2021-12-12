// binary search implementation
const binarySearch = (arr, target) => {
  if (arr.length === 0) return -1;
  let l = 0,
    mid;
  let r = arr.length - 1;
  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return -1;
};

let ans = binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 5);
console.log(ans);

// Array would be sorted for binary search
/*
time complexity : O(log n)
space complexity : O(1)
*/
