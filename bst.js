import TreeNode from "./treeNode";

class Tree {
  constructor(array) {
    let sortedArray = array.sort((a, b) => a - b);
    let finalArray = [...new Set(sortedArray)];
    this.root = this.buildTree(finalArray);
  }

  buildTree(array) {
    let length = array.length;
    if (length === 0) {
      return null;
    }

    let mid = Math.floor(length / 2);
    let node = new TreeNode(array[mid]);
    node.left = this.buildTree(array.slice(0, mid));
    node.right = this.buildTree(array.slice(mid + 1));
    return node;
  }

  insert(value) {
    let newNode = new TreeNode(value);
    if (this.root == null) {
      this.root = newNode;
      return;
    }
    let prevNode = null;
    let currentNode = this.root;
    while (currentNode != null) {
      if (currentNode.data > value) {
        prevNode = currentNode;
        currentNode = currentNode.left;
      } else if (currentNode.data < value) {
        prevNode = currentNode;
        currentNode = currentNode.right;
      } else {
        return;
      }
    }
    if (prevNode.data > value) {
      prevNode.left = newNode;
    } else {
      prevNode.right = newNode;
    }
  }

  delete(value, currentNode = this.root) {
    if (currentNode === null) {
      return currentNode;
    }

    if (currentNode.data > value) {
      currentNode.left = this.delete(value, currentNode.left);
      return currentNode;
    } else if (currentNode.data < value) {
      currentNode.right = this.delete(value, currentNode.right);
      return currentNode;
    }

    if (currentNode.left === null) {
      let temp = currentNode.right;
      currentNode = null;
      return temp;
    } else if (currentNode.right === null) {
      let temp = currentNode.left;
      currentNode = null;
      return temp;
    } else {
      let parent = currentNode;

      let successor = currentNode.right;
      while (successor.left !== null) {
        parent = successor;
        successor = successor.left;
      }

      if (parent !== currentNode) {
        parent.left = successor.right;
      } else {
        parent.right = successor.right;
      }

      currentNode.data = successor.data;

      successor = null;
      return currentNode;
    }
  }

  find(value) {
    let currentNode = this.root;

    while (currentNode.data !== value) {
      if (currentNode === null) {
        return null;
      }
      if (value < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
      return null;
    }
    return currentNode;
  }

  levelOrder() {
    let queue = [];
    let outputArray = [];
    queue.push(this.root);
    while (queue.length) {
      let currentNode = queue.shift();
      outputArray.push(currentNode.data);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return outputArray;
  }

  inOrder(currentNode = this.root) {
    let outputArray = [];
    if (currentNode == null) return outputArray;

    if (currentNode.left) {
      outputArray = outputArray.concat(this.inOrder(currentNode.left));
    }

    outputArray.push(currentNode.data);

    if (currentNode.right) {
      outputArray = outputArray.concat(this.inOrder(currentNode.right));
    }

    return outputArray;
  }

  preOrder(currentNode = this.root) {
    let outputArray = [];
    if (currentNode == null) return outputArray;

    outputArray.push(currentNode.data);

    if (currentNode.left) {
      outputArray = outputArray.concat(this.preOrder(currentNode.left));
    }

    if (currentNode.right) {
      outputArray = outputArray.concat(this.preOrder(currentNode.right));
    }

    return outputArray;
  }

  postOrder(currentNode = this.root) {
    let outputArray = [];
    if (currentNode == null) return outputArray;

    if (currentNode.left) {
      outputArray = outputArray.concat(this.postOrder(currentNode.left));
    }

    if (currentNode.right) {
      outputArray = outputArray.concat(this.postOrder(currentNode.right));
    }

    outputArray.push(currentNode.data);

    return outputArray;
  }

  min() {
    let currentNode = this.root;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }

  max() {
    let currentNode = this.root;
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    return currentNode;
  }

  height(currentNode = this.root) {
    if (currentNode === null) {
      return 0;
    }
    let leftHeight = this.height(currentNode.left);
    let rightHeight = this.height(currentNode.right);

    return leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1;
  }

  depth(node, currentNode = this.root, depth = 0) {
    if (currentNode === null || node === null) return;
    // if (node === currentNode) return depth;
    if (node === currentNode) return `Depth: ${depth}`;
    if (node.data < currentNode.data) {
      return this.depth(node, currentNode.left, (depth += 1));
    } else {
      return this.depth(node, currentNode.right, (depth += 1));
    }
  }

  isBalanced(currentNode = this.root) {
    const lHeight = this.height(currentNode.left);
    const rHeight = this.height(currentNode.right);
    const diff = Math.abs(lHeight - rHeight);
    return diff < 2 ? "true" : "false";
  }

  reBalance(currentNode = this.root) {
    let arr = this.levelOrder();
    arr.sort((a, b) => a - b);
    return (this.root = this.buildTree(arr));
  }
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

export default Tree;
