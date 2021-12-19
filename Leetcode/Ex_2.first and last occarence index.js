let Occarence = (arr, type, target) => {
  let ans,
    l = 0,
    r = arr.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] === target) {
      ans = mid;
      if (type === "first") {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else if (arr[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return ans;
};

let main = (arr, target) => {
  let fo = Occarence(arr, "first", target);
  let lo = Occarence(arr, "last", target);
  return [fo, lo];
};

let ans = main([1, 2, 3, 4, 4, 4, 5, 6], 4);
console.log(ans);
