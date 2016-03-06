describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should handle numbers as well as strings', function() {
    set.add(9);
    set.add(10);
    set.remove(9);
    expect(set.contains(10)).to.equal(true);
  });

  it('should handle all types', function() {
    set.add([1,2,3]);
    set.add({x: 9});
    set.remove({x: 9});
    expect(set.contains({x:9})).to.equal(false);
  });
});
