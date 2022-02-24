function insertionSort(arr) {
  var currentVal;
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

let ans = insertionSort([2, 1, 9, 76, 4]);
console.log(ans);

/*
function insertionSort(arr) {
  // একটি currentVal নামে ভেরিয়েবল নিই
  var currentVal;

  // i এর মান 1 থেকে len(arr) এর আগ পর্যন্ত 1 করে বাড়াই
  for (var i = 1; i < arr.length; i++) {
    // arr[i] কে currentValue তে এসাইন করি
    currentVal = arr[i];

    // currentValue এর জন্য উপযুক্ত স্থান খুঁজে বের করি (j = i - 1)
    // যদি j, 0 থেকে সমান বা বড় হয় এবং  arr[j] থেকে currentValue ছোট হয়
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      console.log([i, j]);
      // arr[j] কে তার পরের ঘরে রেখে দিই
      arr[j + 1] = arr[j];
    }

    // এখন খালি জায়গায় currentValue কে বসাই
    arr[j + 1] = currentVal;
  }
  return arr;
}

let ans = insertionSort([2, 1, 9, 76, 4]);
console.log(ans);
*/
