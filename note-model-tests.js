
firstNote = new Note("first note")

assert.isEqual(firstNote.text(), "first note")

noteList = new NoteList()
noteList.store(firstNote)
noteList.createNote('secondNote')

assert.isIncluded(noteList.notes, firstNote)
assert.isEqual(noteList.notes[1].text(), 'secondNote')

view = new View(noteList);

assert.isEqual(view.html(), '<ul><li>first note</li><li>secondNote</li></ul>')

emptyList = new NoteList()
viewEmpty = new View(emptyList);
assert.isEqual(viewEmpty.html(), '<ul></ul>')


assert.showLog()



















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
