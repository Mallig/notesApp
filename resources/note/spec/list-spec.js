function ListTests() {

  let noteList = new NoteList();
  let mockNote = {
    text: function() { return 'mock note' }
  };

  (function() {
    test.isEqual(noteList.constructor.name, "NoteList")
  })();
  
  (function() {
    noteList.store(mockNote)
    test.isIn(noteList.allNotes(), mockNote)
  })();

  (function() {
    noteList.createNote('mock second note')
    test.isIn(noteList.allNotes()[1].text(), 'mock second note')
  })();

}

ListTests();
