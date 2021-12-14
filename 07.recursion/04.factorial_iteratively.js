const factorial = (n) => {
  let fact = 1;
  for (let i = n; i > 1; i--) {
    fact *= i;
  }
  return fact;
};

let ans = factorial(5);
console.log(ans);

// or

const fact = (n) => {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};
let res = fact(5);
console.log(res);
