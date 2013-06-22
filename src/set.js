var makeSet = function(){
  var set = Object.create(makeSet.setMethods);
  set._storage = undefined;
  return set;
};

makeSet.setMethods = {

  add : function(){
  },

  contains : function(){
  },

  remove : function(){
  }

};