const naiveSearch = (str, target) => {
  if (str.length === 0) return false;
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < target.length; j++) {
      if (target[j] !== str[i + j]) break;

      if (j === target.length - 1) {
        count++;
      }
    }
  }

  return count;
};

console.log(naiveSearch("hello shakil babu", "sha"));
