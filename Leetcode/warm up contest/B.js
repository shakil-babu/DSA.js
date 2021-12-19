let cmap = (str) => {
  let map = {};
  for (let item of str) {
    map[item] ? map[item]++ : (map[item] = 1);
  }
  return map;
};
var firstUniqChar = function (s) {
  let obj = cmap(s);
  let nonRep;
  for (let item in obj) {
    if (obj[item] === 1) {
      nonRep = item;
      break;
    }
  }

  let arr = s.split("");
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === nonRep) {
      index = i;
      break;
    }
  }

  return index;
};
