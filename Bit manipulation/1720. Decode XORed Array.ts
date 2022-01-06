function decode(encoded: number[], first: number): number[] {
  let arr = [];
  arr[0] = first;
  encoded.forEach((item, index) => {
    arr.push(arr[index] ^ item);
  });

  return arr;
}
