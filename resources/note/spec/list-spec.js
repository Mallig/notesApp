noteList = new NoteList()

test.isEqual(noteList.constructor.name, "NoteList")

noteList.store(firstNote)
test.isIn(noteList.allNotes(), firstNote.text())

noteList.createNote('secondNote')
test.isIn(noteList.allNotes(), 'secondNote')
