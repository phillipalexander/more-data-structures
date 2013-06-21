var HashTable = function(){
  this._limit = 8;

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(){
};

HashTable.prototype.retrieve = function(){
};

HashTable.prototype.remove = function(){
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
// var getIndexBelowMaxForKey = function(str, max){

// Phillip's

var getHashFromKey = function (key) {
  var hashOfKey;
  // some 'code'
  return hashOfKey;
};

var getKeyValuePairsThatMatchHashedKey = function (hashedKey) {
  var KeyValuePairsThatMatchHashedKey;
  // some 'code'
  return KeyValuePairsThatMatchHashedKey;
};

var lookupValueFromKey = function (key) {
  var hashedKey = getHashFromKey(key);
  var keyValuePairs = getKeyValuePairsThatMatchHashedKey(hashedKey);
  if (keyValuePairs > 1) {
    for (var i = 0; i < keyValuePairs.length; i++) {
      if (keyValuePairs[i].key === key) {
        return keyValuePairs[i].value;
      }
    }
  } else {
    return keyValuePairs.value;
  }
};