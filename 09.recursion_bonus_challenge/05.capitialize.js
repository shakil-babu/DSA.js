function capitalizeFirst(arr) {
  if (arr.length === 0) return [];
  let ans = [];
  ans = ans.concat([arr[0][0].toUpperCase(), ...arr[0].slice(1)].join(""));
  return ans.concat(capitalizeFirst(arr.slice(1)));
}

let ans = capitalizeFirst(["shakil", "babu", "rahim"]);
console.log(ans);
