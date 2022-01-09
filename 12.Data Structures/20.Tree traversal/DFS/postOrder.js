/*
পোস্ট-অর্ডার পদ্ধতিতে প্রথমে বাঁ দিকের সাব-ট্রি ট্রাভার্স করতে হয়, তারপরে ডান দিকের সাবট্রি ট্রাভার্স করতে হয় । তারপরে রুট নোড ভিজিট করতে হয়।
নিম্নোক্ত ট্রি টি পোস্ট-অর্ডার পদ্ধতিতে ট্রাভার্স করি -

                         B
                        / \
                       A   C
             
            Post order : A, C, B



তাহলে অ্যালগরিদমটি দাঁড়াবে এমন -
১। Tree, Root
2। বাঁ দিকের সাব-ট্রি ট্রাভার্স করতে হবে । অর্থাৎ, Pre-order(tree,root.left) কল করতে হবে ।
3। ডান দিকের সাব-ট্রি ট্রাভার্স করতে হবে । অর্থাৎ, Pre-order(tree,root.right) কল করতে হবে ।
4। Root নোড ভিজিট করতে হবে ।
5। ভ্যালূ রিটার্ন করতে হবে ।


ex : 

            1
          /   \
         2     3
        / \
       4   5


 Pre-order - 4,5,2,3,1

*/

// Implementation
const DSF_postOrder = (root) => {
  let data = [];
  let traverse = (node) => {
    if (node.left !== null) traverse(node.left);
    if (node.right !== null) traverse(node.right);
    data.push(node.val);
  };
  traverse(root);
  return data;
};
