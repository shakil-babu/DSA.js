// validAnagram
const cmap = (str) => {
  let map = {};
  for (let item of str) {
    map[item] ? map[item]++ : (map[item] = 1);
  }
  return map;
};

const validAnagram = (a, b) => {
  if (a.length !== b.length) return false;
  let first = cmap(a);
  let second = cmap(b);
  for (let str in first) {
    if (first[str] !== second[str]) return false;
  }

  return true;
};
let ans = validAnagram("awesome", "awesom");
console.log(ans);

// 2nd way
// let anagram = (a, b) => {
//   return Array.from(a).sort().join("") === b.split("").sort().join("")
//     ? "true"
//     : "false";
// };
