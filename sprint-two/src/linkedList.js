var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value) {
    var newTail = Node(value);
    if (list.head === null) {
      list.head = newTail;
    } else {
      list.tail.next = newTail;
    }
    list.tail = newTail;
  };

  list.removeHead = function() {
    var currentHead = list.head;
    list.head = list.head.next;
    return currentHead.value;
  };

  list.contains = function(target) {
  };

  return list;
};





var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*⁄
 * Complexity: What is the time complexity of the above functions?
 */
