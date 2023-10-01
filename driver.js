import Tree from "./bst";

const randomArray = (size) => {
  return Array.from({ length: size }, () => Math.floor(Math.random() * 100));
};

const tree = new Tree(randomArray(30));
console.log("Balanced:", tree.isBalanced());
console.log("Lever Order =>", tree.levelOrder());
console.log("Pre-order =>", tree.preOrder());
console.log("In-order =>", tree.inOrder());
console.log("Post-order =>", tree.postOrder());

for (let i = 0; i < 5; i++) {
  tree.insert(Math.floor(Math.random() * 20));
}
console.log("Balanced:", tree.isBalanced());

tree.reBalance();
console.log("Balanced:", tree.isBalanced());
console.log("Lever Order =>", tree.levelOrder());
console.log("Pre-order =>", tree.preOrder());
console.log("In-order =>", tree.inOrder());
console.log("Post-order =>", tree.postOrder());
