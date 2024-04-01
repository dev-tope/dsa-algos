function prettyPrint (node, prefix = "", isLeft = true) {
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


class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

class Tree {
  constructor(arr) {
    this.start = 0
    this.end = arr.length - 1
    this.root = this.buildTree(arr, this.start, this.end)
  }
  
  buildTree(arr, start, end) {
  
    sortArr(arr)
  
    if (start > end) {return null}
  
    let mid = Math.floor((start + end)/2);
    let root = new Node(arr[mid])
    root.left = this.buildTree(arr, start, mid-1);
    root.right = this.buildTree(arr, mid+1, end)
  
    return root
  }

  buildVisual(){
    prettyPrint(this.root)
  }

  insertNode(node = this.root, key) {
    let currentNode = this.root;
    //insert on the left
    if(currentNode.key > key) {
      if(currentNode.left == null) {
        currentNode.left = new Node(key)
      } else {
        currentNode.left = this.insertNode(key)
      }
    } else {
      //insert on the right 
      if(currentNode.right == null) {
        currentNode.right = new Node(key)
      } else {
        currentNode.left = this.insertNode(key)
      }
    }
  }

  insert(value) {
    if (this.root == null) {
      this.root = new Node(value)
    } else {
      this.insertNode(value)
    }
  }

  deleteItem(value) {
    this.root = this.deleteNode(this.root, value)
  }

  deleteNode(node, key) {
    if (node == null) {
      return null;
    }

    if (value < node.value) {
      node.left = this.deleteNode(node.left, key)
    } else if (value > node.value) {
      node.right = this.deleteNode(node.left, key)
    } else {
        if (!node.right && !node.left) {
          return null;
        } else if (!node.left) {
          node = node.right;
          return node;
        } else if (!node.right) {
          node = node.left;
          return node;
        } else {
          let temp = this.findMin(node.right);
          node.value = temp.value;
          node.right = this.deleteNode(node.right, temp.value);
          return node
        }
    }
    return node
  }

  findMin(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  find(value) {
    return this.findNode(this.root, value)
  }

  findNode(node, key) {
    let currentNode = this.root;

    if(!currentNode){
      return false
    }
    if (key < currentNode.key) {
      return this.findNode(currentNode.left, key);
    } else if (key > currentNode.key) {
      return this.findNode(currentNode.right, key)
    } else {
      return true;
    }
  }

  levelOrder(callback) {
    let root = this.root;
    let queue = [];
    let newArr = []
    
    if(!root) {
      return
    }
    
    queue.push(root);

    while(queue.length) {
      let temp = queue.shift()
      newArr.push(temp);
      if(temp.left) {
        queue.push(temp.left);
      }
      if (temp.right) {
        queue.push(temp.right)
      }
    }

    if(!callback) {
      return newArr
    } else {
      newArr.forEach(element => {
        callback(element)
      });
    }
  }

  preOrder(node = this.root, callback) {
    this.preOrderHelper()
    //do something with callback
  }

  postOrder() {
    this.postOrderHelper(this.root)
  }

  inOrder() {
    this.inOrderHelper(this.root)
  }


  inOrderHelper(node) {
    let nodeStack = []
    if(!node) {
      return
    }
    this.inOrderHelper(node.left);
    nodeStack.push(node.value)
    this.inOrderHelper(node.right);
  }

  postOrderHelper(node) {
    if (node.left) {
      this.postOrderHelper(node.left)
    } 
    if (node.right) {
      this.postOrderHelper(node.right)
    }
    return node.value;
  }

  preOrderHelper(node) {
    let nodeStack = []
    if(!node) {
      return
    } else {
      nodeStack.push(node);
      this.preOrderHelper(node.left);
      this.preOrderHelper(node.right)
    }

    return nodeStack
  }

  height(node) {

  }

  depth(node) {
    let counter = 0;
    let currentNode = this.root;

    while(currentNode.key != node.key) {
      if(currentNode.left) {
        currentNode = currentNode.left
      }
    }
  }

  

}


function sortArr(arr) {
  arr.sort((a,b) => (a-b))
  let sortedArr = []
  sortedArr = arr.filter((value, index, self)=> {
    return self.indexOf(value) === index;
  })
  return sortedArr
}



const myTree = new Tree([8,9,1,2,3,4,6,5,7])

myTree.buildVisual()



