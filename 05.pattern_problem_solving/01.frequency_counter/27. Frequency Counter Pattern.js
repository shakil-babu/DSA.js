const same = (a, b) => {
  if (a.length !== b.length) return false;
  for (let i = 0; i <= a.length; i++) {
    let correctIndex = b.indexOf(a[i] ** 2);
    if (correctIndex === -1) return false;
    b.splice(correctIndex, 1);
  }
  return true;
};

let ans = same([1, 2, 3], [9, 4, 1]);
console.log(ans);

// 2nd way
// const same = (a, b) => {
//   return a
//     .map((item) => item * item)
//     .sort((a, b) => a - b)
//     .join("") === b.sort((a, b) => a - b).join("")
//     ? "true"
//     : "false";
// };
