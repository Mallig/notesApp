(function(exports) {

  function Test() { 
    this.log = new Log()
  }

  Test.prototype.isEqual = function(a, b) {
    // this.log.store(a, b, 'equal')
    return a === b;
  };

  Test.prototype.isTruthy = function(a) {
    // this.log.store(a, 'truthy')
    return Boolean(a) === true;
  };

  Test.prototype.isFalsy = function(a) {
    // this.log.store(a, 'falsy')
    return Boolean(a) === false;
  }

  Test.prototype.isIn = function(a, b) {
    // this.log.store(a, b, 'in')
    return a.includes(b);
  };
  
  exports.Test = Test;

})(this)
