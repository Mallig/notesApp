(function(exports) {
  function NoteList() {
    this.notes = []
  }

  NoteList.prototype.store = function(note) {
    this.notes.push(note)
  }

  NoteList.prototype.createNote = function(content) {
    let note = new Note(content)
    this.store(note)
  }

  exports.NoteList = NoteList

})(this)
