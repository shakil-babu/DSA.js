var maxRepeating = function (sequence, word) {
  let count = 0;
  let a = word;
  while (sequence.includes(a)) {
    count++;
    a += word;
  }

  return count;
};

let ans = maxRepeating("ababc", "ac");
console.log(ans);
