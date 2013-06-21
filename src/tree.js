var makeTree = function(){
  var newTree = {
    _value : undefined,
    _children : [],
    addChild : treeMethods.addChild,
    contains : treeMethods.contains
  };

  // console.log(newTree);
  //return _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {
  addChild : function(value){
    var newNode = makeTree();
    newNode._value = value;
    this._children.push(newNode);
    return newNode;
  },

  contains : function(value){

      //subroutine
      var checkNodeForValue = function(node, target) {
        var result = false;
        if(node._value === target) {
          result = true;
          return result;
        } else if (node._children.length === 0) {
          return result;
        } else {
          for (var i = 0; i < node._children.length; i++) {
            result = result || checkNodeForValue(node._children[i], target);
          }
        }
        return result;
      };
      return checkNodeForValue(this, value);
    }

  };


/*
A tree class, in functional with shared methods style, with the following properties:

.children property, an array containing a number of subtrees
.addChild() method, takes any value, sets that as the target of a node, and adds that node as a child of the tree
A .contains() method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
*/