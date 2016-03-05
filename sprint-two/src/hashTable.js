

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket === undefined) {
    this._storage.set(index, [[k, v]]);      
  } else {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
      } else {
        this._storage.get(index).push([k, v]);
      }
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket !== undefined) {
    for ( var i = 0; i < bucket.length; i++ ) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket !== undefined) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket.splice(i, 1);
        break;
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(1) - constant time, worst case scenario O(n) linear time
 retrieve: O(1) - constant time, worst case scenario O(n) linear time
 remove: O(1) - constant time, worst case scenario O(n) linear time
 */


