var isPrefixString = function (s, words) {
  let str = "";

  for (let index = 0; index < words.length; index++) {
    str += words[index];

    if (str.length > s.length || !s.startsWith(str)) return false;
    if (str === s) return true;
  }
  return false;
};
