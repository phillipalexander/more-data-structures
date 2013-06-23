describe("dblLinkedList", function() {
  var dblLinkedList;

  beforeEach(function() {
    dblLinkedList = list();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(dblLinkedList)).toContain("head");
    expect(Object.keys(dblLinkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(dblLinkedList.addToTail).toEqual(jasmine.any(Function));
    expect(dblLinkedList.removeHead).toEqual(jasmine.any(Function));
    expect(dblLinkedList.contains).toEqual(jasmine.any(Function));
  });

  it("should remove and return the head", function() {
    dblLinkedList.addToTail(1);
    dblLinkedList.addToTail(2);
    dblLinkedList.addToTail(3);
    expect(dblLinkedList.removeHead()).toEqual(1);
    expect(dblLinkedList.removeHead()).toEqual(2);
    dblLinkedList.addToTail(4);
    expect(dblLinkedList.removeHead()).toEqual(3);
  });

  it("should return a boolean if the list contains a value", function() {
    dblLinkedList.addToTail(1);
    dblLinkedList.addToTail(2);
    dblLinkedList.addToTail(3);
    //debugger;
    expect(dblLinkedList.contains(2)).toEqual(true);
    expect(dblLinkedList.contains(4)).toEqual(false);
  });



  // add more tests here to test the functionality of dblLinkedList
});