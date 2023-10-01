# Binary Search Tree (BST) Implementation

This repository a part of TOP's assignment which contains JavaScript implementation of a Binary Search Tree (BST). A BST is a data structure that allows for efficient insertion, deletion, and retrieval of elements, making it useful for various applications.

## Introduction

A Binary Search Tree is a hierarchical data structure consisting of nodes, where each node has a value and two child nodes (left and right). The BST has the following characteristics:

- The left subtree of a node contains only nodes with values less than the node's value.
- The right subtree of a node contains only nodes with values greater than the node's value.
- Both the left and right subtrees are also BSTs.

This implementation includes two classes:

- `TreeNode`: Represents a node in the BST.
- `Tree`: Represents the BST itself and provides various methods to manipulate and query the tree.

## Classes

### `TreeNode`

The `TreeNode` class represents a single node in the BST.

#### Constructor

- `TreeNode(data)`: Initializes a new instance of the `TreeNode` class with the provided data value. The left and right child nodes are initially set to `null`.

### `Tree`

The `Tree` class represents the Binary Search Tree and provides methods for operations on the tree.

#### Constructor

- `Tree(array)`: Initializes a new instance of the `Tree` class by building a balanced BST from the elements in the provided array. Duplicate values are removed.

#### Methods

- `insert(value)`: Inserts a new node with the given value into the BST.
- `delete(value)`: Deletes the node with the given value from the BST.
- `find(value)`: Searches for a node with the given value and returns it if found, or `null` if not found.
- `levelOrder()`: Returns an array of the tree's nodes in level-order traversal.
- `inOrder()`: Returns an array of the tree's nodes in in-order traversal.
- `preOrder()`: Returns an array of the tree's nodes in pre-order traversal.
- `postOrder()`: Returns an array of the tree's nodes in post-order traversal.
- `min()`: Returns the minimum value node in the BST.
- `max()`: Returns the maximum value node in the BST.
- `height()`: Returns the height of the tree.
- `depth(node)`: Returns the depth of a specified node in the tree.
- `isBalanced()`: Checks if the tree is balanced (the height difference between left and right subtrees is less than 2).
- `reBalance()`: Re-balances the tree to maintain its balanced structure.

## Examples

Here are some example usages of the BST:

```javascript
import Tree from "./Tree";

const values = [10, 5, 15, 3, 7, 12, 20];
const tree = new Tree(values);

console.log(tree.inOrder()); // [3, 5, 7, 10, 12, 15, 20]
console.log(tree.find(7)); // TreeNode { data: 7, left: null, right: null }
tree.insert(8);
console.log(tree.inOrder()); // [3, 5, 7, 8, 10, 12, 15, 20]
tree.delete(15);
console.log(tree.inOrder()); // [3, 5, 7, 8, 10, 12, 20]
```
