var HashTable = function() {
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

// HashTable.prototype.insert = function(key, value){
//   var index = getIndexBelowMaxForKey(key, this._limit);
//   this._storage.set(index, value);
// };

HashTable.prototype.insert = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  console.log("i index ", index);
  var allKeyValuePairsThatMatchHashedKey = this._storage.get(index);
  if (allKeyValuePairsThatMatchHashedKey === undefined) {
    this._storage.set(index, [[key, value]]);
  } else {
    this._storage.get(index).push([key, value]);
  }
};

HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var allKeyValuePairsThatMatchHashedKey = this._storage.get(index);

  if(typeof allKeyValuePairsThatMatchHashedKey !== 'undefined') {
    _.each(allKeyValuePairsThatMatchHashedKey, function(pair) {
      if(pair[0]===key) {
        console.log(pair[1]);
        return pair[1];
      }
    });
  }
  else {
    console.log("Key not existent.");
    return undefined;
  }
};

HashTable.prototype.remove = function(key) {
  var valueFromRemoved = this.retrieve(key);
  this.insert(key, undefined);
  return valueFromRemoved;
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
// var getIndexBelowMaxForKey = function(str, max){

// Phillip's