// assert.isTruthy(undefined);

// assert.isEqual(1 + 1, 3);
// assert.isEqual(1 + 1, 2);
// assert.isEqual(1 + 1, 3);
// assert.isEqual(1 + 1, 2);
// assert.isEqual(1 + 1, 5);
// assert.isTruthy('');
// assert.isTruthy('hi');
// assert.isIncluded([1,2,3], 5);
// assert.isIncluded([1,2,3], 2);
// assert.isIncluded('hello', 'el');
// assert.isIncluded('hello', 'zzz');
// assert.isEqual(1 + 1, 5);

firstNote = new Note("first note")

assert.isEqual(firstNote.text(), "first note")

noteList = new NoteList()
noteList.store(firstNote)
noteList.createNote('secondNote')

assert.isIncluded(noteList.notes, firstNote)
assert.isEqual(noteList.notes[1].text(), 'secondNote')

assert.showLog()
