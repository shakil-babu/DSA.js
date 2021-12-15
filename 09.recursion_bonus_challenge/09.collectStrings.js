const collectStrings = (obj) => {
  let ans = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      ans.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      ans = [...ans, ...collectStrings(obj[key])];
    }
  }

  return ans;
};
const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

collectStrings(obj); // ["foo", "bar", "baz"])
