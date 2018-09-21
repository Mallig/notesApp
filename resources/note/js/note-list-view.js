(function(exports) {
  function View(list) {
    this.list = list
  }

  View.prototype.html = function() {
    var arrayOfNotes = this.list.allNotes()
    var result = "<ul>"
    arrayOfNotes.forEach(function(note) {
      result += `<li>${note}</li>`
    });
    result += "</ul>"
    return result;
  }

  exports.View = View
})(this)
