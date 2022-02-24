// Optimized bubble sort

const optimizedBubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};
let invock = optimizedBubbleSort([400, 200, 100, 300]);
console.log(invock);

/*

32,1,3,34,5 = 32 - 1
1,32,3,34,5 = 32 - 3
1,3,32,34,5 = 32 - 34
1,3,32,34,5 = 34 - 5
1,3,32,5,34 = 34 - undefined

// from the begin
1,3,32,5,34 = 1 - 3
1,3,32,5,34 = 3 - 32
1,3,32,5,34 = 32 - 5
1,3,5,32,34 = 32 - 34
1,3,5,32,34 = 34 - undefined

// from the begin
1,3,5,32,34 = 1 - 3
1,3,5,32,34 = 3 - 5
1,3,5,32,34 = 5 - 32
1,3,5,32,34 = 32 - 34
1,3,5,32,34 = 34 - undefined

// sorted array
[ 1, 3, 5, 32, 34 ]


*/
