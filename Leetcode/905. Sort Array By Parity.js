var sortArrayByParity = function (nums) {
  nums.sort((a, b) => a - b);
  let even = [],
    odd = [];
  nums.forEach((item, index) => {
    if (item % 2 === 0) {
      even.push(item);
    } else {
      odd.push(item);
    }
  });

  return [...even, ...odd];
};
