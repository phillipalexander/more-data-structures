describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();

    set.initTestNames = function() {
      this.add('candi');
      this.add('angel');
      this.add('sheri');
      this.add('bunni');
      this.add('saphire');
      this.add('ruby');
    };
  });

  describe("overview", function() {
    // overview
    it("should have methods named 'add', 'contains', and 'remove'", function() {
      expect(set.add).toEqual(jasmine.any(Function));
      expect(set.contains).toEqual(jasmine.any(Function));
      expect(set.remove).toEqual(jasmine.any(Function));
    });
  });
  
  //add method
  describe(".add", function() {
    it("should add a value to the set", function() {
      expect(set.add("bob")).toEqual({
        "bob": true
      });
    });
    it("should convert input numbers to strings and store them as strings", function() {
      expect(set.add(5)).toEqual({
        '5': true
      });
    });
    it("should convert input booleans to strings and store them as strings", function() {
      expect(set.add(true)).toEqual({
        'true': true
      });
    });
    it("should add multiple values to the set", function() {
      set.add(5);
      expect(set.add(3)).toEqual({
        '5': true,
        '3': true
      });
    });
    it("should, given a value that already exists in the set, not create a duplicate", function() {
      set.add(5);
      set.add(4);
      expect(set.add(5)).toEqual({
        '5': true,
        '4': true
      });
    });
  });


  describe(".remove", function() {
    it("should remove a value from a set", function() {
      set.initTestNames();
      expect(set.remove('sheri')).toEqual({
        "candi": true,
        "angel": true,
        "bunni": true,
        "saphire": true,
        "ruby": true
      });
    });
    it("should, if provided an input, will stringify the input and remove the corresponding string value from the set", function() {
      set.add(5);
      set.add(4);
      set.add(3);
      set.add(2);
      expect(set.remove(5)).toEqual({
        "4": true,
        "3": true,
        "2": true
      });
    });
    it("should not remove anything if there is no corresponding value to remove", function() {
      set.add(5);
      set.add(4);
      set.add(3);
      set.add(2);
      expect(set.remove(true)).toEqual({
        "5": true,
        "4": true,
        "3": true,
        "2": true
      });
    });
  });


  describe(".contains", function() {
    it("should return true if a value is in a set", function() {
      set.initTestNames();
      expect(set.contains('sheri')).toEqual(true);
    });
    it("should return false when called on an empty set", function() {
      expect(set.contains('sheri')).toEqual(false);
    });
    it("should return false if a value is not in a set", function() {
      set.initTestNames();
      expect(set.contains('Edith')).toEqual(false);
    });
    it("should return false if a value has been deleted from a set", function() {
      set.initTestNames();
      set.remove('angel');
      expect(set.contains('angel')).toEqual(false);
    });
    it("should still return true when called on an existing value after set.remove() has been called on an a different item in the set", function() {
      set.initTestNames();
      set.remove('angel');
      expect(set.contains('sheri')).toEqual(true);
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