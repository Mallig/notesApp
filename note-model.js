(function(exports) {
  function Note(content) {
    this.content = content
  };

  function note(content) {
    return new Note(content)
  };

  Note.prototype.text = function() {
    return this.content
  };

  exports.note = note

})(this)

//
// function Note(content) {
//   var content = content
// };
//
// (function(exports){
//   Note.prototype.text = function() {
//
//   };
// };)
