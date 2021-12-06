/*
  visit this link
  https://cs.slides.com/colt_steele/big-o-notation#/28/0/5
*/

/*
write a function that calculates the sum of all numbers 
from 1 up to (and including) some number n.
*/

function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

/*

in above code - 
              1 multipication
              1 addition
              1 division

              3 simple operation, regardless of the size of n




Always 3 operations

O(1)


*/

/*
  
  TIme complexity = O(1);
  space complexity = O(1);
  
  */
