describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  it("should return a boolean if the list contains a value", function() {
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToTail(3);
    debugger;
    expect(linkedList.contains(3)).toEqual(true);
    expect(linkedList.contains(4)).toEqual(false);
    //expect(linkedList.contains).toEqual(jasmine.any(Function));
  });



  // add more tests here to test the functionality of linkedList
});