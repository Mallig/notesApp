function NoteTests() {

  let firstNote = note("first note");

  (function() {
    test.isEqual(firstNote.constructor.name, "Note")
  })();

  (function() {
    test.isEqual(firstNote.text(), "first note")
  })();

}

NoteTests()
