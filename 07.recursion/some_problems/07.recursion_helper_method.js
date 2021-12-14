const findOddNumbers = (arr) => {
  const result = [];
  const helper = (input) => {
    if (input.length === 0) return;
    if (input[0] % 2 === 1) {
      result.push(input[0]);
    }

    helper(input.slice(1));
  };
  helper(arr);

  return result;
};

let ans = findOddNumbers([1, 2, 3, 4, 5]);
console.log(ans);
