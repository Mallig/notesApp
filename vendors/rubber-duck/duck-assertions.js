(function(exports) {

  function Test() { 
    this.log = []
  }

  Test.prototype.isEqual = function(a, b) {
    if (a === b) {
      this.log.push('PASS: ' + a + ' is equal to ' + b)
    } else {
      this.log.push('FAIL: ' + a + ' is not equal to ' + b)
    }
  };

  Test.prototype.isTruthy = function(a) {
    if (Boolean(a) === true) {
      this.log.push('PASS: ' + a + ' is truthy')
    } else {
      this.log.push('FAIL: ' + a + ' is not truthy')
    }
  };

  Test.prototype.isFalsy = function(a) {
    if (Boolean(a) === false) {
      this.log.push('PASS: ' + a + ' is falsy')
    } else {
      this.log.push('FAIL: ' + a + ' is not falsy')
    }
  }

  Test.prototype.isIn = function(a, b) {
    if (a.includes(b)) {
      this.log.push('PASS: ' + b + ' is included in ' + a)
    } else {
      this.log.push('FAIL: ' + b + ' is not included in ' + a)
    }
  };

  Test.prototype.viewLog = function() {
    this.log.forEach(function(testResult) {
      console.log(testResult)
    })
  }
  
  exports.Test = Test;

})(this)
