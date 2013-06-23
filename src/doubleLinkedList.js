// Note: don't use an array to do this.
var list = function(){
  var newLinkedList = {};
  newLinkedList.head = null;
  newLinkedList.tail = null;

  list.addToTail = function(){
  };

  list.removeHead = function(){
  };

  list.contains = function(){
  };

  return list;
};

var makeNode = function(value){
  var newNode = {};
  newNode.value = value;
  newNode.next = null;

  newNode.removeNextNode = function(){
  };

  return newNode;
};