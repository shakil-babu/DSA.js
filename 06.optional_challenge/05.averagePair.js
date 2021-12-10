// using two pointer
function averagePair(arr, avg) {
  if (arr.length === 0) return false;
  let l = 0;
  let r = arr.length - 1;
  while (l < r) {
    let avgNum = arr[l] + arr[r] / 2;
    if (avgNum === avg) return true;
    if (avgNum > avg) r--;
    else {
      l++;
    }
  }

  return false;
}

let ans = averagePair([1, 2, 3], 2.5);
console.log(ans);
