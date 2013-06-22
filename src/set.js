var makeSet = function() {
  var set = Object.create(makeSet.setMethods);
  set._storage = [];
  return set;
};

makeSet.setMethods = {

  add: function(value) {
    if (this.contains(value) === false) {
      this._storage.push(value);
    }
    return this._storage;
  },

  contains: function(value) {
    if (this._getIndex(value) < 0) {
      return false;
    }
    return true;
  },

  remove: function() {},

  _getIndex: function(value) {
    for (var i = 0; i < this._storage.length; i++) {
      if (this._storage[i] === value) {
        return i;
      }
    }
    return -1;
  }

};