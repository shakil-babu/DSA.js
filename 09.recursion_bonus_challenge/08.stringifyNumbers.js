function stringifyNumbers(obj) {
  let ans = {};
  for (let key in obj) {
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      ans[key] = stringifyNumbers(obj[key]);
    } else if (typeof obj[key] === "number") {
      ans[key] = String(obj[key]);
    } else {
      ans[key] = obj[key];
    }
  }

  return ans;
}
let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};
console.log(obj);
console.log(stringifyNumbers(obj));
