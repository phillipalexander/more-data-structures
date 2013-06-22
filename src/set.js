var makeSet = function() {
  var set = Object.create(makeSet.setMethods);
  //set._storage = [];
  set._storage = {};
  return set;
};

makeSet.setMethods = {

  // add: function(value) {
  //   value += '';
  //   if (this.contains(value) === false) {
  //     this._storage.push(value);
  //   }
  //   return this._storage;
  // },

  add : function(value) {
    value += '';
    this._storage[value] = true;
    return this._storage;
  },

  contains: function(value) {
    value += '';
    return this._storage[value] || false;
  },

  remove: function(value) {
    value += '';
    delete this._storage[value];
    return this._storage;
  }


  // remove: function(value) {
  //   value += '';
  //   var index = this._getIndex(value);
  //   if (index > -1) {
  //     this._storage.splice(index, 1);
  //   }
  //   return this._storage;
  // },

};