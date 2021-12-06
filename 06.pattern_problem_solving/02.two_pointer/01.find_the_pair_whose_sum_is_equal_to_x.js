/*
  find the pair whose sum is equal to x 

  test case:
  input : arr = [1, 2, 3, 93, 6], target = 5
  output : [1,2]

  explanation : [1, 2, 3, 93, 6] in this array, (2+3) = 5 which matched with target value = 5. in that case,
  2 position/index is 1 and 3 position/index is 2;
  so the output is : [1,2];
*/

let sum = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let sum = arr[left] + arr[right];
    if (sum === target) {
      return [left, right];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
};

let ans = sum([1, 2, 3, 93, 6], 5);
console.log(ans);
