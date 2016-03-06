var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  var key = JSON.stringify(item);
  this._storage[key] = item;
};

setPrototype.contains = function(item) {
  var key = JSON.stringify(item);
  return !!this._storage[key]; 
};

setPrototype.remove = function(item) {
  var key = JSON.stringify(item);
  delete this._storage[key];
};

// Make your set capable of handling numbers as well as strings
// Make your set capable of handling input objects of any type

/*
 * Complexity: What is the time complexity of the above functions?
add: O(1) - constant time
contains: O(1) - constant time
remove: O(1) - constant time
 */
