var minimumAbsDifference = function (arr) {
  let minDiff = Infinity;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i++) {
    let dif = arr[i + 1] - arr[i];
    minDiff = Math.min(minDiff, dif);
  }

  let ans = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let dif = arr[i + 1] - arr[i];
    if (dif === minDiff) {
      ans.push([arr[i], arr[i + 1]]);
    }
  }

  return ans;
};
