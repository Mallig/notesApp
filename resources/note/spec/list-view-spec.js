function ViewTests() {

  let mockNote = {
    text: function() { return 'mock note text'},
    id:   function() { return 0 }
  }
  let mockSecondNote = {
    text: function() { return 'another mock notes text'},
    id:   function() { return 1 }
  }

  let mockList = {
    allNotes: function() { return [mockNote, mockSecondNote] }
  };
  let mockEmptyList = {
    allNotes: function() { return [] }
  };

  
  (function() {
    let view = new ListView(mockList)
    test.isEqual(view.html(), '<ul><li><a href="#notes/0">mock note text</a></li><li><a href="#notes/1">another mock note...</a></li></ul>')
  })();
  
  (function() {
    let view = new ListView(mockEmptyList)
    test.isEqual(view.html(), '<ul></ul>')
  })();
  
}

ViewTests()
