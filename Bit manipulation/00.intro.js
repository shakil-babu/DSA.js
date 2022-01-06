/*
https://www.geeksforgeeks.org/javascript-bitwise-operators/

*/

// JavaScript bitwise operators
/*

& - and -> if 1 & 1 = 1 otherwise 0;
| - or -> if 1 is in it then 1 otherwise 0 ;
~ - not -> 1 to 0, 0 to 1 ;
>> - right shift -> 10 >> 2 = 10 / (2*2)
<< - left shift -> 10 << 2 = 10 * (2*2);
^ - xor -> when two bits are different then 1 other wise 0;
>>> - zero-fill right shift -> it's divide by n/2 for input times;


*/

var subsetXORSum = function (nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      console.log(nums[i], nums[j]);
    }
  }
};

let ans = subsetXORSum([5, 1, 6]);
console.log(ans);
