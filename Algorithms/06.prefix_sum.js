function prefix_sums(arr) {
  var new_arr = [];
  for (var i = 0; i < arr.length; i++) {
    new_arr[i] = 0;
    for (var j = 0; j < i + 1; j++) {
      new_arr[i] += arr[j];
    }
  }
  return new_arr;
}
