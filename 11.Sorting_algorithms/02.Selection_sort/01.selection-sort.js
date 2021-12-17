// selection sort implement
const selectionSort = (arr) => {
  let lowest;
  for (let i = 0; i < arr.length; i++) {
    lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
  }

  return arr;
};
let sorted = selectionSort([4, 2, 6, 54, 3]);
console.log(sorted);
