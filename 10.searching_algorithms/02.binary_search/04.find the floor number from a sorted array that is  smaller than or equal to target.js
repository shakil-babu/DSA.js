// Q : find the floor number from a sorted array that is  smaller than or equal to target
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

  return arr[right] || -1;
};

let ans = ceilingNumber([2, 3, 4, 2, 5], 100);
console.log(ans);

// test cases
/*
    arr = [1, 2, 3, 4, 5, 6, 8] , target = 7
    -> 6
  
    arr = [10,20,30,40,50], target = 50
    -> 50
  
    arr = [1,2,3,4,7,8], target = 5
    -> 4
  
    arr = [2,3,4,2,5], target = 100
    -> 5
  
  
  
  */
// [2,3,3,5,6,7,32]
