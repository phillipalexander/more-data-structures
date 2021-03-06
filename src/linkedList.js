// Note: don't use an array to do this.
var makeLinkedList = function(){
  var newLinkedList = {};
  newLinkedList.head = null;
  newLinkedList.tail = null;

  newLinkedList.addToTail = function(value){

    var node = makeNode(value);

    if(this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  };

  newLinkedList.removeHead = function(){
    var headToBeChoppedOff = this.head;
    this.head = this.head.next;
    return headToBeChoppedOff.value;
  };

  newLinkedList.contains = function(value){
    // sub-routine to recursively go through all the nodes to check values
    var checkNodeForValue = function(node, target) {
      if(node.value === target) {
        return true;
      } else if(node.next === null) {
        return false;
      } else {
        return checkNodeForValue(node.next, target);
      }
    };

    return checkNodeForValue(this.head, value);
  };

  return newLinkedList;
};

var makeNode = function(value){
  var newNode = {};
  newNode.value = value;
  newNode.next = null;

  newNode.removeNextNode = function(){
  };

  return newNode;
};

/*
A linkedList class, in functional style, with the following properties:
  .head property, a linkedListNode instance
  .tail property, a linkedListNode instance
  .addToTail() method, takes a value and adds it to the end of the list
  .removeHead() method, removes the first node from the list and returns its value
  .contains() method, returns boolean reflecting whether or not the passed-in value is in the linked list
*/