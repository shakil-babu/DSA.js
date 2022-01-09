var capitalizeTitle = function (title) {
  let arr = title.toLowerCase().split(" ");
  let ans = [];
  arr.forEach((item) => {
    if (item.length <= 2) {
      ans.push(item.toLowerCase());
    } else {
      ans.push(item[0].toUpperCase() + item.slice(1));
    }
  });
  return ans.join(" ");
};
