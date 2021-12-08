// check prime number
const isPrime = (n) => {
  if (n <= 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i < Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
};

let ans = isPrime(5);
console.log(ans);
