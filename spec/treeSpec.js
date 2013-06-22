describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('_value' in tree).toBe(true);
  });

  it("should be able to add a node, specify its value, and define the node as a child to the tree", function() {
    tree.addChild(5);
    expect(tree._children[0]._value).toEqual(5);
  });

    it("should be able to test for a node value anywhere within a tree using the contains() method", function() {
    tree.addChild(5);
    tree.addChild(7);
    tree.addChild(9);
    debugger;
    expect(tree.contains(7)).toEqual(true);
  });

  // Add more tests here to test the functionality of tree.
});