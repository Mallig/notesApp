(function(exports) {
  function NoteList() {
    this.notes = []
  }

  NoteList.prototype.store  = function(note) {
    this.notes.push(note)
  }

  exports.NoteList = NoteList

})(this)
