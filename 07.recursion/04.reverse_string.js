const revStr = (str) => {
  // terminating case
  if (str === "") return "";

  // recursive case
  return revStr(str.substr(1)) + str[0];
};

console.log(revStr("shakil"));
