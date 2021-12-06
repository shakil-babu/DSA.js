function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

/*



O(n) operation inside of an O(n) operation. so the time complexity -

-> O(n * n)
-> O(n^2)

*/

/*
  
  TIme complexity = O(n^2);
  space complexity = O(1);
  
*/
