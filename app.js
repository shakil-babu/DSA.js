// var findKthPositive = function (arr, k) {
//   let space = [];
//   for (let i = 1; i <= 2000; i++) {
//     space.push(i);
//   }

//   let ans = [];
//   space.forEach((item, index) => {
//     if (!arr.includes(item)) {
//       ans.push(item);
//     }
//   });
//   return ans[k - 1];
// };

/*
 Question : 162. Find Peak Element
 ======================
var findPeakElement = function(nums) {
  let left = 0, right = nums.length - 1;
  if(nums.length == 1) return 0;
  if(nums.length == 2 && nums[0] == 1){
      return 1;
  }
  let mid;
  while(left < right){
      mid = Math.floor((left + right)/2);
     if(nums[mid] < nums[mid + 1]){
          left = mid + 1;
      }else{
          right = mid;
      }
  }
  
  return left;
  
};
*/
// console.log(findKthPositive([1, 2, 3, 4], 2));

function capitalizeFirst() {}
