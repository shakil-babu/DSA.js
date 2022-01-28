var findLonely = function (nums) {
  if (!nums) return [];
  let charMap = {};
  for (let char of nums) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  let ans = [];
  for (let item of nums) {
    let isTrue = !charMap[item - 1] && !charMap[item + 1] && charMap[item] == 1;
    if (isTrue) {
      ans.push(item);
    }
  }

  return ans;
};
