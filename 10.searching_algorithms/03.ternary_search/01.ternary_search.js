// ternary search implementation
const ternarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  let mid1, mid2;
  while (left <= right) {
    mid1 = Math.floor(left + (right - left) / 3);
    mid2 = Math.floor(right - (right - left) / 3);

    if (arr[mid1] === target) return mid1;
    else if (arr[mid2] === target) return mid2;
    else if (target < arr[mid1]) {
      right = mid1 - 1;
    } else if (target > arr[mid2]) {
      left = mid2 + 1;
    } else {
      left = mid1 + 1;
      right = mid2 - 1;
    }
  }
  return -1;
};
console.log(ternarySearch([10, 15, 20, 30, 49, 100, 200, 300, 500], 15));
//                          l          mid1         mid2       r
