// sum using loop : time complexity -> O(n)
const sum = (n) => {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans += i;
  }

  return ans;
};

// check runtime performance
let t1 = performance.now();
// function call
sum(1000000000);
let t2 = performance.now();
console.log(`Time : ${(t2 - t1) / 1000} seconds`);

// Time need more than 6 seconds to run

/* The problem with time
  1.Different machines will record diffrent times
  2.The same machine will record diffrent times!  
  */

// sum using law : time complexity -> O(1)
const sum2 = (n) => {
  return (n * (n + 1)) / 2;
};

let tt1 = performance.now();
// function call
sum2(1000000000);
let tt2 = performance.now();
console.log(`Time : ${(tt2 - tt1) / 1000} seconds`);

// Time need only o or 0.1-0.5 seconds to run
// so, this algorithm faster than looping system
