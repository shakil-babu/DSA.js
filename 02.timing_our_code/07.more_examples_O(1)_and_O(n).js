// time complexity -> O(1)
function logAtMost5(n) {
  for (var i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

// time complexity -> O(1)
const print = () => {
  console.log("shakil");
};

// =======================================================================

// time complexity -> O(n)
function logAtLeast5(n) {
  for (var i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

// time complexity -> O(n)
const log = (arr) => {
  arr.forEach((item) => {
    console.log(item);
  });
};
