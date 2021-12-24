var threeConsecutiveOdds = function (arr) {
  let count = 0;
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      count++;
      temp.push(count);
    } else {
      count = 0;
    }
  }

  return temp.sort((a, b) => b - a)[0] >= 3 ? true : false;
};
