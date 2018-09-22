(function(exports) {
  
  var id = 0

  function Note(content) {
    this.content = content
    this.id = id++
  };

  Note.prototype.text = function() {
    return this.content
  };

  Note.prototype.idNum = function() {
    return this.id
  };

  function note(content) {
    return new Note(content)
  };

  exports.note = note;
})(this)
