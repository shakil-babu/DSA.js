/*

The merge sort is one of the more advanced sorting algorithms that’s quite efficient
 in sorting large amounts of data. The algorithm uses the recursive function concept with divide and conquer 
 strategy to efficiently sort a given list of elements.

To understand the concept of merge sort easily, let’s start with a small example array as follows:

               [5, 2, 4, 3, 1]

First, split the array into two halves until there is only one element in each array:

              [5, 2, 4, 3, 1]
            [5, 2, 4]  |   [3, 1]
        [5, 2]    [4]  |   [3]   [1]
      [5]   [2]   [4]  |   [3]   [1]

Once done, start the second phase by merging and sorting two closest arrays. The smaller element will be 
pushed first to the new empty array, effectively sorting the array one step at a time.

Here’s an illustration of the merging:

      [5]   [2]   [4]  |   [3]   [1]
         [2, 5]   [4]  |   [1, 3]
         [2, 4, 5]     |   [1, 3]
               [1, 2, 3, 4, 5]

Now that you know how the merge sort works, let’s see how you implement one using JavaScript.
Implementation of merge sort using JavaScript

To implement merge sort using JavaScript, you need to first create a function that merges two arrays. 
Obviously, this function will accept two arrays, and it needs to sort the two arrays correctly starting from 
the smallest element.

Let’s first create the function and sort the arrays as follows:

*/

// Merge function from earlier
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

// Recrusive Merge Sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

let ans = mergeSort([2, 3, 1, 5, 9, 0, 4]);
console.log(ans);
