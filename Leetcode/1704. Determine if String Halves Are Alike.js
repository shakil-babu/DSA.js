/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  let str = s.toLowerCase();
  let mid = str.length / 2;
  let a = str.slice(0, mid),
    b = str.slice(mid);

  let ac = 0,
    bc = 0;
  for (let i = 0; i < a.length; i++) {
    if (
      a[i] == "a" ||
      a[i] == "e" ||
      a[i] == "i" ||
      a[i] == "o" ||
      a[i] == "u"
    ) {
      ac++;
    }
  }

  for (let i = 0; i < b.length; i++) {
    if (
      b[i] == "a" ||
      b[i] == "e" ||
      b[i] == "i" ||
      b[i] == "o" ||
      b[i] == "u"
    ) {
      bc++;
    }
  }

  return ac === bc ? true : false;
};
