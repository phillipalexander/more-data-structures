describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = new HashTable();
  });

  it("should have methods named 'insert' and 'retrieve' and 'remove'", function() {
    expect(hashTable.insert).toEqual(jasmine.any(Function));
    expect(hashTable.retrieve).toEqual(jasmine.any(Function));
    expect(hashTable.remove).toEqual(jasmine.any(Function));
  });

  it("should be able to insert a key:value pair and retrieve the value using the key", function() {
    hashTable.insert('dogs',15);
    hashTable.insert('penguin','really cool!');   // tests to make sure it's not just popping any key
    expect(hashTable.retrieve('dogs')).toEqual(15);
  });

  it("given a key:value pair, remove the pair and return the value", function() {
    hashTable.insert('dogs',15);
    hashTable.insert('whale',666);
    hashTable.insert('penguin','really cool!');   // tests to make sure it's not just popping any key
    expect(hashTable.remove('whale')).toEqual(666);
    expect(hashTable.retrieve('whale')).toEqual(undefined);
  });

  // test for lack of collisions

  // add more tests here to test the functionality of hashTable
});

/*
A hashTable class, in pseudoclassical style:
First: Play with each of the helper functions provided to get a sense of what they do.
You will use the provided hash function to convert any key into an array index. Try interacting with it from the console first.
A limitedArray helper has been provided for you. Use it to store all inserted values. Try interacting with it from the console first.
Make the following properties appear on all instances:
An .insert() method
A .retrieve() method
A .remove() method
Once you have a working, naive hash table, make sure it handles collisions correctly. Test this by reducing the size limit for storage to 1 and seeing if the hash table can keep track of 2 different key-value pairs.
*/