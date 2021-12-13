// function recurSum(n) {
//   if (n <= 1) return n;
//   return n + recurSum(n - 1);
// }

// let ans = recurSum(4);
// console.log(ans);

// print 0 to n
// const printNtoZero = (n) => {
//   if (n < 0) return;
//   console.log(n);
//   printNtoZero(n - 1);
// };

// printNtoZero(10);

// const factorial = (n) => {
//   // terminating case
//   if (n < 0) return;

//   // base case
//   if (n === 0) return 1;

//   // recursive case
//   return n * factorial(n - 1);
// };
// console.log(factorial(5));

// const revStr = (str) => {
//   // terminating case
//   if (str === "") return "";

//   // recursive case
//   return revStr(str.substr(1)) + str[0];
// };

// console.log(revStr("shakil"));

// const gcd = (a, b) => {
//   // terminating case
//   if (a % b === 0) return b;
//   // recursive case
//   return gcd(b, a % b);
// };
// console.log(gcd(468, 30));

const gcd = (a, b) => {
  let gcd, t;
  if (a === 0) gcd = a;
  else if (b === 0) gcd = b;
  else {
    while (b != 0) {
      t = b;
      b = a % b;
      a = t;
    }
    gcd = a;
  }
  return gcd;
};
console.log(gcd(468, 30));
