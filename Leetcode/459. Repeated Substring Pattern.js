var repeatedSubstringPattern = function (s) {
  if (s.length === 1) {
    return false;
  }
  let temp = "";
  for (let i = 0; i < s.length / 2; i++) {
    while (temp.length < s.length) {
      temp = temp + s.substring(0, i + 1);
    }
    if (temp === s) {
      return true;
    } else {
      temp = "";
    }
  }
  return temp === s ? true : false;
};
