controller = new NoteController(noteList);

test.isEqual(controller.constructor.name, "NoteController")

controller.updateView()
html = document.getElementById('app').innerHTML
test.isEqual(html, '<ul><li>first note</li><li>secondNote</li></ul>')
