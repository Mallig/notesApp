(function(exports) {
  function ListView(list) {
    this.list = list
  }

  ListView.prototype.html = function() {
    var arrayOfNotes = this.list.allNotes()
    var result = "<ul>"
    arrayOfNotes.forEach(function(note) {
      var text = note.text();
      if (text.length > 20) {
        text = text.substr(0, 17).concat('...')
      };
      result += `<li><a href="#notes/${note.idNum()}">${text}</a></li>`
    });
    result += "</ul>"
    return result;
  }

  exports.ListView = ListView
})(this)
