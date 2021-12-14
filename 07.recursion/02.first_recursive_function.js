// first recursive function
const counDown = (n) => {
  if (n < 0) {
    console.log("All done!");
    return;
  }

  console.log(n);
  n--;
  counDown(n);
};

counDown(10);

/*

const counDown = (n) => {
  if (n < 0) {
    return;
  }

  counDown(n - 1);
  console.log(n);
};
counDown(10);


*/
