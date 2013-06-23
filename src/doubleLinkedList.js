// Note: don't use an array to do this.
var list = function(){
  var newLinkedList = {};
  newLinkedList.head = null;
  newLinkedList.tail = null;

  list.addToHead = function(){


  };

  list.addToTail = function(){
  };

  list.removeHead = function(){
    list.head = list.head.next;
    if(list.head) {
      list.head.previous = null;
    }
    if(list.head===null) {
      list.tail = null;
    }
  };

  list.removeTail = function(){

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