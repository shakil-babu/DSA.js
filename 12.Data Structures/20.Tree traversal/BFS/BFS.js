// BFS
function BFS() {
  let queue = [this.root];
  let data = [];
  while (queue.length) {
    let cur = queue.shift();
    data.push(cur.value);
    if (cur.left !== null) queue.push(cur.left);
    if (cur.right !== null) queue.push(cur.right);
  }

  return data;
}
