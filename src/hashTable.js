var HashTable = function() {
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._count = 0;
};

// HashTable.prototype.insert = function(key, value){
//   var index = getIndexBelowMaxForKey(key, this._limit);
//   this._storage.set(index, value);
// };

HashTable.prototype.insert = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var allKeyValuePairsThatMatchHashedKey = this._storage.get(index);
  if (allKeyValuePairsThatMatchHashedKey === undefined) {
    this._storage.set(index, [[key, value]]);
  } else {
    this._storage.get(index).push([key, value]);
    console.log(this._storage.get(index));
  }
  this._count++;
};

HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var allKeyValuePairsThatMatchHashedKey = this._storage.get(index);

  if(typeof allKeyValuePairsThatMatchHashedKey !== 'undefined') {
    for(var i=0; i<allKeyValuePairsThatMatchHashedKey.length; i++) {
      if(allKeyValuePairsThatMatchHashedKey[i][0]===key) {
        return allKeyValuePairsThatMatchHashedKey[i][1];
      }
    }
  }
  else {
    console.log("Key not existent.");
    return undefined;
  }
};

HashTable.prototype.remove = function(key) {
  var valueFromRemoved = this.retrieve(key);
  this.insert(key, undefined);
  this._count--;
  return valueFromRemoved;
};

HashTable.prototype.checkUsage = function() {
  var usage = this._count/this._limit;
  if(usage >= 0.75) {
    console.log("Used " , usage , " of hash table.");
    return false;
  }
  return false;
};

HashTable.prototype.extend = function() {
  if(this.checkUsage()===false) {
    console.log("Do not need to extend hash table.");
    return;
  }
  else {
    this._limit = this._limit*2;
    newHash = makeLimitedArray(this._limit);

    _.each(this._storage, function(element, index) {
      if(Array.isArray(element)) {
        console.log("Array found at position " , index);
      }
    });
  }
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
// var getIndexBelowMaxForKey = function(str, max){

// Phillip's