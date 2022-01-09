var pairSum = function (head) {
  let arr = [];
  let current = head;
  while (current) {
    arr.push(current.val);
    current = current.next;
  }

  let ans = 0;
  arr.forEach((item, index) => {
    ans = Math.max(ans, item + arr[arr.length - 1 - index]);
  });
  return ans;
};
