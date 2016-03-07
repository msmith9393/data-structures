var BinarySearchTree = function(value, parent) {
  this.value = value;
  this.parent = parent || null;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value, currentNode) {
  currentNode = currentNode || this;
  if (value < currentNode.value) {
    if (currentNode.left === null) {
      currentNode.left = new BinarySearchTree(value, currentNode);
    } else {
      currentNode.insert(value, currentNode.left);
    }
  } else {
    if (currentNode.right === null) {
      currentNode.right = new BinarySearchTree(value, currentNode);
    } else {
      currentNode.insert(value, currentNode.right);
    }
  }
};

BinarySearchTree.prototype.contains = function(value, currentNode) {
  currentNode = currentNode || this;

  // base cases
  if (currentNode.value === value) {
    return true;
  } else if (currentNode.left === null && currentNode.right === null) {
    return false;
  }

  // recursive cases
  if (value < currentNode.value) {
    if (currentNode.left === null) {
      return false;
    } else {
      return currentNode.contains(value, currentNode.left); 
    }
  } else {
    if (currentNode.right === null) {
      return false;
    } else {
      return currentNode.contains(value, currentNode.right);
    }
  }
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
};

BinarySearchTree.prototype.breadthFirstLog = function(cb) {
  var queue = Queue();
  var current;
  queue.enqueue(this);

  while(queue.size() > 0) {
    current = queue.dequeue();
    if (current) {
      cb(current.value);
      queue.enqueue(current.left);
      queue.enqueue(current.right);
    }
  }
};

// Take a Empty Queue.
// Start from the root, insert the root into the Queue.
// Now while Queue is not empty,
// Extract the node from the Queue and insert all its chil­dren into the Queue.
// Print the extracted node.

var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.start = 0;
  someInstance.end = 0;
  return someInstance;
};

queueMethods = {
  enqueue: function(value) {
    this[this.end++] = value;
  },
  dequeue: function() {
    var result = this[this.start];
    delete this[this.start];
    this.size() && this.start++;
    return result;
  },
  size: function() {
    return this.end - this.start;
  }
};


// .breadthFirstLog() method for binarySearchTee, logs the nodes contained in the tree using a breadth-first approach


// BinarySearchTree.prototype.rebalance = function() {
  // var treeLinkedList = treeLinkedList || LinkedList();
  // var current = this;
  // while (current !== null) {
  //   current = this.left;
  // }
  // treeLinkedList.addToTail(current);
  // current = this.parent;
  // current.left = null;
  // current.rebalance();

  // return treeLinkedList;
// };

/*
 * Complexity: What is the time complexity of the above functions?
 insert and contains both have O(log n) time complexity.
 depthFirstLog has linear O(n) time complexity
 */