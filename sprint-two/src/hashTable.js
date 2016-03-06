var HashTable = function() {
  this._limit = 8;
  this._size = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  return this._tupleSearch(k,
    function(bucket, tuple, i) {
      var lastValue = tuple[1];
      tuple[1] = v;
      return lastValue;
    }, function(bucket) {
      this._size++;
      bucket.push([k,v]);
      if (this._size / this._limit > 0.75) {
        this._resize(this._limit * 2);
      }
    }
  );
};

HashTable.prototype.retrieve = function(k) {
  return this._tupleSearch(k, function(bucket, tuple, i) {
    return tuple[1];
  });
};

HashTable.prototype.remove = function(k) {
  return this._tupleSearch(k, function(bucket, tuple, i) {
    var removed = tuple;
    this._size--;
    bucket.splice(i, 1);
    if (this._size / this._limit < 0.25) {
      this._resize(Math.floor(this._limit / 2));
    }
    return removed[1];
  });
};

HashTable.prototype._tupleSearch = function(k, cbFound, cbNotFound) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  this._storage.set(index, bucket);
  for (var i=0; i<bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      return cbFound.call(this, bucket, tuple, i);
    }
  }
  return cbNotFound ? cbNotFound.call(this, bucket) : undefined;
};

HashTable.prototype._resize = function(newLimit) {
  var oldStorage = this._storage;
  newLimit = Math.max(8, newLimit);
  if (newLimit === this._limit) {
    return;
  }

  this._limit = newLimit;
  this._storage = LimitedArray(this._limit);
  this._size = 0;

  oldStorage.each(function(bucket, i, storage) {
    if (!bucket) {
      return;
    }
    for (var i=0; i<bucket.length; i++) {
      var tuple = bucket[i];
      this.insert(tuple[0], tuple[1]);
    }
  }.bind(this));

};


/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(1) - constant time, worst case scenario O(n) linear time
 retrieve: O(1) - constant time, worst case scenario O(n) linear time
 remove: O(1) - constant time, worst case scenario O(n) linear time
 */