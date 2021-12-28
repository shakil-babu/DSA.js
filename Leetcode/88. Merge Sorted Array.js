var merge = function (nums1, m, nums2, n) {
  nums1.splice(m);
  for (let i = 0; i < n; i++) {
    nums1.push(nums2[i]);
  }

  return nums1.sort((a, b) => a - b);
};
