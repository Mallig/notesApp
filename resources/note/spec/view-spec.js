view = new View(noteList)


test.isEqual(view.html(), '<ul><li>first note</li><li>secondNote</li></ul>')

view = new View(new NoteList())

test.isEqual(view.html(), '<ul></ul>')
