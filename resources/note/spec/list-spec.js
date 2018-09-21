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
    test.isIn(noteList.allNotes(), mockNote.text())
  })();

  (function() {
    noteList.createNote('secondNote')
    test.isIn(noteList.allNotes(), 'secondNote')
  })();

}

ListTests();
