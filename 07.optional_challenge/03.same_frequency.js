// using frequency counter
function cmap(str) {
  let map = {};
  for (let item of str) {
    map[item] ? map[item]++ : (map[item] = 1);
  }
  return map;
}
function sameFrequency(a, b) {
  if (a.toString().length !== b.toString().length) return false;
  let arr = cmap(a.toString());
  let arr1 = cmap(b.toString());

  for (let key in arr) {
    if (arr[key] !== arr1[key]) {
      return false;
    }
  }
  return true;
}

/*
  // without frequency counter
  
// function sameFrequency(a, b) {
//   let arr = a
//     .toString()
//     .split("")
//     .map((item) => parseInt(item))
//     .sort((a, b) => a - b);
//   let arr1 = b
//     .toString()
//     .split("")
//     .map((item) => parseInt(item))
//     .sort((a, b) => a - b);

//   return arr.join("") === arr1.join("") ? true : false;
// }

  
  
  */
