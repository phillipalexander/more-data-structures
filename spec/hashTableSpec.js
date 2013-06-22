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
    hashTable.insert('a','avengers');
    hashTable.insert('b','batman');
    hashTable.insert('c','catch me if you can');
    hashTable.insert('d','dances with wolves');
    hashTable.insert('aa','aadvark');
    hashTable.insert('bb','bat');
    hashTable.insert('cc','cockroach');
    hashTable.insert('dd','duck');
    expect(hashTable.retrieve('b')).toEqual('batman');
    expect(hashTable.retrieve('g')).toEqual(undefined);
  });

  it("given a key:value pair, it will overwrite existing key:value pairs", function() {
    hashTable.insert('a','avengers');
    hashTable.insert('b','batman');
    hashTable.insert('c','catch me if you can');
    hashTable.insert('d','dances with wolves');
    hashTable.insert('a','atomic bomb');
    expect(hashTable.retrieve('a')).toEqual('atomic bomb');
  });

  it("should given a key:value pair, remove the pair and return the value", function() {
    hashTable.insert('dogs',15);
    hashTable.insert('whale',666);
    hashTable.insert('penguin','really cool!');   // tests to make sure it's not just popping any key
    expect(hashTable.remove('whale')).toEqual(666);
    expect(hashTable.retrieve('whale')).toEqual(undefined);
  });

  // test for lack of collisions

  it("should be able to account for collisions", function() {
    hashTable.insert('a','avengers');
    hashTable.insert('b','batman');
    hashTable.insert('c','catch me if you can');
    hashTable.insert('d','dances with wolves');
    hashTable.insert('aa','aadvark');
    hashTable.insert('bb','bat');
    hashTable.insert('cc','cockroach');
    hashTable.insert('dd','duck');
    hashTable.insert('aaa','alexandria');
    hashTable.insert('bbb','boston');
    hashTable.insert('ccc','chicago');
    hashTable.insert('ddd','durham');
    //debugger;
    expect(hashTable.retrieve('b')).toEqual('batman');
  });

  it("should be able to account for collisions", function() {
    hashTable.insert('a','avengers');
    hashTable.insert('b','batman');
    hashTable.insert('c','catch me if you can');
    hashTable.insert('d','dances with wolves');
    hashTable.insert('aa','aadvark');
    hashTable.insert('bb','bat');
    hashTable.insert('cc','cockroach');
    hashTable.insert('dd','duck');
    hashTable.insert('aaa','alexandria');
    hashTable.insert('bbb','boston');
    hashTable.insert('ccc','chicago');
    hashTable.insert('ddd','durham');
    expect(hashTable.retrieve('b')).toEqual('batman');
  });

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