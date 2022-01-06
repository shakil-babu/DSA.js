function countConsistentStrings(allowed: string, words: string[]): number {
  let u = new Set(allowed),
    count: number = 0;
  words.forEach((item, index) => {
    item.split("").every((element) => u.has(element)) && count++;
  });
  return count;
}
