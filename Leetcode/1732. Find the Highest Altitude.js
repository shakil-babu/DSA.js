var largestAltitude = function (gain) {
  let arr = [];
  for (let i = 0; i < gain.length; i++) {
    arr[i] = 0;
    for (let j = 0; j < i + 1; j++) {
      arr[i] += gain[j];
    }
  }

  let sr = arr.sort((a, b) => b - a);
  if (sr[0] <= 0) return 0;
  return sr[0];
};
