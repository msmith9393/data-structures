var Tree = function(value) {
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newNode = Tree(value);
  this.children.push(newNode);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } 
  if (this.children.length > 0) {
    for ( var i = 0; i < this.children.length; i++ ) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }  
  }
  return false;
};

treeMethods.traverse = function(cb) {
  // Implement a .traverse() method on your tree. Your .traverse() should accept a callback and execute it on every value contained in the tree
  if (this.value) {
    cb(this.value);  
  }
  for (var i=0; i<this.children.length; i++) {
    this.children[i].traverse(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 addChild: O(1) - constant
 contains: O(n^2) - quadratic
 */
