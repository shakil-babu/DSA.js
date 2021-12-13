// find gcd into two number a and b ;
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
