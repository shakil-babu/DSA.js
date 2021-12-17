// Optimized bubble sort

const optimizedBubbleSort = (arr) => {
  let swapped;
  for (let i = 0; i < arr.length; i++) {
    swapped = false;
    for (let j = 0; j < arr.length; j++) {
      console.log(`${arr} = ${arr[j]} - ${arr[j + 1]}`);

      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
};
let invock = optimizedBubbleSort([32, 1, 3, 34, 5]);
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
