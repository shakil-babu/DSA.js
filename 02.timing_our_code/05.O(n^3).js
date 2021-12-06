// 3x + 9y + 8z = 79

const findXyz = (n) => {
  const solutions = [];
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      for (let z = 0; z < n; z++) {
        if (3 * x + 9 * y + 8 * z === 79) {
          solutions.push({ x, y, z });
        }
      }
    }
  }

  return solutions;
};

let ans = findXyz(10);
console.log(ans);

/*
  
  TIme complexity = O(n^3);
  space complexity = O(n);
  
  */
