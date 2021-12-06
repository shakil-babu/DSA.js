// window sliding algorithm
const maxSumOfn = (arr, n) => {
  let max = 0;
  let temp = 0;
  if (arr.length < n) return null;
  for (let i = 0; i < n; i++) {
    max += arr[i];
  }

  temp = max;

  for (let i = n; i < arr.length; i++) {
    temp = temp - arr[i - n] + arr[i];
    max = Math.max(max, temp);
    console.log(temp + "=" + max);
  }
  return max;
};

let ans = maxSumOfn([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
console.log(ans);

/*
       temp = max ;
       when i = n = 3;
       temp = 17 - arr[3-3] + arr[i]
       temp = 17 - 2 + 2
       temp = 15 + 2
       temp = 17
        max = 17
  
       when i = 4 
       temp = 17 - arr[4-3] + arr[4]
       temp = (17-6)+1
       temp = 12
       
       max = 17 or 12
       max = 17;
  
  
       when i = 5
       temp = 12 - arr[5-3] + arr[5]
       temp = (12-9) + 8
       temp = 11
       
       max = 17 or 11
       max = 17
  
       when i = 6 ;
       temp = 
  
   
  */
