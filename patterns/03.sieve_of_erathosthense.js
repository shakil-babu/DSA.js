const sieve = (n) => {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(true);
  }

  // remove multiple of primes
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }

  return arr;
};

var countPrimes = function (n) {
  const arr = sieve(n);
  let ans = [];
  for (let i = 2; i < n; i++) {
    if (arr[i]) {
      ans.push(i);
    }
  }
  return ans.length;
};

let ans = countPrimes(10);
console.log(ans);
