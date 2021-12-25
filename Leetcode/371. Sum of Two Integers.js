var getSum = (a, b) => {
  if (a > 0) {
    while (a !== 0) {
      a--;
      b++;
    }
  }

  if (a < 0) {
    while (a < 0) {
      a--;
      b++;
    }
  }
  return b;
};
