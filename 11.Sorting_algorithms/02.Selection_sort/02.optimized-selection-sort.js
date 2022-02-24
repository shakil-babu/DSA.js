// oprimized selection sort
const optimizedSelectionSort = (arr) => {
  let lowest;
  for (let i = 0; i < arr.length; i++) {
    lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }

    if (lowest !== i) {
      [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
    }
  }

  return arr;
};

let invock = optimizedSelectionSort([4, 2, 6, 54, 3]);
console.log(invock);

/*

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let largest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[largest] < arr[j]) {
        largest = j;
      }
    }

    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
    }
  }

  return arr;
};
*/
