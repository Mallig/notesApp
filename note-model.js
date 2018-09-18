(function(exports) {
  
  function Note(content) {
    this.content = content
  };

  Note.prototype.text = function() {
    return this.content
  };

  // function note(content) {
  //   return new Note(content)
  // };

  exports.Note = Note

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
