var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.pop = function() {
    var popped = storage[count - 1];
    if (count > 0) {
      delete storage[count];
      count--;
    }
    return popped;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};