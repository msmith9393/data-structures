var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};


  obj.count = 0;
  _.extend(obj, stackMethods);

  return obj;
};

var stackMethods = {
  push: function(value) {
    this[this.count] = value;
    this.count++;
  },
  pop: function() {
    if (this.count > 0) {
      this.count--;
      var popped = this[this.count];
      delete this[this.count];
      return popped;
    }
  },
  size: function() {
    return this.count;
  }
};


