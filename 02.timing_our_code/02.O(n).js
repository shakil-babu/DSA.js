/*
write a function that calculates the sum of all numbers 
from 1 up to (and including) some number n.
*/

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

/*
  in above code :

          n additions

          n assignments

          n additions and n assignments

          1 assignment

          1 assignment

          n comparisons






Number of operations is (eventually) bounded by a multiple of n (say, 10n)
time complexity -> O(n)




*/

/*
    
    TIme complexity = O(n);
    space complexity = O(1);
    
    */
