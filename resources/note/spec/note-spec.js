firstNote = note("first note")

test.isEqual(firstNote.constructor.name, "Note")
test.isEqual(firstNote.text(), "first note")
