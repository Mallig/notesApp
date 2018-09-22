(function(exports) {
  function NoteList() {
    this.notes = []
  }

  NoteList.prototype.store = function(note) {
    this.notes.push(note)
  }

  NoteList.prototype.createNote = function(content) {
    this.store(note(content))
  }

  NoteList.prototype.allNotes = function() {
    let notes_text = []
    this.notes.forEach(function(note) {
      notes_text.push(note.text())
    })
    return notes_text
  }

  exports.NoteList = NoteList

})(this)
