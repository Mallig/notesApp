function NoteTests() {

  let firstNote = note("first note");
  let secondNote = note("second note");

  (function() {
    test.isEqual(firstNote.constructor.name, "Note")
  })();

  (function() {
    test.isEqual(firstNote.text(), "first note")
  })();

  (function() {
    test.isNotEqual(firstNote.idNum(), secondNote.idNum())
  })();

}

NoteTests()
