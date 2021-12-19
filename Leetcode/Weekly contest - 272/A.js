var firstPalindrome = function (words) {
  let ans = "";
  for (let i = 0; i < words.length; i++) {
    let a = words[i].split("").reverse().join("") === words[i];
    if (a) {
      ans = words[i];
      break;
    }
  }

  return ans;
};
