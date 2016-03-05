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
      this.insert(value, currentNode.left);
    }
  } else {
    if (currentNode.right === null) {
      currentNode.right = new BinarySearchTree(value);
    } else {
      this.insert(value, currentNode.right);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {

};

BinarySearchTree.prototype.depthFirstLog = function(callback) {

}; 
/*
 * Complexity: What is the time complexity of the above functions?
 */
