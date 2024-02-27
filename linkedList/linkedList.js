class LinkedList {
  head = null;
  size = 0
 

  append(value) {
    if(this.head === null) {
      this.head = new Node;
      this.head.value = value;
    } else {
      //  if the list is not empty
      // traverse the list
      let currentNode = this.head; // make head the current node

      //move through the node until last node
      while(currentNode.next != null) {
        currentNode = currentNode.next;
      }

      // create a node attached to the last traversed node
      const newNode = new Node;
      currentNode.next = newNode;
      newNode.value = value;
    }
    this.size++
  }

  prepend(value) {
    //if list is empty 
    if(this.head === null) {
      this.head = new Node;
      this.head.value = value;
    } else {
      // if list is not empty
      let temp = this.head;
      const newNode = new Node;
      this.head = newNode
      newNode.value = value;
      newNode.next = temp;
    }
    this.size++
  }

  size() {
    return this.size++
  }

  head() {
    return this.head;
  }

  tail() {
    let curNode = this.head; //set head as current node as 

    // check if list is empty
    if(curNode === null) {
      return 'list is empty'; 
    }

    // traverse the list from node to node till end
    while(curNode.next !== null) {
      curNode = curNode.next;
    }
    // return tail;
    return curNode;
  }

  at(index) {
    let currentNode = this.head;

    if(curNode === null) {
      return "list is empty"
    }

    if(index > this.size - 1) {
      return 'index is greater than length of the list'
    }
    
    for(let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode; 
  }

  pop() {
    let curNode = this.head;
    let prevNode = null;

    while(curNode.next !== null){
      prevNode = curNode;
      curNode = curNode.next
    }
    prevNode.next = null;
    this.size--
  }

  contains(value) {
    let curNode = this.head;

    while(curNode !== null) {
     if(curNode.value === value) {
      return true;
     } else {
        curNode = curNode.next;
     }
    }
    return false
   
  }

  find(value) {
    let curNode = this.head;
    let index = 0;
    while(curNode !== null) {
      if(curNode.value !== value) {
        curNode = curNode.next;
        index++;
      } else if (curNode.value === value) {
        return index;
      }
    }

    return "ERROR: value is not in list"
  }

  toString() {
    let curNode = this.head;
    let listString = "";

    while(curNode !== null) {
      listString += `(${curNode.value}) -> `
      curNode = curNode.next;
    }
    return listString + "null";
  }

  insertAt(value, index) {
    let curNode = this.head;
    let ind = 0;
    let temp;
    
    const newNode = new Node;
    newNode.value = value;

    if(index === 0) {
      this.prepend(newNode.value)
    }
    
    while(curNode !== null) {
     
      curNode = curNode.next;
      ind++

      if(ind === index - 1){
        newNode.next = curNode.next;
        curNode.next = newNode
        this.size++
      }
    }
  }

  removeAt(index) {
    let curNode = this.head;
    let prevNode = null;
    let ind = 0;
    
    if(index === 0) {
      curNode.next = curNode
    }

    while(curNode !== null) {
      prevNode = curNode;
      curNode = curNode.next;
      ind++;

      if(ind === index) {
        prevNode.next = curNode.next;
        curNode.next = null;
        this.size--
      }
    }

  }
}

class Node {
  value = null;
  next = null
}


const myLinkedList = new LinkedList;

myLinkedList.append(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.prepend(0);

// myLinkedList.pop()
myLinkedList.insertAt(9, 0)
myLinkedList.removeAt(2)


console.log(myLinkedList.toString())