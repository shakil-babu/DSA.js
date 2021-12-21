var findEvenNumbers = function (digits) {
  let ans = [];
  for (let i = 0; i < digits.length; i++) {
    for (let j = 0; j < digits.length; j++) {
      for (let k = 0; k < digits.length; k++) {
        let sum;
        if (i !== j && j !== k && k !== i) {
          sum =
            digits[i].toString() + digits[j].toString() + digits[k].toString();
        }

        if (parseInt(sum) % 2 === 0 && sum[0] !== "0") {
          ans.push(parseInt(sum));
        }
      }
    }
  }

  return ans.sort((a, b) => a - b);
};

console.log(findEvenNumbers([2, 1, 3, 0]));
