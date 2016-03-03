var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.count = 0;

  _.extend(obj, queueMethods);

  return obj;
};

var queueMethods = {
  enqueue: function(value) {
    this[this.count] = value;
    this.count++;
  },
  dequeue: function() {
    if (this.count > 0) {
      this.count--;
      var dequeued = this[0];
      for (var i = 0; i < this.count; i++) {
        this[i] = this[i + 1];
      }
      delete this[this.count];
      return dequeued;
    }
  },
  size: function() {
    return this.count;
  }
};


