(function(exports) {
  function ListView(list) {
    this.list = list
  }

  ListView.prototype.html = function() {
    var arrayOfNotes = this.list.allNotes()
    var result = "<ul>"
    arrayOfNotes.forEach(function(note) {
      result += `<li>${note.substr(0, 20)}</li>`
    });
    result += "</ul>"
    return result;
  }

  exports.ListView = ListView
})(this)
