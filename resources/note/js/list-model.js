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
    return this.notes
  }

  exports.NoteList = NoteList

})(this)
