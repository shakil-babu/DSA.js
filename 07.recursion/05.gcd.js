const gcd = (a, b) => {
  // terminating case
  if (a % b === 0) return b;
  // recursive case
  return gcd(b, a % b);
};
console.log(gcd(468, 30));
