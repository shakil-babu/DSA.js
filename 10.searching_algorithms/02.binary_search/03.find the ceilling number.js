// Q : find the ceiling number from a sorted array that is  greator than or equal to target
const ceilingNumber = (arr, target) => {
  let left = 0,
    right = arr.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return arr[mid];
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return arr[left] || -1;
};

let ans = ceilingNumber([1, 2, 3, 4, 7, 8], 5);
console.log(ans);

// test cases
/*
  arr = [1, 2, 3, 4, 5, 6, 8] , target = 7
  -> 8

  arr = [10,20,30,40,50], target = 50
  -> 50

  arr = [1,2,3,4,7,8], target = 5
  -> 7

  arr = [2,3,4,2,5], target = 100
  -> -1



*/
// [2,3,3,5,6,7,32]
