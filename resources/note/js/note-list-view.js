(function(exports) {
  function View(list) {
    this.list = list
  }

  View.prototype.html = function() {
    arrayOfNotes = this.list.notes
    result = "<ul>"
    arrayOfNotes.forEach(function(note) {
      result += `<li>${note.text()}</li>`
    });
    result += "</ul>"
    return result;
  }

  exports.View = View
})(this)
