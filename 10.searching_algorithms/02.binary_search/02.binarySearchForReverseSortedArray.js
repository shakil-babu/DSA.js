// binary search for reverse sorted array
const binarySearchForReverseSortedArray = (arr, target) => {
  if (arr.length === 0) return -1;
  let left = 0,
    right = arr.length - 1,
    mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
};

let ans = binarySearchForReverseSortedArray([10, 9, 8, 6, 5, 4, 3, 2, 1], 8);
console.log(ans);
