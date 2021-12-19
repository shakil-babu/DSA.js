// Problem : Count of an element in sorted array
// using binary search

const occarence = (arr, type, target) => {
  let ans,
    l = 0,
    r = arr.length - 1,
    mid;
  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (arr[mid] === target) {
      ans = mid;
      if (type === "first") {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else if (arr[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return ans;
};

let countElement = (arr, target) => {
  let firstOccarence = occarence(arr, "first", 3);
  let seccondOccarence = occarence(arr, "last", 3);

  let count = seccondOccarence - firstOccarence + 1;
  return count;
};

let ans = countElement([1, 2, 3, 3, 4, 4, 4, 4, 5, 6, 7]);
console.log(ans);
