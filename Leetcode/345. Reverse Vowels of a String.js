const isVowel = (a) => {
  if (
    a === "a" ||
    a === "e" ||
    a === "o" ||
    a === "i" ||
    a === "u" ||
    a === "A" ||
    a === "E" ||
    a === "I" ||
    a === "O" ||
    a === "U"
  ) {
    return true;
  } else {
    return false;
  }
};
var reverseVowels = function (s) {
  const arr = s.split("");
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    if (!isVowel(arr[l])) {
      l++;
    } else if (!isVowel(arr[r])) {
      r--;
    }

    if (isVowel(arr[l]) && isVowel(arr[r])) {
      [arr[l], arr[r]] = [arr[r], arr[l]];
      l++;
      r--;
    }
  }

  return arr.join("");
};
