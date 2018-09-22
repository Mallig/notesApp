function SingleNoteViewTests() {

  let mockNote = {
    text: function() { return 'mock note' }
  };

  let noteView = new NoteView(mockNote);

  (function() {
    test.isEqual(noteView.html(), '<div>mock note</div>')
  })();

}

SingleNoteViewTests();
