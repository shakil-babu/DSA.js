// sum 1 to n using recursion function

const sum = (n) => {
  if (n === 0) return 0;
  return n + sum(n - 1);
};

console.log(sum(4));
