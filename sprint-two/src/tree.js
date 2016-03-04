var Tree = function(value) {
  var newTree = {};
  

  _.extend(newTree, treeMethods);
  
  newTree.value = value;
  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // check if newTree.value doesn't exist
    // create a node to represent a child with a value property set to given value and set that equal to newTree.value
};

treeMethods.contains = function(target) {
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
