var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    count++;
    storage[count] = value;
  };

  someInstance.dequeue = function() {
    if ( count > 0 ) {
      count--;
    }
    for (var i = 1; i <= count + 1; i++) {
      
      var dequeued = storage[i];
    
      delete storage[i];
      return dequeued;
    }
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
