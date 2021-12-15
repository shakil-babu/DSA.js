function capitalizeWords(arr) {
  if (arr.length == 0) return [];
  let ans = [];
  ans = ans.concat(arr[0].toUpperCase());
  return ans.concat(capitalizeWords(arr.slice(1)));
}

let words = ["i", "am", "learning", "recursion"];
let ans = capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
console.log(ans);
