(function(exports) {
  function NoteController(notelist) {
    this.list = notelist
    this.view = new View(this.list)
  }

  NoteController.prototype.addNote = function(string) {
    this.list.createNote(string)
  }

  NoteController.prototype.updateView = function() {
    newhtml = this.view.html()
    document.getElementById('app').innerHTML = newhtml
  }

  exports.NoteController = NoteController
})(this)
