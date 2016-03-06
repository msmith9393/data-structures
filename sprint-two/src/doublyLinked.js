var doublyLinkedListFn = function() {
  this.len = 0;
  this.head = null;
  this.tail = null;
}

doublyLinkedListFn.prototype.addToTail = function(value) {
  var newTail = new Node(value);
  var prevTail = this.tail;
  if (this.len === 0) {
    this.head = newTail;
  } else {
    prevTail.next = newTail;
    newTail.prev = prevTail;
  }
  this.tail = newTail;
  this.len++;
};

doublyLinkedListFn.prototype.addToHead = function(value) {
  var newHead = new Node(value);
  var prevHead = this.head;
  if (this.len === 0) {
    this.tail = newHead;
  } else {
    newHead.next = prevHead;
    prevHead.prev = newHead;
  }
  this.head = newHead;
  this.len++;
};

doublyLinkedListFn.prototype.removeTail = function() {
  var tailToRemove = this.tail;
  var newTail = tailToRemove.prev;
  newTail.next = null;
  this.tail = newTail;
  this.len--;
  return tailToRemove.value;
};

doublyLinkedListFn.prototype.removeHead = function() {
  var headToRemove = this.head;
  var newHead = headToRemove.next;
  newHead.prev = null;
  this.head = newHead;
  this.len--;
  return headToRemove.value;
};

doublyLinkedListFn.prototype.contains = function(target) {
  var nodeToCheck = this.head;
  while (nodeToCheck !== null) {
    if (nodeToCheck.value === target) {
      return true;
    } 
    nodeToCheck = nodeToCheck.next;
  }
  return false;
};

var Node = function(value) {
  this.prev = null;
  this.value = value;
  this.next = null;};

/*⁄
 * Complexity: What is the time complexity of the above functions?
 */