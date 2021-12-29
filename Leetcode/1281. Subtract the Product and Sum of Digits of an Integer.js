/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  let str = n.toString();
  let sum = str.split("").reduce((a, b) => parseInt(a) + parseInt(b), 0);
  let mul = 1;
  for (let i = 0; i < str.length; i++) {
    mul *= parseInt(str[i]);
  }

  return mul - sum;
};
