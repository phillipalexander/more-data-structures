describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

// overview

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).toEqual(jasmine.any(Function));
    expect(set.contains).toEqual(jasmine.any(Function));
    expect(set.remove).toEqual(jasmine.any(Function));
  });

 //add method
  describe(".add", function() {
    it("should add a value to the set", function() {
      expect(set.add("bob")).toEqual(["\"bob\""]);
    });
    it("should convert input numbers to strings and store them as strings", function() {
      expect(set.add(5)).toEqual(['5']);
    });
    it("should convert input booleans to strings and store them as strings", function() {
      expect(set.add(true)).toEqual(['true']);
    });
    it("should add multiple values to the set", function() {
      set.add(5);
      expect(set.add(3)).toEqual(['5','3']);
    });
  });
});







/*

A set class, in prototypal style, with the following properties:
An .add() method, takes any string and adds it to the set
A .contains() method, takes any string and returns a boolean reflecting whether it can be found in the set
A .remove() method, takes any string and removes it from the set, if present
Note: Sets should not use up any more space than necessary. Once a value is added to a set, adding it a second time should not increase the size of the set.
Note: Until the extra credit section, your sets should handle only string values.

*/