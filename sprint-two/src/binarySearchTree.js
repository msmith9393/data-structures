var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value, currentNode) {
  currentNode = currentNode || this;
  if (value < currentNode.value) {
    if (currentNode.left === null) {
      currentNode.left = new BinarySearchTree(value);
    } else {
      currentNode.insert(value, currentNode.left);
    }
  } else {
    if (currentNode.right === null) {
      currentNode.right = new BinarySearchTree(value);
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

/*
 * Complexity: What is the time complexity of the above functions?
 insert and contains both have O(log n) time complexity.
 depthFirstLog has linear O(n) time complexity
 */













































