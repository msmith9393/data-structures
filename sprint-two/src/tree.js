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
  var newNode = Tree(value);
  this.children.push(newNode);
};

treeMethods.contains = function(target) {
  

  if (this.value === target) {
    return true;
  } 

  if (this.children.length) {
    for ( var i = 0; i < this.children.length; i++ ) {
      return this.children[i].contains(target);
    }  
  }
  
  return false;
  // var result = false;
  // if (this.value === target) {
  //   result = true;
  // } else {
  //   for (var i = 0; i < this.children.length; i++) {
  //     this.children[i].contains(target);
  //   }
  // }
  // return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
