var isPalindrome = function (head) {
  if (!head) return false;
  let current = head;
  let arr = [];
  while (current) {
    arr.push(current.val);
    current = current.next;
  }

  let str = arr.join("");
  if (str === arr.reverse().join("")) {
    return true;
  } else {
    return false;
  }
};
