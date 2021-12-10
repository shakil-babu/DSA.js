// 01. using frequency counter
function cmap(arr) {
  let map = {};
  for (let item of arr) {
    map[item] ? map[item]++ : (map[item] = 1);
  }

  return map;
}

function areThereDuplicates() {
  let arr = [];
  for (let item in arguments) {
    arr.push(arguments[item]);
  }
  let obj = cmap(arr);
  for (let key in obj) {
    if (obj[key] > 1) return true;
  }
  return false;
}

// 02. two pointer
// function areThereDuplicates(...args) {
//   args.sort((a, b) => a - b);
//   let l = 0;
//   let r = 1;

//   while (r < args.length) {
//     if (args[l] === args[r]) return true;
//     l++;
//     r++;
//   }
//   return false;
// }

// 03. simple one
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
