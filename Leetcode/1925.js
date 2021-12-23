var countTriples = function (n) {
  if (n <= 1) return 0;
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  let res = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if (arr[i] * arr[i] + arr[j] * arr[j] === arr[k] * arr[k]) {
          res.push([arr[i], arr[j], arr[k]]);
        }
      }
    }
  }

  return res.length * 2;
};
