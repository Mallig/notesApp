(function(exports) {

  function Log() { 
    this.log = []
  }

  Log.prototype.store = function(testResult) {
    this.log.push(testResult)
  }

  Log.prototype.testStatus = function() {
    
  }

  exports.Log = Log
})(this)
