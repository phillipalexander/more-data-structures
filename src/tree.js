var makeTree = function(value){
  var newTree = {
    _value : value,
    _children : [],
    addChild : treeMethods.addChild,
    contains : treeMethods.contains
  };

  //return _.extend(newTree, treeMethods);  // if you wanted to use extend instead of declaring independently
  return newTree;
};

var treeMethods = {
  addChild : function(value){
    return this._children.push(makeTree(value));
  },

  contains : function(value){
    var result = false;

    if (this._value === value) {
      return true;
    }
    for (var i = 0; i < this._children.length; i++) {
      result = result || this._children[i].contains(value);
    }
    return result;
  }

};


/*
A tree class, in functional with shared methods style, with the following properties:

.children property, an array containing a number of subtrees
.addChild() method, takes any value, sets that as the target of a node, and adds that node as a child of the tree
A .contains() method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
*/