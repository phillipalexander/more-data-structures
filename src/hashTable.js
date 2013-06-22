var HashTable = function(limit) {
  this._limit = limit || 8;
  this._storage = makeLimitedArray(this._limit);
  this._count = 0;
};

// HashTable.prototype.insert = function(key, value){
//   var index = getIndexBelowMaxForKey(key, this._limit);
//   this._storage.set(index, value);
// };

HashTable.prototype.insert = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var subIndex = this.getKeySubIndex(key, index);
  var allKeyValuePairsThatMatchHashedKey = this._storage.get(index);

  if (allKeyValuePairsThatMatchHashedKey === undefined) {   // if it is completely new
    this._storage.set(index, [[key, value]]);
    this._count++;
  } else if(subIndex>-1) {                 // if there's an exisiting key
    if(value===undefined) {
      allKeyValuePairsThatMatchHashedKey.splice(subIndex,1);
      if(allKeyValuePairsThatMatchHashedKey.length===0) {
        this._count--;
      }
    }
    else {
      var newPair = [key, value];
      allKeyValuePairsThatMatchHashedKey.splice(subIndex,1,newPair);
    }
    this._storage.set(index,allKeyValuePairsThatMatchHashedKey);
  } else {
    this._storage.get(index).push([key, value]);
  }
};

HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var subIndex = this.getKeySubIndex(key,index);
  var allKeyValuePairsThatMatchHashedKey = this._storage.get(index);

  if(subIndex>-1) {
    return allKeyValuePairsThatMatchHashedKey[subIndex][1];
  }
  console.log("Key " , key , " not found in hash.");
  return undefined;
};

HashTable.prototype.getKeySubIndex = function(key, index){
  var allKeyValuePairsThatMatchHashedKey = this._storage.get(index);

  if(typeof allKeyValuePairsThatMatchHashedKey !== 'undefined') {
    for(var i=0; i<allKeyValuePairsThatMatchHashedKey.length; i++) {
      if(allKeyValuePairsThatMatchHashedKey[i][0]===key) {
        return i;
      }
    }
  }
  return -1;
};

HashTable.prototype.remove = function(key) {
  var valueFromRemoved = this.retrieve(key);
  this.insert(key, undefined);
  return valueFromRemoved;
};

HashTable.prototype.checkUsage = function() {
  var usage = this._count/this._limit;
  if(usage >= 0.75) {
    console.log("Used " , usage , " of hash table.");
    return true;
  }
  return false;
};

HashTable.prototype.extend = function() {
  if(this.checkUsage()===false) {
    console.log("Do not need to extend hash table.");
    return;
  }
  else {
    var oldLimit = this._limit;
    newHash = makeLimitedArray(oldLimit*2);

    for(var i=0; i<oldLimit; i++) {
      var subArr = this._storage.get(i);
      if(Array.isArray(subArr)) {
        _.each(subArr, function(pair) {
          //newHash.insert(pair[0],pair[1]);      // can't use insert because it's not defined
          console.log(pair);
        });
      }
    }
  }
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
// var getIndexBelowMaxForKey = function(str, max){

// Phillip's