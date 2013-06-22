var HashTable = function(limit) {
  this._limit = limit || 8;
  this._storage = makeLimitedArray(this._limit);
  this._slotsUsed = 0;
};

HashTable.prototype.insert = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var subIndex = this.getKeySubIndex(key, index);
  var allKeyValuePairsCorrespondingToThisIndex = this._storage.get(index);
  var newPair = [key, value];

  if(this.checkUsage()) {
    console.log("Extending hash table.");
    this._extend();
  }

  if(subIndex<0) {                // if inserting a unique key
    if(Array.isArray(allKeyValuePairsCorrespondingToThisIndex)) {     // if there is another key using the same index/slot
      this._storage.get(index).push(newPair);
    } else {                                                    // inserting into a new index
      this._storage.set(index, [[key, value]]);
      this._slotsUsed++;
    }
  } else {                        // if overwriting (i.e. key not unique)
    if(value===undefined) {                             // if deleting
      allKeyValuePairsCorrespondingToThisIndex.splice(subIndex,1);
      if(allKeyValuePairsCorrespondingToThisIndex.length===0) {
        this._slotsUsed--;
      }
    } else {                                            // if overwriting
      allKeyValuePairsCorrespondingToThisIndex.splice(subIndex,1,newPair);
    }
    this._storage.set(index,allKeyValuePairsCorrespondingToThisIndex);      // actual insertion of array of pairs into array
  }
};

HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var subIndex = this.getKeySubIndex(key,index);
  var allKeyValuePairsCorrespondingToThisIndex = this._storage.get(index);

  if(subIndex>-1) {
    return allKeyValuePairsCorrespondingToThisIndex[subIndex][1];
  }
  console.log("Key " , key , " not found in hash.");
  return undefined;
};

HashTable.prototype.getKeySubIndex = function(key, index){
  var allKeyValuePairsCorrespondingToThisIndex = this._storage.get(index);

  if(typeof allKeyValuePairsCorrespondingToThisIndex !== 'undefined') {
    for(var i=0; i<allKeyValuePairsCorrespondingToThisIndex.length; i++) {
      if(allKeyValuePairsCorrespondingToThisIndex[i][0]===key) {
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
  var usage = this._slotsUsed/this._limit;
  if(usage >= 0.75) {
    console.log("Used " , usage , " of hash table.");
    return true;
  }
  return false;
};

HashTable.prototype._extend = function() {
  if(this.checkUsage()===false) {
    console.log("Do not need to extend hash table.");
    return;
  }
  else {
    this._slotsUsed = 0;
    var oldStorage = this._storage;
    var oldLimit = this._limit;

    this._limit = this._limit*2;
    this._storage = makeLimitedArray(this._limit);

    //var that = this;

    for(var i=0; i<oldLimit; i++) {
      var pairsArray = oldStorage.get(i);
      if(Array.isArray(pairsArray)) {
        _.each(pairsArray, function(pair) {
          this.insert(pair[0],pair[1]);
        }, this);
      }
    }
    console.log("Hash table resized.");
  }
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
// var getIndexBelowMaxForKey = function(str, max){

// Phillip's