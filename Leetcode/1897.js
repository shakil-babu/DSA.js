var makeEqual = function (words) {
  if (words.length === 0) return false;
  let obj = {};
  words.forEach((item, index) => {
    for (let char of item) {
      obj[char] ? obj[char]++ : (obj[char] = 1);
    }
  });

  for (let char in obj) {
    if (obj[char] % words.length) {
      return false;
    }
  }

  return obj;
};
