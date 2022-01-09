/*

প্রি-অর্ডার পদ্ধতিতে প্রথমে রুট নোড ভিজিট করা হয় । তারপরে তার বা দিকের সাবট্রি  প্রি-অর্ডার পদ্ধতিতে ট্রাভার্স করা হয় ।
তাহলে অ্যালগরিদমটি দাঁড়াবে এমন -

১। Tree, Root
২। Root নোড ভিজিট করতে হবে ।
৩। বাঁ দিকের সাব-ট্রি ট্রাভার্স করতে হবে । অর্থাৎ, Pre-order(tree,root.left) কল করতে হবে ।
৪। ডান দিকের সাব-ট্রি ট্রাভার্স করতে হবে । অর্থাৎ, Pre-order(tree,root.right) কল করতে হবে ।
৫। ভ্যালূ রিটার্ন করতে হবে ।

ex : 

            1
          /   \
         2     3
        / \
       4   5


 Pre-order - 1,2,4,5,3
*/

// Implementation
const DFSpreOrder = (root) => {
  let data = [];
  const traverse = (node) => {
    data.push(node.val);
    if (node.left !== null) traverse(node.left);
    if (node.right !== null) traverse(node.right);
  };
  traverse(root);
  return data;
};
