var makeTree = function(){
  var newTree = {
    value : undefined,
    children : undefined,
    addChild : treeMethods.addChild,
    contains : treeMethods.contains
  };

  //return _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {
  addChild : function(value){
    var newNode = makeTree();
    newNode.value = value;
    this.children.push(newNode);
  },

  contains : function(value){
  }
};


/*
A tree class, in functional with shared methods style, with the following properties:

.children property, an array containing a number of subtrees
.addChild() method, takes any value, sets that as the target of a node, and adds that node as a child of the tree
A .contains() method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
*/

treeNode = {
  value: null,
  children: [ ]
}

treeNode = {
  value: null,
  children: