(function(exports) {

  function Test() { }

  Test.prototype.isEqual = function(a, b) {
    return a === b;
  };

  Test.prototype.isTrue = function(a) {
    return Boolean(a) === true;
  };

  Test.prototype.isFalse = function(a) {
    return Boolean(a) === false;
  }

  Test.prototype.isIn = function(a, b) {
    return a.includes(b);
  };

  exports.Test = Test;

})(this)
