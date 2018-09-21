(function(exports) {
  function NoteController(notelist, noteView) {
    this.list = notelist
    this.view = noteView
  }

  NoteController.prototype.addNote = function(string) {
    this.list.createNote(string)
  }

  NoteController.prototype.updateView = function(element) {
    var newhtml = this.view.html();
    element.innerHTML = newhtml
  }

  exports.NoteController = NoteController
})(this)
