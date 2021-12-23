var areAlmostEqual = function (s1, s2) {
  if (s1.length !== s2.length) return false;
  if (s1 === s2) return true;
  let wrong = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      if (!s2.includes(s1[i])) return false;
      wrong++;
    }
  }

  return wrong === 2 ? true : false;
};
