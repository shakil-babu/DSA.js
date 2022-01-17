const DFS_inorder = (root) => {
  let data = [];
  if (!root) return data;

  let traverse = (node) => {
    if (node.left) traverse(node.left);
    data.push(node.val);
    if (node.right) traverse(node.right);
  };
  traverse(root);
  return data;
};
var minDiffInBST = function (root) {
  let arr = DFS_inorder(root).sort((a, b) => a - b);
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] < min) min = arr[i + 1] - arr[i];
  }

  return min;
};

/*

var minDiffInBST = function(root) {
    if(!root) return;
    var min = Infinity;
    var data = [];
    function inOrderTransversal(node){
        if(node.left) inOrderTransversal(node.left);
        data.push(node.val);
        if(node.right) inOrderTransversal(node.right);
    }
    inOrderTransversal(root);
    for(var i=1; i<data.length; i++){
        min = Math.min(min, data[i] - data[i-1]); 
    }
    return min;
};


*/
