function ViewTests() {

  let mockList = {
    allNotes: function() { return ['mock note text', 'another mock notes text'] }
  };
  let mockEmptyList = {
    allNotes: function() { return [] }
  };

  
  (function() {
    let view = new View(mockList)
    test.isEqual(view.html(), '<ul><li>mock note text</li><li>another mock notes text</li></ul>')
  })();
  
  (function() {
    let view = new View(mockEmptyList)
    test.isEqual(view.html(), '<ul></ul>')
  })();
  
}

ViewTests()
