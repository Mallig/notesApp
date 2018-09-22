(function(exports) {
  function NoteController(notelist, listView) {
    this.list = notelist
    this.view = listView
  }

  NoteController.prototype.addNote = function(string) {
    this.list.createNote(string)
    this.updateView()
  }

  NoteController.prototype.updateView = function(element = document.getElementById('app')) {
    var newhtml = this.view.html();
    element.innerHTML = newhtml
  }

  exports.NoteController = NoteController
})(this)
