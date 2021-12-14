// print 0 to n
const printNtoZero = (n) => {
  if (n < 0) return;
  console.log(n);
  printNtoZero(n - 1);
};

printNtoZero(10);
