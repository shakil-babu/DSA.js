function mergeAlternately(word1: string, word2: string): string {
  let max: number = Math.max(word1.length, word2.length);
  let min: number = Math.min(word1.length, word2.length);

  let ans: string = "";
  for (let i: number = 0; i < min; i++) {
    ans += word1[i] + word2[i];
  }
  ans += word1.length === max ? word1.slice(min) : word2.slice(min);
  return ans;
}
