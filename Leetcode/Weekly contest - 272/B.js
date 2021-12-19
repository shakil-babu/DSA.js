var addSpaces = function (s, spaces) {
  let arr = s.split("");

  for (let i = 0; i < spaces.length; i++) {
    if (spaces[i] === 0) {
      arr[spaces[i]] = " " + arr[spaces[i]];
    }
    arr[spaces[i] - 1] = arr[spaces[i] - 1] + " ";
  }

  return arr.join("");
};
