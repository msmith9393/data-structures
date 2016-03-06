

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v) {
  return this._tupleSearch(k, function(bucket, tuple, i) {
    var last = tuple[1];
    tuple[1] = v;
    return last;
  }, function(bucket) {
    this._size++;
    bucket.push([k, v]);
    if (this._size / this._limit > 0.75) {
      this._resize(this._limit * 2);
    }
  });
};

HashTable.prototype.retrieve = function(k) {
  return this._tupleSearch(k, function(bucket, tuple, i) {
    return tuple[1];
  });
};

HashTable.prototype.remove = function(k) {
  return this._tupleSearch(k, function(bucket, tuple, i) {
    var oldTuple = tuple;
    bucket.splice(i, 1);
    this._size--;
    if (this._size / this._limit < 0.25) {
      this._resize(Math.floor(this._limit / 2));
    }
    return oldTuple;  
  });
};

HashTable.prototype._tupleSearch = function(key, foundCB, notFoundCB) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(index) || [];

  this._storage.set(index, bucket);

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === key) {
      return foundCB.call(this, bucket, tuple, i);
    } 
  }
  return notFoundCB ? notFoundCB.call(this, bucket) : undefined;
};

HashTable.prototype._resize = function(newLength) {
  var oldStorage = this._storage;

  oldStorage.each(function(bucket, index, storage) {
    if (bucket) {
      for (var i = 0; i < bucket.length; i++) {
        this.insert(bucket[i][0], bucket[i][1]);
      }
    }
  });
};


/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(1) - constant time, worst case scenario O(n) linear time
 retrieve: O(1) - constant time, worst case scenario O(n) linear time
 remove: O(1) - constant time, worst case scenario O(n) linear time
 */


