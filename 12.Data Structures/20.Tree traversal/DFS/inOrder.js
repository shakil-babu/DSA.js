/*
ইন-ওর্ডার পদ্ধতিতে প্রথমে বাঁ দিকের সাবট্রি ভিজিট করতে হয় । তারপর রুট নোড ভিজিট করতে হয় । তারপর ডানদিকের সাবট্রি ট্রাভার্স করতে হয় ।
নিম্নোক্ত ট্রি টি পোস্ট-অর্ডার পদ্ধতিতে ট্রাভার্স করি -

                         B
                        / \
                       A   C
             
            Post order : A, B, c
        
তাহলে অ্যালগরিদমটি দাঁড়াবে এমন -
১। Tree, Root
2। বাঁ দিকের সাব-ট্রি ট্রাভার্স করতে হবে । অর্থাৎ, Pre-order(tree,root.left) কল করতে হবে ।
৩। Root নোড ভিজিট করতে হবে ।
৪। ডান দিকের সাব-ট্রি ট্রাভার্স করতে হবে । অর্থাৎ, Pre-order(tree,root.right) কল করতে হবে ।
5। ভ্যালূ রিটার্ন করতে হবে ।


ex : 

            1
          /   \
         2     3
        / \
       4   5


 in-order - 4,2,5,1,3

*/

// Implementation
const DFS_inorder = (root) => {
  let data = [];
  const traverse = (node) => {
    if (node.left) traverse(node.left);
    data.push(node.val);
    if (node.right) traverse(node.right);
  };
  traverse(root);
  return data;
};
