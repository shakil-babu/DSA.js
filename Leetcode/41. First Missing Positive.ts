function firstMissingPositive(nums: number[]): number {
  if (nums.length < 1) return 1;
  let map = {};
  for (let i: number = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      map[nums[i]] = true;
    }
  }

  let i: number = 1;
  for (i; i <= nums.length; i++) {
    if (!map[i]) {
      return i;
    }
  }

  return i;
}
